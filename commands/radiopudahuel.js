module.exports = {
    name: 'radiopudahuel',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://24383.live.streamtheworld.com:3690/PUDAHUEL_SC');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Corazon Señal 1
         
         Pais: :flag_cl:
         
         Url: https://www.pudahuel.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }