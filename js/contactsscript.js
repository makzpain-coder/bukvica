 <script>
    emailjs.init('service_s8exece');

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const submitBtn = document.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value || 'Без темы',
        message: document.getElementById('message').value
      };

      emailjs.send('service_s8exece', 'ВАШ_TEMPLATE_ID', formData)
        .then(() => {
          alert('Сообщение успешно отправлено!');
          document.getElementById('feedbackForm').reset();
        })
        .catch((error) => {
          console.error('Ошибка:', error);
          alert('Ошибка отправки. Проверьте консоль.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
    });
  </script>
