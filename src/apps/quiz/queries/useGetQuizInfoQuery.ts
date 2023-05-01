import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getQuizInfo } from "../apis/getQuizInfo";

export const GET_QUIZ_INFO_QUERY_KEY = "get-quiz-info";

export const useGetQuizInfoQuery = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();

  return useQuery(
    [GET_QUIZ_INFO_QUERY_KEY, quizId],
    () => getQuizInfo({ quizId: quizId! }),
    {
      refetchOnWindowFocus: false,
    }
  );
};
