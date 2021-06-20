import requests
import json
from dateutil.parser import parse
from dateutil.relativedelta import *
import os
from datetime import datetime

madeira_file = open("./data/ecdc_filtered.json")
total_items = len(json.load(madeira_file))
madeira_file.close()

url = 'https://www.dnoticias.pt/covid.json'

res = requests.get(url)
json_res = res.json()
json_res.reverse()
filtered_arr = []

index = 0;
for record in json_res:
    dados_transformados = {
        "dia":record["day"],
        "total":int(record["confirmed_cases"]),
        "total_novos":0,
        "recuperados":int(record["total_cases_recovered"]),
        "recuperados_novos":0,
        "obitos":int(record["total_deaths"]),
        "obitos_var":0,
        "ativos":int(record["confirmed_cases"]) - int(record["total_deaths"]) - int(record["total_cases_recovered"]),
        "ativos_var":0,
    }
    if (index > 0):
        dia_anterior = filtered_arr[index-1]
        dados_transformados["total_novos"] = dados_transformados["total"] - dia_anterior["total"]  
        dados_transformados["recuperados_novos"] = dados_transformados["recuperados"] - dia_anterior["recuperados"]  
        dados_transformados["obitos_var"] = dados_transformados["obitos"] - dia_anterior["obitos"]  
        dados_transformados["ativos_var"] = dados_transformados["ativos"] - dia_anterior["ativos"]  
    

    index+=1
    filtered_arr.append(dados_transformados)

if(len(filtered_arr) != total_items):
    owid_file = open("./data/madeira_pds.json", "w")
    owid_file.write(json.dumps(filtered_arr))
    owid_file.close()

    weeks_file = open('./data/weeks.json')
    weeks_data = json.load(weeks_file)

    last_item = filtered_arr[::-1][0];
   
    madeira_cases_date = parse(last_item['dia'])
    json_file = open('./data/last-update.json', 'r+')
    json_datas = json.load(json_file)
    json_datas['dateMadeiraCases'] = madeira_cases_date.strftime('%Y-%m-%d')
    json_file.seek(0)
    json_file.write(json.dumps(json_datas))
    json_file.close()

    # prepare commit
    stream = os.popen('git status | grep madeira_pds.json')
    output = stream.read()
    if(output):
        os.system('git add .')
        os.system('git commit -m "covid update - madeira cases - week ' + str(madeira_cases_date)  +  '"')
        os.system('git push')
        os.system('yarn deploy')
        


