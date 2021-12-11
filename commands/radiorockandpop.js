module.exports = {
    name: 'radiorockandpop',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://24383.live.streamtheworld.com:80/ROCK_AND_POP_SC');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Rock And Pop
         
         Pais: :flag_cl:
         
         Url: https://www.rockandpop.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }