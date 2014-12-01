var Pet = {
initialize: function(name){
      this.name = name;
      this.purchases = [];
    }

};





$(document).ready(function(){

$('form#new-pet').submit(function(e){
    var newPet = Object.create(Pet);
    newPet.initialize($("input#newpet").val());
    
    $('span#name-pet').empty().append('<h2>' + "Гэта " + newPet.name + '</h2>');
    $('#food').append('10');
    $('#sleep').append('10');
    $('#play').append('10');
    $('#mood').append('10');

    $('form#new-pet').hide();
    $('#show-pet').show();
    

    

    $('#btn-new-pet').click(function (){
      $('form#new-pet').show();
      $('#show-pet').hide();

    });

    e.preventDefault();
});



});