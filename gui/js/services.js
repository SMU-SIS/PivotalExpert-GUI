/* http://docs.angularjs.org/#!angular.service */

angular.service('Project', function($resource){
  return $resource('../data/project.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});



