var db = null;
var app = angular.module('starter', ['ionic', 'starter.controllers', 'pickadate' , 'ngCordova'])
.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
     db = window.openDatabase("my.db", "1.0", "AS.Enterprises", 500000);
     // db = $cordovaSQLite.openDB('my.db');
        //--------------Order details table---------------------
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS orderDetails (id integer primary key, OrderId text, Brands text, Cup text, Jar text, Bottle text, Size text, Name text, Contact text, Email text, Address text, currentDate text, delivaryDate text)");
      //  $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS orderDetails (id integer primary key, OrderId text, Brands text, Cup text, Jar text, Bottle text)");
      
       });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.contactus', {
      url: '/contactus',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactus.html',
          controller: 'ContactUsCtrl'
        }
      }
    })
    .state('app.aboutus', {
      url: '/aboutus',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutus.html',
          controller: 'AboutUsCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.brands', {
    url: '/home/brands',
    views: {
      'menuContent': {
        templateUrl: 'templates/brands.html',
        controller: 'BrandsCtrl'
      }
    }
  })
  .state('app.bisleri', {
    url: '/home/brands/bisleri',
    views: {
      'menuContent': {
        templateUrl: 'templates/ordBisleri.html',
        controller: 'BisleriCtrl'
      }
    }
  })
.state('app.ordO2', {
    url: '/home/brands/ordO2',
    views: {
      'menuContent': {
        templateUrl: 'templates/ordO2.html',
        controller: 'O2Ctrl'
      }
    }
  })
.state('app.aquafina', {
    url: '/home/brands/aquafina',
    views: {
      'menuContent': {
        templateUrl: 'templates/ordAquafina.html',
        controller: 'AquafinaCtrl'
      }
    }
  })
.state('app.kinley', {
    url: '/home/brands/kinley',
    views: {
      'menuContent': {
        templateUrl: 'templates/ordKinley.html',
        controller: 'KinleyCtrl'
      }
    }
  })
.state('app.bristeli', {
    url: '/home/brands/bristeli',
    views: {
      'menuContent': {
        templateUrl: 'templates/ordBristeli.html',
        controller: 'BristeliCtrl'
      }
    }
  })
.state('app.bill', {
    url: '/bill',
    views: {
      'menuContent': {
        templateUrl: 'templates/bill.html',
        controller: 'BillCtrl'
      }
    }
  })
.state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html',
        controller: 'HelpCtrl'
      }
    }
  })
.state('app.myorder', {
    url: '/myorder',
    views: {
      'menuContent': {
        templateUrl: 'templates/myorders.html',
        controller: 'MyOrderCtrl'
      }
    }
  })

.state('app.yourdetails', {
    url: '/bill/yourdetails',
    views: {
      'menuContent': {
        templateUrl: 'templates/yourdetails.html',
        controller: 'YourDetailsCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
