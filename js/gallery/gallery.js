//aggiornamento1


//aggiornamento2 src="slide/2/2concept1.png"
function pro2() {
                var img = document.getElementById("imgPanel2");
                for (i=1; i<=20; i++) {
                    if (Number(img.title)==i) {
                        i++
                        img.src = "slide/2/2concept" + i + ".png";
                        img.title = i;
                        break;
                    }
                    else if (Number(img.title)==20) {
                        img.src = "slide/2/2concept" + 1 + ".png";
                        img.title = 1;
                        break;
                    }
                }
            }
function pre2() {
                var img = document.getElementById("imgPanel2");
                for (i=20; i>=1; i--) {
                    if (Number(img.title)==i) {
                        i--
                        img.src = "slide/2/2concept" + i + ".png";
                        img.title = i;
                        break;
                    }
                    else if (Number(img.title)==1) {
                        img.src = "slide/2/2concept" + 20 + ".png";
                        img.title = 20;
                        break;
                    }
                }
            }