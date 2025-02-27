function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*';
    let allChars = '';
    if (includeUppercase) allChars += upperChars;
    if (includeLowercase) allChars += lowerChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecial) allChars += specialChars;

    if (allChars.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('密码已复制到剪贴板！');
}); 