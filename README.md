# 🇵🇹💉 Vacinação COVID19 - Dashboard [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Falicescfernandes%2Fmapa-vacinacao-c19)
Este projeto foi desenvolvido com o intuito de mostrar o estado atual do plano de vacinação contra a covid-19. É um trabalho em progresso que vai sofrer atualizações ao longo do tempo, e também recebe os últimos números relacionados com administração das vacinas. 
Todo o código é público (incluindo também os desenhos originais do site), para que seja possível ser adaptado para outras utilizações, e os dados também são atualizados diretamente neste repositório. Para do _dashboard_, é também disponibilizada um [API](https://vacinacaocovid19.pt/api/vaccines) que pode ser consumida por outras aplicações. Se tiveres alguma sugestão de gráficos que sejam pertinentes, podes contribuir diretamente para o código, ou podes enviar sugestões por e-mail. <img src="https://www.google-analytics.com/collect?v=1&amp;t=event&amp;tid=UA-100869248-2&amp;cid=555&amp;ec=github&amp;ea=pageview&amp;el=plano-vacinacao-c19&amp;ev=1" alt=""> 
## Referências
- [Plausible (dados de analytics)](https://plausible.io/vacinacaocovid19.pt)
- [API](https://vacinacaocovid19.pt/api/vaccines)

## Origem dos dados

O processo de recolha de dados é automatizado com um pequeno *script* em node que vai ver se já existem dados recentes, e se existirem, adiciona e publica esses dados neste repositório. A fonte dos dados varia de gráfico para gráfico, mas estas são as fontes que são consultadas:

- [Monitorização do SNS da Direção-Geral da Saúde](https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/)  
- [Ponto de Situação Direção-Geral da Saúde](https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/)  
- [Relatórios de Vacinação - Direção-Geral da Saúde](https://covid19.min-saude.pt/relatorio-de-vacinacao/)  
- [Our World of Data](https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/country_data/Portugal.csv)  
- [Centro Europeu de Controlo de Doenças](https://covid19-vaccine-report.ecdc.europa.eu/)  
- [Instituto Nacional Doutor Ricardo Jorge](http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/)  
- [Região Autónoma da Madeira - Ponto de Situação Vacinação COVID-19 ](http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/)  
## Stack
- ChartJS  
- React  
- NextJS  
- JSON como serviço de dados  
- Github Actions para CI
- Github Hooks (para lançar um novo deploy)
- ~~Vercel~~ Já não estamos na Vercel!
- Cloudflare

## Fazer setup local (com docker)
```bash 
git clone https://github.com/alicescfernandes/mapa-vacinacao-c19/ 
docker build -t vacinacaocovid19 .
docker run -d -p 80:3000 -P --name vacinacaocovid19 vacinacaocovid19 # site em localhost:80
```
## Fazer setup local (sem docker)

### Instalar dependencias
```bash
pip3 install -r requirements.txt

# JS
npm install
# ou
yarn
```
### Instalar comandos globais (fazer os symlinks)
```bash
npm link # ou sudo npm link
daemon_data # comando para fazer update aos dados
```
### Correr projeto
```bash
npm run start
# ou
yarn start # abre no localhost:3000
```

## Lançar o scrapper bot _OPCIONAL_
Os dados são scrappados com um cron job que vai às fontes, retira o JSON e atualiza o respositório ao código.  
Existem duas maneiras de lançar o _scrapper_ bot: através de um `screen` ou pelo o `pm2`


- Screen
```bash
sudo apt install screen
# este comando vai correr o daemon_data num screen chamado daemon.
# -S daemon [nome], -d -> detached mode, -m -> abrir sempre uma nova janela; -dm -> abrir uma nova janela em detached mode 
screen -S daemon -dm bash -c "daemon_data; exec bash" 

screen -S daemon -X quit # para terminar o screen chamado daemon
screen -r daemon  # entrar dentro do screen chamado daemon. Para sair é pressionar CTRL+A e depois D
```

- PM2
```bash
npm install -g pm2
pm2 start daemon_data --name "daemon" # lançar o processo
pm2 restart daemon # restart do processo
pm2 stop daemon # parar o processo
pm2 logs daemon # Ler logs do processo
pm2 list # Ver todos os processos geridos pelo pm2
pm2 monit # Ver status de todos os processos geridos pelo pm2
```
