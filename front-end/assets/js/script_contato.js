const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question'); 

    
    const clickableElements = [toggle, question].filter(el => el); 

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            
            
            answer.classList.toggle('open');
            
            
            if (answer.classList.contains('open')) {
                
                answer.style.maxHeight = (answer.scrollHeight + 40) + "px"; 
               
                if (toggle) toggle.textContent = '–';
            } else {
                
                answer.style.maxHeight = "0";
                
                if (toggle) toggle.textContent = '+';
            }
        });
    });
});



/*████████▀▀░░░░░░░░░░░░░░░░░░░▀▀███████
██████▀░░░░░░░░░░░░░░░░░░░░░░░░░▀██████
█████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█████
████░░░░░▄▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░████
████░░▄██████████░░░░░░██▀░░░▀██▄░░████
████░░███████████░░░░░░█▄░░▀░░▄██░░████
█████░░▀▀███████░░░██░░░██▄▄▄█▀▀░░█████
██████░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░██████
█████░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░█████
█████░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░█████
██████░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░██▀▀▀▀
▀░░░▀██▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄█▀░░░▄▄
▄▄▄░░░▀▀██▄▄▄▄░░░░░░░░░░░░▄▄▄███░░░▄██▄
██████▄▄░░▀█████▀█████▀██████▀▀░░▄█████
██████████▄░░▀▀█▄░░░░░▄██▀▀▀░▄▄▄███▀▄██
*/