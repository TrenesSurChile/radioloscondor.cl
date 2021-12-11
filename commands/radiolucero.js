module.exports = {
    name: 'radiolucero',
    description: 'radioscl',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7008/stream');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Lucero 
         
         Pais: :flag_cl:
         
         Url: https://www.radiolucero.cl/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }