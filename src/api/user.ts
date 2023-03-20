import * as express from "express";
export const user = express.Router();

// 預覽全部使用者資料.
// 或著藉由某個id來取得使用者資料.
user.get('/', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('get all user info ');
});

// 預覽使用者資料.
// 這邊只是呼應上面的實作.
user.get('/:id', (req, res) => {
    var user_id = req.params.id;
    res.send(`get user info => user_id (${user_id})`);
});

// 新增使用者.
// post除了新增之外，也常看到有人把他當成是請求某件事情的操作.
// 比方說請求是否可以登入某個帳號之類的.
user.post('/', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('add user info =>' + JSON.stringify(user));
});

// 修改使用者資料.
user.patch('/', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('update user info =>' + JSON.stringify(user));
});

// 修改使用者資料.
// 這邊用修改，我會比較傾向用覆蓋這個詞，因為覆蓋通常會包含如果找不到使用者，則新增該筆使用者的資料.
user.put('/', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('update user info =>' + JSON.stringify(user));
});

// 刪除使用者資料.
user.delete('/', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('romve user info => ' + user.name);
});