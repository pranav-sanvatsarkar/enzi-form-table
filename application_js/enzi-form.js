angular.module('enzi-form', [])
.factory('$enziForm', ['$rootScope', '$compile', function ($rootScope, $compile) {
    var $enziForm = {
        showDialog: function (title, record, fields) {
            $rootScope.title = title;
            $rootScope.record = record;
            $rootScope.fields = fields;

            var contactScreen = angular.element('<div enziform="" title="title" record="record" fields="fields"></div>');
            contactScreen = $compile(contactScreen)($rootScope);
            $('body').append(contactScreen);

            var contactScreen = angular.element('<div class="modal-footer"><button class="btn btn-primary" type="submit">Save</button></div></form></div></div></div>');
            contactScreen = $compile(contactScreen)($rootScope);
            $('body').append(contactScreen);
        }
    };
    return $enziForm;
}])

.directive('enziform', function () {
    return {
        title: '=',
        record: '=',
        fields: '=',
        //templateUrl: 'https://localhost/enzi-form-table/application_js/templates/enzi-form.html',
        template: '<div class="modal fade in" tabindex="-1" role="dialog" style="display:block;">\
                        <div class="modal-backdrop fade in backdrop"></div>\
                            <div class="modal-dialog">\
                                <div class="modal-content">\
                                    <form name="formDeposit" role="form">\
                                        <div class="modal-header">\
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="closeDialog()"><span aria-hidden="true">&times;</span></button>\
                                            <h4 class="modal-title" id="myModalLabel">{{title}}</h4>\
                                        </div>',
        controller: function ($scope, $element, $compile) {

            $scope.closeDialog = function(){
                $element.remove();
            }
        }
    }
})