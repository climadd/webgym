//script responsible for continuity after filing a contact form

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Previeni il comportamento di submit predefinito

    // get data from form
    var formData = new FormData(this);

    // ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../backend/contact.php', true);
    xhr.setRequestHeader('Accept', 'application/json');

    // once the request is completed
    xhr.onload = function () {
        if (xhr.status === 200) {
            // get a JSON response from server
            var response = JSON.parse(xhr.responseText);

            // success message
            var resultDiv = document.getElementById('formResult');
            if (response.success) {
                resultDiv.innerHTML = '<p>' + response.message + '</p>';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.innerHTML = '<p>Si è verificato un errore. Riprova!</p>';
                resultDiv.style.color = 'red';
            }
        } else {
            // fail branch
            var resultDiv = document.getElementById('formResult');
            resultDiv.innerHTML = '<p>Errore nella comunicazione con il server!</p>';
            resultDiv.style.color = 'red';
        }
    };

    xhr.send(formData);
});
