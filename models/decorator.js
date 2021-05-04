const Decorator = function(stock){
    this.stock = [];
};

Decorator.prototype.addCan = function(paint.litres){
    this.stock.push(paint.litres)
};


module.exports = Decorator;