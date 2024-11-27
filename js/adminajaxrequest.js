// AJAX Call for Admin Login Verification
function checkAdminLogin() {
  // Get input values and trim whitespace
  const adminLogEmail = $("#adminLogEmail").val().trim();
  const adminLogPass = $("#adminLogPass").val().trim();

  // Client-side validation
  if (!adminLogEmail || !adminLogPass) {
    $("#statusAdminLogMsg").html(
      '<small class="alert alert-warning"> Please fill in both email and password fields. </small>'
    );
    return; // Stop execution if inputs are empty
  }

  // AJAX request to verify login
  $.ajax({
    url: "admin/admin.php", // Backend endpoint
    type: "POST",
    data: {
      checkLogemail: "checklogmail", // Action identifier
      adminLogEmail: adminLogEmail,
      adminLogPass: adminLogPass,
    },
    success: function (response) {
      console.log("Server Response:", response); // Log response for debugging

      if (response == 0) {
        // Invalid credentials
        $("#statusAdminLogMsg").html(
          '<small class="alert alert-danger"> Invalid Email or Password! Please try again. </small>'
        );
      } else if (response == 1) {
        // Successful login
        $("#statusAdminLogMsg").html(
          '<small class="alert alert-success"> Login successful! Redirecting... </small>'
        );
        clearAdminLoginField(); // Clear the form fields
        setTimeout(() => {
          window.location.href = "admin/adminDashboard.php"; // Redirect to dashboard
        }, 1000);
      } else {
        // Unexpected response from the server
        $("#statusAdminLogMsg").html(
          '<small class="alert alert-danger"> An unexpected error occurred. Please try again later. </small>'
        );
      }
    },
    error: function (xhr, status, error) {
      // Handle AJAX request errors
      console.error("AJAX Error:", status, error);
      $("#statusAdminLogMsg").html(
        '<small class="alert alert-danger"> Unable to process the request. Please check your connection or try again later. </small>'
      );
    },
  });
}

// Function to Clear Input Fields
function clearAdminLoginField() {
  $("#adminLoginForm").trigger("reset"); // Reset the form
}

// Function to Clear Feedback Messages and Input Fields
function clearAdminLoginWithStatus() {
  $("#statusAdminLogMsg").html(""); // Clear status message
  clearAdminLoginField(); // Reset form inputs
}