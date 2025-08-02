import { zodiacSigns, planets, houses, astrologicalData } from '../data/zodiacSigns.js';

// Función para calcular aspectos entre planetas
function calculateAspects(planet1Pos, planet2Pos) {
    const angle = Math.abs(planet1Pos - planet2Pos);
    const aspects = astrologicalData.aspects;
    
    for (const [aspectName, aspect] of Object.entries(aspects)) {
        const orb = Math.abs(angle - aspect.angle);
        if (orb <= aspect.orb) {
            return {
                type: aspectName,
                angle: angle,
                orb: orb,
                nature: aspect.nature,
                description: aspect.description
            };
        }
    }
    
    return null;
}

// Función para calcular la carta astral completa
function calculateBirthChart(birthDate, birthTime, birthPlace) {
    const date = new Date(birthDate + 'T' + birthTime);
    const solarSign = getSolarSign(date.getMonth() + 1, date.getDate());
    const lunarSign = calculateLunarSign(date, solarSign);
    const ascendantSign = calculateAscendant(date, solarSign, birthPlace);
    
    // Calcular posiciones planetarias (simplificado)
    const planetaryPositions = calculatePlanetaryPositions(date);
    
    // Calcular aspectos
    const aspects = calculateChartAspects(planetaryPositions);
    
    return {
        solarSign,
        lunarSign,
        ascendantSign,
        planetaryPositions,
        aspects,
        houses: calculateHousePositions(ascendantSign),
        chartData: {
            date: date,
            solarSignData: zodiacSigns[solarSign],
            lunarSignData: zodiacSigns[lunarSign],
            ascendantSignData: zodiacSigns[ascendantSign]
        }
    };
}

// Función para calcular signo lunar más preciso
function calculateLunarSign(birthDate, solarSign) {
    // Algoritmo simplificado basado en la fecha
    const dayOfYear = Math.floor((birthDate - new Date(birthDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const lunarCycle = 29.5; // días del ciclo lunar
    const lunarDay = (dayOfYear % lunarCycle) / lunarCycle;
    
    const signKeys = Object.keys(zodiacSigns);
    const lunarIndex = Math.floor(lunarDay * 12);
    return signKeys[lunarIndex];
}

// Función para calcular ascendente más preciso
function calculateAscendant(birthDate, solarSign, birthPlace) {
    // Algoritmo simplificado basado en hora y signo solar
    const hour = birthDate.getHours();
    const signKeys = Object.keys(zodiacSigns);
    const solarIndex = signKeys.indexOf(solarSign);
    
    // El ascendente cambia aproximadamente cada 2 horas
    const ascendantOffset = Math.floor(hour / 2);
    const ascendantIndex = (solarIndex + ascendantOffset) % 12;
    
    return signKeys[ascendantIndex];
}

// Función para calcular posiciones planetarias
function calculatePlanetaryPositions(birthDate) {
    const positions = {};
    const signKeys = Object.keys(zodiacSigns);
    
    // Cálculo simplificado de posiciones planetarias
    Object.keys(planets).forEach(planetKey => {
        const planet = planets[planetKey];
        const dayOfYear = Math.floor((birthDate - new Date(birthDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        
        // Cada planeta tiene una velocidad diferente
        const planetSpeeds = {
            sun: 1,
            moon: 13,
            mercury: 1.4,
            venus: 1.2,
            mars: 0.8,
            jupiter: 0.2,
            saturn: 0.1,
            uranus: 0.04,
            neptune: 0.02,
            pluto: 0.01
        };
        
        const speed = planetSpeeds[planetKey] || 1;
        const position = (dayOfYear * speed) % 12;
        const signIndex = Math.floor(position);
        
        positions[planetKey] = {
            sign: signKeys[signIndex],
            degree: (position - signIndex) * 30,
            signData: zodiacSigns[signKeys[signIndex]]
        };
    });
    
    return positions;
}

// Función para calcular aspectos de la carta
function calculateChartAspects(planetaryPositions) {
    const aspects = [];
    const planetKeys = Object.keys(planetaryPositions);
    
    for (let i = 0; i < planetKeys.length; i++) {
        for (let j = i + 1; j < planetKeys.length; j++) {
            const planet1 = planetKeys[i];
            const planet2 = planetKeys[j];
            const pos1 = planetaryPositions[planet1];
            const pos2 = planetaryPositions[planet2];
            
            const angle1 = getSignDegree(pos1.sign) + pos1.degree;
            const angle2 = getSignDegree(pos2.sign) + pos2.degree;
            
            const aspect = calculateAspects(angle1, angle2);
            if (aspect) {
                aspects.push({
                    planet1,
                    planet2,
                    aspect: aspect,
                    description: `${planets[planet1].name} ${aspect.description} ${planets[planet2].name}`
                });
            }
        }
    }
    
    return aspects;
}

// Función auxiliar para obtener el grado del signo
function getSignDegree(signKey) {
    const signKeys = Object.keys(zodiacSigns);
    const index = signKeys.indexOf(signKey);
    return index * 30;
}

// Función para calcular posiciones de casas
function calculateHousePositions(ascendantSign) {
    const houses = {};
    const signKeys = Object.keys(zodiacSigns);
    const ascendantIndex = signKeys.indexOf(ascendantSign);
    
    for (let i = 1; i <= 12; i++) {
        const houseIndex = (ascendantIndex + i - 1) % 12;
        houses[i] = {
            sign: signKeys[houseIndex],
            signData: zodiacSigns[signKeys[houseIndex]]
        };
    }
    
    return houses;
}

// Función para análisis de compatibilidad avanzado
function advancedCompatibilityAnalysis(person1, person2) {
    const analysis = {
        solarCompatibility: analyzeSolarCompatibility(person1.solarSign, person2.solarSign),
        lunarCompatibility: analyzeLunarCompatibility(person1.lunarSign, person2.lunarSign),
        ascendantCompatibility: analyzeAscendantCompatibility(person1.ascendantSign, person2.ascendantSign),
        elementalCompatibility: analyzeElementalCompatibility(person1.solarSign, person2.solarSign),
        overallScore: 0,
        detailedAnalysis: {}
    };
    
    // Calcular puntuación general
    analysis.overallScore = (
        analysis.solarCompatibility.score * 0.4 +
        analysis.lunarCompatibility.score * 0.3 +
        analysis.ascendantCompatibility.score * 0.2 +
        analysis.elementalCompatibility.score * 0.1
    );
    
    return analysis;
}

// Análisis de compatibilidad solar
function analyzeSolarCompatibility(sign1, sign2) {
    const sign1Data = zodiacSigns[sign1];
    const sign2Data = zodiacSigns[sign2];
    
    let score = 50;
    let description = "";
    
    // Compatibilidad directa
    if (sign1Data.compatibility.includes(sign2Data.name)) {
        score += 30;
        description += "Excelente compatibilidad solar. ";
    }
    
    // Análisis de elementos
    if (sign1Data.element === sign2Data.element) {
        score += 15;
        description += "Comparten el mismo elemento. ";
    } else if (areElementsCompatible(sign1Data.element, sign2Data.element)) {
        score += 10;
        description += "Sus elementos se complementan. ";
    }
    
    // Análisis de modalidades
    if (sign1Data.qualities.modality === sign2Data.qualities.modality) {
        score += 5;
        description += "Misma modalidad astrológica. ";
    }
    
    return { score, description };
}

// Análisis de compatibilidad lunar
function analyzeLunarCompatibility(sign1, sign2) {
    const sign1Data = zodiacSigns[sign1];
    const sign2Data = zodiacSigns[sign2];
    
    let score = 50;
    let description = "";
    
    // Compatibilidad emocional
    if (sign1Data.element === sign2Data.element) {
        score += 20;
        description += "Compatibilidad emocional fuerte. ";
    }
    
    // Análisis de elementos para emociones
    if (sign1Data.element === "Agua" && sign2Data.element === "Agua") {
        score += 15;
        description += "Profunda conexión emocional. ";
    } else if (sign1Data.element === "Fuego" && sign2Data.element === "Fuego") {
        score += 10;
        description += "Pasión compartida. ";
    }
    
    return { score, description };
}

// Análisis de compatibilidad ascendente
function analyzeAscendantCompatibility(sign1, sign2) {
    const sign1Data = zodiacSigns[sign1];
    const sign2Data = zodiacSigns[sign2];
    
    let score = 50;
    let description = "";
    
    // Compatibilidad de personalidad externa
    if (sign1Data.qualities.modality === sign2Data.qualities.modality) {
        score += 15;
        description += "Estilos de vida compatibles. ";
    }
    
    // Análisis de elementos para personalidad
    if (areElementsCompatible(sign1Data.element, sign2Data.element)) {
        score += 10;
        description += "Personalidades complementarias. ";
    }
    
    return { score, description };
}

// Análisis de compatibilidad elemental
function analyzeElementalCompatibility(sign1, sign2) {
    const sign1Data = zodiacSigns[sign1];
    const sign2Data = zodiacSigns[sign2];
    
    let score = 50;
    let description = "";
    
    const element1 = sign1Data.element.toLowerCase();
    const element2 = sign2Data.element.toLowerCase();
    
    // Verificar compatibilidad elemental
    const elementCompatibility = astrologicalData.elements[element1];
    if (elementCompatibility && elementCompatibility.compatibility.includes(element2)) {
        score += 25;
        description += "Elementos altamente compatibles. ";
    } else if (element1 === element2) {
        score += 20;
        description += "Mismo elemento - conexión profunda. ";
    }
    
    return { score, description };
}

// Función auxiliar para verificar compatibilidad de elementos
function areElementsCompatible(element1, element2) {
    const elementCompatibility = astrologicalData.elements[element1.toLowerCase()];
    return elementCompatibility && elementCompatibility.compatibility.includes(element2.toLowerCase());
}

// Función para generar horóscopo personalizado avanzado
function generateAdvancedHoroscope(birthChart, currentDate) {
    const horoscope = {
        solarInfluence: analyzeSolarInfluence(birthChart.solarSign, currentDate),
        lunarInfluence: analyzeLunarInfluence(birthChart.lunarSign, currentDate),
        planetaryTransits: analyzePlanetaryTransits(birthChart.planetaryPositions, currentDate),
        dailyFocus: generateDailyFocus(birthChart),
        recommendations: generateRecommendations(birthChart)
    };
    
    return horoscope;
}

// Análisis de influencia solar
function analyzeSolarInfluence(solarSign, currentDate) {
    const signData = zodiacSigns[solarSign];
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    
    // Determinar fase del ciclo solar
    const solarPhase = determineSolarPhase(currentMonth, currentDay, solarSign);
    
    return {
        energy: solarPhase.energy,
        focus: solarPhase.focus,
        challenges: solarPhase.challenges,
        opportunities: solarPhase.opportunities
    };
}

// Determinar fase del ciclo solar
function determineSolarPhase(month, day, solarSign) {
    const signKeys = Object.keys(zodiacSigns);
    const signIndex = signKeys.indexOf(solarSign);
    const signStartMonth = Math.floor(signIndex * 30 / 30.44) + 1;
    const signStartDay = 21; // Aproximado
    
    // Calcular días desde el inicio del signo
    let daysInSign = 0;
    if (month === signStartMonth) {
        daysInSign = day - signStartDay;
    } else {
        daysInSign = day + (30 - signStartDay);
    }
    
    // Determinar fase (0-30 días)
    const phase = daysInSign % 30;
    
    if (phase < 10) {
        return {
            energy: "Alta",
            focus: "Inicio y nuevos proyectos",
            challenges: "Impulsividad",
            opportunities: "Liderazgo y acción"
        };
    } else if (phase < 20) {
        return {
            energy: "Estable",
            focus: "Desarrollo y consolidación",
            challenges: "Rutina",
            opportunities: "Crecimiento y estabilidad"
        };
    } else {
        return {
            energy: "Reflexiva",
            focus: "Evaluación y preparación",
            challenges: "Indecisión",
            opportunities: "Sabiduría y preparación"
        };
    }
}

// Análisis de influencia lunar
function analyzeLunarInfluence(lunarSign, currentDate) {
    const signData = zodiacSigns[lunarSign];
    
    return {
        emotionalState: determineEmotionalState(signData.element),
        intuition: determineIntuitionLevel(signData.element),
        relationships: determineRelationshipFocus(signData.element),
        selfCare: determineSelfCareNeeds(signData.element)
    };
}

// Determinar estado emocional
function determineEmotionalState(element) {
    const emotionalStates = {
        "Fuego": "Apasionado y energético",
        "Tierra": "Estable y práctico",
        "Aire": "Intelectual y comunicativo",
        "Agua": "Intuitivo y emocional"
    };
    
    return emotionalStates[element] || "Equilibrado";
}

// Determinar nivel de intuición
function determineIntuitionLevel(element) {
    const intuitionLevels = {
        "Fuego": "Intuición basada en acción",
        "Tierra": "Intuición práctica",
        "Aire": "Intuición intelectual",
        "Agua": "Intuición emocional profunda"
    };
    
    return intuitionLevels[element] || "Intuición natural";
}

// Determinar enfoque en relaciones
function determineRelationshipFocus(element) {
    const relationshipFocus = {
        "Fuego": "Pasión y aventura",
        "Tierra": "Estabilidad y compromiso",
        "Aire": "Comunicación y libertad",
        "Agua": "Profundidad emocional"
    };
    
    return relationshipFocus[element] || "Equilibrio";
}

// Determinar necesidades de autocuidado
function determineSelfCareNeeds(element) {
    const selfCareNeeds = {
        "Fuego": "Actividad física y expresión creativa",
        "Tierra": "Rutinas saludables y conexión con la naturaleza",
        "Aire": "Estimulación intelectual y socialización",
        "Agua": "Tiempo de reflexión y cuidado emocional"
    };
    
    return selfCareNeeds[element] || "Autocuidado general";
}

// Análisis de tránsitos planetarios
function analyzePlanetaryTransits(planetaryPositions, currentDate) {
    const transits = {};
    
    Object.keys(planetaryPositions).forEach(planetKey => {
        const planet = planets[planetKey];
        const position = planetaryPositions[planetKey];
        
        transits[planetKey] = {
            planet: planet.name,
            influence: determinePlanetaryInfluence(planetKey, position.sign),
            advice: generatePlanetaryAdvice(planetKey, position.sign)
        };
    });
    
    return transits;
}

// Determinar influencia planetaria
function determinePlanetaryInfluence(planetKey, signKey) {
    const planet = planets[planetKey];
    const sign = zodiacSigns[signKey];
    
    const influences = {
        sun: "Energía vital y expresión personal",
        moon: "Emociones y necesidades internas",
        mercury: "Comunicación y pensamiento",
        venus: "Amor y valores estéticos",
        mars: "Energía y acción",
        jupiter: "Expansión y sabiduría",
        saturn: "Responsabilidad y disciplina",
        uranus: "Innovación y cambio",
        neptune: "Espiritualidad e intuición",
        pluto: "Transformación y poder"
    };
    
    return influences[planetKey] || "Influencia general";
}

// Generar consejo planetario
function generatePlanetaryAdvice(planetKey, signKey) {
    const advice = {
        sun: "Confía en tu identidad y expresa tu creatividad",
        moon: "Escucha tus emociones y cuida tu mundo interior",
        mercury: "Comunica claramente y mantén tu mente activa",
        venus: "Busca la belleza y armonía en tus relaciones",
        mars: "Actúa con determinación y canaliza tu energía",
        jupiter: "Expande tus horizontes y comparte tu sabiduría",
        saturn: "Toma responsabilidad y construye bases sólidas",
        uranus: "Rompe con lo establecido y sé innovador",
        neptune: "Conecta con tu espiritualidad y sigue tu intuición",
        pluto: "Transforma lo que necesita cambio y ejerce tu poder"
    };
    
    return advice[planetKey] || "Mantén el equilibrio en todas las áreas";
}

// Generar enfoque diario
function generateDailyFocus(birthChart) {
    const focus = {
        primary: determinePrimaryFocus(birthChart.solarSign),
        secondary: determineSecondaryFocus(birthChart.lunarSign),
        challenge: determineDailyChallenge(birthChart.ascendantSign),
        opportunity: determineDailyOpportunity(birthChart.solarSign)
    };
    
    return focus;
}

// Determinar enfoque primario
function determinePrimaryFocus(solarSign) {
    const signData = zodiacSigns[solarSign];
    const focuses = {
        "Fuego": "Liderazgo y acción",
        "Tierra": "Estabilidad y trabajo",
        "Aire": "Comunicación y aprendizaje",
        "Agua": "Emociones y intuición"
    };
    
    return focuses[signData.element] || "Desarrollo personal";
}

// Determinar enfoque secundario
function determineSecondaryFocus(lunarSign) {
    const signData = zodiacSigns[lunarSign];
    return `Cuidado de ${signData.bodyParts[0].toLowerCase()}`;
}

// Determinar desafío diario
function determineDailyChallenge(ascendantSign) {
    const signData = zodiacSigns[ascendantSign];
    return `Superar ${signData.characteristics[0].toLowerCase()}`;
}

// Determinar oportunidad diaria
function determineDailyOpportunity(solarSign) {
    const signData = zodiacSigns[solarSign];
    return `Desarrollar ${signData.bestProfessions[0].toLowerCase()}`;
}

// Generar recomendaciones
function generateRecommendations(birthChart) {
    const recommendations = {
        health: generateHealthRecommendations(birthChart),
        relationships: generateRelationshipRecommendations(birthChart),
        career: generateCareerRecommendations(birthChart),
        personal: generatePersonalRecommendations(birthChart)
    };
    
    return recommendations;
}

// Generar recomendaciones de salud
function generateHealthRecommendations(birthChart) {
    const solarSign = birthChart.solarSign;
    const signData = zodiacSigns[solarSign];
    
    return {
        focus: signData.healthFocus,
        activities: generateHealthActivities(signData.element),
        advice: `Presta atención a tu ${signData.bodyParts[0].toLowerCase()}`
    };
}

// Generar actividades de salud
function generateHealthActivities(element) {
    const activities = {
        "Fuego": ["Ejercicio cardiovascular", "Deportes competitivos", "Actividades al aire libre"],
        "Tierra": ["Yoga", "Caminatas en naturaleza", "Rutinas de fuerza"],
        "Aire": ["Baile", "Deportes de equipo", "Actividades sociales"],
        "Agua": ["Natación", "Meditación", "Actividades acuáticas"]
    };
    
    return activities[element] || ["Ejercicio moderado", "Estiramientos", "Respiración profunda"];
}

// Generar recomendaciones de relaciones
function generateRelationshipRecommendations(birthChart) {
    const lunarSign = birthChart.lunarSign;
    const signData = zodiacSigns[lunarSign];
    
    return {
        focus: signData.element === "Agua" ? "Profundidad emocional" : "Comunicación clara",
        advice: `Conecta con personas que comparten tu ${signData.element.toLowerCase()}`,
        activities: generateRelationshipActivities(signData.element)
    };
}

// Generar actividades de relaciones
function generateRelationshipActivities(element) {
    const activities = {
        "Fuego": ["Actividades aventureras", "Proyectos creativos", "Celebraciones"],
        "Tierra": ["Cenas caseras", "Actividades prácticas", "Tiempo de calidad"],
        "Aire": ["Conversaciones profundas", "Actividades intelectuales", "Viajes cortos"],
        "Agua": ["Tiempo íntimo", "Actividades artísticas", "Momentos de reflexión"]
    };
    
    return activities[element] || ["Tiempo juntos", "Comunicación abierta", "Actividades compartidas"];
}

// Generar recomendaciones de carrera
function generateCareerRecommendations(birthChart) {
    const solarSign = birthChart.solarSign;
    const signData = zodiacSigns[solarSign];
    
    return {
        focus: signData.bestProfessions[0],
        advice: `Desarrolla tus habilidades de ${signData.characteristics[0].toLowerCase()}`,
        opportunities: generateCareerOpportunities(signData.element)
    };
}

// Generar oportunidades de carrera
function generateCareerOpportunities(element) {
    const opportunities = {
        "Fuego": ["Liderazgo", "Emprendimiento", "Innovación"],
        "Tierra": ["Estabilidad", "Organización", "Servicio"],
        "Aire": ["Comunicación", "Educación", "Tecnología"],
        "Agua": ["Cuidado", "Arte", "Psicología"]
    };
    
    return opportunities[element] || ["Desarrollo profesional", "Networking", "Formación continua"];
}

// Generar recomendaciones personales
function generatePersonalRecommendations(birthChart) {
    const ascendantSign = birthChart.ascendantSign;
    const signData = zodiacSigns[ascendantSign];
    
    return {
        focus: `Desarrollar tu ${signData.qualities.modality.toLowerCase()}`,
        advice: `Mantén tu ${signData.element.toLowerCase()} en equilibrio`,
        activities: generatePersonalActivities(signData.element)
    };
}

// Generar actividades personales
function generatePersonalActivities(element) {
    const activities = {
        "Fuego": ["Meditación activa", "Expresión creativa", "Ejercicio energético"],
        "Tierra": ["Jardinería", "Cocina", "Actividades manuales"],
        "Aire": ["Lectura", "Escritura", "Aprendizaje"],
        "Agua": ["Meditación", "Arte", "Tiempo en la naturaleza"]
    };
    
    return activities[element] || ["Autocuidado", "Reflexión", "Crecimiento personal"];
}

export {
    calculateBirthChart,
    advancedCompatibilityAnalysis,
    generateAdvancedHoroscope,
    calculateAspects,
    calculateLunarSign,
    calculateAscendant,
    calculatePlanetaryPositions,
    calculateChartAspects,
    calculateHousePositions
}; 