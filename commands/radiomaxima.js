module.exports = {
    name: 'radiomaxima',
    description: 'radiospe',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://89.40.13.145:2092/;');
      message.channel.send({embed: {
        color: 0099,
        description: (`Escuchas:
         
         Titulo: Radio Maxima FM
         
         Pais: Peru
         
         Url: https://maximafmperu.com/ `)}});
      return;
    })
    .catch(console.error);
}
    
  }