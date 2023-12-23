/** @𝐋𝐮𝐱𝐲𝐫𝐢𝐞𝐥 𝕏 (longthinh) 2023-12-09 12:57:05 AM */

var DIRECT = "DIRECT 127.0.0.1";
var PROXY = "PROXY 127.0.0.1:80";
var blacklist = {
  "gdmf.apple.com": 1,
  "mesu.apple.com": 1,
  "updates.cdn-apple.com": 1,
  "updates-http.cdn-apple.com": 1,
  "su.itunes.apple.com": 1,
  // "example.com": 1,
};
function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for (i = 0; i < 99; i++) {
    if ((blacklist[host])) {
      return PROXY;
    }
    var index = host.indexOf(".");
    if (index == -1) {
      break;
    } else {
      host = host.substring(index + 1);
    }
  }
  return DIRECT;
}
