document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    var userList = document.getElementById("user");

    form.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const yearInput = document.getElementById("year");
        const emailInput = document.getElementById("email");
        const numberInput = document.getElementById("number");
        const checkboxInput = document.getElementById("checkbox");

        if (
            nameInput.value.trim() === "" ||
            yearInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            numberInput.value.trim() === ""
        ) {
            alert('Please fill in all fields of the form.');
            event.preventDefault();

        } else if (!checkboxInput.checked) {
            alert("You must agree to terms and conditions and the privacy policy.");
            event.preventDefault();

        } else if (yearInput.value > 2024) {
            alert("Invalid year of birthday. It must be less or equal to 2023.");
            event.preventDefault();

        } else if (numberInput.value >= 9999999999999) {
            alert("Invalid number. It must have 13 or less symbols.");
            event.preventDefault();
        } else {
            alert('You have successfully registered!');
            const li5 = document.createElement('li');
            li5.appendChild(document.createTextNode(`Your info:`));

            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`Name: ${nameInput.value}.`));

            const li2 = document.createElement('li');
            li2.appendChild(document.createTextNode(`Year of birth: ${yearInput.value}.`));

            const li3 = document.createElement('li');
            li3.appendChild(document.createTextNode(`Email: ${emailInput.value}.`));

            const li4 = document.createElement('li');
            li4.appendChild(document.createTextNode(`Phone number: ${numberInput.value}.`));

            userList.appendChild(li5);
            userList.appendChild(li);
            userList.appendChild(li2);
            userList.appendChild(li3);
            userList.appendChild(li4);

            nameInput.value = "";
            yearInput.value = "";
            emailInput.value = "";
            numberInput.value = "";
            checkboxInput.checked = false;

     


            event.preventDefault();

            userList.classList.add('users');
        };

    });

});