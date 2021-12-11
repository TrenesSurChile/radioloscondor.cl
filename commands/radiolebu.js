module.exports = {
    name: 'radiolebu',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/la-ciudad-puerto.aac');
      message.channel.send({embed: {
        color: 0099,
        description: (`**Escuchas:**
        
        **Titulo:** Radio La Radio De Lebu FM
        
        **Pais:** :flag_cl:
        
        pagina web: http://www.laradiodelebu.com/`)}});
      return;
    })
    .catch(console.error);
}
}