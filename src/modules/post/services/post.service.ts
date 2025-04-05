// --- src/modules/post/services/post.service.ts ---
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async (userId: number, caption: string | undefined, media: string) => {
  return prisma.post.create({
    data: {
      caption,
      media,
      userId,
    },
    include: { user: true },
  });
};

export const getAllPosts = async () => {
  return prisma.post.findMany({
    include: { user: true },
    orderBy: { timestamp: 'desc' },
  });
};

export const getPostById = async (postId: number) => {
  return prisma.post.findUnique({
    where: { id: postId },
    include: { user: true },
  });
};