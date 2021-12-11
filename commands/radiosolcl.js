module.exports = {
    name: 'radiosolcl',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/sol-fm.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://radiosol.cl/wp-content/uploads/2020/06/LOGO-RADIOSOL-CL-azul-485.png"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio Sol FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://radiosol.cl/`)}});
      return;
    })
    .catch(console.error);
}
}