module.exports = {
    name: 'radiosantacruz',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/santa-cruz-fm.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://santacruzfm.cl/wp-content/uploads/2021/10/logo.png"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio SantaCruz FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://santacruzfm.cl/`)}});
      return;
    })
    .catch(console.error);
}
}