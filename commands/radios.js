module.exports = {
    name: 'radios',
    description: 'radioshjj',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**comandos de radio los condor chile**\n'+
                      '-> rd!radioscl         :: listado de radios chilenas para reproducir en un canal de voz.\n'+
                      '-> rd!radioscl2         :: listado de radios chilenas 2 para reproducir en un canal de voz.\n'+
                      '-> rd!radiosarg         :: listado de radios argentinas para reproducir en un canal de voz.\n'+
                      '-> rd!radiospe         :: listado de radios peruanas para reproducir en un canal de voz.\n'+
                      '-> rd!uradios         :: listado de ultimas radios añadidas para reproducir en un canal de voz.\n'+
                      '-> rd!topradios         :: listado de las mejores radios para reproducir en un canal de voz.\n'+
                      'Radio los condor | Bot')}});
    
  }
}