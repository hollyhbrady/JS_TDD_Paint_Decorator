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
});