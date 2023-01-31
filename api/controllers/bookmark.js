const Bookmark = require("../models/Bookmark");

const getAllBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find({ createdBy: req.user.userId });
  res.status(200).json({ bookmarks, count: bookmarks.length });
};

const createBookmark = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const bookmark = await Bookmark.create(req.body);
  res.status(201).json({ bookmark });
};

const deleteBookmark = async (req, res) => {
  const {
    user: { userId },
    params: { id: filmId },
  } = req;

  const bookmark = await Bookmark.deleteOne({
    filmId: filmId,
    createdBy: userId,
  });
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllBookmarks,
  createBookmark,
  deleteBookmark,
};
