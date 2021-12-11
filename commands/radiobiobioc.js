module.exports = {
    name: 'radiobiobioc',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://unlimited3-cl.dps.live/biobioconcepcion/aac/icecast.audio');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://www.biobiochile.cl/assets/escritorio/bbcl-2020/img/bbcl-logo.png'
        },
        description: (`Escuchas:
         
         Titulo: Radio Bio Bio Concepcion
         
         Pais: :flag_cl:
         
         Url: https://www.biobiochile.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }