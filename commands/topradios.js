module.exports = {
    name: 'topradios',
    description: 'radioshelp',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**las mejores radios catalogadas!**\n'+
                        '-> rd!radiocarolina          :: sintoniza el audio de la radio carolina.\n'+

                        '-> rd!radioceania          :: sintoniza el audio de la radio oceania talcahuano 93.7fm.\n'+

                        '-> rd!radioquebuena          :: sintoniza el audio de la radio que buena 91.1 fm curico.\n'+

                        '-> rd!radiobuensonido         :: sintoniza el audio de la radio buen sonido coronel.\n'+

                        '-> rd!radiopunto7p         :: sintoniza el audio de la radio pagina 7 puerto montt.\n'+

                        '-> rd!radiocorazon1        :: sintoniza el audio de la radio corazon.\n'+

                        '-> rd!radiopositiva         :: sintoniza el audio de la radio positiva.\n'+

                        '-> rd!radiolos40        :: sintoniza el audio de la radio los 40 chile.\n'+

                        '-> rd!radiocondor2        :: sintoniza el audio de la radio los condor 2 biobio.\n'+

                        '-> rd!radiocondor        :: sintoniza el audio de la radio los condor bio bio.\n'+
                        'Radio los condor | bot')}});
    
  }
};