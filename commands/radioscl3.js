module.exports = {
    name: 'radioscl3',
    description: 'radioshelp',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**Radios chilenas por Shoutcast o icecast**\n'+
                        '-> rd!radiopudahuel          :: sintoniza el audio de la radio pudahuel CL.\n'+
                        '-> rd!radioceania          :: sintoniza el audio de la radio oceania talcahuano 93.7fm.\n'+
                        
                        'Radio los condor | bot')}});
    
  }
};