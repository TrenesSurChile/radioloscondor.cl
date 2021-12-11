module.exports = {
    name: 'radioconquistador',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
var streamTitle = require('stream-title')
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio5.tustreaming.cl/8060/concepcion');
      streamTitle({
    url: 'http://audio5.tustreaming.cl:8060',
    type: 'icecast',
    mount: '/concepcion'
}).then(function (title) {
    console.log(title);
    message.channel.send({embed: {
      color: 0099,
      description: (`**Escuchas:**

      **Titulo:** Radio Conquistador
      
      **Pais:** :flag_cl:

      **Cancion:** ${title}

      **URL:** https://www.elconquistadorfm.net/`)}});
}).catch(function (err) {
    console.log(err);
})
      
    })
    .catch(console.error);
}
    
  };