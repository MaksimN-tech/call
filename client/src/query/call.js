import { gql } from "@apollo/client";

export const GET_ALL_CALLS = gql`
  query {
    getAllCalls {
      phone
      call_date
      id
    }
  }
`;
