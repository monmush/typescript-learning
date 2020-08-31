import faker from 'faker'
import { Mapable } from './CustomMap';

export class Company implements Mapable {
    companyName: string, 
    catchPhrase: string, 
    location: {
        lng: number, 
        lat: number,
    }
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `
        Company name: ${this.companyName}
        Catch Phrase: ${this.catchPhrase}
        `;
      }
}