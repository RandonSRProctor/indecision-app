class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description +=  ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting = `${greeting} I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Student('Randy Proctor', 33, 'Media Informatics')
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

const homelessTraveler = new Traveler('Lone Charlie', 22,)
console.log(homelessTraveler.getGreeting())

const texasTraveler = new Traveler('Houston Henry', 45, 'Houston, TX')
console.log(texasTraveler.getGreeting())