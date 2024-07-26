import { Context } from "grammy";

const startController = async (ctx: Context) => {
    console.log(ctx.from);
    
  await ctx.reply(`Welcome`);
};

export {startController}