module.exports = {
    name: 'radiomas',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/radiomas.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.radiomas.cl/wp-content/uploads/2020/09/LOGO-PRINCIPAL-COLOR-768x314.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Mas FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radiomas.cl/`)}});
      return;
    })
    .catch(console.error);
}
}