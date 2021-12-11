module.exports = {
    name: 'radioregional',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7000/stream');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.radioregional.cl/wp-content/uploads/sites/11/2020/08/radioregional.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Regional FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radioregional.cl/`)}});
      return;
    })
    .catch(console.error);
}
}