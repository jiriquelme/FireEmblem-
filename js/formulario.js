

const form = document.getElementById('form')
const status = document.getElementById('status')

form.addEventListener('submit', (e) => {
    let messages = []
    var email = document.getElementById('email').value
    if (email === '') {
        document.querySelector('status').innerHTML = "Email cannot be empty"
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(email)){
            document.querySelector('status').innerHTML = "Email format invalid"
            return false;
        }
    }
    var name = document.getElementById('name').value
    if (name.value === '' || name.value == null) {
        document.querySelector('status').innerHTML = "Name cannot be empty"
        return false
    }
    var phone = document.getElementById('phone').value;
    if (phone.value === '') {
        document.querySelector('status').innerHTML = "Phone cannot be empty"
    }
    var message =  document.getElementById('message').value
    if (message.value === '') {
        document.querySelector('status').innerHTML = "Message cannot be empty"
        return false;
    }
    document.querySelector('status').innerHTML = "Sending..."
    if (messages.length > 0) {
        e.preventDefault()
    }
})