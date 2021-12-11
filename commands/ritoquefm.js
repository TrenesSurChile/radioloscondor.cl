module.exports = {
    name: 'ritoquefm',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/radiotalcahuano.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://ritoquefm.cl/wp-content/uploads/elementor/thumbs/rfm-t-p669v438e2dsnqdypgfjq42d1f3angyzl1d9x1368s.png"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio Mas FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://ritoquefm.cl/`)}});
      return;
    })
    .catch(console.error);
}
}