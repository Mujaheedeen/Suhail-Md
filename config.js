const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://linktr.ee/ateamupdates"                       // put your app url here,
global.email ="ateamupdates@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "Q1mrcXYDBfumTs7g@aadam.kk0lkf4.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://linktr.ee/ateamupdates";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaEeQjhLNSZvnrfrCB17";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaEeQjhLNSZvnrfrCB17" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f8c17a0ea93ea15c4e322.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ATeam Bot" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349060687356";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f8c17a0ea93ea15c4e322.png" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_08_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVXZJbVhNVHVXTWZ6MUlZdmJEbDI0RUFUcXh6NjV1OWVGcU1hOGZqYThjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjA2ODczNTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwRUE2MkI4RDkyN0VGMTlDQkU2MTQyMzIyOThCNDU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE2MjQ2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjA2ODczNTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxMEExM0Y3RTIyREZDRjlGMjUxMjlDMzhGOThCRDgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE2MjQ2N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIWlRRUjZHd1JCMnVDQUo5Sk1sVmt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNTU2YThkLTZmMWEtNGNkNi1hYzgyLTc0YWQzMmQ3ODljM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAyNSxcbiAgICAgIDEyNyxcbiAgICAgIDQ1LFxuICAgICAgNzUsXG4gICAgICAxNTksXG4gICAgICAzMCxcbiAgICAgIDEwNCxcbiAgICAgIDE2NixcbiAgICAgIDY0LFxuICAgICAgODUsXG4gICAgICAxNzgsXG4gICAgICA0LFxuICAgICAgNTcsXG4gICAgICA3NixcbiAgICAgIDEzOSxcbiAgICAgIDMzLFxuICAgICAgMjI4LFxuICAgICAgNTAsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICA1NyxcbiAgICAgIDE5MixcbiAgICAgIDE4OCxcbiAgICAgIDI0NyxcbiAgICAgIDU3LFxuICAgICAgMTI3LFxuICAgICAgMTI4LFxuICAgICAgMjIxLFxuICAgICAgMjQ0LFxuICAgICAgOTcsXG4gICAgICA4NixcbiAgICAgIDI0NyxcbiAgICAgIDE0NCxcbiAgICAgIDEzOCxcbiAgICAgIDM1LFxuICAgICAgOTksXG4gICAgICAxNjYsXG4gICAgICAxNjksXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFkzUFM0VFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjA2ODczNTY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTQ4Mjk5ODg3NTM1NDI6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBVGVhbSBCT1Twn6SWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9xbjVzR0VOaXM0Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5L2l1VHhwV0dYYXhucUllVXZzcDF2azV4Vjd5YXZTd1VzT1Rod2QyaERNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJwRDNWaTVKdlV6TUl1ZHpwaXVCVXRSeStRSzZ3cW95K1ovcElqRTE2cFFncCtwanpSZ0k5RVJESnV6VjE0cDRvR1ZMSFR3dnFsZkhNZzVzY25zYUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE3Q2hmUVdHaDdYbkhqRFhjWmZYVC92czk3OXVsR3ZGb3ZLdGhnZXp6MGVRM0p0Rk1jeFJNN01FTkh3YWhncFMyRmNRVjhYOGZhQ3k4aUJTbXVqRGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjA2ODczNTY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTYyNDYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1lPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDWU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFYTBmWldWRUVlRWJER3BRd1NxY29RLzFhbVhNUEhFaEFyTUs5RmR2cGhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2Njc3NDkxMjAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ATEAM" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ATeam",
  packname: process.env.PACK_NAME || "https://linktr.ee/ateamupdates",
  botname : process.env.BOT_NAME  || "ATeam-Bot",
  ownername:process.env.OWNER_NAME|| "ATeam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "wvC4U4pJe8UHatcM4Bctowd8",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ATEAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "9a24d795147f3e1ff7efd5f08ba80f64";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
