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

module.exports = {addAuthor}
