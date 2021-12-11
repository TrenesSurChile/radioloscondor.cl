module.exports = {
    name: 'radioportales',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/portales-am-valparaiso-vina-del-mar.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.portalesfm.cl/img/logo2.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Portales FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.portalesfm.cl/`)}});
      return;
    })
    .catch(console.error);
}
}