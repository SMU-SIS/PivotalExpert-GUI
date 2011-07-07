/* http://docs.angularjs.org/#!angular.service */

angular.service('Phone', function($resource){
  return $resource('../../jsonapi/phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});
