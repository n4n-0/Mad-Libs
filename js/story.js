let adjs = [];
let nouns = [];
let verbs = [];
let pnoun = [];
let pverb = [];

let libs = Math.floor(Math.random() * 3);

console.log(libs)
determineCounts(libs);

function determineCounts(lib) {
    if(lib === 0) {
        askQuestion("noun", 1);
        askQuestion("adj", 1);
        askQuestion("verb", 1);
        askQuestion("pverb", 1);
        askQuestion("pnoun", 1);
        let finalStory = `<p>I am a ${nouns[0]}. Fear my ${adjs[0]} power and ${verbs[0]} away from me!\
        I enjoy ${pverb[0]} with my ${pnoun[0]}</p>`
        document.querySelector('main').innerHTML = finalStory
    } else if(lib === 1) {
        askQuestion("noun", 2);
        askQuestion("adj", 1);
        askQuestion("verb", 1);
        let finalStory = `<p>Today, every student has a computer small enough to fit in their ${nouns[0]}.\n\
        Any one of them could take it out at any moment and push it's little ${nouns[1]}.\n\
        It was quite ${adjs[0]} the way it sat in one palm. The more you ${verbs[0]} the more advanced \
        it seemed.</p>`
        document.querySelector('main').innerHTML = finalStory
    } else if(lib === 2) {
        askQuestion("noun", 1);
        askQuestion("adj", 6);
        askQuestion("pverb", 2);
        askQuestion("pnoun", 2);
        let finalStory = `<p>Don't you just love this ${adjs[0]} time of year? The ${pnoun[0]} and the ${pnoun[1]} bring me so much joy.\
        Another ${adjs[1]} holiday season is upon us, and I'm going to get right to the point. Am I on the ${adjs[2]} list? This year I spent\
        most of my time ${pverb[0]}, so I deserve a/an ${nouns[0]} for the ${adjs[3]} year I've had. Thinking back, I have fond memories of ${pverb[1]} and that time we\
        ran from the cops. Anyways I wish you a very ${adjs[4]} holiday season and ${adjs[5]} New Year. Enjoy the cookies!</p>`
        document.querySelector('main').innerHTML = finalStory
    }
}

function askQuestion(type, num) {
    if(type.toLowerCase() === "adj") {
        for(var i = 0; i < num; i++) {
            adjs.push(prompt("Type an adjective", "adjective"))
        }
        console.log(adjs)
    } else if(type.toLowerCase() === "noun") {
        for(var i = 0; i < num; i++) {
            nouns.push(prompt("Type a noun", "noun"))
        }
        console.log(nouns)
    } else if(type.toLowerCase() === "verb") {
        for(var i=0; i < num; i++) {
            verbs.push(prompt("Type a verb", "verb"))
        }
        console.log(verbs)
    } else if(type.toLowerCase() == "pnoun") {
        for(var i=0; i < num; i++) {
            pnoun.push(prompt("Type a Plural Noun", "Plural Noun"))
        }
        console.log(pnoun)
    } else if(type.toLowerCase() == "pverb") {
        for(var i=0; i < num; i++) {
            pverb.push(prompt("Type a verb ending in -ing", "verb"))
        }
        console.log(pverb)
    }
}