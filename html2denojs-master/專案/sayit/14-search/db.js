import { DB } from "https://deno.land/x/sqlite/mod.ts";

let db = null

export async function open() {
  db = new DB("say.db");
  db.query(`CREATE TABLE IF NOT EXISTS users 
              (id INTEGER PRIMARY KEY AUTOINCREMENT, 
               user TEXT, pass TEXT, email TEXT)`)
  db.query(`CREATE TABLE IF NOT EXISTS follows
              (id INTEGER PRIMARY KEY AUTOINCREMENT, 
               follower TEXT, user TEXT)`)
  db.query(`CREATE TABLE IF NOT EXISTS msgs 
              (id INTEGER PRIMARY KEY AUTOINCREMENT, 
               msg TEXT, ufrom TEXT, uto TEXT, 
               comments TEXT, time INTEGER)`)
  // https://www.sqlitetutorial.net/sqlite-full-text-search/
  // db.query(`CREATE VIRTUAL TABLE posts USING FTS5(title, body)`)
  db.query(`CREATE INDEX IF NOT EXISTS iUsers
            ON users (id, user);`)
  db.query(`CREATE INDEX IF NOT EXISTS iFollows
  ON follows (id, follower, user);`)
  db.query(`CREATE INDEX IF NOT EXISTS iMsgs
  ON msgs (id, ufrom, uto, time);`)
  db.query(`CREATE VIEW IF NOT EXISTS vFollowMsg
    AS 
    SELECT
      follower,
      user,
      msgs.id as id,
      msg,
      ufrom,
      uto,
      comments,
      time
    FROM
      follows
    INNER JOIN msgs 
    ON follows.user=msgs.ufrom and follows.follower!=msgs.ufrom
  `)
}

export async function clear() {
  db.query(`DELETE FROM users`)
  db.query(`DELETE FROM msgs`)
  db.query(`DELETE FROM follows`)
}

export async function close() {
  db.close()
}

export async function userAdd(user) {
  db.query(`INSERT INTO users (user, pass, email) VALUES (?,?,?)`, 
                        [user.user, user.pass, user.email])
}

export async function userGet(user1) {
  let q = db.query(`SELECT id, user, pass, email FROM users 
                    WHERE user=?`, [user1])
  console.log(`userGet(${user1})=${q}`)
  if (q.length <=0) return null
  let [id, user, pass, email] = q[0]
  return {id, user, pass, email}
}

export async function userList() {
  let q = db.query(`SELECT user FROM users`, [])
  let users = []
  for (let [user] of q) {
    users.push(user)
  }
  return users
}

export async function msgAdd(msg) {
  let time=msg.time || Date.now()
  let r = db.query(`INSERT INTO msgs 
    (msg, ufrom, uto, comments, time) VALUES (?,?,?,?,?)`, 
    [msg.msg, msg.ufrom, msg.uto, JSON.stringify(msg.comments), time])
  r = db.query('SELECT last_insert_rowid()')
  return r[0][0] // msg.id
}

export async function msgGet(id) {
  let q = db.query(`SELECT id, msg, ufrom, uto, comments, time
                    FROM msgs WHERE id=?`, [id])
  // console.log(`msgGet(${id})=${q}`)
  if (q.length <=0) return null
  let [_id, msg, ufrom, uto, comments, time] = q[0]
  return {id, msg, ufrom, uto, comments:JSON.parse(comments), time}
}

export function queryToMsgs(q) {
  let msgs = []
  for (let [id, msg, ufrom, uto, time] of q) {
    msgs.push({id, msg, ufrom, uto, time})
  }
  return msgs
}

export async function msgTo(user) {
  let q = db.query(`SELECT id, msg, ufrom, uto, time
                    FROM msgs WHERE uto=? and uto!=ufrom 
                    ORDER BY time DESC`, [user])
  return queryToMsgs(q)
}

export async function msgBy(user) {
  let q = db.query(`SELECT id, msg, ufrom, uto, time
            FROM msgs WHERE ufrom=? ORDER BY time DESC`, [user])
  return queryToMsgs(q)
}

export async function msgFollow(follower) {
  let q = db.query(`SELECT id, msg, ufrom, uto, time FROM vFollowMsg 
                    WHERE follower=? ORDER BY time DESC`, [follower])
  return queryToMsgs(q)
}

export async function msgKey(key) {
  let q = db.query(`SELECT id, msg, ufrom, uto, time FROM msgs 
                    WHERE LOWER(msg) LIKE '%${key.toLowerCase()}%'
                    ORDER BY time DESC`, [])
  return queryToMsgs(q)
}

export function followAdd(follower, user) {
  db.query(`INSERT INTO follows (follower, user) VALUES (?,?)`, 
                                [follower, user])
}

export async function followTo(user) {
  let q = db.query(`SELECT user FROM follows WHERE follower=?`, [user])
  let follows = []
  for (let [follow] of q) {
    follows.push(follow)
  }
  return follows
}

export async function followBy(user) {
  let q = db.query(`SELECT follower FROM follows WHERE user=?`, [user])
  let followers = []
  for (let [follower] of q) {
    followers.push(follower)
  }
  return followers
}
