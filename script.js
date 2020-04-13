function validation() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    if (name.length < 5) {
        text = "Please, enter a valid name of more than 5 characters.";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please, enter a valid email.";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length <= 50) {
        text = "Please, enter more than 50 characters.";
        error_message.innerHTML = text;
        return false;
    }

    alert("Your contact submission is successful!")
    return true;
}