function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



window.onload = function () {
  var span = document.createElement('span');

  span.className = 'fa';
  span.style.display = 'none';
  document.body.insertBefore(span, document.body.firstChild);
  
  // alert(window.getComputedStyle(span, null).getPropertyValue('font-family'));
    
  document.body.removeChild(span);
};



  // var animateHTML = function() {
  //   var elems;
  //   var windowHeight;
  //   function init() {
  //       elems = document.querySelectorAll('.block_anim');
  //       windowHeight = window.innerHeight;
  //       addEventHandlers();
  //       checkPosition();
  //   };
  //   function addEventHandlers() {
  //       window.addEventListener('scroll', checkPosition);
  //       window.addEventListener('resize', init);
  //   };
  //   function checkPosition() {
  //       for (var i = 0; i < elems.length; i++) {
  //       var positionFromTop = elems[i].getBoundingClientRect().top;
  //           if (positionFromTop - windowHeight <= 0) {
  //               elems[i].className = elems[i].className.replace(
  //               'block_anim',
  //               'fadeInLeftBig'
  //               );
  //           }
  //       }
  //   }
  //   return {
  //       init: init
  //   };
  //  };
  //  animateHTML().init();





   //////////////////////////////////
  //  var animateHTML = function() {
  //   var elems;
  //   var windowHeight;
  //   function init() {
  //       elems = document.querySelectorAll('.block_animm');
  //       windowHeight = window.innerHeight;
  //       addEventHandlers();
  //       checkPosition();
  //   };
  //   function addEventHandlers() {
  //       window.addEventListener('scroll', checkPosition);
  //       window.addEventListener('resize', init);
  //   };
  //   function checkPosition() {
  //       for (var i = 0; i < elems.length; i++) {
  //       var positionFromTop = elems[i].getBoundingClientRect().top;
  //           if (positionFromTop - windowHeight <= 0) {
  //               elems[i].className = elems[i].className.replace(
  //               'block_animm',
  //               'fadeInLeftBigg'
  //               );
  //           }
  //       }
  //   }
  //   return {
  //       init: init
  //   };
  //  };
  //  animateHTML().init();


  const tl = new TimelineMax();

tl.fromTo("#type-me", 5, {
  width: "0",
}, {
  width: "870px", /* same as text-description width */
  ease:  SteppedEase.config(24)
}, 0); 





