window.onload = () =>{
  const video = document.getElementById('video');
  const img = document.getElementById('aboutImg');
  video.style.display = "none";

   const boton = document.getElementById('comenzar');
   boton.addEventListener("click", () =>{
     boton.style.display = "none";
     img.style.display = "none";
     video.style.display = "block"
      video.play();
   })


  function startVideo(){
    navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

    navigator.getUserMedia(
      { video:{} },
      stream => video.srcObject = stream,
      err => console.log(err)
    )
  }
  startVideo();

  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/assets/js/weights"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/assets/js/weights"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/assets/js/weights"),
    faceapi.nets.faceExpressionNet.loadFromUri("/assets/js/weights"),
    faceapi.nets.ageGenderNet.loadFromUri("/assets/js/weights")
  ]).then(startVideo);

  video.addEventListener("play",()=>{
    var contenedor = document.getElementById('contenido');
      const canvas = faceapi.createCanvasFromMedia(video);
      contenedor.append(canvas);
      const displaySize = { width: video.width, height: video.height }
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video,
          new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks().withFaceExpressions();

          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100)
  });


}
