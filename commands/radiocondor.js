module.exports = {
    name: 'radiocondor',
    description: 'radioscondor',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  var streamTitle = require('stream-title');

  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://109.73.65.69:22848/;');

      streamTitle({
    url: 'http://109.73.65.69:22848',
    type: 'shoutcast'
}).then(function (title) {
    console.log(title);
    message.channel.send({embed: {
      color: 0099,
      description: (`**Escuchas:**

      **Titulo:** Radio Condor
      
      **Pais:** :flag_cl:

      **Horario de transmicion:** 13hrs - 23hrs (hora chilena)

      **Cancion:** ${title}

      **URL:** https://wwwradioloscondorc.wixsite.com/radioloscondor`)}});
}).catch(function (err) {
    console.log(err);
})
      
    })
    .catch(console.error);
}
    
  };