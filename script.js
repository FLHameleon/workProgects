//////////////////////////////////////////////////////////////Отрисовка поля
var tablPole = document.querySelector('table')
var strKodaInner = 'test'

var strKodaInner = ''

for(var i = 0; i < 3; i++) {
    strKodaInner += '<tr>'
    for(var j = 0; j < 8; j++) {
        if((i % 2 + j) % 2 == 0)
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}><div class="okrugPlay2" name = ${(i + 1) * 10 + (j + 1)}></div></td>`
        else
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}><div class="okrug" name = ${(i + 1) * 10 + (j + 1)}></div></td>`
    }
    strKodaInner += '</tr>'
}



for(var i = 3; i < 5; i++) {
    strKodaInner += '<tr>'
    for(var j = 0; j < 8; j++) {
        if((i % 2 + j) % 2 == 1)
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}><div class="okrug"></div></td>`
        else
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}></td>`
    }
    strKodaInner += '</tr>'
}




for(var i = 5; i < 8; i++) {
    strKodaInner += '<tr>'
    for(var j = 0; j < 8; j++) {
        if((i % 2 + j) % 2 == 0)
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}><div class="okrugPlay1" name = ${(i + 1) * 10 + (j + 1)}></div></td>`
        else
            strKodaInner += `<td id=${(i + 1) * 10 + (j + 1)}><div class="okrug" name = ${(i + 1) * 10 + (j + 1)}></div></td>`
    }
    strKodaInner += '</tr>'
}

tablPole.innerHTML = strKodaInner

////////////////////////////////////////////////////////////////////////Начало алгоритма

var idClickName
var nameProhId
var prohlClick
var edinDesytki
var oherednost
var buttonRest

var kolWhite
var kolBlack


//peremDamok
var sizeHoda
var koorKletkiHodaX
var koorKletkiHodaY
var koorKletkiHodaXPosle
var koorKletkiHodaYPosle

kolBlack = 12
kolWhite = 12


buttonRest = document.getElementById('gameRestart')

buttonRest.className = 'buttonHod2'
oherednost = 'okrugPlay1'

document.getElementById('poleWord').addEventListener('click',  function(event) {

    

    if(event.target.getAttribute('name')){

        edinDesytki = razbivka(event.target.getAttribute('name'))

        //console.log('name edinic' , edinDesytki[0])
        //console.log('name decytki', edinDesytki[1])

        //event.target.setAttribute('id', +edinDesytki[0] + edinDesytki[1] * 10)

        //console.log(event.target.getAttribute('name'))
    }

    if(event.target.getAttribute('id')) {
        edinDesytki = razbivka(event.target.getAttribute('id'))

        //console.log('id edinic' ,edinDesytki[0])
        //console.log('id decytki', edinDesytki[1])
        //console.log(event.target.getAttribute('id'))
    }

        idClickName = +edinDesytki[0] + edinDesytki[1] * 10
        //console.log(idClickName)
    if((+edinDesytki[0] > 0) && (+edinDesytki[0] < 9) && (+edinDesytki[1] > 0) && (+edinDesytki[1] < 9))
    if(document.getElementById(idClickName).tagName == 'TD' && (+edinDesytki[0] + edinDesytki[1]) % 2 == 0) {


        if(nameProhId) {
            document.getElementById(nameProhId).style.background = 'Orange'
        }


        if(prohlClick && document.getElementById(idClickName).innerHTML == "" && proverkaHods(idClickName, nameProhId, prohlClick, oherednost)) {
                document.getElementById(idClickName).innerHTML = newNameDiv(prohlClick, idClickName)
                document.getElementById(nameProhId).innerHTML = ""
                prohlClick = "";

                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                //console.log(idClickName);
                if(oherednost == 'okrugPlay1' && (idClickName == 11 || idClickName == 13 || idClickName == 15 || idClickName == 17)) {
                    document.getElementById(idClickName).innerHTML = `<div class="okrugPlay1D" name = ${idClickName}></div>`
                }
    
                if(oherednost == 'okrugPlay2' && (idClickName == 82 || idClickName == 84 || idClickName == 86 || idClickName == 88)) {
                document.getElementById(idClickName).innerHTML = `<div class="okrugPlay2D" name = ${idClickName}></div>`
                }
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                if(oherednost == 'okrugPlay1') {
                    oherednost = 'okrugPlay2';
                    buttonRest.className = 'buttonHod1'
            } else {
                oherednost = 'okrugPlay1';
                buttonRest.className = 'buttonHod2'
            }

            } else if(document.getElementById(idClickName).innerHTML) {
                document.getElementById(idClickName).style.background = 'red'
                prohlClick = document.getElementById(idClickName).innerHTML
            }


        nameProhId = idClickName
    }
        
  })

  var proverkaHods = function(kyda, otkyda, cvet, heyHod) {

    if((document.getElementById(otkyda).innerHTML.indexOf(heyHod) == -1))
        return false;



    var hislKyda = razbivka(kyda)
    var hislOtkyda = razbivka(otkyda)

    //document.getElementById('11').innerHTML = ""

    if(cvet.indexOf('okrugPlay1') != -1) {

        console.log('peredWinn')
        if(cvet.indexOf('okrugPlay1D') != -1) {

            console.log('Winn')

    


            sizeHoda = 1
            //hislOtkyda[1], hislOtkyda[0], hislKyda[1], hislKyda[0]
            while(hislOtkyda[1] - sizeHoda > 0 && hislOtkyda[0] - sizeHoda > 0) {

            koorKletkiHodaY = hislOtkyda[1] - sizeHoda
            koorKletkiHodaX = hislOtkyda[0] - sizeHoda
            koorKletkiHodaYPosle = koorKletkiHodaY - 1
            koorKletkiHodaXPosle = koorKletkiHodaX - 1

            if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'yes') {return true
            } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'stopProverka') break;


                sizeHoda++    
                
            }



            sizeHoda = 1

            while(hislOtkyda[1] - sizeHoda > 0 && hislOtkyda[0] + sizeHoda < 9) {

                koorKletkiHodaY = hislOtkyda[1] - sizeHoda
                koorKletkiHodaX = hislOtkyda[0] + sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY - 1
                koorKletkiHodaXPosle = koorKletkiHodaX + 1


                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'stopProverka') break;

                sizeHoda++    
            }



            sizeHoda = 1
            while(hislOtkyda[1] + sizeHoda < 9 && hislOtkyda[0] - sizeHoda > 0) {

                koorKletkiHodaY = hislOtkyda[1] + sizeHoda
                koorKletkiHodaX = hislOtkyda[0] - sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY + 1
                koorKletkiHodaXPosle = koorKletkiHodaX - 1

                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'stopProverka') break;

                sizeHoda++    
            }



            sizeHoda = 1

            while(hislOtkyda[1] + sizeHoda < 9 && hislOtkyda[0] + sizeHoda < 9) {


                koorKletkiHodaY = hislOtkyda[1] + sizeHoda
                koorKletkiHodaX = hislOtkyda[0] + sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY + 1
                koorKletkiHodaXPosle = koorKletkiHodaX + 1

                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay1') == 'stopProverka') break;

                sizeHoda++
            }




            return false
        }

        //console.log(cvet.indexOf('okrugPlay1'))
        if(hislOtkyda[1] - 1 == hislKyda[1] && (hislOtkyda[0] - 1 == hislKyda[0] || hislOtkyda[0] + 1 == hislKyda[0])) {return true}
        
        if((hislOtkyda[1] - 2 == hislKyda[1]) && (document.getElementById(kyda).innerHTML == '')) {

          
            //console.log('YES')


            if(killFigura(hislOtkyda[0] - 1, (hislOtkyda[1] - 1) * 10, 'okrugPlay2', hislOtkyda[0] - 2 == hislKyda[0])) {
                return true
            }
            

            if(killFigura(hislOtkyda[0] + 1, (hislOtkyda[1] - 1) * 10, 'okrugPlay2', hislOtkyda[0] + 2 == hislKyda[0])) {
                return true
            }

        }

        if((hislOtkyda[1] + 2 == hislKyda[1]) && (document.getElementById(kyda).innerHTML == '')) {
          
            //console.log('YES')
            
            if(killFigura(hislOtkyda[0] - 1, (hislOtkyda[1] + 1) * 10, 'okrugPlay2', hislOtkyda[0] - 2 == hislKyda[0])) {
                return true
            }
            
            
            if(killFigura(hislOtkyda[0] + 1, (hislOtkyda[1] + 1) * 10, 'okrugPlay2', hislOtkyda[0] + 2 == hislKyda[0])) {
                return true
            }

        }


    }

    if(cvet.indexOf('okrugPlay2') != -1) {

        console.log('BlackPeredWinn')
        if(cvet.indexOf('okrugPlay2D') != -1) {



                sizeHoda = 1
                while(hislOtkyda[1] - sizeHoda > 0 && hislOtkyda[0] - sizeHoda > 0) {


                koorKletkiHodaY = hislOtkyda[1] - sizeHoda
                koorKletkiHodaX = hislOtkyda[0] - sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY - 1
                koorKletkiHodaXPosle = koorKletkiHodaX - 1

                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'stopProverka') break;

                    sizeHoda++    
                }
    
    
    
                sizeHoda = 1
                while(hislOtkyda[1] - sizeHoda > 0 && hislOtkyda[0] + sizeHoda < 9) {
                    
                koorKletkiHodaY = hislOtkyda[1] - sizeHoda
                koorKletkiHodaX = hislOtkyda[0] + sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY - 1
                koorKletkiHodaXPosle = koorKletkiHodaX + 1


                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'stopProverka') break;

                    sizeHoda++    
                }
    
    
    
                sizeHoda = 1
                while(hislOtkyda[1] + sizeHoda < 9 && hislOtkyda[0] - sizeHoda > 0) {
                    


                koorKletkiHodaY = hislOtkyda[1] + sizeHoda
                koorKletkiHodaX = hislOtkyda[0] - sizeHoda
                koorKletkiHodaYPosle = koorKletkiHodaY + 1
                koorKletkiHodaXPosle = koorKletkiHodaX - 1
                
                if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'yes') {return true
                } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'stopProverka') break;

                    sizeHoda++    
                }
    
    
    
                sizeHoda = 1
                while(hislOtkyda[1] + sizeHoda < 9 && hislOtkyda[0] + sizeHoda < 9) {


                    koorKletkiHodaY = hislOtkyda[1] + sizeHoda
                    koorKletkiHodaX = hislOtkyda[0] + sizeHoda
                    koorKletkiHodaYPosle = koorKletkiHodaY + 1
                    koorKletkiHodaXPosle = koorKletkiHodaX + 1
    
                    if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'yes') {return true
                    } else if(hodDamki(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, 'okrugPlay2') == 'stopProverka') break;

                    sizeHoda++
                }

            return false
        }

        //console.log(cvet.indexOf('okrugPlay2'))
        if(hislOtkyda[1] + 1 == hislKyda[1] && (hislOtkyda[0] - 1 == hislKyda[0] || hislOtkyda[0] + 1 == hislKyda[0])) {return true}
    
    
        if((hislOtkyda[1] - 2 == hislKyda[1]) && (document.getElementById(kyda).innerHTML == '')) {

          
            //console.log('YESBlack')

            
            if(killFigura(hislOtkyda[0] - 1, (hislOtkyda[1] - 1) * 10, 'okrugPlay1', hislOtkyda[0] - 2 == hislKyda[0])) {
                return true
            }
            

            
            if(killFigura(hislOtkyda[0] + 1, (hislOtkyda[1] - 1) * 10, 'okrugPlay1', hislOtkyda[0] + 2 == hislKyda[0])) {
                return true
            }

        }

        if((hislOtkyda[1] + 2 == hislKyda[1]) && (document.getElementById(kyda).innerHTML == '')) {

          
            //console.log('YESBlack')
            
            if(killFigura(hislOtkyda[0] - 1, (hislOtkyda[1] + 1) * 10, 'okrugPlay1', hislOtkyda[0] - 2 == hislKyda[0])) {
                return true
            }


            if(killFigura(hislOtkyda[0] + 1, (hislOtkyda[1] + 1) * 10, 'okrugPlay1', hislOtkyda[0] + 2 == hislKyda[0])) {
                return true
            }

        }
    
    }



    return false
  }


  

var hodDamki = function(kyda, koorKletkiHodaX, koorKletkiHodaY, koorKletkiHodaXPosle, koorKletkiHodaYPosle, soyzniki) {

    var protivniki

    if (soyzniki == 'okrugPlay1') {
        protivniki = 'okrugPlay2'
    } else {
        protivniki = 'okrugPlay1'
    }

    var hislKyda = razbivka(kyda)

    if(document.getElementById(koorKletkiHodaY * 10 + koorKletkiHodaX).innerHTML.indexOf(soyzniki) != -1) return 'stopProverka';;

    if(document.getElementById(koorKletkiHodaY * 10 + koorKletkiHodaX).innerHTML.indexOf(protivniki) != -1) {

        if(koorKletkiHodaYPosle == hislKyda[1] && koorKletkiHodaXPosle == hislKyda[0]) {

            document.getElementById(koorKletkiHodaY * 10 + koorKletkiHodaX).innerHTML = ''

            if (protivniki.indexOf('okrugPlay1'))
            kolBlack--
            
            if (protivniki.indexOf('okrugPlay2'))
            kolWhite--

            if(kolBlack == 0)   winnerRestart('okrugPlay1')


            if(kolWhite == 0)   winnerRestart('okrugPlay2')

            return 'yes'
        }
        return 'stopProverka';
    }



if(koorKletkiHodaY == hislKyda[1] && (koorKletkiHodaX == hislKyda[0])) {return 'yes'}

return false
}


  var killFigura = function(koorX, koorY, tima, proverkHoda) {
    if(provVraga(koorY, koorX, tima) && proverkHoda) {
        document.getElementById(koorY + koorX).innerHTML = '';

        if(tima == 'okrugPlay1')
        kolWhite--;
        else
        kolBlack--

        console.log('White ', kolWhite, 'Black ', kolBlack)

        if(kolWhite == 0)   winnerRestart('okrugPlay2')
        if(kolBlack == 0)   winnerRestart('okrugPlay1')

        return true
    }
    return false
  }

  var winnerRestart = function(tima) {

      if(tima == 'okrugPlay1') {
        alert('Winner White');
      } else {
        alert('Winner Black');
      }

      
      window.location.reload();
  }



  var provVraga = function(desytk, edinic, storona) {
      
    if(desytk < 1 || edinic < 1) return false

    if((document.getElementById(desytk + edinic).innerHTML.indexOf(storona) != -1))
        return true;

    return false;
  }


  var newNameDiv = function(strInnerHtml, newName) {
    //console.log(strInnerHtml)

    var ispravlStrHTML = ""
    var hisl = razbivka(newName)
    var iChethik

    for(iChethik=0; iChethik < strInnerHtml.indexOf('name') + 6; iChethik++) {
        ispravlStrHTML += strInnerHtml[iChethik]
    }

    ispravlStrHTML += hisl[1]
    ispravlStrHTML += hisl[0]
    iChethik += 2

    for(; iChethik < strInnerHtml.length; iChethik++) {
        ispravlStrHTML += strInnerHtml[iChethik]
    }

    //console.log(ispravlStrHTML)

    return ispravlStrHTML
  }

  var razbivka = function(strId) {
      var hisl = []
      hisl.push(strId % 10)
      hisl.push((+strId - hisl[0]) / 10)
      return hisl
  }