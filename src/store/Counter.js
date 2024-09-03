import { create } from 'zustand';

const useCommentStore = create((set) => ({
  comments: [],
  addComment: (newComment) => set((state) => ({ comments: [...state.comments, newComment] })),
  deleteComment: (name) => set((state) => ({
    comments: state.comments.filter((comment) => comment.name !== name),
  })),
  incrementCount: (name) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.name === name ? { ...comment, number: comment.number + 1 } : comment
      ),
    })),
  decrementCount: (name) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.name === name ? { ...comment, number: comment.number - 1 } : comment
      ),
    })),
  addReply: (name, replyText) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.name === name ? { ...comment, replies: [...(comment.replies || []), replyText] } : comment
      ),
    })),
  initializeComments: (commentsData) => set(() => ({ comments: commentsData })),
}));

export default useCommentStore;
