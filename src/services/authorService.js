const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addAuthor(name) {
  try {
    const createNewlyAuthor = await prisma.author.create({
      data: {
        name,
      },
    });

    return createNewlyAuthor;
  } catch (error) {
    console.error("Error occured in creating author", error);
  }
}

async function deleteAuthor(id) {
  try {
    const deleteAuthor = await prisma.author.delete({
      where: { id: parseInt(id) },
    });
    return deleteAuthor;
  } catch (err) {
    console.error("Errror happend for delete author", err);
    res.status(400).json({ message: err.message });
  }
}

module.exports = { addAuthor, deleteAuthor };
