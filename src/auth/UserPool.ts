import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_nftljCBHF',
  ClientId: '6l2h048cnbrpoe81p21b44lr5g'
};

export default new CognitoUserPool(poolData);