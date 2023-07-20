import { runCommand } from "../helpers/run-command"
import { createPlugin } from "../plugin"
import { getNameVersionCombo } from "../setup/packages"

export const yarnPlugin = createPlugin({
  id: "yarn",
  name: "Yarn",
  description: "Adds support for Yarn",
  active: ({ flags }) => Boolean(flags["package-manager"] === "yarn"),
  technologies: [
    {
      id: "yarn",
      name: "Yarn",
      description:
        "Yarn is a JavaScript package manager compatible with the npm registry that helps developers automate the process around npm packages such as installing, updating, removing, and more.",
      links: [
        { title: "Website", url: "https://yarnpkg.com/" },
        { title: "CLI Docs", url: "https://yarnpkg.com/cli" },
        { title: "GitHub", url: "https://github.com/yarnpkg/berry" },
      ],
    },
  ],
  steps: {
    updateYarn: {
      id: "updateYarn",
      description: "updating Yarn",
      shouldRun: false,
      run: async () => {
        await runCommand("npm", [
          "i",
          "-g",
          getNameVersionCombo({ name: "yarn", version: "latest" }),
        ])
      },
    },
  },
} as const)
