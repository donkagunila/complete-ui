/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@complete-components/eslint-config/next.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
};
