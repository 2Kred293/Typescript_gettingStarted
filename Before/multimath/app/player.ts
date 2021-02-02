import {person} from './person';

 export class player implements person {
    name : string;
    age : number;
    highScore: number;
    formatName() {
        return this.name.toUpperCase();
    }
}