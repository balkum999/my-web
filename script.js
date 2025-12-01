// Function to handle skill bar animation on scroll (for a real-world project)
// For this simple example, we'll animate them on page load.
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    // Set the width of skill bars based on the data-level attribute
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        // A slight delay to ensure the transition is visible
        setTimeout(() => {
            bar.style.width = level;
        }, 300);
    });
});


// Logic for Project Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

const projectDetails = {
    'ecommerce': {
        title: 'E-Commerce Website',
        image: 'project-ecommerce.png',
        description: 'A full-featured e-commerce platform built with modern web technologies including shopping cart, payment gateway integration, user authentication, product catalog, and responsive design for mobile and desktop. Technologies used: HTML, CSS, JavaScript, and various APIs for payment processing.'
    },
    'portfolio-template': {
        title: 'Portfolio Template',
        image: 'project-portfolio.png',
        description: 'Responsive portfolio website template for creative professionals, designed to be easily customized and deployed. Features include dark/light mode toggle, skill bars, and a project gallery.'
    },
    'dashboard-admin': {
        title: 'Dashboard Admin',
        image: 'project-dashboard.png',
        description: 'A clean and modern admin dashboard built with charts and data visualization tools. Focuses on user-friendliness and real-time data monitoring. Tech stack includes React/Vue and Chart.js.'
    }
};

function openModal(projectId) {
    const detail = projectDetails[projectId];
    
    if (detail) {
        // Construct the modal content based on the project ID
        modalBody.innerHTML = `
            <img src="${detail.image}" alt="${detail.title}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: var(--primary-color);">${detail.title}</h2>
            <p>${detail.description}</p>
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Logic to switch between Project/Certificate/Tech Stack view
document.getElementById('tech-stack-btn').addEventListener('click', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    const techStackView = document.querySelector('.tech-stack-view');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons and hide projects
    filterBtns.forEach(btn => btn.classList.remove('active'));
    projectsGrid.style.display = 'none';
    
    // Show tech stack view and set button active
    document.getElementById('tech-stack-btn').classList.add('active');
    techStackView.style.display = 'flex'; 
    techStackView.style.flexWrap = 'wrap'; 
    techStackView.style.justifyContent = 'center';
    techStackView.style.gap = '30px';
});
// (You would need to implement similar logic for 'Project' and 'Certificate' buttons)

