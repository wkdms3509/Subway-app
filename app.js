"use strict";
exports.__esModule = true;
var menuList_js_1 = require("./menuList.js");
var App = /** @class */ (function () {
    function App() {
        this.receipe = [];
        this.totalPrice = 0;
        this._hasVaccinePass = false;
    }
    App.prototype.showMenu = function () {
        console.log('------menu------');
        console.log('1. 이탈리안 비엠티');
        console.log('2. 이탈리안 비엠티 에그마요');
        console.log('3. 비엘티');
        console.log('4. 미트볼');
        console.log('5. 터키');
        console.log('6. 베이컨 에그');
        console.log('7. 로스트 치킨');
        console.log('8. 베지');
        console.log('----------------');
    };
    App.prototype.choiceMenu = function (menuNumber) {
        var selectedMenu = menuList_js_1.menuList.menu.find(function (food) { return food.id === menuNumber; });
        if (selectedMenu && selectedMenu.price) {
            this.receipe = [selectedMenu];
            this.totalPrice = this.totalPrice + selectedMenu.price;
            // console.log(this.totalPrice);
        }
    };
    App.prototype.choiceSize = function (sizeNumber) {
        var selectedSize = menuList_js_1.menuList.size.find(function (breadSize) { return breadSize.id === sizeNumber; });
        // 기본 사이즈 (추가 요금 없음)
        if ((selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.id) === 1) {
            this.receipe.push(selectedSize);
        }
        // 큰 사이즈 (추가 요금 발생)
        if ((selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.id) === 2) {
            this.receipe.push(selectedSize);
            this.totalPrice = this.totalPrice + 2500;
        }
    };
    App.prototype.choiceBread = function (breadNumber) {
        var selectedBread = menuList_js_1.menuList.bread.find(function (bread) { return bread.id === breadNumber; });
        if (selectedBread === null || selectedBread === void 0 ? void 0 : selectedBread.id) {
            this.receipe.push(selectedBread);
        }
    };
    App.prototype.choiceCheese = function (cheeseNumber) {
        var selectedCheese = menuList_js_1.menuList.cheese.find(function (cheese) { return cheese.id === cheeseNumber; });
        if (selectedCheese) {
            this.receipe.push(selectedCheese);
        }
    };
    App.prototype.choiceVegetable = function (vegetableNumber) {
        var selectedVegetable = [menuList_js_1.menuList.vegetable[vegetableNumber]];
        if (selectedVegetable) {
            // this.receipe.push(selectedVegetable);
        }
    };
    App.prototype.choiceSauce = function (sauceNumber) {
        var selectedSauce = menuList_js_1.menuList.sauce.find(function (sauce) { return sauce.id === sauceNumber; });
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
            console.log("\uC18C\uC2A4: ".concat(selectedSauce.name));
            console.log(this.receipe);
        }
        return;
    };
    App.prototype.toGo = function (answer) {
        if (answer) {
            // 포장
            var result = this.totalPrice = this.totalPrice - 2000;
            console.log(result);
            return result;
        }
        //매장식사
        return this.totalPrice;
    };
    return App;
}());
var a = new App();
// console.log(a.showMenu());
a.choiceMenu(2);
// a.toGo(true);
a.choiceSize(1);
a.choiceBread(3);
a.choiceCheese(3);
// a.choiceVegetable(2);
a.choiceSauce(5);
