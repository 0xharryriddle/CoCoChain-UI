import { useQuery } from "@apollo/client";

import { gql } from "../__generated__";

export const GET_AGRICULTURAL_PRODUCT = gql(`
    query GetTodosForAuthor($id:ID!) {
        getTodosForAuthor(id:$id) {
            ...Essentials
        }
    }
`);

export const useTodosByAuthor = (id: string) => {
  const result = useQuery(GET_AGRICULTURAL_PRODUCT, {
    variables: {
      id,
    },
  });

  return result;
};
