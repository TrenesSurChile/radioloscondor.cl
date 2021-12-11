const ytdl = require('ytdl-core');
const ytSearch = require('yt-search')

const queue = new Map();

module.exports = {
    name: 'play23',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        const usermessage = message.author;
 
        if (!voiceChannel) return message.channel.send('necesitas estar en un canal de voz para usar este comando!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!args.length) return message.channel.send('You need to send the second argument!');


        const server_queue = queue.get(message.guild.id);
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();

            const stream  = ytdl(args[0], {filter: 'audioonly'});

            const song_info = await ytdl.getInfo(args[0]);
 
            connection.play(stream, {seek: 0, volume: 1.5})
            .on('finish', () => {
                message.channel.send({embed: {
                  color: 0099,
                  description: (`usa rd!leave para sacarme del canal de voz o si deseas continuar escuchando musica usa rd!p [url o nombre de la cancion]`)}});
            });
 
            await message.reply({embed: {
      color: 3447003,
      thumbnail: {
        url: `${args}`},
      description: (`**Escuchas:**
      titulo: ${song_info.videoDetails.title}
      descripcion: ${song_info.videoDetails.description}
      canal: ${song_info.videoDetails.ownerChannelName}

      vistas: ${song_info.videoDetails.viewCount}
      URL: ${song_info.videoDetails.video_url}
      
      **Musica Puesta Por:** ${usermessage}`),
      }});  
      message.delete();
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1.5})
            .on('finish', () =>{
                message.channel.send({embed:{
            color: 0099,
            description: ("usa rd!leave para sacarme del canal de voz o si deseas continuar escuchando musica usa rd!p [url o nombre de la cancion]")}})
            });
            
           await message.reply({embed: {
      color: 3447003,
      thumbnail: {
        url: `${video.image}`
      },
      description: (`**Escuchas:**
      **Titulo:** ${video.title}
      **Descripcion:** ${video.description}
      **Vistas**: ${video.views}
      **URL:** ${video.url}

      **Duracion: ${video.timestamp}**
      
      **Musica Puesta Por:** ${usermessage}`)
      }});  
        message.delete();


        } else {
            message.channel.send('No se encontraron videos');
        } 
    }
};

