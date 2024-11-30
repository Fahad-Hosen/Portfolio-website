// nav 

// Toggle menu for mobile view
const menuIcon = document.querySelector('.menu');
const navLinks = document.querySelector('nav ul');

// Toggle the display of navigation links on menu click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (for mobile)
const navLinksItems = document.querySelectorAll('nav ul li a');
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// nav

// Hero section 
// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // Hamburger menu toggle for mobile view
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('nav a');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });

    // Form validation for contact section
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');

            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert('Please fill out all fields');
                return;
            }

            if (!validateEmail(email.value)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return;
            }

            // Optionally, send the form data via AJAX if needed (e.g., using fetch)
            alert('Message sent successfully!');
        });
    }

    // // Email validation function
    // function validateEmail(email) {
    //     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     return regex.test(email);
    // }
});

// Hero section 

// service 
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
  
    // Add hover effect on service cards to animate and show tooltips
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
      });
    });
  });  
// service 



// about 

// Smooth Scroll Effect for Navigation to 'About Me' Section
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelector('a[href="#about"]'); // Assuming you have a link to this section
  
    // Add smooth scroll event
    if (aboutLink) {
      aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  
    // Fade In Animation for About Section
    const aboutSection = document.querySelector('#about');
  
    const fadeInSection = () => {
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Check if the section is in the viewport
      if (sectionPosition < windowHeight - 100) {
        aboutSection.classList.add('fade-in'); // Assuming a fade-in CSS class for animation
      }
    };
  
    // Check on page load and when scrolling
    fadeInSection();
    window.addEventListener('scroll', fadeInSection);
  
    // Add CSS for the fade-in effect dynamically if needed
    const style = document.createElement('style');
    style.innerHTML = `
      .fade-in {
        opacity: 1;
        transition: opacity 1s ease-in;
      }
  
      #about {
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
  });
  
// about 


// education 

document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scroll behavior for education section navigation
    const educationLink = document.querySelector('a[href="#education"]'); // Assuming you have a link to this section
  
    // Smooth scroll on click
    if (educationLink) {
      educationLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#education').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  
    // Fade-in animation when timeline items come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    const fadeInTimeline = () => {
      const windowHeight = window.innerHeight;
      
      timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        // Check if the timeline item is in the viewport
        if (itemPosition < windowHeight - 100) {
          item.classList.add('fade-in'); // Assuming this class will handle the animation
        }
      });
    };
  
    // Trigger fade-in on load and scroll
    fadeInTimeline();
    window.addEventListener('scroll', fadeInTimeline);
  
    // Add CSS dynamically if needed for fade-in effect
    const style = document.createElement('style');
    style.innerHTML = `
      .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s ease, transform 1s ease;
      }
  
      .timeline-item {
        opacity: 0;
        transform: translateY(30px); /* Start with a little translation */
      }
    `;
    document.head.appendChild(style);
  });
  
// education 


// project's
document.addEventListener("DOMContentLoaded", () => {
    // Grab all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Hover effect for project cards
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
      });
  
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
      });
    });
  
    // Track live demo clicks
    const liveDemoLinks = document.querySelectorAll('.live-demo');
    liveDemoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        console.log(`Live Demo clicked: ${link.href}`);
        // Here you can add any analytics or logging
      });
    });
  
    // Track source code clicks
    const sourceCodeLinks = document.querySelectorAll('.source-code');
    sourceCodeLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        console.log(`Source Code clicked: ${link.href}`);
        // Add analytics or logging here
      });
    });
  
    // Optional: Smooth scroll for anchors within the project section (if needed)
    const projectSection = document.getElementById('projects');
    const anchorLinks = projectSection.querySelectorAll('a');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
// project's


document.addEventListener("DOMContentLoaded", () => {
    // Handle email link click - opens Gmail
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
      emailLink.addEventListener('click', (e) => {
        console.log(`Opening Gmail to send email to: ${emailLink.href}`);
        // Optionally, log the click or track analytics here
      });
    }
  
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    const formFields = contactForm.querySelectorAll('input, textarea');
    const submitButton = contactForm.querySelector('button[type="submit"]');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from refreshing the page
  
      // Validate form fields (you can add more validation if necessary)
      let isValid = true;
      formFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error'); // Optional: add class to highlight invalid fields
        } else {
          field.classList.remove('error');
        }
      });
  
      if (isValid) {
        // Handle successful form submission (e.g., show success message)
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset(); // Clear the form fields after submission
  
        // Here, you could send the form data to an email or server if desired
        console.log('Form submitted:', {
          name: contactForm.querySelector('input[type="text"]').value,
          email: contactForm.querySelector('input[type="email"]').value,
          message: contactForm.querySelector('textarea').value,
        });
  
        // Optionally send an AJAX request to handle email sending or integration
      } else {
        alert("Please fill in all required fields.");
      }
    });
  
    // Optional: Add form field validation visual feedback
    formFields.forEach(field => {
      field.addEventListener('input', () => {
        if (field.value.trim()) {
          field.classList.remove('error');
        }
      });
    });
  });
  