!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){for(var t=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,a=e||16,i=0;i<a;i++)t[i]=n.charAt(Math.floor(Math.random()*r));return"u"+t.join("")};var a=class{constructor(e){this.title=e,this.taskList={},this.id=r()}};var i=class{constructor(e,t,n,a,i){this.id=r(),this.title=t,this.description=n,this.dueDate=a,this.category=i,this.completionStatus=!1,this.parentID=e}};function o(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var l={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var d=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function m(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=r.match(o);if(!d)return null;var s,l=d[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(u,(function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(u,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(l.length)}}}var h,f={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof d[e]?d[e]:1===t?d[e].one:d[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:l,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(h.matchPattern);if(!a)return null;var i=a[0],o=n.match(h.parsePattern);if(!o)return null;var d=h.valueCallback?h.valueCallback(o[0]):o[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(i.length)}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=o(e).getTime(),r=p(t);return new Date(n+r)}(e,-p(t))}function y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var v={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):y(n+1,2)},d:function(e,t){return y(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return y(e.getUTCHours()%12||12,t.length)},H:function(e,t){return y(e.getUTCHours(),t.length)},m:function(e,t){return y(e.getUTCMinutes(),t.length)},s:function(e,t){return y(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),t.length)}},w=864e5;function b(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=o(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function C(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=b(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var d=b(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}var T=6048e5;function S(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=o(e),n=b(t).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=C(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),b(n)}(t).getTime();return Math.round(n/T)+1}function E(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:p(a),d=null==n.weekStartsOn?i:p(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=o(e),l=s.getUTCDay(),u=(l<d?7:0)+l-d;return s.setUTCDate(s.getUTCDate()-u),s.setUTCHours(0,0,0,0),s}function L(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=o(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,d=i&&i.options&&i.options.firstWeekContainsDate,s=null==d?1:p(d),l=null==a.firstWeekContainsDate?s:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(r+1,0,l),u.setUTCHours(0,0,0,0);var c=E(u,t),m=new Date(0);m.setUTCFullYear(r,0,l),m.setUTCHours(0,0,0,0);var h=E(m,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}var k=6048e5;function M(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=o(e),r=E(n,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:p(a),o=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),d=L(e,t),s=new Date(0);return s.setUTCFullYear(d,0,o),s.setUTCHours(0,0,0,0),E(s,t)}(n,t).getTime();return Math.round(r/k)+1}var x="midnight",D="noon",q="morning",P="afternoon",N="evening",O="night";function A(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+y(i,2)}function U(e,t){return e%60==0?(e>0?"-":"+")+y(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v.y(e,t)},Y:function(e,t,n,r){var a=L(e,r),i=a>0?a:1-a;return"YY"===t?y(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):y(i,t.length)},R:function(e,t){return y(C(e),t.length)},u:function(e,t){return y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return v.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=M(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):y(a,t.length)},I:function(e,t,n){var r=S(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):y(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v.d(e,t)},D:function(e,t,n){var r=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/w)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):y(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return y(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return y(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?D:0===a?x:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?N:a>=12?P:a>=4?q:O,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v.s(e,t)},S:function(e,t){return v.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return U(a);case"XXXX":case"XX":return W(a);case"XXXXX":case"XXX":default:return W(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return U(a);case"xxxx":case"xx":return W(a);case"xxxxx":case"xxx":default:return W(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+A(a,":");case"OOOO":default:return"GMT"+W(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+A(a,":");case"zzzz":default:return"GMT"+W(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return y((r._originalDate||e).getTime(),t.length)}};function j(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Y(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var z={p:Y,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return j(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",j(a,t)).replace("{{time}}",Y(i,t))}},I=6e4;var J=["D","DD"],F=["YY","YYYY"];function $(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var B=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,G=/''/g,R=/[a-zA-Z]/;function _(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=String(t),a=n||{},i=a.locale||f,d=i.options&&i.options.firstWeekContainsDate,s=null==d?1:p(d),l=null==a.firstWeekContainsDate?s:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=i.options&&i.options.weekStartsOn,c=null==u?0:p(u),m=null==a.weekStartsOn?c:p(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var h=o(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=o(e);return!isNaN(t)}(h))throw new RangeError("Invalid time value");var y=g(h,function(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=t.getTime()%I;return n*I+r}(h)),v={firstWeekContainsDate:l,weekStartsOn:m,locale:i,_originalDate:h};return r.match(X).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,i.formatLong,v):e})).join("").match(B).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(Q)[1].replace(G,"'");var n,r=H[t];if(r)return a.useAdditionalWeekYearTokens||(n=e,-1===F.indexOf(n))||$(e),!a.useAdditionalDayOfYearTokens&&function(e){return-1!==J.indexOf(e)}(e)&&$(e),r(y,e,i.localize,v);if(t.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}const V=(e=null)=>{let t;for(t=e?document.querySelector("#"+e.id+".task"):document.querySelector("#newTaskDiv");t.firstChild;)t.removeChild(t.firstChild);let n=ee(e);t.id=n.id,t.appendChild(n)};const K=(e=null)=>{let t=document.createElement("div");t.classList.add("taskExpander"),t.innerHTML="+";let n=document.createElement("div");n.classList.add("taskTitle"),n.innerHTML=e.title;let r=document.createElement("div");return r.classList.add("taskCollapsed"),r.id=e.id,r.appendChild(t),r.appendChild(n),r.addEventListener("click",()=>{V(e)}),r};var Z;const ee=(e=null)=>{let t=new Object;var n=!1;if(e)t=e;else{let e=document.querySelector(".listDetailContainer").id;t=new i(e,"New Title","New Description","2019-11-18","New Category"),localStorage.setItem("tempTask",JSON.stringify(t)),n=!0}let r=document.createElement("div");r.classList.add("taskExpandedContainer"),r.id=t.id;let a=document.createElement("div");a.classList.add("taskExpandedHeader");let o=document.createElement("div");o.classList.add("taskExpandedHeaderLeft"),o.id=t.id;let d=document.createElement("div");d.classList.add("taskCollapser"),d.innerHTML="-",o.addEventListener("click",Z=function(){!function(e=null){let t=document.querySelector("#"+e.id+".task");for(;t.firstChild;)t.removeChild(t.firstChild);let n=K(e);t.appendChild(n)}(t)});let s=document.createElement("div");n?s.setAttribute("style","margin-left:8px"):o.appendChild(d),s.classList.add("taskExpandedTitle"),s.id=t.id,s.innerHTML=t.title,o.appendChild(s);let l=document.createElement("div");l.classList.add("buttonDiv");let u=document.createElement("input");u.setAttribute("type","button"),u.setAttribute("value","Edit..."),u.id=t.id,u.setAttribute("style","display:inline"),u.addEventListener("click",()=>{te(t)});let c=document.createElement("input");c.setAttribute("type","button"),c.setAttribute("value","Save"),c.id=t.id,c.setAttribute("style","display:none"),c.addEventListener("click",()=>{ne(t)});let m=document.createElement("input");m.setAttribute("type","button"),m.setAttribute("value","Cancel"),m.id=t.id,m.setAttribute("style","display:none"),m.addEventListener("click",()=>{ae(t)});let h=document.createElement("input");h.setAttribute("type","button"),h.setAttribute("value","Delete"),h.id=t.id,h.setAttribute("style","display:inline"),h.addEventListener("click",()=>{ie(t)}),a.appendChild(o),a.appendChild(l),l.appendChild(u),l.appendChild(c),l.appendChild(m),l.appendChild(h);let f=document.createElement("div");f.classList.add("taskExpandedDetails");let p=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div");p.classList.add("category"),g.classList.add("dueDate"),y.classList.add("description"),p.id=t.id,g.id=t.id,y.id=t.id;let v=Number(t.dueDate.split("-")[0]),w=Number(t.dueDate.split("-")[1])-1,b=Number(t.dueDate.split("-")[2]),C=new Date(v,w,b);return p.innerHTML="<u>Category</u>: "+t.category,g.innerHTML="<u>Due Date</u>: "+_(C,"LLL do, yyyy"),y.innerHTML="<u>Description</u>: "+t.description,r.appendChild(a),r.appendChild(f),f.appendChild(p),f.appendChild(g),f.appendChild(y),r},te=e=>{let t=document.querySelector(`input[value='Edit...']#${e.id}`),n=document.querySelector(`input[value='Save']#${e.id}`),r=document.querySelector(`input[value='Cancel']#${e.id}`);t.setAttribute("style","display:none"),n.setAttribute("style","display:inline"),r.setAttribute("style","display:inline"),document.querySelector(`#${e.id}.taskExpandedHeaderLeft`).removeEventListener("click",Z);let a=document.querySelector(`#${e.id}.taskExpandedTitle`),i=document.querySelector(`#${e.id}.category`),o=document.querySelector(`#${e.id}.dueDate`),d=document.querySelector(`#${e.id}.description`),s=[a,i,o,d];for(let t in s){let n=s[t];for(;n.firstChild;)n.removeChild(n.firstChild);let r=document.createElement("input");switch(r.setAttribute("type","text"),r.classList.add("textbox"),r.id=e.id,n){case a:r.classList.add("title"),r.setAttribute("value",e.title);break;case i:r.classList.add("category"),r.setAttribute("value",e.category);break;case o:r.classList.remove("textbox"),r.classList.add("datePicker"),r.classList.add("dueDate"),r.setAttribute("type","date"),r.setAttribute("value",e.dueDate);break;case d:(r=document.createElement("textarea")).classList.remove("textbox"),r.classList.add("textarea"),r.classList.add("description"),r.id=e.id,r.innerHTML=e.description}n.appendChild(r)}},ne=e=>{let t=JSON.parse(localStorage.getItem("allLists"));for(let n in t)if(t[n].id==e.parentID){let r=t[n].taskList,a=Object.keys(r).indexOf(e.id),i=r[Object.keys(r)[a]],o=!1;i||(i=e,o=!0),i.title=document.querySelector(`#${e.id}.title.textbox`).value,i.category=document.querySelector(`#${e.id}.category.textbox`).value,i.dueDate=document.querySelector(`#${e.id}.dueDate.datePicker`).value,i.description=document.querySelector(`#${e.id}.textarea.description`).value;let d=document.querySelector(`#${e.id}.task`);for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(ee(i)),o&&(d.parentNode.appendChild(re()),t[n].taskList[i.id]=i)}localStorage.setItem("allLists",JSON.stringify(t))},re=()=>{let e=document.createElement("div");e.id="newTaskDiv",e.classList.add("task");let t=document.createElement("div");return t.innerHTML="New Task...",t.classList.add("addTaskDiv"),t.addEventListener("click",()=>{V();let e=JSON.parse(localStorage.getItem("tempTask"));te(e)}),e.appendChild(t),e},ae=e=>{let t=document.querySelector(`#${e.id}.task`);for(;t.firstChild;)t.removeChild(t.firstChild);if(t.appendChild(ee(e)),!document.querySelector("#newTaskDiv")){let e=document.querySelector(".tasksContainer").lastChild,t=e.parentNode;t.removeChild(e),t.appendChild(re())}},ie=e=>{let t=JSON.parse(localStorage.getItem("allLists"));for(let n in t)if(t[n].id==e.parentID){let r=t[n].taskList,a=Object.keys(r).indexOf(e.id);delete r[Object.keys(r)[a]];let i=document.querySelector(`#${e.id}.task`);i.parentNode.removeChild(i)}if(localStorage.setItem("allLists",JSON.stringify(t)),!document.querySelector("#newTaskDiv")){document.querySelector(".tasksContainer").appendChild(re())}},oe=()=>{try{let e=document.querySelector(".listsDisplay");e.parentNode.removeChild(e)}catch(e){}let e=document.createElement("div");e.classList.add("listsDisplay");let t=document.createElement("div");t.classList.add("listsDisplayHeader");let n=document.createElement("div");n.classList.add("listsDisplayContents"),t.innerText="Projects",e.appendChild(t),e.appendChild(n);let r=document.querySelector(".appContent");JSON.parse(localStorage.getItem("allLists")).forEach(e=>{let t=document.createElement("div");t.id=e.id,t.classList.add("nav_list"),t.innerHTML=e.title,t.addEventListener("click",()=>{JSON.parse(localStorage.getItem("allLists")).forEach(e=>{(e.id=t.id)&&r.appendChild(he(e))})}),n.appendChild(t)});let a=document.createElement("div");a.classList.add("newProjectDiv");let i=document.createElement("input");return i.classList.add("newProject"),i.setAttribute("type","button"),i.setAttribute("value","New Project..."),a.appendChild(i),i.addEventListener("click",()=>{r.appendChild(he("newList")),document.querySelector("div.appNav").appendChild(oe())}),e.appendChild(a),e};var de=oe;const se=e=>{var t={};let n=JSON.parse(localStorage.getItem("allLists"));if("newList"==e)t=new a("My New Project"),n.push(t),localStorage.setItem("allLists",JSON.stringify(n));else if(e){let n=JSON.parse(localStorage.getItem("allLists"));for(let r in n)n[r].id==e.id&&(t=n[r])}else{if(0==n.length){let e=document.createElement("div");e.classList.add("listDetailContainer");let t=document.createElement("div");t.classList.add("listHeader");let n=document.createElement("div");return n.classList.add("listTitle"),n.innerHTML="No projects found. Create one.",t.appendChild(n),e.appendChild(t),e}t=n[0]}try{let e=document.querySelector(".listDetailContainer");e.parentNode.removeChild(e)}catch(e){}let r=document.createElement("div");r.id=t.id,r.classList.add("listDetailContainer");let i=document.createElement("div");i.id=t.id,i.classList.add("listHeader");let o=document.createElement("div");o.classList.add("listTitle"),o.innerHTML=t.title,i.appendChild(o);let d=document.createElement("div");d.classList.add("listButtons"),i.appendChild(d);let s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("value","Edit..."),s.id=t.id,s.setAttribute("style","display:inline"),s.addEventListener("click",()=>{le(t)});let l=document.createElement("input");l.setAttribute("type","button"),l.setAttribute("value","Save"),l.id=t.id,l.setAttribute("style","display:none"),l.addEventListener("click",()=>{ue(t)});let u=document.createElement("input");u.setAttribute("type","button"),u.setAttribute("value","Cancel"),u.id=t.id,u.setAttribute("style","display:none"),u.addEventListener("click",()=>{ce(t)});let c=document.createElement("input");c.setAttribute("type","button"),c.setAttribute("value","Delete"),c.id=t.id,c.setAttribute("style","display:inline"),c.addEventListener("click",()=>{me(t)}),d.appendChild(s),d.appendChild(l),d.appendChild(u),d.appendChild(c);let m=document.createElement("div");m.id=t.id,m.classList.add("tasksContainer"),r.appendChild(i),r.appendChild(m);try{const e=Object.keys(t.taskList);for(let n in e){let r=t.taskList[e[n]],a=document.createElement("div");a.classList.add("task"),a.id=r.id;let i=K(r);i.id=r.id,a.appendChild(i),m.appendChild(a)}}catch(e){}return m.appendChild(re()),r},le=e=>{let t=document.querySelector(`input[value='Edit...']#${e.id}`),n=document.querySelector(`input[value='Save']#${e.id}`),r=document.querySelector(`input[value='Cancel']#${e.id}`);t.setAttribute("style","display:none"),n.setAttribute("style","display:inline"),r.setAttribute("style","display:inline");let a=document.querySelector(".listTitle");for(;a.firstChild;)a.removeChild(a.firstChild);let i=document.createElement("input");i.setAttribute("type","text"),i.classList.add("textbox"),i.id=e.id,i.classList.add("title"),i.setAttribute("maxlength",35),a.appendChild(i),i.focus(),i.setAttribute("value",e.title)},ue=e=>{let t=JSON.parse(localStorage.getItem("allLists"));for(let n in t)if(t[n].id==e.id){let r=document.querySelector(".listTitle"),a=document.querySelector(`#${e.id}.title`).value;t[n].title=a,r.innerHTML=a}localStorage.setItem("allLists",JSON.stringify(t)),document.querySelector(".appNav").appendChild(de())},ce=e=>{document.querySelector(".listTitle").innerHTML=e.title;let t=document.querySelector(`input[value='Edit...']#${e.id}`),n=document.querySelector(`input[value='Save']#${e.id}`),r=document.querySelector(`input[value='Cancel']#${e.id}`);t.setAttribute("style","display:inline"),n.setAttribute("style","display:none"),r.setAttribute("style","display:none")},me=e=>{let t=JSON.parse(localStorage.getItem("allLists"));for(let n in t)t[n].id==e.id&&t.splice(n,1);localStorage.setItem("allLists",JSON.stringify(t));let n=document.querySelector(".appNav"),r=document.querySelector(".appContent");for(;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)r.removeChild(r.firstChild);n.appendChild(de()),r.appendChild(se())};var he=se;window.document.title="To-Do-List - Gene Mecija";let fe=new a("Become Rich"),pe=new i(fe.id,"Dig for gold","There must be some gold left. Better start digging","2019-12-01","Money");fe.taskList[pe.id]=pe;let ge=new i(fe.id,"Find change","Look in couch cushions for loose change","2019-11-27","Money");fe.taskList[ge.id]=ge;let ye=new a("Eat Healthy"),ve=new i(ye.id,"Buy Vegetables","Consider buying vegetables instead of ice cream","2023-01-01","Food");ye.taskList[ve.id]=ve,localStorage.setItem("allLists",JSON.stringify([fe,ye]));let we=document.querySelector("body"),be=document.createElement("div");be.classList.add("appWindow"),we.appendChild(be);let Ce=document.createElement("div");Ce.classList.add("appNav"),be.appendChild(Ce);let Te=document.createElement("div");Te.classList.add("appContent"),be.appendChild(Te);var Se;Se=JSON.parse(localStorage.getItem("allLists")),Ce.appendChild(de()),Te.appendChild(he(Se[0]))}]);