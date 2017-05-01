
app.controller('MyOrderCtrl', function($scope, $stateParams, $cordovaSQLite, $timeout, $ionicActionSheet, $ionicLoading) {
    display();
       function display(){  
        var data = "SELECT * from orderDetails";
        $cordovaSQLite.execute(db, data, []).then(function (result) {
                if (result.rows.length > 0) {
                var itemsColl = [];
                for (var i = 0; i < result.rows.length; i++) {
                    itemsColl[i] = result.rows.item(i);
                    };

                $scope.items = JSON.stringify(itemsColl);
                var jsonData = JSON.parse($scope.items);
                $scope.orders = jsonData;
               } else {
                $scope.show=true;
             }

              }, function (err) {
               });
      }
        $scope.o={};
        $scope.delorders=function(o){
    var delOrder = "Delete from orderDetails Where OrderId = '" + o.OrderId + "'";

           $cordovaSQLite.execute(db, delOrder, []).then(function (res) {
                            display();
                            $ionicLoading.show({
                    template: '<i class="ion ion-ios-bell" style="font-size:40px; color:#ff9900"></i><div  style="color:white;  font-size: 15px;margin-top: 10px;">Order Delete successfully</div>',
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    noBackdrop: true,
                    duration: 1500,
                    maxWidth: 200,
                    showDelay: 0
                });                  

        }, function (err) {
  alert("delte error");
      });
}


 $scope.onHold = function (o) {
       var hideSheet = $ionicActionSheet.show({
                buttons: [
                  { text: 'Delete' }
                  
                ],
                titleText: 'Click to Delete',
                cancelText: 'Cancel',
                cancel: function () {
                },
                buttonClicked: function (index) {
                    if (index == 0) {
                        $scope.delorders(o);
                   }
                    return true;
                }
            });
             $timeout(function () {
                hideSheet();
            }, 10000);
        };
})
