function ProjectListCtrl($xhr) {
  var self = this;

  $xhr('GET', '../data/projects.json', function(code, response) {
    self.projects = response;
  });

}