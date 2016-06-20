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
  if ($('#tabs li.active').text() === "Already Adopted") {

  } else if ($('#tabs li.active').text() === "Available Animals") {

  }
}





$(document).ready(function() {
  $('#addPetForm').submit(function(event) {
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

  $('.adopt').click(function() {
    var ID = this.id;
    petDatabase[ID-1].adopted = true;
    updateGallery(true);
  });

  $('.moreInfo').click(function() {
    var ID = this.id;
    $('#moreInfo h3').text(petDatabase[ID-1].name);
    $('#moreInfo div').html('<img src="' + petDatabase[ID-1].profilePic + '" alt="picture of ' + petDatabase[ID-1].name + '"');
    $('#moreInfo h5:EQ(0)').text(petDatabase[ID-1].type);
    $('#moreInfo h5:EQ(1)').text(petDatabase[ID-1].age);
    $('#moreInfo p:EQ(0)').text(petDatabase[ID-1].description);
    $('#moreInfo p:EQ(1)').text(petDatabase[ID-1].medical);
    updateGallery(true);
  });

});
