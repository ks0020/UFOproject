const coverElement = document.getElementById('cover');
coverElement.show = (f) => {
    coverElement.classList.add('visible');
    coverElement.onclick = f;
}
coverElement.hide = () => {
    coverElement.classList.remove('visible');
};

const imgBtn = document.querySelector('.img_btn');
const imgModify = document.querySelector('.img_modify');

imgModify.show = () => {
    imgModify.classList.add('visible');
}

imgModify.hide = () => {
    imgModify.classList.remove('visible');
}

imgBtn.onclick = () => {
    coverElement.show();
    imgModify.show();
}

imgModify.hide = () => {
    imgModify.hide();
}