"use strict";
exports.__esModule = true;
exports.menuList = void 0;
var menuName;
(function (menuName) {
    menuName[menuName["\uC774\uD0C8\uB9AC\uC548\uBE44\uC5E0\uD2F0"] = 0] = "\uC774\uD0C8\uB9AC\uC548\uBE44\uC5E0\uD2F0";
    menuName[menuName["\uC774\uD0C8\uB9AC\uC548\uBE44\uC5E0\uD2F0\uC5D0\uADF8\uB9C8\uC694"] = 1] = "\uC774\uD0C8\uB9AC\uC548\uBE44\uC5E0\uD2F0\uC5D0\uADF8\uB9C8\uC694";
    menuName[menuName["\uBE44\uC5D8\uD2F0"] = 2] = "\uBE44\uC5D8\uD2F0";
    menuName[menuName["\uBBF8\uD2B8\uBCFC"] = 3] = "\uBBF8\uD2B8\uBCFC";
    menuName[menuName["\uD130\uD0A4"] = 4] = "\uD130\uD0A4";
    menuName[menuName["\uBCA0\uC774\uCEE8\uC5D0\uADF8"] = 5] = "\uBCA0\uC774\uCEE8\uC5D0\uADF8";
    menuName[menuName["\uB85C\uC2A4\uD2B8\uCE58\uD0A8"] = 6] = "\uB85C\uC2A4\uD2B8\uCE58\uD0A8";
    menuName[menuName["\uBCA0\uC9C0"] = 7] = "\uBCA0\uC9C0";
})(menuName || (menuName = {}));
var menuType;
(function (menuType) {
    menuType[menuType["\uBA54\uB274"] = 0] = "\uBA54\uB274";
    menuType[menuType["\uC0AC\uC774\uC988"] = 1] = "\uC0AC\uC774\uC988";
    menuType[menuType["\uBE75"] = 2] = "\uBE75";
    menuType[menuType["\uCE58\uC988"] = 3] = "\uCE58\uC988";
    menuType[menuType["\uC57C\uCC44"] = 4] = "\uC57C\uCC44";
    menuType[menuType["\uC18C\uC2A4"] = 5] = "\uC18C\uC2A4";
})(menuType || (menuType = {}));
var breadType;
(function (breadType) {
    breadType[breadType["\uD5C8\uB2C8\uC624\uD2B8"] = 0] = "\uD5C8\uB2C8\uC624\uD2B8";
    breadType[breadType["\uD558\uD2F0"] = 1] = "\uD558\uD2F0";
    breadType[breadType["\uC704\uD2B8"] = 2] = "\uC704\uD2B8";
    breadType[breadType["\uD30C\uB9C8\uC0B0\uC624\uB808\uAC00\uB178"] = 3] = "\uD30C\uB9C8\uC0B0\uC624\uB808\uAC00\uB178";
    breadType[breadType["\uD654\uC774\uD2B8"] = 4] = "\uD654\uC774\uD2B8";
    breadType[breadType["\uD50C\uB7AB\uBE0C\uB808\uB4DC"] = 5] = "\uD50C\uB7AB\uBE0C\uB808\uB4DC";
})(breadType || (breadType = {}));
var cheeseType;
(function (cheeseType) {
    cheeseType[cheeseType["\uC544\uBA54\uB9AC\uCE78 \uCE58\uC988"] = 0] = "\uC544\uBA54\uB9AC\uCE78 \uCE58\uC988";
    cheeseType[cheeseType["\uC288\uB808\uB4DC \uCE58\uC988"] = 1] = "\uC288\uB808\uB4DC \uCE58\uC988";
    cheeseType[cheeseType["\uBAA8\uC9DC\uB810\uB77C"] = 2] = "\uBAA8\uC9DC\uB810\uB77C";
})(cheeseType || (cheeseType = {}));
var vegetableType;
(function (vegetableType) {
    vegetableType[vegetableType["\uC591\uC0C1\uCD94"] = 0] = "\uC591\uC0C1\uCD94";
    vegetableType[vegetableType["\uD1A0\uB9C8\uD1A0"] = 1] = "\uD1A0\uB9C8\uD1A0";
    vegetableType[vegetableType["\uD53C\uB9DD"] = 2] = "\uD53C\uB9DD";
    vegetableType[vegetableType["\uC624\uC774"] = 3] = "\uC624\uC774";
    vegetableType[vegetableType["\uD53C\uD074"] = 4] = "\uD53C\uD074";
    vegetableType[vegetableType["\uC591\uD30C"] = 5] = "\uC591\uD30C";
    vegetableType[vegetableType["\uC62C\uB9AC\uBE0C"] = 6] = "\uC62C\uB9AC\uBE0C";
    vegetableType[vegetableType["\uD560\uB77C\uD53C\uB1E8"] = 7] = "\uD560\uB77C\uD53C\uB1E8";
})(vegetableType || (vegetableType = {}));
var sauceType;
(function (sauceType) {
    sauceType[sauceType["\uB79C\uCE58"] = 0] = "\uB79C\uCE58";
    sauceType[sauceType["\uB9C8\uC694\uB124\uC988"] = 1] = "\uB9C8\uC694\uB124\uC988";
    sauceType[sauceType["\uD56B\uCE60\uB9AC"] = 2] = "\uD56B\uCE60\uB9AC";
    sauceType[sauceType["\uC2A4\uC704\uD2B8 \uC5B4\uB2C8\uC5B8"] = 3] = "\uC2A4\uC704\uD2B8 \uC5B4\uB2C8\uC5B8";
    sauceType[sauceType["\uC0AC\uC6B0\uC2A4 \uC6E8\uC2A4\uD2B8"] = 4] = "\uC0AC\uC6B0\uC2A4 \uC6E8\uC2A4\uD2B8";
    sauceType[sauceType["\uD640\uC2A4\uB798\uB514\uC26C"] = 5] = "\uD640\uC2A4\uB798\uB514\uC26C";
    sauceType[sauceType["\uBA38\uC2A4\uD0C0\uB4DC"] = 6] = "\uBA38\uC2A4\uD0C0\uB4DC";
    sauceType[sauceType["\uC2A4\uBAA8\uD06C \uBC14\uBCA0\uD050"] = 7] = "\uC2A4\uBAA8\uD06C \uBC14\uBCA0\uD050";
    sauceType[sauceType["\uC62C\uB9AC\uBE0C \uC624\uC77C"] = 8] = "\uC62C\uB9AC\uBE0C \uC624\uC77C";
    sauceType[sauceType["\uC18C\uAE08"] = 9] = "\uC18C\uAE08";
    sauceType[sauceType["\uD6C4\uCD94"] = 10] = "\uD6C4\uCD94";
})(sauceType || (sauceType = {}));
var optionName;
(function (optionName) {
    optionName[optionName["\uC138\uD2B8"] = 0] = "\uC138\uD2B8";
    optionName[optionName["\uCFE0\uD0A4"] = 1] = "\uCFE0\uD0A4";
})(optionName || (optionName = {}));
var breadSize;
(function (breadSize) {
    breadSize[breadSize["15cm"] = 0] = "15cm";
    breadSize[breadSize["30cm"] = 1] = "30cm";
})(breadSize || (breadSize = {}));
var drink;
(function (drink) {
    drink[drink["\uCF5C\uB77C"] = 0] = "\uCF5C\uB77C";
    drink[drink["\uC0AC\uC774\uB2E4"] = 1] = "\uC0AC\uC774\uB2E4";
    drink[drink["\uD658\uD0C0"] = 2] = "\uD658\uD0C0";
    drink[drink["\uD3A9\uC2DC"] = 3] = "\uD3A9\uC2DC";
    drink[drink["\uC81C\uB85C\uCF5C\uB77C"] = 4] = "\uC81C\uB85C\uCF5C\uB77C";
})(drink || (drink = {}));
exports.menuList = {
    menu: [
        { id: 1, type: '메뉴', name: '이탈리안비엠티', price: 4900 },
        { id: 2, type: '메뉴', name: '이탈리안비엠티에그마요', price: 6500 },
        { id: 3, type: '메뉴', name: '비엘티', price: 5700 },
        { id: 4, type: '메뉴', name: '미트볼', price: 5600 },
        { id: 5, type: '메뉴', name: '터키', price: 5600 },
        { id: 6, type: '메뉴', name: '베이컨에그', price: 3100 },
        { id: 7, type: '메뉴', name: '로스트치킨', price: 6400 },
        { id: 8, type: '메뉴', name: '베지', price: 4100 }
    ],
    size: [
        { id: 1, type: '사이즈', size: '15cm' },
        { id: 2, type: '사이즈', size: '30cm', price: 2500 }
    ],
    bread: [
        { id: 1, type: '빵', name: '허니오트' },
        { id: 2, type: '빵', name: '하티' },
        { id: 3, type: '빵', name: '위트' },
        { id: 4, type: '빵', name: '파마산오레가노' },
        { id: 5, type: '빵', name: '화이트' },
        { id: 6, type: '빵', name: '플랫브레드' }
    ],
    cheese: [
        { id: 1, type: '치즈', name: "아메리칸 치즈" },
        { id: 2, type: '치즈', name: "슈레드 치즈" },
        { id: 3, type: '치즈', name: "모짜렐라" }
    ],
    vegetable: [
        { id: 1, type: '야채', name: '양상추' },
        { id: 2, type: '야채', name: '토마토' },
        { id: 3, type: '야채', name: '피망' },
        { id: 4, type: '야채', name: '오이' },
        { id: 5, type: '야채', name: '피클' },
        { id: 6, type: '야채', name: '양파' },
        { id: 7, type: '야채', name: '올리브' },
        { id: 8, type: '야채', name: '할라피뇨' }
    ],
    sauce: [
        { id: 1, type: '소스', name: '랜치' },
        { id: 2, type: '소스', name: '마요네즈' },
        { id: 3, type: '소스', name: '핫칠리' },
        { id: 4, type: '소스', name: '스위트 어니언' },
        { id: 5, type: '소스', name: '사우스 웨스트' },
        { id: 6, type: '소스', name: '홀스래디쉬' },
        { id: 7, type: '소스', name: '머스타드' },
        { id: 8, type: '소스', name: '스모크 바베큐' },
        { id: 9, type: '소스', name: '올리브 오일' },
        { id: 10, type: '소스', name: '소금' },
        { id: 11, type: '소스', name: '후추' }
    ],
    option: [
        { id: 1, name: '쿠키세트', price: 2000 },
        { id: 2, name: '쿠키+음료세트', price: 1000 }
    ]
};
