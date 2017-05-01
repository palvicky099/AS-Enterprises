app.controller('YourDetailsCtrl', ['$scope','$ionicModal', '$ionicLoading', '$cordovaSocialSharing', '$ionicActionSheet', '$timeout','$cordovaSQLite','$state', function ($scope,$ionicModal, $ionicLoading,  $cordovaSocialSharing, $ionicActionSheet, $timeout, $cordovaSQLite, $state) {
  $scope.user = {};
     var cup = window.localStorage.getItem("Cup");
    var jar = window.localStorage.getItem("Jar");
    var bottle = window.localStorage.getItem("Bottle");
     var brands =window.localStorage.getItem("Brand");
    $scope.placeOrder = function (user) {
    if(user.name!=undefined && user.mobile!=undefined && user.email!=undefined && user.address!=undefined &&  user.date!=undefined)
      {
       var hideSheet = $ionicActionSheet.show({
                buttons: [
                  { text: 'SMS' },
                  { text: 'MAIL' }
                ],
                titleText: 'Choose to Place Order',
                cancelText: 'Cancel',
                cancel: function () {
                },
                buttonClicked: function (index) {
                    if (index == 0) {
                        $scope.facebook(user);
                   }
                    if (index == 1) {
                        $scope.share(user);
                    }
                    return true;
                }
            });
             $timeout(function () {
                hideSheet();
            }, 10000);
         }
 else{
     $ionicLoading.show({
            template: 'Please specify all details',
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            noBackdrop: true,
            duration: 1500,
            maxWidth: 200,
            showDelay: 0
        });
 }

        };
 

 $scope.facebook = function (user) {
  $scope.fb ="Client Details:-"+ "  "+user.name +"  "+ user.mobile+"  "+ user.email+"  "+ user.address+"  "+ user.date+"  "+"Order Details"+ brands+"  "+"Cup:-"+cup+"  "+"Jar:-"+ jar+" "+"Bottle:-"+bottle;
        console.log("This is FeedBak",$scope.fb);
        insert(user);
        $cordovaSocialSharing
           .shareViaSMS($scope.fb, '7208175148')
           .then(function (result) {
                 
                $ionicLoading.show({
                   template: '<i class="ion ion-checkmark-circled" style="font-size:40px; color:green"></i><div  style="color:white; font-size: 15px; margin-top: 10px;">Order Place Successfully</div>',
                   content: 'Loading',
                   animation: 'fade-in',
                   showBackdrop: true,
                   noBackdrop: true,
                   duration: 8000,
                   maxWidth: 200,
                   showDelay: 0
               });
                user.name = ' ';
               user.mobile = ' ';
               user.email = ' ';
                user.address = ' ';
                user.date = ' ';
              
             
           }, function (err) {
               
           });
    }
    $scope.share = function (user) {
        $scope.mail = "Client Details:-"+ "  "+user.name +"  "+ user.mobile+"  "+ user.email+"  "+ user.address+"  "+ user.date+"  "+"Order Details"+ brands+"  "+"Cup:-"+cup+"  "+"Jar:-"+ jar+" "+"Bottle:-"+bottle;
          insert(user);
          if (window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function (result) {
                console.log("Response -> " + result);
               
            },
             "A.S Enterprises",                    
             $scope.mail,
            ["anupvishwakarma62@gmail.com"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
              $ionicLoading.show({
            template: '<i class="ion ion-checkmark-circled" style="font-size:40px; color:green"></i><div  style="color:white; font-size: 15px; margin-top: 10px;">Order Place Successfully</div>',
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            noBackdrop: true,
            duration: 1500,
            maxWidth: 200,
            showDelay: 0
        });
              
             user.name = ' ';
               user.mobile = ' ';
               user.email = ' ';
                user.address = ' ';
                user.date = ' ';
    }
  
    function insert(user){
           $scope.currDate = new Date();
   var myorder = "INSERT INTO orderDetails (OrderId,Brands,Cup,Jar,Bottle,Size,Name,Contact,Email,Address,currentDate,delivaryDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
   $cordovaSQLite.execute(db, myorder, [guid() ,brands, cup, jar ,bottle ,"200ml", user.name, user.mobile, user.email, user.address, user.date,$scope.currDate]).then(function (res) {
                      
                           }, function (err) {
              
            });
        }   
  function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
}])