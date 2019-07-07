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