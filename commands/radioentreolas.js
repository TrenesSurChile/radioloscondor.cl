module.exports = {
    name: 'radioentreolas',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/entreolas.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://www.entreolas.cl/images/principal/entreolaslog-02.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio entreolas pichilemu
        **Pais:** :flag_cl:
        
        pagina web: https://www.entreolas.cl/`)}});
      return;
    })
    .catch(console.error);
}
}