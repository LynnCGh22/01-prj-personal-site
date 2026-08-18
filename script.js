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
    const tamuCommencementCollageContainer = document.getElementById('tamu-commencement-collage-container');
    const capstoneCollageContainer = document.getElementById('capstone-collage-container');
    const turboCollageContainer = document.getElementById('turbo-collage-container');

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
                'I worked on the AI Recovery Vision - Exercise Instructor during my senior year, serving as the Test and Implementation Engineer for the project, where I managed the Purchase Order (PO) process and implemented the hardware components, including the Arduino board, circuit components, and motion sensors. I also embedded the circuit system functionality with Arduino IDE library code to ensure reliable data capture and hardware performance. Throughout the project, I documented the full procedure on detailed PowerPoint presentations and technical reports. Furthermore, I presented the project poster at the capstone fair, explaining in clear detail the system design to judges and attendees.',
            link: 'https://www.youtube.com/watch?v=ins52cy6WJk',
            mediaType: 'capstone-collage'
        },
        'graduation-tamu-2025': {
            title: '2025 Graduation from Texas A&M University',
            description:
                'I obtained my Bachelor of Science from Texas A&M University - College of Engineering in May 2025. The day before graduation, I attended the senior gathering, which provided meaningful opportunities to connect with professors, mentors, and fellow engineers, reflecting on our shared journey. On the day of the graduation, I participated in the commencement ceremony, where I obtained my diploma in front of my family, friends, and peers. This achievement marked a significant milestone for me because it was the result of many years of technical growth, hands-on engineering experience, and emotional resilience that led to the development foundation of my professional path.',
            link: 'https://www.youtube.com/live/rdcz-KstRc0?si=kM_KTt0c_XywwRF_',
            mediaType: 'tamu-commencement-collage'
        },
        'turbo-machinery-symposium-2025': {
            title: '2025 Turbo Machinery Symposium',
            description:
                'I attended the 2025 Turbo Machinery Symposium hosted by Texas A&M University, an annual event that brings together professionals and experts in engineering and technology fields from companies such as Baker Hughes, Halliburton, Schlumberger, and Hitachi. The symposium featured keynote speakers, technical sessions, and networking opportunities for attendees to connect with others working in similar fields. It was a valuable experience that allowed me to learn about cutting-edge technologies and developments in turbo machinery, as well as connect with industry professionals and gain insights into recent and ongoing projects. The following professional photos were taken during the symposium, where I had the opportunity to network with professionals and attend various sessions on topics such as gas turbines, compressors, and other related technologies.',
            link: 'https://tps.tamu.edu/',
            mediaType: 'turbo-collage'
        }
    };

    eventSelect.addEventListener('change', function() {
        const selectedEvent = eventInfo[this.value];

        if (!selectedEvent) {
            eventDetails.hidden = true;
            cyberautoCollageContainer.hidden = true;
            mcdermottVideoContainer.hidden = true;
            tamuCommencementCollageContainer.hidden = true;
            capstoneCollageContainer.hidden = true;
            if (turboCollageContainer) {
                turboCollageContainer.hidden = true;
            }
            return;
        }

        eventTitle.textContent = selectedEvent.title;
        eventDescription.textContent = selectedEvent.description;
        eventLink.href = selectedEvent.link;

        // Show or hide media based on event type
        cyberautoCollageContainer.hidden = selectedEvent.mediaType !== 'cyberauto-collage';
        mcdermottVideoContainer.hidden = selectedEvent.mediaType !== 'mcdermott-video';
        tamuCommencementCollageContainer.hidden = selectedEvent.mediaType !== 'tamu-commencement-collage';
        capstoneCollageContainer.hidden = selectedEvent.mediaType !== 'capstone-collage';

        if (turboCollageContainer) {
            turboCollageContainer.hidden = selectedEvent.mediaType !== 'turbo-collage';
        }

        eventDetails.hidden = false;
    });
});
