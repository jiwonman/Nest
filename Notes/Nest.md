# Study to Nest JS 

## NestJS 란?

1. Nest는 효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기 위한 <strong>프레임 워크</strong>
1. <strong>Progressive Javascript</strong>를 사용하고 <strong>TypeScript</strong>로 빌드되고 완벽하게 지원함

## NestJS의 내부

1. 내부적으로 Nest는 Express(기본값)와 같은 강력한 <strong>HTTP 서버 프레임 워크</strong>를 사용하며 선택적으로 Fastify를 사용하도록 구성할 수 있다.
1. Nest는 이러한 공통 Node.js 프레임워크 (Express/Fastify) 위에 추상화 수준을 제공하지만 <strong>API 개발자에게 직접 노출</strong>함. 이를 통해 개발자는 기본 플랫폼에서 사용할 수 있는 수많은 타사 모듈을 자유롭게 사용 가능

## NestJS의 철학

1. Node를 위한 훌륭한 라이브러리, 도우미 및 도구가 많이 존재하지만 이들 중 어느 것도 아키텍처의 주요 문제를 효과적으로 해결하지 못함.
1. Nest는 개발자와 팀이 <strong>고도로 테스트 가능</strong>, 확장 가능하며 느슨하게 결합되고 유지 관리가 쉬운 애플리케이션을 만들 수 있는 <em>즉시 사용 가능한 애플리케이션 아키텍처를 제공</em>

## Start to Nest CLI

```bash
# Install Nest CLI
$ npm i -g @nestjs/cli    # nest cli install
$ nest new project-name   # create nest project
```

- 새 프로젝트 디렉터리 생성
- 초기 핵심 Nest 파일 및 지원 모듈로 디렉터리가 채워져 프로젝트의 기본 구조 생성

```bash
# Nest 설치 확인
$ nest --version  # check NestJS (설치 확인)
```

```bash
# Start Nest Server
$ npm run start:dev
```

## 기본 구조

- eslintrc.js : 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리. <strong>타입스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할 등등 </strong>
- prettierrc : 주로 코드 형식을 맞추는데 사용합니다. 작은따옴표(')를 사용할지 큰 따옴표(")를 사용할지, Indent 값을 2로 줄지 4로 줄지등등, <strong>에러 찾는것이 아닌 코드 포맷터 역할.</strong>
- nest-cli.json : nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
- tsconfig.json : 어떻게 타입 스크립트를 컴파일 할지 설정
- tsconfig.build.json : tsconfig.json의 연장선 상의 파일이며, build를 할 때 필요한 설정들, "excludes" 에서는 빌드할 때 필요없는 파일들 명시
- package.json

    <em>build : 운영환경을 위한 빌드</em><br>
    <em>format : 린트에러가 났을지 수정</em><br>
    <em>start : 앱 시작</em>
- src 폴더(대부분의 비즈니스 로직이 들어가는 곳)

    <em>main.ts : 앱을 생성하고 실행</em><br>
    <em>app.module.ts : 앱 모듈을 정의</em><br>


## Module 

![ModuleImage](./img/Module.PNG)

### NestJs 모듈이란?
- 모듈은 <span style='color:green; font-weight:bold'>@Module()</span> 데코레이터로 주석이 달린 클래스
- <span style='color:green; font-weight:bold'>@Module()</span> 데코레이터는 Nest가 애플리케이션 구조를 구성하는데 사용하는 메타 데이터를 제공

<em>각 응용프로그램에는 하나 이상의 모듈 (루트 모듈)이 있습니다. 루트 모듈은 Nest가 사용하는 시작점입니다.</em>

![모듈 구성](./img/Module1.png)
- 모듈은 밀접하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적인 방법입니다.(기능별로 만듭니다) ex) 유저 모듈, 주문 모듈, 챗 모듈...

- 같은 기능에 해당하는 것들은 하나의 모듈 폴더안에 넣어서 사용합니다.  (UserController, UserService, UserEntity  다 같은 기능이기에 UserModule안에 넣습니다.)

- 모듈은 기본적으로 싱글 톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유 할 수 있습니다.
![모듈 구성](./img/Module2.png)

<br>

### Nest 주의사항
- NestJs는 생성할 때 웬만하면 명령어로 모두 생성한다.

### Board Module 생성
```bash
# Board 모듈 생성 명령어
$ nest g module boards
# nest : nestcli를 사용한다.
# g : generate 생성한다
# module : module을 생성한다.
# boards : 생성할 모듈의 이름
```

### NestJS Controller란?
- 컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환합니다.

![컨트롤러](./img/controller.png)

- 컨트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의된다.
```javascript
@Controller('/boards')
export class BoardsController{

}
```
- 데코레이터는 인자를 Controller에 의해서 처리되는 "경로"를 받습니다.

### Handler란?
- 핸들러는 @Get, @Post, @Delete 등과 같은 데코레이터로 장식된 컨트롤러 클래스 내의 단순한 메서드이다.

```javascript
@Controller('/boards')
export class BoardsController{

    @Get()
    getBoards(): string{
        return 'This is action retunrs all boards';
    }

}
```

### 컨트롤러 구조
![컨트롤러 구조](./img/controller_structure.PNG)

### 컨트롤러 생성 명령어
```bash
$ nest g controller boards --no-spec
```

### Provider란?
- 프로바이더는 Nest의 기본 개념이다. 대부분 기본 Nest 클래스는 서비스, 레포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있다. 프로바이더의 주요 아이디어는 <strong>종속성(DI)으로 주입</strong>할 수 있다는 것이다. 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 <strong>"연결"</strong>하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.

![](./img/Provider.png)

### Servcie 란?
- 서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만 쓰이는 개념이 아닙니다.

- @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있다.

- 서비스는 컨트롤러에서 데이터의 <strong>유효성 체크</strong>를 하거나 <strong>데이터베이스에 아이템을 생성</strong>하는 등의 작업을 하는 부분을 처리합니다. 

![](./img/injectable.PNG)

### Board Service 만들기

```bash
$ nest g service boards --no-spec
```


## Servcie를 Controller에서 이용할 수 있는 방법 (Dependency Injection)
- 위에 보면 Contoller에서   this.appService.getHello(); 이런식으로  Service에 정의해놓은 메소드를 Controller에서 가져와서 쓰는 걸 볼 수 있습니다. 

```javascript
import { Controller, Get, Post, Body, Param, Delete, ... } from '@nestjs/common';
import { BoardsService } from './boards.servcie';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { GetBoardsFilterDto } from './dto/get-boards-fill';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }
}
```
- 위에 보면 BoardsService를 Contructor 클래스에서 가져오고(Injected) 있습니다. 그런 후에 Private 문법을 사용하고 있습니다. 이렇게 해서 boardsService를 정의해서 Controller안에서 사용할수 있게 만들었습니다. 이렇게 할 수 있는 이유는 타입스크립트의 기능을 이용해서 종속성을 타입으로 해결할수 있기떄문입니다. 

#### 추가 내용 
```javascript
// 기존 사용법
@controller('boards')
export class BoardsController {
    boardsService: BoardsService;

    constructor(boardsService: BoardsService) {
        this.boardsService = boardsService;
    }
}
    
```
1. boardsService 파라미터에 BoardsService 객체를 타입으로 지정해줍니다. 
2. 이 boardsService 파라미터를 BoardsController 클래스 안에서 사용하기 위해서 this.boardsService  프로퍼티에  boardsService 파라미터를 할당해줍니다. 

3. 하지만 타입스크립트에서는 선언한 값만 객체의 프로퍼티로 사용가능하기 때문에 
위에 boardsService: BoardsService로 선언해줍니다.  

4. 이렇게 갖게된 boardsService 프로퍼티를 이용해서 BoardsController 클래스안에서 활용을 할수가 있습니다. 

<br>

### Provider 등록하기
- Provider를 사용하기 위해서는 이것을 Nest에 등록해야 사용 가능하다.
- 등록하기 위해서는 module 파일에서 할 수 있다. module 파일에 providers 항목안에 해당 모듈을 사용하고자 하는 Provider를 넣어주면 된다.

```javascript
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';

@Module({
  imports: [BoardsModule],
  providers: [BoardsService]
})
export class BoardsModule {}
```

### Handler Get()
![](./img/get.PNG)

#### 정리
- 클라이언트에서 요청을 보내면 먼저 컨트롤러로 가며 컨트롤러에서 알맞은 요청 경로에 
라우팅해서 해당 핸들러로 가게 해줍니다.

- 그런 후에 요청을 처리해주기 위해서 서비스로 들어가며 그 요청에 맞는 로직을 서비스에서 처리해준 후 컨트롤러에 리턴값을 보내준후 컨트롤러에서 클라이언트로 결과값을 보내줍니다. 

- 그래서 컨트롤러에서는 요청을 처리하고 결과값을 리턴해주는 역할을 합니다. 

### Board Model 정의하기

#### Interface와 Class의 차이
![](./img/Interface%2C%20Class.PNG)

### 타입을 정의해주면 좋은 이유
- 타입 정의해주는 것은 선택사항입니다. 
- 하지만 이렇게 타입을 정의해주므로서 원하는 타입과 다른 코드를 사용할 시 에러가 발생합니다. 

- 그리고 코드를 읽는 입장에서 더 코드를 쉽게 이해하며 읽을 수 있습니다. (readable)