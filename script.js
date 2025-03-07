document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.nav-button.prev');
  const nextButton = document.querySelector('.nav-button.next');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  });

  // Initialize the first testimonial as active
  showTestimonial(currentIndex);

  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

   document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
    });
  });
       button.classList.add('active');
      tabPanels[index].classList.add('active');
    });
  });
});