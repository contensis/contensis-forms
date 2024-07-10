# Contensis Form render React example

Contains a standalone html file running inside a simple web server that can render a form invoked by a script built from TypeScript JSX source

## Try it out

- Clone the [contensis/contensis-forms](https://github.com/contensis/contensis-forms) repository
- `cd` into the cloned project folder
- Run `npm install` to set up the project environment
- Run `npm run build` to build the packages in the project
- `cd` into the `apps/react` directory
- add JSX props (guided by IntelliSense) to the `<ContensisForm>` component in `src/main.tsx`
  - alternatively try adding/updating `data` attributes in `index.html` (use with non-React apps)
- Run `npm start` and open the browser link shown in your console to try out your form
