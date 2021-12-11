module.exports = {
    name: 'radiordifm',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://sonando.us.digitalproserver.com/rdi.aac');
      message.channel.send({embed: {
        color: 0099,
        thumbnail: {
          url: 'https://rdifm.cl/wp-content/uploads/2017/05/logoRDI.png'
        },
        description: (`Escuchas:
         
         Titulo: Radio RDI concepcion 88.5fm
         
         Pais: :flag_cl:
         
         Url: https://www.rdifm.cl `)}});
      return;
    })
    .catch(console.error);
}
    
  }