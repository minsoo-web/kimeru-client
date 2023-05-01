import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Highlight,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useAnswer, useCTAButton, useFinalInfo } from "./FInal.hooks";
import { useGetQuizInfoQuery } from "../../queries";
import { useAnswerStore } from "../../stores/answer/answer.store";
import styled from "@emotion/styled";
import { CopyIcon, HamburgerIcon, LinkIcon } from "@chakra-ui/icons";

export const Final = () => {
  const { finalInfo } = useFinalInfo();
  const { data: quizInfo } = useGetQuizInfoQuery();
  const { answerCount } = useAnswer();
  const { handleShareButtonClick, handleOtherQuizButtonClick } = useCTAButton();

  return (
    <VStack>
      <Image
        src={finalInfo.descriptionImageUrl}
        alt=""
        width={300}
        height={300}
      />
      <Text color="orange.200" fontSize="2xl">
        당신의 레벨은
      </Text>
      <Heading color="orange.300">{finalInfo.mainTitle}</Heading>

      <Divider />

      <Text color="orange.100" fontWeight="extrabold" fontSize="2xl">
        {`정답 ${answerCount} / ${quizInfo?.questionCount}`}
      </Text>

      <Text color="orange.200" fontSize="2xl">
        {finalInfo.descriptionExplanation}
      </Text>

      <Portal>
        <BottomButtonGroup>
          <ShadowedButton
            rightIcon={<CopyIcon />}
            width="full"
            boxShadow="dark-lg"
            onClick={handleShareButtonClick}
          >
            공유하기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<HamburgerIcon />}
            width="full"
            onClick={handleOtherQuizButtonClick}
          >
            다른 테스트하기
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const BottomButtonGroup = styled(ButtonGroup)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
