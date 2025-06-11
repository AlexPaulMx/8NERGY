document.addEventListener('DOMContentLoaded', () => {
    // Cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
    }

    // Time update
    const locationSpan = document.querySelector('.header-right .location');
    if (locationSpan) {
        function updateTime() {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', hour12: true };
            const formattedTime = now.toLocaleTimeString('en-US', options);
            locationSpan.textContent = formattedTime;
        }

        updateTime();
        setInterval(updateTime, 60000);
    }

    // Card modal functionality
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('cardModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    if (cards.length > 0 && modal) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const cardId = card.getAttribute('data-card');
                const details = cardDetails[cardId];
                
                if (details) {
                    modalTitle.textContent = details.title;
                    modalDescription.innerHTML = details.description;
                    modal.style.display = 'flex';
                }
            });
        });

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // CV Modal functionality
    const cvButton = document.getElementById('cvButton');
    const cvModal = document.getElementById('cvModal');
    const cvCloseButton = cvModal ? cvModal.querySelector('.close-button') : null;

    if (cvButton && cvModal) {
        cvButton.addEventListener('click', () => {
            cvModal.style.display = 'flex';
        });

        if (cvCloseButton) {
            cvCloseButton.addEventListener('click', () => {
                cvModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                cvModal.style.display = 'none';
            }
        });
    }

    // Ensure modal is properly initialized
    if (modal) {
        modal.style.display = 'none';
    }

    const cardDetails = {
        'about': {
            title: 'About',
            description: `
                <div class="about-intro-text">
                    <p>8nergy© is a multi-disciplinary creative studio Created by the eng. Alejandro Rach, dedicated to crafting immersive and engaging product experiences and technologies.</p>
                    <p class="highlight-text">Our work is defined by a commitment to clarity, consistency, and meticulous attention to detail, ensuring that every project authentically resonates with its audience.</p>
                    <p class="secondary-text">We believe in the power of design to transform ideas into impactful experiences. Our approach combines technical expertise with creative vision to deliver solutions that not only meet but exceed expectations.</p>
                </div>
                
                <div class="about-image-container">
                    <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeied44li5cdlhsnoksc225rz64mbxpmcivp567fdoucao2mmmlcvym" alt="About 8nergy">
                </div>

                <div class="services-section">
                    <h3>Our Services</h3>
                    <div class="services-grid">
                        <div class="service-item">
                            <h4>Web Development</h4>
                            <p>Crafting responsive, high-performance websites and web applications with modern technologies.</p>
                        </div>
                        <div class="service-item">
                            <h4>UI/UX Design</h4>
                            <p>Creating intuitive and aesthetically pleasing user interfaces and experiences.</p>
                        </div>
                        <div class="service-item">
                            <h4>Branding & Identity</h4>
                            <p>Developing strong brand identities that resonate with your audience and market.</p>
                        </div>
                        <div class="service-item">
                            <h4>Digital Strategy</h4>
                            <p>Formulating effective digital strategies to achieve your business goals.</p>
                        </div>
                        <div class="service-item">
                            <h4>Graphic Design</h4>
                            <p>Creating stunning visual assets, illustrations, and layouts for various platforms.</p>
                        </div>
                        <div class="service-item">
                            <h4>3D Modeling</h4>
                            <p>Focused on design and industrial design, creating detailed 3D models and visualizations.</p>
                        </div>
                    </div>
                </div>

                <div class="skills-section">
                    <h3>Skills & Software</h3>
                    <div class="skills-grid">
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
                            <span>React</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript">
                            <span>TypeScript</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js">
                            <span>Node.js</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma">
                            <span>Figma</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop">
                            <span>Photoshop</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator">
                            <span>Illustrator</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender">
                            <span>Blender</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" alt="After Effects">
                            <span>After Effects</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" alt="Premiere Pro">
                            <span>Premiere Pro</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg" alt="AutoCAD">
                            <span>AutoCAD</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidworks/solidworks-original.svg" alt="SolidWorks">
                            <span>SolidWorks</span>
                        </div>
                        <div class="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fusion360/fusion360-original.svg" alt="Fusion 360">
                            <span>Fusion 360</span>
                        </div>
                    </div>
                </div>
            `
        },
        'portfolio': {
            title: 'Our Portfolio',
            description: `
                <div class="portfolio-modal-content">
                    <h2 class="portfolio-header-text">Explore a selection of projects that showcase some of my most rewarding design experiences.</h2>
                    <div class="portfolio-grid">
                        <a href="https://inprocessremix.framer.website/" target="_blank" class="portfolio-item">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeihxp3sco7kkrd5563hv5ywx6i3fcmu3evb7ikukihv3m43icqahbe" alt="Inprocess - App Design">
                            <div class="item-details">
                                <span class="portfolio-title">Inprocess</span>
                                <span class="portfolio-category">Visit</span>
                            </div>
                        </a>
                        <a href="https://www.thelab.cfd/thelab" target="_blank" class="portfolio-item">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeicj54dzghagoakutrcrremdggd4fgkgito4tlnwcm6de5mwv7v6ey" alt="TheLab - UX/UI Design">
                            <div class="item-details">
                                <span class="portfolio-title">TheLab</span>
                                <span class="portfolio-category">Visit</span>
                            </div>
                        </a>
                        <a href="https://v0-wavsclub-project.vercel.app/" target="_blank" class="portfolio-item">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeidibq5dg5wwiyb65b5sk6wwow3ojvxmconzz3mllj4dt3tecztj74" alt="Wavs - Product Design">
                            <div class="item-details">
                                <span class="portfolio-title">Wavs</span>
                                <span class="portfolio-category">Visit</span>
                            </div>
                        </a>
                        <a href="https://v0-secure-drop-platform-eu.vercel.app/" target="_blank" class="portfolio-item">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeih7mywzksth37mqade2x5cxmaimmi7kfwdvqa7ta7rsarh2gkp3ra" alt="Secure Drop - Category 4">
                            <div class="item-details">
                                <span class="portfolio-title">Secure Drop</span>
                                <span class="portfolio-category">Visit</span>
                            </div>
                        </a>
                    </div>
                </div>
            `
        },
        'graphicDesign': {
            title: 'Graphic Design Portfolio',
            description: `
                <div class="graphic-design-modal-content">
                    <h2 class="graphic-design-header-text">A Showcase of Visual Communication</h2>
                    <div class="graphic-design-grid">
                        <a href="#" target="_blank" class="graphic-design-item">
                            <img src="https://picsum.photos/400/300?random=10" alt="Brand Identity Project">
                            <div class="item-details">
                                <span class="graphic-design-title">Brand Identity</span>
                                <span class="graphic-design-category">Branding</span>
                            </div>
                        </a>
                        <a href="#" target="_blank" class="graphic-design-item">
                            <img src="https://picsum.photos/400/300?random=11" alt="Poster Design Project">
                            <div class="item-details">
                                <span class="graphic-design-title">Poster Series</span>
                                <span class="graphic-design-category">Print Design</span>
                            </div>
                        </a>
                        <a href="#" target="_blank" class="graphic-design-item">
                            <img src="https://picsum.photos/400/300?random=12" alt="Packaging Design Project">
                            <div class="item-details">
                                <span class="graphic-design-title">Product Packaging</span>
                                <span class="graphic-design-category">Packaging</span>
                            </div>
                        </a>
                        <a href="#" target="_blank" class="graphic-design-item">
                            <img src="https://picsum.photos/400/300?random=13" alt="Editorial Design Project">
                            <div class="item-details">
                                <span class="graphic-design-title">Editorial Layouts</span>
                                <span class="graphic-design-category">Layout</span>
                            </div>
                        </a>
                    </div>
                </div>
            `
        },
        'contact': {
            title: 'Get in Touch',
            description: `
                <div class="contact-modal-content">
                    <h2 class="contact-header-text">Share Your Project Details</h2>
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="fullName">Full name</label>
                            <input type="text" id="fullName" placeholder="ex. John Smith">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="hello@website.com">
                        </div>

                        <div class="form-section-header-group">
                            <span class="form-section-header">What's Your Project About?</span>
                            <span class="form-section-header">Project Budget</span>
                        </div>
                        
                        <div class="form-options-group">
                            <div class="checkbox-group">
                                <label class="checkbox-container">
                                    Multipage Website Design
                                    <input type="checkbox" name="projectType" value="multipageWebsiteDesign">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">
                                    Landing Page Design
                                    <input type="checkbox" name="projectType" value="landingPageDesign">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">
                                    Online Shop
                                    <input type="checkbox" name="projectType" value="onlineShop">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">
                                    Custom Web Application
                                    <input type="checkbox" name="projectType" value="customWebApplication">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">
                                    Branding & Visual Identity
                                    <input type="checkbox" name="projectType" value="brandingVisualIdentity">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-container">
                                    Mobile App Development
                                    <input type="checkbox" name="projectType" value="mobileAppDevelopment">
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <div class="radio-group">
                                <label class="radio-container">
                                    $1k - $5k
                                    <input type="radio" name="projectBudget" value="1k-5k">
                                    <span class="radio-checkmark"></span>
                                </label>
                                <label class="radio-container">
                                    $5k - $10k
                                    <input type="radio" name="projectBudget" value="5k-10k">
                                    <span class="radio-checkmark"></span>
                                </label>
                                <label class="radio-container">
                                    $10k - $20k
                                    <input type="radio" name="projectBudget" value="10k-20k">
                                    <span class="radio-checkmark"></span>
                                </label>
                                <label class="radio-container">
                                    > $20k
                                    <input type="radio" name="projectBudget" value="20k+">
                                    <span class="radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="moreDetails">Share More Details</label>
                            <textarea id="moreDetails" placeholder="About your project..."></textarea>
                        </div>

                        <button type="submit" class="submit-button">Submit</button>

                        <div class="spot-available">
                            <span class="dot"></span> One spot available for Jun, 2025
                        </div>
                    </form>

                    <p class="contact-alternative-text">If you'd rather not complete any forms, just shoot me an email or dm directly, and we can discuss.</p>
                    <div class="contact-social-buttons">
                        <a href="https://wa.me/yourphonenumber" target="_blank" class="social-button whatsapp-button" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a href="mailto:your_email@example.com" class="social-button mail-button" aria-label="Mail"><i class="fas fa-envelope"></i></a>
                        <a href="https://t.me/yourtelegramusername" target="_blank" class="social-button telegram-button" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
                    </div>
                </div>
            `
        },
        'clients': {
            title: 'Clients',
            description: `
                <div class="clients-modal-content">
                    <h2 class="clients-header-text">Trusted by leading brands and innovative startups.</h2>
                    <div class="carousel-container">
                        <div class="carousel-slide-track">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/ALEX%20PAUL%20LOGO%201.1.png" alt="Client Logo 1" class="carousel-image">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/NOise.png" alt="Client Logo 2" class="carousel-image">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/RACH%20BLANCO%201.1.png" alt="Client Logo 3" class="carousel-image">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/SECURE%20DROP%20ICON.png" alt="Client Logo 4" class="carousel-image">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/ac%20.png" alt="Client Logo 5" class="carousel-image">
                            <img src="https://jade-tropical-puma-660.mypinata.cloud/ipfs/bafybeiad3im3cjapojfe3ie6d7nhid7n373n42jqeb7y66u4265zyll5ee/legalle.png" alt="Client Logo 6" class="carousel-image">
                        </div>
                        <button class="carousel-btn prev-btn">&#10094;</button>
                        <button class="carousel-btn next-btn">&#10095;</button>
                        <div class="carousel-dots">
                            <span class="dot" data-slide="0"></span>
                            <span class="dot" data-slide="1"></span>
                            <span class="dot" data-slide="2"></span>
                            <span class="dot" data-slide="3"></span>
                            <span class="dot" data-slide="4"></span>
                            <span class="dot" data-slide="5"></span>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Handle video playback on hover for portfolio items
    modal.addEventListener('DOMSubtreeModified', () => {
        if (modal.classList.contains('active') && modal.querySelector('.portfolio-modal-content')) {
            const portfolioItems = modal.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => {
                const video = item.querySelector('video');
                if (video) {
                    item.addEventListener('mouseenter', () => {
                        video.play();
                    });
                    item.addEventListener('mouseleave', () => {
                        video.pause();
                        video.currentTime = 0; // Rewind video to start on mouse leave
                    });
                }
            });
        }
    });

    // Carousel logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }

        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));

        slides[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => plusSlides(-1));
        nextBtn.addEventListener('click', () => plusSlides(1));
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlides(slideIndex = index));
    });

    // Initialize carousel for clients modal only when clients modal is opened.
    // This will require modifying the modal open logic to check for clients modal and then init carousel
    modal.addEventListener('transitionend', () => {
        if (modal.style.display === 'block' && modalTitle.textContent === 'Clients') {
            showSlides(0);
        }
    });

    // Initial display for the first slide (if the modal is already open, e.g., on page load)
    // This won't work perfectly if modal is opened with JS later, but handles initial state.
    if (modal.style.display === 'block' && modalTitle.textContent === 'Clients') {
        showSlides(0);
    }

    // Portfolio Modal
    const portfolioModal = document.querySelector('.portfolio-modal');
    const portfolioModalClose = document.querySelector('.portfolio-modal-close');
    const portfolioLink = document.querySelector('.portfolio-link');

    if (portfolioLink) {
        portfolioLink.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (portfolioModalClose) {
        portfolioModalClose.addEventListener('click', () => {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Card Modals
    const cardModals = document.querySelectorAll('.card-modal');
    const cardModalCloses = document.querySelectorAll('.card-modal-close');
    const cardLinks = document.querySelectorAll('.card-link');

    cardLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    cardModalCloses.forEach(close => {
        close.addEventListener('click', () => {
            const modal = close.closest('.card-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio-modal')) {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        cardModals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Add pricing button to portfolio modal content
    const portfolioModalContent = document.querySelector('.portfolio-modal-content');
    if (portfolioModalContent) {
        const pricingButton = document.createElement('a');
        pricingButton.href = '/pricing.html';
        pricingButton.className = 'pricing-link';
        pricingButton.textContent = 'Ver Planes y Precios';
        portfolioModalContent.appendChild(pricingButton);
    }
}); 