module.exports = {
    name: 'ayuda',
    description: 'radioshjj',
    execute(message, args) { 

message.channel.send({embed: {
  color: 0099,
  description: ('**comandos de radio los condor chile**\n'+
                        '-> rd!invite         :: invita a este bot a tu servidor de discord.\n'+
                        '-> rd!soporte        :: servidor de discord de soporte de radio los condor.\n'+
                        '-> rd!ping   :: calcula mi latencia.\n'+
                        '-> rd!vote           :: apoyanos con un voto o reseña en top.gg.\n'+
                        '-> rd!play o rd!p [URL o nombre de la cancion]     :: comando para reproducir musica de youtube, debes estar en un canal de voz.\n'+
                        '-> rd!stop     :: comando para detener la reproduccion del audio de play o radios.\n'+
                        '-> rd!radios          :: ve la lista de radios que puedes sintonizar.\n'+
                        '-> rd!leave          :: desconecta el bot de un canal de voz.\n'+
                        '-> rd!paginaweb           :: link de nuestra pagina web de radio y noticias.\n'+
                        '-> rd!decir [texto]          :: escribe lo que quieras que el bot diga!.\n'+
                        '-> rd!ban <@user>   :: Banea a un usuario de tu servidor.\n'+
                        '-> rd!kick <@user>  :: expulsa a un usuario de tu servidor.\n'+
                        '-> rd!topradios  :: ve la lista de las mejores radios.\n'+
                        '-> rd!version  :: ve informacion del bot, version, creacion y mas.\n'+
                '-☆Comandos Beta☆-    estos pueden contener errores!\n'+
                '-> rd!clear [2 a 100 max] borra una cantidad de mensajes de un canal de texto\n'+
                
                        'Radio los condor | Bot')}});
    
  }
};