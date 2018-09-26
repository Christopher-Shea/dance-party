$(document).ready(function() {
  window.dancers = [];
 
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    if (dancerMakerFunctionName === 'makeMovingDancer') {
      var stepTime = Math.random() * (2500 - 750) + 750;
    } else if (dancerMakerFunctionName === 'makeCatDancer') {
      var stepTime = Math.random() * 200;
    } else {
      var stepTime = Math.random() * (1000 - 100) + 100;
    }
    
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('.stage').height() * Math.random() + 80,
      $('.stage').width() * Math.random(),
      stepTime
    );
    
    window.dancers.push(dancer);

    $('.stage').append(dancer.$node);
  });


 $('.startAndStop').on('click', function() {
    if (!$(this).hasClass('isStopped')) {
      if ($('.conga').hasClass('isConga')) {
        $('.conga').toggleClass('isConga');
      }
      $(this).toggleClass('isStopped');
      $(this).text('Carry On');
      for (let dancer of window.dancers) {
        if (dancer.isHammer === true) {
          dancer.resetHammer();
        }
        dancer.stop();
      }
    } else {
      $(this).toggleClass('isStopped');
      $(this).text('Hold It Right There');
      if ($('.conga').hasClass('isConga')) {
        for (let dancer of window.dancers.filter(dancer => !(dancer.$node.hasClass('link')))) {
          dancer.stop();
          dancer.step();
        }
      } else {
        for (let dancer of window.dancers) {
          dancer.stop();
          dancer.step();
        }
      }
    }
  });

  $('.hammerTime').on('click', function() {
    if ($('.startAndStop').hasClass('isStopped')) {
      $('.startAndStop').toggleClass('isStopped');
      $('.startAndStop').text('Hold It Right There');
    }
    if ($('.conga').hasClass('isConga')) {
      $('.conga').toggleClass('isConga');
    }
    for (let dancer of window.dancers) {
      if (dancer.isHammer === false) {
        dancer.hammerTime();
      }
    }
  });

  var staggerConga = function(dancer, time) {
    if (dancer.isHammer === true) {
      dancer.resetHammer();
    }
    if (dancer.$node.hasClass('link')) {
      dancer.stop();
    } else {
      dancer.stop();
      dancer.step();
    }
      setTimeout(dancer.conga.bind(dancer), time);
    }

  $('.conga').on('click', function() {
    if ($('.startAndStop').hasClass('isStopped')) {
      $('.startAndStop').toggleClass('isStopped');
      $('.startAndStop').text('Hold It Right There');
    }
    if (!$(this).hasClass('isConga')) {
      $(this).toggleClass('isConga');
      $(this).toggleClass('canBreak');
      $('#bongo').fadeIn(10000);
      for (let i = 0; i < window.dancers.length; i++) {
        staggerConga(window.dancers[i], i * 200);
      }
    }
  });

  $('.breakOut').on('click', function() {
    if ($('.conga').hasClass('isConga') || $('.conga').hasClass('canBreak')) {
      if ($('.conga').hasClass('isConga')) {
        $('.conga').toggleClass('isConga');
      }
      if ($('.conga').hasClass('canBreak')) {
        $('.conga').toggleClass('canBreak');
      }
      $('#bongo').fadeOut(6000);
      if ($('.startAndStop').hasClass('isStopped')) {
        $('.startAndStop').toggleClass('isStopped');
        $('.startAndStop').text('Hold It Right There');
      }
      for (let i = 0; i < window.dancers.length; i++) {
        window.dancers[i].breakOut();
      }
    }
  });

  $('.catMatch').on('click', function() {
    let cats = window.dancers.filter(dancer => dancer.$node.hasClass('kitty'));
    if(!$(this).hasClass('isMatched')) {
      $(this).toggleClass('isMatched');
      $(this).text('Thats Gross');
      while (cats.length > 1) {
        cats[0].$node.animate({top: cats[1].top + 30, left: cats[1].left + 30}, 3000, cats[1].makeKitty.bind(cats[1]));
        cats = cats.slice(2);
      }
      $('.kitty').trigger('mouseenter');
    } else {
      $(this).toggleClass('isMatched');
      $(this).text('Match Those Cats');
      for (let cat of cats) {
        cat.$node.animate(cat.position, 3000);
      }
      $('.kitten').remove();
    }
  });

  $('body').on('mouseenter', '.kitty', function() {
    $('#meow')[0].volume = 0.2
    $('#meow')[0].play();
  });

});

