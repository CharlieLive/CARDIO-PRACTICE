class Pokemon {
    constructor(name, HP, element) {
        this.name = name;
        this.HP = HP;
        this.element = element;
    }
}

const pikachu = new Pokemon("Pikachu", 73, "electric");

table(pikachu);

