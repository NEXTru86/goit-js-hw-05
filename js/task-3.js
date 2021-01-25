function Storage(items) {
    this.items = [items];
};

Storage.prototype.getItems = function () {
    
    console.log()
    
};

Storage.prototype.addItem = function (item) {
    this.item = item;
    console.log()
    
};

Storage.prototype.removeItem = function (item) {
    this.item = item;
    console.log()
    
};

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