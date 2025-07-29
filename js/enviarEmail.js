const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_mrug2c9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
      setTimeout(() => {
        form.reset();
      }, 1000);
    }, (err) => {
      btn.value = 'Email enviado';
      alert(JSON.stringify(err));
      btn.value = "Enviar";
    });
});