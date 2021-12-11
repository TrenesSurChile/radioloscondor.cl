module.exports = {
    name: 'radioscl',
    description: 'radioshelp',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**Radios chilenas por Shoutcast o icecast**\n'+
                        '-> rd!radiocondor          :: sintoniza nuestro servicio de streaming de musica de radio.\n'+
                        '-> rd!radioudec          :: sintoniza el audio de la radio de la universidad de concepcion.\n'+
                        '-> rd!radiobiobioc          :: sintoniza el audio de streaming de radio bio bio concepcion.\n'+
                        '-> rd!radiobiobios          :: sintoniza el audio de streaming de radio bio bio santiago.\n'+
                        '-> rd!radiobiobiot          :: sintoniza el audio de streaming de radio bio bio temuco.\n'+
                        '-> rd!radiobiobiov          :: sintoniza el audio de streaming de radio bio bio valparaiso.\n'+
                        '-> rd!radiobiobiop          :: sintoniza el audio de streaming de radio bio bio puerto montt.\n'+
                        '-> rd!radioconquistador          :: sintoniza el audio de la radio el conquistador chile.\n'+
                        '-> rd!radiorockandpop          :: sintoniza el audio de la radio rock and pop.\n'+
                        '-> rd!adnradio          :: sintoniza el audio de adnradio.\n'+
                        '-> rd!radiolos40          :: sintoniza el audio de la radio los 40 chile.\n'+
                        '-> rd!los40internacional          :: sintoniza el audio de la radio los 40 internacional.\n'+
                        '-> rd!radiocooperativa          :: sintoniza el audio de la radio cooperativa.\n'+
                        '-> rd!radiofmdos          :: sintoniza el audio de la radio fmdos chile.\n'+
                        '-> rd!radiocorazon1          :: sintoniza el audio de la radio corazon (señal 1).\n'+
                        '-> rd!radiocorazon2          :: sintoniza el audio de la radio corazon (señal 2).\n'+
                        '-> rd!radiopositiva          :: sintoniza el audio de la radio positivafm.\n'+
                        '-> rd!radiopunto7c          :: sintoniza el audio de la radio punto 7 concepcion.\n'+
                        '-> rd!radiopunto7v          :: sintoniza el audio de la radio punto 7 valparaiso.\n'+
                        '-> rd!radiopunto7o          :: sintoniza el audio de la radio punto 7 osorno.\n'+
                        '-> rd!radiopunto7p          :: sintoniza el audio de la radio punto 7 puerto montt.\n'+
                        '-> rd!radiopunto7t          :: sintoniza el audio de la radio punto 7 temuco.\n'+
                        '-> rd!radiocarolina          :: sintoniza el audio de la radio carolina.\n'+
                        'Radio los condor | Bot')}});
    
  }
};