const util = require('util');

const fs = require('fs-extra');

const {bravin} = require(__dirname + "/../sir/bravin");

const { format } = require(__dirname + "/../sir/bravin");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



bravin({ nomCom: "list", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../sir/bravin");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `
╭────✧ *SIR BRAVIN* ✧────◆
      ᴍᴀᴅᴇ ʙʏ MY AI 
     ╭──────────────
|©│   *ᴘʀᴇғɪx* : ${s.PREFIXE}
|©│   *ᴘʀᴏᴘʀɪᴇᴛᴀɪʀᴇ* : ${s.OWNER_NAME}
|©│   *ᴍᴏᴅᴇ* : ${mode}
|©│   *ᴄᴏᴍᴍᴀɴᴅᴇs* : ${cm.length}
|©│   *ᴅᴀᴛᴇ* : ${date}
|©│   *ʜᴏᴜʀ* : ${temps}
|©│   *ʀᴀᴍ* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
|©│   *ᴘʟᴀᴛᴇғᴏʀᴍᴇ* : ${os.platform()}
|©│   *ᴅᴇᴠᴇʀᴏᴘᴇʀ* : *MYSELF*
|©│   *ɴᴀᴛɪᴏɴ* : WORLD 🌍 
|©|    * ᴠᴇʀsɪᴏɴ*    : ᴠ10.0.0
    ╰───────────────
╰─────✧ʟᴇᴏɴᴀʀᴅ ᴍᴅ✧─────◆ \n\n`;
    
    let menuMsg = `
ᴛʜɪs ɪs ʟᴇᴏɴᴀʀᴅ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *my ai*


*ᴇɴᴊᴏʏ ᴛʜᴇ ɴᴇᴡ ᴠᴇʀsɪᴏɴ*
`;

    if (commandeOptions.categorie) {
        const categorieSelectionnee = commandeOptions.categorie;
        if (coms[categorieSelectionnee]) {
            menuMsg += `╭────✧ © ${categorieSelectionnee} © ✧────`;
            for (const cmd of coms[categorieSelectionnee]) {
                menuMsg += `
*➜︎︎︎ ${cmd}*`;
            }
            menuMsg += `
╰═════════════⊷\n`;
        } else {
            menuMsg += `La catégorie "${categorieSelectionnee}" n'existe pas.\n`;
        }
    } else {
        for (const cat in coms) {
            menuMsg += `╭────✧ © ${cat} © ✧────`;
            for (const cmd of coms[cat]) {
                menuMsg += `
*➜︎︎ ${cmd}*`;
            }
            menuMsg += `
╰═════════════⊷ \n`;
        }
    }

    menuMsg += `
◇            ◇
*»»————— ★ —————««*
" 🥷🥷🥷🥷🥷🥷🥷🥷🥷."
 
 *ᴅᴇᴠᴇʀᴏᴘᴇᴅ ʙʏ *My AI*
*»»—————    ★   —————««*
`;

    var lien = mybotpic();

    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            zk.sendMessage(dest, { video: { url: lien }, caption: infoMsg + menuMsg, footer: "Je suis *Leonard-MD*, développé par LEONARD-TECH" , gifPlayback : true }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            zk.sendMessage(dest, { image: { url: lien }, caption: infoMsg + menuMsg, footer: "Je suis *Leonard-MD*, développé par LEONARD-TECH" }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else {
        repondre(infoMsg + menuMsg);
    }
});
