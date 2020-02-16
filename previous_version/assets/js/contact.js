let contactForm = document.querySelector("contactMe");
let infoDetails = document.getElementById("infoBox");


contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    fetch(contactForm.getAttribute('action'), {
        method: 'POST',
        headers: {
            'Accept': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset="UTF-8'
        },
        body: new URLSearchParams(formData).toString()
    })
    .then(res => {
        if(res) {
            infoDetails.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you.'
        }
    })
})