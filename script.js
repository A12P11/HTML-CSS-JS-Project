// Handle navigation hover effect
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.textDecoration = 'underline';
    link.style.fontWeight = 'bold';
  });
  link.addEventListener('mouseout', () => {
    link.style.textDecoration = 'none';
    link.style.fontWeight = 'normal';
  });
});

// Handle submitting recommendations
const submitBtn = document.getElementById('submit-recommendation');
const recommendationInput = document.getElementById('recommendation-input');
const recommendationList = document.getElementById('recommendation-list');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

submitBtn.addEventListener('click', () => {
  if (recommendationInput.value.trim()) {
    // Add new recommendation to the list
    const newRecommendation = document.createElement('li');
    newRecommendation.textContent = recommendationInput.value.trim();
    recommendationList.appendChild(newRecommendation);
    
    // Clear the input
    recommendationInput.value = '';

    // Show the confirmation popup
    popup.style.display = 'block';
  }
});

// Close the popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
