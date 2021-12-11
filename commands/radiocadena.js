module.exports = {
    name: 'radiocadena',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3.mp3');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
      
      Titulo: Radio CADENA
      
      Pais: Argentina
      
      Url: https://www.cadena3.com/`)}});
      return;
    })
    .catch(console.error);
}
    
  }