"use strict";
exports.__esModule = true;
exports.App = void 0;
var menuList_js_1 = require("./menuList.js");
var App = /** @class */ (function () {
    function App() {
        this.receipe = [];
        this.totalPrice = 0;
        // this.myNumber = Math.floor(Math.random() * 10);
        this.myNumber = 0;
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
                this.choiceMenu(5);
                break;
            case 5:
                this.choiceSize(1);
                break;
            case 6:
                this.choiceBread(2);
                break;
            case 7:
                this.choiceCheese(3);
                break;
            case 8:
                this.choiceVegetable(5);
                break;
            case 9:
                this.choiceSauce(4);
                break;
            case 10:
                this.choiceOption(2);
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
        //매장식사
        else if (!answer && vaccinePassNumber) {
            // if(!answer && vaccinePassNumber) {
            //     console.log('매장식사 가능');
            // }
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
    App.prototype.choiceMenu = function (menuNumber) {
        var selectedMenu = menuList_js_1.menuList.menu.find(function (food) { return food.id === menuNumber; });
        if (selectedMenu && selectedMenu.price) {
            this.receipe = [selectedMenu];
            this.totalPrice = this.totalPrice + selectedMenu.price;
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
        var selectedVegetable = menuList_js_1.menuList.vegetable.find(function (vegetable) { return vegetable.id === vegetableNumber; });
        for (var i = 0; i < menuList_js_1.menuList.vegetable.length; i++) {
            var allVegetable = menuList_js_1.menuList.vegetable[i];
            this.receipe.push(allVegetable);
            if (selectedVegetable) {
                // 야채는 전체선택이 기본값. 인자로 받아온 야채를 선택제거
            }
        }
    };
    App.prototype.choiceSauce = function (sauceNumber) {
        var selectedSauce = menuList_js_1.menuList.sauce.find(function (sauce) { return sauce.id === sauceNumber; });
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
        }
        return;
    };
    App.prototype.choiceOption = function (optionNumber) {
        var selectedOption = menuList_js_1.menuList.option.find(function (option) { return option.id === optionNumber; });
        if (selectedOption && selectedOption.price) {
            this.receipe.push(selectedOption);
            this.totalPrice = this.totalPrice + selectedOption.price;
        }
        return;
    };
    App.prototype.payForOrderDetail = function (money) {
        if (money === this.totalPrice || money >= this.totalPrice) {
            var result = money - this.totalPrice;
            this.myNumber++;
            console.log(this.myNumber);
            return result;
        }
        console.log(this.receipe);
        console.log("\uC9C0\uBD88 \uAE08\uC561 : ".concat(money, "\uC6D0 / \uACB0\uC81C \uAE08\uC561: ").concat(this.totalPrice, "\uC6D0"));
        throw "".concat(money - this.totalPrice);
    };
    return App;
}());
exports.App = App;
