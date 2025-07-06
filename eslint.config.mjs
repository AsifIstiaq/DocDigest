// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// // const eslintConfig = [
// //   ...compat.extends("next/core-web-vitals", "next/typescript"),
// // ];

// const eslintConfig = {
//   ...compat.config({
//     extends: [
//       "next/core-web-vitals",
//       "next/typescript",
//       "prettier",
//       "plugin:tailwindcss/recommended",
//     ],
//     plugins: ["prettier"],
//     rules: {
//       "prettier/prettier": "error",
//       "react/no-escape-entities": "off",
//     },
//   }),
// };

// export default eslintConfig;
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss"; // 👈 required for plugin in flat config

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    plugins: {
      tailwindcss, // 👈 plugin object, not just a string
    },
    rules: {
      // optional: tweak rules
      "tailwindcss/classnames-order": "warn",
      "react/no-escape-entities": "off",
    },
  },
];

export default eslintConfig;
