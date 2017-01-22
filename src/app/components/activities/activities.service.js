function ActivitiesService ($localStorage) {
  var storage = $localStorage.project1.activities;

  // method to save save an activity
  this.saveActivity = function(activity) {
    return storage.push(activity);
  };

  // method to return all stored activities
  this.getActivities = function () {
    return storage;
  };

  // method to remove an activity
  this.removeActivity = function(activity) {
    for (var i = 0; i < storage.length; i++) {
      if (storage[i].name === activity.name) {
        return storage.splice(i, 1);
      }
    }
  };

  // method to remove all activities
  this.clearActivities = function () {
    return storage.splice(0, storage.length);
  };
}

angular
  .module('components.activities')
  .service('ActivitiesService', ActivitiesService);
