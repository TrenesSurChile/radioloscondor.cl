module.exports = {
    name: 'radiofrecuencia',
    description: 'radiospe',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://oyotunstream.com:7066/;');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Frecuencia
         
         Pais: Peru
         
         Url: https://www.radiofrecuencia.com.pe/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }