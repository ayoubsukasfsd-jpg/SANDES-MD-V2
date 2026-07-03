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
SESSION_ID: process.env.SESSION_ID || "wF8w0A4Z#HoUV8QuadTuBZaDGITfvWZwxZya4WR0yJO_0pTA0tT4",
ALIVE_IMG : process.env.ALIVE_IMG || "https://upld.zone.id/uploads/d4i0x5iq/sandes-md-v2.webp",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
};
