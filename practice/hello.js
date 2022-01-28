const argv=process.argv.slice(2);
const [name]=argv;
if(!name)
    console.error(`Please pass a name, e.g. node hello.js Shaun`);
    else
    console.log(`Hello ${name}`);