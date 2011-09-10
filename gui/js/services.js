/* http://docs.angularjs.org/#!angular.service */

angular.service('RestCall', function($resource){
  return $resource('rest/:action/:file', {}, {
    query: {method:'GET', params:{action:'project', file:'project_index'}, isArray:true}
  });
});



