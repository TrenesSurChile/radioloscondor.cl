module.exports = {
    name: 'radiospe',
    description: 'radioshelperu',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**Radios Peruanas por Shoutcast o icecast**\n'+
                        '-> rd!radioforo          :: sintoniza el audio de la radio foro.\n'+
                        '-> rd!radiodimension          :: sintoniza el audio de la radio dimension peru.\n'+
                        '-> rd!radiomaxima          :: sintoniza el audio de streaming de radio maxima PE.\n'+
                        '-> rd!radiofrecuencia          :: sintoniza el audio de la radio frecuencia peru.\n'+
                        '-> rd!radiomixpe          :: sintoniza el audio de la radio mix peru.\n'+
                        'Radio los condor | Bot')}});
    
  }
};