"use strict";
exports.__esModule = true;
exports.App = void 0;
var menuList_js_1 = require("./menuList.js");
var App = /** @class */ (function () {
    function App() {
        this.receipe = [];
        this.totalPrice = 0;
        this.orderNumber = 0;
    }
    App.prototype.init = function (number) {
        switch (number) {
            case 1:
                this.showInitialMenu();
                break;
            case 2:
                this.isToGo(true);
                break;
            case 3:
                this.showMenu();
                break;
            case 4:
                this.selectMenu(5);
                break;
            case 5:
                this.selectSize(1);
                break;
            case 6:
                this.selectBread(2);
                break;
            case 7:
                this.selectCheese(3);
                break;
            case 8:
                this.selectVegetable(5);
                break;
            case 9:
                this.selectSauce(4);
                break;
            case 10:
                this.selectOption(2);
                break;
            case 11:
                this.payForOrderDetail(10000);
                break;
            default:
                break;
        }
    };
    App.prototype.showInitialMenu = function () {
        console.log('------menu------');
        console.log('1. 매장');
        console.log('2. 포장');
        console.log('----------------');
    };
    App.prototype.isToGo = function (answer, vaccinePassNumber) {
        if (answer) {
            // 포장
            var result = this.totalPrice - 2000;
            return result;
        }
        else if (!answer && vaccinePassNumber) {
            console.log('매장식사 가능');
        }
        else {
            throw "매장 이용이 불가능합니다.";
        }
    };
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
    App.prototype.selectMenu = function (menuNumber) {
        var selectedBreadMenu = menuList_js_1.MenuData.menu.find(function (food) { return food.id === menuNumber; });
        if (selectedBreadMenu && selectedBreadMenu.price) {
            this.receipe = [selectedBreadMenu];
            this.totalPrice = this.totalPrice + selectedBreadMenu.price;
        }
    };
    App.prototype.selectSize = function (sizeNumber) {
        var selectedBreadSize = menuList_js_1.MenuData.size.find(function (breadSize) { return breadSize.id === sizeNumber; });
        // 기본 사이즈 (추가 요금 없음)
        if ((selectedBreadSize === null || selectedBreadSize === void 0 ? void 0 : selectedBreadSize.id) === 1) {
            this.receipe.push(selectedBreadSize);
        }
        // 큰 사이즈 (추가 요금 발생)
        if ((selectedBreadSize === null || selectedBreadSize === void 0 ? void 0 : selectedBreadSize.id) === 2) {
            this.receipe.push(selectedBreadSize);
            this.totalPrice = this.totalPrice + 2500;
        }
    };
    App.prototype.selectBread = function (breadNumber) {
        var selectedBread = menuList_js_1.MenuData.bread.find(function (bread) { return bread.id === breadNumber; });
        if (selectedBread === null || selectedBread === void 0 ? void 0 : selectedBread.id) {
            this.receipe.push(selectedBread);
        }
    };
    App.prototype.selectCheese = function (cheeseNumber) {
        var selectedCheese = menuList_js_1.MenuData.cheese.find(function (cheese) { return cheese.id === cheeseNumber; });
        if (selectedCheese) {
            this.receipe.push(selectedCheese);
        }
    };
    App.prototype.selectVegetable = function (vegetableNumber) {
        var selectedVegetable = menuList_js_1.MenuData.vegetable.find(function (vegetable) { return vegetable.id === vegetableNumber; });
        for (var i = 0; i < menuList_js_1.MenuData.vegetable.length; i++) {
            var allVegetable = menuList_js_1.MenuData.vegetable[i];
            this.receipe.push(allVegetable);
            if (selectedVegetable) {
                // 야채는 전체선택이 기본값. 인자로 받아온 야채를 선택제거
            }
        }
    };
    App.prototype.selectSauce = function (sauceNumber) {
        var selectedSauce = menuList_js_1.MenuData.sauce.find(function (sauce) { return sauce.id === sauceNumber; });
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
        }
        return;
    };
    App.prototype.selectOption = function (optionNumber) {
        var selectedOption = menuList_js_1.MenuData.option.find(function (option) { return option.id === optionNumber; });
        if (selectedOption && selectedOption.price) {
            this.receipe.push(selectedOption);
            this.totalPrice = this.totalPrice + selectedOption.price;
        }
        return;
    };
    App.prototype.payForOrderDetail = function (money) {
        if (money === this.totalPrice || money >= this.totalPrice) {
            var result = money - this.totalPrice;
            this.orderNumber++;
            return result;
        }
        console.log(this.receipe);
        console.log("\uC9C0\uBD88 \uAE08\uC561 : ".concat(money, "\uC6D0 / \uACB0\uC81C \uAE08\uC561: ").concat(this.totalPrice, "\uC6D0"));
        throw "".concat(money - this.totalPrice);
    };
    return App;
}());
exports.App = App;
