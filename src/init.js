$(document).ready(function() {
  window.dancers = [];
 
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var stepTime = (dancerMakerFunctionName === 'makeMovingDancer') ? Math.random() * (1500 - 500) + 500 :  Math.random() * (1000 - 100) + 100;
    
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
      if ($('.congaButton').hasClass('isConga')) {
        $('.congaButton').toggleClass('isConga');
      }
      $(this).toggleClass('isStopped');
      $(this).text('Dance!');
      for (let dancer of window.dancers) {
        if (dancer.isHammer === true) {
          dancer.resetHammer();
        }
        dancer.stop();
      }
    } else {
      $(this).toggleClass('isStopped');
      $(this).text('Stop!');
      if ($('.congaButton').hasClass('isConga')) {
        for (let dancer of window.dancers.filter(dancer => !(dancer.$node.hasClass('link')))) {
          dancer.step();
        }
      } else {
        for (let dancer of window.dancers) {
          dancer.step();
        }
      }
    }
  });

  $('.hammerTime').on('click', function() {
    if ($('.startAndStop').hasClass('isStopped')) {
      $('.startAndStop').toggleClass('isStopped');
      $('.startAndStop').text('Stop!');
    }
    if ($('.congaButton').hasClass('isConga')) {
      $('.congaButton').toggleClass('isConga');
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

  $('.congaButton').on('click', function() {
    if ($('.startAndStop').hasClass('isStopped')) {
      $('.startAndStop').toggleClass('isStopped');
      $('.startAndStop').text('Stop!');
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

  $('.breakOutButton').on('click', function() {
    if ($('.congaButton').hasClass('isConga') || $('.congaButton').hasClass('canBreak')) {
      if ($('.congaButton').hasClass('isConga')) {
        $('.congaButton').toggleClass('isConga');
      }
      if ($('.congaButton').hasClass('canBreak')) {
        $('.congaButton').toggleClass('canBreak');
      }
      $('#bongo').fadeOut(6000);
      if ($('.startAndStop').hasClass('isStopped')) {
        $('.startAndStop').toggleClass('isStopped');
        $('.startAndStop').text('stop!');
      }
      for (let i = 0; i < window.dancers.length; i++) {
        window.dancers[i].breakOut();
      }
    }
  });

  $('body').on('mouseenter', '.kitty', function() {
    $('#meow')[0].volume = 0.2
    $('#meow')[0].play();
  });

});

