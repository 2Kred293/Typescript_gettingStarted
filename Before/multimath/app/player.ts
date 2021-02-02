/// <reference path = "person.ts"/>

 class player implements person {
    name : string;
    age : number;
    highScore: number;
    formatName() {
        return this.name.toUpperCase();
    }
}