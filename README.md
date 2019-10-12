# my-fullstack-typescript-app
My fullstack ReactJS/Express/Typescript application for self-introduction.

This project is a simple fullstack application that allows users to select and watch dog images of different breeds and sub-breeds.
The data(breeds & images) is provided from [Dog CEO website](https://dog.ceo/).

This project is used as a self technical introduction. It meets almost all the acceptance criteria in the requirements doc.

# How to Run
1. Clone source code by `git clone https://github.com/glenlivet/my-fullstack-typescript-app.git`.
2. Install the dependencies by `npm install`.
3. Build the distribution by `npm run build:backend && npm run build:frontend`.
4. Simply run the server by `npm run start`. Alternatively, one can start dev mode by `npm run dev` and do test by `npm run test`.
5. Enter the default url http://localhost:3000/.

# Project Structure
- Root
  - src (the source code location)
     - web (the runtime code)
       - constants (hold constants)
       - exceptions (defines exceptions)
       - frontend (hold ReactJS code)
         - components (ReactJS components)
         - main.tsx (front-end entry point)
       - models (hold data models)
       - routes (hold Express routes)
       - services (hold business services)
       - utils (utilities)
       - web.ts (back-end entry point)
     - tests (the tests)
  - public (the place to hold static files)
  - node_modules
  - dist (distribution)

# Have Done
* A backend API is created to fetch all breed list in the format requested. The default URL is: http://localhost:3000/api/breeds .
* A integration test is created for the breedList service, and get passed.
* A backend API is created to fetch breed images as well as the sub-breed's. The default URL is: http://localhost:3000/api/images/{breed}(/{sub-breed}?) .
* Two select actions are implemented, one for breed selection and another for sub-breed.
* The related images are displayed whenever a breed or sub-breed is selected.
* The entire website is responsive, and the style changes when the width size crosses the threshold(480px, the common Smartphones' Portrait width).


# To be continue
* Due to time limit, currently the testing coverage is still relatively low.
* It would be better to custom the style of the native **Select** component.
* Docker config has not been set yet.
* NodeJS along with ExpressJS has some Production configurations that can improve the entire application in Production env. Currently it is still in Dev env.
* It would make more sense to keep all `state` values in `App` Root Component. Yet, currently the `SelectGroup` component is functioning more like the traditional `App` component.
* In larger scale projects, it probably would make sense to include Saas/Stylus/Less to make CSS easier for maintenance and re-use.
* In larger scale projects, it probably would make sense to include a Routing framework which is not included in ReactJS be default.
* In larger scale projects, it would benefit if a cache layer is added.


# Technologies Used
The technologies used in this project includes:
* Typescript/Javascript (Language)
* ExpressJS (Web Server)
* ReactJS (Frontend Visualization)
* chai & mocha (testing)
* jest & fetch-mock (testing)
* webpack (packaging)
* nodemon (dev-kit)
* scaffold (https://github.com/atomAltera/my-fullstack-typescript-app-scaffold)
