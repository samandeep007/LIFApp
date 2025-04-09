import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    inbox: [],
    conversations: {},
  },
  reducers: {
    setInbox: (state, action) => {
      state.inbox = action.payload;
    },
    addConversation: (state, action) => {
      const { userId, messages } = action.payload;
      state.conversations[userId] = messages;
    },
    addMessage: (state, action) => {
      const { userId, message } = action.payload;
      if (!state.conversations[userId]) {
        state.conversations[userId] = [];
      }
      state.conversations[userId].push(message);
    },
    markRead: (state, action) => {
      const userId = action.payload;
      if (state.conversations[userId]) {
        state.conversations[userId] = state.conversations[userId].map((msg) =>
          msg.sender !== userId ? { ...msg, read: true } : msg
        );
      }
    },
    removeConversation: (state, action) => {
      const userId = action.payload;
      delete state.conversations[userId];
      state.inbox = state.inbox.filter((conv) => conv.userId !== userId);
    },
  },
});

export const { setInbox, addConversation, addMessage, markRead, removeConversation } = chatSlice.actions;
export default chatSlice.reducer;