import { menuList } from './menuList.js';

class App {
    public receipe: [];
    public totalPrice: number;
    private _isTogo: boolean;
    private _hasVaccinePass: boolean;

    constructor(isTogo: boolean) {
        this.receipe = [];
        this.totalPrice = 0;
        this._isTogo = isTogo;
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

}

const a = new App(true);

console.log(a.showMenu());
