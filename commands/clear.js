module.exports = {
  name: 'clear', 
  description: 'clear messages',
  async execute (message, args) {

    const usermessage = message.author;
    let permiso = message.member.hasPermission("ADMINISTRATOR");

   if(!args[0]) return message.reply("Especifique la cantidad de mensajes a borrar");
   if(isNaN(args[0])) return message.reply("dddd");

   if(!permiso)return message.reply('no tienes permiso para poder borrar mensajes!')

   if(!args[0] > 100) return message.reply("No puedo borrar mas de 100 mensajes");
   if(!args[0] < 0 ) return message.reply("debes borrar un mensaje por lo menos")

   await message.channel.messages.fetch({limit: args[0]}).then(messages => {
     message.channel.bulkDelete(messages);
     message.channel.send({embed: {
       color: 0099,
       description: (`${usermessage} se han borrado ${args} mensajes!`)}});
       message.delete();
   });
  }
}