var petDatabase = [];
var availableFlag;

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


function updateGallery() {
  $('#galleryAdopted div, #galleryAvailable div').empty();
  var htmlToAdd = "";
  var totalHTMLtoAdd = "";
  for (i = 0; i < petDatabase.length; i++) {
    if (!availableFlag && (petDatabase[i].adopted === true)) {
      htmlToAdd += '<div class="col-xs-6 col-sm-4 col-lg-3 gallery">';
      htmlToAdd += '<h3>' + petDatabase[i].name + '</h3>';
      htmlToAdd += '<img class="img-responsive img-thumbnail" src="' + petDatabase[i].profilePic + '" alt="picture of ' + petDatabase[i].name + '">';
      htmlToAdd += '<button data-toggle="modal" data-target="#moreInfo" class="btn moreInfo" id="' + petDatabase[i].id + '">More Info</button>';
      htmlToAdd += '</div>';
      totalHTMLtoAdd += htmlToAdd;
      var htmlToAdd = "";
    } else if (availableFlag && (petDatabase[i].adopted === false)) {
      htmlToAdd += '<div class="col-xs-6 col-sm-4 col-lg-3 gallery">';
      htmlToAdd += '<h3>' + petDatabase[i].name + '</h3>';
      htmlToAdd += '<img class="img-responsive img-thumbnail" src="' + petDatabase[i].profilePic + '" alt="picture of ' + petDatabase[i].name + '">';
      htmlToAdd += '<button data-toggle="modal" data-target="#moreInfo" class="btn moreInfo" id="' + petDatabase[i].id + '">More Info</button>';
      htmlToAdd += '<button class="btn adopt" id="' + petDatabase[i].id + '">Adopt</button>';
      htmlToAdd += '</div>';
      totalHTMLtoAdd += htmlToAdd;
      var htmlToAdd = "";
    }
  }
  if ($('#tabs li.active').text() === "Available Animals") {
    $('#galleryAvailable div').html(totalHTMLtoAdd);
  } else if ($('#tabs li.active').text() === "Already Adopted") {
    $('#galleryAdopted div').html(totalHTMLtoAdd);
  }

}

//// add initial pets to database
var ronnie = new Pet("Ronald", "clown", 59, "He's a cute little clown looking for a new home", "clean bill of health, may need dental cleaning in three weeks", "http://extremelifechanger.com/web_images/rtr1b1zd.jpg");
petDatabase.push(ronnie);
var simba = new Pet("Simba", "cat", 21, "Does not get along well with cats named 'Scar'", "suffers from delusions of grandeur, claims to be 'king'", "https://pbs.twimg.com/profile_images/1630225663/avatar_simba_400x400.png");
petDatabase.push(simba);
var nala = new Pet("Nala", "cat", 21, "recently divorced cat", "pretty depressed right now, needs hugs", "http://vignette1.wikia.nocookie.net/lionking/images/c/c6/Happynala.png/revision/latest?cb=20131119194346");
petDatabase.push(nala);
var cujo = new Pet("Cujo", "dog", 34, "Cujo is a lovable puppy who enjoys children....", "not enough room to list here, inquire at facility", "https://pbs.twimg.com/profile_images/451581570093047808/XiDQmZ26_400x400.jpeg");
petDatabase.push(cujo);






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

  $('body').on("click", '.adopt', function() {
    var ID = this.id;
    petDatabase[ID-1].adopted = true;
    updateGallery();
  });

  $('body').on("click", '.moreInfo', function() {
    var ID = this.id;
    $('#moreInfoContent h3').text(petDatabase[ID-1].name);
    $('.profilePic').html('<img class="img-responsive img-thumbnail" src="' + petDatabase[ID-1].profilePic + '" alt="picture of ' + petDatabase[ID-1].name + '">');
    $('#moreInfoContent h5:EQ(0)').text(petDatabase[ID-1].type);
    $('#moreInfoContent h5:EQ(1)').text(petDatabase[ID-1].age);
    $('#moreInfoContent p:EQ(0)').text(petDatabase[ID-1].description);
    $('#moreInfoContent p:EQ(1)').text(petDatabase[ID-1].medical);
    $('#infoAdopt button').attr('id', petDatabase[ID-1].id);
    if (petDatabase[ID-1].adopted) {
      $('#infoAdopt button').addClass('hidden');
    } else {
      $('#infoAdopt button').removeClass('hidden');
    }
  });

  $('body').on("click", '#tabs li:EQ(0)', function() {
    availableFlag = true;
    updateGallery();
  });

  $('body').on("click", '#tabs li:EQ(1)', function() {
    availableFlag = false;
    updateGallery();
  });

});
