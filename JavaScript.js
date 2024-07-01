
var cards = new Array(50);

var Card = function (imgg, arrr) {
    this.imgg = imgg;
    this.arrr = arrr;
}

function neww() {
    if (localStorage.getItem('prevgame'))
        localStorage.clear('prevgame');
}


function prevv() {
    if (typeof window.localStorage != 'undefined') { 
        localStorage.setItem('prevgame', 1);
    }
}

function levell2() {
    localStorage.setItem('level', 2);
}
function levell1() {
    localStorage.clear('level');
}
function Build() {//פונקציה שבונה את מעררך הכרטיסים

    cards[0] = new Card("12345/1.png", ["ציורים/עוגיות.png", "ציורים/פיסטוק.png", "ציורים/פמוטות.png", "ציורים/אבטיח.png", "ציורים/דג.png", "ציורים/בננה.png", "ציורים/איש שלג.png", "ציורים/רמזור.png" ]);
    cards[1] = new Card("12345/2.png", ["ציורים/דונאצ.png", "ציורים/בלון.png", "ציורים/ספר.png", "ציורים/סביבון.png", "ציורים/תיק.png", "ציורים/פיסטוק.png", "ציורים/קולב.png", "ציורים/אופניים.png"]);
    cards[2] = new Card("12345/3.png", ["ציורים/אוזן המן.png" , "ציורים/סביבון.png", "ציורים/קיווי.png", "ציורים/שעון.png" , "ציורים/כובע.png", "ציורים/סוכרייה.png" , "ציורים/במבה.png", "ציורים/דג.png"]);
    cards[3] = new Card("12345/4.png", ["ציורים/אוזן המן.png", "ציורים/ענבים.png", "ציורים/קוביות.png", "ציורים/ציפס.png", "ציורים/שוקולד.png", "ציורים/אופניים.png", "ציורים/צדפים.png", "ציורים/עוגיות.png"]);
    cards[4] = new Card("12345/5.png", ["ציורים/בננה.png", "ציורים/כדור.png", "ציורים/חביתה.png", "ציורים/מטרייה.png", "ציורים/דונאצ.png", "ציורים/עוגה.png", "ציורים/אוזן המן.png", "ציורים/מוצץ.png"]);
    cards[5] = new Card("12345/6.png", ["ציורים/פיסטוק.png", "ציורים/כדור.png", "ציורים/רימון.png", "ציורים/צבעים.png", "ציורים/גבינה צהובה.png", "ציורים/גלידה.png", "ציורים/קיווי.png", "ציורים/שוקולד.png" ]);
    cards[6] = new Card("12345/7.png", ["ציורים/תיק.png", "ציורים/אבטיח.png", "ציורים/גז.png", "ציורים/כובע.png", "ציורים/צבעים.png", "ציורים/חביתה.png", "ציורים/ברוז.png", "ציורים/צדפים.png" ]);
    cards[7] = new Card("12345/8.png", ["ציורים/סוכרייה על מקל.png", "ציורים/עוגה.png", "ציורים/סביבון.png", "ציורים/קוביות.png", "ציורים/רוגלעך.png", "ציורים/איש שלג.png", "ציורים/כובע יומולדת.png", "ציורים/צבעים.png"]);
    cards[8] = new Card("12345/9.png", ["ציורים/גז.png", "ציורים/בלון.png", "ציורים/מוצץ.png", "ציורים/ענבים.png", "ציורים/נקניק.png", "ציורים/איש שלג.png", "ציורים/גלידה.png", "ציורים/סוכרייה.png"]);
    cards[9] = new Card("12345/10.png", ["ציורים/ענבים.png", "ציורים/כדור פורח.png", "ציורים/פיסטוק.png", "ציורים/מזוודה.png", "ציורים/שעון.png", "ציורים/רוגלעך.png", "ציורים/חביתה.png", "ציורים/מקדחה.png"]);
    cards[10] = new Card("12345/11.png", ["ציורים/גבינה צהובה.png", "ציורים/מוצץ.png", "ציורים/צדפים.png", "ציורים/כובע יומולדת.png", "ציורים/קולב.png", "ציורים/כדור פורח.png", "ציורים/מכונית.png", "ציורים/דג.png"]);
    cards[11] = new Card("12345/12.png", ["ציורים/ספר.png", "ציורים/קיווי.png", "ציורים/אננס.png", "ציורים/תפוח.png", "ציורים/אבטיח.png", "ציורים/מכונית.png", "ציורים/ענבים.png", "ציורים/עוגה.png"]);
    cards[12] = new Card("12345/13.png", ["ציורים/גבינה צהובה.png", "ציורים/אופניים.png", "ציורים/דובי.png", "ציורים/בקבוק.png", "ציורים/איש שלג.png", "ציורים/תפוח.png", "ציורים/חביתה.png", "ציורים/במבה.png"]);
    cards[13] = new Card("12345/14.png", ["ציורים/כדור.png", "ציורים/עוגיות.png", "ציורים/כדור פורח.png", "ציורים/סביבון.png", "ציורים/בקבוק.png", "ציורים/גז.png", "ציורים/צבע.png", "ציורים/אננס.png"]);
    cards[14] = new Card("12345/15.png", ["ציורים/נקניק.png", "ציורים/תות.png", "ציורים/כובע יומולדת.png", "ציורים/אוזן המן.png", "ציורים/אננס.png", "ציורים/פיסטוק.png", "ציורים/ברוז.png", "ציורים/דובי.png"]);
    cards[15] = new Card("12345/16.png", ["ציורים/מכונית.png", "ציורים/צבעים.png", "ציורים/קולה.png", "ציורים/דונאצ.png", "ציורים/דובי.png", "ציורים/סוכרייה.png", "ציורים/מזוודה.png", "ציורים/עוגיות.png"]);
    cards[16] = new Card("12345/17.png", ["ציורים/קולב.png", "ציורים/דובי.png", "ציורים/רמזור.png", "ציורים/עוגה.png", "ציורים/גז.png", "ציורים/רימון.png", "ציורים/שעון.png", "ציורים/ציפס.png" ]);
    cards[17] = new Card("12345/18.png", ["ציורים/סוכרייה.png", "ציורים/בננה.png", "ציורים/אננס.png", "ציורים/תיק.png", "ציורים/רוגלעך.png", "ציורים/גיטרה.png", "ציורים/גבינה צהובה.png", "ציורים/ציפס.png" ]);
    cards[18] = new Card("12345/19.png", ["ציורים/קוביות.png", "ציורים/גבינה צהובה.png", "ציורים/נקניק.png", "ציורים/דונאצ.png", "ציורים/שעון.png", "ציורים/אבטיח.png", "ציורים/צבע.png", "ציורים/מטבעות.png"]);
    cards[19] = new Card("12345/20.png", ["ציורים/תפוח.png", "ציורים/נקניק.png", "ציורים/צדפים.png", "ציורים/בננה.png", "ציורים/רימון.png", "ציורים/מגפיים.png", "ציורים/סביבון.png", "ציורים/מזוודה.png"]);
    cards[20] = new Card("12345/21.png", ["ציורים/מטבעות.png", "ציורים/מקדחה.png", "ציורים/גז.png", "ציורים/אופניים.png", "ציורים/קולה.png", "ציורים/בננה.png", "ציורים/כובע יומולדת.png", "ציורים/קיווי.png"]);
    cards[21] = new Card("12345/22.png", ["ציורים/סביבון.png", "ציורים/אבטיח.png", "ציורים/סליל.png", "ציורים/שוקולד.png", "ציורים/מקדחה.png", "ציורים/מוצץ.png", "ציורים/דובי.png", "ציורים/גיטרה.png"]);
    cards[22] = new Card("12345/23.png", ["ציורים/כובע.png", "ציורים/דובי.png", "ציורים/קוביות.png", "ציורים/מנורה.png", "ציורים/כדור פורח.png", "ציורים/ספר.png", "ציורים/גלידה.png", "ציורים/בננה.png"]);
    cards[23] = new Card("12345/24.png", ["ציורים/תות.png", "ציורים/עוגיות.png", "ציורים/כובע.png", "ציורים/גבינה צהובה.png", "ציורים/עוגה.png", "ציורים/מגפיים.png", "ציורים/מקדחה.png", "ציורים/בלון.png"]);
    cards[24] = new Card("12345/25.png", ["ציורים/מגפיים.png", "ציורים/קולה.png", "ציורים/גלידה.png", "ציורים/אבטיח.png", "ציורים/בקבוק.png", "ציורים/קולב.png", "ציורים/אוזן המן.png", "ציורים/רוגלעך.png"]);
    cards[25] = new Card("12345/26.png", ["ציורים/צדפים.png", "ציורים/סוכרייה על מקל.png", "ציורים/רמזור.png", "ציורים/אננס.png", "ציורים/גלידה.png", "ציורים/מקדחה.png", "ציורים/במבה.png", "ציורים/דונאצ.png"]);
    cards[26] = new Card("12345/27.png", ["ציורים/רמזור.png", "ציורים/תות.png", "ציורים/קוביות.png", "ציורים/מזוודה.png", "ציורים/מוצץ.png", "ציורים/תיק.png", "ציורים/קיווי.png", "ציורים/בקבוק.png" ]);
    cards[27] = new Card("12345/28.png", ["ציורים/קולה.png", "ציורים/סליל.png", "ציורים/קוביות.png", "ציורים/רימון.png", "ציורים/דג.png", "ציורים/אננס.png", "ציורים/בלון.png", "ציורים/חביתה.png" ]);
    cards[28] = new Card("12345/29.png", ["ציורים/קולב.png", "ציורים/צבעים.png", "ציורים/תות.png", "ציורים/צבע.png", "ציורים/סליל.png", "ציורים/ענבים.png", "ציורים/בננה.png", "ציורים/במבה.png" ]);
    cards[29] = new Card("12345/30.png", ["ציורים/כובע.png", "ציורים/מטרייה.png", "ציורים/אננס.png", "ציורים/מטבעות.png", "ציורים/קולב.png", "ציורים/מזוודה.png", "ציורים/איש שלג.png", "ציורים/שוקולד.png" ]);
    cards[30] = new Card("12345/31.png", ["ציורים/גיטרה.png", "ציורים/ברוז.png", "ציורים/צבע.png", "ציורים/מזוודה.png", "ציורים/אופניים.png", "ציורים/עוגה.png", "ציורים/גלידה.png", "ציורים/דג.png"]);
    cards[31] = new Card("12345/32.png", ["ציורים/ברוז.png", "ציורים/שעון.png", "ציורים/בקבוק.png", "ציורים/מכונית.png", "ציורים/שוקולד.png", "ציורים/בננה.png", "ציורים/בלון.png", "ציורים/סוכרייה על מקל.png"]);
    cards[32] = new Card("12345/33.png", ["ציורים/תות.png", "ציורים/מטבעות.png", "ציורים/סביבון.png", "ציורים/פמוטות.png", "ציורים/גלידה.png", "ציורים/חביתה.png", "ציורים/מכונית.png", "ציורים/ציפס.png"]);
    cards[33] = new Card("12345/34.png", ["ציורים/רימון.png", "ציורים/אופניים.png", "ציורים/אבטיח.png", "ציורים/סוכרייה.png", "ציורים/מטרייה.png", "ציורים/תות.png", "ציורים/כדור פורח.png", "ציורים/סוכרייה על מקל.png"]);
    cards[34] = new Card("12345/35.png", ["ציורים/תיק.png", "ציורים/צבע.png", "ציורים/מנורה.png", "ציורים/מקדחה.png", "ציורים/איש שלג.png", "ציורים/מכונית.png", "ציורים/אוזן המן.png", "ציורים/רימון.png"]);
    cards[35] = new Card("12345/36.png", ["ציורים/כדור פורח.png", "ציורים/אוזן המן.png", "ציורים/רמזור.png", "ציורים/תפוח.png", "ציורים/מטבעות.png", "ציורים/גיטרה.png", "ציורים/צבעים.png", "ציורים/בלון.png"]);
    cards[36] = new Card("12345/37.png", ["ציורים/ענבים.png", "ציורים/בקבוק.png", "ציורים/רימון.png", "ציורים/כובע יומולדת.png", "ציורים/כובע.png", "ציורים/גיטרה.png", "ציורים/פמוטות.png", "ציורים/דונאצ.png"]);
    cards[37] = new Card("12345/38.png", ["ציורים/שעון.png", "ציורים/קולה.png", "ציורים/כדור.png", "ציורים/גיטרה.png", "ציורים/תות.png", "ציורים/איש שלג.png", "ציורים/ספר.png", "ציורים/צדפים.png"]);
    cards[38] = new Card("12345/39.png", ["ציורים/סליל.png", "ציורים/מגפיים.png", "ציורים/איש שלג.png", "ציורים/כדור פורח.png", "ציורים/דונאצ.png", "ציורים/ציפס.png", "ציורים/ברוז.png", "ציורים/קיווי.png" ]);
    cards[39] = new Card("12345/40.png", ["ציורים/קיווי.png", "ציורים/עוגיות.png", "ציורים/נקניק.png", "ציורים/מנורה.png", "ציורים/חביתה.png", "ציורים/סוכרייה על מקל.png", "ציורים/קולב.png", "ציורים/גיטרה.png" ]);
    cards[40] = new Card("12345/41.png", ["ציורים/סוכרייה.png", "ציורים/מנורה.png", "ציורים/סליל.png", "ציורים/בקבוק.png", "ציורים/צדפים.png", "ציורים/מטבעות.png", "ציורים/עוגה.png", "ציורים/פיסטוק.png" ]);
    cards[41] = new Card("12345/42.png", ["ציורים/שעון.png", "ציורים/מגפיים.png", "ציורים/מוצץ.png", "ציורים/צבעים.png", "ציורים/אננס.png", "ציורים/פמוטות.png", "ציורים/מנורה.png", "ציורים/אופניים.png" ]);
    cards[42] = new Card("12345/43.png", ["ציורים/שוקולד.png", "ציורים/מנורה.png", "ציורים/גז.png", "ציורים/דונאצ.png", "ציורים/תפוח.png", "ציורים/תות.png", "ציורים/רוגלעך.png", "ציורים/דג.png"]);
    cards[43] = new Card("12345/44.png", ["ציורים/נקניק.png", "ציורים/דג.png", "ציורים/צבעים.png", "ציורים/ספר.png", "ציורים/בקבוק.png", "ציורים/מקדחה.png", "ציורים/ציפס.png", "ציורים/מטרייה.png" ]);
    cards[44] = new Card("12345/45.png", ["ציורים/גז.png", "ציורים/קוביות.png", "ציורים/גיטרה.png", "ציורים/במבה.png", "ציורים/מגפיים.png", "ציורים/מטרייה.png", "ציורים/פיסטוק.png", "ציורים/מכונית.png" ]);
    cards[45] = new Card("12345/46.png", ["ציורים/סליל.png", "ציורים/רמזור.png", "ציורים/כובע.png", "ציורים/כדור.png", "ציורים/מכונית.png", "ציורים/אופניים.png", "ציורים/נקניק.png", "ציורים/רוגלעך.png"]);
    cards[46] = new Card("12345/47.png", ["ציורים/ספר.png", "ציורים/צבע.png", "ציורים/כובע יומולדת.png", "ציורים/רמזור.png", "ציורים/חביתה.png", "ציורים/סוכרייה.png", "ציורים/מגפיים.png", "ציורים/שוקולד.png"]);
    cards[47] = new Card("12345/48.png", ["ציורים/תפוח.png", "ציורים/קוביות.png", "ציורים/פמוטות.png", "ציורים/כדור.png", "ציורים/ברוז.png", "ציורים/קולב.png", "ציורים/סוכרייה.png", "ציורים/מקדחה.png"]);
    cards[48] = new Card("12345/49.png", ["ציורים/דובי.png", "ציורים/מטבעות.png", "ציורים/מגפיים.png", "ציורים/סוכרייה על מקל.png", "ציורים/ענבים.png", "ציורים/תיק.png", "ציורים/כדור.png", "ציורים/דג.png"]);
    cards[49] = new Card("12345/50.png", ["ציורים/עוגיות.png", "ציורים/תפוח.png", "ציורים/כובע יומולדת.png", "ציורים/תיק.png", "ציורים/שעון.png", "ציורים/סליל.png", "ציורים/מטרייה.png", "ציורים/גלידה.png"]);
    document.getElementById('pOrC').innerHTML = 'עצור';
    poc = 1;
    t = 60;
    countT = 0;
    countF = 0;
    together = 0;
    if (localStorage.getItem('prevgame') && localStorage.getItem('timer') != -1) {
        t = localStorage.getItem('timer');
        countT = localStorage.getItem('mycountT');
        countF = localStorage.getItem('mycountF');
    }


    document.getElementById("timer").innerHTML = t;
    timerun = setInterval(tt, 1000);
    localStorage.setItem('timer', t);
   
    ran_cards();
    if (typeof window.localStorage != 'undefined') {
        localStorage.setItem('mycountT', countT);
        localStorage.setItem('mycountF', countF);
    }
    playOrStop();

}
function ran_cards() {//פונקציה שבכול סבב מגרילה  זוג מספרים ומציגה את זוג הכרטיסים על פי הגרלת המספרים
    for (var i = 0; i < 15; i++) {
        const cc = document.getElementById("bimg" + i);
        if (cc.classList.contains("maskX"))
            cc.classList.remove("maskX");
        if (cc.classList.contains("maskV"))
            cc.classList.remove("maskV");
    }
    if (localStorage.getItem('prevgame') && localStorage.getItem('timer') != -1) {
        x = localStorage.getItem('myCard1');
        y = localStorage.getItem('myCard2');
    }
    else {
        x = Math.round(Math.random() * 49);
        y = Math.round(Math.random() * 49);
    }
    img1 = document.createElement('img');
    img1.src = cards[x].imgg;
    img1.style.height = '88%';
    img1.style.width = '70%';
    document.getElementById("im1").appendChild(img1);
    for (var i = 0; i < 8; i++) {
        var bimg = document.createElement('img');
        bimg.src = cards[x].arrr[i];
        bimg.addEventListener('click', check);
        bimg.style.height = '90%';
        bimg.style.width = '85%';
        bimg.classList.add('mystyle');
        document.getElementById('bimg' + i).appendChild(bimg);
        if (document.getElementById('bimg' + i).childElementCount > 1)
            document.getElementById('bimg' + i).removeChild(document.getElementById('bimg' + i).firstElementChild);
    }
    
    if (x == y) {
        if (y < 49)
            y += 1;
        else
            y -= 1;       
    }
     img2 = document.createElement('img');
     img2.src = cards[y].imgg;
    document.getElementById("im2").appendChild(img2);
    img2.style.height = '88%';
    img2.style.width = '70%';
    /* מציג את הציורים שבקלף השני אבל לא מציג את הקלף בנכון פעמיים*/
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (cards[y].arrr[i] == cards[x].arrr[j]) {
                doublle = cards[y].arrr[i];
                break;
            }
        }
    }
    var indd=8
    for (var i = 0; i < 8; i++) {
        if (cards[y].arrr[i] != doublle) {
            bimg = document.createElement('img');
            bimg.src = cards[y].arrr[i];
            bimg.addEventListener('click', check);
            bimg.style.height = '90%';
            bimg.style.width = '85%';
            bimg.classList.add('mystyle');
            document.getElementById('bimg' + indd).appendChild(bimg);           
            if (document.getElementById('bimg' + indd).childElementCount > 1)
                document.getElementById('bimg' + indd).removeChild(document.getElementById('bimg' + indd).firstElementChild);
            indd++;
        }
    }
    if (localStorage.getItem('level')  ) {
        document.getElementById('cont').classList.remove('container1');
        document.getElementById('cont').classList.add('container1Level2');
        img3 = document.createElement('img');
        if (localStorage.getItem('prevgame') && localStorage.getItem('timer') != -1)
            w = localStorage.getItem('myCard3');
        else
            w = Math.round(Math.random() * 49);
        while (w == x || w == y)
            w = Math.round(Math.random() * 49);
        img3.src = cards[w].imgg;
        img3.style.height = '80%';
        img3.style.width = '100%';
        document.getElementById('im3').appendChild(img3);
        img1.style.height = '80%';
        img1.style.width = '100%';
        img2.style.height = '80%';
        img2.style.width = '100%';
        localStorage.setItem('myCard3', w);
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (cards[w].arrr[i] == cards[y].arrr[j]) {
                    doublle2 = cards[w].arrr[i];
                    break;
                }
            }
        }
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (cards[w].arrr[i] == cards[x].arrr[j]) {
                    doublle3 = cards[w].arrr[i];
                    break;
                }
            }
        }
        if (doublle == doublle2 && doublle == doublle3)
            ran_cards();

    }
    
    if (document.getElementById("im1").childElementCount > 1)
        document.getElementById("im1").removeChild(document.getElementById("im1").firstElementChild);
    if (document.getElementById("im2").childElementCount > 1)
        document.getElementById("im2").removeChild(document.getElementById("im2").firstElementChild);
    if (document.getElementById("im3").childElementCount > 1)
        document.getElementById("im3").removeChild(document.getElementById("im3").firstElementChild);
    localStorage.setItem('myCard1', x);
    localStorage.setItem('myCard2', y);
    numOfCards = 0;
    
    num1 = 0;
    num2 = 0;
    num3 = 0;
    countc = 0;
    arr = new Array(15);
    for (var i = 0; i < 15; i++) {
        arr[i] = 0;
    }

}
function time() {
    ran_cards();
}

function check(e) {
    if (!localStorage.getItem("level"))
        countc = 3;
    if (countc == 3)
        setTimeout(trueOrFalser1OfLevel, 2000);
    if (!localStorage.getItem('level')) {
        for (var i = 0; i < 15; i++) {
            if (document.getElementById('bimg' + i).classList == 'maskV' || document.getElementById('bimg' + i).classList == 'maskX')
                arr[i] = 1;
            document.getElementById('bimg' + i).querySelector('img').removeEventListener("click", check);
        }
        setTimeout(toClickAgain, 2000);
    if (e.target.getAttribute('src') == doublle && num1 < 1) {
        countT += 1;
        (e.currentTarget).parentElement.classList.add("maskV");
        (e.currentTarget).style.opacity = 0.6;
        localStorage.setItem('mycountT', countT);
        numOfCards++;
        d1 = e.target.getAttribute('src');
        num1++;
        together = countT * 50;
        document.getElementById('score2').innerHTML = Number(together);
        setTimeout(trueOrFalser1OfLevel, 2000);
        return;
    }
    if (e.target.getAttribute('src') != doublle && num1 < 1)  {
        countF+= 1;
        (e.currentTarget).parentElement.classList.add("maskX");
        (e.currentTarget).style.opacity = 0.6;
        localStorage.setItem('mycountF', countF);
        setTimeout(trueOrFalser1OfLevel, 2000);
        return;
        }
    }

    if (localStorage.getItem('level')) {
        for (var i = 0; i < 15; i++) {
            if (document.getElementById('bimg' + i).classList == 'maskV' || document.getElementById('bimg' + i).classList == 'maskX')
                arr[i] = 1;
            document.getElementById('bimg' + i).querySelector('img').removeEventListener("click", check);
        }
        setTimeout(toClickAgain, 2000);

        if (e.target.getAttribute('src') == doublle && num1 < 1) {
            countT += 1;
            (e.currentTarget).parentElement.classList.add("maskV");
            (e.currentTarget).style.opacity = 0.6;
            e.currentTarget.removeEventListener("click", check);
            localStorage.setItem('mycountT', countT);
            numOfCards++;
            d1 = e.target.getAttribute('src');
            num1++;
            together = countT * 50;
            document.getElementById('score2').innerHTML = Number(together);
            countc++;
            
        }
        else
            if (e.target.getAttribute('src') != doublle2 && e.target.getAttribute('src') != doublle3) {
                (e.currentTarget).parentElement.classList.add("maskX");
                (e.currentTarget).style.opacity = 0.6;
                e.currentTarget.removeEventListener("click", check);
                //countF += 1;
                //localStorage.setItem('mycountF', countF);
                countc++;
               
            }
        if (e.target.getAttribute('src') == doublle2 && num2<1) {
            countT += 1;
            localStorage.setItem('mycountT', countT);
            numOfCards++;
            e.currentTarget.removeEventListener("click", check);
            d2 = e.target.getAttribute('src');
            num2++;
            together = countT * 50;
            document.getElementById('score2').innerHTML = Number(together);
            (e.currentTarget).parentElement.classList.add("maskV");
            (e.currentTarget).style.opacity = 0.6;
            countc++;
            
        }
        else 
           if (e.target.getAttribute('src') != doublle && e.target.getAttribute('src') != doublle3) {
               (e.currentTarget).parentElement.classList.add("maskX");
               (e.currentTarget).style.opacity = 0.6;
               e.currentTarget.removeEventListener("click", check);
           }

        if (e.target.getAttribute('src') == doublle3 && num3 < 1) {
            countT += 1;
            localStorage.setItem('mycountT', countT);
            numOfCards++;
            d3 = e.target.getAttribute('src');
            num3++;
            together = countT * 50;
            e.currentTarget.removeEventListener("click", check);
            document.getElementById('score2').innerHTML = Number(together);
            (e.currentTarget).parentElement.classList.add("maskV");
            (e.currentTarget).style.opacity = 0.6;
            countc++;
            
        }
        else
            if (e.target.getAttribute('src') != doublle && e.target.getAttribute('src') != doublle2) {
                (e.currentTarget).parentElement.classList.add("maskX");
                (e.currentTarget).style.opacity = 0.6;
                e.currentTarget.removeEventListener("click", check);

            }
        
        if (countc < 3)
            return;
    }
    setTimeout(trueOrFalser1OfLevel, 2000);   
}
function toClickAgain() {
    for (var i = 0; i < 15; i++) {
        if (arr[i] != 1)
            document.getElementById('bimg' + i).querySelector('img').addEventListener("click", check);
    }
}

function trueOrFalser1OfLevel() {
    together = countT * 50;
    document.getElementById('score2').innerHTML = Number(together);
    localStorage.setItem('score', together);
    ran_cards();
}
function tt() {
    if (document.getElementById("timer").innerHTML == 0) {
        clearInterval(timerun);
        alert("the game over!");
        location.replace("result.html");
    }
    else {
        document.getElementById("timer").innerHTML = t--;
        localStorage.setItem('timer', t);

    }
}

function pushpOrContinue() {
    if (poc == 1) {
        clearInterval(timerun);
        img1.src = "12345/51.png";
        img2.src = "12345/51.png";
        if (localStorage.getItem('level'))
            img3.src = "12345/51.png";


        for (var i = 0; i < 15; i++) {
            document.getElementById('bimg' + i).querySelector('img').removeEventListener("click", check);
            document.getElementById('bimg' + i).querySelector('img').classList.remove('mystyle');
        }
        poc = 2;
        document.getElementById('pOrC').innerHTML = 'המשך';
    }
    else
    {
        img1.src = cards[x].imgg;
        img2.src = cards[y].imgg;
        if (localStorage.getItem('level'))
            img3.src = cards[w].imgg;
        timerun = setInterval(tt,1000);
        for (var i = 0; i < 15; i++) {
            document.getElementById('bimg' + i).querySelector('img').addEventListener("click", check);
            document.getElementById('bimg' + i).querySelector('img').classList.add('mystyle');
        }
        document.getElementById('pOrC').innerHTML = 'עצור';
        poc = 1;
    }
}
function showRadio() {
    document.getElementById('levels').hidden = false;
}

//---------------------------------------------------------------homepage
function openNav() {
    document.getElementById("BoardMenu").style.top = "0";
    document.getElementById("openBoardMenu").style.top = "40vh";
    document.getElementById('levels').hidden = true;

    //document.getElementById("openBoardMenu").setAttribute("z-index", "5");
    //document.getElementById("BoardMenu").setAttribute("z-index", "5");

}
function closeNav() {
    document.getElementById("BoardMenu").style.top = "-41vh";
    //document.getElementById("openBoardMenu").setAttribute("z-index", "1");
    //document.getElementById("BoardMenu").setAttribute("z-index", "1");
    document.getElementById("openBoardMenu").style.top = "0vh";
}

function res() {
    //if (localStorage.getItem('level')) 
    //     document.getElementById("alll").innerHTML += Math.ceil(Number(localStorage.getItem('mycountT'))/3);   
    //else
    //     document.getElementById("alll").innerHTML += Number(localStorage.getItem('mycountT'))/*+ Number(localStorage.getItem('mycountF')*/;
    document.getElementById("true").innerHTML += Number(localStorage.getItem('mycountT'));
    document.getElementById("false").innerHTML += Number(localStorage.getItem('mycountF'));
    document.getElementById("together").innerHTML += Number(localStorage.getItem('mycountT') * 50);

     if (localStorage.getItem('score') > 90) {
     document.getElementById("fieldest1").style.backgroundImage = "p/גביע.jpg";
     document.getElementById("grade").src = "p/גביע.jpg";
     }
     else
         if (localStorage.getItem('score') > 40) {
             document.getElementById("fieldest1").style.backgroundImage = "p / מדליה1.jpg";
             document.getElementById("grade").src = "p/מדליה1.jpg";
         }
}
ss = 0;
function playOrStop() {
    s = document.getElementById('sound');
    if (ss == 0) {
        s.play();
        ss = 1;
        document.getElementById('music').src = "p/המשך.jpg";

    }
    else {
        s.pause();
        ss = 0;
        document.getElementById('music').src = "p/עצור.png";

    }
}


