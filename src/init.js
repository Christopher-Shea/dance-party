$(document).ready(function() {
  window.dancers = [];
 
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var stepTime = (dancerMakerFunctionName === 'makeRandomDancer') ? Math.random() * (2000 - 500) + 500 :  Math.random() * 1000;
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      stepTime
    );
    
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(this.timeBetweenSteps);
    }
  });

  $('.breakOutButton').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].breakOut();
    }
  });

  $('.stop').on('click', function() {
    for (let dancer of window.dancers) {
      dancer.stop();
    }
  });

  $('.hammerTime').on('click', function() {
    for (let dancer of window.dancers) {
      dancer.hammerTime();
    }
  });

  $('body').on('mouseenter', '.kitty', function() {
    $('#meow')[0].volume =0.2
    $('#meow')[0].play();
  });

});

