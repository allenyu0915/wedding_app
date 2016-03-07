angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.takePhoto', {
    url: '/take_photo',
    views: {
      'tab1': {
        templateUrl: 'templates/takePhoto.html',
        controller: 'takePhotoCtrl'
      }
    }
  })

  .state('tabsController.takePhoto2', {
    url: '/take_photo_2',
    views: {
      'tab1': {
        templateUrl: 'templates/takePhoto2.html',
        controller: 'takePhoto2Ctrl'
      }
    }
  })

  .state('tabsController.takePhoto3', {
    url: '/take_photo_3',
    views: {
      'tab1': {
        templateUrl: 'templates/takePhoto3.html',
        controller: 'takePhoto3Ctrl'
      }
    }
  })

  .state('tabsController.takePhoto4', {
    url: '/take_photo_4',
    views: {
      'tab1': {
        templateUrl: 'templates/takePhoto4.html',
        controller: 'takePhoto4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.storybook', {
    url: '/clue/1',
    views: {
      'tab1': {
        templateUrl: 'templates/storybook.html',
        controller: 'storybookCtrl'
      }
    }
  })

  .state('tabsController.storybook2', {
    url: '/clue/2',
    views: {
      'tab1': {
        templateUrl: 'templates/storybook2.html',
        controller: 'storybook2Ctrl'
      }
    }
  })

  .state('tabsController.storybook3', {
    url: '/clue/3',
    views: {
      'tab1': {
        templateUrl: 'templates/storybook3.html',
        controller: 'storybook3Ctrl'
      }
    }
  })

  .state('tabsController.storybook4', {
    url: '/clue/4',
    views: {
      'tab1': {
        templateUrl: 'templates/storybook4.html',
        controller: 'storybook4Ctrl'
      }
    }
  })

  .state('tabsController.submitPhoto', {
    url: '/submit_photo_1',
    views: {
      'tab1': {
        templateUrl: 'templates/submitPhoto.html',
        controller: 'submitPhotoCtrl'
      }
    }
  })

  .state('tabsController.submitPhoto2', {
    url: '/submit_photo_2',
    views: {
      'tab1': {
        templateUrl: 'templates/submitPhoto2.html',
        controller: 'submitPhoto2Ctrl'
      }
    }
  })

  .state('tabsController.submitPhoto3', {
    url: '/submit_photo_3',
    views: {
      'tab1': {
        templateUrl: 'templates/submitPhoto3.html',
        controller: 'submitPhoto3Ctrl'
      }
    }
  })

  .state('tabsController.submitPhoto4', {
    url: '/submit_photo_4',
    views: {
      'tab1': {
        templateUrl: 'templates/submitPhoto4.html',
        controller: 'submitPhoto4Ctrl'
      }
    }
  })

  .state('tabsController.photoFeed', {
    url: '/photo_feed',
    views: {
      'tab2': {
        templateUrl: 'templates/photoFeed.html',
        controller: 'photoFeedCtrl'
      }
    }
  })

  .state('tabsController.congratulations', {
    url: '/guest_finish',
    views: {
      'tab1': {
        templateUrl: 'templates/congratulations.html',
        controller: 'congratulationsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')

  

});