class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    _extractId = (url) => {
        const regExpId = /\/([0-9]+)\/$/;
        return url.match(regExpId)[1];
    };

    _transformPlanet = (planet) => {
        return{
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformPerson = (person) => {
        return{
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship) => {
        return{
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    getResources = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok)
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        return await response.json();
    }

    getAllPlanets = async () => {
        const result = await this.getResources(`/planets/`);
        return result.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResources(`/planets/${id}/`);
        return this._transformPlanet(planet)
    };

    getAllPeople = async () => {
        const result = await this.getResources(`/people/`);
        return result.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResources(`/people/${id}/`);
        return this._transformPerson(person)
    };

    getAllStarships = async () => {
        const result = await this.getResources(`/starships/`);
        return result.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResources(`/starships/${id}/`);
        return this._transformStarship(starship);
    }
}

const Swapi = new SwapiService();

export default Swapi;
