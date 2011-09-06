/* http://docs.angularjs.org/#!angular.service */

angular.service('RestCall', function($resource){
  return $resource('data/:pageName.json', {}, {
    query: {method:'GET', params:{pageName:'project_index'}, isArray:true}
  });
});


/*
angular.service('Project', function($resource){
  return $resource('data/project_index.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});

angular.service('Iteration', function($resource){
  return $resource('data/iteration.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});

angular.service('Message', function($resource){
  return $resource('data/message.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});
*/

