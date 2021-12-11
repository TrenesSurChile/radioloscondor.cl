module.exports = {
    name: 'radioquebuena',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://cast01.matisanh.cl/icecast/radio.quebuena');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://www.radioquebuena.cl/img/icono-Q-radio-192x192.png'
        },
        description: (`**Escuchas:**
         
         **Titulo:** Radio Que Buena 91.1 Curico
         SI QUE ES BUENA!
         
         **Pais:** :flag_cl:
         
         **Url:** https://www.radioquebuena.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }