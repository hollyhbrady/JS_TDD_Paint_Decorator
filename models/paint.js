const Paint = function(litres, full){
    this.litres = litres;
    this.full = true;
};

Paint.prototype.emptyCan = function(){
    return this.full = false;
};

module.exports = Paint;