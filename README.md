# Subway-app

@@ 문제점과 해결방법

1. 타입스크립트를 설치 후 코드를 작성하는 중, 배열(Array)의 find 함수 에러 발생
  - tsconfig.json 파일에서 lib 부분을 "lib": ["es6"]로 변경하여 해결 
  
2. tsconfig.json 파일에서 lib 부분을 "lib": ["es6"]로 변경 후 find 함수의 에러는 사라졌지만, console에서 추가 에러가 발생
  - tsconfig.json 파일에서 lib 부분을 "es6"에서 "dom"으로 바꾸어 해결