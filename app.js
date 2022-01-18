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
        if ((selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.id) === 2) {
            this.receipe.push(selectedSize);
            this.totalPrice = this.totalPrice + 2500;
        }
        if ((selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.id) === 1) {
            this.receipe.push(selectedSize);
            console.log(this.receipe);
        }
    };
    App.prototype.isToGo = function (answer) {
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
// a.isToGo(true);
a.choiceSize(1);
