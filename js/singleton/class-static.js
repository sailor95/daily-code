class Singleton {
  constructor(name, creator, products) {
    this.name = name;
    this.creator = creator;
    this.products = products;
  }

  static getInstance(name, creator, products) {
    if (!this.instance) {
      this.instance = new Singleton(name, creator, products);
    }
    return this.instance;
  }
}

let daveFromDad = Singleton.getInstance('Dave', 'DAD', [
  'Coolness',
  'Smarts',
  'Height',
]);

let daveFromMom = Singleton.getInstance('Dave', 'MOM', [
  'Coolness',
  'Smarts',
  'Height',
]);

console.log(daveFromDad === daveFromMom); // true
