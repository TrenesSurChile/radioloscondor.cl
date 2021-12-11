module.exports = {
    name: 'invite',
    description: 'radioshjj',
    execute(message, args) { 

  message.channel.send({embed: {
    color: 0099,
    thumbnail: {
      url: 'https://cdn.discordapp.com/app-icons/823927694176682014/32ba753414e0cf0dfe1e1899c4d160db.png?size=256'
    },
    description: (`link de invitacion del bot radio los condor cl https://discord.com/oauth2/authorize?client_id=823927694176682014&permissions=17217286118&scope=bot`)}});
  
  }
    };