var lg = true;

$(document).ready(function () {	
    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        lg = true;
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        lg = false;
    });

    $(function () {
        $("#login-form").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            focusCleanup: true,
            focusInvalid: false,
        });
    });
    $(function () {
        $("#register-form").validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password1: {
                    required: true,
                    minlength: 6
                },
                password2: {
                    required: true,
                    equalTo: "#password1"
                }
            },
            focusCleanup: true,
            focusInvalid: false,
        });
    });
   /* $("#login-submit").click(function (e) {
        if ($("#login-form").valid()) {
            e.preventDefault();
            //console.log($("input[name=username]").val());
            //console.log($("input[name=password]").val());
            const SiteService = window.SiteService;
            const siteService = new SiteService();
            siteService.login($("input[name=username]").val(), $("input[name=password]").val());
            showInd();
        }
    });
    $("#register-submit").click(function (e) {
        if ($("#register-form").valid())
            e.preventDefault();
        console.log('on click');
        const SiteService = window.SiteService;
        const siteService = new SiteService();
        console.log($("input[name=username_reg]").val());
        console.log($("input[name=password1]").val());
        siteService.register($("input[name=username_reg]").val(), $("input[name=email]").val(), $("input[name=password1]").val());
        const siteService = new siteService();
         siteService.register($("#register-form").login, $("#register-form").email, $("#register-form").password);

        showInd();
    });*/
});