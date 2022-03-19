const input = document.querySelector("#input");
const output = document.querySelector("#output");

const encodeButton = document.querySelector("#en");
const decodeButton = document.querySelector("#dec");

const encodedString=()=>{
    output.value=btoa(input.value);
}
const decodedString=()=>{
    output.value=atob(input.value);
}
encodeButton.addEventListener("click", encodedString);
decodeButton.addEventListener("click", decodedString);