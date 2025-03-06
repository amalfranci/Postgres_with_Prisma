const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addBook(title, publishedDate, authorId) {
  try {
    const newlyCreatedBook = await prisma.book.create({
      data: {
        title,
        publishedDate,
        author: {
          connect: { id: authorId },
        },
      },
      include: { author: true },
    });

    return newlyCreatedBook;
  } catch (error) {
    console.error("Error occur when user add  Book", error);
  }
}

async function getBook() {
  try {
    const allBooks = await prisma.book.findMany({
      include: { author: true },
    });

    return allBooks;
  } catch (err) {
    console.error("Error found in getBooks", err);
  }
}

async function getBookById(id) {
  try {
    console.log("id", id);
    const idd = parseInt(id);
    const book = await prisma.book.findUnique({
      where: { id: idd },
      include: { author: true },
    });
    return book;
  } catch (err) {
    console.error("Error found in getBookById", err);
  }
}

async function updateBook(id, title, publishedDate) {
  console.log(id, title);
  try {
    // const updatedBook = await prisma.book.update({
    //   where: { id: parseInt(id) },
    //   data: {
    //     title,
    //     publishedDate,
    //     author: {
    //       connect: { id: parseInt(authorId) },
    //     },
    //   },
    //   include: { author: true },
    // });

    // return updatedBook;
    const updateBook = await prisma.$transaction(async (prisma) => {
      const book = await prisma.book.findUnique({ where: { id:parseInt(id) } });
      if (!book) {
        throw new Error(`Book with id ${id} not found`);
      }
      return prisma.book.update({
        where: { id: parseInt(id) },
        data: {
          title,
          publishedDate,
        },
        include: { author: true },
      });
    });
    return updateBook;
  } catch (error) {
    console.error("Error occur when updating Book", error);
  }
}


async function deleteBook(id) {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id: parseInt(id) },
    });
    return deletedBook;
  } catch (error) {
    console.error("Error occur when deleting Book", error);
  }
}


module.exports = { addBook, getBook, getBookById, updateBook,deleteBook };
