//=============================================================================

//  ███████╗  █████╗  ███╗   ██╗ ██████╗  ███████╗ ███████╗    ███╗   ███╗ ██████╗          
//  ██╔════╝ ██╔══██╗ ████╗  ██║ ██╔══██╗ ██╔════╝ ██╔════╝    ████╗ ████║ ██╔══██╗               
//  ╚█████╗  ███████║ ██╔██╗ ██║ ██║  ██║ █████╗   ███████╗    ██╔████╔██║ ██║  ██║                    
//   ╚═══██╗ ██╔══██║ ██║╚██╗██║ ██║  ██║ ██╔══╝   ╚════██║    ██║╚██╔╝██║ ██║  ██║             
//  ██████╔╝ ██║  ██║ ██║ ╚████║ ██████╔╝ ███████╗ ███████║    ██║ ╚═╝ ██║ ██████╔╝                       
//  ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝  ╚══════╝ ╚══════╝    ╚═╝     ╚═╝ ╚═════╝      
//  
// © SANDES MD 2026 | MADE BY MR.SANDES 🍒 | ALL RIGHTS RESERVED !

//===========================================================================

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZBdTWa7L#Jb7m2sI0TPJKwPn7E84nzh-13yq5XoVwoQ0ppy72kuQ",
ALIVE_IMG : process.env.ALIVE_IMG || "https://upld.zone.id/uploads/d4i0x5iq/sandes-md-v2.webp",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
};
