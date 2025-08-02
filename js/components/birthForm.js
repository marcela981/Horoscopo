import { getPersonInfo } from '../utils/horoscopeCalculator.js';
import AstrologyAPI from '../services/astrologyAPI.js';

class BirthForm {
    constructor() {
        this.form = null;
        this.submitButton = null;
        this.resultsContainer = null;
        this.api = new AstrologyAPI();
        this.init();
    }

    init() {
        this.createForm();
        this.bindEvents();
    }

    createForm() {
        const formContainer = document.createElement('div');
        formContainer.className = 'form-container fade-in';
        
        formContainer.innerHTML = `
            <h2>🔮 Descubre tu Destino Estelar</h2>
            <p>Ingresa tu fecha, hora y lugar de nacimiento para obtener tu horóscopo personalizado</p>
            
            <form id="birthForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="birthDate">Fecha de Nacimiento:</label>
                        <input type="date" id="birthDate" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="birthTime">Hora de Nacimiento:</label>
                        <input type="time" id="birthTime" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" placeholder="Tu nombre" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="city">Ciudad de Nacimiento:</label>
                        <input type="text" id="city" placeholder="Ej: Madrid, Barcelona" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="nation">País:</label>
                        <select id="nation" required>
                            <option value="">Selecciona un país</option>
                            <option value="ES">España</option>
                            <option value="MX">México</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="PE">Perú</option>
                            <option value="CL">Chile</option>
                            <option value="VE">Venezuela</option>
                            <option value="US">Estados Unidos</option>
                            <option value="GB">Reino Unido</option>
                            <option value="FR">Francia</option>
                            <option value="DE">Alemania</option>
                            <option value="IT">Italia</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="timezone">Zona Horaria:</label>
                        <select id="timezone" required>
                            <option value="">Selecciona zona horaria</option>
                            <option value="Europe/Madrid">España (Europe/Madrid)</option>
                            <option value="America/Mexico_City">México (America/Mexico_City)</option>
                            <option value="America/Argentina/Buenos_Aires">Argentina (America/Argentina/Buenos_Aires)</option>
                            <option value="America/Bogota">Colombia (America/Bogota)</option>
                            <option value="America/Lima">Perú (America/Lima)</option>
                            <option value="America/Santiago">Chile (America/Santiago)</option>
                            <option value="America/Caracas">Venezuela (America/Caracas)</option>
                            <option value="America/New_York">Estados Unidos Este (America/New_York)</option>
                            <option value="America/Los_Angeles">Estados Unidos Oeste (America/Los_Angeles)</option>
                            <option value="Europe/London">Reino Unido (Europe/London)</option>
                            <option value="Europe/Paris">Francia (Europe/Paris)</option>
                            <option value="Europe/Berlin">Alemania (Europe/Berlin)</option>
                            <option value="Europe/Rome">Italia (Europe/Rome)</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn">🔮 Revelar mi Destino</button>
            </form>
            
            <div id="results" class="results-container" style="display: none;"></div>
        `;
        
        document.querySelector('.container').appendChild(formContainer);
        
        this.form = document.getElementById('birthForm');
        this.submitButton = this.form.querySelector('.btn');
        this.resultsContainer = document.getElementById('results');
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const birthDate = document.getElementById('birthDate').value;
        const birthTime = document.getElementById('birthTime').value;
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const nation = document.getElementById('nation').value;
        const timezone = document.getElementById('timezone').value;
        
        if (!birthDate || !birthTime || !name || !city || !nation || !timezone) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        this.submitButton.textContent = '🔮 Calculando...';
        this.submitButton.disabled = true;
        
        try {
            console.log('Iniciando cálculo de horóscopo...');
            
            // Obtener datos locales para signos
            const personInfo = getPersonInfo(birthDate, birthTime);
            console.log('Datos calculados:', personInfo);
            
            // Agregar información de ubicación
            personInfo.location = {
                name: name,
                city: city,
                nation: nation,
                timezone: timezone
            };
            
            // Intentar obtener horóscopo de la API
            try {
                console.log('Intentando obtener horóscopo de la API...');
                const apiHoroscope = await this.api.getDailyHoroscope(personInfo.solarSign);
                console.log('Horóscopo de API obtenido:', apiHoroscope);
                
                // Combinar datos locales con horóscopo de API
                personInfo.apiHoroscope = apiHoroscope;
                this.displayResultsWithAPI(personInfo);
            } catch (apiError) {
                console.log('API no disponible, usando horóscopo local:', apiError);
                // Usar horóscopo local como fallback
                this.displayLocalResults(personInfo);
            }
            
        } catch (error) {
            console.error('Error al calcular:', error);
            alert('Hubo un error al calcular tu horóscopo. Intenta de nuevo.');
        } finally {
            this.submitButton.textContent = '🔮 Revelar mi Destino';
            this.submitButton.disabled = false;
        }
    }

    displayAPIResults(birthChartData, natalAspects, birthData) {
        this.resultsContainer.innerHTML = `
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>🎯 Tu Carta Astral</h3>
                <div class="birth-info">
                    <p><strong>Nombre:</strong> ${birthData.name}</p>
                    <p><strong>Fecha:</strong> ${birthData.year}-${birthData.month}-${birthData.day}</p>
                    <p><strong>Hora:</strong> ${birthData.hour}:${birthData.minute}</p>
                    <p><strong>Lugar:</strong> ${birthData.city}, ${birthData.nation}</p>
                </div>
            </div>
            
            <div class="result-card fade-in">
                <h3>☀️ Tu Signo Solar</h3>
                ${this.formatSolarSign(birthChartData)}
            </div>
            
            <div class="result-card fade-in">
                <h3>☽ Tu Signo Lunar</h3>
                ${this.formatLunarSign(birthChartData)}
            </div>
            
            <div class="result-card fade-in">
                <h3>🌅 Tu Ascendente</h3>
                ${this.formatAscendant(birthChartData)}
            </div>
            
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>📊 Tu Horóscopo del Día</h3>
                <div class="horoscope-text">
                    ${this.generateDailyHoroscope(birthChartData)}
                </div>
            </div>
        `;
        
        this.resultsContainer.style.display = 'grid';
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    displayLocalResults(personInfo) {
        console.log('Mostrando resultados locales:', personInfo);
        
        this.resultsContainer.innerHTML = `
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>🎯 Tu Información Astral</h3>
                <div class="birth-info">
                    <p><strong>Nombre:</strong> ${personInfo.location?.name || 'Usuario'}</p>
                    <p><strong>Fecha:</strong> ${new Date(document.getElementById('birthDate').value).toLocaleDateString('es-ES')}</p>
                    <p><strong>Hora:</strong> ${document.getElementById('birthTime').value}</p>
                    <p><strong>Lugar:</strong> ${personInfo.location?.city || 'Ciudad'}, ${personInfo.location?.nation || 'País'}</p>
                </div>
            </div>
            
            <div class="result-card fade-in">
                <h3>☀️ Tu Signo Solar</h3>
                <div class="sign-image">${personInfo.solarSignData.symbol}</div>
                <h4>${personInfo.solarSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.solarSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.solarSignData.planet}</p>
                <p>${personInfo.solarSignData.description}</p>
            </div>
            
            <div class="result-card fade-in">
                <h3>☽ Tu Signo Lunar</h3>
                <div class="sign-image">${personInfo.lunarSignData.symbol}</div>
                <h4>${personInfo.lunarSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.lunarSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.lunarSignData.planet}</p>
                <p>${personInfo.lunarSignData.description}</p>
            </div>
            
            <div class="result-card fade-in">
                <h3>🌅 Tu Signo Ascendente</h3>
                <div class="sign-image">${personInfo.ascendantSignData.symbol}</div>
                <h4>${personInfo.ascendantSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.ascendantSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.ascendantSignData.planet}</p>
                <p>${personInfo.ascendantSignData.description}</p>
            </div>
            
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>📊 Tu Horóscopo del Día</h3>
                <p class="horoscope-text">${personInfo.dailyHoroscope}</p>
            </div>
        `;
        
        this.resultsContainer.style.display = 'grid';
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    displayResultsWithAPI(personInfo) {
        console.log('Mostrando resultados con API:', personInfo);
        
        // Extraer el texto del horóscopo de la API
        let apiHoroscopeText = "Las estrellas tienen un mensaje especial para ti hoy.";
        if (personInfo.apiHoroscope && personInfo.apiHoroscope.horoscope) {
            apiHoroscopeText = personInfo.apiHoroscope.horoscope;
        } else if (personInfo.apiHoroscope && typeof personInfo.apiHoroscope === 'string') {
            apiHoroscopeText = personInfo.apiHoroscope;
        }
        
        this.resultsContainer.innerHTML = `
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>🎯 Tu Información Astral</h3>
                <div class="birth-info">
                    <p><strong>Nombre:</strong> ${personInfo.location?.name || 'Usuario'}</p>
                    <p><strong>Fecha:</strong> ${new Date(document.getElementById('birthDate').value).toLocaleDateString('es-ES')}</p>
                    <p><strong>Hora:</strong> ${document.getElementById('birthTime').value}</p>
                    <p><strong>Lugar:</strong> ${personInfo.location?.city || 'Ciudad'}, ${personInfo.location?.nation || 'País'}</p>
                </div>
            </div>
            
            <div class="result-card fade-in">
                <h3>☀️ Tu Signo Solar</h3>
                <div class="sign-image">${personInfo.solarSignData.symbol}</div>
                <h4>${personInfo.solarSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.solarSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.solarSignData.planet}</p>
                <p>${personInfo.solarSignData.description}</p>
            </div>
            
            <div class="result-card fade-in">
                <h3>☽ Tu Signo Lunar</h3>
                <div class="sign-image">${personInfo.lunarSignData.symbol}</div>
                <h4>${personInfo.lunarSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.lunarSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.lunarSignData.planet}</p>
                <p>${personInfo.lunarSignData.description}</p>
            </div>
            
            <div class="result-card fade-in">
                <h3>🌅 Tu Signo Ascendente</h3>
                <div class="sign-image">${personInfo.ascendantSignData.symbol}</div>
                <h4>${personInfo.ascendantSignData.name}</h4>
                <p><strong>Elemento:</strong> ${personInfo.ascendantSignData.element}</p>
                <p><strong>Planeta:</strong> ${personInfo.ascendantSignData.planet}</p>
                <p>${personInfo.ascendantSignData.description}</p>
            </div>
            
            <div class="result-card fade-in" style="grid-column: 1 / -1;">
                <h3>📊 Tu Horóscopo del Día</h3>
                <p class="horoscope-text">${apiHoroscopeText}</p>
                <div class="horoscope-source">
                    <small>✨ Horóscopo proporcionado por la API de astrología</small>
                </div>
            </div>
        `;
        
        this.resultsContainer.style.display = 'grid';
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    formatSolarSign(birthChartData) {
        if (!birthChartData.planets?.Sun) return '<p>No hay datos del Sol disponibles</p>';
        
        const sunData = birthChartData.planets.Sun;
        return `
            <div class="sign-image">☀️</div>
            <h4>Sol en ${sunData.sign}</h4>
            <p><strong>Grado:</strong> ${sunData.degree}°</p>
            <p><strong>Elemento:</strong> ${this.getSignElement(sunData.sign)}</p>
            <p>Tu identidad y esencia se expresan a través de las cualidades de ${sunData.sign}.</p>
        `;
    }

    formatLunarSign(birthChartData) {
        if (!birthChartData.planets?.Moon) return '<p>No hay datos de la Luna disponibles</p>';
        
        const moonData = birthChartData.planets.Moon;
        return `
            <div class="sign-image">☽</div>
            <h4>Luna en ${moonData.sign}</h4>
            <p><strong>Grado:</strong> ${moonData.degree}°</p>
            <p><strong>Elemento:</strong> ${this.getSignElement(moonData.sign)}</p>
            <p>Tus emociones y necesidades internas están influenciadas por ${moonData.sign}.</p>
        `;
    }

    formatAscendant(birthChartData) {
        if (!birthChartData.planets?.Ascendant) return '<p>No hay datos del Ascendente disponibles</p>';
        
        const ascData = birthChartData.planets.Ascendant;
        return `
            <div class="sign-image">🌅</div>
            <h4>Ascendente en ${ascData.sign}</h4>
            <p><strong>Grado:</strong> ${ascData.degree}°</p>
            <p><strong>Elemento:</strong> ${this.getSignElement(ascData.sign)}</p>
            <p>La máscara que muestras al mundo está influenciada por ${ascData.sign}.</p>
        `;
    }

    generateDailyHoroscope(birthChartData) {
        // Generar horóscopo basado en el signo solar
        if (!birthChartData.planets?.Sun) {
            return "Las estrellas tienen un mensaje especial para ti hoy. Confía en tu intuición y sigue tu corazón.";
        }
        
        const sunSign = birthChartData.planets.Sun.sign;
        const horoscopes = {
            'Aries': "Hoy es un día perfecto para tomar la iniciativa. Tu energía natural te llevará a grandes logros. Confía en tu instinto y no dudes en expresar tus ideas.",
            'Taurus': "La estabilidad será tu mejor aliada hoy. Toma decisiones prácticas y confía en tu perseverancia. Los resultados llegarán con paciencia.",
            'Gemini': "Tu curiosidad intelectual te llevará a descubrir cosas fascinantes hoy. Comunica tus ideas con claridad y conecta con personas interesantes.",
            'Cancer': "Tus emociones estarán muy presentes hoy. Escucha tu intuición y protege a quienes amas. El hogar será tu refugio perfecto.",
            'Leo': "El sol brilla especialmente para ti hoy. Tu carisma natural atraerá atención positiva. Es momento de brillar y mostrar tu creatividad.",
            'Virgo': "Tu atención al detalle será invaluable hoy. Analiza las situaciones con precisión y encuentra soluciones prácticas a los problemas.",
            'Libra': "El equilibrio será tu tema principal hoy. Busca la armonía en todas tus relaciones y decisiones. Tu diplomacia será muy valorada.",
            'Scorpio': "Tu intensidad emocional será tu superpoder hoy. Profundiza en las conexiones importantes y transforma lo que necesita cambio.",
            'Sagittarius': "La aventura te llama hoy. Explora nuevos territorios, tanto físicos como intelectuales. Tu optimismo te guiará hacia el éxito.",
            'Capricorn': "Tu ambición y disciplina te llevarán al éxito hoy. Trabaja duro en tus metas y no dudes en tomar responsabilidades importantes.",
            'Aquarius': "Tu originalidad y pensamiento innovador brillarán hoy. Rompe con las convenciones y propón ideas revolucionarias.",
            'Pisces': "Tu intuición y espiritualidad estarán muy activas hoy. Conecta con tu mundo interior y confía en tus percepciones psíquicas."
        };
        
        return horoscopes[sunSign] || "Las estrellas tienen un mensaje especial para ti hoy. Confía en tu intuición y sigue tu corazón.";
    }

    getSignElement(sign) {
        const elements = {
            'Aries': 'Fuego', 'Leo': 'Fuego', 'Sagittarius': 'Fuego',
            'Taurus': 'Tierra', 'Virgo': 'Tierra', 'Capricorn': 'Tierra',
            'Gemini': 'Aire', 'Libra': 'Aire', 'Aquarius': 'Aire',
            'Cancer': 'Agua', 'Scorpio': 'Agua', 'Pisces': 'Agua'
        };
        return elements[sign] || 'Desconocido';
    }
}

export default BirthForm;
