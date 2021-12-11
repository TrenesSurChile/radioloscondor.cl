module.exports = {
    name: 'radiotalcahuano',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/radiotalcahuano.aac');
      message.channel.send({embed: {
        color: 0099,
        description: (`**Escuchas:**
        
        **Titulo:** Radio Mas FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.radiotalcahuano.cl/`)}});
      return;
    })
    .catch(console.error);
}
}