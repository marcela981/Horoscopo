import { zodiacSigns } from '../data/zodiacSigns.js';
import AstrologyAPI from '../services/astrologyAPI.js';

class HoroscopeResult {
    constructor() {
        this.modal = null;
        this.api = new AstrologyAPI();
        this.init();
    }

    init() {
        this.createModal();
    }

    createModal() {
        const modalHTML = `
            <div id="signModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="modalContent"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        this.modal = document.getElementById('signModal');
        this.bindModalEvents();
    }

    bindModalEvents() {
        const closeBtn = this.modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    showSignDetails(signKey) {
        const sign = zodiacSigns[signKey];
        if (!sign) return;
        
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="sign-details fade-in">
                <div class="sign-header">
                    <div class="sign-image large">${sign.symbol}</div>
                    <h2>${sign.name}</h2>
                </div>
                
                <div class="sign-info">
                    <p><strong>Fechas:</strong> ${sign.dates}</p>
                    <p><strong>Elemento:</strong> ${sign.element}</p>
                    <p><strong>Planeta Regente:</strong> ${sign.planet}</p>
                    <p><strong>Modalidad:</strong> ${sign.qualities.modality}</p>
                </div>
                
                <div class="sign-description">
                    <h3>Descripción</h3>
                    <p>${sign.description}</p>
                </div>
                
                <div class="sign-characteristics">
                    <h3>Características Principales</h3>
                    <ul>
                        ${sign.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="sign-details-expanded">
                    <div class="detail-section">
                        <h3>🎯 Partes del Cuerpo</h3>
                        <p>${sign.bodyParts.join(', ')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>🔢 Números de la Suerte</h3>
                        <p>${sign.luckyNumbers.join(', ')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>🎨 Colores de la Suerte</h3>
                        <p>${sign.luckyColors.join(', ')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>💎 Piedras de la Suerte</h3>
                        <p>${sign.luckyStones.join(', ')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>💼 Profesiones Ideales</h3>
                        <p>${sign.bestProfessions.join(', ')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>🏥 Enfoque de Salud</h3>
                        <p>${sign.healthFocus.join(', ')}</p>
                    </div>
                </div>
                
                <div class="sign-compatibility">
                    <h3>Compatibilidad</h3>
                    <p>Se lleva bien con: ${sign.compatibility.join(', ')}</p>
                </div>
            </div>
        `;
        
        this.modal.style.display = 'block';
    }

    closeModal() {
        this.modal.style.display = 'none';
    }

    createSignGallery() {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'signs-gallery fade-in';
        
        const signKeys = Object.keys(zodiacSigns);
        const signHTML = signKeys.map(signKey => {
            const sign = zodiacSigns[signKey];
            return `
                <div class="sign-item" data-sign="${signKey}">
                    <div class="sign-image">${sign.symbol}</div>
                    <h3>${sign.name}</h3>
                    <p><strong>${sign.dates}</strong></p>
                    <p><strong>Elemento:</strong> ${sign.element}</p>
                    <p><strong>Planeta:</strong> ${sign.planet}</p>
                    <p><strong>Modalidad:</strong> ${sign.qualities.modality}</p>
                    <button class="btn btn-small">Ver Detalles Completos</button>
                </div>
            `;
        }).join('');
        
        galleryContainer.innerHTML = signHTML;
        
        // Bind click events
        galleryContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-small')) {
                const signItem = e.target.closest('.sign-item');
                const signKey = signItem.dataset.sign;
                this.showSignDetails(signKey);
            }
        });
        
        return galleryContainer;
    }

    createCompatibilityForm() {
        const formContainer = document.createElement('div');
        formContainer.className = 'form-container fade-in';
        
        formContainer.innerHTML = `
            <h2>💕 Calculadora de Compatibilidad Avanzada</h2>
            <p>Descubre la compatibilidad entre dos personas usando datos astronómicos precisos</p>
            
            <form id="compatibilityForm">
                <div class="compatibility-section">
                    <h3>👤 Primera Persona</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person1Name">Nombre:</label>
                            <input type="text" id="person1Name" placeholder="Nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="person1BirthDate">Fecha de Nacimiento:</label>
                            <input type="date" id="person1BirthDate" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person1BirthTime">Hora de Nacimiento:</label>
                            <input type="time" id="person1BirthTime" required>
                        </div>
                        <div class="form-group">
                            <label for="person1City">Ciudad:</label>
                            <input type="text" id="person1City" placeholder="Ciudad" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person1Nation">País:</label>
                            <select id="person1Nation" required>
                                <option value="">Selecciona país</option>
                                <option value="ES">España</option>
                                <option value="MX">México</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="US">Estados Unidos</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="person1Timezone">Zona Horaria:</label>
                            <select id="person1Timezone" required>
                                <option value="">Selecciona zona horaria</option>
                                <option value="Europe/Madrid">España (Europe/Madrid)</option>
                                <option value="America/Mexico_City">México (America/Mexico_City)</option>
                                <option value="America/Argentina/Buenos_Aires">Argentina (America/Argentina/Buenos_Aires)</option>
                                <option value="America/Bogota">Colombia (America/Bogota)</option>
                                <option value="America/New_York">Estados Unidos Este (America/New_York)</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="compatibility-section">
                    <h3>👤 Segunda Persona</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person2Name">Nombre:</label>
                            <input type="text" id="person2Name" placeholder="Nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="person2BirthDate">Fecha de Nacimiento:</label>
                            <input type="date" id="person2BirthDate" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person2BirthTime">Hora de Nacimiento:</label>
                            <input type="time" id="person2BirthTime" required>
                        </div>
                        <div class="form-group">
                            <label for="person2City">Ciudad:</label>
                            <input type="text" id="person2City" placeholder="Ciudad" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="person2Nation">País:</label>
                            <select id="person2Nation" required>
                                <option value="">Selecciona país</option>
                                <option value="ES">España</option>
                                <option value="MX">México</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="US">Estados Unidos</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="person2Timezone">Zona Horaria:</label>
                            <select id="person2Timezone" required>
                                <option value="">Selecciona zona horaria</option>
                                <option value="Europe/Madrid">España (Europe/Madrid)</option>
                                <option value="America/Mexico_City">México (America/Mexico_City)</option>
                                <option value="America/Argentina/Buenos_Aires">Argentina (America/Argentina/Buenos_Aires)</option>
                                <option value="America/Bogota">Colombia (America/Bogota)</option>
                                <option value="America/New_York">Estados Unidos Este (America/New_York)</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="btn">💕 Calcular Compatibilidad Avanzada</button>
            </form>
            
            <div id="compatibilityResult" class="result-card" style="display: none;"></div>
        `;
        
        return formContainer;
    }

    async displayCompatibilityResult(person1, person2, compatibility) {
        const resultContainer = document.getElementById('compatibilityResult');
        
        try {
            // Intentar usar la API para compatibilidad avanzada
            const [relationshipScore, synastryData] = await Promise.all([
                this.api.getRelationshipScore(person1, person2),
                this.api.getSynastryChart(person1, person2, { language: 'ES' })
            ]);
            
            const score = relationshipScore.score || 0;
            const maxScore = 44;
            const percentage = Math.round((score / maxScore) * 100);
            
            resultContainer.innerHTML = `
                <h3>💕 Resultado de Compatibilidad Avanzada</h3>
                <div class="compatibility-header">
                    <div class="person-info">
                        <h4>👤 ${person1.name}</h4>
                        <p>${person1.year}-${person1.month}-${person1.day} ${person1.hour}:${person1.minute}</p>
                        <p>${person1.city}, ${person1.nation}</p>
                    </div>
                    
                    <div class="compatibility-score">
                        <div class="score-circle" style="--score: ${percentage}%">
                            <span>${percentage}%</span>
                        </div>
                        <p class="score-text">Puntuación: ${score}/${maxScore}</p>
                    </div>
                    
                    <div class="person-info">
                        <h4>👤 ${person2.name}</h4>
                        <p>${person2.year}-${person2.month}-${person2.day} ${person2.hour}:${person2.minute}</p>
                        <p>${person2.city}, ${person2.nation}</p>
                    </div>
                </div>
                
                <div class="score-interpretation">
                    ${this.getScoreInterpretation(percentage)}
                </div>
                
                <div class="synastry-aspects">
                    <h4>⭐ Aspectos de Sinastría</h4>
                    ${this.formatSynastryAspects(synastryData)}
                </div>
                
                <div class="compatibility-recommendations">
                    <h4>💫 Recomendaciones</h4>
                    ${this.generateCompatibilityRecommendations(percentage, synastryData)}
                </div>
            `;
            
        } catch (apiError) {
            console.log('API no disponible, usando datos locales:', apiError);
            // Fallback a datos locales
            const sign1Data = zodiacSigns[compatibility.sign1];
            const sign2Data = zodiacSigns[compatibility.sign2];
            
            resultContainer.innerHTML = `
                <h3>Resultado de Compatibilidad</h3>
                <div class="compatibility-display">
                    <div class="sign-pair">
                        <div class="sign-image">${sign1Data.symbol}</div>
                        <h4>${sign1Data.name}</h4>
                    </div>
                    <div class="compatibility-score">
                        <div class="score-circle" style="--score: ${compatibility.score}%">
                            <span>${compatibility.score}%</span>
                        </div>
                    </div>
                    <div class="sign-pair">
                        <div class="sign-image">${sign2Data.symbol}</div>
                        <h4>${sign2Data.name}</h4>
                    </div>
                </div>
                <div class="compatibility-description">
                    <p>${compatibility.description}</p>
                </div>
            `;
        }
        
        resultContainer.style.display = 'block';
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }

    getScoreInterpretation(percentage) {
        if (percentage >= 80) {
            return `
                <div class="excellent-compatibility">
                    <h4>🌟 Compatibilidad Excelente</h4>
                    <p>¡Una conexión mágica! Esta relación tiene un potencial extraordinario. 
                    Las energías se complementan perfectamente y hay una fuerte atracción kármica.</p>
                    <ul>
                        <li>Comunicación fluida y natural</li>
                        <li>Comprensión mutua profunda</li>
                        <li>Apoyo y crecimiento conjunto</li>
                        <li>Pasiones compartidas</li>
                    </ul>
                </div>
            `;
        } else if (percentage >= 60) {
            return `
                <div class="good-compatibility">
                    <h4>✨ Buena Compatibilidad</h4>
                    <p>Hay una buena base para una relación armoniosa. Con comunicación y comprensión, 
                    pueden construir algo hermoso juntos.</p>
                    <ul>
                        <li>Intereses complementarios</li>
                        <li>Potencial de crecimiento</li>
                        <li>Comunicación efectiva</li>
                        <li>Respeto mutuo</li>
                    </ul>
                </div>
            `;
        } else if (percentage >= 40) {
            return `
                <div class="moderate-compatibility">
                    <h4>⚖️ Compatibilidad Moderada</h4>
                    <p>La relación tiene desafíos pero también oportunidades. Los diferentes enfoques 
                    pueden enriquecerse mutuamente con esfuerzo.</p>
                    <ul>
                        <li>Diferencias que pueden complementarse</li>
                        <li>Oportunidades de aprendizaje</li>
                        <li>Necesidad de comunicación abierta</li>
                        <li>Potencial de crecimiento personal</li>
                    </ul>
                </div>
            `;
        } else {
            return `
                <div class="challenging-compatibility">
                    <h4>🌪️ Compatibilidad Desafiante</h4>
                    <p>Esta relación requerirá más esfuerzo y comprensión. Las diferencias pueden 
                    ser oportunidades de crecimiento mutuo si se abordan con paciencia.</p>
                    <ul>
                        <li>Necesidad de comunicación clara</li>
                        <li>Oportunidades de crecimiento personal</li>
                        <li>Potencial de transformación</li>
                        <li>Importancia del respeto mutuo</li>
                    </ul>
                </div>
            `;
        }
    }

    formatSynastryAspects(synastryData) {
        if (!synastryData.aspects || synastryData.aspects.length === 0) {
            return '<p>No hay aspectos de sinastría disponibles</p>';
        }
        
        const aspectSymbols = {
            'conjunction': '☌', 'opposition': '☍', 'trine': '△',
            'square': '□', 'sextile': '⚹', 'quintile': 'Q'
        };
        
        return synastryData.aspects
            .slice(0, 8) // Mostrar solo los primeros 8 aspectos
            .map(aspect => `
                <div class="synastry-aspect">
                    <span class="aspect-planets">${aspect.planet1} ${aspectSymbols[aspect.aspect] || aspect.aspect} ${aspect.planet2}</span>
                    <span class="aspect-degree">${aspect.degree}°</span>
                    <span class="aspect-orb">±${aspect.orb}°</span>
                    <span class="aspect-nature">${this.getAspectNature(aspect.aspect)}</span>
                </div>
            `).join('');
    }

    getAspectNature(aspect) {
        const natures = {
            'conjunction': 'Fusión',
            'opposition': 'Tensión',
            'trine': 'Armonía',
            'square': 'Desafío',
            'sextile': 'Oportunidad',
            'quintile': 'Creatividad'
        };
        
        return natures[aspect] || 'Especial';
    }

    generateCompatibilityRecommendations(percentage, synastryData) {
        let recommendations = '<div class="recommendations-content">';
        
        if (percentage >= 80) {
            recommendations += `
                <div class="recommendation-section">
                    <h4>🌟 Para Relaciones Excelentes</h4>
                    <ul>
                        <li>Mantén la comunicación abierta y honesta</li>
                        <li>Celebra las similitudes y diferencias</li>
                        <li>Apoya el crecimiento personal del otro</li>
                        <li>Confía en la conexión natural</li>
                        <li>Disfruta del viaje juntos</li>
                    </ul>
                </div>
            `;
        } else if (percentage >= 60) {
            recommendations += `
                <div class="recommendation-section">
                    <h4>✨ Para Relaciones Buenos</h4>
                    <ul>
                        <li>Practica la comunicación activa</li>
                        <li>Busca actividades que disfruten ambos</li>
                        <li>Respeten los espacios individuales</li>
                        <li>Celebren los logros del otro</li>
                        <li>Mantengan la paciencia y comprensión</li>
                    </ul>
                </div>
            `;
        } else if (percentage >= 40) {
            recommendations += `
                <div class="recommendation-section">
                    <h4>⚖️ Para Relaciones Moderadas</h4>
                    <ul>
                        <li>Comuniquen claramente las expectativas</li>
                        <li>Busquen puntos de encuentro</li>
                        <li>Practiquen la empatía mutua</li>
                        <li>Sean pacientes con las diferencias</li>
                        <li>Consideren terapia de pareja si es necesario</li>
                    </ul>
                </div>
            `;
        } else {
            recommendations += `
                <div class="recommendation-section">
                    <h4>🌪️ Para Relaciones Desafiantes</h4>
                    <ul>
                        <li>Establezcan límites claros</li>
                        <li>Busquen ayuda profesional si es necesario</li>
                        <li>Practiquen la comunicación no violenta</li>
                        <li>Respeten las diferencias fundamentales</li>
                        <li>Consideren si la relación es saludable</li>
                    </ul>
                </div>
            `;
        }
        
        recommendations += '</div>';
        return recommendations;
    }
}

export default HoroscopeResult;
