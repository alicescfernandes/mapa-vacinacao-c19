## Project Setup

1. Create a Twitter account and get the developer mode enabled
2. Create a Hootsuite account and get the developer mode enabled
3. Create a Pusher account
4. Create a Logflare account
4. Setup Github Hooks
5. Write a .env file with the keys and secrets. Look to the `.env_example` for the keys you have to setup
6. Run `npm link`
7. Run `daemon_data` from the root folder
8. Alternatively, you can run `./daemon.js` from the root folder
9. The updater script will run between 12h and 15h every day. You can run this on a `screen`
9. You can also deploy using `pm2` 