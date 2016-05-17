angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $provide) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('tabsController.carpool', {
    url: '/carpool',
    views: {
      'tab1': {
        templateUrl: 'templates/carpool.html',
        controller: 'carpoolCtrl'
      }
    }
  })

  .state('tabsController.drive', {
    url: '/drive',
    views: {
      'tab1': {
        templateUrl: 'templates/drive.html',
        controller: 'driveCtrl'
      }  
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('pickupRequested', {
    url: '/pickup-requested',
    templateUrl: 'templates/pickupRequested.html',
    controller: 'pickupRequestedCtrl'
  })

  .state('onMyWay', {
    url: '/on-my-way',
    templateUrl: 'templates/onMyWay.html',
    controller: 'onMyWayCtrl'
  })

  .state('onTheWay', {
    url: '/on-the-way',
    templateUrl: 'templates/onTheWay.html',
    controller: 'onTheWayCtrl'
  })

  .state('trip', {
    url: '/trip-drive',
    templateUrl: 'templates/trip.html',
    controller: 'tripCtrl'
  })

  .state('trip2', {
    url: '/trip-ride',
    templateUrl: 'templates/trip2.html',
    controller: 'trip2Ctrl'
  })

  .state('rateYourTrip', {
    url: '/rate',
    templateUrl: 'templates/rateYourTrip.html',
    controller: 'rateYourTripCtrl'
  })

  .state('tabsController.requestingPickup', {
    url: '/request',
    views: {
      'tab1': {
        templateUrl: 'templates/requestingPickup.html',
        controller: 'requestingPickupCtrl'
      }
    }
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  });

$urlRouterProvider.otherwise('/welcome');

$provide.decorator('$exceptionHandler', ['$delegate', function($delegate) {
  return function(exception, cause) {
    $delegate(exception, cause);
    var data = {
        type: 'angular',
        url: window.location.hash,
        localtime: Date.now()
      };
      if(cause)               { data.cause    = cause;              }
      if(exception){
        if(exception.message) { data.message  = exception.message;  }
        if(exception.name)    { data.name     = exception.name;     }
        if(exception.stack)   { data.stack    = exception.stack;    }
      }

      console.error('exception', data);
    };
}]);

});