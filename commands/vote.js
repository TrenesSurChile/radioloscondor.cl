module.exports = {
    name: 'vote',
    description: 'radioshjj',
    execute(message, args) { 

  message.channel.send({embed: {
    color: 0099,
    thumbnail: {
      url: 'https://images.discordapp.net/avatars/823927694176682014/a81ef708ad33b8bc53b7b201b25b5fea.png'
    },
    description: ("Apoyanos con un Voto o reseña en top.gg! https://top.gg/bot/823927694176682014")}});
} 
    };