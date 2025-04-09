// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Project expansion functionality
document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const projectExpanded = document.getElementById(projectId);
        
        // Close any open projects first
        document.querySelectorAll('.project-expanded').forEach(expanded => {
            if (expanded.id !== projectId) {
                expanded.classList.remove('active');
                expanded.previousElementSibling.querySelector('.show-more-btn').textContent = 'Show Full Project Details';
            }
        });
        
        // Toggle current project
        projectExpanded.classList.toggle('active');
        this.textContent = projectExpanded.classList.contains('active') ? 'Hide Details' : 'Show Full Project Details';
        
        // Scroll to project if opening
        if (projectExpanded.classList.contains('active')) {
            projectExpanded.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});

// Show less buttons
document.querySelectorAll('.show-less-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectExpanded = this.closest('.project-expanded');
        projectExpanded.classList.remove('active');
        document.querySelector(`[data-project="${projectExpanded.id}"]`).textContent = 'Show Full Project Details';
    });
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(card);
});
