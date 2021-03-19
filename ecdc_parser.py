import requests
import json
from dateutil.parser import parse
from dateutil.relativedelta import *

url = 'https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/json'

res = requests.get(url)
json_res = res.json()
filtered_arr = []

records = json_res['records']

for k in records:
    if(k['ReportingCountry'] == 'PT'):
        filtered_arr.append(k)


owid_file = open("./data/ecdc_filtered.json", "w")
owid_file.write(json.dumps(filtered_arr))
owid_file.close()

last_item = filtered_arr[-1]
weeks_file = open('./data/weeks.json')
weeks_data = json.load(weeks_file)
weeks_file.close()
selected_week = weeks_data[last_item['YearWeekISO']]
ecdc_date = parse(selected_week['to'])
json_file = open('./data/last-update.json', 'r+')
json_datas = json.load(json_file)
json_datas['dateEcdc'] = ecdc_date.strftime('%Y-%m-%d')
json_file.seek(0)
json_file.write(json.dumps(json_datas))
json_file.close()
