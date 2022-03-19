

const input = document.querySelector("#input");
const output = document.querySelector("#output");

const MD5Button = document.querySelector("#generate");
const SHA1Button = document.querySelector("#generate-1");
const SHA256Button = document.querySelector("#generate-2");
const SHA512Button = document.querySelector("#generate-3");



const generate_md5=()=>{
    let hash=CryptoJS.MD5(input.value).toString();
    output.value=hash;
}

const generate_sh1=()=>{
    let hash=CryptoJS.SHA1(input.value).toString();
    output.value=hash;
}

const generate_sha256=()=>{
    let hash=CryptoJS.SHA256(input.value).toString();
    output.value=hash;
}

const generate_sha512=()=>{
    let hash=CryptoJS.SHA512(input.value).toString();
    output.value=hash;
}
MD5Button.addEventListener("click", generate_md5);
SHA1Button.addEventListener("click",generate_sh1);
SHA512Button.addEventListener("click",generate_sha512);
SHA256Button.addEventListener("click",generate_sha256);
