const bookService = require('../services/bookService')



exports.addBook =async (req,res)=>{

    try{
        const {title,publishedDate,authorId} = req.body

        const createBook = await bookService.addBook(title,publishedDate,authorId)
        
        res.status(200).json({message:"New Book created Successfully",data:createBook})

    }
    catch(error)
    {
        console.error("Error happening in the create Book",error)
        res.status(400).json({message:error.message})
    }
}

exports.getAllBook = async (req, res) => {
    try {
        const allBook = await bookService.getBook();
        res.status(201).json({ message: "All books retrieved successfully", data: allBook });
    } catch (error) {
        console.error("Error occurred in retrieving books", error);
        res.status(400).json({ message: error.message });
    }
}