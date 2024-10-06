function submitForm(){
    alert("Submitting form") 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementsByName("gender");
    let country = document.getElementById("country").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(date);

    let genderSelected = ""
    gender.forEach(element => {
        console.log(element.checked);
        console.log(element.value);
        if(element.checked == true){
            genderSelected = element.value;
        }
    });

    console.log(country);

    var err = document.getElementById("err");

    if(name.length == 0){
        err.style.display = "block";

        err.innerHTML = "Name must be filled!";
    }

    else if(!email.includes("@") && !email.includes(".com")){
        err.style.display = "block";

        err.innerHTML = "Email must be valid (contains @ and .com!)";
    }

    else if(phone.length == 0){
        err.style.display = "block";

        err.innerHTML = "Phone number must be filled!";
    }
    else if(!date.includes("/")){
        err.style.display = "block";


        err.innerHTML = "Date must be inputted correctly!";
    }

    else if(genderSelected == ""){

        err.style.display = "block";


        err.innerHTML = "Gender must be selected!";
    }


    else if(country == "default"){
        err.style.display = "block";
        err.innerHTML = "country must be selected!";
    }

}