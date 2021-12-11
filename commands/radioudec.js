module.exports = {
    name: 'radioudec',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('https://audio.divalstream.com:7019/stream');
      message.channel.send({embed: {
      color: 3447003,
      description: (`**Escuchas:**

      **Titulo:** Radio Udec

      **URL:** https://www.radioudec.cl`)}});
      
        return;
    })
    .catch(console.error);
}
}