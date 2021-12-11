module.exports = {
    name: 'radiotucuman',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad15');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Tucuman
         
         Pais: Argentina
         
         Url: https://lv7.com.ar `)}});
      return;
    })
    .catch(console.error);
}
    
  }