import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPostComments = async (postId: number) => {
  return prisma.comment.findMany({
    where: { postId, parentId: null },
    include: {
      user: true,
      post: true,
      replies: {
        include: {
          user: true,
          replies: true,
        },
      },
    },
  });
};

export const addCommentToPost = async (
  postId: number,
  content: string,
  userId: number,
  parentId?: number
) => {
  return prisma.comment.create({
    data: {
      content,
      postId,
      userId,
      parentId: parentId ?? null,
    },
    include: { user: true, post: true, parent: true, replies: true },
  });
};
