function admincontroller($scope, $rootScope, NgTableParams, ApiService, toastr) {
    $rootScope.section  = "admin"
    allWaxDealsToScope();

    $scope.removeWaxDeal = function(id) {
        ApiService.removeWaxDeal(id)
            .then(msg => {
                toastr.info('Wax deal removed!', msg);
                allWaxDealsToScope()
            })
    }

    // $scope.updateWaxDeal = function(id) {
    //     apiTasksService.updateTask(id)
    //     $location.path('/panelprofile', $scope.waxDeal)
    // }

    function allWaxDealsToScope() {

        ApiService.getAllWaxDeal()
            .then(waxdeals => {
            $scope.waxdeals = waxdeals 
            console.log(waxdeals); 
            $scope.tableParams = new NgTableParams(
            { sorting: { _id: "desc" } }, // initial sort order
            { dataset: waxdeals }
                );
            })
}
}
module.exports = admincontroller
