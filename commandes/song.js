(function (_0x264dde, _0x3d6297) {
  const _0x22003b = _0x264dde();
  while (true) {
    try {
      const _0x4409fd = parseInt(_0x5b33(559, 0x196)) / 1 + parseInt(_0x5b33(696, 0x244)) / 2 * (-parseInt(_0x5b33(693, 0x277)) / 3) + -parseInt(_0x5b33(359, 0x5c)) / 4 + parseInt(_0x5b33(389, 0x44)) / 5 + parseInt(_0x5b33(585, 0x37f)) / 6 * (parseInt(_0x5b33(425, 0x315)) / 7) + parseInt(_0x5b33(860, 0x157)) / 8 * (-parseInt(_0x5b33(602, 0x104)) / 9) + parseInt(_0x5b33(666, 0x13f)) / 10 * (parseInt(_0x5b33(482, 0x22)) / 11);
      if (_0x4409fd === _0x3d6297) {
        break;
      } else {
        _0x22003b.push(_0x22003b.shift());
      }
    } catch (_0x4490dd) {
      _0x22003b.push(_0x22003b.shift());
    }
  }
})(_0x1a1d, 137634);
const _0x4b7f16 = function () {
  let _0x2845bd = true;
  return function (_0x25351f, _0x581275) {
    const _0x359a8a = _0x2845bd ? function () {
      if (_0x581275) {
        const _0x4e9776 = _0x581275.apply(_0x25351f, arguments);
        _0x581275 = null;
        return _0x4e9776;
      }
    } : function () {};
    _0x2845bd = false;
    return _0x359a8a;
  };
}();
const _0x17208b = _0x4b7f16(this, function () {
  return _0x17208b.toString().search("(((.+)+)+)+$").toString().constructor(_0x17208b).search("(((.+)+)+)+$");
});
_0x17208b();
(function () {
  const _0x5e94dd = function () {
    let _0x789453;
    try {
      _0x789453 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3d7fae) {
      _0x789453 = window;
    }
    return _0x789453;
  };
  const _0x41ee55 = _0x5e94dd();
  _0x41ee55.setInterval(_0x1b9912, 4000);
})();
const _0x1d6552 = function () {
  let _0x47c566 = true;
  return function (_0x197c9f, _0x4c05dd) {
    const _0x546479 = _0x47c566 ? function () {
      if (_0x4c05dd) {
        const _0x13ca6d = _0x4c05dd.apply(_0x197c9f, arguments);
        _0x4c05dd = null;
        return _0x13ca6d;
      }
    } : function () {};
    _0x47c566 = false;
    return _0x546479;
  };
}();
(function () {
  _0x1d6552(this, function () {
    const _0x11908e = new RegExp("function *\\( *\\)");
    const _0x4eb035 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x4dc76b = _0x1b9912("init");
    if (!_0x11908e.test(_0x4dc76b + "chain") || !_0x4eb035.test(_0x4dc76b + "input")) {
      _0x4dc76b('0');
    } else {
      _0x1b9912();
    }
  })();
})();
const _0x18287f = function () {
  let _0x8a228b = true;
  return function (_0xea7243, _0x5e1e05) {
    const _0x4b3fb5 = _0x8a228b ? function () {
      if (_0x5e1e05) {
        const _0x5182bf = _0x5e1e05.apply(_0xea7243, arguments);
        _0x5e1e05 = null;
        return _0x5182bf;
      }
    } : function () {};
    _0x8a228b = false;
    return _0x4b3fb5;
  };
}();
const _0x3360d1 = _0x18287f(this, function () {
  let _0x5c28a1;
  try {
    const _0x457f9d = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5c28a1 = _0x457f9d();
  } catch (_0x1a220b) {
    _0x5c28a1 = window;
  }
  const _0x4608b7 = _0x5c28a1.console = _0x5c28a1.console || {};
  const _0x536fc9 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x28f0a7 = 0; _0x28f0a7 < _0x536fc9.length; _0x28f0a7++) {
    const _0x329226 = _0x18287f.constructor.prototype.bind(_0x18287f);
    const _0x1a2550 = _0x536fc9[_0x28f0a7];
    const _0x25b23e = _0x4608b7[_0x1a2550] || _0x329226;
    _0x329226.__proto__ = _0x18287f.bind(_0x18287f);
    _0x329226.toString = _0x25b23e.toString.bind(_0x25b23e);
    _0x4608b7[_0x1a2550] = _0x329226;
  }
});
_0x3360d1();
const {
  bravin 
} = require("../sir/bravin");
const yts = require("yt-search");
const _0x3a2f13 = {
  nomCom: "play",
  categorie: "Download",
  reaction: '💿'
};
bravin(_0x3a2f13, async (_0x2442c9, _0x39ec18, _0x1b7abd) => {
  const {
    ms: _0xe11fe0,
    repondre: _0x4d6384,
    arg: _0x4f9d2b
  } = _0x1b7abd;
  if (!_0x4f9d2b[0]) {
    _0x4d6384("Please insert a song name.");
    return;
  }
  try {
    let _0x15d5f7 = _0x4f9d2b.join(" ");
    let _0x21cd1b = [];
    const _0x3f3a45 = await yts(_0x15d5f7);
    _0x21cd1b = _0x3f3a45.videos;
    if (_0x21cd1b && _0x21cd1b.length > 0) {
      const _0x13cadd = _0x21cd1b[0].url;
      const _0x282ad9 = await fetch("https://api.giftedtech.us.kg/api/download/ytmp3v2?url=" + encodeURIComponent(_0x13cadd) + "&apikey=" + "gifted");
      const _0x4e6870 = await _0x282ad9.json();
      if (_0x4e6870.status === 200 && _0x4e6870.success) {
        const _0x386658 = _0x4e6870.result.download_url;
        const _0x5175df = {
          url: _0x21cd1b[0].thumbnail
        };
        const _0x3fadcd = {
          image: _0x5175df,
          caption: "MY AI SONG PLAYER*\n\n╭───────────────◆\n│ *Title:* " + _0x21cd1b[0].title + "\n│ *Quality:* mp3 (320kbps)\n│ *Duration:* " + _0x21cd1b[0].timestamp + "\n│ *Viewers:* " + _0x21cd1b[0].views + "\n│ *Uploaded:* " + _0x21cd1b[0].ago + "\n│ *BONIrtist:* " + _0x21cd1b[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x13cadd + "\n╭────────────────◆\nu can as well join here to get your song download\nin more tracks 🤗😋 \nhttps://t.me/keithmd \nuse prefix {/}  example {/search dada}\n╰────────────────◆\n╭────────────────◆\n│ *_Powered by keithkeizzah._*\n╰─────────────────◆"
        };
        const _0x4e9772 = {
          quoted: _0xe11fe0
        };
        await _0x39ec18.sendMessage(_0x2442c9, _0x3fadcd, _0x4e9772);
        const _0x29a377 = {
          url: _0x386658
        };
        const _0x426376 = {
          audio: _0x29a377,
          mimetype: "audio/mp4"
        };
        const _0x28203c = {
          quoted: _0xe11fe0
        };
        await _0x39ec18.sendMessage(_0x2442c9, _0x426376, _0x28203c);
        _0x4d6384("myself has just downloaded your song*...");
      } else {
        _0x4d6384("Failed to download audio. Please try again later.");
      }
    } else {
      _0x4d6384("No audio found.");
    }
  } catch (_0x172f6e) {
    console.error("Error from API:", _0x172f6e);
    _0x4d6384("An error occurred while searching or downloading the audio.");
  }
});
const _0x2dba71 = {
  nomCom: "song"
};
function _0x1855c8(_0x2e686, _0x24fb9c, _0x4bdc2e, _0x46680e, _0x174bdb) {
  return _0x5b33(_0x46680e + 0x3b8, _0x24fb9c);
}
function _0x5b33(_0x444a23, _0x1b9912) {
  const _0x1d6552 = _0x1a1d();
  _0x5b33 = function (_0x30ca8a, _0x3e2ac4) {
    _0x30ca8a = _0x30ca8a - 272;
    let _0x4ebb56 = _0x1d6552[_0x30ca8a];
    return _0x4ebb56;
  };
  return _0x5b33(_0x444a23, _0x1b9912);
}
function _0x2f5c1c(_0x37f88b, _0x342e42, _0x55cb6e, _0x1ce5dd, _0x1cd3ac) {
  return _0x5b33(_0x1ce5dd - 0x103, _0x37f88b);
}
_0x2dba71.categorie = "Download";
_0x2dba71.reaction = '💿';
bravin(_0x2dba71, async (_0x1489a1, _0xf06f6f, _0x44e42c) => {
  const {
    ms: _0x375f41,
    repondre: _0x4c8b9a,
    arg: _0x454706
  } = _0x44e42c;
  if (!_0x454706[0]) {
    _0x4c8b9a("Please insert a song name.");
    return;
  }
  try {
    let _0x3c0a48 = _0x454706.join(" ");
    let _0x22eb5e = [];
    const _0x4419bc = await yts(_0x3c0a48);
    _0x22eb5e = _0x4419bc.videos;
    if (_0x22eb5e && _0x22eb5e.length > 0) {
      const _0x3b3b84 = _0x22eb5e[0].url;
      const _0x52be0e = await fetch("https://api.giftedtech.us.kg/api/download/ytmp3v2?url=" + encodeURIComponent(_0x3b3b84) + "&apikey=" + "gifted");
      const _0x2d64f1 = await _0x52be0e.json();
      if (_0x2d64f1.status === 200 && _0x2d64f1.success) {
        const _0x4f9b1e = _0x2d64f1.result.download_url;
        const _0x27417c = {
          url: _0x22eb5e[0].thumbnail
        };
        const _0x1280e9 = {
          image: _0x27417c,
          caption: "*ALPHPHACE-MD SONG PLAYER*\n\n╭───────────────◆\n│ *Title:* " + _0x22eb5e[0].title + "\n│ *Quality:* mp3 (320kbps)\n│ *Duration:* " + _0x22eb5e[0].timestamp + "\n│ *Viewers:* " + _0x22eb5e[0].views + "\n│ *Uploaded:* " + _0x22eb5e[0].ago + "\n│ *BONIrtist:* " + _0x22eb5e[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x3b3b84 + "\n╭────────────────◆\nu can as well join here to get your song download\nin more tracks 🤗😋 \nhttps://t.me/keithmd \nuse prefix {/}  example {/search dada}\n╰────────────────◆\n╭────────────────◆\n│ *_Powered by keithkeizzah._*\n╰─────────────────◆"
        };
        const _0x3e4e25 = {
          quoted: _0x375f41
        };
        await _0xf06f6f.sendMessage(_0x1489a1, _0x1280e9, _0x3e4e25);
        const _0xa26221 = {
          url: _0x4f9b1e
        };
        const _0x449061 = {
          document: _0xa26221,
          mimetype: "audio/mp4"
        };
        const _0x5da093 = {
          quoted: _0x375f41
        };
        await _0xf06f6f.sendMessage(_0x1489a1, _0x449061, _0x5da093);
        _0x4c8b9a("*Boniphacea md has just downloaded your song*...");
      } else {
        _0x4c8b9a("Failed to download audio. Please try again later.");
      }
    } else {
      _0x4c8b9a("No audio found.");
    }
  } catch (_0x5f2756) {
    console.error("Error from API:", _0x5f2756);
    _0x4c8b9a("An error occurred while searching or downloading the audio.");
  }
});
function _0x1a1d() {
  const _0x4b50f6 = ['DZRVR', 'CZPjA', 'capti', 'deo.', 'RDRDs', 'WnyrG', 'hRuIc', 'GWexR', 'grukj', 'xuRMC', 'ladZk', 'oad_u', 'WZaVi', 'ZPPuu', 'IoMJK', 'NEFzf', 'chain', 'kCpvF', 'LIiyD', 'EmSue', 'zaIlU', 'PJRqc', '0-9a-', 'zbZVh', "──◆\n╭", 'uyrQq', "he vi", 'KrgxC', "ered ", 'PgIxU', 'fBlSk', 'dio.', '212843uOpgAS', 'sendM', '20kbp', 'iwoDT', '/api/', 'HEANM', 'pqSAf', 'xCMSQ', 'times', 'TqdlD', 'iHYZH', 'state', 'vptHU', 'FYCDn', "\n╰───", 'audio', 'DcrMj', 'HBItW', 'jBZst', "─◆\n│ ", "\n│ *U", 'XpqTy', 'afqgF', '╭────', 'bROmf', 'NioLi', '1294746IEzalu', 'CMMas', 'HVNfJ', 'LFNSD', 'jZteU', 'rBklS', "y aga", 'lsKug', 'UmdLa', 'RyYYy', 'ravSa', 'iewer', "oin h", 'rtist', 'piSws', 'rvMRS', 'call', '234XsUBED', 'jLKfD', 'ent', 'KsFjQ', 'BOlrC', "x {/}", 'mNOYE', 'mwgTb', "ing t", 'TIZcW', 'DwNUV', 'WRntW', 'aJuLG', "e ins", 'ter.', 'iaVuO', "R*\n\n╭", 'song*', '(((.+', 'wahKh', 'YmVOV', "aded ", 'giaxW', 'ch.us', 'yGlXm', 'YTgXv', 'while', 'info', 'CvVnO', 'Itjrl', "your ", 'e/kei', 'warn', 'BUrCk', 'HKAFI', 'DjzXE', 'bind', 'dFInM', " from", "dio f", " 𝐁𝐘 BONI", 'pRWOZ', 'Objec', 'PLAYE', 'DSrGO', 'aoOcv', "y:* m", 'njVTh', 'zTRYq', 'WkqnP', "oad t", 'type', 'qTMSM', 'FowUS', "s)\n│ ", 'HOEHb', 'qNiwW', 'MzHrh', 'sbCbX', "re tr", 'AkbBB', '../fr', 'hoALs', 'irect', '4400QwBumN', "._*\n╰", 'doc', 'const', 'HpSUa', 'DjRXC', 'xfLdf', "\"retu", 'FEcxL', 'pIYub', 'unZBd', 'ekHJN', "⦿ *Di", 'VIDEO', 'count', "ell j", 'nfNlw', 'apply', "No vi", 'excep', 'init', 'gMHLC', 'VQEIE', 'quYri', 'yiRCn', 'XFpty', 'TkMbt', '624sHGaUr', 'gger', 'zUtPV', '1430JXBTTs', 'amewo', 'fakpB', " API:", "───◆\n", 'gdnrh', 'KqwDp', '*Boniphace', 'terva', 'gZCsb', 'nHQbi', 'lengt', '{/sea', 'urost', 'KkdoB', "\nuse ", 'XREIX', "a md ", "e) {}", "ada}\n", 'FsWMU', 'PTjzE', 'image', 'QPCsM', '──◆', 'ithke', 'qRaUN', 'mIwOM', 'Udfxn', 'kSldd', 'resul', "ed wh", 'nctio', 'WaJUU', 'YMaLF', 'vncFT', 'LzEWv', "🤗😋 \nh", 'i.gif', 'AGsYK', 'funct', 'GRSEN', 'MMbgI', 'JvGqZ', 'nMGlS', 'VTcCX', 'KEHxl', 'qcwMl', 'ZRFaW', 'CHHAs', 'HOKLy', "An er", 'hduBM', 'Downl', 'LIoxP', 'hYEXT', 'KcFSe', 'RSspu', 'syabp', 'kCgYq', 'TwDDN', 'tion:', 'CFTRD', 'wGrYs', 'rsxbS', 'brWon', 'SOlnV', 'ound.', 'oeEnc', "r dow", 'iAdHS', 'input', 'DxMnq', 'Wlorc', 'BDDug', 'UICvJ', 'RLLYj', "has j", 'eSrSa', 'ZajCI', 'rMMkI', 'trace', "by ke", 'TZtRc', 'WKxDu', 'ftIfz', 'ype', 'oad', 'test', 'TRmqN', 'EhwbE', 'VjrBo', "k:* ", 'tDbif', 'eHKTs', '─────', 'uPwdL', 'YTsdZ', 'RlQLe', "ile s", 'url', 'join', 'ZXQfv', "PHACE-MD ", 'earch', "D\n│ *", '//t.m', 'json', 'er.', 'setIn', '*_Pow', " Plea", 'IJtBu', 'LiLgL', 'downl', "o get", 'nPEgy', 'Z_$][', '*(?:[', 'SxEGX', '{}.co', "o nam", 'thumb', 'wRAxP', 'kOODL', 'pTMUd', " name", 'UhMjz', 'WbrHy', "n() ", 'hacvz', 'Uhfjv', 'YAqQf', "ust d", '&apik', 'GeTlo', 'Rnpiy', "mple ", 'xinwF', "  exa", 'pload', 'QrKHU', 'HUpib', 'tmp4v', 'Kvayq', 'UJRHI', 'WsmHq', 'lVrEU', 'nhpNA', 'ion:*', 'dxclv', 'orDiS', 'KIinX', 'brxbs', 'kGnQY', 'debu', 'lCDMj', 'BYUhX', 'CBERg', 'iPnqs', '/vide', 'tFFsF', "y:* 7", 'pWulu', '19544HSzJXe', " agai", 'qCtwa', '𝐑𝐀𝐓𝐄𝐃', 'DQrcV', 'quote', 'KFgic', 'log', 'views', 'jqhiZ', " PLAY", 'iZPVG', 'prefi', "\\( *\\", 'HOwqq', 'uJPAE', "\n│ *V", 'Mwdjg', 'zSyQF', 'LQWYs', 'gsZyV', 'ZxEhJ', 'UrmOO', 'AQJqd', 'fyLNS', 'vGvrq', 'retur', 'strin', 'QadqF', "rn th", 'oGlyP', 'gozbb', 'NtPje', 'table', "rch d", 'tUxMn', 'hlnIg', 'lHATg', 'MZFvT', 'ZLZsa', 'vgTFB', 'conso', 'jHhEV', 'https', 'BeXih', 'FKVdv', 'pYoqg', 'eNrmJ', 'qpwBl', 'lfcBD', '20p-H', "ing o", 'Vezop', "ert a", 'zFYlU', "rect ", 'tmp3v', "\n⦿ *D", 'arch', 'a-zA-', 'found', 'tamp', "\n│ *BONI", 'bjaaN', 'SVhDT', 'JzyOk', 'tion', 'YkZSQ', 'ECFYl', 'fEXlQ', "in mo", 'statu', 'Pleas', 'Wbmws', 'BPnZD', 'KYSUV', '*Titl', 'qXOqA', '2?url', 'IrRMa', 'wgASz', 'TPVlT', " your", 'Title', 'ownlo', 'essag', 'WIYYe', "ed:* ", 'yJrTZ', 'YtLin', 'GUHYh', 'CeKiK', 'aBDot', 'RHiDa', 'PHACE*', 'tbKSw', 'RafQs', 'LTdAx', 'ctor(', 'qkqMK', 'AuOHG', 'Zxuoz', 'urAdJ', 'SQfYD', 'dlRfu', 'qFIrE', ')+)+)', "\\+\\+ ", 'proto', "e try", 'title', 'eyQec', 'QHDOC', 'udio.', 'orie', 'QzgiV', "se tr", 'zQgqH', 'oDZwm', 'ghDYz', '*𝐆𝐄𝐍𝐄', 'XKMtK', 'MDhoB', 'IVRWW', 'zgGpi', 'BDaTE', " as w", "s:* ", 'znEvp', " (tru", 'BYCJK', "in la", 'play', 'nload', '╰────', 'kLyKE', 'FZelX', 'fiioK', 'XkPRK', 'RGmFx', 'searc', 'OcRKF', 'gifte', 'taPVw', 'mXWgo', 'wCDMr', 'HNiOe', 'aYIZR', 'song', "acks ", 'yZydG', 'rNKWd', 'vvDUc', "n (fu", 'ovOcR', 'rUCJC', 'OeayI', "SONG ", 'categ', 'nGAKN', 'HBmKo', 'fgLFY', 'EzhfQ', 'tKwpe', 'ccurr', 'JYhEx', 'kBGbk', 'OnrIj', "n lat", 'zWgrp', '*ALPH', 'znkgd', '...', 'MLevf', 'ObACR', 'MpfnV', 'JNdqm', 'fMWeo', 'KPbsf', 'wpOvl', 'sOvbe', 'ttps:', 'to__', 'sPRkE', 'PETmf', 'lLzrT', 'ObfDd', 'msspC', '775608SqqNyV', 'yluFr', 'ThkfG', 'ojEdc', 'bNKcX', "thmd ", 'ago', 'OEOeR', 'fICfp', 'Error', 'zwMdZ', 'nefst', 'JlKMx', '.kg', 'jnCkq', 'GOnUO', 'AgFXR', 'AaqvK', 'tedte', 'GcQKu', 'react', 'QnKCE', 'actio', 'autho', 'qfmEm', "ror o", "p3 (3", 'zTOnU', 'YxyQu', "ion *", '300700zNiWsP', 'wSjGd', 'succe', 'eMYiw', 'eoinv', 'UBuBl', 'JZFqi', 'ion', 'CySkp', 'xZhqH', 'hBSTN', 'QXWjl', 'NsESr', 'Phmti', '/mp4', "deos ", 'FDQUH', "load\n", 'NCuMG', 'zPIoz', 'mgmBE', 'ijbbq', 'WoRGV', 'PgnSY', 'tsHdt', 'LWPlc', 'cGZKA', 'Durat', 'RBgaw', 'hfeBM', 'ructo', 'yeCHS', 'zpDPj', 'hfaTv', 'VlMKD', 'gpuYz', '7EeqteM', 'error', 'lBobz', 'YcPNT', 'SuvQj', "ere t", "is\")(", "\n│ *Q", 'AkyFR', 'kKyoU', 'dVXzT', "u can", 'UBAsn', "ER*\n\n", "\n╭───", 'AUsSC', 'FnbsD', 'KTXwi', 'jcVtU', 'briGT', 'toStr', 'mTVrY', 'TVhxa', '://ap', 'tczJQ', 'yTOjK', 'kou', 'wWDMM', 'NEwhC', 'OkyhD', 'qpwfg', 'ey=', 'MPfbA', 'KjWgH', 'LtgWB', 'rwvrZ', "nk:* ", '*Dura', 'ViBpG', "e:* ", "◆\n│ *", 'ualit', 'RnGST', 'rgQDv', 'mimet', 'rIhsi', 'JVIhg', 'hcrfo', 'PJxhx', 'vlUhx', 'izzah', 'Wlulm', 'docum', 'todnD', 'RodgB', 'ZNKfW', 'dzxaa', '1375tYPIzW', 'video', 'SNeMM', 'JUkiw', 'nomCo', " song", 'iakkI', '__pro', "oad a", 'UpXGM', " YtLi", '$]*)', 'nail', "No au", 'MuqQo', 'lBANC', 'bXhsP', '*...', 'YcXqe', 'mLlzN', " down", 'NfMRX', 'zfHBS', "he au", 'fgzlA', 'DKPuc', 'zA-Z_', 'rk/zo', 'yt-se', 'SXdCX', 'tCOCR', 'WqTEl', 'Faile', 'nstru', 'hjnWk', 'uBHMM', 'nfHIQ', 'oad/y', 'smrYf', "deo. ", 'ing', "d to ", 'name', 'iTWFf', ":* "];
  _0x1a1d = function () {
    return _0x4b50f6;
  };
  return _0x1a1d();
}
const _0x2542f6 = {
  nomCom: "video",
  categorie: "Download",
  reaction: '🎥'
};
bravin(_0x2542f6, async (_0x46002b, _0x203cd9, _0x441a62) => {
  const {
    ms: _0x9dee0b,
    repondre: _0x4b19bf,
    arg: _0xefc2a8
  } = _0x441a62;
  if (!_0xefc2a8[0]) {
    _0x4b19bf("Please insert a song/video name.");
    return;
  }
  try {
    let _0x50755d = _0xefc2a8.join(" ");
    let _0xcc9b36 = [];
    const _0x5b2e50 = await yts(_0x50755d);
    _0xcc9b36 = _0x5b2e50.videos;
    if (_0xcc9b36 && _0xcc9b36.length > 0) {
      const _0x1a06c3 = _0xcc9b36[0].url;
      const _0x300d18 = await fetch("https://api.giftedtech.us.kg/api/download/ytmp4v2?url=" + encodeURIComponent(_0x1a06c3) + "&apikey=" + "gifted");
      const _0x5df766 = await _0x300d18.json();
      if (_0x5df766.status === 200 && _0x5df766.success) {
        const _0x2ce30f = _0x5df766.result.download_url;
        const _0x5b5768 = {
          url: _0xcc9b36[0].thumbnail
        };
        const _0x351a35 = {
          image: _0x5b5768,
          caption: "*MY AI VIDEO PLAYER*\n\n╭───────────────◆\n│ *Title:* " + _0xcc9b36[0].title + "\n│ *Quality:* 720p-HD\n│ *Duration:* " + _0xcc9b36[0].timestamp + "\n│ *Viewers:* " + _0xcc9b36[0].views + "\n│ *Uploaded:* " + _0xcc9b36[0].ago + "\n│ *BONIrtist:* " + _0xcc9b36[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x1a06c3 + "\n╭────────────────◆\nu can as well join here to get your song download\nin more tracks 🤗😋 \nhttps://t.me/keithmd \nuse prefix {/}  example {/search dada}\n╰────────────────◆\n╭────────────────◆\n│ *_Powered by keithkeizzah._*\n╰─────────────────◆"
        };
        const _0x30ac2c = {
          quoted: _0x9dee0b
        };
        await _0x203cd9.sendMessage(_0x46002b, _0x351a35, _0x30ac2c);
        const _0x47ab29 = {
          url: _0x2ce30f
        };
        const _0x670f17 = {
          video: _0x47ab29,
          caption: "*𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 BONIPHACE*",
          mimetype: "video/mp4"
        };
        const _0x250295 = {
          quoted: _0x9dee0b
        };
        await _0x203cd9.sendMessage(_0x46002b, _0x670f17, _0x250295);
        _0x4b19bf("*Boniphacea md has just downloaded your video*...");
      } else {
        _0x4b19bf("Failed to download the video. Please try again later.");
      }
    } else {
      _0x4b19bf("No videos found.");
    }
  } catch (_0x2370f9) {
    console.error("Error from API:", _0x2370f9);
    _0x4b19bf("An error occurred while searching or downloading the video.");
  }
});
function _0x1ca3c6(_0x1b7bea, _0x32688c, _0x3b7da4, _0xb0c736, _0x3ec31b) {
  return _0x5b33(_0x32688c - 0x280, _0x3b7da4);
}
function _0x18a01d(_0x5b069, _0x4be383, _0x20cfad, _0x2c97c1, _0x59631c) {
  return _0x5b33(_0x2c97c1 - 0x309, _0x59631c);
}
const _0x3c9437 = {
  nomCom: "videodoc",
  categorie: "Download",
  reaction: '🎥'
};
bravin(_0x3c9437, async (_0x41d666, _0xc1c248, _0x1bded6) => {
  const {
    ms: _0x5f5bf4,
    repondre: _0x3b900e,
    arg: _0x468ef8
  } = _0x1bded6;
  if (!_0x468ef8[0]) {
    _0x3b900e("Please insert a song/video name.");
    return;
  }
  try {
    let _0x5a7946 = _0x468ef8.join(" ");
    let _0x3a1836 = [];
    const _0x3f327f = await yts(_0x5a7946);
    _0x3a1836 = _0x3f327f.videos;
    if (_0x3a1836 && _0x3a1836.length > 0) {
      const _0xbe0111 = _0x3a1836[0].url;
      const _0x2a8f7c = await fetch("https://api.giftedtech.us.kg/api/download/ytmp4v2?url=" + encodeURIComponent(_0xbe0111) + "&apikey=" + "gifted");
      const _0x51d1a0 = await _0x2a8f7c.json();
      if (_0x51d1a0.status === 200 && _0x51d1a0.success) {
        const _0x2fdbf4 = _0x51d1a0.result.download_url;
        const _0x2f67eb = {
          url: _0x3a1836[0].thumbnail
        };
        const _0x31158d = {
          image: _0x2f67eb,
          caption: "*ALPHPHACE-MD VIDEO PLAYER*\n\n╭───────────────◆\n│ *Title:* " + _0x3a1836[0].title + "\n│ *Quality:* 720p-HD\n│ *Duration:* " + _0x3a1836[0].timestamp + "\n│ *Viewers:* " + _0x3a1836[0].views + "\n│ *Uploaded:* " + _0x3a1836[0].ago + "\n│ *BONIrtist:* " + _0x3a1836[0].author.name + "\n╰────────────────◆\n\n⦿ *Direct YtLink:* " + _0xbe0111 + "\n╭────────────────◆\nu can as well join here to get your song download\nin more tracks 🤗😋 \nhttps://t.me/keithmd \nuse prefix {/}  example {/search dada}\n╰────────────────◆\n╭────────────────◆\n│ *_Powered by keithkeizzah._*\n╰─────────────────◆"
        };
        const _0x14402d = {
          quoted: _0x5f5bf4
        };
        await _0xc1c248.sendMessage(_0x41d666, _0x31158d, see my
