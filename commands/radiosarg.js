module.exports = {
    name: 'radiosarg',
    description: 'radioshelparg',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**Radios argentinas por Shoutcast o icecast**\n'+
                        '-> rd!radiolatina          :: sintoniza el audio de la radio latina.\n'+
                        '-> rd!radiometro          :: sintoniza el audio de la radio metro a.m. 951.\n'+
                        '-> rd!radiocadena          :: sintoniza el audio de streaming de radio cadena.\n'+
                        '-> rd!radioam870          :: sintoniza el audio de la radio a.m. 870.\n'+
                        '-> rd!radiolt14          :: sintoniza el audio de la radio lt14 A.M.\n'+
                        '-> rd!radiopatagonia          :: sintoniza el audio de LU4 radio patagonia ARG.\n'+
                        '-> rd!radiolagoarg          :: sintoniza el audio de la radio lago argentino.\n'+
                        '-> rd!radioneuquen          :: sintoniza el audio de la radio neuquen argentina.\n'+
                        '-> rd!radiotucuman          :: sintoniza el audio de la LRA15 tucuman A.M. argentina.\n'+
                        '-> rd!radiolos40arg          :: sintoniza el audio de la radio los 40 argentina.\n'+
                        '-> rd!radiomitre          :: sintoniza el audio de la radio mitre arg.\n'+
                        '-> rd!radiosolfm          :: sintoniza el audio de la radio fm del sol 104.3 f.m.\n'+
                        '-> rd!radiorosario          :: sintoniza el audio de la radio nacional rosario arg.\n'+
                        '-> rd!radiodistorsion         :: sintoniza el audio de la radio distorsion.\n'+
                        'Radio los condor | Bot')}});
    
  }
};