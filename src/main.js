const heart_stars = [2, 4, 8, 10, 14, 20, 26, 28, 40, 44, 52, 60, 64, 76]
const heart_break = [13, 27, 41, 55, 69, 77]
const flower_break = [7, 15, 23, 31, 39, 46]

const getRandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const genHeart = (spaces) => {
    let output = ""
    output += ' '.repeat(spaces)
    for (let i = 0; i < 78; i++) {
        if (heart_break.includes(i)) {
            output += '\n' + " ".repeat(spaces)
        }
        else if (heart_stars.includes(i)){
            output += "[[;red;]*]"
        }
        else{
            output += " "
        }
    }
    return output
}

const genFlower = (spaces) => {
    let output = ""
    output += ' '.repeat(spaces)
    for (let i = 0; i < 47; i++) {
        if (flower_break.includes(i)) {
            output += '\n' + ' '.repeat(spaces)
        } else if ([2, 8, 12, 18].includes(i)) {
            output += '[[;magenta;]{]'
        } else if ([3, 9, 13, 19].includes(i)) {
            output += ''
        } else if ([4, 10, 14, 20].includes(i)) {
            output += '[[;magenta;]}]'
        } else if ([27, 35, 43].includes(i)) {
            output += '[[;green;]|]'
        } else if ([34, 44].includes(i)) {
            output += '[[;green;]~]'
        } else if ([11].includes(i)) {
            output += '[[;yellow;]o]'
        } else { 
            output += ' '
        }
    }
    return output
}

const genCard = () => {     
    let cardText = ''
    cardText += genHeart(getRandInt(8, 80))
    cardText += " ".repeat(getRandInt(8, 80))
    cardText += 'H a p p y  B i r t h d a y  H a n n a h ! ! \n'
    cardText += '\n\n'
    cardText += genFlower(getRandInt(8, 80))
    return cardText
}

var App = {
    card: function(){
        const cardText = genFlower(getRandInt(8, 60)) + '\n' + 
        " ".repeat(getRandInt(8, 80)) + 
        'H a p p y  B i r t h d a y  H a n n a h ! ! \n \n' + 
        genHeart(getRandInt(8, 80)) + '\n' + 
        genFlower(getRandInt(8, 80)) + '\n' + 
        " ".repeat(getRandInt(8, 80)) + 
        'H a p p y  B i r t h d a y  H a n n a h ! ! \n \n' + 
        genHeart(getRandInt(8, 50))
        this.echo(cardText, {typing: true, delay: 2});
    },

    flower: function(){
        this.echo(genFlower(getRandInt(8, 80)), {typing: true, delay: 5});
    },

    heart: function() {
        this.echo(genHeart(getRandInt(8, 80)), {typing: true, delay: 5});
    }
}

jQuery((function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "https://i.pinimg.com/474x/de/3f/6d/de3f6d7cc5342309f62941d5efd9617a.jpg";
    } else {
        $('body').terminal(App, {
            greetings: greetings.innerHTML,
            prompt: "[[;plum;]>>> ]",

            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
}));