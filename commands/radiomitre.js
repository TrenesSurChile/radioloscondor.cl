module.exports = {
    name: 'radiomitre',
    description: 'radiosarg',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://217.172.179.57:8050/MitreBahiaBlanca');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Mitre
         
         Pais: Argentina
         
         Url: https://radiomitre.cienradios.com `)}});
      return;
    })
    .catch(console.error);
}
    
  }