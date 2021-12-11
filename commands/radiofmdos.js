module.exports = {
    name: 'radiofmdos',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://22823.live.streamtheworld.com:80/FMDOS_SC');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Fm Dos
         
         Pais: :flag_cl:
         
         Url: https://www.fmdos.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }