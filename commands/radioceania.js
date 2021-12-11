module.exports = {
    name: 'radioceania',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/oceania-fm.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://static-media.streema.com/media/cache/55/63/5563741f0ac28323ed2651055d8be671.jpg'
        },
        description: (`**Escuchas:**
         
         **Titulo:** Radio Oceania 93.7fm Talcahuano
         
         **Pais:** :flag_cl:
         
         **Url:** https://www.radioceania.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }