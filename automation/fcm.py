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
current_time = datetime.datetime.now()
try:
    json_file = open('./automation/fcm-conf.json', 'r+')
    json_datas = json.load(json_file)
except:
    json_datas = json.loads('{"last_update":0}')

last_update = datetime.datetime.fromtimestamp(json_datas['last_update'])

if(current_time.date() > last_update.date()):
    text = open('./automation/onesignal.txt', 'r')
    text = text.read()
    vaccines = open('./data/vaccines.json', 'r')
    parsed =  json.load(vaccines)
    last_vaccine = parsed[-1]
    prev_last_vaccine2 =parsed[-3]

    text = text.replace("{{total_total}}", format_number(last_vaccine['Vacinados_Ac']))
    text = text.replace("{{total_in1}}", format_number(last_vaccine['Inoculacao1_Ac']))
    text = text.replace("{{total_in2}}", format_number(last_vaccine['Inoculacao2_Ac']))
  
    text = text.replace("{{novas_total}}", format_number(last_vaccine['Vacinados_Ac'] - prev_last_vaccine2['Vacinados_Ac']))
    text = text.replace("{{novas_in1}}", format_number(last_vaccine['Inoculacao1_Ac'] - prev_last_vaccine2['Inoculacao1_Ac']))
    text = text.replace("{{novas_in2}}", format_number(last_vaccine['Inoculacao2_Ac'] - prev_last_vaccine2['Inoculacao2_Ac']))

    cred  = credentials.Certificate("./firebase_account.json")
    firebase_admin.initialize_app(cred)
    messaging = firebase_admin.messaging

    topic = 'covid19'
    message = messaging.Message(
        notification=messaging.Notification(
            title="Os dados da vacinação de {0}/{1}/{2}".format(pad(current_time.day),pad(current_time.month),current_time.year),
            body=text,
        ),
        topic=topic,
    )

    response = messaging.send(message)
    print('Successfully sent message:', response)

    json_datas['last_update'] = datetime.datetime.now().timestamp()
    json_file = open('./automation/fcm-conf.json', 'w')
    json_file.write(json.dumps(json_datas))
    json_file.close()


