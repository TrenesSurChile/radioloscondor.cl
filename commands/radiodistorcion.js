module.exports = {
    name: 'radiodistorsion',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/distorsion.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'http://www.distorsion.fm/logo.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Distorsion FM
        
        **Pais:** :flag_cl: :flag_ar: :flag_pe: :flag_br:
        
        pagina web: https://distorsion.fm/`)}});
      return;
    })
    .catch(console.error);
}
}