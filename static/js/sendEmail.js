function sendMail(contactForm) {
           
    emailjs.send("port_contact_gmail","port_contact_form_gmail",{
        from_name: contactForm.user_name.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value,
        reply_to: contactForm.user_email.value,
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            document.getElementById("message-success").innerHTML = `<p class="message-success">Thanks for your message!</p>`

            // Clear message-success after 5 seconds //
            setTimeout(()=>{
                document.getElementById("message-success").innerHTML = "";
            }, 5000);

            // Blank form fields after submit //
            document.getElementById("user_name").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        }, function(error) {
            console.log('FAILED...', error);
        });
    return false;
} 
