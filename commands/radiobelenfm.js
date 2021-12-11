module.exports = {
    name: 'radiobelenfm',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/nueva-belen-fm.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.belenfm.cl/imag/logo_belen.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Belen FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.belenfm.cl/`)}});
      return;
    })
    .catch(console.error);
}
}