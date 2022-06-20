function ok_first(form) {
		
	
    let user = {
        name: form.elements.name.value,
        surname: form.elements.surname.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        country: form.elements.country.value,
        data: form.elements.data.value,
    }
    console.log(user);
    let form_clon = document.getElementById('second');
    console.log(form_clon);
    form_clon.elements.name.value = "sdfgsfg";
    console.log(form_clon.elements.name.value);
    form_clon.querySelector("[name='name']").value = user.name;
    form_clon.querySelector("[name='surname']").value = user.surname;
    form_clon.querySelector("[name='email']").value = user.email;
    form_clon.querySelector("[name='phone']").value = user.phone;
    form_clon.querySelector("[name='country']").value = user.country;
    form_clon.querySelector("[name='data']").value = user.data;

}

function ok_second(form) {


let user = {
    name: form.elements.name.value,
    surname: form.elements.surname.value,
    email: form.elements.email.value,
    phone: form.elements.phone.value,
    country: form.elements.country.value,
    data: form.elements.data.value,
}
console.log(user);
let form_clon = document.getElementById('first');	
form_clon.querySelector("[name='name']").value = user.name;
form_clon.querySelector("[name='surname']").value = user.surname;
form_clon.querySelector("[name='email']").value = user.email;
form_clon.querySelector("[name='phone']").value = user.phone;
form_clon.querySelector("[name='country']").value = user.country;
form_clon.querySelector("[name='data']").value = user.data;

}