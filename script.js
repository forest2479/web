document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '2233070' && password === 'Thai2233070') {
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang mong muốn
        window.location.href = 'home.html';
    } else {
        alert('Tên người dùng hoặc mật khẩu không hợp lệ.');
    }
});
