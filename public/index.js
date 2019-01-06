var config = {
  apiKey: "AIzaSyAzy2VI0e2LnOes8kUS-myPVKmXs-Wg3A8",
  authDomain: "macanazos-c3a7b.firebaseapp.com",
  databaseURL: "https://macanazos-c3a7b.firebaseio.com",
  projectId: "macanazos-c3a7b",
  storageBucket: "macanazos-c3a7b.appspot.com",
  messagingSenderId: "231571041469"
};
firebase.initializeApp(config);


console.log("smn");

var storage = firebase.storage();

// Get a reference to the database service
var database = firebase.database();

var nombres = [
  "Mau De León",
  "Fer De Silva",
  "Arturo Balli",
  "Gonzalo Garza",
  "Mara Castro",
  "Ana Iris",
  "Eugenia Valdes",
  "Liten Paulina",
  "Shady Mohammed",
  "Alexis Ilizaliturri",
  "Leonardo Nerio",
  "Paul Morales",
  "Rafa Gonzalez",
  "Sofi Leyva",
  "Eduardo 'Wayo' Salas",
  "Sofi Peña",
  "Dante González"];

var fotos = [
  "gs://macanazos-c3a7b.appspot.com/personas/mau.png",
  "gs://macanazos-c3a7b.appspot.com/personas/fer.png",
  "gs://macanazos-c3a7b.appspot.com/personas/balli.png",
  "gs://macanazos-c3a7b.appspot.com/personas/gonzi.png",
  "gs://macanazos-c3a7b.appspot.com/personas/mara.png",
  "gs://macanazos-c3a7b.appspot.com/personas/iris.png",
  "gs://macanazos-c3a7b.appspot.com/personas/euge.png",
  "gs://macanazos-c3a7b.appspot.com/personas/liten.png",
  "gs://macanazos-c3a7b.appspot.com/personas/shady.png",
  "gs://macanazos-c3a7b.appspot.com/personas/alexis.png",
  "gs://macanazos-c3a7b.appspot.com/personas/leo.png",
  "gs://macanazos-c3a7b.appspot.com/personas/paul.png",
  "gs://macanazos-c3a7b.appspot.com/personas/rafa.png",
  "gs://macanazos-c3a7b.appspot.com/personas/sofil.png",
  "gs://macanazos-c3a7b.appspot.com/personas/wayo.png",
  "gs://macanazos-c3a7b.appspot.com/personas/sofip.png",
  "gs://macanazos-c3a7b.appspot.com/personas/dante.png",
];

for(var i = 0; i < nombres.length; i++){
  // A post entry.
  var postData = {
    username: nombres[i],
    profile_picture: fotos[i]
  };

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['users/' + nombres[i]] = postData;

  firebase.database().ref().update(updates);
}

function disableButtons(){
  var endDate = new Date(2018,0,11,1,30);
  var endMinutes = endDate.getMinutes();
  var startDate = new Date();
  var startMinutes = startDate.getMinutes();
  console.log(endDate.getMinutes() - startDate.getMinutes());
  if(endDate.getMinutes() - startDate.getMinutes() <= 0){
    $('.boton').addClass('disabled');
    console.log("están bloqueados ajua");
  } else {
    console.log("no se bloquean paps");
  }
}

/*firebase.database().ref('macanazos/' + macanazo[i]).once('value').then(function(snapshot) {
  //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  console.log(users);
});*/
