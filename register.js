function register() {
    var username = document.getElementById(username);
    var email = document.getElementById(email)
    var password = document.getElementById(password);
    var confirmPassword = document.getElementById(confirmPassword);

    // Kiểm tra thông tin đăng ký
    if (password === confirmPassword) {
        document.getElementById('message').innerHTML = 'Đăng ký thành công!';
    } else {
        document.getElementById('message').innerHTML = 'Xác nhận mật khẩu không khớp. Vui lòng kiểm tra lại.';
    }
}
    // Hiển thị thông báo đăng ký thành công 
    const messageElement = document.getElementById(message);
    messageElement.textContent = 'Đăng ký thành công!';
    messageElement.classList.remove(hidden);