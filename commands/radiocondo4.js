module.exports = {
    name: 'radiocondo4',
    description: 'radioscondor',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://109.169.76.104:23067/radioloscondor3/icecast.audio');
      message.channel.send({embed: {
      color: 3447003,
      description: (`**Escuchas:**

      **Titulo:** Radio Condor Señal 2.2
      
      **Pais:** :flag_cl:

      **Horario de transmicion:** 13hrs - 23hrs (hora chilena)

      **URL:** https://wwwradioloscondorc.wixsite.com/radioloscondor`)}});
      return;
    })
    .catch(console.error);
}
    
  };