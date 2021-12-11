module.exports = {
    name: 'radiosago',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7001/stream');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://www.radiosago.cl/wp-content/uploads/2020/09/80radiosago2.png" },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Sago FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radiosago.cl/`)}});
      return;
    })
    .catch(console.error);
}
}