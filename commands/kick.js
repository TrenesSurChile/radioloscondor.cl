module.exports = {
    name: 'kick',
    description: 'radioshjj',
    execute(message, args) { 

    const moderator = message.author
    let user = message.mentions.users.first();
    let permiso = message.member.hasPermission("ADMINISTRATOR");
    let razon = args.slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('mencione a alguien a expulsar').catch(console.error);
    if (!razon) return message.channel.send('mencione alguna razon para expulsar al usuario mencionado, `-kick @username [razón]`');
    if(!permiso) return message.channel.send("Error | No tienes Permisos para poder expulsar a un usuario.");
    if (!message.guild.member(user).kickable) return message.reply('No puedo Expulsar al usuario mencionado.');

    user.send({embed:{
      color: 0099,
      description: (`***Has Sido Expulsado Del Servidor!***
      
      **Razón de expulsion:** ${razon}

      **Expulsado Por:** ${moderator}`)
    }});
     
    message.guild.member(user).kick(razon);
    message.channel.send({embed: {
      color: 0099,
      description: (`**${user.username}** fue expulsado del servidor!
      
      **Razón:** ${razon}.
      
      **Moderador:** ${moderator}`)}});
  
  }
    };