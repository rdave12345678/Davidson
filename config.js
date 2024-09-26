//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348109243618";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdlMmplSGdHYWpRbXVrY1FyU3h0TnJYY2RQbjk2YjJDbFRobUhLZllIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm9WR0V0bWx0TFhRZVdWMGI2RC9USWZpNXpMdHdJRHRIMG9YSHo5Tm9Yaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSEtYMXBkU0szaTEwOHNMUmwvTXUxZlk1c2lGOGNKNWJEd2JjSHkzRlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdDdXZjBSYzBuaHlCL2VIbkdJZ1IzcDU0WFJ1WXFUTlNUL0hSUStNS0U4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQbGJMQldBb1B2TTZ5K1JYdDROeVZkYzVwKzJpNEJqbDBuZGhpaWp2VWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50cDk1OExnbW5UWHdIZkpFOWNMdVBSR1NraSs0QlVTOHYvK0sybkhiQ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpSK2hWd1ZvalQ4MUZKMWRxamQ2a1NZSWhlOFFGQ2VpUWJDR3VOVkpWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVuSDEySytYN2JwSTVuN2VWcmhmOVl0ckdrcmdEYXFXdWVrUzQzTE9YST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxKTnRvMTN5S1JxRFRxK1hRQkRuSjk5SjZ0SHhJZ1VlSDZkWllFYzFyOHpEbEpmVHF6c2pORnpYdEZDemVhM1NQb1RrQjRVRlgwdFBLdzdOaDlOZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Inc3MlZIT0o2Qm1GOFZ5SHhFUUJ2RmxUa2ZrNis3SndxZ0JFK1RlelQvWTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1NTEwODEzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QTZGQUFDNUFDN0FDMUEzMzNCMEZBRDZCQTVCMjY1OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MzgzMTc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpTW0tb3U4OVJRLTNMeDBybTVIOTR3IiwicGhvbmVJZCI6ImI0NmEyYjJkLTM2MzItNDU2Yi1hZDRhLWUwYmEzMzFiNDU0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVkJMb2dEclJDVTVpWmp0L0hBdExISkljYVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2p0Y01xcER5UVV5TDR5MTR2S2ZLUzdueXk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldXVFM5UlJLIiwibWUiOnsiaWQiOiIyMzQ4MTU1MTA4MTMyOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhdmlkc29uIPCfkb3wn6unIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMWHNvWVlFRVBpTTE3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOWlJuRmlXcjhWdDYwQXhDMlRKVnlXc2JCVGVRS01TVm54cW5ZL08xTGd3PSIsImFjY291bnRTaWduYXR1cmUiOiJsb0JnWFV1ak5lYUg2dDQwYnNKeVJoMERrZjRhY0YrY1hjYStRK2ROeUJUWkcyNktEM2tEU3liRmZqNk5ldHJvcUt5OW9GT3hXeE0yb0RFc2I5SnNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUzdBY1ZvK0ZtRTRPS0JpN3hDQThHUWJSTmdFc3BGaFBJOXhaUWVzdmJXY2RwQ3Jub3M0UG9tUGxML08veTB4cVFJcWIxQ1dpRjJCTXM0cGtRYTdZanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU1MTA4MTMyOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRXVVp4WWxxL0ZiZXRBTVF0a3lWY2xyR3dVM2tDakVsWjhhcDJQenRTNE0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczODMxNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHpHIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "DAVIDSON",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
