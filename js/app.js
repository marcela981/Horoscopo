import BirthForm from './components/birthForm.js';
import HoroscopeResult from './components/horoscopeResult.js';
import { calculateCompatibility } from './utils/horoscopeCalculator.js';
import { planets, houses } from './data/zodiacSigns.js';

class HoroscopeApp {
    constructor() {
        this.currentPage = 'home';
        this.birthForm = null;
        this.horoscopeResult = null;
        this.init();
    }

    init() {
        this.createNavbar();
        this.bindNavigationEvents();
        this.loadPage('home');
    }

    createNavbar() {
        const navbar = document.createElement('nav');
        navbar.className = 'navbar';
        
        navbar.innerHTML = `
            <div class="nav-container">
                <div class="logo">✨ Horóscopo Mágico</div>
                <ul class="nav-links">
                    <li><a href="#home" data-page="home">Tu Horóscopo</a></li>
                    <li><a href="#carta-astral" data-page="carta-astral">Carta Astral</a></li>
                    <li><a href="#explorador" data-page="explorador">Explorador</a></li>
                    <li><a href="#guia" data-page="guia">Guía</a></li>
                </ul>
            </div>
        `;
        
        document.body.insertBefore(navbar, document.body.firstChild);
    }

    bindNavigationEvents() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.loadPage(page);
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    loadPage(page) {
        this.currentPage = page;
        const container = document.querySelector('.container');
        container.innerHTML = '';
        
        switch(page) {
            case 'home':
                this.loadHomePage();
                break;
            case 'carta-astral':
                this.loadCartaAstralPage();
                break;
            case 'explorador':
                this.loadExploradorPage();
                break;
            case 'guia':
                this.loadGuiaPage();
                break;
        }
    }

    loadHomePage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>Tu Horóscopo del Día</h1>
            <p class="subtitle">Descubre tu destino estelar y las influencias cósmicas que rigen tu vida</p><br>
            <p class="subtitle">Esta pagina está hecha con fines de estudio, no tiene veracidad alguna, es un proyecto personal.</p>
        `;
        
        this.birthForm = new BirthForm();
    }

    loadCartaAstralPage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>Descubre tu Mapa Estelar</h1>
            <p class="subtitle">Explora tu carta astral personal y calcula compatibilidades</p>
        `;
        
        this.loadCartaAstralContent();
    }

    loadCartaAstralContent() {
        const container = document.querySelector('.container');
        
        // Primera sección: Carta Astral Personal
        const personalSection = document.createElement('div');
        personalSection.className = 'section fade-in';
        personalSection.innerHTML = `
            <h2>Tu Carta Astral Personal</h2>
            <div class="chart-container">
                <div class="chart-center">✨</div>
            </div>
            <p>Ingresa tus datos para generar tu carta astral personalizada</p>
        `;
        container.appendChild(personalSection);
        
        // Formulario para carta astral
        this.birthForm = new BirthForm();
        
        // Segunda sección: Calculadora de Compatibilidad
        const compatibilitySection = document.createElement('div');
        compatibilitySection.className = 'section fade-in';
        compatibilitySection.innerHTML = `
            <h2>Calculadora de Sinergia</h2>
            <p>Descubre la compatibilidad entre dos personas usando datos astronómicos precisos</p>
        `;
        container.appendChild(compatibilitySection);
        
        this.horoscopeResult = new HoroscopeResult();
        const compatibilityForm = this.horoscopeResult.createCompatibilityForm();
        compatibilitySection.appendChild(compatibilityForm);
        
        // Bind compatibility form events
        const compatibilityFormElement = document.getElementById('compatibilityForm');
        if (compatibilityFormElement) {
            compatibilityFormElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCompatibilitySubmit();
            });
        }
    }

    async handleCompatibilitySubmit() {
        // Obtener datos de la primera persona
        const person1Data = this.getPersonData('person1');
        const person2Data = this.getPersonData('person2');
        
        if (!person1Data || !person2Data) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }
        
        try {
            // Usar el componente de compatibilidad actualizado
            await this.horoscopeResult.displayCompatibilityResult(person1Data, person2Data, {
                sign1: 'aries', // Placeholder para fallback
                sign2: 'taurus', // Placeholder para fallback
                score: 50, // Placeholder para fallback
                description: 'Compatibilidad calculada con datos precisos'
            });
        } catch (error) {
            console.error('Error al calcular compatibilidad:', error);
            alert('Error al calcular la compatibilidad. Intenta de nuevo.');
        }
    }

    getPersonData(prefix) {
        const name = document.getElementById(`${prefix}Name`)?.value;
        const birthDate = document.getElementById(`${prefix}BirthDate`)?.value;
        const birthTime = document.getElementById(`${prefix}BirthTime`)?.value;
        const city = document.getElementById(`${prefix}City`)?.value;
        const nation = document.getElementById(`${prefix}Nation`)?.value;
        const timezone = document.getElementById(`${prefix}Timezone`)?.value;
        
        if (!name || !birthDate || !birthTime || !city || !nation || !timezone) {
            return null;
        }
        
        // Parse birth data
        const date = new Date(birthDate + 'T' + birthTime);
        
        return {
            name: name,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            city: city,
            nation: nation,
            timezone: timezone
        };
    }

    loadExploradorPage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>Explorador de Signos</h1>
            <p class="subtitle">Conoce en detalle cada signo del zodiaco</p>
        `;
        
        this.horoscopeResult = new HoroscopeResult();
        const signGallery = this.horoscopeResult.createSignGallery();
        container.appendChild(signGallery);
    }

    loadGuiaPage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>Guía de Planetas y Casas</h1>
            <p class="subtitle">Aprende sobre los elementos fundamentales de la astrología</p>
        `;
        
        this.loadPlanetsSection();
        this.loadHousesSection();
    }

    loadPlanetsSection() {
        const container = document.querySelector('.container');
        
        const planetsSection = document.createElement('div');
        planetsSection.className = 'section fade-in';
        planetsSection.innerHTML = `
            <h2>Los Planetas en Astrología</h2>
            <p>Descubre el significado de cada planeta en tu carta astral</p>
        `;
        
        const planetsGrid = document.createElement('div');
        planetsGrid.className = 'planets-grid';
        
        Object.keys(planets).forEach(planetKey => {
            const planet = planets[planetKey];
            const planetCard = document.createElement('div');
            planetCard.className = 'planet-card';
            planetCard.innerHTML = `
                <div class="planet-symbol">${planet.symbol}</div>
                <h3>${planet.name}</h3>
                <p>${planet.description}</p>
                <p><strong>Significado:</strong> ${planet.meaning}</p>
                <div class="planet-keywords">
                    <h4>Palabras Clave:</h4>
                    <p>${planet.keywords.join(', ')}</p>
                </div>
            `;
            planetsGrid.appendChild(planetCard);
        });
        
        planetsSection.appendChild(planetsGrid);
        container.appendChild(planetsSection);
    }

    loadHousesSection() {
        const container = document.querySelector('.container');
        
        const housesSection = document.createElement('div');
        housesSection.className = 'section fade-in';
        housesSection.innerHTML = `
            <h2>Las 12 Casas Astrológicas</h2>
            <p>Entiende qué área de la vida rige cada casa</p>
        `;
        
        const housesGrid = document.createElement('div');
        housesGrid.className = 'houses-grid';
        
        Object.keys(houses).forEach(houseNumber => {
            const house = houses[houseNumber];
            const houseCard = document.createElement('div');
            houseCard.className = 'house-card';
            houseCard.innerHTML = `
                <div class="house-number">${houseNumber}</div>
                <h3>${house.name}</h3>
                <p><strong>Área:</strong> ${house.area}</p>
                <p>${house.description}</p>
                <div class="house-keywords">
                    <h4>Palabras Clave:</h4>
                    <p>${house.keywords.join(', ')}</p>
                </div>
            `;
            housesGrid.appendChild(houseCard);
        });
        
        housesSection.appendChild(housesGrid);
        container.appendChild(housesSection);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HoroscopeApp();
});