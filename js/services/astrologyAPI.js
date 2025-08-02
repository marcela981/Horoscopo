// Usar axios desde CDN en lugar de módulo
// import axios from 'axios';

class AstrologyAPI {
    constructor() {
        this.baseURL = 'https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api';
        this.apiKey = '1302003c20msh6039fea497ecbc3p158be6jsn4d23aca00f69';
        this.headers = {
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
        };
    }

    // Mapeo de signos en español a inglés para la API
    getZodiacSignMapping(signName) {
        const signMapping = {
            'aries': 'aries',
            'taurus': 'taurus', 
            'gemini': 'gemini',
            'cancer': 'cancer',
            'leo': 'leo',
            'virgo': 'virgo',
            'libra': 'libra',
            'scorpio': 'scorpio',
            'sagittarius': 'sagittarius',
            'capricorn': 'capricorn',
            'aquarius': 'aquarius',
            'pisces': 'pisces'
        };
        return signMapping[signName.toLowerCase()] || 'leo';
    }

    // Obtener horóscopo detallado por signo
    async getDetailedHoroscope(zodiacSign, period = 'yearly') {
        try {
            const mappedSign = this.getZodiacSignMapping(zodiacSign);
            
            const options = {
                method: 'GET',
                url: `${this.baseURL}/Detailed-Horoscope/${period}/`,
                params: { zodiacSign: mappedSign },
                headers: this.headers
            };

            const response = await axios.request(options);
            console.log('Horóscopo obtenido:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error obteniendo horóscopo:', error);
            throw error;
        }
    }

    // Obtener horóscopo diario
    async getDailyHoroscope(zodiacSign) {
        return this.getDetailedHoroscope(zodiacSign, 'daily');
    }

    // Obtener horóscopo semanal
    async getWeeklyHoroscope(zodiacSign) {
        return this.getDetailedHoroscope(zodiacSign, 'weekly');
    }

    // Obtener horóscopo mensual
    async getMonthlyHoroscope(zodiacSign) {
        return this.getDetailedHoroscope(zodiacSign, 'monthly');
    }

    // Obtener horóscopo anual
    async getYearlyHoroscope(zodiacSign) {
        return this.getDetailedHoroscope(zodiacSign, 'yearly');
    }

    // Obtener horóscopo para todos los signos
    async getAllSignsHoroscope(period = 'daily') {
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
                      'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        
        try {
            const horoscopes = {};
            
            for (const sign of signs) {
                try {
                    const horoscope = await this.getDetailedHoroscope(sign, period);
                    horoscopes[sign] = horoscope;
                } catch (error) {
                    console.error(`Error obteniendo horóscopo para ${sign}:`, error);
                    horoscopes[sign] = null;
                }
            }
            
            return horoscopes;
        } catch (error) {
            console.error('Error obteniendo horóscopos para todos los signos:', error);
            throw error;
        }
    }

    // Función auxiliar para convertir fecha y hora a formato de API
    parseBirthData(birthDate, birthTime, location = {}) {
        const date = new Date(birthDate + 'T' + birthTime);
        
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            longitude: location.longitude || 0,
            latitude: location.latitude || 40.7128,
            city: location.city || "New York",
            nation: location.nation || "US",
            timezone: location.timezone || "America/New_York",
            name: location.name || "Usuario"
        };
    }

    // Función para obtener coordenadas automáticamente (requiere Geonames username)
    async getCoordinatesFromCity(city, nation, geonamesUsername) {
        // Esta función requeriría implementar la API de Geonames
        // Por ahora, usamos coordenadas por defecto
        return {
            longitude: 0,
            latitude: 40.7128,
            timezone: "America/New_York"
        };
    }
}

export default AstrologyAPI; 