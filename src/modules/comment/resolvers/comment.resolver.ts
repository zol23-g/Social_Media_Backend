// --- src/modules/comment/resolvers/comment.resolver.ts ---
import { getPostComments, addCommentToPost } from '../services/comment.service';

export default {
  Query: {
    comments: async (_: any, args: any, ctx: any) => {
      return ctx.prisma.comment.findMany({ where: { postId: Number(args.postId) } });
    }
  },
  Mutation: {
    addComment: async (_: any, args: any, ctx: any) => {
      return ctx.prisma.comment.create({
        data: {
          content: args.content,
          postId: Number(args.postId),
          parentId: args.parentId ? Number(args.parentId) : null,
          userId: ctx.userId,
        },
      });
    }
  }
};
