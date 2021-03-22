# 🇵🇹💉 Plano de Vacinação - COVID19    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Falicescfernandes%2Fmapa-vacinacao-c19)

Este projeto foi desenvolvido com o intuito de mostrar o estado atual do plano de vacinação contra a covid-19. É um trabalho em progresso que vai sofrer atualizações ao longo do tempo, e também recebe os últimos números relacionados com administração das vacinas. 
Todo o código é público (incluindo também os desenhos originais do site), para que seja possível ser adaptado para outras utilizações, e os dados também são atualizados diretamente neste repositório. Para do _dashboard_, é também disponibilizada um [API](https://vacinacaocovid19.pt/api/vaccines) que pode ser consumida por outras aplicações. Se tiveres alguma sugestão de gráficos que sejam pertinentes, podes contribuir diretamente para o código, ou podes enviar sugestões por e-mail. 
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
## Stack
- ChartJS  
- React  
- NextJS  
- JSON como serviço de dados  
- Github Actions ou Travis para CI (ainda vou escolher) 
- Github Hooks (para lançar um novo deploy)
- ~~Vercel~~ Já não estamos na Vercel!
- Cloudflare
- Docker (para automatizar o processo de recolha de dados diários, num *container* que tem os portos & git isolados, e que corre um *script* persistente que faz a verificação e atualização dos mesmos)  
