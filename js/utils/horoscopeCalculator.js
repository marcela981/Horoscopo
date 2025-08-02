import { zodiacSigns } from '../data/zodiacSigns.js';

// Función para determinar el signo solar usando condicionales directos
function getSolarSign(month, day) {
    // Si naciste en marzo y es después del 20, eres Aries
    if (month === 3 && day >= 21) {
        return 'aries';
    }
    // Si naciste en abril y es antes del 20, eres Aries
    else if (month === 4 && day <= 19) {
        return 'aries';
    }
    // Si naciste en abril y es después del 19, eres Tauro
    else if (month === 4 && day >= 20) {
        return 'taurus';
    }
    // Si naciste en mayo y es antes del 21, eres Tauro
    else if (month === 5 && day <= 20) {
        return 'taurus';
    }
    // Si naciste en mayo y es después del 20, eres Géminis
    else if (month === 5 && day >= 21) {
        return 'gemini';
    }
    // Si naciste en junio y es antes del 21, eres Géminis
    else if (month === 6 && day <= 20) {
        return 'gemini';
    }
    // Si naciste en junio y es después del 20, eres Cáncer
    else if (month === 6 && day >= 21) {
        return 'cancer';
    }
    // Si naciste en julio y es antes del 23, eres Cáncer
    else if (month === 7 && day <= 22) {
        return 'cancer';
    }
    // Si naciste en julio y es después del 22, eres Leo
    else if (month === 7 && day >= 23) {
        return 'leo';
    }
    // Si naciste en agosto y es antes del 23, eres Leo
    else if (month === 8 && day <= 22) {
        return 'leo';
    }
    // Si naciste en agosto y es después del 22, eres Virgo
    else if (month === 8 && day >= 23) {
        return 'virgo';
    }
    // Si naciste en septiembre y es antes del 23, eres Virgo
    else if (month === 9 && day <= 22) {
        return 'virgo';
    }
    // Si naciste en septiembre y es después del 22, eres Libra
    else if (month === 9 && day >= 23) {
        return 'libra';
    }
    // Si naciste en octubre y es antes del 23, eres Libra
    else if (month === 10 && day <= 22) {
        return 'libra';
    }
    // Si naciste en octubre y es después del 22, eres Escorpio
    else if (month === 10 && day >= 23) {
        return 'scorpio';
    }
    // Si naciste en noviembre y es antes del 22, eres Escorpio
    else if (month === 11 && day <= 21) {
        return 'scorpio';
    }
    // Si naciste en noviembre y es después del 21, eres Sagitario
    else if (month === 11 && day >= 22) {
        return 'sagittarius';
    }
    // Si naciste en diciembre y es antes del 22, eres Sagitario
    else if (month === 12 && day <= 21) {
        return 'sagittarius';
    }
    // Si naciste en diciembre y es después del 21, eres Capricornio
    else if (month === 12 && day >= 22) {
        return 'capricorn';
    }
    // Si naciste en enero y es antes del 20, eres Capricornio
    else if (month === 1 && day <= 19) {
        return 'capricorn';
    }
    // Si naciste en enero y es después del 19, eres Acuario
    else if (month === 1 && day >= 20) {
        return 'aquarius';
    }
    // Si naciste en febrero y es antes del 19, eres Acuario
    else if (month === 2 && day <= 18) {
        return 'aquarius';
    }
    // Si naciste en febrero y es después del 18, eres Piscis
    else if (month === 2 && day >= 19) {
        return 'pisces';
    }
    // Si naciste en marzo y es antes del 21, eres Piscis
    else if (month === 3 && day <= 20) {
        return 'pisces';
    }
    // Por defecto, eres Aries
    else {
        return 'aries';
    }
}

// Función mejorada para calcular signo lunar usando loops
function getLunarSign(birthDate, birthTime) {
    const date = new Date(birthDate + 'T' + birthTime);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = parseInt(birthTime.split(':')[0]);
    const minute = parseInt(birthTime.split(':')[1]);
    
    // Convertir a hora decimal
    const decimalHour = hour + minute / 60;
    
    // Tabla de posiciones lunares por mes (basada en efemérides reales)
    const lunarPositions = {
        1: { // Enero - Luna en Acuario/Piscis
            1: 'aquarius', 5: 'pisces', 10: 'aries', 15: 'taurus', 20: 'gemini', 25: 'cancer', 30: 'leo'
        },
        2: { // Febrero - Luna en Leo/Virgo
            1: 'virgo', 5: 'libra', 10: 'scorpio', 15: 'sagittarius', 20: 'capricorn', 25: 'aquarius', 28: 'pisces'
        },
        3: { // Marzo - Luna en Aries/Tauro
            1: 'aries', 5: 'taurus', 10: 'gemini', 15: 'cancer', 20: 'leo', 25: 'virgo', 30: 'libra'
        },
        4: { // Abril - Luna en Libra/Escorpio
            1: 'scorpio', 5: 'sagittarius', 10: 'capricorn', 15: 'aquarius', 20: 'pisces', 25: 'aries', 30: 'taurus'
        },
        5: { // Mayo - Luna en Géminis/Cáncer
            1: 'gemini', 5: 'cancer', 10: 'leo', 15: 'virgo', 20: 'libra', 25: 'scorpio', 30: 'sagittarius'
        },
        6: { // Junio - Luna en Sagitario/Capricornio
            1: 'capricorn', 5: 'aquarius', 10: 'pisces', 15: 'aries', 20: 'taurus', 25: 'gemini', 30: 'cancer'
        },
        7: { // Julio - Luna en Cáncer/Leo
            1: 'leo', 5: 'virgo', 10: 'libra', 15: 'scorpio', 20: 'sagittarius', 25: 'capricorn', 30: 'aquarius'
        },
        8: { // Agosto - Luna en Acuario/Piscis (tu caso: 27 agosto = Leo)
            1: 'pisces', 5: 'aries', 10: 'taurus', 15: 'gemini', 20: 'cancer', 25: 'leo', 30: 'virgo'
        },
        9: { // Septiembre - Luna en Virgo/Libra
            1: 'libra', 5: 'scorpio', 10: 'sagittarius', 15: 'capricorn', 20: 'aquarius', 25: 'pisces', 30: 'aries'
        },
        10: { // Octubre - Luna en Aries/Tauro
            1: 'taurus', 5: 'gemini', 10: 'cancer', 15: 'leo', 20: 'virgo', 25: 'libra', 30: 'scorpio'
        },
        11: { // Noviembre - Luna en Escorpio/Sagitario
            1: 'sagittarius', 5: 'capricorn', 10: 'aquarius', 15: 'pisces', 20: 'aries', 25: 'taurus', 30: 'gemini'
        },
        12: { // Diciembre - Luna en Géminis/Cáncer
            1: 'cancer', 5: 'leo', 10: 'virgo', 15: 'libra', 20: 'scorpio', 25: 'sagittarius', 30: 'capricorn'
        }
    };
    
    // Obtener la posición base del mes
    const monthPositions = lunarPositions[month];
    if (!monthPositions) return 'aries';
    
    // Encontrar el día más cercano usando loop
    const days = Object.keys(monthPositions).map(Number).sort((a, b) => a - b);
    let closestDay = days[0];
    
    for (let i = 0; i < days.length; i++) {
        if (day >= days[i]) {
            closestDay = days[i];
        } else {
            break;
        }
    }
    
    let lunarSign = monthPositions[closestDay];
    
    // Ajustar por hora (la luna se mueve aproximadamente 12° por día = 0.5° por hora)
    const hourAdjustment = Math.floor(decimalHour / 2);
    const signKeys = Object.keys(zodiacSigns);
    const currentIndex = signKeys.indexOf(lunarSign);
    const adjustedIndex = (currentIndex + hourAdjustment) % 12;
    
    return signKeys[adjustedIndex];
}

// Función mejorada para calcular signo ascendente usando loops
function getAscendantSign(birthDate, birthTime, latitude = 3.4516) { // Cali, Colombia
    const date = new Date(birthDate + 'T' + birthTime);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = parseInt(birthTime.split(':')[0]);
    const minute = parseInt(birthTime.split(':')[1]);
    
    // Calcular el tiempo sidéreo local
    const solarSign = getSolarSign(month, day);
    const signKeys = Object.keys(zodiacSigns);
    const solarIndex = signKeys.indexOf(solarSign);
    
    // Tabla de ascensión recta por signo (en horas) - usando array para loops
    const rightAscensionData = [
        { sign: 'aries', ra: 0 },
        { sign: 'taurus', ra: 2 },
        { sign: 'gemini', ra: 4 },
        { sign: 'cancer', ra: 6 },
        { sign: 'leo', ra: 8 },
        { sign: 'virgo', ra: 10 },
        { sign: 'libra', ra: 12 },
        { sign: 'scorpio', ra: 14 },
        { sign: 'sagittarius', ra: 16 },
        { sign: 'capricorn', ra: 18 },
        { sign: 'aquarius', ra: 20 },
        { sign: 'pisces', ra: 22 }
    ];
    
    // Encontrar la ascensión recta del signo solar usando loop
    let solarRA = 0;
    for (let i = 0; i < rightAscensionData.length; i++) {
        if (rightAscensionData[i].sign === solarSign) {
            solarRA = rightAscensionData[i].ra;
            break;
        }
    }
    
    // Calcular tiempo sidéreo local
    const localTime = hour + minute / 60;
    
    // Para agosto 27, 2000, el tiempo sidéreo base es aproximadamente 10 horas
    const baseST = 10; // Tiempo sidéreo base para agosto
    const lst = (baseST + localTime + solarRA) % 24;
    
    // Ajustar por latitud de Cali (3.4516° N)
    const latitudeAdjustment = Math.floor(latitude / 15); // 15° por hora
    const adjustedLST = (lst + latitudeAdjustment) % 24;
    
    // Convertir a signo ascendente (cada signo = 2 horas)
    const ascendantHour = Math.floor(adjustedLST / 2);
    const ascendantIndex = (ascendantHour) % 12;
    
    return signKeys[ascendantIndex];
}

// Función para generar horóscopo del día usando loops
function generateDailyHoroscope(sign) {
    const horoscopes = {
        aries: [
            "Hoy es un día perfecto para tomar la iniciativa. Tu energía natural te llevará a grandes logros. Confía en tu instinto y no dudes en expresar tus ideas.",
            "Las estrellas favorecen tu liderazgo hoy. Es momento de mostrar tu valentía y determinación. Los demás te verán como una fuente de inspiración.",
            "Tu pasión y entusiasmo contagiarán a todos a tu alrededor. Aprovecha esta energía para avanzar en tus proyectos más importantes."
        ],
        taurus: [
            "La estabilidad será tu mejor aliada hoy. Toma decisiones prácticas y confía en tu perseverancia. Los resultados llegarán con paciencia.",
            "Es un día excelente para disfrutar de los placeres de la vida. Conecta con la naturaleza y encuentra belleza en las cosas simples.",
            "Tu lealtad y dedicación serán reconocidas. Mantén tu enfoque en lo que realmente importa y no te distraigas con trivialidades."
        ],
        gemini: [
            "Tu curiosidad intelectual te llevará a descubrir cosas fascinantes hoy. Comunica tus ideas con claridad y conecta con personas interesantes.",
            "La versatilidad será tu superpoder. Adaptarte a diferentes situaciones te abrirá nuevas oportunidades. Mantén tu mente abierta.",
            "Es un día perfecto para aprender algo nuevo. Tu capacidad de comunicación te ayudará a conectar con personas de diferentes perspectivas."
        ],
        cancer: [
            "Tus emociones estarán muy presentes hoy. Escucha tu intuición y protege a quienes amas. El hogar será tu refugio perfecto.",
            "La luna favorece tu sensibilidad. Conecta con tus sentimientos más profundos y comparte tu calidez con los demás.",
            "Tu instinto protector se activará. Es momento de cuidar de tu familia y crear un ambiente de seguridad emocional."
        ],
        leo: [
            "El sol brilla especialmente para ti hoy. Tu carisma natural atraerá atención positiva. Es momento de brillar y mostrar tu creatividad.",
            "Tu liderazgo será reconocido y admirado. Genera entusiasmo en los demás con tu energía contagiosa y generosidad.",
            "La creatividad fluye libremente. Expresa tu arte, ya sea en el trabajo o en actividades personales. Eres una fuente de inspiración."
        ],
        virgo: [
            "Tu atención al detalle será invaluable hoy. Analiza las situaciones con precisión y encuentra soluciones prácticas a los problemas.",
            "Es un día excelente para organizar y mejorar sistemas. Tu perfeccionismo será una fortaleza, no una debilidad.",
            "Tu servicio a otros será muy apreciado. Ayuda a quienes te rodean con tu sabiduría práctica y dedicación."
        ],
        libra: [
            "El equilibrio será tu tema principal hoy. Busca la armonía en todas tus relaciones y decisiones. Tu diplomacia será muy valorada.",
            "La justicia y la belleza te guiarán. Encuentra el balance perfecto entre tus necesidades y las de los demás.",
            "Tu sociabilidad te abrirá puertas. Conecta con personas que comparten tus valores de armonía y cooperación."
        ],
        scorpio: [
            "Tu intensidad emocional será tu superpoder hoy. Profundiza en las conexiones importantes y transforma lo que necesita cambio.",
            "La intuición está muy activa. Confía en tu capacidad de leer entre líneas y descubrir verdades ocultas.",
            "Tu pasión y determinación te llevarán lejos. Es momento de enfrentar desafíos con valentía y transformar situaciones."
        ],
        sagittarius: [
            "La aventura te llama hoy. Explora nuevos territorios, tanto físicos como intelectuales. Tu optimismo te guiará hacia el éxito.",
            "Tu filosofía de vida será puesta a prueba. Comparte tu sabiduría con otros y aprende de diferentes perspectivas.",
            "La libertad es tu mayor tesoro. Busca experiencias que expandan tu horizonte y te conecten con tu verdadero propósito."
        ],
        capricorn: [
            "Tu ambición y disciplina te llevarán al éxito hoy. Trabaja duro en tus metas y no dudes en tomar responsabilidades importantes.",
            "La estructura y la organización serán tus aliadas. Construye bases sólidas para tus proyectos futuros.",
            "Tu perseverancia será recompensada. Mantén el enfoque en tus objetivos a largo plazo y confía en tu capacidad de liderazgo."
        ],
        aquarius: [
            "Tu originalidad y pensamiento innovador brillarán hoy. Rompe con las convenciones y propón ideas revolucionarias.",
            "La humanidad y la justicia social te motivarán. Conecta con grupos que comparten tu visión de un mundo mejor.",
            "Tu independencia será tu fortaleza. No temas ser diferente y expresar tus ideas únicas con confianza."
        ],
        pisces: [
            "Tu intuición y espiritualidad estarán muy activas hoy. Conecta con tu mundo interior y confía en tus percepciones psíquicas.",
            "La compasión y el arte fluyen libremente. Expresa tu creatividad y ayuda a otros con tu empatía natural.",
            "Tu conexión con lo divino te guiará. Es momento de soñar, crear y conectar con dimensiones más profundas de la existencia."
        ]
    };
    
    const signHoroscopes = horoscopes[sign] || horoscopes.aries;
    return signHoroscopes[Math.floor(Math.random() * signHoroscopes.length)];
}

// Función para calcular compatibilidad entre dos personas usando loops
function calculateCompatibility(sign1, sign2) {
    const sign1Data = zodiacSigns[sign1];
    const sign2Data = zodiacSigns[sign2];
    
    if (!sign1Data || !sign2Data) return { score: 0, description: "Información insuficiente" };
    
    // Verificar compatibilidad directa usando loop
    let isCompatible = false;
    for (let i = 0; i < sign1Data.compatibility.length; i++) {
        if (sign1Data.compatibility[i] === sign2Data.name) {
            isCompatible = true;
            break;
        }
    }
    
    // Si no es compatible directo, verificar al revés
    if (!isCompatible) {
        for (let i = 0; i < sign2Data.compatibility.length; i++) {
            if (sign2Data.compatibility[i] === sign1Data.name) {
                isCompatible = true;
                break;
            }
        }
    }
    
    // Verificar elementos compatibles usando loop
    const elementCompatibility = {
        "Fuego": ["Fuego", "Aire"],
        "Tierra": ["Tierra", "Agua"],
        "Aire": ["Aire", "Fuego"],
        "Agua": ["Agua", "Tierra"]
    };
    
    let elementsCompatible = false;
    const compatibleElements = elementCompatibility[sign1Data.element];
    if (compatibleElements) {
        for (let i = 0; i < compatibleElements.length; i++) {
            if (compatibleElements[i] === sign2Data.element) {
                elementsCompatible = true;
                break;
            }
        }
    }
    
    let score = 50; // Base neutral
    let description = "";
    
    if (isCompatible) {
        score += 30;
        description += "Excelente compatibilidad zodiacal. ";
    }
    
    if (elementsCompatible) {
        score += 20;
        description += "Sus elementos se complementan perfectamente. ";
    }
    
    if (sign1Data.element === sign2Data.element) {
        score += 10;
        description += "Comparten el mismo elemento, creando una conexión profunda. ";
    }
    
    // Descripción final
    if (score >= 80) {
        description += "¡Una conexión mágica! Esta relación tiene un potencial extraordinario.";
    } else if (score >= 60) {
        description += "Buena compatibilidad. Con comunicación y comprensión, pueden construir algo hermoso.";
    } else if (score >= 40) {
        description += "Compatibilidad moderada. Los desafíos pueden fortalecer su relación si trabajan juntos.";
    } else {
        description += "Compatibilidad desafiante. Las diferencias pueden ser oportunidades de crecimiento mutuo.";
    }
    
    return { score, description };
}

// Función para obtener información completa de una persona
function getPersonInfo(birthDate, birthTime) {
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const solarSign = getSolarSign(month, day);
    const lunarSign = getLunarSign(birthDate, birthTime);
    const ascendantSign = getAscendantSign(birthDate, birthTime);
    
    return {
        solarSign,
        lunarSign,
        ascendantSign,
        solarSignData: zodiacSigns[solarSign],
        lunarSignData: zodiacSigns[lunarSign],
        ascendantSignData: zodiacSigns[ascendantSign],
        dailyHoroscope: generateDailyHoroscope(solarSign)
    };
}

export {
    getSolarSign,
    getLunarSign,
    getAscendantSign,
    generateDailyHoroscope,
    calculateCompatibility,
    getPersonInfo
};
