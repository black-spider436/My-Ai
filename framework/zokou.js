var tabCmds = [];
let cm = [];
function bravin(obj, fonctions) {
    let infoComs = obj;
    if (!obj.categorie) {
        infoComs.categorie = "General";
    }
    if (!obj.reaction) {
        infoComs.reaction = "💥";
    }
    infoComs.fonction = fonctions;
    cm.push(infoComs);
    // console.log('chargement...')
    return infoComs;
}
module.exports = { bravin, Module: bravin, cm };
