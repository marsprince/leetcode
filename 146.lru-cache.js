/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = {}
    this.linkedList = null
};

function linkedListNode (value,pre,next) {
    this.value = value;
    this.pre = pre;
    this.next = next
}

function linkedList (head,tail) {
    this.head = head
    this.tail = tail
    this.length = (head || tail) ? 1 : 0
    if(this.head && !this.tail) {
        this.tail = this.head
    }
    if(this.tail && !this.head) {
        this.head = this.tail
    }
}

linkedList.prototype.pop = function() {
    if(this.length === 0) return null
    if(this.length === 1) {
        const temp = this.head
        this.head = this.tail = null
        this.length--
        return temp
    }
    const temp = this.tail
    this.tail = this.tail.pre
    this.tail.next = null
    temp.pre = null
    this.length--
   
    return temp
}

linkedList.prototype.unshift = function(node) {
    if(this.length === 0) {
        this.head = this.tail = node
        this.length++
        return 
    }
    node.next = this.head
    this.head.pre = node
    this.head = node
    this.length++
}

linkedList.prototype.delete = function(node) {
    if(this.length === 0) {
        return null
    }
    if(node.pre) {
        node.pre.next = node.next
    }
    if(node.next) {
        node.next.pre = node.pre
    }
    if(node === this.head) {
        this.head = node.next
    }
    if(node === this.tail) {
       this.tail = node.pre
    }   
    node.pre = node.next = null
    this.length--
    return node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // head 是最热门
    // tail 是最冷门
   if(!this.cache[key]) {
       return -1
   } else {
       // 将当前节点删除
       // 将当前节点添加至最开始
       const node = this.cache[key].node
       this.linkedList.delete(node)
       this.linkedList.unshift(node)
       return this.cache[key].value
   }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 新建一个头节点
    const node = new linkedListNode(key)
    if(!this.linkedList) {
        this.linkedList = new linkedList(node,node)
        this.cache[key] = {
            value,
            node
        }
    } else {
        if(this.cache[key]){
            this.linkedList.delete(this.cache[key].node)
        } 
        this.linkedList.unshift(node)
        this.cache[key] = {
            value,
            node
        }
        if(this.linkedList.length > this.capacity) {
            const node = this.linkedList.pop()
            delete this.cache[node.value]
        } 
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 




