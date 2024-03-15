const { load } = require("js-yaml");
const { readFileSync }  = require("fs");
const path = require("path");

let AppConstants   = {};

try {
   /* 
       DOCU: now load the env_file
        env_file should have all the sensitive information
        information stored in development_env should not be the same as what's stored in staging or production
   */

   let fileContents = readFileSync(path.join(__dirname, `jcb_sample.env.yml`), 'utf8');
   let data         = load(fileContents); 

    for(let key in data){
        AppConstants[key] = data[key];
    }
}
catch (e) {
    console.log(`AppConstants: Error loading constants.`, e);
    process.exit(1);
}

module.exports = AppConstants;