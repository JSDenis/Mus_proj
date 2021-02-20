const writeAccountData = () => {
    const userName = document.querySelector('#name1');
    const userPassword = document.querySelector('#pw');

    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('user-password', userPassword.value);
};

const checkLogIn = () => {
    const nameStore = localStorage.getItem('user-name');
    const passwordStore = localStorage.getItem('user-password');

    const userName = document.querySelector('#userName');
    const userPassword = document.querySelector('#userPw');

    if (nameStore === userName.value && passwordStore === userPassword.value) {
        alert('Ok');
    } else {
        alert('Not Ok');
    }
}

export { writeAccountData, checkLogIn };