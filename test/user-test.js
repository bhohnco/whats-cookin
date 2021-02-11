const chai = require('chai');
const expect = chai.expect;

const User = require ('../src/user.js');

describe('User', () => {
  describe('should be a function', () => {
    let userData = {}

    beforeEach( () => {
      userData = {
        "name": "Matt",
        "id": 363,
        "pantry": [],
        "favoriteRecipe": [],
        "recipesToCook": []
      }
    });

    it('should be an instance of User', () => {
      const user = new User(userData)
      console.log(user.name)
      expect(user).to.be.an.instanceOf(User);
    });

    it('should contain a name', () => {
      const user = new User(userData)
      expect(user.name).to.equal('Matt');
    });

    it('should contain an id', () => {
      const user = new User(userData)
      expect(user.id).to.equal(363);
    });

    it('should contain a pantry', () => {
      const user = new User(userData)
      expect(user.pantry).to.deep.equal([]);
    });

    it.skip('should contain favorite recipes', () => {
      const user = new User(userData)
      expect(user.favoriteRecipe).to.deep.equal([]);
    });

    it.skip('should contain recipes to cook', () => {
      const user = new User(userData)
      expect(user.recipesToCook).to.deep.equal([]);
    })




  })
})