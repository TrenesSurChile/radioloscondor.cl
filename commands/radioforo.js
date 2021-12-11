module.exports = {
    name: 'radioforo',
    description: 'radiospe',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://streamssl.eu:1310/;');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Foro
         
         Pais: Peru
         
         Url: https://www.radioforo.com.pe/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }