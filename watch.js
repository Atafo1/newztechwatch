 // Get all three buttons
const buttons = document.querySelectorAll('.butt1, .butt2, .butt3');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked one
    button.classList.add('active');
  });
});