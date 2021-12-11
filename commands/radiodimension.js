module.exports = {
    name: 'radiodimension',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://aliasdns.info:8114/live');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Dimension
         
         Pais: Argentina
         
         Url: https://www.cadenadimension.com.ar/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }