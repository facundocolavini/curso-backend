const fs = require("fs").promises;
class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
        this.products = [];
    }
    async save(newObj){
        // Metodo asyc/await con promesas.Recibe un objeto, lo guarda en el archivo productos, devuelve el id asignado.
        //1- leen el archivo y lo guardan en una variable
        //2- leen el archivo y lo convierten a json
        //3- agregan el nuevo objeto al array
        //4- convierten el array a json
        //5- guardan el json en el archivo
        try{

            let file = await fs.readFile(this.fileName, "utf8");
            let json = JSON.parse(file);
            //agregar id al objeto nuevo que se va a guardar
            newObj.id = json.length + 1;
            json.push(newObj);
      
            let jsonString = JSON.stringify(json);
            await fs.writeFile(this.fileName, jsonString);
            return console.log(jsonString);
        }

        catch(error){
            console.log(error);
        }

    }
    async getById(id){
        //Recibe un id y devuelve el objeto con ese id, o null si no está.
        //1- buscan el archivo y lo guardan en una variable
        //2- crean una variable en donde convierten ese archivo a json 
        //3- buscan el id en el array
        //4 - retornan el objeto
        try{
            let file = await fs.readFile(this.fileName, "utf8");
            let json = JSON.parse(file);
            let product = json.find(product => product.id == id);
            return console.log(product);
        }
        catch{
           return null;
        }
    }
    async getAll(){ 
        // Devuelve un array con los objetos presentes en el archivo.  
        //1- buscan el archivo y lo guardan en una variable
        //2- crean una variable en donde convierten ese archivo a json recuerden
        //3- agregan ese archivo json en un nuevo array
        //4 - retornan el array
        try{
            let file = await fs.readFile(this.fileName, "utf8");
            let json = JSON.parse(file);
            this.products = json;
            return console.log(this.products);
        }
        catch(error){
            console.log(error);
        }
    }
    async deleteById(id){
        //Elimina el objeto con el id recibido.

        try{
            let file = await fs.readFile(this.fileName, "utf8");
            let json = JSON.parse(file);
            let product = json.filter(product => product.id != id);
            this.products = product;
            let jsonString = JSON.stringify(product);
            fs.writeFile(this.fileName, jsonString);
        }
        catch(error){
            console.log(error);
        }
    }
    async deleteAll(){
        //Elimina todos los objetos del archivo.
        //1- buscan el archivo y lo guardan en una variable
        //2- crean una variable en donde convierten ese archivo a json 
        //3- eliminan todos los objetos del array
        //4 - convierten el array a json
        //5 - guardan el json en el archivo
        try{

            let product = [];
            this.products = product;
            let jsonString = JSON.stringify(product);
            fs.writeFile(this.fileName, jsonString);
        }
        catch(error){
            console.log(error);
        } 
    }
}

module.exports = Contenedor;
