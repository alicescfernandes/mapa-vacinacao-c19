import requests
import json
from dateutil.parser import parse
from dateutil.relativedelta import *

start_date = parse("2020-12-27")
#a = relativedelta(parse("2020-12-20"), parse("2020-12-21"))
#dt = parse("2020-01-27")
#print(a.days > 0)


url = 'https://covid.ourworldindata.org/data/owid-covid-data.json'

res = requests.get(url)
json_res = res.json()
data = {
    'prt': False,
    'eun': False
}


def filter_data(arr):
    filtered_arr = []
    for k in arr:
        date = parse(k['date'])
        if(date >= start_date):

            if(('total_vaccinations' in k) == False):
                k['total_vaccinations'] = None
                print(k['total_vaccinations'])

            if(('people_vaccinated' in k) == False):
                k['people_vaccinated'] = None

            if(('total_vaccinations_per_hundred' in k) == False):
                k['total_vaccinations_per_hundred'] = None

            if(('people_vaccinated_per_hundred' in k) == False):
                k['people_vaccinated_per_hundred'] = None

            if(('people_fully_vaccinated' in k) == False):
                k['people_fully_vaccinated'] = None

            if(('new_vaccinations' in k) == False):
                k['new_vaccinations'] = None

            if(('people_vaccinated_per_hundred' in k) == False):
                k['people_vaccinated_per_hundred'] = None

            if(('new_vaccinations' in k) == False):
                k['new_vaccinations'] = None

            if(('new_vaccinations_smoothed' in k) == False):
                k['new_vaccinations_smoothed'] = None

            if(('people_fully_vaccinated_per_hundred' in k) == False):
                k['people_fully_vaccinated_per_hundred'] = None

            if(('new_vaccinations_smoothed_per_million' in k) == False):
                k['new_vaccinations_smoothed_per_million'] = None

            item = {
                "date": k['date'],
                "total_vaccinations": k['total_vaccinations'],
                "people_vaccinated": k['people_vaccinated'],
                "people_vaccinated_per_hundred": k['people_vaccinated_per_hundred'],
                "total_vaccinations_per_hundred": k['total_vaccinations_per_hundred'],

                "people_fully_vaccinated": k['people_fully_vaccinated'],
                "new_vaccinations": k['new_vaccinations'],
                "new_vaccinations_smoothed": k['new_vaccinations_smoothed'],
                "people_fully_vaccinated_per_hundred": k['people_fully_vaccinated_per_hundred'],
                "new_vaccinations_smoothed_per_million": k['new_vaccinations_smoothed_per_million'],
            }
            filtered_arr.append(item)
    return filtered_arr


for k in json_res:
    if k == 'PRT':
        json_res[k]['data'] = filter_data(json_res[k]['data'])
        data['prt'] = json_res[k]['data']

    if k == 'OWID_EUN':
        json_res[k]['data'] = filter_data(json_res[k]['data'])
        data['eun'] = json_res[k]


owid_file = open("./data/owid_filter.json", "w")
owid_file.write(json.dumps(data))
owid_file.close()
