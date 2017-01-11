var PlacesCriteriaController = function () {
  var ctrl = this;

  ctrl.submitCriteria = function () {
    console.log('ctrl.submitCriteria');
    ctrl.onSubmit({
      $event: {
        criteria: ctrl.criteria
      }
    });
  };

};

angular
  .module('components.place')
  .controller('PlacesCriteriaController', PlacesCriteriaController);