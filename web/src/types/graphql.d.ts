declare module "*.graphql" {
  import { DocumentNode } from "graphql";

  // Named exports for each query/mutation in the file
  export const GetMe: DocumentNode;
  export const TestOpenAI: DocumentNode;

  // Default export contains all operations
  const content: { [key: string]: DocumentNode };
  export default content;
}

declare module "*.gql" {
  import { DocumentNode } from "graphql";

  // Named exports for each query/mutation in the file
  export const GetMe: DocumentNode;
  export const TestOpenAI: DocumentNode;

  // Default export contains all operations
  const content: { [key: string]: DocumentNode };
  export default content;
}
