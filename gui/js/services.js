/* http://docs.angularjs.org/#!angular.service */

angular.service('Project', function($resource){
  return $resource('../data/project.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});

angular.service('Iteration', function($resource){
  return $resource('../data/iteration.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});

angular.service('Message', function($resource){
  return $resource('../data/message.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});


