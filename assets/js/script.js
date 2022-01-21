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
// function input(nama, email, jam, tujuan, jumlah){
// 		let table=document.querySelector(".table");
// 		let row=table.insertRow(1)
// 		let cell1=row.insertCell(0)
// 		let cell2=row.insertCell(1)
// 		let cell3=row.insertCell(2)
// 		let cell4=row.insertCell(3)
// 		let cell5=row.insertCell(4)
// 		cell1.innerHTML=nama
// 		cell2.innerHTML=email
// 		cell3.innerHTML=jam
// 		cell4.innerHTML=tujuan
// 		cell5.innerHTML=jumlah
// 	}
