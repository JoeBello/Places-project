exports.get = function (req, res, next) {
  res.send('GET from activity controller');
};

exports.getOne = function (req, res, next) {
  res.send('GET one from activity controlller');
};

exports.post = function (req, res, next) {
  res.send('POST from activity controller');
}