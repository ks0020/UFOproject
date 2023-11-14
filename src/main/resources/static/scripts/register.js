const registerForm = document.getElementById('registerForm');
const step_1 = document.querySelector('.step-1');
const step_2 = document.querySelector('.step-2');
let agreeChk = registerForm.querySelectorAll('input[name=agree]');

registerForm['checkAll'].addEventListener('change', e => {
    agreeChk.forEach(checkbox => checkbox.checked = e.target.checked);
    updateNextButtonState();
});

agreeChk.forEach(checkbox => checkbox.addEventListener('change', updateNextButtonState));

function isRequired(checkbox) {
    return checkbox.dataset.required === 'true';
}

function areAllRequiredChecked() {
    return Array.from(agreeChk).every(checkbox => !isRequired(checkbox) || checkbox.checked);
}

function updateNextButtonState() {
    const isChecked = areAllRequiredChecked();

    registerForm['next'].disabled = !isChecked;
    registerForm['next'].style.backgroundColor = isChecked ? '#96f2d7' : '';
    registerForm['next'].style.color = isChecked ? 'black' : '';
    registerForm['next'].style.cursor = isChecked ? 'pointer' : '';
} //필수사항을 체크했거나 모두 동의 했을때

registerForm['next'].addEventListener('click', e=> {
    e.preventDefault();
    step_1.style.display = 'none';
    step_2.style.display = 'block';
});

registerForm['check_email'].addEventListener('click', e => {

    if (registerForm['email'].value === '') {
        dialogCover.show();
        duplicateLayer.show({
            content: '이메일을 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerForm['email'].value)) {
        dialogCover.show();
        duplicateLayer.show({
            content: '올바른 이메일 형식이 아닙니다',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        });
        return;
    }
})
//이메일 검사

registerForm['check_nickname'].addEventListener('click', e => {
    if (registerForm['nickname'].value === '') {
        dialogCover.show();
        duplicateLayer.show({
            content: '닉네임을 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        });
        return;
    }

    const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/;
    if(!nicknameRegex.test(registerForm['nickname'].value)){
        dialogCover.show();
        duplicateLayer.show({
            content: '올바른 닉네임을 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        });
        return;
    }
})
// 닉네임 검사

registerForm['contactSend'].addEventListener('click', e => {
    dialogCover.show();
    if (registerForm['contact'].value === '') {
        duplicateLayer.show({
            title: '성공',
            content: '전화번호를 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
    }
})
//전화번호 검사

registerForm.onsubmit = e => {
    e.preventDefault(); //폼 새로고침 방지
    if (registerForm['password'].value === '') {
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '비밀번호를 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //비밀번호 체크

    if (registerForm['passwordCheck'].value === '') {
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '비밀번호를 한번 더 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //비밀번호 한번더 체크

    if (registerForm['password'].value !== registerForm['passwordCheck'].value) {
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '비밀번호가 일치하지 않습니다',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //비밀번호 일치하는지 체크

    if (registerForm['name'].value === '') {
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '이름을 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //이름 체크 및 유효성

    if(registerForm['birth'].value === ''){
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '생일을 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //생일 체크

    if(registerForm['gender'].value === ''){
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '성별을 선택해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //성별 체크

    if(registerForm['addressSecondary'].value === ''){
        dialogCover.show();
        duplicateLayer.show({
            title: '성공',
            content: '상세주소를 입력해주세요',
            onConfirm: e => {
                e.preventDefault();
                dialogCover.hide();
                duplicateLayer.hide();
            }
        })
        return;
    }
    //상세주소 미입력시
}




