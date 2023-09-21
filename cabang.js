// 1. Syntax Percabangan If

var totalBelanja = 20000;

if(totalBelanja > 10000)
    document.getElementById("if").innerHTML = "Selamat Kamu dapat piring";

// 2. Syntax Percabangan If Else

var umurPengunjung = 17;
if(umurPengunjung >= 17){
    document.getElementById("ifelse").innerHTML = "Kamu Boleh Masuk Wahana Ini"
}else{
    document.getElementById("ifelse").innerHTML = "Maaf Kamu Tidak Bisa Masuk Wahana Ini"
}

// 3. Syntax Percabangan If Else If

var tiket = 8;
if(tiket >= 6){
    document.getElementById("ifelseif").innerHTML = "Dapat Popcorn";
}else if(tiket >= 4){
    document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan";

}else if (tiket >= 2){
    document.getElementById("ifelseif").innerHTML = "Dapat Permen";
}else{
    document.getElementById("ifelseif").innerHTML = "Tidak Dapat Snack";
}

// 4. Syntax Percabangan Switch Case

// Cara Pertama
var umurPengunjung = prompt ("Masukkan Umur Anda")
var wahana;

switch(true){
    case umurPengunjung >= 18:
        wahana = "Boleh Masuk Wahana Kora-Kora"
        document.getElementById("switchcase").innerHTML = wahana;
        break;

        case umurPengunjung >= 16:
            wahana = "Boleh Masuk Wahana Flying Fox"
            document.getElementById("switchcase").innerHTML = wahana;
            break;

            case umurPengunjung >= 14:
        wahana = "Boleh Masuk Wahana Halilintar"
        document.getElementById("switchcase").innerHTML = wahana;
        break;

        default:
            wahana = "Terimakasih Sudah Berkunjung"
            document.getElementById("switchcase").innerHTML = wahana;

}

// Cara Kedua
// var nilai = prompt("Masukkan Nilai Anda")
// var grade;

// switch(true){
//     case nilai > 90 :
//         grade = "A+";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;

//         case nilai > 80 :
//             grade = "A";
//             document.getElementById("switchcase").innerHTML = grade;
//             break;

//             case nilai > 70 :
//             grade = "B";
//             document.getElementById("switchcase").innerHTML = grade;
//             break;
            
//             default:
//                 grade = "F"
//                 document.getElementById("switchcase").innerHTML = grade;


// }

// 5. Percabangan ternary
// var tanya = prompt("Apakah Serang Ibukota Banten")
// var jawaban = (tanya == "Iya") ? "Benar": "Salah";
// document.getElementById("ternary").innerHTML = jawaban;

// 6. Percabangan Nested
var user = {
    nama: "Anisa",
    email: "anisa@gmail.com",
    password: "12345",
    role: "admin"
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email);
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                // alert("Selamat Datang  " + user.nama);
                
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin!");
    }
}

