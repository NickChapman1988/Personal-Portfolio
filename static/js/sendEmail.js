/*window.onload = function() {
    
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.send("port_contact_gmail","port_contact_form_gmail",{
            from_name: contactForm.user_name.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value,
            reply_to: contactForm.user_email.value,
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        return false;
    });
} */

function sendMail(contactForm) {
           
    emailjs.send("port_contact_gmail","port_contact_form_gmail",{
        from_name: contactForm.user_name.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value,
        reply_to: contactForm.user_email.value,
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    return false;
} 
