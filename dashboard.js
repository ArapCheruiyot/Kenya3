// Get Firebase Auth instance
const auth = firebase.auth();

// Wait for the auth state to be ready
auth.onAuthStateChanged((user) => {
  if (user) {
    // Show the user's display name
    document.getElementById('user-name').textContent = user.displayName;
  } else {
    // Not signed in, redirect to login page
    window.location.href = "auth.html";
  }
});

// Handle fundraiser form (you can later send this to Firestore)
document.getElementById('fundraiser-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Fundraiser details saved (just a placeholder for now!)");
});
