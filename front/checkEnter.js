function validateLogin(form) {
    var elems = form.elements;
    let ok = true;
    if (!elems.username.value) {
        ok = false;
        console.log("here");
    }
    if (!elems.password.value) {
        ok = false;
    }
    e.preventDefault();
}

function validateReg(form) {
    var elems = form.elements;
    let ok = true;
    if (!elems.username.value) {
        ok = false;
        console.log("here");
    }
    if (!elems.password.value) {
        ok = false;
    }
    if (!elems.email.value) {
        ok = false;
    }
    if (elems.password.value != elems.password2.value) {
        ok = false;
    }
    alert(123);
    e.preventDefault();
}

$(document).ready(function () {
    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#login-submit').click(function (e) {
        alert(2); 
        e.preventDefault();
    });
});