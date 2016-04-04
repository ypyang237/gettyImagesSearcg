console.log('linked');

var imgBtn = document.getElementById('imgBtn');

imgBtn.addEventListener('click', function() {

  event.preventDefault();

  var userInput = document.getElementById('target').value;

  var imgBtn = new XMLHttpRequest();
  imgBtn.open('GET', "https://api.gettyimages.com/v3/search/images?phrase=" + userInput);
  imgBtn.setRequestHeader('Api-Key', apiKey );
  imgBtn.addEventListener('load', loadImage);
  imgBtn.send();
});

  function loadImage() {
    console.log(this);
    var myObject = JSON.parse(this.responseText);

    var tempContainer = document.createDocumentFragment();
    var container = document.getElementById('container');

    for(var i = 1; i < 25; i++) {
      var article = document.createElement('article');

      var title = document.createElement('div');
      title.setAttribute('id', 'title' + i);
      myTitle = myObject.images[i].title;
      title.innerHTML= myTitle;
      article.appendChild(title);

      var image = document.createElement('img');
      myImage = myObject.images[i].display_sizes[0].uri;
      image.setAttribute('src', myImage);
      article.appendChild(image);





      tempContainer.appendChild(article);
    }

    container.appendChild(tempContainer);

    console.log(myObject.images[0].display_sizes[0].uri);



  }