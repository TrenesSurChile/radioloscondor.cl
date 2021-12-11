module.exports = {
    name: 'version',
    description: 'radioshjj',
    execute(message, args) { 

  message.channel.send({embed: {
    color: 0099,
    thumbnail: {
      url: 'https://images.discordapp.net/avatars/823927694176682014/a81ef708ad33b8bc53b7b201b25b5fea.png'
    },
    description: (`**Version:** 1.2.495 Beta 
    **Desarrollado Por:** Team Radio Los Condor
    **Fecha De Creacion Del Bot:** 21 de marzo del 2021`)}});
} 
    };