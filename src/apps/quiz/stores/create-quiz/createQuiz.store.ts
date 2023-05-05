import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { CreateQuizInitialState, CreateQuizState } from "./createQuiz.types";

const initialState: CreateQuizInitialState = {
  quizId: null,
  quizMetaData: {
    name: "",
    description: "",
    thumbnailImageUrl: "",
    thumbnailImageFile: null,
  },
  mainQuestionList: [],
  finalList: [],
};

export const useCreateQuizStore = create(
  immer<CreateQuizState>((set) => ({
    ...initialState,
    dispatchMetaData: (key, value) => {
      set((state) => {
        state.quizMetaData[key] = value;
      });
    },
  }))
);