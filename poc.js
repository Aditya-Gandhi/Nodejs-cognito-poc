const {
  signUp,
  signIn,
  verifyCode,
  resendCode,
  refreshToken
} = require('./lib/cognito.js');

//signUp('bender', '12345678910', 'damian.cipolat@gmail.com').then(a => console.log(a)).catch(e => console.log(e));
//signIn('bender', '12345678910').then(a => console.log(a)).catch(e => console.log(e));
//verifyCode('bender', '358081').then(a => console.log(a)).catch(e => console.log(e));
//resendCode('pepe1').then(a => console.log(a)).catch(e => console.log(e));
//refreshToken('bender', 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.kGxmL7o5djFPDf9Bqc8jnJBNBRybIVq3_Fp4mfYAAmHoXAWWfgXk6ZYX3d1fnoAHQ9rEonMiSeu08DLCS19Ci_VmdqZsbcP2gQpn_6X_PZdKSuY3QpWBCRYNBCHp18 - tgbQ3ed_e5JxHm5bjSBvQ6WtfENGgUq_04pav3bBJtzK9dacSu4zoZgpiNBXdm8160vLgCYufDME6sXQjjxDYzQ8Nmwzun7ouVSRDbN229OHZeJPKRltZ2zRY4sYV0habA5TEk0Kx3NSQuZywYE8MmBeZ0xTPpQya64PR9 - amsOeEhFDw_310gs0TgR8TUeV_yXzI04hRyzEz9HlfDJn2JQ.Ermo9OPYpFUvdhUh.WmNQZzmP4dSwh15kRyWRooNkgRHdOjhjl909fckzi1Yxr9CU8HatH1qdPVadvFD5kstQBnMwyh - uluo5pTfSu5xBFd5r0LWHOHUQsLgKJ9jDnUGKrBOB2ZkSrpJ721j3numf7BhF2UnuMiylPnXaVMR6G - 6mLNSBqKhtOH4HCxvWH - dN_bXpnKEjf7QFboI9wDoiOOdnNiYM33X7MlInPMRAi_WeO36 - crNUl3cWm23T4MIFw5OcQN0vuCQtDOrhvB - aG57KKv_ngh8thmY1mnBkNcM_vo3HbIwlDJVBHWddfGuDopbryrr9IQmUgG2XvQvIN1jl0CX8YbtQMSTjFE2PZ2IcJoo2aDaavl - qmE3nHchRTG0AhBWP3GnGzau6aUyFCeaFSndeJYiqfWUNduourqHHyiDjlDmdSTtaguxXIhZVcJtZeXrpoUQhBRQzunJgzil - HXRD - 6VYd2Ud0Jb6FdiviT8rHV4Am - VayHUozjnDkMnLuVKk - VTk7O4BtykPlp94VL6AT1lAwoC1w2xsv6EqlprO8NOfdvNkEiA3BiogZ6ivRiqByqP02pLh93s9rpsk7ewlJe1ND9Vk8IgNG35_14rZeF0kbkS5aVgis0oZJl4 - DiBrv3v9Oy - QhssvkFq_dvI_oertfBFJmxlM - DTfeSO5KywS0wMi8zRty1vtnkC3p9ChRXjZiOTCLObia2HuwOa_MMUW3fp48e2yxmg4lZNfID_movdooea34NWsSWz1Iistqi541KhjVE_mkG0XIqJCt2QK_SZO27l01m - c - BH7AQsPVyNAREsRUBNDQE7VOZJ151OlfPD16o0FqJd79GoqfGbGOT2rZPGnXbwftpxbvq7eqrq1n5zwIPSUGkTuMMWPJ5IcEDcnq_W9n0euIF4I7fNg0Kzv72wwZNbmxQUvZVeEoRPlDl - 5qK0S2RepOpLHbsea_CQwlqAwRa__Wx8116uo2INBdt2Ate5hPyMhmofkR - 04LaM3TXK1tYhPhfcnAFyc267b_vmHpwTBiStyuclhI70fH2AYY55QEdq8WMkhaQwPSkpcpXW2ZS_zjGKELij20U2929sa8K6MboKDbiDjNLyzadVObSbmqcZhYeWpiqE6RY_gFXOoC1ablxyWmWFBAcwZqtQ7xvXUWU - WZPVHr6CVh1G5mZ9QXxzdNckJBsUFOZJHpH60gfdwLyz8pmwniygcIxIRCRsqzFPaWouXA4OZYLIR81tS7HQDXQAxZyO - zD9u4PfaUrpjRBjR3Vwua2aRD9bv.92e3xcspcl5x25uYTF_5uA').then(a => console.log(a)).catch(e => console.log(e));

/*
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
*/

//access
//eyJraWQiOiJ6SzJNNnFpQ21UalRjOTlHYlUxYkx6UENONFBWUzM2RVB1SEdoSmlOOU1FPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxMzY3ZjdiNC1mMWYxLTQyNDEtYWQzMi0zNDBkOGNhYzE5OTUiLCJldmVudF9pZCI6ImUxZmNlZDllLTJhMGEtNDJjMC05YTliLWIzNzcyODFjMzk2NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1OTcyOTIzMjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yXzFQREV0QjRlQiIsImV4cCI6MTU5NzI5NTkyNywiaWF0IjoxNTk3MjkyMzI3LCJqdGkiOiI4MmNjY2I0ZS1hYTRkLTRlNDAtYjdjYi1iZWMyMzQxOWEyMDkiLCJjbGllbnRfaWQiOiI0ZmYwcTRwam05NXNmNTU2M2hnMmJmMnU2YSIsInVzZXJuYW1lIjoiYmVuZGVyIn0.cuUp1uHZzM9 - a8rxg83J6E8a00Hd - iKUSK5d92bCIlTVOPBo7 - cT4OMmYhz9vjxGGV8IDwWTWt73nD5lwrjlq5rZGBiIagRZBZ_Fa3O5cLzWc09IaWFocIgAdLYZkiU2NULxeEgmGddwDtTXupKJ3bGYWWjQOuuJFHvbtIZenBhDm3vQlX1TGS6YtWrKApJGApKV2lA_RqKueyNBlYl4yEkVoa066 - 0A_EOZlW2wewgQtKdF6gGJHbt2XGMuu - IyZBTUtl - VQO_45yh_UQbHNRbkPg - R60UteylR3QaY_4ZzI - oWlMmjO0aQj - WlINZnXyeEC8AjF8Oel8voygHB1w

//refresh
//eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.kGxmL7o5djFPDf9Bqc8jnJBNBRybIVq3_Fp4mfYAAmHoXAWWfgXk6ZYX3d1fnoAHQ9rEonMiSeu08DLCS19Ci_VmdqZsbcP2gQpn_6X_PZdKSuY3QpWBCRYNBCHp18 - tgbQ3ed_e5JxHm5bjSBvQ6WtfENGgUq_04pav3bBJtzK9dacSu4zoZgpiNBXdm8160vLgCYufDME6sXQjjxDYzQ8Nmwzun7ouVSRDbN229OHZeJPKRltZ2zRY4sYV0habA5TEk0Kx3NSQuZywYE8MmBeZ0xTPpQya64PR9 - amsOeEhFDw_310gs0TgR8TUeV_yXzI04hRyzEz9HlfDJn2JQ.Ermo9OPYpFUvdhUh.WmNQZzmP4dSwh15kRyWRooNkgRHdOjhjl909fckzi1Yxr9CU8HatH1qdPVadvFD5kstQBnMwyh - uluo5pTfSu5xBFd5r0LWHOHUQsLgKJ9jDnUGKrBOB2ZkSrpJ721j3numf7BhF2UnuMiylPnXaVMR6G - 6mLNSBqKhtOH4HCxvWH - dN_bXpnKEjf7QFboI9wDoiOOdnNiYM33X7MlInPMRAi_WeO36 - crNUl3cWm23T4MIFw5OcQN0vuCQtDOrhvB - aG57KKv_ngh8thmY1mnBkNcM_vo3HbIwlDJVBHWddfGuDopbryrr9IQmUgG2XvQvIN1jl0CX8YbtQMSTjFE2PZ2IcJoo2aDaavl - qmE3nHchRTG0AhBWP3GnGzau6aUyFCeaFSndeJYiqfWUNduourqHHyiDjlDmdSTtaguxXIhZVcJtZeXrpoUQhBRQzunJgzil - HXRD - 6VYd2Ud0Jb6FdiviT8rHV4Am - VayHUozjnDkMnLuVKk - VTk7O4BtykPlp94VL6AT1lAwoC1w2xsv6EqlprO8NOfdvNkEiA3BiogZ6ivRiqByqP02pLh93s9rpsk7ewlJe1ND9Vk8IgNG35_14rZeF0kbkS5aVgis0oZJl4 - DiBrv3v9Oy - QhssvkFq_dvI_oertfBFJmxlM - DTfeSO5KywS0wMi8zRty1vtnkC3p9ChRXjZiOTCLObia2HuwOa_MMUW3fp48e2yxmg4lZNfID_movdooea34NWsSWz1Iistqi541KhjVE_mkG0XIqJCt2QK_SZO27l01m - c - BH7AQsPVyNAREsRUBNDQE7VOZJ151OlfPD16o0FqJd79GoqfGbGOT2rZPGnXbwftpxbvq7eqrq1n5zwIPSUGkTuMMWPJ5IcEDcnq_W9n0euIF4I7fNg0Kzv72wwZNbmxQUvZVeEoRPlDl - 5qK0S2RepOpLHbsea_CQwlqAwRa__Wx8116uo2INBdt2Ate5hPyMhmofkR - 04LaM3TXK1tYhPhfcnAFyc267b_vmHpwTBiStyuclhI70fH2AYY55QEdq8WMkhaQwPSkpcpXW2ZS_zjGKELij20U2929sa8K6MboKDbiDjNLyzadVObSbmqcZhYeWpiqE6RY_gFXOoC1ablxyWmWFBAcwZqtQ7xvXUWU - WZPVHr6CVh1G5mZ9QXxzdNckJBsUFOZJHpH60gfdwLyz8pmwniygcIxIRCRsqzFPaWouXA4OZYLIR81tS7HQDXQAxZyO - zD9u4PfaUrpjRBjR3Vwua2aRD9bv.92e3xcspcl5x25uYTF_5uA