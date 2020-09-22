// import createClient directly
import { createClient } from "contentful";
require("dotenv").config();

// const config = {
//   spaceId: process.env.REACT_APP_API_SPACE,
//   accessTokenId: process.env.REACT_APP_ACCESS_TOKEN
// };

export default createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  //space: config.spaceId,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  //accessToken: config.accessTokenId
  space: "3m7jkjbucox6",
  accessToken: "ddDo5dXUKrBvKTz7kzaVADaun8vAXu-oGyyzhgb3Yy4"
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
