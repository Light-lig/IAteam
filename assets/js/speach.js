$(document).ready(function () {
  $("#clickme").click(function (e) {
    e.preventDefault();
    console.log("funciono");
    var textos= [];
    let texto = $("#Texto").text();
    let text1 = $("#Texto1").text();
    let text2 = $("#Texto2").text();
    let text3 = $("#Texto3").text();
     //textos = texto, text1, text2, text3;
     textos.push(texto);
     textos.push(text1);
     textos.push(text2);
     textos.push(text3);
     console.log(textos);
     for (var i = 0; i < textos.length; i++) {
       var speech = new SpeechSynthesisUtterance();
       speech.text = textos[i];
       speech.volume = 1;
       speech.rate = 1;
       speech.pitch = 1;

       window.speechSynthesis.speak(speech);
     }

  });

  $('#ia').click(function(e){
    e.preventDefault();
    console.log("funciono");
    var ia= [];
    let text8 = $("#titulo").text();
    let text0 = $("#numero1").text();
    let text1 = $("#numero2").text();
    let text2 = $("#numero3").text();
    let text3 = $("#numero4").text();
    let text4 = $("#numero5").text();
    let text5 = $("#numero6").text();
    let text6 = $("#numero7").text();
    let text7 = $("#numero8").text();

     //textos = texto, text1, text2, text3;
     ia.push(text8);
     ia.push(text0);
     ia.push(text1);
     ia.push(text2);
     ia.push(text3);
     ia.push(text4);
     ia.push(text5);
     ia.push(text6);
     ia.push(text7);
     console.log(ia);
     for (var i = 0; i < ia.length; i++) {
       var speech = new SpeechSynthesisUtterance();
       speech.text = ia[i];
       speech.volume = 1;
       speech.rate = 1;
       speech.pitch = 1;

       window.speechSynthesis.speak(speech);
     }
  })

  $('#iaa').click(function(e){
    e.preventDefault();
    console.log("funciono");
    var ia= [];
    let text0 = $("#ia1").text();
    let text1 = $("#ia2").text();
    let text2 = $("#ia3").text();
    let text3 = $("#ia4").text();
    let text4 = $("#ia5").text();
    let text5 = $("#ia6").text();
    let text6 = $("#ia7").text();
    let text7 = $("#ia8").text();
    let text8 = $("#ia9").text();
    let text9 = $("#ia10").text();
    let text10 = $("#ia11").text();
    let text11 = $("#ia12").text();
    let text12 = $("#ia13").text();
    let text13 = $("#ia14").text();
    let text14 = $("#ia15").text();
    let text15 = $("#ia16").text();
    let text16 = $("#ia17").text();

     //textos = texto, text1, text2, text3;
     ia.push(text0);
     ia.push(text1);
     ia.push(text2);
     ia.push(text3);
     ia.push(text4);
     ia.push(text5);
     ia.push(text6);
     ia.push(text7);
     ia.push(text8);
     ia.push(text9);
     ia.push(text10);
     ia.push(text11);
     ia.push(text12);
     ia.push(text13);
     ia.push(text14);
     ia.push(text15);
     ia.push(text16);
     console.log(ia);
     for (var i = 0; i < ia.length; i++) {
       var speech = new SpeechSynthesisUtterance();
       speech.text = ia[i];
       speech.volume = 1;
       speech.rate = 1;
       speech.pitch = 1;

       window.speechSynthesis.speak(speech);
     }
  })
});

function readOutLoud(message) {}
