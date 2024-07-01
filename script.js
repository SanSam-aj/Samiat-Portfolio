document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const projects = [
        { title: 'Quote generator', category: 'quote generator', image: 'https://firebasestorage.googleapis.com/v0/b/jsporjects100.appspot.com/o/hFQ4qcvDcRYuZSWYofFE8SsflQw2-medium_random_quote_generator_0b281d6fad.jpg-1659bb9a-c1dc-4014-9d2f-fe4fc91b437a?alt=media&token=de7cbeb3-7f6a-48b8-8233-60d71356045d', description: 'In this project, we will create a sleek random quote generator using JS. With a glass morphism design, the websie will display a title and a quote with the author name. ', url: 'https://www.100jsprojects.com/project/random-quote-generator' },
        { title: 'Recipe App', category: 'recipe app', image: 'https://firebasestorage.googleapis.com/v0/b/jsporjects100.appspot.com/o/hFQ4qcvDcRYuZSWYofFE8SsflQw2-recipe%20book%20app.JPG-7015d6d9-3256-49c6-8821-1f85e2d1fa6f?alt=media&token=69c7eb38-fea2-44f2-b929-9bff2f3db886' , description: 'In this project, we are developing a recipe book application that features a variety of recipes obtained through a free recipe API. We need an API key to access this API.', url: 'https://www.100jsprojects.com/project/recipe-book-app' },
         { title: 'Social Media Selector', category: 'social media', image: 'https://firebasestorage.googleapis.com/v0/b/jsporjects100.appspot.com/o/hFQ4qcvDcRYuZSWYofFE8SsflQw2-medium_social_media_selector_menu_9ca7ea8871.jpg-d30e4014-aae9-420f-9fe0-9633e04fb7c5?alt=media&token=daabc0d5-722a-42cb-a5f0-d3b739996ed2' , description: 'We will create a social media menu selector that displays social media text and icons. As we clock on the menu, we will see a list of social media, and each will have a hovering effect. When we click on an icon, such as Facebook or Youtube, the social media will change accordingly.', url: 'https://www.100jsprojects.com/project/social-media-selector-menu' },
           { title: 'Project Statistics Project', category: 'project statistics', image: 'https://firebasestorage.googleapis.com/v0/b/jsporjects100.appspot.com/o/hFQ4qcvDcRYuZSWYofFE8SsflQw2-medium_profile_statistics_8826d268f2.jpg-b31be1a1-63f3-4fa3-ae72-d5aa9f89b69d?alt=media&token=5030ad8d-3241-463d-8e8a-254aaeb43690' , description: 'This project involves ceating an interactive profile statistics display showcasing work experience, websites made, and apps made. The design centers around three icons from the Font Awesome library, a briefcase for work experience, a cloud for websites made, and an apple for apps made.', url: 'https://www.100jsprojects.com/project/profile-statistics' },
    ]

    function displayProjects(projects) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const projectItem = document.createElement('a');
            projectItem.setAttribute('href' , project.url);
            projectItem.setAttribute('target' , '_blank');
            projectItem.classList.add('project');
            projectItem.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectItem);
        });
    }
 displayProjects(projects);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
            displayProjects(filteredProjects);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        
        alert('Form submitted successfully!');
        form.reset(); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentDateSpan = document.getElementById('current-date');
    const currentTimeSpan = document.getElementById('current-time');

    
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentTime = currentDate.toLocaleTimeString();


    currentDateSpan.textContent = currentDate.toLocaleDateString(undefined, options);
    currentTimeSpan.textContent = currentTime;
});
