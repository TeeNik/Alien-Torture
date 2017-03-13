(function () {
    class Login {
        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this._updateHtml()
        }

        _getLogFields() {
            let {logfields = []} = this.data;

            return logfields.map(field => {
                return `
			<div class = "form-group" > 
				<input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}"> 
			</div>
			`
            }).join(' ');
        }

        _getRegFields() {
            let {regfields = []} = this.data;

            return regfields.map(field => {
                return `
			<div class = "form-group" > 
				<input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}"> 
			</div>
			`
            }).join(' ');
        }

        _updateHtml() {
            this.el.innerHTML = `
				<div class="mainmenu">
		<h1>Game Title</h1> </div>
	<div class="mainmenu">
		<a class="hiddenanchor" id="toregister"></a>
		<a class="hiddenanchor" id="tologin"></a>
		<div id="wrapper">
			<div id="login" class="animate form">
				<form action="" autocomplete="on">
					<h4><a href="#tologin" class="to_register" >Log In </a><a href="#toregister" class="to_register" style="text-align: right">Sign Up</a></h4>
					<p>
						<input id="username" name="username" required="required" type="text" placeholder="Username" /> </p>
					<p>
						<input id="password" name="password" required="required" type="password" placeholder="Password" /> </p>
					<p class="keeplogin">
						<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
						<label for="loginkeeping">Keep me logged in</label>
					</p>
					<p class="login button">
						<input type="submit" value="Login" /> </p>
				</form>
			</div>
			<div id="register" class="animate form">
				<form action="" autocomplete="on">
					<h4><a href="#tologin" class="to_register">Log In </a><a href="#toregister" class="to_register" style="text-align: right">Sign Up</a></h4>
					<p>
						<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="Username" /> </p>
					<p>
						<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="Email" /> </p>
					<p>
						<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="Password" /> </p>
					<p>
						<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="Repeat password" /> </p>
					<p class="signin button">
						<input type="submit" value="Sign up" /> </p>
				</form>
			</div>
		</div>
	</div>
	<div class="mainmenu" style="padding-top: 0px">
		<p class="title" onclick="showInd();">Back</p>
	</div>
			`;
        }

        on(type, callback) {
            this.el.addEventListener(type, callback);
        }
    }
    window.Login = Login;
})();