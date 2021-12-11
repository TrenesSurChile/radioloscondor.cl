module.exports = {
    name: 'radiopunto7o',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://unlimited3-cl.dps.live/p7osorno/aac/icecast.audio');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://www.pagina7.cl/assets/desktop/p7-2018/img/logo-pagina7-blanco.png'
        },
        description: (`Escuchas:
         
         Titulo: Radio Punto 7 Osorno
         
         Pais: :flag_cl:
         
         Url: https://www.pagina7.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }