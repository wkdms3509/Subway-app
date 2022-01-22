import { MenuData } from './menuList.js';

interface Receipe {
    id?: number,
    type?: string,
    name?: string,
    price?: number,
    size?:string,
}

export class App {
    receipe: Receipe[];
    totalPrice: number;
    orderNumber: number;

    constructor() {
        this.receipe = [];
        this.totalPrice = 0;
        this.orderNumber = 0;
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
                this.selectMenu(5);
                break;
            case 5 :
                this.selectSize(1);
                break;
            case 6 :
                this.selectBread(2);
                break;
            case 7 :
                this.selectCheese(3);
                break;
            case 8 :
                this.selectVegetable(5);
                break;
            case 9 :
                this.selectSauce(4);
                break;
            case 10 :
                this.selectOption(2);
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
        } else if (!answer && vaccinePassNumber) {
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

    selectMenu(menuNumber: number) {
        const selectedBreadMenu = MenuData.menu.find(food => food.id === menuNumber);
        if(selectedBreadMenu && selectedBreadMenu.price) {
            this.receipe = [ selectedBreadMenu ];
            this.totalPrice = this.totalPrice + selectedBreadMenu.price;
        }
    }

    selectSize(sizeNumber: number) {
        const selectedBreadSize = MenuData.size.find(breadSize => breadSize.id === sizeNumber);
        // 기본 사이즈 (추가 요금 없음)
        if(selectedBreadSize?.id === 1) {
            this.receipe.push(selectedBreadSize);
        }
        // 큰 사이즈 (추가 요금 발생)
        if(selectedBreadSize?.id === 2) {
            this.receipe.push(selectedBreadSize);
            this.totalPrice = this.totalPrice + 2500;
        }
    }

    selectBread(breadNumber: number) {
        const selectedBread = MenuData.bread.find(bread => bread.id === breadNumber);
        if(selectedBread?.id) {
            this.receipe.push(selectedBread);
        }
    }

    selectCheese(cheeseNumber: number) {
        const selectedCheese = MenuData.cheese.find(cheese => cheese.id === cheeseNumber);
        if (selectedCheese) {
            this.receipe.push(selectedCheese);
        }
    }

    selectVegetable(vegetableNumber?: number) {
        const selectedVegetable = MenuData.vegetable.find(vegetable => vegetable.id === vegetableNumber);
        for (let i = 0; i < MenuData.vegetable.length; i++) {
            const allVegetable = MenuData.vegetable[i];
            this.receipe.push(allVegetable);
            if (selectedVegetable) {
                // 야채는 전체선택이 기본값. 인자로 받아온 야채를 선택제거
            }
        }
    }

    selectSauce(sauceNumber: number) {
        const selectedSauce = MenuData.sauce.find(sauce => sauce.id === sauceNumber);
        if (selectedSauce) {
            this.receipe.push(selectedSauce);
        }
        return ;
    }

    selectOption(optionNumber: number) {
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
            this.orderNumber++;
            return result;
        }
        console.log(this.receipe);
        console.log(`지불 금액 : ${money}원 / 결제 금액: ${this.totalPrice}원`);
        throw `${money - this.totalPrice}`;
    }

}
