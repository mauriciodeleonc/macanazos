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
  "mau",
  "fer",
  "balli",
  "gonzi",
  "mara",
  "iris",
  "euge",
  "liten",
  "shady",
  "alexis",
  "leo",
  "paul",
  "rafa",
  "sofil",
  "wayo",
  "sofip",
  "meribah",
  "angie",
  "diana",
  "anak",
  "marce",
  "alec"];

var fotos = [
  "img/personas/mau.png",
  "img/personas/fer.png",
  "img/personas/balli.png",
  "img/personas/gonzi.png",
  "img/personas/mara.png",
  "img/personas/iris.png",
  "img/personas/euge.png",
  "img/personas/liten.png",
  "img/personas/shady.png",
  "img/personas/alexis.png",
  "img/personas/leo.png",
  "img/personas/paul.png",
  "img/personas/rafa.png",
  "img/personas/sofil.png",
  "img/personas/wayo.png",
  "img/personas/sofip.png",
  "img/personas/meribah.png",
  "img/personas/angie.png",
  "img/personas/diana.png",
  "img/personas/anak.png",
  "img/personas/marce.png",
  "img/personas/alec.png"
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
