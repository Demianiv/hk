let popupBg = document.querySelector('.popup__bg'); // фон
let popup = document.querySelector('.popup'); // вікнл
let openPopupButtons = document.querySelectorAll('.open-popup'); // для відкриття
let closePopupButton = document.querySelector('.close-popup'); // для закриття

openPopupButtons.forEach((button) => { // Перебор кнопок
    button.addEventListener('click', (e) => { // активуємо на клік
        e.preventDefault(); // активна тількі вкладка
        popupBg.classList.add('active');   
        popup.classList.add('active');  
    })
});

closePopupButton.addEventListener('click',() => { // хрестик
    popupBg.classList.remove('active');  
    popup.classList.remove('active');  
});

document.addEventListener('click', (e) => { // робим все активним, коли закрили вкладку
    if(e.target === popupBg) {  
        popupBg.classList.remove('active');  
        popup.classList.remove('active');  
    }
});