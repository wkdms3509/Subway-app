# Subway-app

## 개요
#### 
본 어플리케이션은 다양한 메뉴와 토핑종류 안에서 짧은 시간안에 모든 조합을 선택해야하는 부담이 있는 서브웨이의 면대면 주문방식에서, mbti i에 해당하는 내향적인 사람들을 위하여 조금 더 여유를 가지고 주문할 수 있는 키오스크 형태로 구현하는 것에 목표를 두었다. 
---

## 문제점과 해결방법

1. 타입스크립트를 설치 후 코드를 작성하는 중, 배열(Array)의 find 함수 에러 발생
  - tsconfig.json 파일에서 lib 부분을 **"lib": ["es6"]**로 변경하여 해결    
  
2. tsconfig.json 파일에서 lib 부분을 "lib": ["es6"]로 변경 후 find 함수의 에러는 사라졌지만, console에서 추가 에러가 발생
  - tsconfig.json 파일에서 lib 부분을 "es6"에서 **"dom"**으로 바꾸어 해결 => **"lib": ["dom"]**   

3. 서브웨이 메뉴들의 데이터가 담긴 변수에는 foodType이라는 인터페이스가 지정되어 있음. 그런데 변수 안의 빵, 사이즈, 야채 등 일부의 데이터는 각각 id, type, name, price 의 키 값을 가지지 않는 경우가 있어서 사전에 인터페이스에 키 값을 전부 optional로 지정함. 그 후, 생성된 클래스 안에서 함수를 이용하여 해당 데이터를 가져오는데 'foodType | undefined' 은 this.receipe 형식에 매개변수로 넣을 수 없다는 에러가 발생.    

<img width="659" alt="스크린샷 2022-01-18 오후 11 22 45" src="https://user-images.githubusercontent.com/63761624/149958190-bb495dbb-95b7-46fa-998e-cd9d572217d9.png" width="500">


  - undefined 형식을 receipe에 할당 할 수 없음   


---