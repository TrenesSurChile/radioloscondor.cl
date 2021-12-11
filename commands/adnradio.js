module.exports = {
    name: 'adnradio',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://14623.live.streamtheworld.com:80/ADNAAC_SC');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://api.iarc.dev/images/f5ef1fd612fce8c10dfc751f85ae88a8.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio ADN radio 
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.adnradio.cl/`)}});
      return;
    })
    .catch(console.error);
}
}