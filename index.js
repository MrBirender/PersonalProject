const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async () => {
  try {
    const userCreated = await prisma.user.create({
      data: {
        name: "Maya",
        email: "raomaya@gmail.com",
        posts: {
          create: {
            title: "visited lal bag garden",
            content: "It was a wonderfull place !",
          },
        },
        profile: {
         create: {bio: "i am a traveller !",}
        },
      },
    });

    console.log(`user created`, userCreated);
  } catch (error) {
    console.log(`error creating user`, error);
  }
};

// createUser();
getAllUsers();
