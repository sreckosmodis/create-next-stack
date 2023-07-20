import { Step } from "./plugin"
import { chakraUIPlugin } from "./plugins/chakra-ui/chakra-ui"
import { createNextStackPlugin } from "./plugins/create-next-stack/create-next-stack"
import { cssModulesPlugin } from "./plugins/css-modules/css-modules"
import { emotionPlugin } from "./plugins/emotion"
import { formattingPreCommitHookPlugin } from "./plugins/formatting-pre-commit-hook"
import { githubActionsPlugin } from "./plugins/github-actions"
import { mantinePlugin } from "./plugins/mantine/mantine"
import { materialUIPlugin } from "./plugins/material-ui/material-ui"
import { nextPlugin } from "./plugins/next"
import { pnpmPlugin } from "./plugins/pnpm"
import { prettierPlugin } from "./plugins/prettier"
import { sassPlugin } from "./plugins/sass/sass"
import { storybookPlugin } from "./plugins/storybook"
import { tailwindCSSPlugin } from "./plugins/tailwind-css"
import { yarnPlugin } from "./plugins/yarn"

export const steps: Step[] = [
  // Update package manager
  pnpmPlugin.steps.updatePnpm,
  yarnPlugin.steps.updateYarn,

  // Create Next App
  nextPlugin.steps.createNextApp,
  nextPlugin.steps.removeOfficialCNAContent,

  // Install dependencies
  createNextStackPlugin.steps.installDependencies,

  // Configuration
  createNextStackPlugin.steps.addScripts,
  createNextStackPlugin.steps.addGitAttributes,
  nextPlugin.steps.addNextConfig,

  // Styling
  tailwindCSSPlugin.steps.setUpTailwindCss,
  cssModulesPlugin.steps.setUpCssModules,
  sassPlugin.steps.setUpSass,
  emotionPlugin.steps.setUpEmotion,

  // Formatting
  prettierPlugin.steps.setUpPrettier,
  formattingPreCommitHookPlugin.steps.setUpFormattingPreCommitHook,

  // Continuous integration
  githubActionsPlugin.steps.addGithubWorkflowStep,

  // Add/generate content
  createNextStackPlugin.steps.copyAssets,
  createNextStackPlugin.steps.addContent,
  createNextStackPlugin.steps.addReadme,

  // Component libraries
  mantinePlugin.steps.setUpMantine,
  chakraUIPlugin.steps.setUpChakraUI,
  materialUIPlugin.steps.setUpMaterialUI,

  // Storybook installation
  storybookPlugin.steps.installStorybook,

  // Uninstall temporary dependencies
  createNextStackPlugin.steps.uninstallTemporaryDependencies,

  // Format & initial commit
  createNextStackPlugin.steps.formatProject,
  createNextStackPlugin.steps.initialCommit,
]
