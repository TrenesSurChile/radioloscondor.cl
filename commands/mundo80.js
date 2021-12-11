module.exports = {
    name: 'mundo80',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7003/stream');
      message.channel.send({embed: {
        color: 0099,
        description: (`**Escuchas:**
        
        **Titulo:** Radio mundo80
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.mundo80.cl/`)}});
      return;
    })
    .catch(console.error);
}
}