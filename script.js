function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name && email && message) {
        if(!email.includes('@gmail.com')){
            document.getElementById('email-error').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }
        else{
            document.getElementById('email-error').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }
    }
    else {
        document.getElementById('successMessage').style.display = 'none';
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}