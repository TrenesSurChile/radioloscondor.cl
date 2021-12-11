module.exports = {
    name: 'radiocooperativa',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://redirector.dps.live/cooperativafm/aac/icecast.audio');
      message.channel.send({embed: {
        color: 0099,
        description: (`**Escuchas:**
        
        Titulo: Radio Cooperativa 
        
        Pais: :flag_cl:
        
        url: https://www.cooperativa.cl`)}});
      return;
    })
    .catch(console.error);
}
    
  }