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
