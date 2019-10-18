
function validate(form) {
    var valid = true;
    var elems = form.elements;
    var radios = document.getElementsByName("age");
    var formValid = false;
    var check = document.getElementsByName("choise")

    if (elems.name.value == "") {
        alert("Введите имя!");
        valid = false;
    } else if (!validateName(elems.name.value)) {
        alert("Неверный формат ввода имени! Введите только буквы.");
        valid = false;
    }

    if (elems.email.value == "") {
        alert("Введите e-mail!");
        valid = false;
    } else if (!validateEmail(elems.email.value)) {
        alert("Неверный формат ввода e-mail!");
        valid = false;
    }

    if (elems.rad[0].checked == false && elems.rad[1].checked == false) {
        alert("Выберите пол!");
        valid = false;
    }
    /* var i = 0;
     while (!formValid && i < radios.length) {
         if (radios[i].checked) formValid = true;
         i++;
     }
     if (!formValid) {
         alert("Выберите возраст!");
         valid = false;
     }*/
    if (!elems.age.value) {
        alert("Выберите возраст!");
        valid = false;
    }
    var j = 0;
    while (!formValid && j < check.length) {
        if (check[j].checked) formValid = true;
        j++;
    }
    if (!formValid) {
        alert("Выберите жанр(ы)!");
        valid = false;
    }
    return valid;
}
/*
function validate2(form) {
    var valid = true;
    var elems = form.elements;
    var radios = document.getElementsByName("age");
    var formValid = false;
    var check = document.getElementsByName("choise")

    if (elems.name.value == "") {
        alert("Введите имя!");
        valid = false;
    } else if (!validateName(elems.name.value)) {
        alert("Неверный формат ввода имени! Введите только буквы.");
        valid = false;
    }

    if (elems.email.value == "") {
        alert("Введите e-mail!");
        valid = false;
    } else if (!validateEmail(elems.email.value)) {
        alert("Неверный формат ввода e-mail!");
        valid = false;
    }

    if (elems.rad[0].checked == false && elems.rad[1].checked == false) {
        alert("Выберите пол!");
        valid = false;
    }
    /* var i = 0;
     while (!formValid && i < radios.length) {
         if (radios[i].checked) formValid = true;
         i++;
     }
     if (!formValid) {
         alert("Выберите возраст!");
         valid = false;
     }--------------------------------------------------------------------------
    if (!elems.age.value) {
        alert("Выберите возраст!");
        valid = false;
    }
    var j = 0;
    while (!formValid && j < check.length) {
        if (check[j].checked) formValid = true;
        j++;
    }
    if (!formValid) {
        alert("Выберите жанр(ы)!");
        valid = false;
    }
    return valid;
}
*/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
    var re = /^[а-яА-ЯёЁa-zA-Z. ]+$/;
    return re.test(name);
}


function onclearbutton() {
    opros.name.value = '';
    opros.choise.value = '';
    opros.email.value = '';
    opros.comment.value = '';
}
