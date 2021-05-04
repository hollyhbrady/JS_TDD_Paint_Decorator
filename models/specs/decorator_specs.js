const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator([]);
    });

    it('should start with empty paint stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add can of paint to stock', function(){
        decorator.addCan(10);
        const actual = decorator.stock;
        assert.strictEqual(actual, 10)
    });
})