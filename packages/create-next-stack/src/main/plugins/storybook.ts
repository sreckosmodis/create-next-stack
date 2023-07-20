import { modifyJsonFile, toArray } from "../helpers/io"
import { remove } from "../helpers/remove"
import { runCommand } from "../helpers/run-command"
import { createPlugin } from "../plugin"
import { getNameVersionCombo } from "../setup/packages"

export const storybookPlugin = createPlugin({
  id: "storybook",
  name: "Storybook",
  description: "Adds support for Storybook",
  active: ({ flags }) => Boolean(flags["storybook"]),
  devDependencies: {
    "eslint-plugin-storybook": {
      name: "eslint-plugin-storybook",
      version: "^0.6.12",
    },
  },
  technologies: [
    {
      id: "storybook",
      name: "Storybook",
      description:
        "Storybook is a tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.",
      links: [{ title: "Website", url: "https://storybook.js.org/" }],
    },
  ],
  steps: {
    installStorybook: {
      id: "installStorybook",
      description: "install Storybook",
      shouldRun: true,
      run: async () => {
        await setUpEslintConfigStorybook()
        await runCommand(
          "npx",
          [
            getNameVersionCombo({ name: "storybook", version: "latest" }),
            "init",
          ],
          { env: { NODE_ENV: "production", IN_STORYBOOK_SANDBOX: "true" } }
        )
        await remove("stories")
      },
    },
  },
} as const)

const setUpEslintConfigStorybook = async () => {
  await modifyJsonFile(".eslintrc.json", (eslintrc) => ({
    ...eslintrc,
    extends: [
      //
      ...toArray(eslintrc["extends"]),
      "plugin:storybook/recommended",
    ],
  }))
}

const removeDefaultStories = async () => {
  await remove("stories")
}
