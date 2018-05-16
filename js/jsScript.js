myVid = document.getElementById("theVid");
spans = document.getElementsByClassName('Sp');

myVid.ontimeupdate = () => {
  for(i = 0; i < spans.length; i++){
    if (myVid.currentTime >= spans[i].dataset.start) {
        spans[i].classList.add('MediaText');
          }
    if (myVid.currentTime >= spans[i].dataset.end) {
        spans[i].classList.remove('MediaText');
      }
    };
}
