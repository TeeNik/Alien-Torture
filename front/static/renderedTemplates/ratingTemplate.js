function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}export default function renderRating(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"front\u002FcomponentTemplates\u002FratingTemplate.pug":"div\r\n    h1(class='h1Title') Rating\r\n    div(class='ratingBody')\r\n        ol\r\n            each val in players\r\n                li= val\r\n\r\n\u002F\u002F['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]\r\n"};
;var locals_for_with = (locals || {});(function (players) {;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Ch1 class=\"h1Title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "Rating\u003C\u002Fh1\u003E";
;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Cdiv class=\"ratingBody\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Col\u003E";
;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
// iterate players
;(function(){
  var $$obj = players;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var val = $$obj[pug_index0];
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var val = $$obj[pug_index0];
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
pug_html = pug_html + "\u003C!--['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]--\u003E";}.call(this,"players" in locals_for_with?locals_for_with.players:typeof players!=="undefined"?players:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}