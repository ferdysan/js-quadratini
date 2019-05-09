// Parte 1
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


// var rosso=0;
//
// var verde=0;

//
// for(var i =0; i<63; i++){
//   // var random = Math.floor(Math.random() * 10) + 1;
  // if(rosso < 15){
    $('.square-red').click(function(){
       $(this).addClass('square_red');
    });
//     rosso ++;
//   }
// }


  $('.square').click(function(){
     $(this).addClass('square_green');
  });


//DECIDO A PRESCINDERE I QUADRATI VERDI E I ROSSI NON SONO RIUSCITO AD IMPOSTARLI IN RANDOM
