import { useCurrentQuestion } from "@/apps/quiz/hooks";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useCTAButton } from "./Solution.hooks";
import { SolutionProps } from "./Solution.types";

export const Solution = ({ hideSolution }: SolutionProps) => {
  const { title, solutionImageUrl, solutionExplanation } = useCurrentQuestion();

  const { handleNextQuestionButtonClick } = useCTAButton({ hideSolution });

  return (
    <VStack gap={10}>
      <Heading size="md" color="orange.300">
        {title}
      </Heading>
      <VStack>
        <Text color="orange.400">{solutionExplanation}</Text>
        <DescriptionImage
          src={solutionImageUrl}
          alt={solutionExplanation}
          width={340}
          height={100}
        />
      </VStack>

      <Portal>
        <BottomButtonGroup>
          <ShadowedButton
            rightIcon={<CheckCircleIcon />}
            width="full"
            boxShadow="dark-lg"
            onClick={handleNextQuestionButtonClick}
          >
            다음문제
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const DescriptionImage = styled(Image)`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BottomButtonGroup = styled(ButtonGroup)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
