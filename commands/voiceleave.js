module.exports = {
    name: 'voiceleave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("necesitas estar en un canal de voz para poder detener la musica y apagarme!");
        await voiceChannel.leave();
        await message.channel.send({embed: {
         color: 3447003,
         description: (`Abandonando el Canal de Voz :white_check_mark:`)}});
 
    }
};