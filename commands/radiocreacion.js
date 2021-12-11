module.exports = {
    name: 'radiocreacion',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/creacion-fm.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://radiocreacion.cl/wp-content/uploads/2020/05/cropped-creacion-2.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Creacion FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://radiocreacion.cl/`)}});
      return;
    })
    .catch(console.error);
}
}