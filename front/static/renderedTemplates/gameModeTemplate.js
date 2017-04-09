function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error))throw n;
    if (!("undefined" == typeof window && e || t))throw n.message += " on line " + r, n;
    try {
        t = t || require("fs").readFileSync(e, "utf8")
    } catch (e) {
        pug_rethrow(n, null, r)
    }
    var i = 3, a = t.split("\n"), o = Math.max(r - i, 0), h = Math.min(a.length, r + i), i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n
}
export default function renderGameMode(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = {"front\u002FcomponentTemplates\u002FgameModeTemplate.pug": "div(id='menu')\r\n    h1(class='h1Title') Select Mode\r\n    div(class='container group')\r\n        div(class='gridd-1-5 coll-1')\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Deathmatch\r\n                img(class='msimg' src=\"resources\u002FdeathMatch.png\")\r\n                p Select a hero and fight agains other players. Kill more than anybody to win.\r\n        div(class='gridd-1-5 coll-1')\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Catch Flag\r\n                img(class='msimg' src=\"resources\u002FflagCapture.png\")\r\n                p Catch the flag and bring it to your base to earn a point. Team with 5 points wins.\r\n        div(class='gridd-1-5 coll-1' onclick=\"location.href = 'game\u002Findex.html'\")\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Tutorial\r\n                img(class='msimg' src=\"resources\u002Ftutorial.png\")\r\n                p Learn the controls and test weapon and skills before joining muliplayer.\r\n\r\n"};
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv id=\"menu\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Select Mode\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"container group\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\"\u003E";
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 6;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 6;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Deathmatch\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 7;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002FdeathMatch.png\"\u002F\u003E";
        ;
        pug_debug_line = 8;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 8;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Select a hero and fight agains other players. Kill more than anybody to win.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E";
        ;
        pug_debug_line = 9;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\"\u003E";
        ;
        pug_debug_line = 10;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Catch Flag\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 12;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002FflagCapture.png\"\u002F\u003E";
        ;
        pug_debug_line = 13;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 13;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Catch the flag and bring it to your base to earn a point. Team with 5 points wins.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E";
        ;
        pug_debug_line = 14;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\" onclick=\"location.href = 'game\u002Findex.html'\"\u003E";
        ;
        pug_debug_line = 15;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 16;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 16;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Tutorial\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 17;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002Ftutorial.png\"\u002F\u003E";
        ;
        pug_debug_line = 18;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 18;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Learn the controls and test weapon and skills before joining muliplayer.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}