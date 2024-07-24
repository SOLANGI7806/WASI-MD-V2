//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1BRmw3aEFQVkx3VUtac2FTc251dW9qdEhHTG1nSDl3eUdJazZtNlYyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk9BUnlJbmU5M0VJOXJqdzZ5MmdOZ3ROcmJYUmdYS1FOVVppWjEza0pUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQXJxbGNuQklML1VVSTRXNnlMa3VhcnRKNnNrOU1IeEJtd1pZNUxSK1ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwNDJud3Z4MkdoWEdmL0NGZjFXVFdtbnZjMmZ2cHFKM1BMYmxIQTFsZWpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFRE44YXRHWkNXRCtNL3RiSlcrdGVpQ05VQUVrRmFHSVNZTW9wbWJjSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQzZjhrWkIzMGxrS3lFaFhjOHoxL0F3M1ZMQStZU3czazczc1BYR01YalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdMdDJVcFJodFV3bDVUa1F6ZUY0RUlCNjZHMk1ia3YwM3AwN2RVeHQzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01iT1Qwdi9nNHBWMkNHQVE1M09kYTdtem0vK0YrQW8xQTJzeml5M2Z3ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdRTGorbHh6TVZKbmcxM05ueGp2UWtSWXFtYm43eG1RdjI2R3JmazdwMXZ5ZDNXMUhHZXdBR0h0RFdScENMTm9sWkFpQzIwYmFxR1phZGx1UktWQ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6IlVJMTlXd3NqRjFQYS9qb1hOaUl1UEUxbmNsdHJ3WU9pSDFyMk9KU3NqOTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5QN2pkdlUtUUJtOFFMWjhYWF94emciLCJwaG9uZUlkIjoiNGRhOWI1YjItM2RkYi00MjJhLTk4Y2YtZTYxZGZiZmYzOTlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhncmhqbFRhWWxuUElkc3c5emNlYnJ3RE5Uaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJacDNGK25qalFaUnltTi9JS3VzOWovcFNmTjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVM3NVc1TEMiLCJtZSI6eyJpZCI6IjkyMzI0MjM0MDc5NzoyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXZPaGFnR0VOMm5nN1VHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid2lrSURNbksvYWZidXltRkVTQ0xNdWs4VXlmRFBpb0hrbGhRQzlPdnkwdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoib2tnUkx1a29qTXFZWVlrQmFEeFE3Q0oxN1RlZlBvTnpNNzlMZityUzdHNkZOQk41NENUdFpuUGUrV1piS251a0FXck4zcVN1eTBFRUU2WmhaUlRTQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ill5My9BVGhmNW9Vd1JpSExLSEtVSytUT243WTd2UlhGc3c4VXJnL1laYmNPcDREL09OZm1QVVJOR2pKL2FWaEoxZEdNejhxMzRKWWNSTFhuL3MzbGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjQyMzQwNzk3OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNJcENBekp5djJuMjdzcGhSRWdpekxwUEZNbnd6NHFCNUpZVUF2VHI4dE0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4MTYwNDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0ZNIn0=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVoc0o1K1hGOG1kRnBQUHdoR1F2ZlY3WEViT05nUk05c1c0TUEraDIyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3kxOXcvT05zVVZFWXUwdW45SzRwV0JZZzVXZzJvcUlvK1B2UVhad1R5QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjRNNWNmRVkvWDBMQnVqY2l6WVNOZDJBR1NvVW5EMHFUdi9tTzA3Tlh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTckViZG9RNTAzaDBkSTIzK01NV2ZFREd4Vno3RTBLYkIzVWU2ZmxnM3h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNRzBpWSt3a05zZEJtS3k1S0E1VUVpdWNId0hRSUYvNGk1Y2FoK1l6RjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImoxVzE1cEY3QjNIRFNWMmxoUUNoUFQ0bkJNSXg1RUVJd01ydnZidVJRRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME4vaHVoUUpBdmhEcy8rR3FXSmdrcUJnZHZUMitoVnVVUGR2YzBsVlVuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlhU202Wnp6eE40VU53UDJvTTVmTU93K2JrR0pyV0Era1lmaGdtTk5nST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY3SmFwMGlkeHA5MkdaUDlwU2E5dE5IWU9PRWxyanArT0xjU2ROcWx4TE9rSlFORFRXL29vUjNSazIyUUkvamtQQldBbXdXQW1UalVrVVBEYzdxdENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJrT0Q4Zk9waG1DcGRKT2RZc3lyVkc4czB5eVBqVFVLS2pyV1FRbDdJR2pzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoVG9sX1ZWclNlbUU2SG15UC1Id1pRIiwicGhvbmVJZCI6ImM3MTA2N2U5LWVkNzQtNGY5Zi1iZjE2LWYzN2NjZWRjZmYwZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZjAxZTJpMlgxNjROK21vTy9GRXlmL1dTaDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXY2OTBSSmtzMU9MOVhmalBLTldudm1udGZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI0SjFRMjMyIiwibWUiOnsiaWQiOiI5MjMwMjEzNTU4MTM6NzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOFi0FaSEFS8JODriDLkM2iwrsgICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkg8JOGqfCWpI3wk4aqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcU40cjRIRU5tbWdMVUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxTjR3SVoydG1pQmV0UGdTTjB5TGpHS3F3cjFTb2dIaHJEVEJrdUMxTWtNPSIsImFjY291bnRTaWduYXR1cmUiOiJaY21QUHZ2c01xVDlUOG9Pb1Z4akg1aUJaMFk4cUNtWjk3K1lIWFJOZnY1WTZCeWd2bmU1Q3NDMDhrNVNWMXZlcmorTkc5aU1NMm9SaVM3b0dhQlJBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUktUanBHcFpZcmJERHNwRThOaUZteTRmUWljSXBBVWk1YWdnazVwYnBTZE5URVhna041LytlOUQwaW0zRHpCTlNCRms1QjNBcGhXdW9lcW9nb1BGQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMjEzNTU4MTM6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFRlTUNHZHJab2dYclQ0RWpkTWk0eGlxc0s5VXFJQjRhdzB3WkxndFRKRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTc2Njc1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNcEMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
