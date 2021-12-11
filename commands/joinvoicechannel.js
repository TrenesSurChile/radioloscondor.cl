module.exports = {
    name: 'joinvoicechannel',
    description: 'hablar',
    execute(message, args) { 

   let Canalvoz = message.member.voice.channel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en tu canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
     Canalvoz.join().then(() => {
               message.channel.send(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         })
     })
    }
}
};