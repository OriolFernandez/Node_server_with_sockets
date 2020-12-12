const {v4: uuidV4} = require('uuid');
class Item {
  constructor( name ='no_name')  {
      this.id = uuidV4();
      this.name = name;
      this.numberToBuy = 0;
  }
}
module.exports = Item;