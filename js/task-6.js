function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');
  const input = document.querySelector('#controls input');
  
  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // очищаємо інпут
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });
  
  destroyButton.addEventListener('click', destroyBoxes);
  
  function createBoxes(amount) {
    const elements = [];
    let size = 30; // початковий розмір 30px
  
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div);
      size += 10; // збільшуємо розмір на 10px для наступного елемента
    }
  
    boxesContainer.append(...elements);
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = ''; // очищаємо вміст контейнера
  }
  