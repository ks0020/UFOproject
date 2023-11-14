const dialogCover = document.getElementById('dialogCover');
const addressLayer = document.getElementById('addressLayer');
const duplicateLayer = document.getElementById('duplicateLayer');

dialogCover.show = () =>{
    dialogCover.classList.add('visible');
}
//dialogCover.show 함수 정의 -> 클래스에 visible 추가

dialogCover.hide = () => {
    dialogCover.classList.remove('visible');
}
//dialogCover.hide 함수 정의 -> 클래스에 visible 제거

duplicateLayer.show = (params) => {
    duplicateLayer.querySelector('[rel="content"]').innerHTML = params.content;
    const cancelButton = duplicateLayer.querySelector('[rel="confirm"]');
    if (typeof params['onCancel'] === 'function') {
        // params.onCancel이 함수인 경우
        cancelButton.style.display = 'inline-block';// 취소 버튼을 보이도록 설정합니다.
        cancelButton.onclick = params['onCancel']; // 취소 버튼의 클릭 이벤트에 params.onCancel 함수를 할당합니다.
    } else {
        // params.onCancel이 함수가 아닌 경우
    }
    duplicateLayer.querySelector('[rel="confirm"]').onclick = params['onConfirm'];
    // 확인 버튼의 클릭 이벤트에 params.onConfirm 함수를 할당합니다.
    duplicateLayer.classList.add('visible');
    // dialogLayer에 'visible' 클래스를 추가하여 보이도록 설정합니다.
};
duplicateLayer.hide = () =>{
    duplicateLayer.classList.remove('visible');
}