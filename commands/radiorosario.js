module.exports = {
    name: 'radiorosario',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad5');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Rosario
         
         Pais: Argentina
         
         Url: https://www.rosario3.com/radios/radio2.html `)}});
      return;
    })
    .catch(console.error);
}
    
  }