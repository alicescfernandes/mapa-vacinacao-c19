import requests
import json

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
