const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/Ingredient')

describe('Ingredient', function() {
  describe('Initilize ingredient', function() {
    let ingData = {};

    beforeEach(function() {
      ingData = {
          "id": 20081,
          "name": "wheat flour",
          "estimatedCostInCents": 142
        }
      })

      it('should be an instance of Ingredient', function() {
        const ingredient = new Ingredient(ingData);

        expect(ingredient).to.be.an.instanceof(Ingredient);
      });

      it('should contain an id', function() {
        const ingredient = new Ingredient(ingData);

        expect(ingredient.id).to.equal(20081);
      });

      it('should contain an name', function() {
        const ingredient = new Ingredient(ingData);

        expect(ingredient.name).to.equal('wheat flour');
      });

      it('should contain an estimated cost in cents', function() {
        const ingredient = new Ingredient(ingData);

        expect(ingredient.estimatedCostInCents).to.equal(142);
      });
    });
});
