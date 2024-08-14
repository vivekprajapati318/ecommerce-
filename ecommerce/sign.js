


   // Get the modal
   var modal = document.getElementById("myModal");
 
   // Show the modal when the page loads
   window.onload = function() {
     modal.style.display = "block";
   }
 
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
 
   // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
     modal.style.display = "none";
   }
   document.getElementById('signInForm').onsubmit = function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Your validation and authentication logic here
  // For example, you can check if the email and password are correct
  
  if (email !== 'example@example.com' && password.length >6 ) {
    confirm('Sign in successful!');
    modal.style.display = "none";
  } 
  else {
    document.getElementById('errorMessage').innerHTML = "Invalid email or password. Please try again.";
  }
}


 
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
