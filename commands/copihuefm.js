module.exports = {
    name: 'copihuefm',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/copihue-fm-victoria.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'http://www.radiocopihue.cl/images/logo.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Copihue FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radiocopihue.cl/`)}});
      return;
    })
    .catch(console.error);
}
}