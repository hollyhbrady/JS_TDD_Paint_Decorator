const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room('10', false);
    });

    it('should have an area in square meters', function(){
        const actual = room.square_meter;
        assert.strictEqual(actual, '10');
    });
});