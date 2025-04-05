import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      username: 'demo',
      email: 'demo@test.com',
      bio: 'This is a demo user.',
    },
  });
}
main().catch(console.error).finally(() => prisma.$disconnect());