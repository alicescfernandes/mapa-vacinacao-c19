
# Down Server
In case of a down server
1. Head up to Cloudflare
2. Activate the Backup Server Rule
2. Deactivate the AWS Server Rule
3. Await for the redirects to take place
4. Log into machine
5. `pm2 logs --lines 100`
6. Debug build until it works. 
Since the requests will be redirected to the backup server, you will need to rely on https://aws.vacinacaocovid19.pt to see the aws build 
