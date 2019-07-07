"use strict";
// Tree Implementation
class tNode {
    constructor(data) {
        this.data = null;
        this.right = null;
        this.left = null;
        this.data = data;
    }
}
class Tree {
    constructor(data) {
        this.root = null;
        this.root = new tNode(data);
    }
    insert(node, data) {
        if (node == null)
            return new tNode(data);
        if (data > node.data)
            node.right = this.insert(node.right, data);
        else
            node.left = this.insert(node.left, data);
        return node;
    }
    search(node, data) {
        if (node == null)
            return null;
        if (data > node.data)
            node = this.search(node.right, data);
        else if (data < node.data)
            node = this.search(node.left, data);
        return node;
    }
    // Inorder Traversal
    parse(node) {
        if (node === null)
            return;
        this.parse(node.left);
        console.log(node.data);
        this.parse(node.right);
    }
}
const charString = "0123456789abcdefghijklmnopqrstuvwxyz";
const charMap = null;
for (let i = 0; i < 36; i++) {
    charMap.set(charString[i], i);
}
console.log("charMap: ", charMap);
// Trie Implementation
class node {
    constructor(data) {
        this.data = '';
        this.nodes = [];
        this.isWord = false;
        this.ref_list = [];
        this.data = data;
        this.nodes = [];
        this.isWord = false;
        this.ref_list = [];
    }
}
class SearchTree {
    constructor() {
        this.root = null;
        this.wordList = [];
        this.root = new node('');
    }
    insertWords(word) {
        let len = word.length;
        let i = 0;
        let current = this.root;
        word = word.toLowerCase();
        while (i !== len) {
            let node = current.nodes[charMap.get(word[i])];
            if (!node) {
                node[charMap.get(word[i])] = [];
            }
            current = node;
            i++;
        }
        current.isWord = true;
        return this.root;
    }
    findWords(word) {
        let word_len = word.length;
        let i = 0;
        let current = this.root;
        word = word.toLowerCase();
        while (i !== word_len) {
            let node = current.nodes[charMap.get(word[i])];
            if (!node) {
                return [null, word.slice(0, i)];
            }
            current = node;
            i++;
        }
        return [current, word.slice(0, i)];
    }
    // Parse Trie
    getWords(node, sString) {
        // Add word to Array only if it is a word
        if (node.isWord) {
            this.wordList.push(sString);
        }
        for (let i = 0; i < 36; i++) {
            if (node && node.nodes[i]) {
                this.getWords(node, sString);
                sString += node.data;
            }
        }
        return this.wordList;
    }
}
/**
 * Input Values
 */
let temp = new SearchTree();
let input = ["Ankush", "Gupta", "New", "Chandigarh", "Seema", "RAvi", "Ankit", "Akanksha"];
input.forEach(element => {
    temp.insertWords(element);
});
console.log(temp);
//# sourceMappingURL=trie.js.map