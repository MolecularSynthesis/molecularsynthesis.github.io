//aggiornamento1
function pro1() {
                var img = document.getElementById("imgPanel1");
                var slideNumber = document.getElementById("slideNumber1");
                for (i=1; i<=19; i++) {
                    if (Number(img.title)==i) {
                        i++
                        img.src = "slide/1/1ricerca" + i + ".png";
                        img.title = i;
                        slideNumber.innerHTML = "slide" + i;
                        break;
                    }
                    else if (Number(img.title)==19) {
                        img.src = "slide/1/1ricerca" + 1 + ".png";
                        img.title = 1;
                        slideNumber.innerHTML = "slide1";
                        break;
                    }
                }
            }
function pre1() {
                var img = document.getElementById("imgPanel1");
                var slideNumber = document.getElementById("slideNumber1");
                for (i=19; i>=1; i--) {
                    if (Number(img.title)==i) {
                        i--
                        img.src = "slide/1/1ricerca" + i + ".png";
                        img.title = i;
                        slideNumber.innerHTML = "slide" + i;
                        break;
                    }
                    else if (Number(img.title)==1) {
                        img.src = "slide/1/1ricerca" + 19 + ".png";
                        img.title = 19;
                        slideNumber.innerHTML = "slide20";
                        break;
                    }
                }
            }

//aggiornamento2 src="slide/2/2concept1.png"
function pro2() {
                var img = document.getElementById("imgPanel2");
                var slideNumber = document.getElementById("slideNumber2");
                for (i=1; i<=20; i++) {
                    if (Number(img.title)==i) {
                        i++
                        img.src = "slide/2/2concept" + i + ".png";
                        img.title = i;
                        slideNumber.innerHTML = "slide" + i;
                        break;
                    }
                    else if (Number(img.title)==20) {
                        img.src = "slide/2/2concept" + 1 + ".png";
                        img.title = 1;
                        slideNumber.innerHTML = "slide1";
                        break;
                    }
                }
            }
function pre2() {
                var img = document.getElementById("imgPanel2");
                var slideNumber = document.getElementById("slideNumber2");
                for (i=20; i>=1; i--) {
                    if (Number(img.title)==i) {
                        i--
                        img.src = "slide/2/2concept" + i + ".png";
                        img.title = i;
                        slideNumber.innerHTML = "slide" + i;
                        break;
                    }
                    else if (Number(img.title)==1) {
                        img.src = "slide/2/2concept" + 20 + ".png";
                        img.title = 20;
                        slideNumber.innerHTML = "slide20";
                        break;
                    }
                }
            }