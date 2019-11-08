class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResources(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok)
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        return await response.json();
    }

    async getAllPlanets() {
        const result = await this.getResources(`/planets/`);
        return result.results;
    }

    getPlanet(id) {
        return this.getResources(`/planets/${id}/`)
    }

    async getAllPeople() {
        const result = await this.getResources(`/people/`);
        return result.results;
    }

    getPerson(id) {
        return this.getResources(`/people/${id}/`)
    }

    async getAllStarships() {
        const result = await this.getResources(`/starships/`);
        return result.results;
    }

    getStarship(id) {
        return this.getResources(`/starships/${id}/`)
    }
}

const Swapi = new SwapiService();

export default Swapi;
