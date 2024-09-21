 // Google Sheet data submit

    //Note: Here you past webApp Deploy Url
    const scriptURL = 'Here you past webApp Deploy Url'

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