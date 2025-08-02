const zodiacSigns = {
    aries: {
        name: "Aries",
        element: "Fuego",
        planet: "Marte",
        dates: "21 Marzo - 19 Abril",
        symbol: "♈",
        description: "Aries es el primer signo del zodiaco, representando el inicio y la energía primaria. Son líderes naturales, valientes y entusiastas.",
        characteristics: ["Valiente", "Energético", "Líder", "Impulsivo", "Directo"],
        compatibility: ["Leo", "Sagitario", "Géminis", "Libra"],
        color: "#ff5722",
        // Datos expandidos
        qualities: {
            cardinal: true,
            masculine: true,
            modality: "Cardinal"
        },
        bodyParts: ["Cabeza", "Cerebro", "Ojos"],
        luckyNumbers: [1, 9, 17],
        luckyColors: ["Rojo", "Naranja", "Blanco"],
        luckyStones: ["Rubí", "Diamante", "Granate"],
        bestProfessions: ["Líder", "Emprendedor", "Deportista", "Militar"],
        healthFocus: ["Sistema nervioso", "Presión arterial", "Migrañas"]
    },
    taurus: {
        name: "Tauro",
        element: "Tierra",
        planet: "Venus",
        dates: "20 Abril - 20 Mayo",
        symbol: "♉",
        description: "Tauro es el signo de la estabilidad y la perseverancia. Son prácticos, leales y disfrutan de los placeres de la vida.",
        characteristics: ["Estable", "Leal", "Práctico", "Perseverante", "Sensual"],
        compatibility: ["Virgo", "Capricornio", "Cáncer", "Escorpio"],
        color: "#4caf50",
        qualities: {
            fixed: true,
            feminine: true,
            modality: "Fijo"
        },
        bodyParts: ["Cuello", "Garganta", "Oídos"],
        luckyNumbers: [2, 6, 15],
        luckyColors: ["Verde", "Rosa", "Azul"],
        luckyStones: ["Esmeralda", "Cuarzo rosa", "Ópalo"],
        bestProfessions: ["Agricultor", "Banquero", "Chef", "Arquitecto"],
        healthFocus: ["Garganta", "Tiroides", "Sistema digestivo"]
    },
    gemini: {
        name: "Géminis",
        element: "Aire",
        planet: "Mercurio",
        dates: "21 Mayo - 20 Junio",
        symbol: "♊",
        description: "Géminis es el signo de la comunicación y la dualidad. Son versátiles, curiosos y excelentes comunicadores.",
        characteristics: ["Versátil", "Comunicativo", "Curioso", "Adaptable", "Intelectual"],
        compatibility: ["Libra", "Acuario", "Aries", "Leo"],
        color: "#ffc107",
        qualities: {
            mutable: true,
            masculine: true,
            modality: "Mutable"
        },
        bodyParts: ["Hombros", "Brazos", "Pulmones"],
        luckyNumbers: [3, 7, 12],
        luckyColors: ["Amarillo", "Naranja", "Verde claro"],
        luckyStones: ["Ágata", "Citrino", "Perla"],
        bestProfessions: ["Periodista", "Vendedor", "Profesor", "Escritor"],
        healthFocus: ["Sistema respiratorio", "Nervios", "Ansiedad"]
    },
    cancer: {
        name: "Cáncer",
        element: "Agua",
        planet: "Luna",
        dates: "21 Junio - 22 Julio",
        symbol: "♋",
        description: "Cáncer es el signo de la familia y las emociones. Son protectores, intuitivos y muy conectados con su hogar.",
        characteristics: ["Protector", "Intuitivo", "Emocional", "Leal", "Familiar"],
        compatibility: ["Escorpio", "Piscis", "Tauro", "Virgo"],
        color: "#2196f3",
        qualities: {
            cardinal: true,
            feminine: true,
            modality: "Cardinal"
        },
        bodyParts: ["Pecho", "Estómago", "Senos"],
        luckyNumbers: [2, 7, 11],
        luckyColors: ["Plateado", "Blanco", "Azul claro"],
        luckyStones: ["Perla", "Luna", "Ópalo"],
        bestProfessions: ["Enfermero", "Psicólogo", "Cocinero", "Maternidad"],
        healthFocus: ["Sistema digestivo", "Emociones", "Sueño"]
    },
    leo: {
        name: "Leo",
        element: "Fuego",
        planet: "Sol",
        dates: "23 Julio - 22 Agosto",
        symbol: "♌",
        description: "Leo es el signo del liderazgo y la creatividad. Son carismáticos, generosos y aman ser el centro de atención.",
        characteristics: ["Carismático", "Generoso", "Creativo", "Líder", "Leal"],
        compatibility: ["Aries", "Sagitario", "Géminis", "Libra"],
        color: "#ff9800",
        qualities: {
            fixed: true,
            masculine: true,
            modality: "Fijo"
        },
        bodyParts: ["Corazón", "Espalda", "Columna"],
        luckyNumbers: [1, 4, 10],
        luckyColors: ["Dorado", "Naranja", "Púrpura"],
        luckyStones: ["Rubí", "Ámbar", "Citrino"],
        bestProfessions: ["Actor", "Político", "Artista", "Manager"],
        healthFocus: ["Corazón", "Circulación", "Presión arterial"]
    },
    virgo: {
        name: "Virgo",
        element: "Tierra",
        planet: "Mercurio",
        dates: "23 Agosto - 22 Septiembre",
        symbol: "♍",
        description: "Virgo es el signo de la perfección y el servicio. Son analíticos, trabajadores y muy organizados.",
        characteristics: ["Analítico", "Trabajador", "Organizado", "Perfeccionista", "Servicial"],
        compatibility: ["Tauro", "Capricornio", "Cáncer", "Escorpio"],
        color: "#795548",
        qualities: {
            mutable: true,
            feminine: true,
            modality: "Mutable"
        },
        bodyParts: ["Intestinos", "Sistema digestivo", "Nervios"],
        luckyNumbers: [5, 14, 15],
        luckyColors: ["Verde", "Marrón", "Gris"],
        luckyStones: ["Jaspe", "Ágata", "Ónix"],
        bestProfessions: ["Contador", "Doctor", "Editor", "Investigador"],
        healthFocus: ["Sistema digestivo", "Ansiedad", "Perfeccionismo"]
    },
    libra: {
        name: "Libra",
        element: "Aire",
        planet: "Venus",
        dates: "23 Septiembre - 22 Octubre",
        symbol: "♎",
        description: "Libra es el signo del equilibrio y la justicia. Son diplomáticos, sociables y buscan la armonía en todo.",
        characteristics: ["Diplomático", "Sociable", "Justo", "Equilibrado", "Romántico"],
        compatibility: ["Géminis", "Acuario", "Aries", "Leo"],
        color: "#e91e63",
        qualities: {
            cardinal: true,
            masculine: true,
            modality: "Cardinal"
        },
        bodyParts: ["Riñones", "Cintura", "Piel"],
        luckyNumbers: [6, 15, 24],
        luckyColors: ["Rosa", "Azul", "Lavanda"],
        luckyStones: ["Ópalo", "Rosa cuarzo", "Lapislázuli"],
        bestProfessions: ["Abogado", "Mediador", "Diseñador", "Diplomático"],
        healthFocus: ["Riñones", "Piel", "Equilibrio emocional"]
    },
    scorpio: {
        name: "Escorpio",
        element: "Agua",
        planet: "Plutón",
        dates: "23 Octubre - 21 Noviembre",
        symbol: "♏",
        description: "Escorpio es el signo de la intensidad y la transformación. Son apasionados, misteriosos y muy intuitivos.",
        characteristics: ["Intenso", "Apasionado", "Misterioso", "Intuitivo", "Leal"],
        compatibility: ["Cáncer", "Piscis", "Tauro", "Virgo"],
        color: "#673ab7",
        qualities: {
            fixed: true,
            feminine: true,
            modality: "Fijo"
        },
        bodyParts: ["Órganos reproductivos", "Colon", "Nariz"],
        luckyNumbers: [8, 11, 18],
        luckyColors: ["Escarlata", "Negro", "Burgundy"],
        luckyStones: ["Ópalo negro", "Obsidiana", "Granate"],
        bestProfessions: ["Detective", "Psicólogo", "Cirujano", "Investigador"],
        healthFocus: ["Sistema reproductivo", "Transformación", "Intensidad emocional"]
    },
    sagittarius: {
        name: "Sagitario",
        element: "Fuego",
        planet: "Júpiter",
        dates: "22 Noviembre - 21 Diciembre",
        symbol: "♐",
        description: "Sagitario es el signo de la aventura y la sabiduría. Son optimistas, aventureros y aman la libertad.",
        characteristics: ["Optimista", "Aventurero", "Sabio", "Honesto", "Libre"],
        compatibility: ["Aries", "Leo", "Géminis", "Libra"],
        color: "#ff5722",
        qualities: {
            mutable: true,
            masculine: true,
            modality: "Mutable"
        },
        bodyParts: ["Caderas", "Muslos", "Hígado"],
        luckyNumbers: [3, 7, 9],
        luckyColors: ["Púrpura", "Azul", "Verde"],
        luckyStones: ["Turquesa", "Lapislázuli", "Amatista"],
        bestProfessions: ["Profesor", "Viajero", "Filósofo", "Deportista"],
        healthFocus: ["Hígado", "Sistema nervioso", "Optimismo"]
    },
    capricorn: {
        name: "Capricornio",
        element: "Tierra",
        planet: "Saturno",
        dates: "22 Diciembre - 19 Enero",
        symbol: "♑",
        description: "Capricornio es el signo de la ambición y la responsabilidad. Son trabajadores, disciplinados y muy ambiciosos.",
        characteristics: ["Ambicioso", "Disciplinado", "Responsable", "Trabajador", "Práctico"],
        compatibility: ["Tauro", "Virgo", "Cáncer", "Escorpio"],
        color: "#607d8b",
        qualities: {
            cardinal: true,
            feminine: true,
            modality: "Cardinal"
        },
        bodyParts: ["Rodillas", "Huesos", "Dientes"],
        luckyNumbers: [4, 8, 13],
        luckyColors: ["Negro", "Marrón", "Gris"],
        luckyStones: ["Ónix", "Obsidiana", "Azabache"],
        bestProfessions: ["Ejecutivo", "Abogado", "Arquitecto", "Contador"],
        healthFocus: ["Huesos", "Articulaciones", "Disciplina"]
    },
    aquarius: {
        name: "Acuario",
        element: "Aire",
        planet: "Urano",
        dates: "20 Enero - 18 Febrero",
        symbol: "♒",
        description: "Acuario es el signo de la innovación y la humanidad. Son originales, independientes y muy progresistas.",
        characteristics: ["Original", "Independiente", "Progresista", "Humanitario", "Intelectual"],
        compatibility: ["Géminis", "Libra", "Aries", "Sagitario"],
        color: "#00bcd4",
        qualities: {
            fixed: true,
            masculine: true,
            modality: "Fijo"
        },
        bodyParts: ["Tobillos", "Sistema circulatorio", "Nervios"],
        luckyNumbers: [4, 7, 11],
        luckyColors: ["Azul eléctrico", "Plateado", "Turquesa"],
        luckyStones: ["Amatista", "Cuarzo", "Turquesa"],
        bestProfessions: ["Científico", "Inventor", "Activista", "Tecnólogo"],
        healthFocus: ["Sistema circulatorio", "Nervios", "Innovación"]
    },
    pisces: {
        name: "Piscis",
        element: "Agua",
        planet: "Neptuno",
        dates: "19 Febrero - 20 Marzo",
        symbol: "♓",
        description: "Piscis es el signo de la intuición y la espiritualidad. Son compasivos, artísticos y muy empáticos.",
        characteristics: ["Compasivo", "Artístico", "Empático", "Intuitivo", "Espiritual"],
        compatibility: ["Cáncer", "Escorpio", "Tauro", "Capricornio"],
        color: "#3f51b5",
        qualities: {
            mutable: true,
            feminine: true,
            modality: "Mutable"
        },
        bodyParts: ["Pies", "Sistema linfático", "Glándulas"],
        luckyNumbers: [3, 7, 12],
        luckyColors: ["Verde mar", "Lavanda", "Azul claro"],
        luckyStones: ["Aguamarina", "Perla", "Cuarzo"],
        bestProfessions: ["Artista", "Músico", "Sanador", "Psicólogo"],
        healthFocus: ["Sistema linfático", "Pies", "Intuición"]
    }
};

// Datos expandidos de planetas
const planets = {
    sun: {
        name: "Sol",
        symbol: "☉",
        description: "Representa el ego, la identidad y la esencia de la persona. Rige el signo de Leo.",
        meaning: "El Sol en la carta astral muestra cómo te expresas y qué te hace único.",
        keywords: ["Ego", "Identidad", "Vitalidad", "Liderazgo", "Creatividad"],
        houseMeanings: {
            1: "Personalidad fuerte y carismática",
            2: "Valores materiales importantes",
            3: "Comunicación expresiva",
            4: "Hogar como centro de identidad",
            5: "Creatividad y romance destacados",
            6: "Trabajo como expresión personal",
            7: "Relaciones basadas en identidad",
            8: "Transformación profunda del ego",
            9: "Filosofía de vida personal",
            10: "Carrera pública y reconocimiento",
            11: "Amistades que reflejan tu identidad",
            12: "Ego en el subconsciente"
        }
    },
    moon: {
        name: "Luna",
        symbol: "☽",
        description: "Representa las emociones, la intuición y el mundo interior. Rige el signo de Cáncer.",
        meaning: "La Luna revela tus necesidades emocionales y cómo procesas los sentimientos.",
        keywords: ["Emociones", "Intuición", "Maternidad", "Memoria", "Subconsciente"],
        houseMeanings: {
            1: "Emociones visibles en la personalidad",
            2: "Valores emocionales y seguridad",
            3: "Comunicación emocional",
            4: "Hogar como refugio emocional",
            5: "Emociones en el romance",
            6: "Trabajo que satisface emocionalmente",
            7: "Relaciones emocionales profundas",
            8: "Transformación emocional",
            9: "Creencias emocionales",
            10: "Emociones en la carrera",
            11: "Amistades emocionales",
            12: "Emociones ocultas"
        }
    },
    mercury: {
        name: "Mercurio",
        symbol: "☿",
        description: "Representa la comunicación, el pensamiento y el aprendizaje. Rige Géminis y Virgo.",
        meaning: "Mercurio muestra cómo piensas, te comunicas y procesas información.",
        keywords: ["Comunicación", "Pensamiento", "Aprendizaje", "Comercio", "Nervios"],
        houseMeanings: {
            1: "Comunicación directa y personal",
            2: "Pensamiento sobre valores",
            3: "Comunicación natural",
            4: "Pensamiento sobre el hogar",
            5: "Comunicación creativa",
            6: "Pensamiento analítico",
            7: "Comunicación en relaciones",
            8: "Pensamiento profundo",
            9: "Comunicación filosófica",
            10: "Pensamiento sobre la carrera",
            11: "Comunicación con grupos",
            12: "Pensamiento subconsciente"
        }
    },
    venus: {
        name: "Venus",
        symbol: "♀",
        description: "Representa el amor, la belleza y los valores. Rige Tauro y Libra.",
        meaning: "Venus revela cómo amas, qué te atrae y tus valores en las relaciones.",
        keywords: ["Amor", "Belleza", "Valores", "Armonía", "Placer"],
        houseMeanings: {
            1: "Belleza personal y encanto",
            2: "Valores estéticos y materiales",
            3: "Comunicación armoniosa",
            4: "Belleza en el hogar",
            5: "Amor romántico",
            6: "Belleza en el trabajo",
            7: "Relaciones armoniosas",
            8: "Amor transformador",
            9: "Valores filosóficos",
            10: "Belleza en la carrera",
            11: "Amistades armoniosas",
            12: "Amor idealizado"
        }
    },
    mars: {
        name: "Marte",
        symbol: "♂",
        description: "Representa la energía, la acción y la pasión. Rige Aries.",
        meaning: "Marte muestra cómo actúas, tu energía y cómo persigues tus deseos.",
        keywords: ["Energía", "Acción", "Pasión", "Agresión", "Valentía"],
        houseMeanings: {
            1: "Energía personal y acción directa",
            2: "Acción en asuntos materiales",
            3: "Comunicación energética",
            4: "Acción en el hogar",
            5: "Pasión en el romance",
            6: "Energía en el trabajo",
            7: "Acción en relaciones",
            8: "Energía transformadora",
            9: "Acción en filosofía",
            10: "Energía en la carrera",
            11: "Acción en grupos",
            12: "Energía oculta"
        }
    },
    jupiter: {
        name: "Júpiter",
        symbol: "♃",
        description: "Representa la expansión, la sabiduría y la suerte. Rige Sagitario.",
        meaning: "Júpiter revela tus creencias, filosofía de vida y áreas de crecimiento.",
        keywords: ["Expansión", "Sabiduría", "Suerte", "Optimismo", "Crecimiento"],
        houseMeanings: {
            1: "Expansión de la personalidad",
            2: "Suerte en asuntos materiales",
            3: "Expansión del conocimiento",
            4: "Crecimiento en el hogar",
            5: "Suerte en el romance",
            6: "Expansión en el trabajo",
            7: "Crecimiento en relaciones",
            8: "Expansión espiritual",
            9: "Sabiduría filosófica",
            10: "Suerte en la carrera",
            11: "Expansión social",
            12: "Sabiduría espiritual"
        }
    },
    saturn: {
        name: "Saturno",
        symbol: "♄",
        description: "Representa la responsabilidad, las lecciones y la disciplina. Rige Capricornio.",
        meaning: "Saturno muestra tus desafíos, responsabilidades y lecciones de vida.",
        keywords: ["Responsabilidad", "Disciplina", "Límites", "Miedo", "Tiempo"],
        houseMeanings: {
            1: "Responsabilidad personal",
            2: "Límites en valores",
            3: "Disciplina en comunicación",
            4: "Responsabilidad familiar",
            5: "Límites en romance",
            6: "Disciplina en trabajo",
            7: "Responsabilidad en relaciones",
            8: "Límites en transformación",
            9: "Disciplina filosófica",
            10: "Responsabilidad en carrera",
            11: "Límites en grupos",
            12: "Disciplina espiritual"
        }
    },
    uranus: {
        name: "Urano",
        symbol: "♅",
        description: "Representa la innovación, la rebelión y la libertad. Rige Acuario.",
        meaning: "Urano revela tu lado rebelde, innovador y cómo rompes con lo establecido.",
        keywords: ["Innovación", "Rebelión", "Libertad", "Originalidad", "Cambio"],
        houseMeanings: {
            1: "Personalidad innovadora",
            2: "Valores revolucionarios",
            3: "Comunicación original",
            4: "Hogar no convencional",
            5: "Romance revolucionario",
            6: "Trabajo innovador",
            7: "Relaciones liberadoras",
            8: "Transformación radical",
            9: "Filosofía revolucionaria",
            10: "Carrera innovadora",
            11: "Grupos revolucionarios",
            12: "Liberación espiritual"
        }
    },
    neptune: {
        name: "Neptuno",
        symbol: "♆",
        description: "Representa la espiritualidad, la ilusión y la compasión. Rige Piscis.",
        meaning: "Neptuno muestra tu conexión espiritual, intuición y áreas de idealización.",
        keywords: ["Espiritualidad", "Ilusión", "Compasión", "Idealismo", "Misticismo"],
        houseMeanings: {
            1: "Personalidad espiritual",
            2: "Valores idealistas",
            3: "Comunicación mística",
            4: "Hogar espiritual",
            5: "Romance idealizado",
            6: "Trabajo compasivo",
            7: "Relaciones espirituales",
            8: "Transformación mística",
            9: "Filosofía espiritual",
            10: "Carrera idealizada",
            11: "Amistades espirituales",
            12: "Misticismo profundo"
        }
    },
    pluto: {
        name: "Plutón",
        symbol: "♇",
        description: "Representa la transformación, el poder y la regeneración. Rige Escorpio.",
        meaning: "Pluto revela tus áreas de transformación profunda y poder personal.",
        keywords: ["Transformación", "Poder", "Regeneración", "Intensidad", "Misterio"],
        houseMeanings: {
            1: "Transformación personal",
            2: "Poder sobre valores",
            3: "Transformación comunicativa",
            4: "Poder en el hogar",
            5: "Transformación romántica",
            6: "Poder en el trabajo",
            7: "Transformación relacional",
            8: "Poder regenerativo",
            9: "Transformación filosófica",
            10: "Poder en la carrera",
            11: "Transformación grupal",
            12: "Poder oculto"
        }
    }
};

// Datos expandidos de casas
const houses = {
    1: {
        name: "Casa I - Ascendente",
        area: "Personalidad y apariencia",
        description: "Representa cómo te ven los demás y tu enfoque hacia la vida.",
        keywords: ["Personalidad", "Apariencia", "Primera impresión", "Enfoque vital"],
        planets: {
            sun: "Identidad fuerte y carismática",
            moon: "Personalidad emocional e intuitiva",
            mercury: "Comunicación directa y personal",
            venus: "Personalidad encantadora y armoniosa",
            mars: "Personalidad energética y directa",
            jupiter: "Personalidad expansiva y optimista",
            saturn: "Personalidad responsable y seria",
            uranus: "Personalidad original e innovadora",
            neptune: "Personalidad espiritual e idealista",
            pluto: "Personalidad intensa y transformadora"
        }
    },
    2: {
        name: "Casa II",
        area: "Valores y posesiones",
        description: "Se relaciona con el dinero, las posesiones materiales y los valores personales.",
        keywords: ["Dinero", "Posesiones", "Valores", "Seguridad material"],
        planets: {
            sun: "Valores basados en la identidad",
            moon: "Valores emocionales y de seguridad",
            mercury: "Valores intelectuales y comerciales",
            venus: "Valores estéticos y armoniosos",
            mars: "Valores activos y energéticos",
            jupiter: "Valores expansivos y generosos",
            saturn: "Valores conservadores y responsables",
            uranus: "Valores revolucionarios e innovadores",
            neptune: "Valores espirituales e idealistas",
            pluto: "Valores intensos y transformadores"
        }
    },
    3: {
        name: "Casa III",
        area: "Comunicación y hermanos",
        description: "Representa la comunicación, el aprendizaje, los viajes cortos y las relaciones con hermanos.",
        keywords: ["Comunicación", "Hermanos", "Aprendizaje", "Viajes cortos"],
        planets: {
            sun: "Comunicación expresiva y personal",
            moon: "Comunicación emocional e intuitiva",
            mercury: "Comunicación natural y fluida",
            venus: "Comunicación armoniosa y diplomática",
            mars: "Comunicación directa y energética",
            jupiter: "Comunicación expansiva y sabia",
            saturn: "Comunicación seria y responsable",
            uranus: "Comunicación original e innovadora",
            neptune: "Comunicación espiritual e idealista",
            pluto: "Comunicación intensa y transformadora"
        }
    },
    4: {
        name: "Casa IV",
        area: "Hogar y familia",
        description: "Se relaciona con el hogar, la familia, las raíces y el mundo privado.",
        keywords: ["Hogar", "Familia", "Raíces", "Mundo privado"],
        planets: {
            sun: "Hogar como centro de identidad",
            moon: "Hogar como refugio emocional",
            mercury: "Hogar intelectual y comunicativo",
            venus: "Hogar hermoso y armonioso",
            mars: "Hogar activo y energético",
            jupiter: "Hogar expansivo y generoso",
            saturn: "Hogar responsable y estructurado",
            uranus: "Hogar original e innovador",
            neptune: "Hogar espiritual e idealista",
            pluto: "Hogar intenso y transformador"
        }
    },
    5: {
        name: "Casa V",
        area: "Creatividad y romance",
        description: "Representa la creatividad, el romance, los hijos y las actividades de ocio.",
        keywords: ["Creatividad", "Romance", "Hijos", "Ocio"],
        planets: {
            sun: "Creatividad personal y expresiva",
            moon: "Romance emocional e intuitivo",
            mercury: "Creatividad intelectual y comunicativa",
            venus: "Romance armonioso y estético",
            mars: "Romance apasionado y energético",
            jupiter: "Romance expansivo y optimista",
            saturn: "Romance serio y responsable",
            uranus: "Romance original e innovador",
            neptune: "Romance espiritual e idealizado",
            pluto: "Romance intenso y transformador"
        }
    },
    6: {
        name: "Casa VI",
        area: "Trabajo y salud",
        description: "Se relaciona con el trabajo diario, la salud, las rutinas y el servicio a otros.",
        keywords: ["Trabajo", "Salud", "Rutinas", "Servicio"],
        planets: {
            sun: "Trabajo como expresión personal",
            moon: "Trabajo emocional y de cuidado",
            mercury: "Trabajo intelectual y comunicativo",
            venus: "Trabajo estético y armonioso",
            mars: "Trabajo energético y activo",
            jupiter: "Trabajo expansivo y generoso",
            saturn: "Trabajo responsable y disciplinado",
            uranus: "Trabajo innovador y original",
            neptune: "Trabajo espiritual y compasivo",
            pluto: "Trabajo intenso y transformador"
        }
    },
    7: {
        name: "Casa VII - Descendente",
        area: "Relaciones y asociaciones",
        description: "Representa las relaciones íntimas, el matrimonio y las asociaciones.",
        keywords: ["Relaciones", "Matrimonio", "Asociaciones", "Socios"],
        planets: {
            sun: "Relaciones basadas en identidad",
            moon: "Relaciones emocionales profundas",
            mercury: "Relaciones comunicativas",
            venus: "Relaciones armoniosas y románticas",
            mars: "Relaciones apasionadas y activas",
            jupiter: "Relaciones expansivas y optimistas",
            saturn: "Relaciones serias y responsables",
            uranus: "Relaciones originales e innovadoras",
            neptune: "Relaciones espirituales e idealizadas",
            pluto: "Relaciones intensas y transformadoras"
        }
    },
    8: {
        name: "Casa VIII",
        area: "Transformación y recursos compartidos",
        description: "Se relaciona con la muerte, la transformación, los recursos de otros y la sexualidad.",
        keywords: ["Transformación", "Muerte", "Recursos compartidos", "Sexualidad"],
        planets: {
            sun: "Transformación de la identidad",
            moon: "Transformación emocional",
            mercury: "Transformación intelectual",
            venus: "Transformación romántica",
            mars: "Transformación energética",
            jupiter: "Transformación expansiva",
            saturn: "Transformación responsable",
            uranus: "Transformación revolucionaria",
            neptune: "Transformación espiritual",
            pluto: "Transformación profunda"
        }
    },
    9: {
        name: "Casa IX",
        area: "Filosofía y viajes",
        description: "Representa la filosofía, la religión, los viajes largos y la educación superior.",
        keywords: ["Filosofía", "Religión", "Viajes largos", "Educación superior"],
        planets: {
            sun: "Filosofía personal y expresiva",
            moon: "Filosofía emocional e intuitiva",
            mercury: "Filosofía intelectual y comunicativa",
            venus: "Filosofía estética y armoniosa",
            mars: "Filosofía activa y energética",
            jupiter: "Filosofía expansiva y sabia",
            saturn: "Filosofía seria y responsable",
            uranus: "Filosofía revolucionaria e innovadora",
            neptune: "Filosofía espiritual e idealista",
            pluto: "Filosofía intensa y transformadora"
        }
    },
    10: {
        name: "Casa X - Medio Cielo",
        area: "Carrera y reputación",
        description: "Se relaciona con la carrera, la reputación, los logros y la autoridad.",
        keywords: ["Carrera", "Reputación", "Logros", "Autoridad"],
        planets: {
            sun: "Carrera pública y reconocida",
            moon: "Carrera emocional y de cuidado",
            mercury: "Carrera comunicativa e intelectual",
            venus: "Carrera estética y armoniosa",
            mars: "Carrera activa y energética",
            jupiter: "Carrera expansiva y exitosa",
            saturn: "Carrera responsable y estructurada",
            uranus: "Carrera innovadora y revolucionaria",
            neptune: "Carrera espiritual e idealizada",
            pluto: "Carrera intensa y transformadora"
        }
    },
    11: {
        name: "Casa XI",
        area: "Amistades y grupos",
        description: "Representa los amigos, los grupos, las esperanzas y los sueños.",
        keywords: ["Amistades", "Grupos", "Esperanzas", "Sueños"],
        planets: {
            sun: "Amistades que reflejan tu identidad",
            moon: "Amistades emocionales e intuitivas",
            mercury: "Amistades comunicativas e intelectuales",
            venus: "Amistades armoniosas y estéticas",
            mars: "Amistades activas y energéticas",
            jupiter: "Amistades expansivas y optimistas",
            saturn: "Amistades serias y responsables",
            uranus: "Amistades originales e innovadoras",
            neptune: "Amistades espirituales e idealistas",
            pluto: "Amistades intensas y transformadoras"
        }
    },
    12: {
        name: "Casa XII",
        area: "Subconsciente y espiritualidad",
        description: "Se relaciona con el subconsciente, la espiritualidad, los enemigos ocultos y el karma.",
        keywords: ["Subconsciente", "Espiritualidad", "Enemigos ocultos", "Karma"],
        planets: {
            sun: "Identidad en el subconsciente",
            moon: "Emociones ocultas",
            mercury: "Pensamiento subconsciente",
            venus: "Amor idealizado",
            mars: "Energía oculta",
            jupiter: "Sabiduría espiritual",
            saturn: "Disciplina espiritual",
            uranus: "Liberación espiritual",
            neptune: "Misticismo profundo",
            pluto: "Poder oculto"
        }
    }
};

// Datos adicionales para cálculos más precisos
const astrologicalData = {
    elements: {
        fire: {
            name: "Fuego",
            signs: ["aries", "leo", "sagittarius"],
            qualities: ["Caliente", "Seco", "Activo", "Expansivo"],
            compatibility: ["fire", "air"],
            incompatibility: ["water", "earth"]
        },
        earth: {
            name: "Tierra",
            signs: ["taurus", "virgo", "capricorn"],
            qualities: ["Frío", "Seco", "Estable", "Práctico"],
            compatibility: ["earth", "water"],
            incompatibility: ["fire", "air"]
        },
        air: {
            name: "Aire",
            signs: ["gemini", "libra", "aquarius"],
            qualities: ["Caliente", "Húmedo", "Intelectual", "Comunicativo"],
            compatibility: ["air", "fire"],
            incompatibility: ["earth", "water"]
        },
        water: {
            name: "Agua",
            signs: ["cancer", "scorpio", "pisces"],
            qualities: ["Frío", "Húmedo", "Emocional", "Intuitivo"],
            compatibility: ["water", "earth"],
            incompatibility: ["fire", "air"]
        }
    },
    
    modalities: {
        cardinal: {
            name: "Cardinal",
            signs: ["aries", "cancer", "libra", "capricorn"],
            qualities: ["Iniciador", "Líder", "Activo", "Directo"]
        },
        fixed: {
            name: "Fijo",
            signs: ["taurus", "leo", "scorpio", "aquarius"],
            qualities: ["Estable", "Perseverante", "Determinado", "Resistente"]
        },
        mutable: {
            name: "Mutable",
            signs: ["gemini", "virgo", "sagittarius", "pisces"],
            qualities: ["Adaptable", "Versátil", "Flexible", "Cambiante"]
        }
    },
    
    aspects: {
        conjunction: { angle: 0, orb: 10, nature: "Neutral", description: "Fusión de energías" },
        sextile: { angle: 60, orb: 6, nature: "Harmonious", description: "Oportunidad y cooperación" },
        square: { angle: 90, orb: 8, nature: "Challenging", description: "Tensión y conflicto" },
        trine: { angle: 120, orb: 8, nature: "Harmonious", description: "Armonía y facilidad" },
        opposition: { angle: 180, orb: 10, nature: "Challenging", description: "Polaridad y tensión" }
    }
};

export { zodiacSigns, planets, houses, astrologicalData };
