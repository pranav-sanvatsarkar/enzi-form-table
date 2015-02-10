angular.module('enzi-form-table', ['enzi-form', 'enzi-table'])
/*
.factory('$enziFormTable', ['$rootscope', '$compile', function ($rootscope, $compile) {
    var $enziFormTable = {
        loadTable: function (fields, records, columns) {
            $rootscope.fields = fields;
            $rootscope.records = records;
            $rootscope.columns = columns;
        }
    };
    return $enziFormTable;
}])
*/
.controller('enzFrmTblCntrllr', ['$scope', '$enziForm', function ($scope, $enziForm) {
//.controller('enzFrmTblCntrllr', function ($scope) {
    $scope.records = [
        { Id: '123', EmployeeId: '00069', FirstName: 'Pranav', LastName: 'Sanvatsarkar', Email: 'pranav.sanvatsarkar@enzigma.com', MailingCountry: 'India', MailingState: 'Maharashtra', MailingCity: 'Pune', MailingStreet: 'Baner Road', Phone: '85548777111' }
    ];
    $scope.fields = [
        { name: 'Id', label: 'Id', type: 'number', required: 'true' },
        { name: 'EmployeeId', label: 'EmployeeId', type: 'number', required: 'true' },
        { name: 'FirstName', label: 'FirstName', type: 'text', required: 'true' },
        { name: 'Last Name', label: 'LastName', type: 'text', required: 'true' },
        { name: 'Email', label: 'Email', type: 'email', required: 'true' },
        { name: 'MailingCountry', label: 'Mailing Country', type: 'picklist', required: 'true', picklistValues: ['India', 'United States'] },
        { name: 'MailingState', label: 'Mailing State', type: 'picklist', required: 'true', picklistValues: { "India": ['Gujarat', 'Maharashtra'], 'United States': ['California', 'New York'] }, dependsOn: 'MailingCountry'},
        { name: 'MailingCity', label: 'Mailing City', type: 'text', required: 'true' },
        { name: 'MailingStreet', label: 'Mailing Street', type: 'text', required: 'true' },
        { name: 'Phone', label: 'Phone', type: 'phone', required: 'true' }
    ];
    $scope.columns = [
        { name: 'Id', label: 'Id', template: "{{Id}}" },
        { name: 'EmployeeId', label: 'Employee Id', template: "{{EmployeeId}}" },
        { name: 'FirstName', label: 'First Name', template: "{{FirstName}}" },
        { name: 'LastName', label: 'Last Name', template: "{{LastName}}" },
        { name: 'Email', label: 'Email', template: "{{Email}}" },
        { name: 'MailingCountry', label: 'Mailing Country', template: "{{MailingCountry}}" },
        { name: 'MailingState', label: 'Mailing State', template: "{{MailingState}}" },
        { name: 'MailingCity', label: 'Mailing City', template: "{{MailingCity}}" },
        { name: 'MailingStreet', label: 'Mailing Street', template: "{{MailingStreet}}" },
        { name: 'Phone', label: 'Phone', template: "{{Phone}}" }
    ];
    $scope.showContactForm = function () {
        $enziForm.showDialog('Create new Contact', $scope.records[0], $scope.fields);
    }
}])