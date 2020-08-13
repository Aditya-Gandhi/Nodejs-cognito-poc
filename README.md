# Nodejs-cognito-poc
A simple poc to make authentication operations with cognito and nodejs, using amazon-cognito-identity-js module.

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
