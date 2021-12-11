module.exports = {
    name: 'radiomania',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/mania.mp3');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.maniafm.cl/wp-content/uploads/2021/04/logo_gb-1.gif" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Mania FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.maniafm.cl/`)}});
      return;
    })
    .catch(console.error);
}
}