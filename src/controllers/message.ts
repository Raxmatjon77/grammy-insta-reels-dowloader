import { Context } from "grammy";
import axios from 'axios'
import { bot } from "../core/bot";
const reelUrlRegex =
  /^https:\/\/www\.instagram\.com\/reel\/[A-Za-z0-9_-]+\/(\?.*)?$/;




const validateReelUrl = (url: string) => reelUrlRegex.test(url);
const downloadinstaReel=async(url:string,ctx:Context)=>{
    const options = {
      method: "GET",
      hostname: process.env.host,

      path: url,
      
      
    };

    try {
          const response = await axios.request(options);
          console.log(response);
          await ctx.replyWithVideo(response.data.media);
    } catch (error) {
        console.log(error);
        
        await ctx.reply('couldnt download your video !')
    }
  
    
}
const messageController = async (ctx: Context) => {
 const msg=ctx.message?.text as string

 
  const isValid = validateReelUrl(msg);
  console.log(isValid);
  
  if (isValid) {
     await ctx.reply(`Please wait , your request is being proccessed !`);
     await ctx.replyWithChatAction("upload_video")
  }
  else{
      return  await ctx.reply(`please enter a valid url !`);
  }
  await downloadinstaReel(msg,ctx)
 
};

export { messageController };
