module.exports = {
    name: 'romanticafm',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/romantica64k');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.romantica.cl/_templates/desktop/includes/img/main-logo.png"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio Romantica FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.romantica.cl/`)}});
      return;
    })
    .catch(console.error);
}
}