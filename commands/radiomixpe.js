module.exports = {
    name: 'radiomixpe',
    description: 'radiospe',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://stream.zeno.fm/6uxq6nw4nbruv');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Mix
         
         Pais: Peru
         
         Url: Desconocido `)}});
      return;
    })
    .catch(console.error);
}
    
  }