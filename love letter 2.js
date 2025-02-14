document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the username and password values
  const password = document.getElementById('password').value;

  // Simple validation (you can replace this with actual authentication logic)
  if (password === 'NaSu') {
      // Show the Love Letter content
      document.querySelector('.envlope-wrapper').style.display = 'block'; // Show the envelope
      document.querySelector('.reset').style.display = 'block';// Show the button
      document.querySelector('.login-container').style.display = 'none'; // Hide the login form
  } else {
      // Show an error message
      document.getElementById('loginMessage').innerText = 'Invalid username or password.';
  }
});

$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});


