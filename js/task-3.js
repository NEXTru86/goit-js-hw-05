class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems () {
        return(this.items)
    };

    addItem(item) {
        this.item = item;
        this.items.push(item);
    };


    removeItem(item) {
        this.item = item;

        for (const item of this.items) {
            
            if (this.items.includes(this.item)) {
                const removeIndex = this.items.indexOf(this.item);
                this.items.splice(removeIndex, 1);
            }            
        };
    };
}



const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]