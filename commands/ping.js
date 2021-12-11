module.exports = {
    name: 'ping',
    description: 'hablar',
    execute(message, args) { 

      let ping = Math.floor(message.client.ping);
  
  message.channel.send("Calculando...")
    .then(m => {

        m.edit({embed:{
          color: 0099,
          description: (`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)}});
    
    });
}
}      
      