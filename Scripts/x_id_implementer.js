const MY_X_ID_TEXT_ELEMS_ARR = Array.from(document.getElementsByClassName("my_x_id"));
const MY_X_LINK_ELEMS_ARR = Array.from(document.getElementsByClassName("my_x_link"));

MY_X_ID_TEXT_ELEMS_ARR.forEach((e) => {
    e.innerText = MY_X_ID;
});

MY_X_LINK_ELEMS_ARR.forEach((e) => {
    e.setAttribute("href", `https://x.com/${MY_X_ID}`);
});