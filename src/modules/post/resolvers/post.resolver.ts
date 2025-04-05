// --- src/modules/post/resolvers/post.resolver.ts ---
import { createPost, getAllPosts, getPostById } from '../services/post.service';

export default {
  Query: {
    posts: async () => getAllPosts(),
    post: async (_: any, args: any) => getPostById(Number(args.id)),
  },
  Mutation: {
    createPost: async (_: any, args: any, ctx: any) => {
      if (!ctx.userId) throw new Error('Not authenticated');
      return createPost(ctx.userId, args.caption, args.media);
    },
  },
};