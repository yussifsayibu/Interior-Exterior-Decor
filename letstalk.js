
function sendMail (){

    

    // emailjs.send(serviceId,templateId,params)
    // .then(
    //     res => {
    //         document.getElementById('name').value = '';
    //         document.getElementById('email').value = '';
    //         document.getElementById('message').value = '';
    //         console.log(res);
    //         alert('your message sent successfully');

    //     }
    // )
    // .catch((err) => console.log(err));


    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = 'service_8x1vysc';
    const templateId = 'template_gkbm205';
     
    emailjs.send(serviceId, templateId, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}

