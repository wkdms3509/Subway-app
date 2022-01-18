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
    _hasVaccinePass: boolean;

    constructor() {
        this.receipe = [];
        this.totalPrice = 0;
        this._hasVaccinePass = false;
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
            console.log(this.receipe);
        }
    }

    choiceVegetable(vegetableNumber: number): void {
        const selectedVegetable = [ menuList.vegetable[vegetableNumber]];
        if (selectedVegetable) {
            // this.receipe.push(selectedVegetable);
        }
    }

    toGo(answer: boolean): number {
        if(answer) {
            // 포장
            const result = this.totalPrice = this.totalPrice - 2000;
            console.log(result);
            return result;
        }
        //매장식사
        return this.totalPrice;
    }

}

const a = new App();

// console.log(a.showMenu());
a.choiceMenu(2);
// a.toGo(true);
a.choiceSize(1);
a.choiceBread(3);
a.choiceCheese(3);
a.choiceVegetable(2);