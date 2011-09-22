/* http://docs.angularjs.org/#!angular.service */

/* change which host to use. Just comment and uncomment them out. */
//var host = 'http://dev.pivotalexpert.com/'; //live dev rest
var host = ''; //static test rest

angular.service('RestCall_', function($resource){
  return $resource(host+'rest/:action/:file', {}, {
    query: {method:'GET', isArray:true}
  });
});
