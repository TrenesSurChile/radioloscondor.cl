module.exports = {
    name: 'radiocorazon2',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://24923.live.streamtheworld.com/CORAZON_SC');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://pbs.twimg.com/profile_images/938754743702249472/7izC3ZSL_400x400.jpg'
        },
        description: (`Escuchas:
         
         Titulo: Radio Corazon Señal 2
         
         Pais: :flag_cl:
         
         Url: https://www.corazon.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }