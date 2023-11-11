const registerForm = document.getElementById('registerForm');
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


