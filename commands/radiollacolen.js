module.exports = {
    name: 'radiollacolen',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/radiollacolen.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.radiollacolen.com/wp-content/uploads/2021/09/radiollacolen_logo_03.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio llacolen FM
        
        **Pais:** :flag_cl:
        
        pagina web: http://www.radiollacolen.com/`)}});
      return;
    })
    .catch(console.error);
}
}