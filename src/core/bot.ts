import { Bot } from "grammy";

const token = process.env.BOT_TOKEN as string;
const bot = new Bot(token);

export {bot}
