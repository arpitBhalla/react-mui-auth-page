# react-mui-auth-page

![npm](https://img.shields.io/npm/v/react-mui-auth-page?style=flat-square) ![npm](https://img.shields.io/npm/dm/react-mui-auth-page?style=flat-square) ![NPM](https://img.shields.io/npm/l/react-mui-auth-page?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-mui-auth-page?style=flat-square) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-mui-auth-page?style=flat-square)

## Getting Started :rocket:

`npm i react-mui-auth-page`

## Demo

[Web Demo](https://react-mui-auth-page.surge.sh)

[CodeSandbox](https://codesandbox.io/s/react-mui-auth-page-demo-i5yxe?file=/src/App.js)

## Usage

```js
import { DialogAuth } from "react-mui-auth-page";
```

### Example

```js
import React from "react";
import { DialogAuth } from "react-mui-auth-page";

const MyDialogAuthComponent = () => {
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = async ({ email, name, password }) => {
    await doSomethingAsyn();
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  const handleSocial = {
    Google: () => {},
    Github: () => {},
  };

  return (
    <DialogAuth
      open={true}
      textFieldVariant="outlined"
      onClose={handleClose}
      handleSignUp={handleSignUp}
      handleForget={handleForget}
      handleSignIn={handleSignIn}
      handleSocial={handleSocial}
    />
  );
};

export default MyDialogAuthComponent;
```

## Props

| Prop Name         | Type                                 | Required | Default Value |
| ----------------- | ------------------------------------ | -------- | ------------- |
| hideTabs          | Boolean                              | Yes      | False         |
| textFieldVariant  | "outlined" or "filled" or "standard" | No       | filled        |
| open              | Boolean                              | Yes      |               |
| onClose           | Function                             | Yes      |               |
| logoName          | string                               |          |               |
| logoComponent     | React Children                       |          |               |
| handleSignUp      | Function                             | Yes      |
| handleForget      | Function                             | Yes      |
| handleSignIn      | Function                             | Yes      |
| emailValidator    | Function                             |
| passwordValidator | Function                             |
| handleSocial      | [Social Object](#Social-Object)      |

### Social Object

| Prop Name | Type     |
| --------- | -------- |
| Google    | Function |
| Linkedin  | Function |
| Github    | Function |
| Facebook  | Function |
| Twitter   | Function |

## Local Run

```
npm install
```

```
npm run dev
```

## ScreenShots

**With Tabs**

<img src='./example/Dialog with Tabs.png' width='70%'>

**WithOut Tabs**

<img src='./example/Dialog without Tabs.png' width='70%'>

## Get Involved!

- Pull requests are welcome!
- Submit github issues for any feature enhancements, bugs or documentation problems

## Maintainer

[arpitBhalla](https://github.com/arpitbhalla)
