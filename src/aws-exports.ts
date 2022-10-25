const awsmobile = {
    // "aws_cognito_identity_pool_id": "us-east-1:19db5017-9d8c-XXXXXX",
    aws_project_region: "us-east-1",
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "us-east-1_6VmZiClMH",
    aws_user_pools_web_client_id: "eof6qr3kg9rg2n2ku9m8mp1dj",
    oauth: {
        domain: "serverless-bakend-develop.auth.us-east-1.amazoncognito.com",
        scope: [
            "email",
            "openid",
            "phone",
            "profile",
            // "aws.cognito.signin.user.admin"
        ],
        redirectSignIn: "http://localhost:4200/dashboard",
        redirectSignOut: "http://localhost:4200/",
        responseType: "code"
    },
    federationTarget: "COGNITO_USER_POOLS",
    aws_cognito_username_attributes: [
        "EMAIL"
    ],
    aws_cognito_signup_attributes: [
        "EMAIL"
    ],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: [
        "SMS"
    ],
    aws_cognito_password_protection_settings: {
        passwordPolicyMinLength: 8,
        passwordPolicyCharacters: []
    },
    aws_cognito_verification_mechanisms: [
        "EMAIL"
    ],
}
export default awsmobile;