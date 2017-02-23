function validate(form)
{  
    var elems = form.elements;
    if(!elems.username.value)
    {
        alert("user");        
    }
    if(!elems.password.value) 
    {
        alert("password");
    }
    if(!elems.email.value)
    {
        alert("email");        
    }
    if(elems.password.value != elems.password2.value)
    {
        alert("wrong");                
    }
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
    });