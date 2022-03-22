window.addEventListener("load", init);

/*rövidítések*/{
    function ID(elem) {
        return document.getElementById(elem);
    }
    function $(elem) {
        return document.querySelectorAll(elem);
    }
}

function init() {
    megjelenit();
    ID("clear").addEventListener("click", init);
    mezoEvent();
}

function mezoEvent() {
    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", xVagyO);
    }
}

function megjelenit() {
    var txt="";
    for (let i = 0; i < 9; i++) {
        txt+=
        `<div class="mezo" id="${i}">
        </div>`;
    }
    ID("container").innerHTML=txt;   
}

var kiJon=0;
var felulet=["-", "-", "-", "-", "-", "-", "-", "-", "-"];
function xVagyO(){
    index=event.target.id;
    if (kiJon<1) {
        ID(index).innerHTML="<p>X</p>";
        ID(index).removeEventListener("click", xVagyO);
        felulet[index]="X";
        kiJon++;
        //console.log(kiJon);
        console.log(felulet);
    } else {
        ID(index).innerHTML="<p>O</p>";
        ID(index).removeEventListener("click", xVagyO);
        felulet[index]="O";
        kiJon--;
        //console.log(kiJon);
        console.log(felulet);
    }

    if (felulet[0]===felulet[1]===felulet[2] || felulet[3]===felulet[4]===felulet[5] || 
        felulet[6]===felulet[7]===felulet[8] || felulet[0]===felulet[4]===felulet[6] ||
        felulet[1]===felulet[5]===felulet[7] || felulet[2]===felulet[6]===felulet[8] ||
        felulet[0]===felulet[5]===felulet[8] || felulet[3]===felulet[5]===felulet[6]) {
        console.log("nyertél");
    }
}