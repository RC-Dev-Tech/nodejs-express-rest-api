# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - Express Restful API
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [測試](#測試)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
RESTful 是什麼？ 簡單來說就是我們在制定REST API的一種設計風格，就好比我們常在說的code style，像是什麼駝峰式命名法等等之類的. <br>
而RESTful主要就是倡導我們在設計API的時候可以藉由不同的Router跟其對應的操作(GET、POST、PUT、DELETE ...等)，來設計出更讓人易懂的API. <br>
該範例實作，將會簡單的介紹，我們該如何利用Nodjejs-Express去設計一個有RESTful風格的API. <br>

<br>

實作範例:
- [Example]() - Express Restful API.

---
<br>

## 使用套件.
- express
- body-parser

---
<br>

## 操作說明.
#### 1. 安裝套件 [^1]
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---
<br>

## 測試驗證
以下是使用Postman所做的一個簡單測試驗證.

<br>

#### 預覽全部使用者資料.
[GET] http://localhost:3001/api/user
> 或著藉由某個id來取得使用者資料.
![](https://drive.google.com/uc?id=198XwY3JuxGvUAskX48-WClr39DX2ZCnk)

<br>

#### 預覽使用者資料
[GET] http://localhost:3001/api/user/123456
> 這個範例是藉由代id參數來獲得對應的使用者資料的方式. <br>
> 在此不建議這個方式，因為會有隱私跟資安的問題.
![](https://drive.google.com/uc?id=1Vg1-82q4ibYut3hlrD6ZVJAuJBS2BIfy)

<br>

#### 新增使用者
[POST] http://localhost:3001/api/user
> post除了新增之外，也常看到有人把他當成是請求某件事情的操作. <br>
> 比方說請求是否可以登入某個帳號之類的.
![](https://drive.google.com/uc?id=1ZcwHtiKbGnumwBFtcUNWZQAqbKOQ3fCI)

<br>

#### 修改使用者資料
[PATCH] http://localhost:3001/api/user
![](https://drive.google.com/uc?id=1dkCSbkyrg-g8_POmUVXJ6yk6M2RdVOLA)

<br>

#### 修改使用者資料
[PUT] http://localhost:3001/api/user
> 這邊用修改，我會比較傾向用覆蓋這個詞，<br>
> 因為覆蓋通常是包含如果找不到使用者，則新增該筆使用者的資料.
![](https://drive.google.com/uc?id=1m5DUdhKz2XV2Vc1nVGjRHZYodr_FRjxF)

<br>

#### 刪除使用者資料
[DELETE] http://localhost:3001/api/user
![](https://drive.google.com/uc?id=1rk-B98G1ySFXMsLewvB2jkFuyAb29i5Z)

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [什麼是REST? 認識 RESTful API 路由語義化設計風格](https://tw.alphacamp.co/blog/rest-restful-api?gclid=CjwKCAjw_MqgBhAGEiwAnYOAegj_NeaXyLtCqL99ucHUk2PhIzV0ZaT5G4e_zBke3zLMirAHr_oW2RoCNlEQAvD_BwE) <br>
* [Node.js - 使用Express套件建立REST API](https://ithelp.ithome.com.tw/articles/10240749) <br>
* [RUNOOB - Node.js Express框架](https://www.runoob.com/nodejs/nodejs-express-framework.html) <br>
* [如何使用 TypeScript 在 Express.js 項目中設置路由](https://dev.to/sulistef/how-to-set-up-routing-in-an-expressjs-project-using-typescript-51ib) <br>
* [dougwilson-github - express-examples-multi-router](https://github.com/expressjs/express/tree/master/examples/multi-router) <br>
* [Node.js - 使用http建立CRUD rest api](https://ithelp.ithome.com.tw/articles/10238506)<br>


---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：

[^1]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install express --save` <br>
`npm install body-parser --save` <br>
因為這些套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好
