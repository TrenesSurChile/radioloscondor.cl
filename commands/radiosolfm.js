module.exports = {
    name: 'radiosolfm',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://streaming2.locucionar.com:8179/stream');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Fm del sol
         
         Pais: Argentina
         
         Url: https://www.fmdelsol104.com.ar `)}});
      return;
    })
    .catch(console.error);
}
    
  }