/* http://docs.angularjs.org/#!angular.service */

/* change which host to use. Just comment and uncomment them out. */
//var host = 'http://dev.pivotalexpert.com/'; //live dev rest
var host = ''; //static test rest

/* temporarily commented out by kenneth for unit test
the service below was suggested by an angular developer
angular.service('RestCall_', function($resource){
  return $resource(host+'rest/:action/:file', {}, {
    query: {method:'GET', isArray:true}
  });
});
*/

angular.service('RestCall_', function ($resource) {
  // No need for "query: {method:'GET', isArray:true}",
  // it's the default.
  return $resource('/rest/:action/:file');

}, { $inject: ['$resource'] });