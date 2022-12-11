let offset = 0,
    indicators = 0,
    numbers = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line');
const indicatorsLine = document.querySelector('.indicator');
const sliderNumbers = document.querySelector('.slider__numberpeople');

document.querySelector('.button-next').addEventListener('click', function(){
  if (window.screen.width > 1300) {
    offset = offset + 1170;
    indicators += 35;
    numbers += 120;
    if (offset > 2340) {
      offset = 0;
    }
    if (indicators > 100) {
      indicators = 0;
    }
    if (numbers > 240) {
      numbers = 0;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';
  }

  if (window.screen.width <= 1300 && window.screen.width > 660) {
    offset = offset + 565;
    indicators += 35;
    numbers += 120;
    if (offset > 1130) {
      offset = 0;
    }
    if (indicators > 100) {
      indicators = 0;
    }
    if (numbers > 240) {
      numbers = 0;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';
  }

  if (window.screen.width <= 660 && window.screen.width > 425) {
    offset = offset + 392;
    indicators += 35;
    numbers += 120;
    if (offset > 784) {
      offset = 0;
    }
    if (indicators > 100) {
      indicators = 0;
    }
    if (numbers > 240) {
      numbers = 0;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';
  }


  if (window.screen.width <= 425) {
    offset = offset + 260;
    indicators += 18;
    numbers += 120;
    if (offset > 520) {
      offset = 0;
    }
    if (indicators > 36) {
      indicators = 0;
    }
    if (numbers > 240) {
      numbers = 0;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';
  }

});


document.querySelector('.button-prev').addEventListener('click', function(){
  if (window.screen.width > 1300) {
    offset = offset - 1170;
    indicators -= 35;
    numbers -= 120;
    if (offset < 0) {
      offset = 2340;
    }
    if (indicators < 0) {
      indicators = 70;
    }
    if (numbers < 0) {
      numbers = 240;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';  
  }

  if (window.screen.width <= 1300 && window.screen.width > 660) {
    offset = offset - 565;
    indicators -= 35;
    numbers -= 120;
    if (offset < 0) {
      offset = 1130;
    }
    if (indicators < 0) {
      indicators = 70;
    }
    if (numbers < 0) {
      numbers = 240;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';  
  }

  if (window.screen.width <= 660 && window.screen.width > 425) {
    offset = offset - 392;
    indicators -= 35;
    numbers -= 120;
    if (offset < 0) {
      offset = 784;
    }
    if (indicators < 0) {
      indicators = 70;
    }
    if (numbers < 0) {
      numbers = 240;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';  
  }


  if (window.screen.width <= 425) {
    offset = offset - 260;
    indicators -= 18;
    numbers -= 120;
    if (offset < 0) {
      offset = 520;
    }
    if (indicators < 0) {
      indicators = 36;
    }
    if (numbers < 0) {
      numbers = 240;
    }
    sliderLine.style.left = -offset + 'px';
    indicatorsLine.style.left = indicators + 'px';
    sliderNumbers.style.left = -numbers + 'px';  
  }

});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
