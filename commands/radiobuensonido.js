module.exports = {
    name: 'radiobuensonido',
    description: 'radioschile',
    execute(message, args) { 

      var streamTitle = require("stream-title");

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://sonic01la-us.mistream.cl:7003/stream.mp3');
      streamTitle({
    url: 'https://sonic01la-us.mistream.cl:7003',
    type: 'shoutcast2',
    sid: '1'
}).then(function (title) {
    console.log(title);
    message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://buensonido.cl/wp-content/uploads/2021/10/Logo-Final-Buen-Sonido.png'
        },
        description: (`**Escuchas:**
         
         **Titulo:** Radio Buen Sonido Coronel
         
         **Pais:** :flag_cl:

         **Cancion:** ${title}
         
         **Url:** https://www.buensonido.cl `)}});
}).catch(function (err) {
    console.log(err);
})
      
    })
    .catch(console.error);
}
    
  };