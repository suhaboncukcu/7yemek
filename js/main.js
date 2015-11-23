var yediYemek = angular.module('yediYemek', [ "angularMoment" ]);


yediYemek.controller('timeCtrl', function($interval, $scope){

	$scope.timePassed = new Date();
	$scope.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

	function repeat() {
		$scope.timePassed = new Date();
		$scope.currentTime = moment().format('D/MM/YYYY  h:mm:ss');
	}

	//$interval(repeat, 1000);


});




yediYemek.controller('gelsinCtrl', function($interval, $scope){


	/*gecici*/
	$scope.kimler = ['Alkım', 'Seda', 'Murat', 'Gökçe'];

	$scope.kim = '';


	repeat();
	function repeat() {
	
		var ind = Math.floor((Math.random()*$scope.kimler.length));
		$scope.kim = $scope.kimler[ind];


		$('.autumn.leaf')
		  .transition('tada')
		;
	}

	$interval(repeat, 3000);


});






  $(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;
