
const {
  bravin 
} = require('../sir/bravin');
const {
  default: axios
} = require('axios');
bravin({
  'nomCom': "code",
  'aliases': ["session", "pair", 'paircode', "qrcode"],
  'reaction': '🖇️',
  'categorie': "General"
}, async (_0x37a4e3, _0x5431e1, _0x653f48) => {
  const {
    repondre: _0x48606d,
    arg: _0x3a75e4
  } = _0x653f48;
  try {
    if (!_0x3a75e4 || _0x3a75e4.length === 0x0) {
      return _0x48606d("Example Usage: .code 2547172xxxx.");
    }
    await _0x48606d("*Wait LEONARD TECH is generating your pair code 💥...*");
    const _0x18742f = encodeURIComponent(_0x3a75e4.join(" "));
    const _0x3cccc6 = "https://leonard-session-091.onrender.com/code?number=" + _0x18742f;
    const _0x46db02 = await axios.get(_0x3cccc6);
    const _0x1dc9bc = _0x46db02.data;
    if (_0x1dc9bc && _0x1dc9bc.code) {
      const _0x52dd0e = _0x1dc9bc.code;
      await _0x48606d('' + _0x52dd0e);
      await _0x48606d("Here is your pair code, copy and paste it to the notification above or link devices.");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x1885b4) {
    console.error("Error getting API response:", _0x1885b4.message);
    _0x48606d("Error getting response from API.");
  }
});

// const _0x1a1c76=_0xeb05;(function(_0x53ce2c,_0x42a330){const _0x118412=_0xeb05,_0x175519=_0x53ce2c();while(!![]){try{const _0x27b592=parseInt(_0x118412(0x1ec))/0x1*(-parseInt(_0x118412(0x1e4))/0x2)+parseInt(_0x118412(0x1ee))/0x3+parseInt(_0x118412(0x1ea))/0x4*(-parseInt(_0x118412(0x1e1))/0x5)+parseInt(_0x118412(0x1f0))/0x6*(parseInt(_0x118412(0x1f6))/0x7)+parseInt(_0x118412(0x1e6))/0x8+parseInt(_0x118412(0x1f5))/0x9*(parseInt(_0x118412(0x1e2))/0xa)+parseInt(_0x118412(0x1eb))/0xb;if(_0x27b592===_0x42a330)break;else _0x175519['push'](_0x175519['shift']());}catch(_0x1b1b69){_0x175519['push'](_0x175519['shift']());}}}(_0x4d06,0xe39c6));const {zokou}=require(_0x1a1c76(0x1f3)),{default:axios}=require('axios');function _0xeb05(_0x191db0,_0x203753){const _0x4d0620=_0x4d06();return _0xeb05=function(_0xeb0566,_0x4d5ab0){_0xeb0566=_0xeb0566-0x1e1;let _0x1c2e27=_0x4d0620[_0xeb0566];return _0x1c2e27;},_0xeb05(_0x191db0,_0x203753);}function _0x4d06(){const _0x540891=['qrcode','1134531cNhhXk','length','125766lIxebn','data','https://bega-normal-scanner.onrender.com/code?number=','../framework/zokou','Invalid\x20response\x20from\x20API.','3303SrQSfA','77TfbzFk','error','10YGiKUe','23690UaAKHC','General','42qAQyjr','code','4362776GdUnWk','Here\x20is\x20your\x20pair\x20code,\x20copy\x20and\x20paste\x20it\x20to\x20the\x20notification\x20above\x20or\x20link\x20devices.','message','Error\x20getting\x20API\x20response:','1843052GhtLDr','16811520uJMmWH','80858DMWybG'];_0x4d06=function(){return _0x540891;};return _0x4d06();}zokou({'nomCom':_0x1a1c76(0x1e5),'aliases':['session','pair','paircode',_0x1a1c76(0x1ed)],'reaction':'🤳','categorie':_0x1a1c76(0x1e3)},async(_0xd75092,_0x2dd404,_0x1cf593)=>{const _0xa7f9a6=_0x1a1c76,{repondre:_0xf1bcb9,arg:_0x500b9d}=_0x1cf593;try{if(!_0x500b9d||_0x500b9d[_0xa7f9a6(0x1ef)]===0x0)return _0xf1bcb9('Example\x20Usage:\x20.code\x2025474398xxxx.');await _0xf1bcb9('*Wait\x20YESSER\x20TECH\x20is\x20generating\x20your\x20pair\x20code\x20✅...*');const _0x1f78e1=encodeURIComponent(_0x500b9d['join']('\x20')),_0x303ed7=_0xa7f9a6(0x1f2)+_0x1f78e1,_0x16eb30=await axios['get'](_0x303ed7),_0x486fe4=_0x16eb30[_0xa7f9a6(0x1f1)];if(_0x486fe4&&_0x486fe4['code']){const _0x3c9433=_0x486fe4['code'];await _0xf1bcb9(''+_0x3c9433),await _0xf1bcb9(_0xa7f9a6(0x1e7));}else throw new Error(_0xa7f9a6(0x1f4));}catch(_0x5de87f){console[_0xa7f9a6(0x1f7)](_0xa7f9a6(0x1e9),_0x5de87f[_0xa7f9a6(0x1e8)]),_0xf1bcb9('Error\x20getting\x20response\x20from\x20API.');}});
