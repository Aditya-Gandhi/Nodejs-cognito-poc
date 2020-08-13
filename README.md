# Nodejs-cognito-poc
A simple poc to make authentication operations with cognito and nodejs, using amazon-cognito-identity-js module.

## Install
To install the project run this command:

```console
$npm install
```

## Configure
Edit the file **constants.js**.

```console
const poolData = {
  UserPoolId: "xxxxxxxxxxxxxxxxx",
  ClientId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
};
```

```console
Register user
    Verify the code received in the email
        Expired?
        NO
            Sign In
            Succes
                Receive
                IdToken
                    --
                RefreshToken
                    token (save this token to extend the acces token life)
                AccesToken
                    jwtToken
                    payload:{
                       sub (cognito uuid)
                    }
            Error
                Not authorized
        Si
            Resend Code
            Go to verify
```
