document.getElementById("Qasja").addEventListener("click", function() {
    var enteredPassword = document.getElementById("password").value;
  
    // Check if the entered password is correct
    if (enteredPassword === "yourPassword") {
      console.log("Login successful!");
      // Redirect to another page or perform other actions as needed
    } else {
      console.log("Incorrect password. Please try again.");
    }
  });