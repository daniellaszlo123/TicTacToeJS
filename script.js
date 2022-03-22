window.addEventListener("load", init);

/*rövidítések*/{
    function ID(elem) {
        return document.getElementById(elem);
    }
    function $(elem) {
        return document.querySelectorAll(elem);
    }
}
/*változók*/{
    var kiJon=0;
    var felulet=["-", "-", "-", 
                "-", "-", "-", 
                "-", "-", "-"];
}
function valtozokNullazasa() {
    felulet=["-", "-", "-", 
         "-", "-", "-", 
         "-", "-", "-"];
    kiJon=0;
}

function init() {
    valtozokNullazasa();
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

function kiLep(jel, lepes, index) {
    ID(index).innerHTML=`<p>${jel}</p>`;
        ID(index).removeEventListener("click", xVagyO);
        felulet[index]=`${jel}`;
        kiJon+=lepes;
}

function xVagyO(){
    index=event.target.id;
    if (kiJon<1) {
        kiLep("X", 1, index);
    } else {
        kiLep("O", -1, index);
    }
    /*JÓ esetek kigyüjtése*/{
        var feluletHossz=felulet.length;
        var oszlop1=kigyujto(0, feluletHossz, 3, felulet);
        var oszlop2=kigyujto(1, feluletHossz, 3, felulet);
        var oszlop3=kigyujto(2, feluletHossz, 3, felulet);
        var sor1="";
        var sor2="";
        var sor3="";
        for (let i = 0; i < felulet.length; i++) {
            if (i<=2) {
                sor1+=felulet[i];
            }else if (i<=5) {
                sor2+=felulet[i];
            }else if (i<=8) {
                sor3+=felulet[i];
            }
        }
        var atlo1=kigyujto(0, feluletHossz, 4, felulet);
        var atlo2=kigyujto(2, feluletHossz-1, 2, felulet);
    }
    /*ellenorzes*/{
        ellenorzes(oszlop1);
        ellenorzes(oszlop2);
        ellenorzes(oszlop3);
        ellenorzes(atlo1);
        ellenorzes(atlo2);
        ellenorzes(sor1);
        ellenorzes(sor2);
        ellenorzes(sor3);
    }
}

function kigyujto(mettol, meddig, lepesszam, felulet) {
    var kigyujtott="";
    for (let i = mettol; i < meddig; i+=lepesszam) {
        kigyujtott+=felulet[i];
    }
    return kigyujtott;
}

function ellenorzes(kigyujtott) {
    if (kigyujtott=="XXX" || kigyujtott=="OOO") {
        if (kigyujtott=="XXX") {
            gyozKiir("X");
        } else {
            gyozKiir("O");
        }
    }
}

function gyozKiir(jel) {
    alert(`Nyert az '${jel}' játékos!`);
            for (let index = 0; index < 9; index++) {
                ID(index).removeEventListener("click", xVagyO);
            }
}