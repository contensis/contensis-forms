# Contensis Forms

React render package for Contensis Forms

This repository is a monorepo / workspace and contains the following packages

- [**@contensis/forms**](https://github.com/contensis/contensis-forms/tree/main/packages/react) - [npm.js](https://www.npmjs.com/package/@contensis/forms)  
  _Render Contensis Forms with React_

## Embed a form in a non-React page

Forms can be embedded in any web page by including the required `<script>` tag and `<div>` tag.

Add the required `data` attributes to your `<div>` tag:

- `data-contensis-form-project-id` the api id of the project containing the form to render
- `data-contensis-form-id` the api id of the Contensis form to render

Example:
```html
<!doctype html>
<html lang="en">
  <head>
    <script type="module" crossorigin src="https://{your-cms}.cloud.contensis.com/app/ui/forms/forms.js"></script>
  </head>

  <body>
    <div data-contensis-form-project-id="website" data-contensis-form-id="contactForm"></div>
  </body>
</html>
```

### Customistion

All customisation options are added to the `<div>` tag via `data` attributes.

| attribute          | required | comments                                                                                                                                                                                     |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data-contensis-form-api        |          | The root url for clients to access the Forms API. You do not need this if you are invoking the script from a host where the Delivery API is also available. |
| data-contensis-form-id        | Y        | The API id of the form to render                                                                                                                                                             |
| data-contensis-form-language      |          | The language variation of the form to render                                                                                                                                                 |
| data-contensis-form-project-id     | Y        | The API id of the project containing the form to render                                                                                                                                      |
| data-contensis-form-version |          | Render the 'latest' or 'published' version of the form (default 'published')                                                                                                                 |

## Example project

You try this out with the [Standalone example project](https://github.com/contensis/contensis-forms/tree/main/apps/standalone)
