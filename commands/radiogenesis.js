module.exports = {
    name: 'radiogenesis',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/genesis-fm-curacautin.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "http://radiogenesis.cl/wp-content/uploads/sites/7/2020/02/GENESIS-LOGO-marca-jpeg.jpg"
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Genesis FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radiogenesis.cl/`)}});
      return;
    })
    .catch(console.error);
}
}