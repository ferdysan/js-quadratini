// Parte 1
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


$('.square').each(function(){
   $(this).addClass('square_red');
});
