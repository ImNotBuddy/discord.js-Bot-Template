# discord.Js-Bot-Template

Simple template that can be used to quickly set up a bot with discord.js V14

1) Run 'npm install' to install dependencies
2) Create a .env file and store your bot's token in a variable called 'DISCORD_TOKEN'
3) Edit the 'config.json' file to your bot's id and the server to add commands to
4) Run 'node deploy-commands.js' to update slash commands to your chosen server
5) Run 'node .' or 'node index.js' to run the bot

The structure to add commands is:
Commands directory
  --> Command Category Subfolder
      --> Javascript Command File

The structure to add events is:
Events directory
  --> Javascript Events File
      
  Note that this file does not have to be named identically to the event. Instead, edit the 'event' value in the exported object
