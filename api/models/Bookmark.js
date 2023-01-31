const mongoose = require("mongoose");
const BookmarkSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    filmId: {
      type: String,
      required: [true, "Please provide a film id"],
      maxlength: 100,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Bookmark", UserSchema);
