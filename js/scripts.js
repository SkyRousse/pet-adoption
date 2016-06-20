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
