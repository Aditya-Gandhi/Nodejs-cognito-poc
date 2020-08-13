<img src="https://github.com/damiancipolat/Nodejs-cognito-poc/blob/master/doc/logo.jpg?raw=true" width="150px" align="right" />

# Nodejs cognito poc
A simple poc to make authentication operations with cognito and nodejs, using amazon-cognito-identity-js module.

### Install
To install the project run this command:

```console
$npm install
```

### Configure
Edit the file **constants.js** with your cognito user pool.

```console
const poolData = {
  UserPoolId: "xxxxxxxxxxxxxxxxx",
  ClientId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
};
```

### Basic flow
Follow this flow to understand the events of a login workflow using cognito.

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

### Cognito user
Datos requeridos:
  - Attributes -> standard required.
  - Son adicionales al username y password.
  - Email:
  	- Puede configurarse que sea necesario validar el email del usuario, si es asi se habilita el resetear contraseña.
  	- Se configura en Pool -> MFA and verifications -> Which attributes do you want to verify?
  	- Puede configurarse la forma en como se recupera la password.
  - SMS:
  	- Puede setearse la validación del numero de telefono si es seteado como requerido.
