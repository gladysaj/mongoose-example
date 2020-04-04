const mongoose = require("mongoose")

//Poner la ruta del archivo donde esta el modelo
const Perro  = require("./models/Perro");

const Cat = require("./models/Cat");

// Ruta de base de datos en mongo
mongoose.connect("mongodb://localhost/mongoose-test", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((x) => 
  console.log(`"Connected to mongo, database name: " ${x.connections[0].name}"`)
)
.catch((err) => console.error("Error connecting to mongo", err));


function createPerro(name) {
  // //Agregar a que colección
const kasper = new Perro({ name });
// // Agregar a base de datos
kasper
.save()
.then((newPerro) => console.log(`Un nuevo perro se agregó: ${newPerro.name}`))
.catch((err) => console.error(`Error al crear nuevo perro: ${err}`));
}

function searchPerros(query = {}) {
//Traer todos los documentos que tengo en colección perro
Perro.find({ query }).then((perros) => {
  console.log(perros);
});
}

// Create cat

function createCat(name, age) {
  const elGato = new Cat ({ name, age });

  elGato
  .create()
  .then((newCat) => console.log(`Un nuevo gato se añadió: ${newCat.name}`))
  .catch((err) => console.error(`Error al crear nuevo gato: ${err}`));
}

// createCat("meawli", 3)

// query para que funcione el buscar
// searchPerros({name: "kasper"});


function getAnimals() {
 const promise1 = Perro.find();
 const promise2 = Cat.find();

 Promise.all([promise1, promise2]).then((values) => {
   console.log(values);
 });
}

// getAnimals();

createCat('mishi', 21)