module.exports = {
    name: 'ban',
    description: 'radioshjj',
    execute(message, args) { 

  let user = message.mentions.users.first();
  let permiso = message.member.hasPermission("ADMINISTRATOR");
  let razon = args.slice(1).join(' ');

  if (message.mentions.users.size < 1) return message.reply('mencione a alguien a banear').catch(console.error);
  if(!razon) return message.channel.send('Escriba una razón para banear, `rd!ban @username [razón]`');
   if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
  if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
  

  message.guild.member(user).ban(razon);
  message.channel.send({embed: {
    color: 0099,
    description: (`**${user.username}** fue baneado del servidor
    
    razón: ${razon}.`)}});
  
  }
    };