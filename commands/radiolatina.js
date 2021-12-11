module.exports = {
    name: 'radiolatina',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://streaming.latina101.com.ar:8080/RadioLatina');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Latina 101
         
         Pais: Argentina
         
         Url: https://www.latina101.com.ar `)}});
      return;
    })
    .catch(console.error);
}
    
  }