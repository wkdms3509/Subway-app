import { MenuData } from './menuList.js';

interface Receipe {
    id?: number,
    type?: string,
    name?: string,
    price?: number,
    size?:string
}

export class App {
    receipe: Receipe[];
    totalPrice: number;
    myNumber: number;

    constructor() {
        this.receipe = [];
        this.totalPrice = 0;
        this.myNumber = 0;
    }

    init(number: number) {
        switch(number) {
            case 1 :
                this.showInitialMenu();
                break;
            case 2 :
                this.isToGo(true);
                break;
            case 3 :
                this.showMenu();
                break;
            case 4 :
                this.choiceMenu(5);
                break;
            case 5 :
                this.choiceSize(1);
                break;
            case 6 :
                this.choiceBread(2);
                break;
            case 7 :
                this.choiceCheese(3);
                break;
            case 8 :
                this.choiceVegetable(5);
                break;
            case 9 :
                this.choiceSauce(4);
                break;
            case 10 :
                this.choiceOption(2);
                break;
            case 11 :
                this.payForOrderDetail(10000);
                break;
            default :
                break;
        }
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
            console.log('매장식사 가능');
        } else {
            throw "매장 이용이 불가능합니다.";
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
        const selectedMenu = MenuData.menu.find(food => food.id === menuNumber);
        if(selectedMenu && selectedMenu.price) {
            this.receipe = [ selectedMenu ];
            this.totalPrice = this.totalPrice + selectedMenu.price;
        }
    }

    choiceSize(sizeNumber: number):void {
        const selectedSize = MenuData.size.find(breadSize => breadSize.id === sizeNumber);
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
        const selectedBread = MenuData.bread.find(bread => bread.id === breadNumber);
        if(selectedBread?.id) {
            this.receipe.push(selectedBread);
        }
    }

    choiceCheese(cheeseNumber: number):void {
        const selectedCheese = MenuData.cheese.find(cheese => cheese.id === cheeseNumber);
        if (selectedCheese) {
            this.receipe.push(selectedCheese);
        }
    }

    choiceVegetable(vegetableNumber?: number): void {
        const selectedVegetable = MenuData.vegetable.find(vegetable => vegetable.id === vegetableNumber);
        for (let i = 0; i < MenuData.vegetable.length; i++) {
            const allVegetable = MenuData.vegetable[i];
            this.receipe.push(allVegetable);
            if (selectedVegetable) {
                // 야채는 전체선택이 기본값. 인자로 받아온 야채를 선택제거
            }
        }
    }

    choiceSauce(sauceNumber: number):void {
        const selectedSauce = MenuData.sauce.find(sauce => sauce.id === sauceNumber);
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
        }
        return ;
    }

    choiceOption(optionNumber: number):void {
        const selectedOption = MenuData.option.find(option => option.id === optionNumber);
        if (selectedOption && selectedOption.price) {
            this.receipe.push(selectedOption);        
            this.totalPrice = this.totalPrice + selectedOption.price;
        }
        return ;
    }

    payForOrderDetail(money: number): number {
        if (money === this.totalPrice || money >= this.totalPrice) {
            const result = money - this.totalPrice;
            this.myNumber++;
            return result;
        }
        console.log(this.receipe);
        console.log(`지불 금액 : ${money}원 / 결제 금액: ${this.totalPrice}원`);
        throw `${money - this.totalPrice}`;
    }

}
