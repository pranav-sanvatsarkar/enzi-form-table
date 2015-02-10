angular.module('enzi-table', [])
.directive('enztabledir', function () {
    return {
        records: '=',
        fields: '=',
        columns: '=',
        templateUrl: 'https://localhost/enzi-form-table/application_js/templates/enzi-table.html'
    };
});