class Pokemon {
  #name;
  #HP;
  constructor({ name, HP, element }) {
    this.#name = name;
    this.#HP = HP;
    this.element = element;
  }

  get HP() {
    return this.#HP;
  }
  set HP(newHP) {
    this.#HP = newHP;
  }
}

const pikachu = new Pokemon({ name: "Pikachu", HP: 73, element: "Electric" });

table(pikachu);

// // Object create - inheritance
// const bulbasaur = Object.create(pikachu);

// log(bulbasaur.name);

// log(bulbasaur.hasOwnProperty("name"));

const charmander = new Pokemon({ name: "Charmander", HP: 20 , element: "Grass" });

table(charmander)



// // charmander.name = "bulbasaur";

// // log(charmander.name)

// // log(pikachu.isPrototypeOf(bulbasaur));

// log("Prototype:", this);
// log("Prototype:I", this.__proto__);
// log("Prototype:II", this.__proto__.__proto__);
// log("Prototype:III", this.__proto__.__proto__.__proto__);
