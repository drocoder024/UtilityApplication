
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const encodeButton = document.querySelector("#en");
const decodeButton = document.querySelector("#dec");

const encodeURL=()=>{
    output.value=encodeURIComponent(input.value);
}
const decodeURL=()=>{
    output.value=decodeURIComponent(input.value);
}
encodeButton.addEventListener("click", encodeURL);
decodeButton.addEventListener("click", decodeURL);
