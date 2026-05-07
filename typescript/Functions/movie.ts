// Topic 6: Objects — Way 2: Inline Type Object
// Exercise 6.3 — movie (inline type)
// Create a variable "movie" using an inline type annotation:
// •	Type fields: title: string, year: number, rating: number, getInfo: () => string
// •	getInfo() should return "<title> (<year>) — rating: <rating>/10"
// •	Test with: { title: "Inception", year: 2010, rating: 9 }


let movie: {
    title: string;
    year: number;
    rating: number;
    getInfo: () => string;
} = {
    title: "Inception",
    year: 2010,
    rating: 9,
    getInfo: function(): string {
        return `${this.title} (${this.year}) — rating: ${this.rating}/10`;
    }
};

console.log(movie.title);
console.log(movie.year);
console.log(movie.rating);
console.log(movie.getInfo());

