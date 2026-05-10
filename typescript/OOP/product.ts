// Definiti interfata Product cu name (string), price (number) si description (string, optional).
// Creati doua obiecte de tip Product: unul cu descriere, unul fara. Afisati-le pe ambele.


interface Product {
    name: string;
    price: number;
    description?: string; // câmp opțional
}

const productWithDescription: Product = {
    name: "Laptop",
    price: 1200,
    description: "Laptop performant cu ecran de 15 inch"
};

const productWithoutDescription: Product = {
    name: "Mouse",
    price: 25
};

console.log("Produs cu descriere:", productWithDescription);
console.log("Produs fără descriere:", productWithoutDescription);
