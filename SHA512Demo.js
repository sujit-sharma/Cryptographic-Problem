const hash = require('./SHA512');

let password = 'sujit@#5&';
new hash(password)
//md.InputMessage(pt)
.then(hash=> {
    console.log(hash);
})
.catch(err => console.log(err));
