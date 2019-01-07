
var database = firebase.database();
function votar (nombre, macanazo) {
    var path = 'macanazos/'+macanazo+'/nominados/'+nombre;
    database.ref(path).once('value').then(function(votos) {
        //ya esta nominado y hay votos, subir 1 mas
        if(votos.val()){  
            console.log(votos.val());
            database.ref(path).set(votos.val()+1);
        }
        //No estaba nominado, hay que nominarlo
        else{
            console.log('no estaba nominado');
            database.ref(path).set(1);
        }
    });
}