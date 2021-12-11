module.exports = {
    name: 'decir',
    description: 'hablar',
    execute(message, args) { 

      let texto = args.join(" ");
      
    if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send({embed: {
      color: 3447003,
      description: (texto)
    }});
    message.delete();
}
};
      
      