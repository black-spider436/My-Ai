"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { bravin } = require("../sir/bravin");
bravin({ nomCom: "test1", reaction: "😎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Hello* 👋 \n\n ' + "i'm a whatsapp bot multi-device created by Leonard Tech";
    let d = '                                                                          ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴇᴏɴᴀʀᴅ ᴛᴇᴄʜ✨';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/2o8xqq.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
