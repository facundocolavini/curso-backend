//1 y 2
class Usuario {
    constructor(name,lastName,books,pets){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }
    //3
    getFullName(){
        return `${this.name} ${this.lastName}`
    }
    addPet(pet){
        this.pets.push(pet)
    }
    countPets(){
        return this.pets.length
    }
    addBook(name,author){
        this.books.push({name,author})
    }
    getBookNames(){
        return this.books.map(book => book.name)
    }
}
 


4//
let usuario1 = new Usuario('Facundo','Colavini',[{name:'1984',author:'George Orwell'}],['perro'])
console.log(usuario1)
console.log(`-----------------------------------------------`)
console.log('Nombre Completo: ' + usuario1.getFullName())
usuario1.addPet('Gato')
console.log('Mascotas: '+ usuario1.pets)
console.log('Cantidad de Mascotas: '+ usuario1.countPets())
usuario1.addBook('La sombra sobre Innsmouth','H.P Lovecraft')
console.log('Nombre de libros: ' +  usuario1.getBookNames())
console.log(usuario1)