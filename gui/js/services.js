/* http://docs.angularjs.org/#!angular.service */

/* change which host to use. Just comment and uncomment them out. */
//var host = 'http://dev.pivotalexpert.com/'; //live dev rest
var host = ''; //static test rest

angular.service('RestCall', function($resource){
  return $resource(host+'rest/:action/:file', {}, {
    query: {method:'GET', params:{action:'project', file:'project_index'}, isArray:true}
  });
});

angular.service('RestCall_GetModel', function($resource){
return $resource(host+'rest/model/:model/:key', {}, {
    query: {method:'GET', isArray:true}
  });
});

