(()=>{var e={351:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const s=i(r(87));const a=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const u="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=u+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${u}${escapeData(this.message)}`;return e}}function escapeData(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getIDToken=t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.notice=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const a=r(351);const u=r(717);const c=r(278);const l=i(r(87));const p=i(r(622));const d=r(41);var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=c.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${l.EOL}${r}${l.EOL}${t}`;u.issueCommand("ENV",n)}else{a.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){a.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){u.issueCommand("PATH",e)}else{a.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${p.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return r}return r.trim()}t.getInput=getInput;function getMultilineInput(e,t){const r=getInput(e,t).split("\n").filter((e=>e!==""));return r}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const r=["true","True","TRUE"];const n=["false","False","FALSE"];const o=getInput(e,t);if(r.includes(o))return true;if(n.includes(o))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(l.EOL);a.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){a.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){a.issueCommand("debug",{},e)}t.debug=debug;function error(e,t={}){a.issueCommand("error",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.error=error;function warning(e,t={}){a.issueCommand("warning",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.warning=warning;function notice(e,t={}){a.issueCommand("notice",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.notice=notice;function info(e){process.stdout.write(e+l.EOL)}t.info=info;function startGroup(e){a.issue("group",e)}t.startGroup=startGroup;function endGroup(){a.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){a.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState;function getIDToken(e){return s(this,void 0,void 0,(function*(){return yield d.OidcClient.getIDToken(e)}))}t.getIDToken=getIDToken},717:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const s=i(r(747));const a=i(r(87));const u=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}s.appendFileSync(r,`${u.toCommandValue(t)}${a.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},41:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.OidcClient=void 0;const o=r(925);const i=r(702);const s=r(186);class OidcClient{static createHttpClient(e=true,t=10){const r={allowRetries:e,maxRetries:t};return new o.HttpClient("actions/oidc-client",[new i.BearerCredentialHandler(OidcClient.getRequestToken())],r)}static getRequestToken(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable")}return e}static getIDTokenUrl(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable")}return e}static getCall(e){var t;return n(this,void 0,void 0,(function*(){const r=OidcClient.createHttpClient();const n=yield r.getJson(e).catch((e=>{throw new Error(`Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`)}));const o=(t=n.result)===null||t===void 0?void 0:t.value;if(!o){throw new Error("Response json body do not have ID Token field")}return o}))}static getIDToken(e){return n(this,void 0,void 0,(function*(){try{let t=OidcClient.getIDTokenUrl();if(e){const r=encodeURIComponent(e);t=`${t}&audience=${r}`}s.debug(`ID token url is ${t}`);const r=yield OidcClient.getCall(t);s.setSecret(r);return r}catch(e){throw new Error(`Error message: ${e.message}`)}}))}}t.OidcClient=OidcClient},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.toCommandProperties=t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function toCommandProperties(e){if(!Object.keys(e).length){return{}}return{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}}t.toCommandProperties=toCommandProperties},702:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});class BasicCredentialHandler{constructor(e,t){this.username=e;this.password=t}prepareRequest(e){e.headers["Authorization"]="Basic "+Buffer.from(this.username+":"+this.password).toString("base64")}canHandleAuthentication(e){return false}handleAuthentication(e,t,r){return null}}t.BasicCredentialHandler=BasicCredentialHandler;class BearerCredentialHandler{constructor(e){this.token=e}prepareRequest(e){e.headers["Authorization"]="Bearer "+this.token}canHandleAuthentication(e){return false}handleAuthentication(e,t,r){return null}}t.BearerCredentialHandler=BearerCredentialHandler;class PersonalAccessTokenCredentialHandler{constructor(e){this.token=e}prepareRequest(e){e.headers["Authorization"]="Basic "+Buffer.from("PAT:"+this.token).toString("base64")}canHandleAuthentication(e){return false}handleAuthentication(e,t,r){return null}}t.PersonalAccessTokenCredentialHandler=PersonalAccessTokenCredentialHandler},925:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});const n=r(605);const o=r(211);const i=r(443);let s;var a;(function(e){e[e["OK"]=200]="OK";e[e["MultipleChoices"]=300]="MultipleChoices";e[e["MovedPermanently"]=301]="MovedPermanently";e[e["ResourceMoved"]=302]="ResourceMoved";e[e["SeeOther"]=303]="SeeOther";e[e["NotModified"]=304]="NotModified";e[e["UseProxy"]=305]="UseProxy";e[e["SwitchProxy"]=306]="SwitchProxy";e[e["TemporaryRedirect"]=307]="TemporaryRedirect";e[e["PermanentRedirect"]=308]="PermanentRedirect";e[e["BadRequest"]=400]="BadRequest";e[e["Unauthorized"]=401]="Unauthorized";e[e["PaymentRequired"]=402]="PaymentRequired";e[e["Forbidden"]=403]="Forbidden";e[e["NotFound"]=404]="NotFound";e[e["MethodNotAllowed"]=405]="MethodNotAllowed";e[e["NotAcceptable"]=406]="NotAcceptable";e[e["ProxyAuthenticationRequired"]=407]="ProxyAuthenticationRequired";e[e["RequestTimeout"]=408]="RequestTimeout";e[e["Conflict"]=409]="Conflict";e[e["Gone"]=410]="Gone";e[e["TooManyRequests"]=429]="TooManyRequests";e[e["InternalServerError"]=500]="InternalServerError";e[e["NotImplemented"]=501]="NotImplemented";e[e["BadGateway"]=502]="BadGateway";e[e["ServiceUnavailable"]=503]="ServiceUnavailable";e[e["GatewayTimeout"]=504]="GatewayTimeout"})(a=t.HttpCodes||(t.HttpCodes={}));var u;(function(e){e["Accept"]="accept";e["ContentType"]="content-type"})(u=t.Headers||(t.Headers={}));var c;(function(e){e["ApplicationJson"]="application/json"})(c=t.MediaTypes||(t.MediaTypes={}));function getProxyUrl(e){let t=i.getProxyUrl(new URL(e));return t?t.href:""}t.getProxyUrl=getProxyUrl;const l=[a.MovedPermanently,a.ResourceMoved,a.SeeOther,a.TemporaryRedirect,a.PermanentRedirect];const p=[a.BadGateway,a.ServiceUnavailable,a.GatewayTimeout];const d=["OPTIONS","GET","DELETE","HEAD"];const f=10;const h=5;class HttpClientError extends Error{constructor(e,t){super(e);this.name="HttpClientError";this.statusCode=t;Object.setPrototypeOf(this,HttpClientError.prototype)}}t.HttpClientError=HttpClientError;class HttpClientResponse{constructor(e){this.message=e}readBody(){return new Promise((async(e,t)=>{let r=Buffer.alloc(0);this.message.on("data",(e=>{r=Buffer.concat([r,e])}));this.message.on("end",(()=>{e(r.toString())}))}))}}t.HttpClientResponse=HttpClientResponse;function isHttps(e){let t=new URL(e);return t.protocol==="https:"}t.isHttps=isHttps;class HttpClient{constructor(e,t,r){this._ignoreSslError=false;this._allowRedirects=true;this._allowRedirectDowngrade=false;this._maxRedirects=50;this._allowRetries=false;this._maxRetries=1;this._keepAlive=false;this._disposed=false;this.userAgent=e;this.handlers=t||[];this.requestOptions=r;if(r){if(r.ignoreSslError!=null){this._ignoreSslError=r.ignoreSslError}this._socketTimeout=r.socketTimeout;if(r.allowRedirects!=null){this._allowRedirects=r.allowRedirects}if(r.allowRedirectDowngrade!=null){this._allowRedirectDowngrade=r.allowRedirectDowngrade}if(r.maxRedirects!=null){this._maxRedirects=Math.max(r.maxRedirects,0)}if(r.keepAlive!=null){this._keepAlive=r.keepAlive}if(r.allowRetries!=null){this._allowRetries=r.allowRetries}if(r.maxRetries!=null){this._maxRetries=r.maxRetries}}}options(e,t){return this.request("OPTIONS",e,null,t||{})}get(e,t){return this.request("GET",e,null,t||{})}del(e,t){return this.request("DELETE",e,null,t||{})}post(e,t,r){return this.request("POST",e,t,r||{})}patch(e,t,r){return this.request("PATCH",e,t,r||{})}put(e,t,r){return this.request("PUT",e,t,r||{})}head(e,t){return this.request("HEAD",e,null,t||{})}sendStream(e,t,r,n){return this.request(e,t,r,n)}async getJson(e,t={}){t[u.Accept]=this._getExistingOrDefaultHeader(t,u.Accept,c.ApplicationJson);let r=await this.get(e,t);return this._processResponse(r,this.requestOptions)}async postJson(e,t,r={}){let n=JSON.stringify(t,null,2);r[u.Accept]=this._getExistingOrDefaultHeader(r,u.Accept,c.ApplicationJson);r[u.ContentType]=this._getExistingOrDefaultHeader(r,u.ContentType,c.ApplicationJson);let o=await this.post(e,n,r);return this._processResponse(o,this.requestOptions)}async putJson(e,t,r={}){let n=JSON.stringify(t,null,2);r[u.Accept]=this._getExistingOrDefaultHeader(r,u.Accept,c.ApplicationJson);r[u.ContentType]=this._getExistingOrDefaultHeader(r,u.ContentType,c.ApplicationJson);let o=await this.put(e,n,r);return this._processResponse(o,this.requestOptions)}async patchJson(e,t,r={}){let n=JSON.stringify(t,null,2);r[u.Accept]=this._getExistingOrDefaultHeader(r,u.Accept,c.ApplicationJson);r[u.ContentType]=this._getExistingOrDefaultHeader(r,u.ContentType,c.ApplicationJson);let o=await this.patch(e,n,r);return this._processResponse(o,this.requestOptions)}async request(e,t,r,n){if(this._disposed){throw new Error("Client has already been disposed.")}let o=new URL(t);let i=this._prepareRequest(e,o,n);let s=this._allowRetries&&d.indexOf(e)!=-1?this._maxRetries+1:1;let u=0;let c;while(u<s){c=await this.requestRaw(i,r);if(c&&c.message&&c.message.statusCode===a.Unauthorized){let e;for(let t=0;t<this.handlers.length;t++){if(this.handlers[t].canHandleAuthentication(c)){e=this.handlers[t];break}}if(e){return e.handleAuthentication(this,i,r)}else{return c}}let t=this._maxRedirects;while(l.indexOf(c.message.statusCode)!=-1&&this._allowRedirects&&t>0){const s=c.message.headers["location"];if(!s){break}let a=new URL(s);if(o.protocol=="https:"&&o.protocol!=a.protocol&&!this._allowRedirectDowngrade){throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.")}await c.readBody();if(a.hostname!==o.hostname){for(let e in n){if(e.toLowerCase()==="authorization"){delete n[e]}}}i=this._prepareRequest(e,a,n);c=await this.requestRaw(i,r);t--}if(p.indexOf(c.message.statusCode)==-1){return c}u+=1;if(u<s){await c.readBody();await this._performExponentialBackoff(u)}}return c}dispose(){if(this._agent){this._agent.destroy()}this._disposed=true}requestRaw(e,t){return new Promise(((r,n)=>{let callbackForResult=function(e,t){if(e){n(e)}r(t)};this.requestRawWithCallback(e,t,callbackForResult)}))}requestRawWithCallback(e,t,r){let n;if(typeof t==="string"){e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8")}let o=false;let handleResult=(e,t)=>{if(!o){o=true;r(e,t)}};let i=e.httpModule.request(e.options,(e=>{let t=new HttpClientResponse(e);handleResult(null,t)}));i.on("socket",(e=>{n=e}));i.setTimeout(this._socketTimeout||3*6e4,(()=>{if(n){n.end()}handleResult(new Error("Request timeout: "+e.options.path),null)}));i.on("error",(function(e){handleResult(e,null)}));if(t&&typeof t==="string"){i.write(t,"utf8")}if(t&&typeof t!=="string"){t.on("close",(function(){i.end()}));t.pipe(i)}else{i.end()}}getAgent(e){let t=new URL(e);return this._getAgent(t)}_prepareRequest(e,t,r){const i={};i.parsedUrl=t;const s=i.parsedUrl.protocol==="https:";i.httpModule=s?o:n;const a=s?443:80;i.options={};i.options.host=i.parsedUrl.hostname;i.options.port=i.parsedUrl.port?parseInt(i.parsedUrl.port):a;i.options.path=(i.parsedUrl.pathname||"")+(i.parsedUrl.search||"");i.options.method=e;i.options.headers=this._mergeHeaders(r);if(this.userAgent!=null){i.options.headers["user-agent"]=this.userAgent}i.options.agent=this._getAgent(i.parsedUrl);if(this.handlers){this.handlers.forEach((e=>{e.prepareRequest(i.options)}))}return i}_mergeHeaders(e){const lowercaseKeys=e=>Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{});if(this.requestOptions&&this.requestOptions.headers){return Object.assign({},lowercaseKeys(this.requestOptions.headers),lowercaseKeys(e))}return lowercaseKeys(e||{})}_getExistingOrDefaultHeader(e,t,r){const lowercaseKeys=e=>Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{});let n;if(this.requestOptions&&this.requestOptions.headers){n=lowercaseKeys(this.requestOptions.headers)[t]}return e[t]||n||r}_getAgent(e){let t;let a=i.getProxyUrl(e);let u=a&&a.hostname;if(this._keepAlive&&u){t=this._proxyAgent}if(this._keepAlive&&!u){t=this._agent}if(!!t){return t}const c=e.protocol==="https:";let l=100;if(!!this.requestOptions){l=this.requestOptions.maxSockets||n.globalAgent.maxSockets}if(u){if(!s){s=r(294)}const e={maxSockets:l,keepAlive:this._keepAlive,proxy:{...(a.username||a.password)&&{proxyAuth:`${a.username}:${a.password}`},host:a.hostname,port:a.port}};let n;const o=a.protocol==="https:";if(c){n=o?s.httpsOverHttps:s.httpsOverHttp}else{n=o?s.httpOverHttps:s.httpOverHttp}t=n(e);this._proxyAgent=t}if(this._keepAlive&&!t){const e={keepAlive:this._keepAlive,maxSockets:l};t=c?new o.Agent(e):new n.Agent(e);this._agent=t}if(!t){t=c?o.globalAgent:n.globalAgent}if(c&&this._ignoreSslError){t.options=Object.assign(t.options||{},{rejectUnauthorized:false})}return t}_performExponentialBackoff(e){e=Math.min(f,e);const t=h*Math.pow(2,e);return new Promise((e=>setTimeout((()=>e()),t)))}static dateTimeDeserializer(e,t){if(typeof t==="string"){let e=new Date(t);if(!isNaN(e.valueOf())){return e}}return t}async _processResponse(e,t){return new Promise((async(r,n)=>{const o=e.message.statusCode;const i={statusCode:o,result:null,headers:{}};if(o==a.NotFound){r(i)}let s;let u;try{u=await e.readBody();if(u&&u.length>0){if(t&&t.deserializeDates){s=JSON.parse(u,HttpClient.dateTimeDeserializer)}else{s=JSON.parse(u)}i.result=s}i.headers=e.message.headers}catch(e){}if(o>299){let e;if(s&&s.message){e=s.message}else if(u&&u.length>0){e=u}else{e="Failed request: ("+o+")"}let t=new HttpClientError(e,o);t.result=i.result;n(t)}else{r(i)}}))}}t.HttpClient=HttpClient},443:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function getProxyUrl(e){let t=e.protocol==="https:";let r;if(checkBypass(e)){return r}let n;if(t){n=process.env["https_proxy"]||process.env["HTTPS_PROXY"]}else{n=process.env["http_proxy"]||process.env["HTTP_PROXY"]}if(n){r=new URL(n)}return r}t.getProxyUrl=getProxyUrl;function checkBypass(e){if(!e.hostname){return false}let t=process.env["no_proxy"]||process.env["NO_PROXY"]||"";if(!t){return false}let r;if(e.port){r=Number(e.port)}else if(e.protocol==="http:"){r=80}else if(e.protocol==="https:"){r=443}let n=[e.hostname.toUpperCase()];if(typeof r==="number"){n.push(`${n[0]}:${r}`)}for(let e of t.split(",").map((e=>e.trim().toUpperCase())).filter((e=>e))){if(n.some((t=>t===e))){return true}}return false}t.checkBypass=checkBypass},466:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.git=void 0;var n=r(129);t.git=function(e,t){return n.execFileSync("git",pattern(e),{cwd:t,shell:false,stdio:["inherit","pipe","pipe"],encoding:"utf-8",maxBuffer:65535,timeout:6e4}).trim()};function pattern(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=[];var _loop_1=function(e){if(!e){return"continue"}else if(Array.isArray(e)){r=r.concat(pattern.apply(void 0,e))}else if(typeof e==="string"||typeof e==="number"){r=r.concat([String(e)])}else if(typeof e==="object"){r=r.concat(Object.keys(e).filter((function(t){return e[t]})))}};for(var n=0,o=e;n<o.length;n++){var i=o[n];_loop_1(i)}return r}},229:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return extendStatics(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:true});t.GitAgent=void 0;var o=r(267);var i=function(e){n(GitAgent,e);function GitAgent(){return e!==null&&e.apply(this,arguments)||this}GitAgent.prototype.commit=function(e){this.git("commit","-am",e)};GitAgent.prototype.createTag=function(e){this.git("tag",e)};GitAgent.prototype.createBranch=function(e,t){this.git("branch",e);if(t){var r=this.branchName();this.checkoutBranch(e);this.push({track:true,verify:true,remoteName:t});this.checkoutBranch(r)}};GitAgent.prototype.deleteBranch=function(e,t){if(t){return this.git("push",t,"--delete",e)}return this.git("branch","--delete",e)};GitAgent.prototype.checkoutBranch=function(e){this.git("checkout",e)};GitAgent.prototype.push=function(e){var t,r,n;var o={"--force":(t=e===null||e===void 0?void 0:e.force)!==null&&t!==void 0?t:false,"--tags":(r=e===null||e===void 0?void 0:e.includeTags)!==null&&r!==void 0?r:false,"--no-verify":!(e===null||e===void 0?void 0:e.verify)};var i=(e===null||e===void 0?void 0:e.track)&&["--set-upstream",(n=e===null||e===void 0?void 0:e.remoteName)!==null&&n!==void 0?n:"origin",this.branchName()];this.git("push",o,i)};GitAgent.prototype.getField=function(e){return this.git("config","--get",e)};GitAgent.prototype.setField=function(e,t){return this.git("config",e,t)};return GitAgent}(o.Git);t.GitAgent=i},62:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.GitBase=void 0;var n=r(466);var o=function(){function GitBase(e){this.cwd=e}GitBase.prototype.git=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return n.git(e,this.cwd)};return GitBase}();t.GitBase=o},267:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return extendStatics(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}}();var o=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n};Object.defineProperty(t,"__esModule",{value:true});t.Git=void 0;var i=r(622);var s=r(62);var a=function(e){n(Git,e);function Git(t){return e.call(this,t)||this}Git.prototype.getTopLevel=function(){return this.git("rev-parse","--show-toplevel")};Git.prototype.isRepository=function(){try{this.getTopLevel()}catch(e){return false}return true};Git.prototype.branchName=function(e){if(e===void 0){e="HEAD"}return this.git("rev-parse","--abbrev-ref",e)};Git.prototype.commitHash=function(e,t){if(e===void 0){e=false}if(t===void 0){t="HEAD"}var makeShort=function(){return typeof e==="number"&&"--short="+e||e&&"--short"};return this.git("rev-parse",makeShort(),t)};Git.prototype.commitDate=function(e){return new Date(this.logN1("%aI",e))};Git.prototype.commitCount=function(){return Number.parseInt(this.git("rev-list","--all","--count"),10)};Git.prototype.message=function(e){return this.logN1("%B",e)};Git.prototype.describe=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return this.git.apply(this,o(["describe"],e))};Git.prototype.tag=function(e){return this.describe("--always","--tag","--abbrev=0",{"--dirty":e===null||e===void 0?void 0:e.markDirty,"--first-parent":e===null||e===void 0?void 0:e.firstParent},(e===null||e===void 0?void 0:e.match)&&["--match",e===null||e===void 0?void 0:e.match])};Git.prototype.log=function(e,t){if(e===undefined){e={hash:"%H",date:"%s",subject:"%cI",name:"%an"}}var r="--pretty=format:"+JSON.stringify(e)+",";var n=t&&"--max-count="+t;var o=this.git("log","--abbrev-commit",n,r);return JSON.parse("["+o.slice(0,-1)+"]")};Git.prototype.logN1=function(e,t){if(t===void 0){t="HEAD"}var r="--pretty=format:"+e;return this.git("log","-1",r,t)};Git.prototype.remoteURL=function(e){if(e===void 0){e="origin"}return this.git("remote","get-url",e)};Git.prototype.hasUnstagedChanges=function(){return this.isDirty(this.git("write-tree"))};Git.prototype.isDirty=function(e){if(e===void 0){e="HEAD"}return this.git("diff-index",e,"--").length>0};Git.prototype.isTagDirty=function(){try{this.describe("--exact-match","--tags")}catch(e){if(e.message.includes("no tag exactly matches")){return true}throw e}return false};Git.prototype.isUpdateToDate=function(e,t){if(e===void 0){e=this.branchName()}if(t===void 0){t="origin"}this.git("fetch",t,e);return this.commitHash(false,"HEAD")===this.commitHash(false,t+"/"+e)};Git.prototype.repositoryName=function(e){if(e===void 0){e="origin"}var t=this.remoteURL(e);return i.basename(t,".git")};return Git}(s.GitBase);t.Git=a},613:(e,t,r)=>{"use strict";var n;n={value:true};var o=r(267);var i=r(267);n={enumerable:true,get:function(){return i.Git}};var s=r(229);n={enumerable:true,get:function(){return s.GitAgent}};var a=r(62);n={enumerable:true,get:function(){return a.GitBase}};t.ZP=new o.Git},294:(e,t,r)=>{e.exports=r(219)},219:(e,t,r)=>{"use strict";var n=r(631);var o=r(16);var i=r(605);var s=r(211);var a=r(614);var u=r(357);var c=r(669);t.httpOverHttp=httpOverHttp;t.httpsOverHttp=httpsOverHttp;t.httpOverHttps=httpOverHttps;t.httpsOverHttps=httpsOverHttps;function httpOverHttp(e){var t=new TunnelingAgent(e);t.request=i.request;return t}function httpsOverHttp(e){var t=new TunnelingAgent(e);t.request=i.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function httpOverHttps(e){var t=new TunnelingAgent(e);t.request=s.request;return t}function httpsOverHttps(e){var t=new TunnelingAgent(e);t.request=s.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function TunnelingAgent(e){var t=this;t.options=e||{};t.proxyOptions=t.options.proxy||{};t.maxSockets=t.options.maxSockets||i.Agent.defaultMaxSockets;t.requests=[];t.sockets=[];t.on("free",(function onFree(e,r,n,o){var i=toOptions(r,n,o);for(var s=0,a=t.requests.length;s<a;++s){var u=t.requests[s];if(u.host===i.host&&u.port===i.port){t.requests.splice(s,1);u.request.onSocket(e);return}}e.destroy();t.removeSocket(e)}))}c.inherits(TunnelingAgent,a.EventEmitter);TunnelingAgent.prototype.addRequest=function addRequest(e,t,r,n){var o=this;var i=mergeOptions({request:e},o.options,toOptions(t,r,n));if(o.sockets.length>=this.maxSockets){o.requests.push(i);return}o.createSocket(i,(function(t){t.on("free",onFree);t.on("close",onCloseOrRemove);t.on("agentRemove",onCloseOrRemove);e.onSocket(t);function onFree(){o.emit("free",t,i)}function onCloseOrRemove(e){o.removeSocket(t);t.removeListener("free",onFree);t.removeListener("close",onCloseOrRemove);t.removeListener("agentRemove",onCloseOrRemove)}}))};TunnelingAgent.prototype.createSocket=function createSocket(e,t){var r=this;var n={};r.sockets.push(n);var o=mergeOptions({},r.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:false,headers:{host:e.host+":"+e.port}});if(e.localAddress){o.localAddress=e.localAddress}if(o.proxyAuth){o.headers=o.headers||{};o.headers["Proxy-Authorization"]="Basic "+new Buffer(o.proxyAuth).toString("base64")}l("making CONNECT request");var i=r.request(o);i.useChunkedEncodingByDefault=false;i.once("response",onResponse);i.once("upgrade",onUpgrade);i.once("connect",onConnect);i.once("error",onError);i.end();function onResponse(e){e.upgrade=true}function onUpgrade(e,t,r){process.nextTick((function(){onConnect(e,t,r)}))}function onConnect(o,s,a){i.removeAllListeners();s.removeAllListeners();if(o.statusCode!==200){l("tunneling socket could not be established, statusCode=%d",o.statusCode);s.destroy();var u=new Error("tunneling socket could not be established, "+"statusCode="+o.statusCode);u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}if(a.length>0){l("got illegal response body from proxy");s.destroy();var u=new Error("got illegal response body from proxy");u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}l("tunneling connection has established");r.sockets[r.sockets.indexOf(n)]=s;return t(s)}function onError(t){i.removeAllListeners();l("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var o=new Error("tunneling socket could not be established, "+"cause="+t.message);o.code="ECONNRESET";e.request.emit("error",o);r.removeSocket(n)}};TunnelingAgent.prototype.removeSocket=function removeSocket(e){var t=this.sockets.indexOf(e);if(t===-1){return}this.sockets.splice(t,1);var r=this.requests.shift();if(r){this.createSocket(r,(function(e){r.request.onSocket(e)}))}};function createSecureSocket(e,t){var r=this;TunnelingAgent.prototype.createSocket.call(r,e,(function(n){var i=e.request.getHeader("host");var s=mergeOptions({},r.options,{socket:n,servername:i?i.replace(/:.*$/,""):e.host});var a=o.connect(0,s);r.sockets[r.sockets.indexOf(n)]=a;t(a)}))}function toOptions(e,t,r){if(typeof e==="string"){return{host:e,port:t,localAddress:r}}return e}function mergeOptions(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n==="object"){var o=Object.keys(n);for(var i=0,s=o.length;i<s;++i){var a=o[i];if(n[a]!==undefined){e[a]=n[a]}}}}return e}var l;if(process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)){l=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]==="string"){e[0]="TUNNEL: "+e[0]}else{e.unshift("TUNNEL:")}console.error.apply(console,e)}}else{l=function(){}}t.debug=l},357:e=>{"use strict";e.exports=require("assert")},129:e=>{"use strict";e.exports=require("child_process")},614:e=>{"use strict";e.exports=require("events")},747:e=>{"use strict";e.exports=require("fs")},605:e=>{"use strict";e.exports=require("http")},211:e=>{"use strict";e.exports=require("https")},631:e=>{"use strict";e.exports=require("net")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},16:e=>{"use strict";e.exports=require("tls")},669:e=>{"use strict";e.exports=require("util")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var o=t[r]={exports:{}};var i=true;try{e[r].call(o.exports,o,o.exports,__nccwpck_require__);i=false}finally{if(i)delete t[r]}return o.exports}(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{"use strict";__nccwpck_require__.r(r);var e=__nccwpck_require__(186);var t=__nccwpck_require__(129);var n=__nccwpck_require__(669);async function configure(e){await setToken(e.token);if(e.registry){await setRepistry()}}async function setToken(e){await push("//npm.pkg.github.com/:_authToken",e)}async function setRepistry(){var e;const t=(e=process.env.GITHUB_REPOSITORY)!==null&&e!==void 0?e:"";const r=t.indexOf("/");const n=t.slice(0,r);const o=`@${n.toLowerCase()}:registry`;await push(o,`https://npm.pkg.github.com/${n}`)}function push(e,r){return(0,n.promisify)(t.execFile)("npm",["config","set",e,r])}var o=__nccwpck_require__(613);function samver(){const e=o.ZP.commitDate();const t=[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()];const r=t.map((e=>e.toString().padStart(2,"0"))).join("");return[r,o.ZP.commitHash(true)].join("-")}async function main(){const t=(0,e.getInput)("token");const r=Boolean((0,e.getInput)("registry"));const n=Boolean((0,e.getInput)("global"));await configure({token:t,global:n,registry:r});(0,e.exportVariable)("BUILD_VERSION",samver())}main().catch((t=>(0,e.setFailed)(t.message)))})();module.exports=r})();