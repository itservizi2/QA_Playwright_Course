// Exercise 6.6 — UserProfile (intersection types)
// Use intersection types to combine multiple type aliases:
// •	Type Address: street: string, city: string, zipCode: string
// •	Type User: username: string, email: string
// •	Type UserProfile = Address & User & { getProfile: () => string }
// •	getProfile() returns "<username> (<email>) lives at <street>, <city> <zipCode>"
// •	Test with one full UserProfile object


type Address = {
    street: string;
    city: string;
    zipCode: string;
};


type User = {
    username: string;
    email: string;
};


type UserProfile = Address & User & {
    getProfile: () => string;
};


const userProfile: UserProfile = {
    username: "alex123",
    email: "alex@example.com",
    street: "123 Main St",
    city: "Chisinau",
    zipCode: "MD-2001",
    getProfile: function(): string {
        return `${this.username} (${this.email}) lives at ${this.street}, ${this.city} ${this.zipCode}`;
    }
};

console.log(userProfile.getProfile());

