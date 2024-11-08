## Useful Commands
- Ctrl + C to end a terminal process i.e servicing your website
- npm init -y : initiating your package.json file
- npm run devStart : after installing and configuring nodemon, this is the command to run your server
- node filename.js : replace "filename" with the name of your main node.js file. This is to run your server before installing nodemon.

### Quick Note on Nodemon
- This will auto-reload your server so that you don't need to stop and start it to see changes, but you still need to reload your actual webpage (Ctrl + R) with nodemon, since it needs to recieve a new GET request in order to change the data displayed.