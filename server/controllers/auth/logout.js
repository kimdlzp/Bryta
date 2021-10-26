const { deleteRefreshToken, isAuthorized } = require("./token");

module.exports = (req, res) => {
  const tokenData = isAuthorized(req);
  if (!tokenData) {
    res.sendStatus(404);
  }
  deleteRefreshToken(res);
};
