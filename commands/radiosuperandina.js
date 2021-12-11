module.exports = {
    name: 'radiosuperandina',
    description: 'adnradio', 
   execute(message, args) {
let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://archi-us.digitalproserver.com/superandina.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {url: "https://bucket.arcatelmultisite.cl/api/file/download?privateUrl=tenant/5f4535958bb5705e1fd7ffb2/settings/logos/e371db79-5551-4b5d-a6ec-0a831b4bfd11.jpg"},
        description: (`**Escuchas:**
        
        **Titulo:** Radio Super Andina FM
        
        **Pais:** :flag_cl:
        
        pagina web: https://superandina.cl/`)}});
      return;
    })
    .catch(console.error);
}
}