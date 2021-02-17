# react-mui-auth-page

![GitHub forks](https://img.shields.io/github/forks/arpitbhalla/react-mui-auth-page?style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/arpitbhalla/react-mui-auth-page?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-mui-auth-page?style=flat-square) ![npm type definitions](https://img.shields.io/npm/types/react-mui-auth-page?style=flat-square) ![npm](https://img.shields.io/npm/v/react-mui-auth-page?style=flat-square) ![npm](https://img.shields.io/npm/dm/react-mui-auth-page?style=flat-square) ![NPM](https://img.shields.io/npm/l/react-mui-auth-page?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-mui-auth-page?style=flat-square) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-mui-auth-page?style=flat-square)

## Install

`npm i react-mui-auth-page`

## [Demo](https://react-mui-auth-page.surge.sh)

## Examples

#### Dialog

```js
import React from "react";
import { DialogAuth } from "react-mui-auth-page";
import Button from "@material-ui/core/Button";

const Dialog = () => {
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = ({ email, name, password }) => {
    console.log({ email, name, password });
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };
  const handleLinkedIn = () => {
    console.log("Do Linkedin call");
  };
  const handleGithub = () => {
    console.log("Do Github call");
  };

  return (
    <>
      <DialogAuth
        open={true}
        onClose={() => {}}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={{
          Linkedin: handleLinkedIn,
          Github: handleGithub,
        }}
      />
    </>
  );
};

export default Dialog;
```

## Local Run

```
npm install
```

```
npm run dev
```

## Contribute

Always Welcome, Open a PR
