// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeMenu();
            }
        });
    });
});

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
});

// Close mobile menu
function closeMenu() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

overlay.addEventListener('click', closeMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Three Photo Slider Functionality untuk Desktop
const slider = document.querySelector('.three-slider');
const slides = document.querySelectorAll('.slider-slide');

// Only initialize if slider exists (desktop)
if (slider) {
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let currentCenterIndex = 0;
    
    // Update slider positions based on current center
    function updateSliderPositions() {
        slides.forEach((slide, index) => {
            slide.classList.remove('slide-left', 'slide-center', 'slide-right', 'slide-hidden');
            
            if (index === currentCenterIndex) {
                slide.classList.add('slide-center');
            } else if (index === currentCenterIndex + 1) {
                slide.classList.add('slide-right');
            } else if (index === currentCenterIndex - 1 && currentCenterIndex > 0) {
                slide.classList.add('slide-left');
            } else {
                slide.classList.add('slide-hidden');
            }
        });
    }
    
    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        slider.style.cursor = 'grabbing';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.clientX;
    });
    
    slider.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.cursor = 'grab';
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                if (currentCenterIndex < slides.length - 1) {
                    currentCenterIndex++;
                }
            } else {
                if (currentCenterIndex > 0) {
                    currentCenterIndex--;
                }
            }
            updateSliderPositions();
        }
    });
    
    slider.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            slider.style.cursor = 'grab';
        }
    });
    
    // Touch events
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                if (currentCenterIndex < slides.length - 1) {
                    currentCenterIndex++;
                }
            } else {
                if (currentCenterIndex > 0) {
                    currentCenterIndex--;
                }
            }
            updateSliderPositions();
        }
    });
    
    // Initialize
    updateSliderPositions();
}

// Data Jutsu Itachi Uchiha
const jutsuData = [
    {
        id: 1,
        name: "Tsukuyomi",
        type: "Genjutsu",
        rank: "S-Class",
        icon: "月",
        description: "Genjutsu terkuat yang menjebak target dalam dunia ilusi dimana waktu, ruang, dan hukum fisika dapat dimanipulasi sepenuhnya.",
        abilities: [
            "Kontrol penuh atas persepsi waktu",
            "Menyiksa target secara mental selama berhari-hari dalam hitungan detik",
            "Hanya bisa dipatahkan oleh pengguna Sharingan"
        ],
        power: 98,
        difficulty: 95,
        chakra: 90,
        image: "images/tsukoyomi.jpg"
    },
    {
        id: 2,
        name: "Amaterasu",
        type: "Ninjutsu",
        rank: "S-Class",
        icon: "天",
        description: "Api hitam yang muncul di titik fokus pandangan pengguna. Api ini membakar sampai target hancur sepenuhnya dan tidak bisa dipadamkan.",
        abilities: [
            "Api hitam yang tidak pernah padam",
            "Membakar hampir semua benda",
            "Bisa dibentuk dengan Susanoo"
        ],
        power: 95,
        difficulty: 90,
        chakra: 85,
        image: "images/amaterasu.jpg"
    },
    {
        id: 3,
        name: "Susanoo",
        type: "Kekkei Genkai",
        rank: "S-Class",
        icon: "須",
        description: "Avatar humanoid raksasa dari chakra pengguna yang melindungi mereka. Susanoo Itachi memiliki Pedang Totsuka dan Cermin Yata.",
        abilities: [
            "Pertahanan hampir tak tertembus dengan Cermin Yata",
            "Menyegel apapun yang ditusuk Pedang Totsuka",
            "Perlindungan lengkap dari semua arah"
        ],
        power: 97,
        difficulty: 92,
        chakra: 88,
        image: "images/susanoo.jpg"
    },
    {
        id: 4,
        name: "Izanami",
        type: "Genjutsu",
        rank: "Forbidden",
        icon: "伊",
        description: "Genjutsu yang menjebak target dalam loop tak berujung dari momen tertentu, dibuat untuk menghukum penyalahguna Izanagi.",
        abilities: [
            "Menjebak target dalam loop waktu tak terbatas",
            "Dibuat untuk melawan Izanagi",
            "Menyebabkan pengguna kehilangan penglihatan di satu mata"
        ],
        power: 90,
        difficulty: 96,
        chakra: 82,
        image: "images/izanami.jpg"
    },
    {
        id: 5,
        name: "Crow Clone",
        type: "Ninjutsu",
        rank: "B-Class",
        icon: "鴉",
        description: "Variasi teknik Shadow Clone dimana klon terbuat dari kumpulan burung gagak. Saat hancur, gagak-gagak bisa menyatu kembali.",
        abilities: [
            "Klon berubah menjadi gagak saat terkena serangan",
            "Gagak bisa digunakan untuk genjutsu",
            "Bisa menyusun ulang setelah hancur"
        ],
        power: 75,
        difficulty: 70,
        chakra: 65,
        image: "images/crow-clone.jpg"
    },
    {
        id: 6,
        name: "Fire Style",
        type: "Ninjutsu",
        rank: "Various",
        icon: "火",
        description: "Itachi adalah master teknik Fire Release, mampu melakukan serangan api kuat tanpa tanda tangan sejak usia muda.",
        abilities: [
            "Fireball Jutsu - Level master",
            "Phoenix Flower Jutsu",
            "Dragon Fire Jutsu"
        ],
        power: 85,
        difficulty: 75,
        chakra: 78,
        image: "images/fire-style.jpg"
    }
];

// Inisialisasi Section Jutsu
function initJutsuSection() {
    createFilterButtons();
    renderJutsuCards();
    setupJutsuModal();
    setupCardInteractions();
}

// Membuat Filter Buttons
function createFilterButtons() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'jutsu-filter';
    
    const filterTypes = ['All', 'Genjutsu', 'Ninjutsu', 'Kekkei Genkai'];
    
    filterTypes.forEach(type => {
        const button = document.createElement('button');
        button.className = `filter-btn ${type === 'All' ? 'active' : ''}`;
        button.textContent = type;
        button.dataset.filter = type;
        
        button.addEventListener('click', handleFilterClick);
        filterContainer.appendChild(button);
    });
    
    const jutsuContainer = document.querySelector('#Jutsu .jutsu-container');
    jutsuContainer.insertBefore(filterContainer, jutsuContainer.querySelector('.jutsu-grid'));
}

// Handle Filter Click
function handleFilterClick(e) {
    const filter = e.target.dataset.filter;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    filterJutsuCards(filter);
}

// Filter Jutsu Cards
function filterJutsuCards(filterType) {
    const filteredJutsu = filterType === 'All' 
        ? jutsuData 
        : jutsuData.filter(jutsu => jutsu.type === filterType);
    
    renderJutsuCards(filteredJutsu);
}

// Render Jutsu Cards
function renderJutsuCards(jutsuList = jutsuData) {
    const jutsuGrid = document.querySelector('.jutsu-grid');
    jutsuGrid.innerHTML = '';
    
    jutsuList.forEach(jutsu => {
        const card = createJutsuCard(jutsu);
        jutsuGrid.appendChild(card);
    });
}

// Create Jutsu Card
function createJutsuCard(jutsu) {
    const card = document.createElement('div');
    card.className = 'jutsu-card';
    card.dataset.id = jutsu.id;
    
    card.innerHTML = `
        <div class="jutsu-card-header">
            <div class="jutsu-icon">${jutsu.icon}</div>
            <h3>${jutsu.name}</h3>
        </div>
        <div class="jutsu-card-body">
            <p>${jutsu.description}</p>
            
            <div class="jutsu-details">
                <div class="jutsu-type">
                    <span>Type</span>
                    <span>${jutsu.type}</span>
                </div>
                <div class="jutsu-rank">
                    <span>Rank</span>
                    <span>${jutsu.rank}</span>
                </div>
            </div>
            
            <div class="jutsu-abilities">
                <h4>Abilities</h4>
                <ul>
                    ${jutsu.abilities.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    return card;
}

// Setup Card Interactions
function setupCardInteractions() {
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.jutsu-card');
        if (card) {
            const jutsuId = parseInt(card.dataset.id);
            openJutsuModal(jutsuId);
        }
    });
}

// Setup Jutsu Modal
function setupJutsuModal() {
    const modal = document.createElement('div');
    modal.className = 'jutsu-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">
                    <div class="jutsu-icon"></div>
                    <h3></h3>
                </div>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="jutsu-visual">
                    <div class="jutsu-image-container">
                        <img src="" alt="" class="jutsu-image">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="jutsu-stats">
                        <div class="stat">
                            <div class="stat-value"></div>
                            <div class="stat-label">Power</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value"></div>
                            <div class="stat-label">Difficulty</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value"></div>
                            <div class="stat-label">Chakra</div>
                        </div>
                    </div>
                </div>
                <div class="jutsu-info">
                    <p class="jutsu-description"></p>
                    <div class="jutsu-details-modal">
                        <div class="jutsu-type">
                            <span>Type</span>
                            <span></span>
                        </div>
                        <div class="jutsu-rank">
                            <span>Rank</span>
                            <span></span>
                        </div>
                    </div>
                    <div class="jutsu-abilities-modal">
                        <h4>Abilities</h4>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeJutsuModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeJutsuModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeJutsuModal();
        }
    });
}

// Open Jutsu Modal
function openJutsuModal(jutsuId) {
    const jutsu = jutsuData.find(j => j.id === jutsuId);
    if (!jutsu) return;
    
    const modal = document.querySelector('.jutsu-modal');
    const modalIcon = modal.querySelector('.jutsu-icon');
    const modalTitle = modal.querySelector('.modal-title h3');
    const modalDescription = modal.querySelector('.jutsu-description');
    const modalType = modal.querySelector('.jutsu-type span:last-child');
    const modalRank = modal.querySelector('.jutsu-rank span:last-child');
    const modalAbilities = modal.querySelector('.jutsu-abilities-modal ul');
    const jutsuImage = modal.querySelector('.jutsu-image');
    const powerStat = modal.querySelector('.stat:nth-child(1) .stat-value');
    const difficultyStat = modal.querySelector('.stat:nth-child(2) .stat-value');
    const chakraStat = modal.querySelector('.stat:nth-child(3) .stat-value');
    
    modalIcon.textContent = jutsu.icon;
    modalTitle.textContent = jutsu.name;
    modalDescription.textContent = jutsu.description;
    modalType.textContent = jutsu.type;
    modalRank.textContent = jutsu.rank;
    
    jutsuImage.src = jutsu.image;
    jutsuImage.alt = jutsu.name;
    
    modalAbilities.innerHTML = jutsu.abilities.map(ability => 
        `<li>${ability}</li>`
    ).join('');
    
    powerStat.textContent = jutsu.power;
    difficultyStat.textContent = jutsu.difficulty;
    chakraStat.textContent = jutsu.chakra;
    
    const imageContainer = modal.querySelector('.jutsu-image-container');
    imageContainer.className = 'jutsu-image-container';
    imageContainer.classList.add(`jutsu-${jutsu.name.toLowerCase().replace(' ', '-')}`);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Jutsu Modal
function closeJutsuModal() {
    const modal = document.querySelector('.jutsu-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add CSS for modal dengan foto di circle
function addJutsuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .jutsu-filter {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .filter-btn {
            background: rgba(30, 30, 30, 0.8);
            border: 1px solid rgba(198, 40, 40, 0.3);
            color: #ddd;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
            background: rgba(198, 40, 40, 0.2);
            color: white;
        }
        
        .filter-btn.active {
            background: rgba(198, 40, 40, 0.7);
            color: white;
            box-shadow: 0 0 15px rgba(198, 40, 40, 0.5);
        }
        
        .jutsu-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .jutsu-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
            width: 90%;
            max-width: 800px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 0 50px rgba(198, 40, 40, 0.5);
            transform: scale(0.9);
            transition: transform 0.3s ease;
            border: 2px solid rgba(198, 40, 40, 0.5);
        }
        
        .jutsu-modal.active .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            padding: 20px;
            background: linear-gradient(90deg, rgba(198, 40, 40, 0.9), rgba(139, 0, 0, 0.9));
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-title {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .modal-title h3 {
            color: white;
            font-size: 2rem;
            margin: 0;
        }
        
        .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            color: #ff6b6b;
            transform: scale(1.2);
        }
        
        .modal-body {
            padding: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        
        .jutsu-visual {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .jutsu-image-container {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            margin-bottom: 20px;
            border: 3px solid rgba(198, 40, 40, 0.5);
            box-shadow: 0 0 30px rgba(198, 40, 40, 0.3);
            transition: all 0.3s ease;
        }
        
        .jutsu-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease;
        }
        
        .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                45deg,
                rgba(198, 40, 40, 0.1) 0%,
                rgba(139, 0, 0, 0.2) 50%,
                rgba(198, 40, 40, 0.1) 100%
            );
            transition: all 0.3s ease;
        }
        
        .jutsu-image-container:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(198, 40, 40, 0.5);
        }
        
        .jutsu-image-container:hover .jutsu-image {
            transform: scale(1.1);
        }
        
        .jutsu-image-container:hover .image-overlay {
            background: linear-gradient(
                45deg,
                rgba(198, 40, 40, 0.2) 0%,
                rgba(139, 0, 0, 0.3) 50%,
                rgba(198, 40, 40, 0.2) 100%
            );
        }
        
        .jutsu-tsukuyomi {
            border-color: rgba(128, 0, 128, 0.6);
            box-shadow: 0 0 30px rgba(128, 0, 128, 0.4);
        }
        
        .jutsu-amaterasu {
            border-color: rgba(255, 0, 0, 0.6);
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.4);
        }
        
        .jutsu-susanoo {
            border-color: rgba(0, 100, 255, 0.6);
            box-shadow: 0 0 30px rgba(0, 100, 255, 0.4);
        }
        
        .jutsu-izanami {
            border-color: rgba(75, 0, 130, 0.6);
            box-shadow: 0 0 30px rgba(75, 0, 130, 0.4);
        }
        
        .jutsu-crow-clone {
            border-color: rgba(0, 0, 0, 0.6);
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }
        
        .jutsu-fire-style {
            border-color: rgba(255, 69, 0, 0.6);
            box-shadow: 0 0 30px rgba(255, 69, 0, 0.4);
        }
        
        .jutsu-stats {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }
        
        .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #c62828;
        }
        
        .stat-label {
            font-size: 0.9rem;
            color: #aaa;
        }
        
        .jutsu-details-modal {
            display: flex;
            gap: 30px;
            margin: 20px 0;
        }
        
        .jutsu-abilities-modal ul {
            list-style-type: none;
            padding-left: 0;
        }
        
        .jutsu-abilities-modal li {
            color: #ddd;
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        
        .jutsu-abilities-modal li::before {
            content: '•';
            color: #c62828;
            position: absolute;
            left: 0;
            font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
                padding: 20px;
            }
            
            .jutsu-image-container {
                width: 200px;
                height: 200px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#Jutsu')) {
        addJutsuStyles();
        initJutsuSection();
    }
});

// JavaScript untuk Timeline Interaktif
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressDots = document.querySelectorAll('.progress-dot');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const index = Array.from(timelineItems).indexOf(entry.target);
                updateProgressDots(index);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    progressDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const chapterIndex = parseInt(this.dataset.chapter);
            scrollToChapter(chapterIndex);
        });
    });
    
    function updateProgressDots(activeIndex) {
        progressDots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function scrollToChapter(chapterIndex) {
        if (timelineItems[chapterIndex]) {
            timelineItems[chapterIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.sharingan-bg');
        if (parallax) {
            parallax.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.1}deg)`;
        }
    });
});

// Relationship Data
const relationshipData = {
    itachi: {
        name: "ITACHI UCHIHA",
        role: "The Prodigy",
        image: "images/itachi.jpg",
        description: "The central figure in this web of relationships. A genius who carried the weight of the world on his shoulders.",
        type: "central",
        threat: "N/A",
        depth: "N/A",
        battles: "N/A",
        outcome: "N/A",
        moments: ["Carried the burden of the Uchiha massacre", "Worked as a double agent in Akatsuki", "Sacrificed everything for peace"]
    },
    sasuke: {
        name: "SASUKE UCHIHA",
        role: "Younger Brother",
        image: "images/sasuke.jpg",
        description: "Itachi's beloved younger brother whom he loved more than anyone else. He carried the burden of making Sasuke hate him to protect him.",
        type: "family",
        threat: "High",
        depth: "100%",
        battles: "Multiple",
        outcome: "Planned Sacrifice",
        moments: ["Spared during Uchiha massacre", "Final battle where Itachi transferred his power", "Revealed the truth after death"]
    },
    shisui: {
        name: "SHISUI UCHIHA",
        role: "Best Friend & Mentor",
        image: "images/shisui.jpg",
        description: "Itachi's closest friend and the only person who understood him. Shisui entrusted Itachi with his Mangekyou Sharingan and his will for peace.",
        type: "complex",
        threat: "None",
        depth: "95%",
        battles: "None",
        outcome: "Tragic Loss",
        moments: ["Body Switch Technique training", "Entrusted with Kotoamatsukami", "Suicide to protect Itachi and the village"]
    },
    orochimaru: {
        name: "OROCHIMARU",
        role: "Legendary Sannin",
        image: "images/orochimaru.jpg",
        description: "A former Akatsuki member who coveted Itachi's body and Sharingan. Itachi easily defeated him, creating a lasting fear and respect.",
        type: "enemy",
        threat: "Extreme",
        depth: "60%",
        battles: "One",
        outcome: "Decisive Victory",
        moments: ["Attempted to steal Itachi's body", "Instantly defeated by Sharingan", "Developed lasting fear of Itachi"]
    },
    kakashi: {
        name: "KAKASHI HATAKE",
        role: "Copy Ninja",
        image: "images/kakashi.jpg",
        description: "A respected Konoha ninja who faced Itachi multiple times. Their battles were tactical masterclasses, with Itachi always demonstrating superior genjutsu.",
        type: "rival",
        threat: "High",
        depth: "75%",
        battles: "Multiple",
        outcome: "Victorious",
        moments: ["First encounter in Konoha", "Tsukuyomi battle that hospitalized Kakashi", "Respectful rivalry throughout"]
    },
    kisame: {
        name: "KISAME HOSHIGAKI",
        role: "Akatsuki Partner",
        image: "images/kisame.jpg",
        description: "Itachi's partner in Akatsuki who held deep respect for his power and intellect. Their partnership was one of mutual understanding and effectiveness.",
        type: "ally",
        threat: "None",
        depth: "85%",
        battles: "None",
        outcome: "Strong Partnership",
        moments: ["Most effective Akatsuki partnership", "Kisame's unwavering respect", "Shared understanding of betrayal"]
    },
    deidara: {
        name: "DEIDARA",
        role: "Explosion Artist",
        image: "images/deidara.jpg",
        description: "A fellow Akatsuki member who held a grudge against Itachi for easily defeating him with genjutsu. Their relationship was one-sided rivalry.",
        type: "enemy",
        threat: "Medium",
        depth: "40%",
        battles: "One",
        outcome: "Decisive Victory",
        moments: ["Forced to join Akatsuki after defeat", "Constant attempts to prove himself", "One-sided rivalry"]
    },
    fugaku: {
        name: "FUGAKU UCHIHA",
        role: "Father & Clan Leader",
        image: "images/fugaku.jpg",
        description: "Itachi's father and leader of the Uchiha clan. Their relationship was complex, filled with pride, disappointment, and ultimately tragic understanding.",
        type: "complex",
        threat: "Medium",
        depth: "90%",
        battles: "None",
        outcome: "Tragic Resolution",
        moments: ["Proud of Itachi's talents", "Clash over Uchiha coup", "Final understanding before death"]
    }
};

// Relationships between characters
const relationships = [
    { from: "itachi", to: "sasuke", type: "family" },
    { from: "itachi", to: "shisui", type: "complex" },
    { from: "itachi", to: "orochimaru", type: "enemy" },
    { from: "itachi", to: "kakashi", type: "rival" },
    { from: "itachi", to: "kisame", type: "ally" },
    { from: "itachi", to: "deidara", type: "enemy" },
    { from: "itachi", to: "fugaku", type: "complex" }
];

// Initialize Relationship Web
document.addEventListener('DOMContentLoaded', function() {
    const web = document.getElementById('relationshipWeb');
    const panel = document.getElementById('relationshipPanel');
    const controlBtns = document.querySelectorAll('.control-btn');
    const characterNodes = document.querySelectorAll('.character-node');
    
    drawConnections();
    
    characterNodes.forEach(node => {
        node.addEventListener('click', function() {
            const characterId = this.dataset.id;
            showRelationshipDetails(characterId);
            
            characterNodes.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            controlBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            filterConnections(filter);
        });
    });
    
    web.addEventListener('click', function(e) {
        if (e.target === web) {
            panel.classList.remove('active');
            characterNodes.forEach(node => node.classList.remove('active'));
        }
    });
    
    function drawConnections() {
        relationships.forEach(rel => {
            const fromNode = document.querySelector(`[data-id="${rel.from}"]`);
            const toNode = document.querySelector(`[data-id="${rel.to}"]`);
            
            if (fromNode && toNode) {
                const fromRect = fromNode.getBoundingClientRect();
                const toRect = toNode.getBoundingClientRect();
                const webRect = web.getBoundingClientRect();
                
                const fromX = fromRect.left + fromRect.width/2 - webRect.left;
                const fromY = fromRect.top + fromRect.height/2 - webRect.top;
                const toX = toRect.left + toRect.width/2 - webRect.left;
                const toY = toRect.top + toRect.height/2 - webRect.top;
                
                const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
                const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
                
                const connection = document.createElement('div');
                connection.className = `connection ${rel.type}`;
                connection.style.width = `${length}px`;
                connection.style.height = '2px';
                connection.style.left = `${fromX}px`;
                connection.style.top = `${fromY}px`;
                connection.style.transform = `rotate(${angle}deg)`;
                connection.dataset.type = rel.type;
                
                web.appendChild(connection);
            }
        });
    }
    
    function filterConnections(filter) {
        const connections = document.querySelectorAll('.connection');
        const nodes = document.querySelectorAll('.character-node:not(.itachi)');
        
        connections.forEach(conn => {
            if (filter === 'all' || conn.dataset.type === filter) {
                conn.style.opacity = '1';
            } else {
                conn.style.opacity = '0.1';
            }
        });
        
        nodes.forEach(node => {
            if (filter === 'all' || node.classList.contains(filter)) {
                node.style.opacity = '1';
            } else {
                node.style.opacity = '0.3';
            }
        });
    }
    
    function showRelationshipDetails(characterId) {
        const data = relationshipData[characterId];
        
        document.getElementById('panelCharacterImage').src = data.image;
        document.getElementById('panelCharacterName').textContent = data.name;
        document.getElementById('panelCharacterRole').textContent = data.role;
        document.getElementById('relationshipDescription').textContent = data.description;
        document.getElementById('statThreat').textContent = data.threat;
        document.getElementById('statDepth').textContent = data.depth;
        document.getElementById('statBattles').textContent = data.battles;
        document.getElementById('statOutcome').textContent = data.outcome;
        
        const typeElement = document.getElementById('relationshipType');
        typeElement.textContent = data.type.toUpperCase();
        typeElement.className = 'relationship-type';
        typeElement.classList.add(`tag-${data.type}`);
        
        const momentsList = document.getElementById('keyMoments');
        momentsList.innerHTML = '';
        data.moments.forEach(moment => {
            const li = document.createElement('li');
            li.textContent = moment;
            momentsList.appendChild(li);
        });
        
        panel.classList.add('active');
    }
});

// Back to Top Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#c62828';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#aaa';
        });
    });
});

// Loading Screen Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const crowContainer = document.getElementById('crowContainer');
    const progressFill = document.getElementById('progressFill');
    const loadingText = document.getElementById('loadingText');
    const loadingSubtext = document.getElementById('loadingSubtext');
    const loadingQuote = document.getElementById('loadingQuote');

    const quotes = [
        "Those who cannot acknowledge themselves will eventually fail.",
        "We do not know what kind of people we truly are until the moment before our deaths.",
        "Knowledge and awareness are vague, and perhaps better called illusions.",
        "People live their lives bound by what they accept as correct and true.",
        "Growth occurs when one goes beyond one's limits.",
        "It is not wise to judge others based on your own perceptions and by their appearances."
    ];

    const loadingTexts = [
        "PREPARING GENJUTSU",
        "SUMMONING CROWS", 
        "ACTIVATING SHARINGAN",
        "ASSEMBLING MEMORIES",
        "READY FOR BATTLE"
    ];

    initLoadingScreen();

    function initLoadingScreen() {
        createFeathers();
        startLoadingSequence();
    }

    function createFeathers() {
        const featherCount = 50;
        
        for (let i = 0; i < featherCount; i++) {
            setTimeout(() => {
                createFeather(i);
            }, i * 100);
        }
    }

    function createFeather(index) {
        const feather = document.createElement('div');
        feather.className = 'feather';
        
        const startX = (Math.random() - 0.5) * 2000;
        const startY = (Math.random() - 0.5) * 2000;
        const midX = (Math.random() - 0.5) * 800;
        const midY = (Math.random() - 0.5) * 800;
        const endX = (Math.random() - 0.5) * 400;
        const endY = (Math.random() - 0.5) * 400;
        const rotation = Math.random() * 360;
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 2;

        feather.style.setProperty('--start-x', `${startX}px`);
        feather.style.setProperty('--start-y', `${startY}px`);
        feather.style.setProperty('--mid-x', `${midX}px`);
        feather.style.setProperty('--mid-y', `${midY}px`);
        feather.style.setProperty('--end-x', `${endX}px`);
        feather.style.setProperty('--end-y', `${endY}px`);
        feather.style.setProperty('--rotation', `${rotation}deg`);

        feather.style.animation = `featherFall ${duration}s ease-in-out ${delay}s forwards`;

        crowContainer.appendChild(feather);

        setTimeout(() => {
            feather.style.animation = `featherToSilhouette 1s ease-in-out forwards`;
        }, (delay + duration - 1) * 1000);
    }

    function startLoadingSequence() {
        let progress = 0;
        let textIndex = 0;
        
        setTimeout(() => {
            loadingText.style.animation = 'fadeInUp 1s ease forwards';
        }, 500);
        
        setTimeout(() => {
            loadingSubtext.style.animation = 'fadeInUp 1s ease forwards';
        }, 1000);
        
        setTimeout(() => {
            loadingQuote.style.animation = 'fadeInUp 1s ease forwards';
        }, 1500);

        const textInterval = setInterval(() => {
            textIndex = (textIndex + 1) % loadingTexts.length;
            loadingText.textContent = loadingTexts[textIndex];
        }, 2000);

        const progressInterval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) progress = 100;
            
            progressFill.style.width = `${progress}%`;
            
            if (progress === 25 || progress === 50 || progress === 75) {
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                loadingQuote.textContent = `"${randomQuote}"`;
            }

            if (progress === 100) {
                clearInterval(progressInterval);
                clearInterval(textInterval);
                completeLoading();
            }
        }, 300);
    }

    function completeLoading() {
        loadingText.textContent = "GENJUTSU COMPLETE";
        loadingSubtext.textContent = "Entering the world of Uchiha Itachi...";
        
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 1000);
        }, 1500);
    }

    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            progressFill.style.width = '100%';
            setTimeout(completeLoading, 500);
        }
    });
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (!heroTitle || !heroSubtitle) return;
        
        const originalTitle = heroTitle.textContent;
        const originalSubtitle = heroSubtitle.textContent;
        
        heroTitle.textContent = '';
        heroSubtitle.textContent = '';
        
        heroTitle.classList.add('typing');
        
        let titleIndex = 0;
        let subtitleIndex = 0;
        
        function typeTitle() {
            if (titleIndex < originalTitle.length) {
                heroTitle.textContent += originalTitle.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 150);
            } else {
                setTimeout(typeSubtitle, 500);
            }
        }
        
        function typeSubtitle() {
            if (subtitleIndex < originalSubtitle.length) {
                heroSubtitle.textContent += originalSubtitle.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 40);
            } else {
                setTimeout(() => {
                    heroTitle.classList.remove('typing');
                }, 1000);
            }
        }
        
        typeTitle();
        
    }, 1000);
});

// Uchiha Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const memorySections = document.querySelectorAll('.memory-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    memorySections.forEach(section => {
        observer.observe(section);
    });
});