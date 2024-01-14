// Day 05

console.log("\n1. Class - Movie")
class Movie{
	constructor(title, studio, rating){
		this.title = title;
		this.studio = studio;
		this.rating = rating;

		if(rating == "" || rating === undefined){
			this.rating = "PG";
		}
	}

	getPG(movieList){
		let pgMovies = [];
		for(let i=0;i<movieList.length;i++){
			if(movieList[i].rating == "PG"){
				pgMovies.push(movieList[i].title)
			}
		}
		console.log(`PG movies: ${pgMovies}`);
	}
}

let casinoRoyale = new Movie("Casino Royale", "Eon Production", "PG13");
let greatEscape = new Movie("Great Escape", "United Artists", "U");
let topGun = new Movie("Top Gun", "Don Simpson/Jerry Bruckheimer Films", "PG");
let worldWar = new Movie("World War", "Twenty First Century Fox", "PG");

worldWar.getPG([casinoRoyale,greatEscape,topGun,worldWar]);

console.log("\n2. Circle class")

class Circle{
	constructor(radius, color){
		this.radius = radius;
		this.color = color;
	}

	getRadius(){
		console.log(`Radius: ${this.radius}`);
	}

	setRadius(newRadius){
		this.radius = newRadius;
		console.log(`New Radius: ${this.radius}`);
	}

	getColor(){
		console.log(`Color: ${this.color}`);
	}

	setColor(newColor){
		this.color = newColor;
		console.log(`New Color: ${newColor}`);
	}

	toString(){
		console.log(`"${this.constructor.name}[radius=${this.radius},color=${this.color}]"`);
	}

	getArea(){
		let radius = +this.radius
		console.log(`Area: ${(Math.PI*Math.sqrt(radius)).toFixed(2)}`);
	}

	getCircumference(){
		let radius = +this.radius;
		console.log(`Crcumference: ${(2*Math.PI*radius).toFixed(2)}`);
	}
}

let circle = new Circle("1", "red");
circle.getRadius();
circle.setRadius(2);
circle.getColor();
circle.setColor("Green");
circle.toString();
circle.getArea();
circle.getCircumference();

console.log("\n3. Class to hond person data.");
class Person{
	constructor(firstName, lastName, phoneNumber, emailID, gender, dob, address, qualification){
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.emailID = emailID;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.qualification = qualification;
	}
}

let kumaravel = new Person("Kumaravel", "Sundar", "1234567890", "kumaravelsk73@gmail.com", "Male", "1998", "Chennai", "B.E");
console.log(kumaravel);

console.log("\n4. Class to calculate uber price");

class uberRide{
	constructor(rideID, pickupLocation, dropLocation, kilometers, perKmPrice, platformFee, tips){
		this.rideID = rideID;
		this.pickupLocation = pickupLocation;
		this.dropLocation = dropLocation;
		this.kilometers = kilometers;
		this.perKmPrice = perKmPrice;
		this.platformFee = platformFee;
		this.tips = tips;
	}

	getRideCost(){
		let cost = (this.kilometers*this.perKmPrice) + this.platformFee + this.tips;
		console.log(`Ride Cost: ${cost}`);
	}
}

let rideOne = new uberRide(0001, "Koturpuram", "Thiruvanmiyur", 5, 17, 8, 10);
rideOne.getRideCost();