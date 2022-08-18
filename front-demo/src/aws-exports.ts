// const awsmobile = {
//     "aws_project_region": "ap-northeast-1",
//     "aws_cognito_region": "ap-northeast-1",
//     "aws_user_pools_id": "<cognito-user-pool-id>",
//     "aws_user_pools_web_client_id": "<client-id>",
//     "oauth": {
//         "domain": "domain.auth.ap-northeast-1.amazoncognito.com",
//         "scope": [
//             "phone",
//             "email",
//             "openid",
//             "profile",
//             "aws.cognito.signin.user.admin"
//         ],
//         "redirectSignIn": "http://localhost:4200/login",
//         "redirectSignOut": "http://localhost:4200/login",
//         "responseType": "code"
//     }
// };

const awsmobile={
    // "aws_cognito_identity_pool_id": "us-east-1:19db5017-9d8c-XXXXXX",
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_5Cor8hUlk",
    "aws_user_pools_web_client_id": "2igunj12qho73itvi2r99s6mg7",
    "oauth": {
        "domain": "fabianjanuszewski2.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/login",
        "redirectSignOut": "http://localhost:4200/home",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
}


export default awsmobile;