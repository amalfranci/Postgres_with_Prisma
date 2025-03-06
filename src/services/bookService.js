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

module.exports={addBook}
