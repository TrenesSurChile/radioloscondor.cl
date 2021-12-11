module.exports = {
    name: 'radiouniversal',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/universal-fm-pitrufquen.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://radiouniversal.cl/wp-content/uploads/2016/11/logo-ultraFM-web01.png"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio universal FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://radiouniversal.cl/`)}});
      return;
    })
    .catch(console.error);
}
}