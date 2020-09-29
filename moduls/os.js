const os = require("os");

const SIZE = 1024;
const resizeKB = bites => bites/SIZE;
const resizeMB = bites => resizeKB(bites)/SIZE;
const resizeGB = bites => resizeMB(bites)/SIZE;


console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.constants);
console.log(resizeMB(os.freemem()));
console.log(resizeGB(os.totalmem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());

