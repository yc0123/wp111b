import { ChatGPTAPI } from 'https://esm.sh/chatgpt'

async function example() {
  // sessionToken is required; see below for details
  const api = new ChatGPTAPI({
    sessionToken: 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..dHMdv6WIwwUU1hBd.AwvrgUmzYJDu3ZbKDzewHs7EZZwDlOPyIdDz67LM68U8q5zx1ZLclp8sad8UpCQ3ugmEQSJxM3Hhbi-XTaRYWsYErOnpctA5PQ8bCxw2xTRwUJ5fM_ohJEdpib4-d8-CD99bxtZQuwoTKAIa6lXG45M7DMX4EPwDR7b8550QXaXQujRGTkxqkeKJDF7nZmdj8XYVAMJg0FedehxgtwjagnjXwVWQhJZN9-YzFCLsDOuiT9KRbQS-CWhJZKMKmqu-Q738c_ereAGooO8RdefN8qzKQqTIE8IahwlRwIdRWt_UNVnOw2qEiCXahB5ZhoU3eUuflO2W9u0Dt9jsdzJad94ZID1rsUWd-_gzC-WicIgkh8633UObcRwwAu0s7-tD1sT0GazvemBsg0qy6ondOHRLxQbtSg9F1M7D1bO715hYIIHIAIQ2YOfBCDIjAs2rXvqbAd9ThTsuLXt5xEOc2VDLY3zZZhTVu1zX7Xp-DK8mT4I59MxeVRL0sHoS_Yt5cjJqqbICKMwZVTtTPmz3h7oureyccyvluufVirvad5QnGhGofB-qF0NZXuaTNyQF4OTG9LNfi_OU5miwjaxzKLb2js_pli3GOJlE_QTGoa5gDKbGwV2Z3br9jaNEVG4MYchQnb_Z_iFoFX-l1GbqDdNKR3up7OcfteMiqYfmjMWniYDioOtRfHKHVmlvNEwsWyLpcWVYzU9KRr7h_fKpb7th01XPwNdZ3kqAKAcupGYTW56vFgJjFwafbi8R8RIokbXeRYy6m9OieRiOsrs2D_dsRhVjgtsypKxpWRkL70YkPOspk3V4jsF0QpT5cXyqGaNMpEnIczTxuUeBfdC65cZJX6UDwi2q1A1GUnCKVWuWPerPywrQYkrzKp5rW8mI8eUx8MB_F4jUDzKL5fIXQriHEJFA9f1VZBdJpDRJc7vxTjzJyGUeYuylzRWCf0t-XDVSAAzG1KiHZW7JIh4tn3uY-5Q_fs2WO9WeyD9CqpcugGdpQv9FJhaebRBQBqP2IBH2IoCObhw9_yq56eO03tM9Qj8LXKPhWVrnkhMc399nka3YD1NmbpG5qpaIOUNJRA_Rfj6_s1aLtL0NjUmV8AxkPywkcA3aPzCP72CzNFcd88OXTn0VLQLo5jvydQ2K-QjYUaHxN4n6pVSHDEFaeJHyRpmmZojYqM0PE7_37lFf5IhPt3y_dZye3t9tb0tv511AXntgVqFTfVL0RM6ELJrWJ8WzMYZOp-xFZAO0hpjpkTUdlE4Szcpzueowsiwv0FFw_WWlO27-FZeYY5lYR_xwJ92vGbVAVRYHSbASTf6X1XrcTfRJL-W_aEvywaoC2JPrM42LgN6rBIrMZf9QUhxKQmpBEAoleG5_HT8dkJhtd2Zg0KOvIfyuAq1zTheThERPnLHjEnIo-4Hb4EpkbVqfIAQxS9QsoewHauhUs8lJG-BmxlDkARR-ISLE1U6rqkL4ie0ghlHG256C-MD5V_t-PAkSqMHclVEMi_V8BCtvfWZuINiSRCGO7JfEhzrClpPGSZqd5eFqpmWN06K9thukeLc_2YdYtICSr15jF8j66htULMb7rTGgmLYDfbuvRmoRAoQdxGAIxnJXfvanC_X7qzYj9BhXGn2V3jdWNnd1SPd-XZssCBEWRPGM6QEzeaotk4uS0N-HNTN8bKtW202tXobhqd9cZmEW5jvpSOyn2bTHZsr_GKAy73ZCQS121lOVTkJthzYiBGzbfeA9h3rszXmez1C5n3TiiER0myzCAathaTZOEBQtx9W5eKtkFatiRsA6Qy4LMIP4mTyYDRXpEiTBWHTdjwyIlJS9norAbHsS_O4abYx0PWzh3hUQ7m2NZEo86IJ4ssj1y33-yUQ48-UvWAa5zTJZWlIf7DIO25qOR_rRN0ai5DR5WQ-rqBL1qmhqehTtqaKHE69hKBa5I_ZU5xA-RlUrVMFKICk37AcCQUHdg3kPxwZ_lgfmeLwqcummSxq1Mp-FWkS_7mFy5AIfxI7ABsts9Q3zvt-5YKmp5Ztl1DOwtXViKZtca7cOk12eiA9nL0gMtn0cGPrOD3ZnqV8FvEumDYAuvkyEN_oNSdcPAlg4WZl5MCt1_GdT1Ramc26enEOvzT2P_m62dNdfCEx0o-h6hqX0h3DEgIX5GcNoMi3kOnz5oSH0OWQLWYimDBWXFTBN6KUaMHuFYear0huTtmabmcFnOgc3Oqp6E8D4APJ2nM0kqyiSz9HMdlQBYnGltFe9Fb9uRTgmth83bbtgqijCSJbRZnkt2Tu1vywuAP58Jj0Lp288qcnfBokaxklnD_Fzko7qFQ_qa6CmWmdNsQ.GK8MZbNZlI2EVonXGp7Bvg'
  })

  // ensure the API is properly authenticated
  await api.ensureAuth()

  // send a message and wait for the response
  const response = await api.sendMessage(
    'Write a python version of bubble sort.'
  )

  // response is a markdown-formatted string
  console.log(response)
}