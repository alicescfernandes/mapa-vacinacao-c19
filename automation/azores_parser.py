import requests
import json
from dateutil.parser import parse
from dateutil.relativedelta import *
import os
from datetime import datetime

acores_file = open("./data/acores_pds.json")
total_items = json.load(acores_file)
acores_file.close()


url = 'https://servicos-sraa.azores.gov.pt/covid19/ee/Default.aspx?s=gtee'

res = requests.get(url)
json_res = res.json()

dados_transformados = {
    "data":json_res["dataAtualizacaoTotal"],
    "total":int(json_res["casosconfirmados"]),
    "total_novos":0,
    "recuperados":int(json_res["recuperacoes"]),
    "recuperados_novos":0,
    "obitos":int(json_res["obitos"]),
    "obitos_var":0,
    "ativos":int(json_res['casosativos']),
    "ativos_var":0,
}

if (len(total_items) > 0):
    dia_anterior = total_items[len(total_items)-1]
    dados_transformados["total_novos"] = dados_transformados["total"] - int(dia_anterior["total"])  
    dados_transformados["recuperados_novos"] = dados_transformados["recuperados"] - int(dia_anterior["recuperados"])  
    dados_transformados["obitos_var"] = dados_transformados["obitos"] - int(dia_anterior["obitos"]  )
    dados_transformados["ativos_var"] = dados_transformados["ativos"] - int(dia_anterior["ativos"]  )


total_items.append(dados_transformados)
owid_file = open("./data/acores_pds.json", "w")
owid_file.write(json.dumps(total_items))
owid_file.close()

last_item = dados_transformados
print(last_item)
acores_last_date = last_item['data']

json_file = open('./data/last-update.json', 'r+')
json_datas = json.load(json_file)
json_datas['dateAcoresCases'] = acores_last_date
json_file.seek(0)
json_file.write(json.dumps(json_datas))
json_file.close()

""" 
# prepare commit
stream = os.popen('git status | grep acores_pds.json')
output = stream.read()
if(output):
    os.system('git add .')
    os.system('git commit -m "covid update - madeira cases - ' + str(acores_last_date)  +  '"')
    os.system('git push')
    os.system('yarn deploy')
 """