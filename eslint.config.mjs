import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import vitals from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";

export default defineConfig([
  ...next,
  ...vitals,
  ...ts,
  globalIgnores([".next/**", "out/**", "next-env.d.ts", "node_modules/**"]),
]);
