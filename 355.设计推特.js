/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.userMap = new Map(); // userId 与 User 实例映射
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.userMap.has(userId)) {
    this.userMap.set(userId, new User(userId));
  }
  const user = this.userMap.get(userId);
  user.post(tweetId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.userMap.has(userId)) return [];
  const users = this.userMap.get(userId).followed; // set
  // 使用优先级队列
  const pq = new PriorityQueue(users.size, (a, b) => a.time - b.time);
  for (const id of users) {
    const twt = this.userMap.get(id).head;
    if (twt) {
      pq.add(twt);
    }
  }

  const result = [];
  while (pq.length()) {
    // 最多返回 10 条
    if (result.length >= 10) break;
    const head = pq.first();
    result.push(head.id);
    if (head.next) {
      pq.add(head.next);
    }
  }

  return result;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.userMap.has(followerId)) {
    this.userMap.set(followerId, new User(followerId));
  }
  if (!this.userMap.has(followeeId)) {
    this.userMap.set(followeeId, new User(followeeId));
  }

  this.userMap.get(followerId).follow(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.userMap.has(followerId)) return;
  this.userMap.get(followerId).unFollow(followeeId);
};

class Tweet {
  constructor (id, time) {
    this.id = id;
    this.time = time;
    this.next = null;
  }
}

var timestamp = 0;
class User {
  constructor (userId) {
    this.id = userId;
    this.head = null; // User 包含一个 Tweet 链表
    this.followed = new Set(); // 关注列表
    this.follow(userId); // 关注自己
  }

  follow (userId) {
    this.followed.add(userId);
  }

  unFollow (userId) {
    if (userId === this.id) return;
    this.followed.delete(userId);
  }

  post (tweetId) {
    const twt = new Tweet(tweetId, timestamp);
    timestamp++;
    // 新建的插入链表头部
    twt.next = this.head;
    this.head = twt;
  }
}

class PriorityQueue {
  constructor (size, compare = (a, b) => a.time - b.time) {
    this.count = 0; // 计数
    this.size = size; // 容量限制
    this.compare = compare;
    this.list = [];
  }

  add (node) {
    let flag = true;
    let len = this.list.length;
    for (let i = 0; i < len; i++) {
      const item = this.list[i];
      // 升序
      if (this.compare(node, item) > 0) {
        flag = false;
        this.list.splice(i, 0, node);
        break;
      }
    }
    if (flag) {
      this.list.push(node);
    }
    this.count++;

    // 超出：弹出队首最大值
    if (this.count > this.size) {
      this.first();
    }
  }

  first () {
    this.count--;
    return this.list.shift();
  }

  last () {
    this.count--;
    return this.list.pop();
  }

  length () {
    return this.count;
  }

  limit () {
    return this.count >= this.size;
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// @lc code=end
