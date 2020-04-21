# react-native-recaptcha-v3
react native recaptcha v3 component for React Native version +0.60

This component is based on https://github.com/acsant/react-native-recaptcha

# Requirements
`react-native-webview` 7.0+ is required for this component

## Usage
```
<ReCaptcha {...props} />
```

### Props

* `containerStyle` An object that specifies the display style for the reCaptcha badge.

* `siteKey` A string representing the siteKey provided in the Google reCaptcha admin console.

* `url` URL associated with the app (This is the domain url that you registered on Google Admin Console when getting a siteKey)

* `action` A string representing the ReCaptcha action (Refer to the ReCaptcha v3 document)

* `reCaptchaType`: Currently two types of reCaptchas are supported:
  * `invisible`: Invisible reCaptcha do not require the users to solve a challenge. Refer to the reCaptcha V3 documentation for further information
  * `normal`: Normal reCaptcha may often require the user to click on a "I am not a robot" checkbox and solve a challenge (reCaptcha V2) - NOTE: This is meant to be used only with the firebase projects since firebase doesn't yet support reCaptcha v3.

* `config`: Firebase project config found in the firebase console. This prop is only required when using the normal reCaptcha

* `onExecute` A function to handle the response of ReCaptcha. Takes in a parameter that represents the
response token from the ReCaptcha.

#### Thank-you for using `react-native-recaptcha-v3` 😀 Feel free to also leave any feedback or change requests you may have.
