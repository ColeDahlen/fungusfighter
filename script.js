$(document).ready(onReady);
let attacks = [{
    attackName: 'Arcane Scepter',
    apCost: 12,
    hpDamage: 14
},
{
    attackName: 'Entangle',
    apCost: 23,
    hpDamage: 9
},
{
    attackName: 'Dragon Blad',
    apCost: 38,
    hpDamage: 47
},
{
    attackName: 'Star Fire',
    apCost: 33,
    hpDamage: 25
}
]


// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    $('.attack-btn.arcane-sceptre').on('click', arcaneAttack)
    $('.attack-btn.entangle').on('click', entangleAttack)
    $('.attack-btn.dragon-blade').on('click', dragonBladeAttack)
    $('.attack-btn.star-fire').on('click', starFireAttack)

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function renderAttack(){
   // $('.ap-text').empty();
  //  $('.ap-text').append(`<div class="ap-text"><span id="apSpan">${apMeter}</span>AP</div>`)
}
function arcaneAttack(){
    let hpMeter = $('#hpSpan').text();
    hpMeter -= attacks[0].hpDamage;
    $('#hpSpan').text(hpMeter);
    let apMeter = $('#apSpan').text();
    apMeter -= attacks[0].apCost;
    $('#apSpan').text(apMeter);
    MayNotBeNegative();
}
function entangleAttack(){
    let hpMeter = $('#hpSpan').text();
    hpMeter -= attacks[1].hpDamage;
    $('#hpSpan').text(hpMeter);
    let apMeter = $('#apSpan').text();
    apMeter -= attacks[1].apCost;
    $('#apSpan').text(apMeter);
    MayNotBeNegative();
}
function dragonBladeAttack(){
    let hpMeter = $('#hpSpan').text();
    hpMeter -= attacks[2].hpDamage;
    $('#hpSpan').text(hpMeter);
    let apMeter = $('#apSpan').text();
    apMeter -= attacks[2].apCost;
    $('#apSpan').text(apMeter);
    MayNotBeNegative();
}
function starFireAttack(){
    let hpMeter = $('#hpSpan').text();
    hpMeter -= attacks[3].hpDamage;
    $('#hpSpan').text(hpMeter);
    let apMeter = $('#apSpan').text();
    apMeter -= attacks[3].apCost;
    $('#apSpan').text(apMeter);
    MayNotBeNegative();
}
function MayNotBeNegative(){
    if($('#hpSpan').text() <= 0){
        $('#hpSpan').text('0')
        $('.freaky-fungus.walk').empty();
        $('.freaky-fungus.walk').append('<div class="freaky-fungus dead"></div>')
    }
    if($('#apSpan').text() <= 0){
        $('#apSpan').text('0')
        $('.freaky-fungus.walk').empty();
        $('.freaky-fungus.walk').append('<div class="freaky-fungus jump"></div>')
        disableAttacks();
    }
}
function disableAttacks(){
    $('.attack-btn').attr('disabled' , true);
}