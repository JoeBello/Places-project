var PlacesModel = function(){};

PlacesModel.prototype.constructor = PlacesModel;
require('./placesModel.parse')(PlacesModel)
require('./placesModel.geocodeRequest')(PlacesModel)
require('./placesModel.get')(PlacesModel)
require('./placesModel.getCollection')(PlacesModel)
require('./placesModel.getOne')(PlacesModel)

module.exports = new PlacesModel();
