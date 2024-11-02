const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки
  
  // Перевіряємо, чи заповнені всі поля
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    // Збираємо значення полів в об'єкт
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    form.reset(); // Очищаємо форму
  }
});

