module.exports = {
    name: 'radiotendenciabuin',
    description: 'radioscl',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7013/stream');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Tendencia Buin FM 
         
         Pais: :flag_cl:
         
         Url: https://www.radiotendenciabuin.cl/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }