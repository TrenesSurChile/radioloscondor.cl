module.exports = {
    name: 'vlnradio',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://cast01.matisanh.cl:8090/vln_lo');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://cdn.vlnradio.cl/wp-content/uploads/2017/10/cropped-favicon-192x192.png'
        },
        description: (`**Escuchas:**
        
        **Titulo:** Radio Vivimos la noticia
        
        **Pais:** :flag_cl:
        
        pagina web: https://www.vivimoslanoticia.cl/`)}});
      return;
    })
    .catch(console.error);
}
}