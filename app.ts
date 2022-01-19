import { menuList } from './menuList.js';

interface Receipe {
    id?: number,
    type?: string,
    name?: string,
    price?: number,
    size?:string
}

class App {
    receipe: Receipe[];
    totalPrice: number;

    constructor() {
        this.receipe = [];
        this.totalPrice = 0;
    }

    showInitialMenu() {
        console.log('------menu------');
        console.log('1. 매장');
        console.log('2. 포장');
        console.log('----------------');
    }

    isToGo(answer: boolean, vaccinePassNumber?: number) {
        if(answer) {
            // 포장
            const result = this.totalPrice - 2000;
            return result;
        }
        //매장식사
        else if (!answer && vaccinePassNumber) {
            // if(!answer && vaccinePassNumber) {
            //     console.log('매장식사 가능');
            // }
            console.log('매장식사 가능');
        } else {
            console.log('매장식사 불가능');
        }
    }

    showMenu() {
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
    }

    choiceMenu(menuNumber: number):void {
        const selectedMenu = menuList.menu.find(food => food.id === menuNumber);
        if(selectedMenu && selectedMenu.price) {
            this.receipe = [ selectedMenu ];
            this.totalPrice = this.totalPrice + selectedMenu.price;
            // console.log(this.totalPrice);
        }
    }

    choiceSize(sizeNumber: number):void {
        const selectedSize = menuList.size.find(breadSize => breadSize.id === sizeNumber);
        // 기본 사이즈 (추가 요금 없음)
        if(selectedSize?.id === 1) {
            this.receipe.push(selectedSize);
        }
        // 큰 사이즈 (추가 요금 발생)
        if(selectedSize?.id === 2) {
            this.receipe.push(selectedSize);
            this.totalPrice = this.totalPrice + 2500;
        }
    }

    choiceBread(breadNumber: number):void {
        const selectedBread = menuList.bread.find(bread => bread.id === breadNumber);
        if(selectedBread?.id) {
            this.receipe.push(selectedBread);
        }
    }

    choiceCheese(cheeseNumber: number):void {
        const selectedCheese = menuList.cheese.find(cheese => cheese.id === cheeseNumber);
        if (selectedCheese) {
            this.receipe.push(selectedCheese);
        }
    }

    choiceVegetable(vegetableNumber: number): void {
        const selectedVegetable = [ menuList.vegetable[vegetableNumber]];
        if (selectedVegetable) {
            // this.receipe.push(selectedVegetable);
        }
    }

    choiceSauce(sauceNumber: number):void {
        const selectedSauce = menuList.sauce.find(sauce => sauce.id === sauceNumber);
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
        }
        return ;
    }

    choiceOption(optionNumber: number):void {
        const selectedOption = menuList.option.find(option => option.id === optionNumber);
        if (selectedOption && selectedOption.price) {
            this.receipe.push(selectedOption);        
            this.totalPrice = this.totalPrice + selectedOption.price;
        }
        return ;
    }

    payForOrderDetail(money: number): number {
        if (money === this.totalPrice || money >= this.totalPrice) {
            const result = money - this.totalPrice;
            return result;
        }
        console.log('금액이 부족합니다.');
        console.log(money - this.totalPrice);
        
        return money - this.totalPrice;
    }

}

const a = new App();

// console.log(a.showMenu());
a.showInitialMenu();
a.isToGo(false);
// a.choiceMenu(2);
// a.choiceSize(1);
// a.choiceBread(3);
// a.choiceCheese(3);
// // a.choiceVegetable(2);
// a.choiceSauce(5);
// a.choiceOption(2);
// a.payForOrderDetail(6000);