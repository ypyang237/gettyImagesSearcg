console.log('linked');
var weatherRequest = false;

var imgBtn = document.getElementById('imgBtn');

imgBtn.addEventListener('click', function(event) {

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

//==========================================================

 var weatherBtn = document.getElementById('weatherBtn');

 weatherBtn.addEventListener('click', function(){

  console.log('weatherBtn is clicked');

  var cityName = document.getElementById('city').value;

  var getWeather = new XMLHttpRequest();
  getWeather.open('GET', "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&mode=JSON&APPID=083b7efd3f8a68a79dddd14da50be4a4");
  getWeather.addEventListener('load', loadData);
  // getWeather.open('GET', "https://api.gettyimages.com/v3/search/images?phrase=" + todaysWeather);
  // getWeather.setRequestHeader('Api-Key', apiKey );
  // getWeather.addEventListener('load', loadImage);
  getWeather.send();
 });

 function loadData() {
    var cityData = JSON.parse(this.responseText).list;
    var todaysWeather = cityData[0].weather[0].description;
    console.log(todaysWeather);
    weatherRequest = true;
    return todaysWeather;

    }



