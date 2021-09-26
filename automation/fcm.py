import firebase_admin
from firebase_admin import credentials
from firebase_admin import messaging
import datetime
import json
from dateutil.relativedelta import *
import locale
locale.setlocale(locale.LC_ALL, '')


def format_number(n):
    return "{:,d}".format(n).replace(',', ' ')

def pad(n):
    return str(n).zfill(2)

try:
    json_file = open('./automation/fcm-conf.json', 'r+')
    json_datas = json.load(json_file)
except:
    json_datas = json.loads('{"last_update":0}')

last_update = datetime.datetime.fromisoformat(json_datas['last_update'])

# Get the last vaccination date and convert to a format that python understands
vaccines = open('./data/vaccines_dssg.json', 'r')
parsed =  json.load(vaccines)
last_vaccine = parsed[-1]
last_vaccine_date = last_vaccine['data_vac_iso'].replace('Z','')
last_vaccine_date = datetime.datetime.fromisoformat(last_vaccine_date)


if(last_update.date() != last_vaccine_date.date()):
    text = open('./automation/onesignal.txt', 'r')
    text = text.read()
    prev_last_vaccine2 =parsed[-2]
    
    if prev_last_vaccine2['doses'] == None:
        text = open('./automation/onesignal_no_daily.txt', 'r')
        text = text.read()
        text = text.replace("{{total_total}}", format_number(last_vaccine['doses']))
        text = text.replace("{{total_in1}}", format_number(last_vaccine['doses1']))
        text = text.replace("{{total_in2}}", format_number(last_vaccine['doses2']))
    else:
        text = text.replace("{{total_total}}", format_number(last_vaccine['doses']))
        text = text.replace("{{total_in1}}", format_number(last_vaccine['doses1']))
        text = text.replace("{{total_in2}}", format_number(last_vaccine['doses2']))

        text = text.replace("{{novas_total}}", format_number(last_vaccine['doses'] - prev_last_vaccine2['doses']))
        text = text.replace("{{novas_in1}}", format_number(last_vaccine['doses1'] - prev_last_vaccine2['doses1']))
        text = text.replace("{{novas_in2}}", format_number(last_vaccine['doses2'] - prev_last_vaccine2['doses2']))

    cred  = credentials.Certificate("./firebase_account.json")
    firebase_admin.initialize_app(cred)
    messaging = firebase_admin.messaging

    topic = 'covid19'
    message = messaging.Message(
        notification=messaging.Notification(
            title="Os dados da vacinação de {0}/{1}/{2}".format(pad(last_vaccine_date.day),pad(last_vaccine_date.month),last_vaccine_date.year),
            body=text,
        ),
        topic=topic,
    )

    # response = messaging.send(message)
    print(text)

    json_datas['last_update'] = str(last_vaccine_date.date())
    json_file = open('./automation/fcm-conf.json', 'w')
    json_file.write(json.dumps(json_datas))
    json_file.close()


