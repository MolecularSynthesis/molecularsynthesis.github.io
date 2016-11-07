function pro1() {
                var img = document.getElementById("imgPanel1");
                for (i=1; i<=20; i++) {
                    if (Number(img.title)==i) {
                        i++
                        img.src = "imgs/mask" + i + ".png";
                        img.title = i;
                        break;
                    }
                    else if (Number(img.title)==20) {
                        img.src = "imgs/mask" + 1 + ".png";
                        img.title = 1;
                        break;
                    }
                }
            }
function pre1() {
                var img = document.getElementById("imgPanel1");
                for (i=20; i>=1; i--) {
                    if (Number(img.title)==i) {
                        i--
                        img.src = "imgs/mask" + i + ".png";
                        img.title = i;
                        break;
                    }
                    else if (Number(img.title)==1) {
                        img.src = "imgs/mask" + 20 + ".png";
                        img.title = 20;
                        break;
                    }
                }
            }