module.exports = {
    name: 'stop',
    description: 'radioschile',
    execute(message, args) { 

const usermessage = message.author;

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://localhost:8000/');
      message.channel.send({embed: {
        color: 0099,
        description: (`**la reproduccion del audio fue detenida por**: ${usermessage}`)}});
      return;
    })
    .catch(console.error);
}
    
  }