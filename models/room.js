const Room = function (square_meters, painted){
    this.square_meters = square_meters;
    this.painted = false;
};

Room.prototype.paintRoom = function() {
    this.painted = true;
};


module.exports = Room;