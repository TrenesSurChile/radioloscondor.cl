module.exports = {
    name: 'decir',
    description: 'hablar',
    execute(message, args) { 

      let texto = args.join(" ");
      
    if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send({embed: {
      color: 3447003,
      description: (texto),
      footer: {
		  text: 'Creado Por TrenesSur.cl',
		  icon_url: 'https://cdn.discordapp.com/avatars/511655332158898176/0267ac8053c56f5aa9a336abb0cb0700.png',
	},
    }});
    message.delete();
}
};
      
      