# react-mui-auth-page

![npm](https://img.shields.io/npm/v/react-mui-auth-page?style=flat-square) ![npm](https://img.shields.io/npm/dm/react-mui-auth-page?style=flat-square) ![NPM](https://img.shields.io/npm/l/react-mui-auth-page?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-mui-auth-page?style=flat-square) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-mui-auth-page?style=flat-square)

## Getting Started :rocket:

`npm i react-mui-auth-page`

## Demo

[Web Demo](https://react-mui-auth-page.surge.sh)

[CodeSandbox](https://codesandbox.io/s/react-mui-auth-page-demo-i5yxe?file=/src/App.js)

## Usage

```js
import { DialogAuth, BoxAuth, FullWidthAuth } from "react-mui-auth-page";
```

## API's

| Prop Name     | Type                            | Required | Default Value |
| ------------- | ------------------------------- | -------- | ------------- |
| hideTabs      | Boolean                         | Yes      | False         |
| open          | Boolean                         | Yes      |               |
| onClose       | Function                        | Yes      |               |
| logoName      | string                          |          |               |
| logoComponent | React Children                  |          |               |
| handleSignUp  | Function                        | Yes      |
| handleForget  | Function                        | Yes      |
| handleSignIn  | Function                        | Yes      |
| handleSocial  | [Social Object](#Social-Object) |

### Social Object

| Prop Name | Type     |
| --------- | -------- |
| Linkedin  | Function |
| Github    | Function |
| Facebook  | Function |
| Twitter   | Function |

## ScreenShots

**With Tabs**

<img src='./example/Dialog with Tabs.png'>

**WithOut Tabs**

<img src='./example/Dialog without Tabs.png'>

#### Dialog

```js
import React from "react";
import { DialogAuth } from "react-mui-auth-page";

const MyDialogAuthComponent = () => {
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = ({ email, name, password }) => {
    console.log({ email, name, password });
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  const handleSocial = {
    Linkedin: () => {},
    Github: () => {},
    FaceBook: () => {},
    Twitter: () => {},
  };

  return (
    <DialogAuth
      open={true}
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

## Local Run

```
npm install
```

```
npm run dev
```

## Get Involved!

- Pull requests are welcome!
- Submit github issues for any feature enhancements, bugs or documentation problems

## Maintainer

[arpitBhalla](https://github.com/arpitbhalla)
