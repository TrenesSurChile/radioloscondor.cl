module.exports = {
    name: 'los40',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://24383.live.streamtheworld.com:80/LOS40_CHILE_SC');
       message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://los40es00.epimg.net/los40/iconos/v2.x/v1.0/logos/logo_40_principales_menu.png'
        },
        description: (`Escuchas:
         
         Titulo: Los 40
         
         Pais: :flag_cl:
         
         Url: https://www.los40.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }