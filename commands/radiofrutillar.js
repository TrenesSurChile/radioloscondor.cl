module.exports = {
    name: 'radiofrutillar',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/serfm_aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://radiofrutillar.cl/wp-content/uploads/2020/12/LOGO-RADIO-FRUTILLAR-100x100-1.jpg"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio Frutillar FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://radiofrutillar.cl/`)}});
      return;
    })
    .catch(console.error);
}
}