const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(10, false);
    });

    it('should have an area in square meters', function(){
        const actual = room.square_meters;
        assert.strictEqual(actual, 10);
    });

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(assert, false);
    });
});