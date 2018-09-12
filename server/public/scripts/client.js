console.log('js');
let foodApp = angular.module('FoodApp', [])

let menu = [
    { name: 'Spaghetti', deliciousness: Math.floor(Math.random() * 100 + 1) },
    { name: 'Meatballs', deliciousness: Math.floor(Math.random() * 100 + 1) },
    { name: 'Italian Sausage', deliciousness: Math.floor(Math.random() * 100 + 1) },
    { name: 'Pizza', deliciousness: Math.floor(Math.random() * 100 + 1) }
]

foodApp.controller('FoodController', function () {
    let self = this;

    self.menu = menu;

    self.menuItem = ''
    self.rating = ''

    self.add = function (food, rating) {
        console.log(food, `was added to the menu!`);
        let newFoodItem= { name: food, deliciousness: Number(rating) }
        menu.push(newFoodItem);
    }
})
