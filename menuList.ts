
enum menuName {
    '이탈리안비엠티',
    '이탈리안비엠티에그마요',
    '비엘티',
    '미트볼',
    '터키',
    '베이컨에그',
    '로스트치킨',
    '베지'
}

enum menuType {
    '메뉴',
    '사이즈',
    '빵',
    '치즈',
    '야채',
    '소스'
}

enum breadType {
    '허니오트', 
    '하티', 
    '위트', 
    '파마산오레가노', 
    '화이트', 
    '플랫브레드'
}

enum cheeseType {
    '아메리칸 치즈',
    '슈레드 치즈', 
    '모짜렐라'
}

enum vegetableType {
    '양상추', 
    '토마토', 
    '피망', 
    '오이', 
    '피클', 
    '양파', 
    '올리브', 
    '할라피뇨'
}

enum sauceType {
    '랜치', 
    '마요네즈', 
    '핫칠리', 
    '스위트 어니언', 
    '사우스 웨스트', 
    '홀스래디쉬', 
    '머스타드', 
    '스모크 바베큐', 
    '올리브 오일', 
    '소금', 
    '후추'
}

enum optionName {
    '세트',
    '쿠키'
}

enum breadSize {
    '15cm', 
    '30cm'
}

enum drink {
    '콜라',
    '사이다',
    '환타',
    '펩시',
    '제로콜라'
}

interface MenuInfo {
    id: number;
    type: menuType;
    name: menuName;
    price: number;
}

interface title {
    menu: string,
    size: string,
    bread: string,
    cheese: string,
    vegetable: string,
    sauce: string,
    option: string
}

interface foodType {
    id?: number,
    type?: string,
    name?: string,
    price?: number,
    size?:string
}

interface orderProcess {
    menu: Array<foodType>,
    size: Array<foodType>,
    bread: Array<foodType>,
    cheese: Array<foodType>,
    vegetable: Array<foodType>,
    sauce: Array<foodType>,
    option: Array<foodType>
}

export const menuList: orderProcess = {
    menu: [
        {id: 1, type: '메뉴', name: '이탈리안비엠티', price: 4900},
        {id: 2, type: '메뉴', name: '이탈리안비엠티에그마요', price: 6500},
        {id: 3, type: '메뉴', name: '비엘티', price: 5700},
        {id: 4, type: '메뉴', name: '미트볼', price: 5600},
        {id: 5, type: '메뉴', name: '터키', price: 5600},
        {id: 6, type: '메뉴', name: '베이컨에그', price: 3100},
        {id: 7, type: '메뉴', name: '로스트치킨', price: 6400},
        {id: 8, type: '메뉴', name: '베지', price: 4100}
    ],
    size: [
        {id: 1, type: '사이즈', size: '15cm'}, 
        {id: 2, type: '사이즈', size: '30cm', price: 2500}
    ],
    bread: [
        {id: 1, type: '빵', name: '허니오트'}, 
        {id: 2, type: '빵', name: '하티'}, 
        {id: 3, type: '빵', name: '위트'}, 
        {id: 4, type: '빵', name: '파마산오레가노'},
        {id: 5, type: '빵', name: '화이트'}, 
        {id: 6, type: '빵', name: '플랫브레드'}
    ],
    cheese: [
        {id: 1, type: '치즈', name: "아메리칸 치즈"},
        {id: 2, type: '치즈', name: "슈레드 치즈"}, 
        {id: 3, type: '치즈', name: "모짜렐라"}
    ],
    vegetable: [
        {id: 1, type: '야채', name: '양상추'}, 
        {id: 2, type: '야채', name: '토마토'}, 
        {id: 3, type: '야채', name: '피망'}, 
        {id: 4, type: '야채', name: '오이'}, 
        {id: 5, type: '야채', name: '피클'}, 
        {id: 6, type: '야채', name: '양파'}, 
        {id: 7, type: '야채', name: '올리브'}, 
        {id: 8, type: '야채', name: '할라피뇨'}
    ],
    sauce: [
        {id: 1, type: '소스', name: '랜치'}, 
        {id: 2, type: '소스', name: '마요네즈'}, 
        {id: 3, type: '소스', name: '핫칠리'}, 
        {id: 4, type: '소스', name: '스위트 어니언'}, 
        {id: 5, type: '소스', name: '사우스 웨스트'}, 
        {id: 6, type: '소스', name: '홀스래디쉬'}, 
        {id: 7, type: '소스', name: '머스타드'}, 
        {id: 8, type: '소스', name: '스모크 바베큐'}, 
        {id: 9, type: '소스', name: '올리브 오일'}, 
        {id: 10, type: '소스', name: '소금'}, 
        {id: 11, type: '소스', name: '후추'}
    ],
    option: [
        {id: 1, name: '쿠키세트', price: 2000},
        {id: 2, name: '쿠키+음료세트', price: 1000}
    ]
}
