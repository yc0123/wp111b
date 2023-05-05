import * as db from './db.js'

let users = [
    ["ccc", "cccc", "ccc@gmail.com"],
    ["tim", "tttt", "tim@gmail.com"],
    ["jack","jjjj", "jack@gmail.com"],
]

let follows = [
    ['jack', 'tim'],
    ['jack', 'ccc'],
    ['tim', 'ccc'],
    ['ccc', 'tim'],
]

let says = [
    ["I join sayit!", "ccc", "ccc", []],
    ["Say something to me", "ccc", "ccc", []],
    ["Hi, ccc!", "tim", "ccc", [
        {user:'ccc',msg:'Nice to meet you, Tim!'},
        {user:'ccc',msg:'Where are you now?'},
        {user:'tim',msg:'Taipei ...'},
    ]],
    ["俄烏戰爭現在情況如何？", "tim", "tim", [
        {user:'ccc',msg:'自從克里米亞的橋斷了之後，俄國就開始報復性飛彈攻擊'},
        {user:'ccc',msg:'希望烏克蘭人民都平安！'},
        {user:'tim',msg:'對阿！'},
    ]],
    ["deno 真的不錯用，有人也在用 deno 嗎？", "tim", "tim", [
        {user:'ccc',msg:'有阿！我有在用！'},
        {user:'ccc',msg:'比 node.js 好用很多'},
        {user:'tim',msg:'是阿，簡單清楚，沒有太多包袱遺產 ...'},
    ]]
]

await db.open()
await db.clear()

for (let [user, pass, email] of users) {
    await db.userAdd({user, pass, email})
}
for (let [follower, user] of follows) {
    await db.followAdd(follower, user)
}
for (let [msg, ufrom, uto, comments] of says) {
    await db.sayAdd({msg, ufrom, uto, comments:JSON.stringify(comments)})
}
console.log('users=', await db.userList())
console.log('followerList(ccc)=', await db.followerList('ccc'))
console.log('followList(jack)=', await db.followList('jack'))
console.log('sayBy(ccc)=', await db.sayBy('ccc'))
console.log('sayBy(tim)=', await db.sayBy('tim'))
await db.close()