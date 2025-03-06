const bookService = require("../services/bookService");

exports.addBook = async (req, res) => {
  try {
    const { title, publishedDate, authorId } = req.body;
    const createBook = await bookService.addBook(
      title,
      publishedDate,
      authorId
    );
    res
      .status(200)
      .json({ message: "New Book created Successfully", data: createBook });
  } catch (error) {
    console.error("Error happening in the create Book", error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAllBook = async (req, res) => {
  try {
    const allBook = await bookService.getBook();
    res
      .status(201)
      .json({ message: "All books retrieved successfully", data: allBook });
  } catch (error) {
    console.error("Error occurred in retrieving books", error);
    res.status(400).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book retrieved successfully", data: book });
  } catch (error) {
    console.error("Error occurred in retrieving book by id", error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, publishedDate, authorId } = req.body;
    const updatedBook = await bookService.updateBook(
      id,
      title,
      publishedDate,
      authorId
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    console.error("Error occurred in updating book", error);
    res.status(400).json({ message: error.message });
  }
};


exports.deleteBook =async(req,res)=>{

    try{
        const {id} = req.params

        const deletedBook = await bookService.deleteBook(id)
        res.status(200).json({message:"Book deleted sucsesfully",deletedBook})
    }
    catch(error)
    {   
        console.error("Error occured when deleting a book",error)
         res.status(400).json({message:"deletion failed check again"}) 
    }
}