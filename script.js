function checkPassword() {
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  const correctPassword = 'QUESTION'; // ここに正しいパスワードを設定します

  if (password === correctPassword) {
    message.textContent = 'Password is correct!';
    message.style.color = 'green';
    // 次の動作をここに追加します（例えば、ページ遷移など）
  } else {
    message.textContent = 'Password is incorrect.';
    message.style.color = 'red';
  }
}
