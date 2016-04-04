console.log('linked');

var imgBtn = document.getElementById('imgBtn');

imgBtn.addEventListener('click', function() {

  event.preventDefault();

  var userInput = document.getElementById('target').value;

  var imgBtn = new XMLhttpRequest();
  imgBtn.addEventListener('load', loadImage);
  imgBtn.open('GET', "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=puppy");
  imgBtn.setRequestHeader('Api-Key:', );
  imgBtn.send();
});

  function loadImage() {

    var myObject = JSON.parse(this.responseText);

    var container = document.getElementById('container');

    container.innerHTML = myObject;

    console.log('LOADED');


  }