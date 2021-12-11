module.exports = {
    name: 'radiocarolina',
    description: 'radioschile',
    execute(message, args) { 

let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
      voiceChannel.join().then(conexion =>{
      conexion.play('http://redirector.dps.live/carolinafm/aac/icecast.audio?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;gdpr=0&amp;us_privacy=1YNY&amp;partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTYzMjk0MDE3OSwiaXNzIjoidGlzcnYifQ.SbWtdBmDkqjOP7lL5-mhXc30tupvlvllLZ7pI2ka27g');
      message.channel.send({embed: {
      color: 3447003,
      thumbnail: {
        url: 'https://www.carolina.cl/_templates/desktop/includes/img/footer-logo-1.png'
      },
      description: (`**Escuchas:**

      **Titulo:** Radio Carolina CL

      **Pais:** :flag_cl:

      **URL:** https://www.carolina.cl`)}});
        
      
      return;
    })
    .catch(console.error);
}
    
  }