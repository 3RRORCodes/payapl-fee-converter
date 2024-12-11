# PayPal Fee Converter

A simple, web-based calculator to help you figure out PayPal fees and amounts in INR, created for personal use. I often struggled with calculating PayPal fees and converting amounts to INR, so I made this tool just for fun and to make life easier.

## Features
- Quickly calculates PayPal fees based on a fixed percentage and flat fee.
- Shows the net amount you'll receive after PayPal deductions.
- Suggests the amount to request to get your desired net amount.
- Converts the amounts to INR using a fixed exchange rate.
- Simple, clean design that's easy to use and fully responsive.

## Live Preview
Since I won't host this tool, you can use and preview it directly [here](https://htmlpreview.github.io/?https://github.com/3RRORCodes/payapl-fee-converter/blob/main/index.html).  

## Disclaimer
This tool is just for personal use and may not always be 100% accurate. PayPal fees and exchange rates depend on your country, payment methods, and other factors. The exchange rate used here is fixed and may differ from real-time rates provided by PayPal. Always double-check before making financial decisions.

## How to Use
1. Download or clone this repository.
2. Open the `index.html` file in any browser.
3. Enter the amount in the input field and see:
   - The PayPal fees.
   - The net amount you'll receive.
   - The amount to request to receive your desired amount.
   - The INR equivalent of the amounts.

## How It Works
1. **Fee Calculation**: 
   ```
   Fee = (Amount × 7.53%) + $0.30
   ```
2. **Net Amount**: 
   ```
   Net Amount = Amount - Fee
   ```
3. **Amount to Ask**: 
   ```
   Amount to Ask = (Desired Amount + $0.30) / (1 - 0.0753)
   ```
4. **INR Conversion**: 
   ```
   INR = USD × Exchange Rate (₹81.7056 per $1)
   ```

## Why I Made This
I used to face challenges calculating fees and conversions manually, so I created this fun little tool to simplify the process.

## Credits
Made by **3RROR** for personal use. Feel free to tweak it to fit your needs!
