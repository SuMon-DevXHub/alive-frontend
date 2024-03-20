import request, { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://app.helloalvie.co/graphql/`;

// const graphQLClient = new GraphQLClient(endpoint, {
//     headers: {
//         authorization: ``,
//     },
// })

const CREATE_COMPANY = async (input: {
  name: string;
  email: string;
  isDei: boolean;
}) => {
  const inputValue = input;
  const query =
    gql`mutation CreateCompany {
     createCompany(input: {name: "` +
    inputValue.name +
    `", email: "` +
    inputValue.email +
    `", isDei: ` +
    inputValue.isDei +
    `}) {
         success
         response
         company {
             id
             name
             isDei
             email
         }
     }
 }`;
  try {
    const data: { createCompany: any } = await request(endpoint, query);
    return data.createCompany.response;
  } catch (error) {
    console.error("Error creating or updating wait list:", error);
    throw error;
  }
};

const CREATE_OR_UPDATE_WAIT_LIST = async (email: string) => {
  // const inputValue = input
  const query =
    gql`mutation CreateOrUpdateWaitList {
     createOrUpdateWaitList(email: "` +
    email +
    `") {
         success
         waitList {
            id
            email
            url
            createdAt
        }
     }
 }`;
  try {
    const data: any = await request(endpoint, query);
    return data.createOrUpdateWaitList;
  } catch (error) {
    console.error("Error creating or updating wait list:", error);
    throw error;
  }
};
const mutations = {
  CREATE_COMPANY,
  CREATE_OR_UPDATE_WAIT_LIST,
};

export default mutations;
