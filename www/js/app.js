angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.scheduledTweets', {
    url: '/scheduledTweets',
    views: {
      'scheduledTweets':{
        templateUrl: 'templates/tab-scheduledTweets.html',
        controller: 'ScheduledTweetsCtrl'
      }
    }
  })

  .state('tab.addNew', {
    url: '/addNew',
    views: {
      'addNew': {
        templateUrl: 'templates/tab-addNew.html',
        controller: 'AddNewCtrl'
      }
    }
  })

  .state('tab.times', {
    url: '/times',
    views: {
      'times': {
        templateUrl: 'templates/tab-times.html',
        controller: 'ScheduleCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/addNew');

});
