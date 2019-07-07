// Tree Implementation
class tNode {
    data: Number = null;
    right: tNode = null;
    left: tNode = null;

    constructor(data: Number) {
        this.data = data;
    }
}


class Tree {
    root: tNode = null;

    constructor(data: number) {
        this.root = new tNode(data);
    }

    insert(node: tNode, data: number) {
        if (node == null) return new tNode(data);
        if (data > node.data) node.right = this.insert(node.right, data);
        else node.left = this.insert(node.left, data);
        return node;
    }

    search(node: tNode, data: number) {
        if (node == null) return null;
        if (data > node.data) node = this.search(node.right, data);
        else if (data < node.data) node = this.search(node.left, data);
        return node
    }

    // Inorder Traversal
    parse(node: tNode) {
        if (node === null) return;
        this.parse(node.left);
        console.log(node.data);
        this.parse(node.right);
    }
}
const charString: string = "0123456789abcdefghijklmnopqrstuvwxyz"
const charMap: Map<string, number> = null;

for (let i = 0; i < 36; i++) {
    charMap.set(charString[i], i);
}

console.log("charMap: ", charMap);

// Trie Implementation
class node {
    data: string = '';
    nodes: node[] = [];
    isWord: boolean = false;
    ref_list: number[] = [];

    constructor(data: string) {
        this.data = data;
        this.nodes = [];
        this.isWord = false;
        this.ref_list = [];
    }
}


class SearchTree {
    root: node = null;
    wordList: string[] = [];

    constructor() {
        this.root = new node('');
    }

    insertWords(word: string) {
        let len = word.length;
        let i = 0;
        let current = this.root;
        word = word.toLowerCase();

        while (i !== len) {
            let node = current.nodes[charMap.get(word[i])]
            if (!node) {
                node[charMap.get(word[i])] = [];
            }
            current = node;
            i++;
        }
        current.isWord = true;
        return this.root;
    }

    findWords(word: string) {
        let word_len = word.length;
        let i = 0;
        let current = this.root;
        word = word.toLowerCase();

        while (i !== word_len) {
            let node = current.nodes[charMap.get(word[i])]
            if (!node) {
                return [null, word.slice(0, i)];
            }
            current = node;
            i++;
        }
        return [current, word.slice(0, i)];
    }

    // Parse Trie
    getWords(node: node, sString: string) {
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