class Ingredient {
  constructor(ingData) {
    this.id = ingData.id;
    this.name = ingData.name;
    this.estimatedCostInCents = ingData.estimatedCostInCents;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
