document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
        });
    });
});
