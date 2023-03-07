import { ValidCNSInputs } from "../create-next-stack-types"
import { capitalizeFirstLetter } from "../helpers/capitalize-first-letter"
import { logInfo } from "../logging"
import { printFinalMessages } from "./print-final-messages"
import { Step } from "./step"
import { addTestScriptStep } from "./steps/add-test-script"
import { addContentStep } from "./steps/add-content/add-content"
import { addGitAttributesStep } from "./steps/add-git-attributes"
import { addGithubWorkflowStep } from "./steps/add-github-workflow"
import { addReadmeStep } from "./steps/add-readme/add-readme"
import { copyAssetsStep } from "./steps/copy-assets"
import { createNextAppStep } from "./steps/create-next-app"
import { formatProjectStep } from "./steps/format-project"
import { gitCommitStep } from "./steps/git-commit"
import { installFormikStep } from "./steps/install-formik"
import { installFramerMotionStep } from "./steps/install-framer-motion"
import { installReactHookFormStep } from "./steps/install-react-hook-form"
import { addNextConfigStep } from "./steps/next-config/add-next-config"
import { removeOfficialCNAContentStep } from "./steps/remove-official-cna-content"
import { setUpChakraUIStep } from "./steps/set-up-chakra-ui"
import { setUpCssModulesWithSassStep } from "./steps/set-up-css-modules-with-sass"
import { setUpEmotionStep } from "./steps/set-up-emotion"
import { setUpEslintStep } from "./steps/set-up-eslint"
import { setUpLintStagedStep } from "./steps/set-up-lint-staged"
import { setUpMaterialUIStep } from "./steps/set-up-material-ui"
import { setUpPrettierStep } from "./steps/set-up-prettier"
import { setUpStyledComponentsStep } from "./steps/set-up-styled-components"
import { setUpTailwindCssStep } from "./steps/set-up-tailwind-css"
import { updateYarnStep } from "./steps/update-yarn"

export const performSetupSteps = async (
  inputs: ValidCNSInputs
): Promise<void> => {
  const steps: Step[] = [
    // Package management
    updateYarnStep,

    // Create Next App
    createNextAppStep,
    setUpEslintStep, // eslint is set up before content removal because it requires content in /pages
    removeOfficialCNAContentStep,

    // Configuration
    addGitAttributesStep,
    addNextConfigStep,
    addTestScriptStep,

    // Styling
    setUpEmotionStep,
    setUpStyledComponentsStep,
    setUpTailwindCssStep,
    setUpCssModulesWithSassStep,

    // Component libraries
    setUpChakraUIStep,
    setUpMaterialUIStep,

    // Formatting
    setUpPrettierStep,
    setUpLintStagedStep,

    // Form state management
    installReactHookFormStep,
    installFormikStep,

    // Animation
    installFramerMotionStep,

    // Continuous integration
    addGithubWorkflowStep,

    // Add/generate content
    copyAssetsStep,
    addContentStep,
    addReadmeStep,

    // Format & initial commit
    formatProjectStep,
    gitCommitStep,
  ]

  for (const step of steps) {
    if (await step.shouldRun(inputs)) {
      logInfo(`${capitalizeFirstLetter(step.description)}...`)

      await step.run(inputs)
      step.didRun = true
    }
  }

  printFinalMessages(inputs)
}
