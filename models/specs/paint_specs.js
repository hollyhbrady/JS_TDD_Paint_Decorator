const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;
    beforeEach(function(){
        paint = new Paint(20, true);
    });

    it('should have a number of litres of paint', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 20);
    });

    it('should be able to check if it is empty', function(){
        const actual = paint.full;
        assert.strictEqual(actual, true);
    });

    it('should be able to empty itself of paint', function(){
        paint.emptyCan()
        const actual = paint.full;
        assert.strictEqual(actual, false);
    });
});