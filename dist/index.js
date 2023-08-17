(()=>{"use strict";var i={};i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};i.r(d),i.d(d,{createProgram:()=>T});var y={};i.r(y),i.d(y,{initCreate:()=>H});const k=require("commander"),v=require("chalk");var m=i.n(v);const h=(e,t)=>{const r=e.toString();return r.length>=t?r:new Array(t-r.length).fill(0).join("")+r},l=()=>{const e=new Date;return m().grey(`${h(e.getHours(),2)}:${h(e.getMinutes(),2)}:${h(e.getSeconds(),2)}.${h(e.getMilliseconds(),3)}`)};function j(e,t){console.log(l(),`\u{1F680} ${m().blue(e)}`,t||"")}function I(e,t){console.log(l(),`${chalk.bgBlue("\u2727")} ${chalk.blue(e)}`,t||"")}function P(e,t){console.log(l(),`\u2705 ${m().green(e)}`,t||"")}function x(e,t){console.log(l(),`\u274C ${m().red(e)}`,t||"")}function b(...e){console.error(l(),...e.map(t=>m().red(t)))}function U(...e){console.warn(l(),...e.map(t=>chalk.yellow(t)))}function B(...e){console.log(l(),...e)}function V(...e){console.info(l(),...e.map(t=>chalk.italic(t)))}function Y(e,t="yyyy-MM-dd hh:mm:ss"){let r=t;const c={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(r)&&(r=r.replace(RegExp.$1,`${e.getFullYear()}`.substr(4-RegExp.$1.length)));for(const n in c)new RegExp(`(${n})`).test(r)&&(r=r.replace(RegExp.$1,RegExp.$1.length===1?c[n]:`00${c[n]}`.substr(`${c[n]}`.length)));return r}var D=(e,t,r)=>new Promise((c,n)=>{var o=u=>{try{f(r.next(u))}catch(p){n(p)}},a=u=>{try{f(r.throw(u))}catch(p){n(p)}},f=u=>u.done?c(u.value):Promise.resolve(u.value).then(o,a);f((r=r.apply(e,t)).next())});function M(e=0){setTimeout(()=>{process.exit(e)},100)}function O(e,t){return D(this,null,function*(){try{yield e()}catch(r){b(r),t&&(yield t()),M(-1)}})}var E=(e=>(e.fe="fe",e.be="be",e))(E||{}),_=(e=>(e.umiStarter="umi-starter",e.umiPwa="umi-pwa",e))(_||{});const s=require("fs"),g=require("path"),z=(e,t,r)=>{const c=path.join(t,r);fs.writeFile(c,e,n=>{n&&error(n.message)})},$=e=>{const t=s.readdirSync(e);for(const r of t){const c=g.join(e,r);s.statSync(c).isDirectory()?$(c):s.unlinkSync(c)}s.rmdirSync(e)},S=(e,t)=>{s.existsSync(t)&&$(t),s.mkdirSync(t,{recursive:!0});const r=s.readdirSync(e);for(const c of r){const n=g.join(e,c),o=g.join(t,c);s.statSync(n).isDirectory()?S(n,o):s.copyFileSync(n,o)}},q=(e,t)=>{const{name:r}=t,c=`${process.cwd()}/${r}`;switch(e){case _.umiStarter:C(r),A(c,t);break;case _.umiPwa:break;default:break}},C=e=>{const t=`${__dirname}/template/umi-starter`,r=`${process.cwd()}/${e}`;S(t,r)},A=(e,t)=>{F(e,t)},R=(e,t)=>{const r=s.readFileSync(e,"utf8"),c=Object.keys(t),n=r.replace(/{{\s*@ti\.inject="(\w+)"\s*}}/g,(o,a)=>c.includes(a)?t[a]:o);s.writeFileSync(e,n)},F=(e,t)=>{s.readdirSync(e).forEach(c=>{const n=g.join(e,c),o=s.statSync(n);o.isDirectory()?F(n,t):o.isFile()&&R(n,t)})};var w=(e,t,r)=>new Promise((c,n)=>{var o=u=>{try{f(r.next(u))}catch(p){n(p)}},a=u=>{try{f(r.throw(u))}catch(p){n(p)}},f=u=>u.done?c(u.value):Promise.resolve(u.value).then(o,a);f((r=r.apply(e,t)).next())});function H(e){e.command("create").description("\u751F\u6210\u524D\u540E\u7AEF\u6846\u67B6\u4EE3\u7801").alias("c").option("-t, --type <type>","\u6846\u67B6\u7C7B\u578B").option("-k, --kit <kit>","\u6846\u67B6\u9884\u8BBE").option("-n, --name <name>","\u9879\u76EE\u540D\u79F0").action((t,r)=>w(this,null,function*(){const{_optionValues:c}=r,{type:n,kit:o,name:a}=c;j("\u6B63\u5728\u542F\u52A8\u751F\u6210"),yield O(()=>w(this,null,function*(){if(!n)throw new Error("type is required!");if(!o)throw new Error("kit is required!");if(!a)throw new Error("name is required!");switch(B(`\u5F00\u59CB\u751F\u6210 ${a} \u9879\u76EE\uFF0C\u4F7F\u7528 ${n} ${o} \u6846\u67B6`),n){case E.fe:q(o,{name:a});break;case E.be:break;default:break}P("\u6846\u67B6\u4EE3\u7801\u751F\u6210\u6210\u529F")}),()=>w(this,null,function*(){x("\u6846\u67B6\u4EE3\u7801\u751F\u6210\u5931\u8D25")}))})).addHelpText("after",`
Examples:
  $ ti create -t <type> -k <kit> -n <name>
  $ ti create -t fe -k umi-starter|umi-pwa name: \u751F\u6210\u524D\u7AEF\u6846\u67B6\u4EE3\u7801
  $ ti create -t be -k ...: \u751F\u6210\u540E\u7AEF\u6846\u67B6\u4EE3\u7801

        `).showHelpAfterError()}function T(){const e=new k.Command;return e.action(()=>{e.help()}),Object.keys(y).forEach(t=>{try{y[t](e)}catch(r){b(`\u6307\u4EE4\u521D\u59CB\u5316\u5931\u8D25: ${r.message}`)}}),e}module.exports=d})();