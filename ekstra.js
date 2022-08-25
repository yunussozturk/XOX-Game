// HTML inputlara erişim sağlandı
var kullanici1Name = document.querySelector('#kullanici1')
var kullanici2Name = document.querySelector('#kullanici2')
// değişken(oyun için bir harf) yaratıldı
var ooo = "O";
//kutulara erişim sağlandı
var kutu = document.getElementsByClassName("a");
// Submit(Oyuna Başla Butonu)'e Tıklayınca çalışacak fonksiyon.
document.getElementById('mySubmit').addEventListener("click", submitFunction);

function submitFunction(event){
    event.preventDefault();
// kullanıcı isimleri için belirlediğimiz kriterler
    if(kullanici1Name.value.length > 15){
        alert(`fazla karakter kullandınız !`)
        submitOK = "false";
    }
    if(kullanici1Name.value.length < 1){
        alert("lütfen kullanici 1 ismi giriniz")
        submitOK = "false";
    }
    if(kullanici2Name.value.length > 15){
        alert("fazla karakter kullandınız !")
        submitOK = "false";
    }
    if(kullanici2Name.value.length < 1){
        alert("lütfen kullanici 2 ismi giriniz")
        submitOK = "false";
    }
// kullanıcı isimleri boş değilse toast mesajıyla oyunu başlatma ve kutulara X ve O yazdırma
    kutu = document.getElementsByClassName("a");
    var i;

    if(kullanici1Name.value != "" && kullanici2Name.value != ""){ 
        var toastBasarili = document.getElementById('mesajgoster')
        var toast = new bootstrap.Toast(toastBasarili)        
        toast.show()
          
        for (i = 0; i < kutu.length; i++) {       
            kutu[i].onclick = function() {   
                if(kullanici1Name.value != null && kullanici2Name != null){
                    if(this.textContent != "X" && this.textContent != "O"){
                        if(ooo === "O"){
                            ooo = "X";
                            this.innerHTML = ooo;          
                        }
                        else if(ooo === "X"){
                            ooo = "O";
                            this.innerHTML = ooo;
                        }
                    }
                }
                sonuc();  
            } 
   
        }       
    }
};

// oyun alanına tıkladığımızda kullanıcı isimleri boş ise, başlamayan oyunu alert mesajıyla belirtme
if(kullanici1Name.value === "" || kullanici2Name.value === ""){
    kutu = document.getElementsByClassName("a");
    var i;
    for (i = 0; i < kutu.length; i++) {       
        kutu[i].onclick = function() {   
            alert(`Oyuna başlamak için lütfen kullanıcı adlarını giriniz ve 
"Oyuna Başla" butonuna tıklayınız!`)
        }      
    } 
}

//HTML table td(oyun kutularına)'lerine erişim sağlandı 
var td1 = document.querySelector('#td1')
var td2 = document.querySelector('#td2')
var td3 = document.querySelector('#td3')
var td4 = document.querySelector('#td4')
var td5 = document.querySelector('#td5')
var td6 = document.querySelector('#td6')
var td7 = document.querySelector('#td7')
var td8 = document.querySelector('#td8')
var td9 = document.querySelector('#td9')

// oyunun sonucu belirlendi
function sonuc(){
    if(
       ((td1.textContent == td2.textContent) && (td1.textContent == td3.textContent) && (td1.textContent == "X")) || ((td4.textContent == td5.textContent) && (td4.textContent == td6.textContent) && (td4.textContent == "X")) || ((td7.textContent == td8.textContent) && (td7.textContent == td9.textContent) && (td7.textContent == "X")) ||
       ((td1.textContent == td4.textContent) && (td1.textContent == td7.textContent) && (td1.textContent == "X")) || ((td2.textContent == td5.textContent) && (td2.textContent == td8.textContent) && (td2.textContent == "X")) || ((td3.textContent == td6.textContent) && (td3.textContent == td9.textContent) && (td3.textContent == "X")) ||
       ((td1.textContent == td5.textContent) && (td1.textContent == td9.textContent) && (td1.textContent == "X")) || ((td3.textContent == td5.textContent) && (td3.textContent == td7.textContent) && (td3.textContent == "X"))
      ){
            alert(`
TEBRİKLER , ${kullanici1Name.value} kazandı !
            
Yeniden başlamak için tamam 'a tıklayın`)
            window.location.reload(false)       
        }
    else if(
        ((td1.textContent == td2.textContent) && (td1.textContent == td3.textContent) && (td1.textContent == "O")) || ((td4.textContent == td5.textContent) && (td4.textContent == td6.textContent) && (td4.textContent == "O")) || ((td7.textContent == td8.textContent) && (td7.textContent == td9.textContent) && (td7.textContent == "O")) ||
        ((td1.textContent == td4.textContent) && (td1.textContent == td7.textContent) && (td1.textContent == "O")) || ((td2.textContent == td5.textContent) && (td2.textContent == td8.textContent) && (td2.textContent == "O")) || ((td3.textContent == td6.textContent) && (td3.textContent == td9.textContent) && (td3.textContent == "O")) ||
        ((td1.textContent == td5.textContent) && (td1.textContent == td9.textContent) && (td1.textContent == "O")) || ((td3.textContent == td5.textContent) && (td3.textContent == td7.textContent) && (td3.textContent == "O"))
        ){
        alert(`
TEBRİKLER , ${kullanici2Name.value} kazandı !

Yeniden başlamak için tamam 'a tıklayın` )
        window.location.reload(false)
         }
    else if(
        (td1.textContent == "X" || td1.textContent == "O") &&
        (td2.textContent == "X" || td2.textContent == "O") &&
        (td3.textContent == "X" || td3.textContent == "O") &&
        (td4.textContent == "X" || td4.textContent == "O") &&
        (td5.textContent == "X" || td5.textContent == "O") &&
        (td6.textContent == "X" || td6.textContent == "O") &&
        (td7.textContent == "X" || td7.textContent == "O") &&
        (td8.textContent == "X" || td8.textContent == "O") &&
        (td9.textContent == "X" || td9.textContent == "O")
    ){
        alert("kazanan yok !!")
        window.location.reload(false)
    }
    submitOK = "true"
}

/* Gece - Gündüz modu butonu ayarı*/

var tablo = document.querySelector('#tablo')
var buton = document.querySelector('#buton')

console.log(buton.textContent)
buton.onclick = function(){

    if(buton.textContent === "Gece Moduna Al"){
        document.body.classList.remove("renk2") 
        document.body.classList.add("renk1") 
        buton.innerHTML = "Gündüz Moduna Al"

        tablo.classList.remove("renk4")
        tablo.classList.add("renk3")
        
        var j;
        for(j = 0 ; j < 9 ; j++){
            kutu[j].classList.remove("renk6")
        }
        for(j = 0 ; j < 9 ; j++){
            kutu[j].classList.add("renk5")
        }
    } 
    else if(buton.textContent === "Gündüz Moduna Al"){
        
        document.body.classList.remove("renk1") 
        document.body.classList.add("renk2") 
        buton.innerHTML = "Gece Moduna Al"

        tablo.classList.remove("renk3")
        tablo.classList.add("renk4")

        var k;
        for(k = 0 ; k < 9 ; k++){
            kutu[k].classList.remove("renk5")
        }
        for(k = 0 ; k < 9 ; k++){
            kutu[k].classList.add("renk6")
        }       
    }    
}
