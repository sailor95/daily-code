class Singleton {
  constructor(name, creator, products) {
    if (!Singleton.instance) {
      this.name = name;
      this.creator = creator;
      this.products = products;

      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

let daveFromDad = new Singleton('Dave', 'DAD', [
  'Coolness',
  'Smarts',
  'Height',
]);

let daveFromMom = new Singleton('Dave', 'MOM', [
  'Coolness',
  'Smarts',
  'Height',
]);

console.log(daveFromDad === daveFromMom); // true
