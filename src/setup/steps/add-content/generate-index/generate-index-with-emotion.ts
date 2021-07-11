import { QuestionnaireAnswers } from "../../../../questionnaire/questionnaire"
import {
  confettiImports,
  confettiScriptComponent,
  onConfettiLoadFunction,
} from "./confetti-script"

export const generateIndexWithEmotion = (
  answers: QuestionnaireAnswers
) => /* tsx */ `
import styled from "@emotion/styled";
import { NextPage } from "next";
${confettiImports}
import Page from "../components/Page";

type PageSectionProps = {
  grayBackground?: boolean;
};
const PageSection = styled.section<PageSectionProps>\`
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  \${(props) => (props.grayBackground ? \`background: hsl(0, 0%, 95%);\` : "")}
\`;

const ContentContainer = styled.div\`
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
\`;

const Title = styled.h1\`
  margin: 0;
  margin-bottom: 20px;

  font-size: 3rem;
\`;

const Subtitle = styled.p\`
  margin: 0;

  font-size: 1.5rem;
\`;

const InlineCode = styled.code\`
  border-radius: 0.4em;
  padding: 0.4em;

  font-size: 0.8em;
  background-color: hsl(0, 0%, 95%);
\`;

const H2 = styled.h2\`
  margin: 0;
  margin-bottom: 20px;
\`;

const Paragraph = styled.p\`
  margin: 0;
  max-width: 600px;
\`;

const Index: NextPage = () => {
  ${onConfettiLoadFunction}

  return (
    <Page
      title="${answers.projectName}"
      description="Generated by Create Next Stack."
    >
      ${confettiScriptComponent}
      <main>
        <PageSection>
          <ContentContainer>
            <Title>Your project is a go! 🎉</Title>
            <Subtitle>
              Get started by editing <InlineCode>pages/index.tsx</InlineCode>
            </Subtitle>
          </ContentContainer>
        </PageSection>{" "}
        <PageSection grayBackground={true}>
          <ContentContainer>
            <H2>Learning resources</H2>
            <Paragraph>
              If you are using a technology for the first time, you can find
              related links in the generated <InlineCode>README.md</InlineCode>{" "}
              file that might prove helpful.
            </Paragraph>
          </ContentContainer>
        </PageSection>
      </main>
      <PageSection as="footer">
        <ContentContainer>
          <Paragraph>
            Generated by{" "}
            <a href="https://github.com/akd-io/create-next-stack">
              Create Next Stack
            </a>
          </Paragraph>
        </ContentContainer>
      </PageSection>
    </Page>
  );
};

export default Index;
`
