function on_submit(){
    document.getElementById('contactSubmit').disabled = true;
}

document.getElementById('contactForm').addEventListener('submit', on_submit);