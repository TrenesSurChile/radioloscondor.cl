module.exports = {
    name: 'radiolt14',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad44');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio LT14
         
         Pais: Argentina
         
         Url: https://www.radionacional.com.ar/category/lt-14-gral-urquiza-parana/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }