import {TalkLister} from "./popup/TalkLister";
import {SymposiumApiClient} from "./api/SymposiumApiClient";
import {TokenFetcher} from "./identity/TokenFetcher";
import {IdentityIntegrator} from "./identity/IdentityIntegrator";

// let jQuery = require('jquery');
// require('../../build/js/bootstrap.min.js');

console.log("This is a test");

let api = new SymposiumApiClient();

let fetcher = new TokenFetcher(1, 'hoihfoipqwe');
let identity = new IdentityIntegrator(fetcher, api);

//let pronto = new TalkLister(api);
console.log("Ready to go");
