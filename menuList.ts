interface Menu {
    id: number;
    type: string;
    name: string;
    price: number;
}

export const menuList = {
    menu: [
        {id: 1, type: '메뉴', name: '이탈리안 비엠티', price: 4900},
        {id: 2, type: '메뉴', name: '이탈리안 비엠티 에그마요', price: 6500},
        {id: 3, type: '메뉴', name: '비엘티', price: 5700},
        {id: 4, type: '메뉴', name: '미트볼', price: 5600},
        {id: 5, type: '메뉴', name: '터키', price: 5600},
        {id: 6, type: '메뉴', name: '베이컨 에그', price: 3100},
        {id: 7, type: '메뉴', name: '로스트 치킨', price: 6400},
        {id: 8, type: '메뉴', name: '베지', price: 4100}
    ],
    size: [
        {id: 1, type: '사이즈', small: '15cm', price: 0}, 
        {id: 2, type: '사이즈', large: '30cm', price: 2500}
    ],
    bread: [
        {id: 1, type: '빵', name: '허니오트'}, 
        {id: 2, type: '빵', name: '하티'}, 
        {id: 3, type: '빵', name: '위트'}, 
        {id: 4, type: '빵', name: '파마산 오레가노'}, 
        {id: 5, type: '빵', name: '화이트'}, 
        {id: 6, type: '빵', name: '플랫브레드'}
    ],
    cheese: [
        {id: 1, type: '치즈', name: '아메리칸 치즈'},
        {id: 2, type: '치즈', name: '슈레드 치즈'}, 
        {id: 3, type: '치즈', name: '모짜렐라'}
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
        {d: 1, type: '소스', name: '랜치'}, 
        {d: 2, type: '소스', name: '마요네즈'}, 
        {d: 3, type: '소스', name: '핫칠리'}, 
        {d: 4, type: '소스', name: '스위트 어니언'}, 
        {d: 5, type: '소스', name: '사우스 웨스트'}, 
        {d: 6, type: '소스', name: '홀스래디쉬'}, 
        {d: 7, type: '소스', name: '머스타드'}, 
        {d: 8, type: '소스', name: '스모크 바베큐'}, 
        {d: 9, type: '소스', name: '올리브 오일'}, 
        {d: 10, type: '소스', name: '소금'}, 
        {d: 11, type: '소스', name: '후추'}
    ],
    option: {
        set: {
            price: 2000
        },
        cookie: {
            price: 1000
        },
        sauce: []
    }
}