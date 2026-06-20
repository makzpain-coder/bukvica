<script>
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitBtn = this.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;

    // Показываем индикатор загрузки
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Показываем результат
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = data;
        resultDiv.style.marginTop = '15px';
        this.insertAdjacentElement('afterend', resultDiv);

        // Сбрасываем форму и кнопку
        this.reset();
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            resultDiv.remove();
        }, 5000);
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка. Попробуйте ещё раз.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
});
</script>
