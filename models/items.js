const Item = require("./item");

class Items {
    constructor() {
        this.items = [];
    }

    addItem(item = new Item()) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    deleteItem(id = '') {
        this.items.filter(item => item.id !== id);
    }

    addItemNumber(id = '') {
        console.log("***");
        console.log(id);        
        console.log(this.items);
        this.items = this.items.map(item => {
            if (item.id === id) {
 
                item.numberToBuy++;
                return item;
            } else {
                return item;
            }
        });
    }
}

module.exports = Items;