/////////////////////para dejarlo 24/7 elbot /////////////////////
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('radio los condor chile bot 2021');
})
let port = process.env.PORT || 3000;
app.listen(port);

require('dotenv').config();
/////////////////////////bot real//////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'rd!';
const fs = require('fs');
client.commands = new Discord.Collection();
const CommandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
for (const file of CommandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(`Estoy listo, conectado en ${client.guilds.cache.size} servidores`);
  client.user.setPresence({
      status: "idle",
      activity: {
         name: `${client.guilds.cache.size} servidores | rd!help`,
         type: "WATCHING",
      }
   });
});

const Topgg = require("@top-gg/sdk");

const webhook = new Topgg.Webhook("id");

app.post("/dblwebhook", webhook.listener(vote => {
  // vote will be your vote object, e.g
  console.log(vote.user) // 395526710101278721 < user who voted\
  let channel = client.channels.cache.get("905088452708671518")
if(!channel)return console.log("channel was not found")
  channel.send({embed: {
    color: 0099,
    description: (`**Gracias Por Apoyarnos!**
    <@${vote.user}> A Votado En Top.gg :RadioLosCondorCL:
    **URL:** https://top.gg/bot/823927694176682014/vote`)}});
}));

let port2 = process.env.PORT || 80;
app.listen(port2);

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'decir') {
    client.commands.get('decir').execute(message, args);
  } else if (command == 'radioudec'){
    client.commands.get('radioudec').execute(message, args);  
  }
    if (command === 'radioscl') {
    client.commands.get('radioscl').execute(message, args);
  } else if (command == 'radiobiobioc') {
    client.commands.get('radiobiobioc').execute(message, args);
  }
   if (command === 'radiofmdos') {
    client.commands.get('radiofmdos').execute(message, args);
  } else if (command == 'radioconquistador') {
    client.commands.get('radioconquistador').execute(message, args);
  }
  if (command === 'adnradio') {
    client.commands.get('adnradio').execute(message, args);
  } else if (command == 'radiorockandpop') {
    client.commands.get('radiorockandpop').execute(message, args);
  }
  if (command === 'radiolos40') {
    client.commands.get('los40').execute(message, args);
  } else if (command == 'radiocondor') {
    client.commands.get('radiocondor').execute(message, args);
  }
  if (command === 'los40internacional') {
    client.commands.get('los40internacional').execute(message, args);
  } else if (command == 'radiocooperativa') {
    client.commands.get('radiocooperativa').execute(message, args);
  }
   if (command === 'ayuda') {
    client.commands.get('ayuda').execute(message, args);
  } else if (command == 'help') {
    client.commands.get('ayuda').execute(message, args);
  }
   if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command == 'paginaweb') {
    client.commands.get('link').execute(message, args);
  }
   if (command === 'radiocorazon1') {
    client.commands.get('radiocorazon1').execute(message, args);
  } else if (command == 'radiocorazon2') {
    client.commands.get('radiocorazon2').execute(message, args);
  }
   if (command === 'radiopositiva') {
    client.commands.get('radiopositiva').execute(message, args);
  } else if (command == 'radiosarg') {
    client.commands.get('radiosarg').execute(message, args);
  }
   if (command === 'radios') {
    client.commands.get('radios').execute(message, args);
  } else if (command == 'radiolos40arg') {
    client.commands.get('los40arg').execute(message, args);
  }
   if (command === 'radioam870') {
    client.commands.get('radioam870').execute(message, args);
  } else if (command == 'radiocadena') {
    client.commands.get('radiocadena').execute(message, args);
  }
  if (command === 'radiopunto7c') {
    client.commands.get('radiopunto7c').execute(message, args);
  } else if (command == 'radiopunto7v') {
    client.commands.get('radiopunto7v').execute(message, args);
  }
  if (command === 'radiopunto7p') {
    client.commands.get('radiopunto7pmtt').execute(message, args);
  } else if (command == 'radiopunto7t') {
    client.commands.get('radiopunto7t1').execute(message, args);
  }
  if (command === 'radiopunto7o') {
    client.commands.get('radiopunto7o').execute(message, args);
  } else if (command == 'radiocarolina') {
    client.commands.get('radiocarolina').execute(message, args);
  }
    if (command === 'radiobiobiov') {
    client.commands.get('radiobiobiov').execute(message, args);
  } else if (command == 'radiobiobiop') {
    client.commands.get('radiobiobiop').execute(message, args);
  }
    if (command === 'radiobiobios') {
    client.commands.get('radiobiobios').execute(message, args);
  } else if (command == 'radiobiobiot') {
    client.commands.get('radiobiobiot').execute(message, args);
  }
    if (command === 'radiolatina') {
    client.commands.get('radiolatina').execute(message, args);
  } else if (command == 'radiolt14') {
    client.commands.get('radiolt14').execute(message, args);
  }
   if (command === 'support') {
    client.commands.get('soporte').execute(message, args);
  } else if (command == 'soporte') {
    client.commands.get('soporte').execute(message, args);
  }
  if (command === 'invite') {
    client.commands.get('invite').execute(message, args);
  } else if (command == 'kick') {
    client.commands.get('kick').execute(message, args);
  }
  if (command === 'ban') {
    client.commands.get('ban').execute(message, args);
  } else if (command == 'radiolagoarg') {
    client.commands.get('radiolagoarg').execute(message, args);
  }
    if (command === 'radiodimension') {
    client.commands.get('radiodimension').execute(message, args);
  } else if (command == 'radiofrecuencia') {
    client.commands.get('radiofrecuencia').execute(message, args);
  }
    if (command === 'radiomixpe') {
    client.commands.get('radiomixpe').execute(message, args);
  } else if (command == 'radiomaxima') {
    client.commands.get('radiomaxima').execute(message, args);
  }
    if (command === 'radiopudahuel') {
    client.commands.get('radiopudahuel').execute(message, args);
  } else if (command == 'radiotucuman') {
    client.commands.get('radiotucuman').execute(message, args);
  }
    if (command === 'radiorosario') {
    client.commands.get('radiorosario').execute(message, args);
  } else if (command == 'radioforo') {
    client.commands.get('radioforo').execute(message, args);
  }
    if (command === 'radiomitre') {
    client.commands.get('radiomitre').execute(message, args);
  } else if (command == 'radioneuquen') {
    client.commands.get('radioneuquen').execute(message, args);
  }
    if (command === 'radiopatagonia') {
    client.commands.get('radiopatagonia').execute(message, args);
  } else if (command == 'radioceania') {
    client.commands.get('radioceania').execute(message, args);
  }
     if (command === 'radioscl2') {
    client.commands.get('radioscl2').execute(message, args);
  } else if (command == 'join') {
    client.commands.get('joinvoicechannel').execute(message, args);
  }
   if (command === 'radiosolfm') {
    client.commands.get('radiosolfm').execute(message, args);
  } else if (command == 'radioquebuena') {
    client.commands.get('radioquebuena').execute(message, args);
  }
  if (command === 'radiospe') {
    client.commands.get('radiospe').execute(message, args);
  }
  if (command === 'user') {
    client.commands.get('user').execute(message, args);
  } else if (command == 'clear') {
    client.commands.get('clear').execute(message, args);
  }
  if (command === 'radiobuensonido') {
    client.commands.get('radiobuensonido').execute(message, args);
  } else if (command == 'topradios'){
    client.commands.get('topradios').execute(message, args);
  }
  if (command === 'radiordifm') {
    client.commands.get('radiordifm').execute(message, args);
    } else if (command === 'uradios'){
      client.commands.get('uradios').execute(message, args);
    }
  if (command === 'radiocondor2'){
    client.commands.get('radiocondo2').execute(message, args);
  } else if (command == 'version'){
  client.commands.get('version').execute(message, args);
  }
  if (command === 'radiocondor3'){
    client.commands.get('radiocondo3').execute(message, args);
  } else if (command == 'radiocondor4'){
  client.commands.get('radiocondor4').execute(message, args);
  }
  if (command === 'radioconce'){
    client.commands.get('radioconce').execute(message, args);
  } else if (command == 'stop'){
  client.commands.get('stop').execute(message, args);
  }
  if (command === 'vote'){
    client.commands.get('vote').execute(message, args);
  } else if (command == 'radiocopihuefm') {
    client.commands.get('copihuefm').execute(message, args); }
  if (command === 'radiovln') {
  client.commands.get('vlnradio').execute(message, args);
  }else if (command == 'radiocreacion') {
  client.commands.get('radiocreacion').execute(message, args); }
  if (command === 'radiodistorsion'){
    client.commands.get('radiodistorsion').execute(message, args);
  } else if (command == 'radiouniversal'){
    client.commands.get('radiouniversal').execute(message, args);
  }
  if (command === 'radiotalcahuano') {
  client.commands.get('radiotalcahuano').execute(message, args);
  }else if (command == 'radioromantica'){
    client.commands.get('romanticafm').execute(message, args); }
  if (command === 'radiosuperandina') {
    client.commands.get('radiosuperandina').execute(message, args);
  } else if (command == 'radioestacion95'){
    client.commands.get('estacion95').execute(message, args);
  }
  if (command === 'radiolacalera'){
    client.commands.get('elobservador').execute(message, args);
  } else if (command == 'radiolebu') {
  client.commands.get('radiolebu').execute(message, args);
  }
  if (command === 'radiomas'){
  client.commands.get('radiomas').execute(message, args);
  } else if (command == 'radioportales'){
  client.commands.get('radioportales').execute(message, args);
  }
  if (command === 'radiosago'){
    client.commands.get('radiosago').execute(message, args);
  } else if (command == 'radiosantacruz'){
    client.commands.get('radiosantacruz').execute(message, args);
  }
  if (command === 'radioentreolas'){
    client.commands.get('radioentreolas').execute(message, args);
  } else if (command == 'radiollacolen'){
    client.commands.get('radiollacolen').execute(message, args);
  }
  if (command === 'radioregional'){
    client.commands.get('radioregional').execute(message, args);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'play') {
    client.commands.get('play23').execute(message, args);
  } else if (command === 'leave') {
    client.commands.get('voiceleave').execute(message, args);
  }
    if (command === 'p') {
    client.commands.get('play23').execute(message, args);
  } else if (command === 'l') {
    client.commands.get('voiceleave').execute(message, args);
}
});
   
client.login("token");

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
