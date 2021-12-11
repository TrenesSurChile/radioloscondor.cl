module.exports = {
    name: 'radioam870',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad1');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Am 870
         
         Pais: Argentina
         
         Url: https://www.radionacional.com.ar/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }