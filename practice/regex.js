let username = "BadUs3rnam3";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})/i; // Change this line
console.log(username.match(userCheck))