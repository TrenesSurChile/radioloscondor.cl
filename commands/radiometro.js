module.exports = {
    name: 'radiometro',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://mp3.metroaudio1.stream.avstreaming.net:7200/metro');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Metro
         
         Pais: Argentina
         
         Url: https://www.metro951.com/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }