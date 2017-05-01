var app=angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $ionicModal.fromTemplateUrl('templates/help.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.selectHelp = modal;
    });

    $scope.closeHelp = function () {
        $scope.selectHelp.hide();
    };
    $scope.help = function () {
        $scope.selectHelp.show();
    };
})

.controller('HomeCtrl', function ($scope, backcallFactory,  $ionicSideMenuDelegate) {
  
    backcallFactory.backcallfun();
      $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('BrandsCtrl', function($scope, $stateParams) {

    $scope.order = {};

})

.controller('BisleriCtrl', function ($scope, $ionicPopup, $state, $ionicLoading) {

    $scope.order = {};
    $scope.quantity = function (order) {
       if(order.cup!=undefined || order.jar!=undefined || order.bottle!=undefined)
           
        {  
            window.localStorage.setItem("Cup", order.cup);
        window.localStorage.setItem("Jar", order.jar);
        window.localStorage.setItem("Bottle", order.bottle);
        window.localStorage.setItem("Brand", "Bisleri");
         window.localStorage.setItem("Size" , order.bsize);
        console.log("orders", order)
        $state.go('app.bill');

              
        }
        else
        {
            console.log("orders", order.cup);
                 $ionicLoading.show({
                   template: 'Please select at least on Item',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 2000,
                   maxWidth: 200,
                   showDelay: 0
               });
        }
   }
})

.controller('O2Ctrl', function ($scope, $state, $rootScope,  $ionicLoading) {
      $scope.order = {};
    $scope.quantity = function (order) {
       if(order.cup!=undefined || order.jar!=undefined || order.bottle!=undefined)
           
        {  
        window.localStorage.setItem("Cup", order.cup);
        window.localStorage.setItem("Jar", order.jar);
        window.localStorage.setItem("Bottle", order.bottle);
        window.localStorage.setItem("Brand", "O2Rise");
        window.localStorage.setItem("Size" , order.bsize);
        console.log("orders", order)
        $state.go('app.bill');
        }
        else
        {
            console.log("orders", order.cup);
                 $ionicLoading.show({
                   template: 'Please select at least on Item',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 2000,
                   maxWidth: 200,
                   showDelay: 0
               });
        }
   }
})

.controller('AquafinaCtrl', function($scope, $state,  $ionicLoading) {
  $scope.order = {};
    $scope.quantity = function (order) {
       if(order.cup!=undefined || order.jar!=undefined || order.bottle!=undefined)
           
        {  
       window.localStorage.setItem("Cup", order.cup);
        window.localStorage.setItem("Jar", order.jar);
        window.localStorage.setItem("Bottle", order.bottle);
        window.localStorage.setItem("Brand", "Aquafina");
         window.localStorage.setItem("Size" , order.bsize);
        console.log("orders", order)
        $state.go('app.bill');

              
        }
        else
        {
            console.log("orders", order.cup);
                 $ionicLoading.show({
                   template: 'Please select at least on Item',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 2000,
                   maxWidth: 200,
                   showDelay: 0
               });
        }
   }})

.controller('KinleyCtrl', function($scope, $stateParams,  $state,  $ionicLoading) {
     $scope.order = {};
    $scope.quantity = function (order) {
       if(order.cup!=undefined || order.jar!=undefined || order.bottle!=undefined)
           
        {  
            window.localStorage.setItem("Cup", order.cup);
        window.localStorage.setItem("Jar", order.jar);
        window.localStorage.setItem("Bottle", order.bottle);
        window.localStorage.setItem("Brand", "Kinley");
         window.localStorage.setItem("Size" , order.bsize);
        console.log("orders", order)
        $state.go('app.bill');

              
        }
        else
        {
            console.log("orders", order.cup);
                 $ionicLoading.show({
                   template: 'Please select at least on Item',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 2000,
                   maxWidth: 200,
                   showDelay: 0
               });
        }
   }

})

.controller('BristeliCtrl', function($scope, $state,  $ionicLoading) {
   $scope.order = {};
    $scope.quantity = function (order) {
       if(order.cup!=undefined || order.jar!=undefined || order.bottle!=undefined)
        {  
         window.localStorage.setItem("Cup", order.cup);
        window.localStorage.setItem("Jar", order.jar);
        window.localStorage.setItem("Bottle", order.bottle);
        window.localStorage.setItem("Brand", "Bristeli");
         window.localStorage.setItem("Size" , order.bsize);
        console.log("orders", order)
        $state.go('app.bill');
        }
        else
        {
                 $ionicLoading.show({
                   template: 'Please select at least on Item',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 2000,
                   maxWidth: 200,
                   showDelay: 0
               });
        }
   }
})

.controller('BillCtrl', function($scope, $stateParams,$rootScope) {
if(window.localStorage.getItem("Cup")!="undefined")
 {
 var cup = window.localStorage.getItem("Cup");
         $scope.cups=cup;
}
else{
  $scope.cups=0;
}
  if(window.localStorage.getItem("Jar")!="undefined")
    {
 var jar = window.localStorage.getItem("Jar");
 $scope.jars=jar;
}
else{
    $scope.jars=0;
}
if(window.localStorage.getItem("Bottle")!="undefined")
    {
 var bottle = window.localStorage.getItem("Bottle");
 $scope.bottles=bottle;
}
else{
   $scope.bottles=0;
}
if(window.localStorage.getItem("Bottle")=="undefined" || window.localStorage.getItem("Bottle")!="1 Liter")
    {
      if (window.localStorage.getItem("Bottle")!="undefined") {
         var bsize = window.localStorage.getItem("Size");
          $scope.Bsize=bsize;
      }
      else{
         $scope.Bsize='';
      }
}
  else if(window.localStorage.getItem("Bottle")!="500 ml"){
   var bsize = window.localStorage.getItem("Size");
          $scope.Bsize=bsize;
}
  else{
   var bsize = window.localStorage.getItem("Size");
          $scope.Bsize=bsize;
}

})
.controller('ContactUsCtrl', function($scope, $stateParams) {

})
.controller('HelpCtrl', function($scope, $stateParams) {

})
.controller('AboutUsCtrl', function($scope, $stateParams) {
})
.factory('backcallFactory', ['$state', '$ionicPlatform', '$ionicHistory', '$timeout', function ($state, $ionicPlatform, $ionicHistory, $timeout) {
    var obj = {}
    obj.backcallfun = function () {
        $ionicPlatform.registerBackButtonAction(function () {
            if ($state.current.name == "app.home") {
                var action = confirm("Do you want to Exit?");
                if (action) {
                    navigator.app.exitApp();
                }

            }

             else {
                $ionicHistory.nextViewOptions({
                    disableBack: false
                });
               
               
                $ionicHistory.goBack();
                
            }
        }, 100);
    }
        return obj;
}]);
