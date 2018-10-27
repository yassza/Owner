const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ['-']

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});






client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client.on('message', message => {
    if (message.content === "تحويل" + "<@" + `${client.user.id}` + ">") {
        message.channel.send('#credit <@286088294234718209>')
    }
});


client.on('message', message => {
if (message.content === "سبام" + "<@" + `${client.user.id}` + ">") {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`سبام يولد ينعل ام الفلة hello Again ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('guildCreate', (guild) => {
    if(client.guilds.size > 2) {
        guild.leave();
    }
})




client.login(process.env.TOKEN);
