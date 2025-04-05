// --- src/modules/like/resolvers/like.resolver.ts ---
import { toggleLike, getLikesForPost, hasUserLiked } from '../services/like.service';

export default {
  Query: {
    likes: async (_: any, args: any) => getLikesForPost(Number(args.postId)),
    hasLiked: async (_: any, args: any, ctx: any) => ctx.userId ? hasUserLiked(Number(args.postId), ctx.userId) : false,
  },
  Mutation: {
    toggleLike: async (_: any, args: any, ctx: any) => {
      if (!ctx.userId) throw new Error('Not authenticated');
      return toggleLike(Number(args.postId), ctx.userId);
    },
  },
};