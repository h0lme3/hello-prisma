import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Holmes",
      email: "haodev007@gmail.com",
      posts: {
        create: { title: "Hello Prisma" },
      },
      profile: {
        create: { bio: "I am learning Prisma DB Toolkit. :)" },
      },
    },
  });

  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });

  console.log(post, "---post---");

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, "allUsers");
  return allUsers;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e, "---error---");
    await prisma.$disconnect();
    process.exit(1);
  });
