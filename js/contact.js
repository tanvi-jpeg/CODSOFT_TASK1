const scriptURL =
    "https://script.google.com/macros/s/AKfycbwdBsSpuLGdH2wpbZtvdIPYjIgm9tl09G4PiL5rjA4ZZ1bp61gB1iXW2_LQ4ECLVhKINw/exec";


const form =
    document.forms["submit-to-google-sheet"];

const submitBtn =
    document.getElementById("submit-btn");

const msg =
    document.getElementById("msg");


if (form && submitBtn) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();


        submitBtn.textContent =
            "Sending...";

        submitBtn.disabled = true;


        fetch(scriptURL, {

            method: "POST",

            body: new FormData(form)

        })


        .then(response => response.json())


        .then(data => {

            submitBtn.textContent =
                "✓ Sent";


            if (msg) {

                msg.textContent =
                    "Message sent successfully!";

            }


            form.reset();


            setTimeout(() => {

                submitBtn.textContent =
                    "Send Message";

                submitBtn.disabled = false;


                if (msg) {

                    msg.textContent = "";

                }

            }, 3000);

        })


        .catch(error => {

            console.error(
                "Error:",
                error
            );


            submitBtn.textContent =
                "Try Again";

            submitBtn.disabled = false;


            if (msg) {

                msg.textContent =
                    "Failed to send message.";

            }

        });

    });

}