var petDatabase = [];

function Pet(name, type, age, description, medical, profilePic) {
  this.name = name;
  this.id = petDatabase.length + 1;
  this.adopted = false;
  this.type = type;
  this.age = age;
  this.description = description;
  this.medical = medical;
  this.profilePic = profilePic;
}

function updateGallery(available) {
  console.log('fill this function out later');
}

$(document).ready(function() {

  $('#addPet').submit(function(event) {
    event.preventDefault();
    var newPet = new Pet(
      $('#name').val(),
      $('#type').val(),
      $('#age').val(),
      $('#description').val(),
      $('#medical').val(),
      $('#profilePic').val()
    );
    petDatabase.push(newPet);
  });

  $('.hello').click(function() {
    var ID = this.id;
    petDatabase[ID-1].adopted = true;
    updateGallery(true);
  });

});
