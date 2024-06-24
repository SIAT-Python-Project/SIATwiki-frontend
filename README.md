# 씨앗위키 - Frontend 💚
씨앗 A반 사람들의 정보를 문서화할 수 있는 위키 서비스

## 목차
1. [웹 서비스 소개](#1.-웹-서비스-소개)
2. [프로젝트 구성](#2.-프로젝트-구성)
3. [구현 기능](#3.-구현-기능)
4. [와이어프레임](#4.-와이어프레임)
5. [역할](#5.-역할)

<!-- GETTING STARTED -->
## Getting Started
1.  Clone the repo
```sh
   git clone https://github.com/SIAT-Python-Project/SIATwiki-frontend.git
  ```
2. Build Project
  ```sh
  npm i
  npm run start
  ```

## 1. 웹 서비스 소개

<img src="https://velog.velcdn.com/images/cocoa389/post/85ea386f-e6d5-4449-b764-00f626d179cf/image.png" width="50%" height="50%"/>

- **씨앗 A반 사람들의 인물 위키 서비스** 
- **기획 의도** : 
    파이널 프로젝트를 약 2주 남긴 상황에서,
    우리는 아직까지 모든 구성원들이 
    프로젝트를 함에 있어서 무엇을 지향하는지,
    자세히 알지 못하고 있습니다.
    <br></br>
     ...
    <br></br>
    그래서 나온 '나무위키'에 착안한 씨앗위키 서비스!!!
    <br></br>
   
    **이제 본인 소개부터 다른 사람들의 소개까지, 자유롭게 읽고 수정해봐요!**
    
    <br><br>
    
    
- **주요 기능** :
    - 회원가입, 로그인 서비스
    - 인물 문서 생성 서비스 (프로필 사진도 있어요!)
    - 인물 정보 수정 서비스
    - 쿠키와 인터셉트를 이용한 커스텀 예외 처리
    - 검색창 자동완성 기능
    - 나무위키에 착안한 CSS


## 2. 프로젝트 구성
### **기술 스택 및 라이브러리**

| 분류 | Tools | 목적 |
| ------ | ------ | ------ |
| Frontend | React | Web Framework |
| Frontend | style-components | CSS |
| Frontend | MUI | CSS |
| Frontend | axios | proxy, API 통신 |
| Backend | Spring | Web Framework |
| Backend | MySQL | Database |
| Backend | Git bot | CI를 통한 자동 Merge |

- Frontend 레포지토리 [https://github.com/SIAT-Python-Project/SIATwiki-frontend](https://github.com/SIAT-Python-Project/SIATwiki-frontend)
- Backend 레포지토리 : [https://github.com/SIAT-Python-Project/SIATwiki-backend](https://github.com/SIAT-Python-Project/SIATwiki-backend)

## 3. 구현 기능
  - Authentication : 회원가입 / 로그인 / 로그아웃 / 쿠키 조작 검증 / 유저 생성, 수정 권한 필터링
  - 유저 생성 : 유저의 기본 인적사항을 입력하여, 위키 문서 생성
  - 유저 정보 수정 : 위키 문서 내 개요,수정,프로젝트 지향점, 본인의 일하는 스타일 등등..수정 가능
  - 컴포넌트화 : Components의 템플릿화를 통한 Page 간결화

## 4. 와이어프레임
- 필수/선택 구현 기능을 바탕으로 상세한 와이어프레임을 작성하였다. : [아직 없어요ㅠㅠ](ㅠㅠ)


## 5. 역할

| 이름 | 담당 업무 |
| ------ | ------ |
| 김지혜 | Frontend, 아이디어 기획, Person CRUD |
| 배창민 | Backend (User CRUD, Authentication) |
| 장희권 | DBA, Backend ( AOP, Info CRUD, File server)  |

