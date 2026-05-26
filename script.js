/* Create Drop-Down Menu for Projects Section */
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

/* Create Drop-Down Menu for See Me in Other Events Section */

document.addEventListener('DOMContentLoaded', function() {
    const eventSelect = document.getElementById('event-select');
    const eventDetails = document.getElementById('event-details');
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');
    const eventLink = document.getElementById('event-link');
    const cyberautoCollageContainer = document.getElementById('cyberauto-collage-container');
    const mcdermottVideoContainer = document.getElementById('mcdermott-video-container');
    const capstoneCollageContainer = document.getElementById('capstone-collage-container');

    if (!eventSelect || !eventDetails || !eventTitle || !eventDescription || !eventLink || !cyberautoCollageContainer || !mcdermottVideoContainer || !capstoneCollageContainer) {
        console.error('Event section elements not found');
        return;
    }

    const eventInfo = {
        'cyberauto-2023': {
            title: '2023 CyberAuto Challenge',
            description:
                'I was selected to participate in the 2023 CyberAuto Challenge, a national automotive cybersecurity competition that took place in Warren, Michigan and was hosted at McComb Community College. I competed on the Toyota team, where I collaborated with other students to exploit vulnerabilities in a simulated automotive environment, as well as develop and implement defensive strategies to protect against cyber threats. It was an incredible experience that allowed me to apply my cybersecurity knowledge in a real-world context and collaborate with other passionate individuals in the field.',
            link: 'https://www.cyberauto-challenge.org/',
            mediaType: 'cyberauto-collage'
        },
        'mcdermott-2024': {
            title: '2024 McDermott International Internship',
            description:
                'I worked as an intern for McDermott International in the summer of 2024 in the Instrumentation & Controls (I&C) department, where I gained experience with working on Piping and Instrumentation Diagrams (P&IDs), dissecting elements such as temperature, pressure, liquid level, and flow. I also used Microsoft Excel and PowerPoint to create Cause & Effect (C&E) diagrams, as well as analytical graphs and charts on P&IDs and various other documents from different LNG projects. I had the opportunity to collaborate with engineers and professionals in the field, and was able to apply my engineering knowledge to real-world projects. It was an invaluable experience that allowed me to gain insight into the industry and develop my skills in a practical setting. The following photo was taken during an end of internship trip to Olive Garden with my fellow interns and some of the McDermott employees, where we celebrated the end of our internship and reflected on our experiences throughout the summer.',
            link: 'https://www.linkedin.com/posts/mcdermott-international-inc-_nationalinternday-ugcPost-7222277696930689026-YtxK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3amaMBdLcRewv3Gu1sE-iwwy3Ckm-fOVk',
            mediaType: 'mcdermott-video'
        },
        'capstone-project-2024': {
            title: '2024-2025 Capstone Project',
            description:
                'I worked on the AI Recovery Vision - Exercise Instructor during my senior year of university. I was the Test and Implementation Engineer for the project, where I was responsible for handling the Purchase Order (PO) process and incorporating the hardware components, including the Arduino board, circuit components, and sensors. I also embedded the circuit with Arduino IDE library code to ensure proper functionality.',
            link: 'https://www.example.com/capstone-project',
            mediaType: 'capstone-collage'
        }
    };

    eventSelect.addEventListener('change', function() {
        const selectedEvent = eventInfo[this.value];

        if (!selectedEvent) {
            eventDetails.hidden = true;
            cyberautoCollageContainer.hidden = true;
            mcdermottVideoContainer.hidden = true;
            capstoneCollageContainer.hidden = true;
            return;
        }

        eventTitle.textContent = selectedEvent.title;
        eventDescription.textContent = selectedEvent.description;
        eventLink.href = selectedEvent.link;
        
        // Show or hide media based on event type
        cyberautoCollageContainer.hidden = selectedEvent.mediaType !== 'cyberauto-collage';
        mcdermottVideoContainer.hidden = selectedEvent.mediaType !== 'mcdermott-video';
        capstoneCollageContainer.hidden = selectedEvent.mediaType !== 'capstone-collage';
        
        eventDetails.hidden = false;
    });
});
