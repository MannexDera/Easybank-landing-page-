 // Get the header element
 const header = document.querySelector('.header');

 // Get the mobile nav buttons
 const openButton = document.querySelector('.nav-icon[aria-label="open-button"]');
 const closeButton = document.querySelector('.nav-icon[aria-label="close-button"]');

 // Add an event listener to the mobile nav open button
 openButton.addEventListener('click', () => {
   header.classList.add('open-nav');
 });

 // Add an event listener to the mobile nav close button
 closeButton.addEventListener('click', () => {
   header.classList.remove('open-nav');
 });
 