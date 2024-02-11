const myXIdTextElemsArr = Array.from(document.getElementsByClassName("my_x_id"));
const myXLinkElemsArr = Array.from(document.getElementsByClassName("my_x_link"));

myXIdTextElemsArr.forEach((e) => {
    e.innerText = MY_X_ID;
});

myXLinkElemsArr.forEach((e) => {
    e.setAttribute("href", `https://x.com/${MY_X_ID}`);
});