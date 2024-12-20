import { CodegenConfig } from "@graphql-codegen/cli";
import * as constants from "./utils/constants.util";

const config: CodegenConfig = {
  schema:
    "https://api.studio.thegraph.com/query/77725/cocochain/version/latest",
  documents: ["./**/*.{ts,tsx,graphql}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
