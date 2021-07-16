import execa from "execa"
import { throwError } from "../../error-handling"
import { getQuotedNameVersionCombo, packages } from "../packages"
import { Step } from "../step"

export const updateYarnStep: Step = {
  shouldRun: () => true,

  run: async function (this) {
    this.log("Updating Yarn...")

    try {
      await execa(`npm i -g ${getQuotedNameVersionCombo(packages.yarn)}`)
    } catch (error) {
      throwError.call(this, "An error occurred while updating Yarn.", error)
    }
  },
}
