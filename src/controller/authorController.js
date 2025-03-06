const authorService = require("../services/authorService");

exports.addAuthor = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { name } = req.body;
    const author = await authorService.addAuthor(name);
    res.status(201).json(author);
  } catch (err) {
    console.error("Error for creating author", err);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await authorService.deleteAuthor(id);
    res
      .status(200)
      .json({ message: "author deleted successfully", author: deleteBook });
  } catch (err) {
    console.error(`error occured`, err);
  }
};
