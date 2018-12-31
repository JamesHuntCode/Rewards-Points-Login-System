$(document).ready(function() {

    let validEmail      = false;
    let validPassword   = false;

    $('#invalid').hide();

    // Handle on change events for when the user is typing in their email.
    $('#input-email').bind("change paste keyup", function () {

        let userInput = $(this).val();

        validateInput("EMAIL", userInput);

    });

    // Handle on change events for when the user is typing in their password.
    $('#input-password').bind("change paste keyup", function () {

        let userInput = $(this).val();

        validateInput("PASSWORD", userInput);
    });

    // Method to validate the input into the login text-boxes.
    function validateInput(textboxName, textboxInput) {

        if (textboxInput.length > 0) {

            if (textboxName === "EMAIL") {

                let email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

                if (email.test(textboxInput)) {

                    $('#input-email').css('border-color', 'green');
                    validEmail = true;

                    if (validEmail && validPassword) {

                        $('#invalid').slideUp(500);
                        $('#go-to-logged-in').attr("href", "loggedin.html");

                    } else {

                        $('#go-to-logged-in').attr("href", "#");

                    }

                } else {

                    $('#input-email').css('border-color', 'red');
                    validEmail = false;

                }

            } else {

                var upperCase= new RegExp('[A-Z]');
                var lowerCase= new RegExp('[a-z]');
                var numbers = new RegExp('[0-9]');

                if(textboxInput.match(upperCase) && textboxInput.match(lowerCase) && textboxInput.match(numbers)) {

                    $('#input-password').css('border-color', 'green');
                    validPassword = true;

                    if (validPassword && validEmail) {

                        $('#invalid').slideUp(500);
                        $('#go-to-logged-in').attr("href", "loggedin.html");

                    } else {

                        $('#go-to-logged-in').attr("href", "#");

                    }


                } else {

                    $('#input-password').css('border-color', 'red');
                    validPassword = false;

                }

            }

        } else {

            if (textboxName === "EMAIL") {

                $('#input-email').css('border-color', "#E0E0E0");
                validEmail = false;

            }
            else {

                $('#input-password').css('border-color', "#E0E0E0");
                validPassword = false;

            }

            $('#go-to-logged-ingi').attr("href", "#");

        }

    }

    // Method to handle on click event for the button the user clicks when they wish to login to the system.
    $('#attempt-login').click(function () {

        if (validEmail && validPassword) {

            // User is taken to login...

        } else {

            let errorMessage;

            if (!validEmail) {

                errorMessage = "Oops! It looks like you have entered an invalid email address.";

            } else if (!validPassword){

                errorMessage = "Oops! It looks like you have entered an invalid password. Your password must contain uppercase, lowercase and numerical characters.";

            }

            $('#error-message').text(errorMessage);

            $('#invalid').slideDown(500);

        }

    });

});
