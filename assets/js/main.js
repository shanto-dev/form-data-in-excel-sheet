(function ($) {
    'use strict';


    // Google Sheet data submit
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxMXmG0-lzQOSkrA0GrqvM59kU_W2S-zXg-fbw2RcvHbROxkTVrXmFGqA6pg4omg9SO/exec'

    const form = document.forms['contact-form']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => alert("Thank you! your form is submitted successfully."))
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.error('Error!', error.message))
    })

})(jQuery);