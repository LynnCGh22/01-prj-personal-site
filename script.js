document.addEventListener('DOMContentLoaded', function() {
    const projectSelect = document.getElementById('project-select');
    const projectDetails = document.getElementById('project-details');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectLink = document.getElementById('project-link');

    if (!projectSelect || !projectDetails || !projectTitle || !projectDescription || !projectLink) {
        return;
    }

    const projectInfo = {
        'aqua-rise': {
            title: 'AquaRise - Water Drop Rush',
            description:
                "AquaRise is a fast-paced browser game inspired by Charity: Water's mission to promote global access to clean water. Players collect clean water droplets while avoiding polluted droplets. It is built with HTML, CSS, and JavaScript and includes accessibility features, smooth animations, and intuitive controls.",
            link: 'https://lynncgh22.github.io/05-cw-game-water-drop-update/'
        },
        'Intel-Sustainability-Project': {
            title: 'Intel Sustainability Project',
            description:
                "A website built for Intel's sustainability initiative, demonstrating their efforts in reducing carbon emissions and promoting eco-friendly practices. The site features a responsive design with interactive elements such as a microchip-themed timeline showcasing Intel's sustainability milestones, and a dynamic infographic illustrating their strategies in reducing carbon footprint. It is built with HTML, CSS, and JavaScript, and incorporates accessibility features along with front-end development and creative technical execution to effectively communicate Intel's commitment to sustainability.",
            link: 'https://lynncgh22.github.io/05-Intel-Summit-Check-In/'
        },
        'NASA-Space-Image-Gallery': {
            title: 'NASA Space Image Gallery',
            description: 
              "A website built as an interactive NASA Space Explorer web application that pulls real astronomy images, videos, descriptions, and other metadata directly from NASA's APOD APIs. The site features dynamic content loading, allowing users to explore a past collection of space related media. It features date-based image retrieval, a responsive UI design, and accessibility features such as light and dark modes for accessibility. It is built with HTML, CSS, and JavaScript, and incorporates front-end development and creative technical execution to provide an engaging user experience while showcasing NASA's space imagery.",
            link: 'https://lynncgh22.github.io/07-nasa-space-explorer/?v=timestamp'
        },
        'Smart-Routine-&-Product-Advisor': {
          title: "L'oreal Smart Routine & Product Advisor",
          description:
            "A website built based on the L'oreal brand that incorporates L'oreal products and allows users to select products that fall into different categories, such as haiorcare, makeup, and moisturizers and treatments. The site features a checklist and searchbar to filter for specific products, along with options to generate a unique routine for the user and clear selection. In addition, the user can ask follow-up questions related to facial and hair care. The website is built with HTML, CSS, and Javascript, and incorporates front-end development with light and dark modes as well as a translator feature for accessibility.",
          link: 'https://lynncgh22.github.io/09-prj-loreal-routine-builder/'
        }

    };


    projectSelect.addEventListener('change', function() {
        const selectedProject = projectInfo[this.value];

        if (!selectedProject) {
            projectDetails.hidden = true;
            return;
        }

        projectTitle.textContent = selectedProject.title;
        projectDescription.textContent = selectedProject.description;
        projectLink.href = selectedProject.link;
        projectDetails.hidden = false;
    });
});
