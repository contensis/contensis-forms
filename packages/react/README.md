# @contensis/forms

Render Contensis Forms in your React projects.

## Installation

Install with your project's preferred package manager

```sh
npm install --save @contensis/forms
```

```sh
yarn add --save @contensis/forms
```

## Usage

Render a Contensis Form with React

```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ContensisForm } from '@contensis/forms';

// Our React App
const App = () => {
  return (
    <div className="content">
      <ContensisForm
        apiUrl="https://api-{yourcms}.cloud.contensis.com"
        projectId="website"
        formId="contactForm" />
    </div>
  );
  // avoid CORS - omit apiUrl prop to make forms requests from your root domain (same as delivery api requests)
};

const element = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(element).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

```

## Customistion

All customisation options are available in the `<ContensisForm>` component props.

### API

Specify which Form to request from the Forms API

| prop          | required | comments                                                                                                                                                                                     |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiUrl        |          | The root url for clients to access the Forms API. Omit this prop if your app will be deployed to Contensis Cloud and you currently use a reverse proxy to make requests to the Delivery API. |
| formId        | Y        | The API id of the form to render                                                                                                                                                             |
| language      |          | The language variation of the form to render                                                                                                                                                 |
| projectId     | Y        | The API id of the project containing the form to render                                                                                                                                      |
| versionStatus |          | Render the 'latest' or 'published' version of the form (default 'published')                                                                                                                 |

### Render States

You can override built-in fallback components to render when the form is in a particular state

| prop     | required | comments                                                                        |
| -------- | -------- | ------------------------------------------------------------------------------- |
| disabled |          | Component to render when the Contensis Form is not enabled render               |
| error    |          | Component to render when the Contensis Form could not be retrieved from the API |
| loading  |          | Component to render when the Contensis Form is loading                          |

### Event Handlers

Handle or override specific form data and events

| prop            | required | comments                                                                   |
| --------------- | -------- | -------------------------------------------------------------------------- |
| onPopulate      |          | Populate the form with your own custom default values                      |
| onSubmit        |          | Call your own custom actions when a user has completed the form            |
| onSubmitError   |          | Called when there has been a problem submitting a user's completed form    |
| onSubmitSuccess |          | Call your own custom actions when a user has submitted a form successfully |

## Example project

You try this out with the [React example project](https://github.com/contensis/contensis-forms/tree/main/apps/react)
