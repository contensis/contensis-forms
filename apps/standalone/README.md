# Contensis Form render standalone example

Contains a standalone html file running inside a simple web server that can render a form invoked by a script from a remote source

## Try it out

- Clone the [contensis/contensis-forms](https://github.com/contensis/contensis-forms) repository
- `cd` into the cloned project folder
- Run `npm install` to set up the project environment
- Run `npm run build` to build the packages in the project
- `cd` into the `apps/standalone` directory
- The details you need to update are in `index.html`
  - Update the `src` attribute in the `<script>` tag to the correct hostname for your environment
  - Set the required `data` attributes in the `<div>` tag
    - `data-contensis-form-project-id` the api id of the project containing the form to render
    - `data-contensis-form-id` the api id of the Contensis form to render
- Run `npm start` and open the browser link shown in your console to try out your form
