let names = document.getElementsByClassName("members-name-name");

function aboutUnique() {
    document.getElementById("members-description-name").innerHTML = "Unique Salonga";
    document.getElementById("members-description-body").innerHTML = "<span>Unique Torralba Salonga</span>, known mononymously as <span>Unique</span> or stylized as <span>UNIQUE</span>, (born April 26, 2000) is a Filipino singer-songwriter and musician. He began his career as a vocalist and original frontman of <span>IV of Spades</span> and later pursued a solo career.";
    
    for (let i = 0; i < names.length; ++i) {
        names[i].innerHTML = "UNIQUE";
    }
}

function aboutBlaster() {
    document.getElementById("members-description-name").innerHTML = "Blaster Silonga";
    document.getElementById("members-description-body").innerHTML = "<span>Blaster Mitchelle Medina Silonga</span> (born 30 September 1999), popularly known as <span>Blaster Silonga</span> or mononymously as <span>BLASTER</span> (stylized in uppercase), is a Filipino singer-songwriter and a musician. He is known as the lead guitarist and co-vocalist of <span>IV of Spades</span> while he also pursues solo music and formed his own band known as <span>\"Blaster and the Celestial Klowns\"</span>.";
    
    for (let i = 0; i < names.length; ++i) {
        names[i].innerHTML = "BLASTER";
    }
}

function aboutZild() {
    document.getElementById("members-description-name").innerHTML = "Zild Benitez";
    document.getElementById("members-description-body").innerHTML = "<span>Daniel Zildjian Garon Benitez</span> (born April 23, 1997), popularly known as <span>Zild</span>, is a Filipino musician, producer, and singer-songwriter. He is currently the lead vocalist, pianist/keyboardist, synth player and bassist of <span>IV of Spades</span> in addition to a solo career.";
    
    for (let i = 0; i < names.length; ++i) {
        names[i].innerHTML = "ZILDJIAN";
    }
}

function aboutBadjao() {
    document.getElementById("members-description-name").innerHTML = "Badjao de Castro";
    document.getElementById("members-description-body").innerHTML = "<span>Badjao de Castro</span> (born July 11, 1994) is a Filipino musician. He is currently the drummer of <span>IV of Spades</span>.";
    
    for (let i = 0; i < names.length; ++i) {
        names[i].innerHTML = "BADJAO";
    }
}