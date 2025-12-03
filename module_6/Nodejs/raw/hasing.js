const crypto=require('crypto');
console.log("MD5");
const md5hash1=crypto.createHash('md5').update("123").digest('hex');
const md5hash2=crypto.createHash('md5').update("123").digest('hex');

// console.log(md5hash1);
// console.log(md5hash2);
const sha256hash=crypto.createHash('sha256').update('122').digest('hex');
console.log(sha256hash)
const sha512hash=crypto.createHash('sha512').update('122').digest('hex');
console.log(sha512hash)


const salt=crypto.randomBytes(16).toString('hex');



const salted256hash=crypto.createHash('sha256').update('122' + salt).digest('hex');
console.log("salted hash 1",salted256hash)

const salted256hash1=crypto.createHash('sha256').update('122' + salt).digest('hex');
console.log("salted hash 2",salted256hash1)

const salted512hash=crypto.createHash('sha256').update('122' + salt).digest('hex');
console.log("salted hash 3",salted512hash)
