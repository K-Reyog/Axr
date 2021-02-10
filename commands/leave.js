

module.exports = {

name : 'leave',
aliases :['fuckoff','out','remove'],
description : 'stops the bot and leaves the vc',
async execute(client,message , args){
const vc = message.member.voice.channel;
if(!vc) return message.channel.send("You need to be in a voice channel to stop the music");
await vc.leave();
await message.channel.send('Leaving the vc :smiling_face_with_tear:')



}


}