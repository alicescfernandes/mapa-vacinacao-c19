import requests
import json
url = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
owid_file = open("./data/owid_filter.json", "a")

res = requests.get(url)
json_res = res.json()
data = {
    'prt': [],
    'eun': []
}


for k in json_res:
    if k == 'PRT':
        data['prt'].append(json_res[k])
    if k == 'OWID_EUN':
        data['eun'].append(json_res[k])

owid_file.write(json.dumps(data))
owid_file.close()
