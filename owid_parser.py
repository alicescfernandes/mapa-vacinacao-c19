import requests
import json
from dateutil.parser import parse
from dateutil.relativedelta import *

start_date = parse("2020-12-27")
start_date2 = parse("2020-12-28")
# a = relativedelta(parse("2020-12-20"), parse("2020-12-21"))
# dt = parse("2020-01-27")
# print(a.days > 0)


url = 'https://covid.ourworldindata.org/data/owid-covid-data.json'

res = requests.get(url)
json_res = res.json()
data = {
    'prt': False,
    'eun': False
}


def filter_data(arr, populacao):
    filtered_arr = []
    for idx, k in enumerate(arr):
        date = parse(k['date'])
        if(date >= start_date):
            k['new_1_doses'] = None
            k['new_2_doses'] = None
            k['new_1_doses_per_hundred'] = None
            k['new_2_doses_per_hundred'] = None

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

            if(date >= start_date2):
                previous_item = arr[idx-1]
                if(k['people_vaccinated'] != None and previous_item['people_vaccinated'] != None):
                    k['new_1_doses'] = (k['people_vaccinated'] if k['people_vaccinated']
                                        != None else 0) - (previous_item['people_vaccinated'] if previous_item['people_vaccinated']
                                                           != None else 0)

                if(k['people_fully_vaccinated'] != None and previous_item['people_vaccinated'] != None):
                    k['new_2_doses'] = (k['people_fully_vaccinated'] if k['people_fully_vaccinated']
                                        != None else 0) - (previous_item['people_fully_vaccinated'] if previous_item['people_fully_vaccinated']
                                                           != None else 0)

                if(k['new_1_doses'] != None and k['new_1_doses'] > 0):
                    k['new_1_doses_per_hundred'] = (
                        k['new_1_doses'] / populacao) * 100

                if(k['new_2_doses'] != None and k['new_2_doses'] > 0):
                    k['new_2_doses_per_hundred'] = (
                        k['new_2_doses'] / populacao) * 100

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

                'new_1_doses': k['new_1_doses'],
                'new_2_doses': k['new_2_doses'],
                'new_1_doses_per_hundred': k['new_1_doses_per_hundred'],
                'new_2_doses_per_hundred': k['new_2_doses_per_hundred']
            }
            filtered_arr.append(item)
    return filtered_arr


for k in json_res:
    if k == 'PRT':
        json_res[k]['data'] = filter_data(
            json_res[k]['data'], json_res[k]['population'])
        data['prt'] = json_res[k]

    if k == 'OWID_EUN':
        json_res[k]['data'] = filter_data(
            json_res[k]['data'], json_res[k]['population'])
        data['eun'] = json_res[k]


owid_file = open("./data/owid_filter.json", "w")
owid_file.write(json.dumps(data))
owid_file.close()
