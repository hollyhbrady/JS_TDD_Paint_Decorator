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
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.equal(actual, true);
    });
});