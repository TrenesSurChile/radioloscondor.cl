module.exports = {
    name: 'estacion95',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/estacion95.mp3');
      message.channel.send({embed: {
        color: 0099,
        description: (`**Escuchas:**
        
        **Titulo:** Radio estacion 95

        **Pais:** :flag_cl:
        
        pagina web: http://www.estacion95.cl/`)}});
      return;
    })
    .catch(console.error);
}
}