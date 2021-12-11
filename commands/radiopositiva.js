module.exports = {
    name: 'radiopositiva',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://unlimited11-cl.dps.live/positiva/aac/icecast.audio');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'http://www.positivafm.cl/images/logo.png?cac3bea'
        },
        description: (`Escuchas:
         
         Titulo: Radio Positiva
         
         Pais: :flag_cl:
         
         Url: https://www.positivafm.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }