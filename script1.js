function ok(form) {
    console.log(form.elements.name.value);
    console.log(form.elements.altname.value);
    // console.log(form.select.value);

    let user = {
        name: form.elements.name.value,
        surname: form.elements.altname.value,
        
    }
    console.log(document.getElementById('res-text'));
    let myArea = document.getElementById('res-text');
    myArea.value = JSON.stringify(user);
}


