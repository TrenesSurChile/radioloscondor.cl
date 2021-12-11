module.exports = {
    name: 'radioconce',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://ip.audiostreaming.cl:9764/;');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'http://radioconcepcion.cl/wp-content/uploads/2015/01/logo28032016.jpg'
        },
        description: (`**Escuchas:**
         
         **Titulo:** Radio Concepcion
         
         **Pais:** :flag_cl:
         
         **Url:** https://www.radioconcepcion.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }