const webcamElement = document.getElementById('webcam');
const webcam = new Webcam(webcamElement, 'user');


webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});

// senha = prompt ("coloque a senha: (senha: ****)")

// if (senha != "****" ){
//   alert("tenta de novo");
//   }
// if(senha == "****"){
//   alert("acesso liberado!");

// }
