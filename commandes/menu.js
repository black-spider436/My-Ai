const util = require('util');

const fs = require('fs-extra');

const { bravin } = require(__dirname + "/../sir/bravin");

const { format } = require(__dirname + "/../sir/bravin");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



bravin({ nomCom: "bravin", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

┏━━ MY AI ━━┓
┃   ᴍᴏᴅᴇ: ${mode}
┃   ᴜsᴇʀ : ${s.OWNER_NAME}
┃
┣━leonard md new vision 𒈒━➠
┗━━━𒈒by myself 𒈒━━┛\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣●my tech
┣●tech
┗━━━━━━━━━━━━━━┛\n




myself cmds𒈒
`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃● ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏myself tech
┣❏ 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃●ᴘᴏᴡᴇʀᴇᴅ ʙʏ myself 
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *LEONARD-MD*, déveloper Fredie" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          
