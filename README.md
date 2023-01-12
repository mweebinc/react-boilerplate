# MWeeb React Boiler Plate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and add
functionality to easily develop and deploy a mobile first web application.

ReactJS is client side framework to run in browser, MWeeb used nq-api to save and get the data from the server. You can
use other API like [parse-platform](https://parseplatform.org) or API you preferred.

## Software Architecture

Our design pattern inspired from MVP (Model View Presenter) pattern, but we don't have model class instead we use
JavaScript object to represent the data we implement this pattern to separate the UI and the logic for readable code and
testable.

* Single Responsibility - Make sure all our code has a single responsibility as possible.
* Dependency Injection - Inject the dependency from the outside to easy mock in testing.

### Concept

* Domain - Domain or entities the specific object model in our application.
* UseCase - The specific task in domain that we execute in presenter.
* View - The view is our component class page, JavaScript don't have interface so our component directly inject to our
  presenter.
* Presenter - All custom logic before we execute the use-case are here.

### Folder Structure

We use flat directory structure as possible.

#### Folders

* Base - All base class is here.
* Pages - All class Page store here.
* Components - All custom component not in nq-component are here.
* Domain - All use-cases are here.

#### Modules

* App - The root component handle the routing.
* BasePage - A parent class to all pages common function are here.
* AppContext - We use this module for global state.
* AppProvider - A subcomponent of the app and store the global state.
* WithRouter - A high order component use for navigation.
* Functions - All other custom function is in src folder.

## Best Practices

We develop as team, so we follow code conduct and best practices as possible.

### Naming Convention

Naming convention is no strict rule in Programming the most important thing is to be consistent and maka sure the names
you choose are clear, descriptive and easy to understand.

* Folders - Should use lowercase and use hyphens for space.
* Functions - Should start with lowercase and be a verb.
* Classes - Should start with uppercase and be a noun.
* Variables - Should start with lowercase.
* JS file - Should same with its content either class or function.
* Array - Should use plural names.
* Object - No strict rule whether to use singular or plural names it depend on the context.

#### Variables

* Boolean - Should begin with is, has, or add ed e.g, isEdit,hasValue,checked the default value of boolean is false so
  avoid using word with negative meaning as possible.
* Null - Use null instead of undefined to declare a null object.

### Comments

Used comment to easily remember and understand your code and for other developer who want to read your code.

We use JSDoc to generate a code documentation, so it's important that our comments are supported to JSDoc.

Must answer the following questions:

#### Functions

* What a function does?
* What are the function's parameters are?
* What a function returns?

#### Variable

Variable comment is optional add comment in variable if you have complex variable.

* What variable for?
* Type of the variable?

#### Class

* What class does?
* What are the properties of the class?
* What are the methods of the class?

## Technologies Used

- react - version 18.1.0 - The parent of all Component
- react-dom - version 18.1.0 - For dom manipulation
- react-router-dom - version 6.3.0 - Use for routing
- jest-dom - version 5.16.5 - Use for Unit testing
- nq-js - version 1.0.0 - Use for client side API
- nq-component - version 1.0.0 - Use for UI components

## Development

### Installation

* Fork this project and clone the fork on your local machine:

```sh
$ git clone https://repository.git
$ cd project # go into the clone directory
$ yarn install # install all the node dependencies
$ yarn run link # run all local link
$ yarn start link # start local development

```

### Testing

Testing in programming is important we use

#### Unit Testing

* We need to unit test our presenter and other custom functions.

## Production

* Docker - We used docker environment for consistent configuration.
* Nginx - We used nginx as HTTP server in docker environment to serve our HTML to the users.
* Git - We use git for easy transfer the build folder.
* SSH - We use ssh to remote access our server.

### Recommended Hardware

* Ubuntu 18
* Minimum of 20gb storage
* Minimum of 1gb ram
* Minimum of 1 CPU

### Deployment

```sh
$ yarn build # Build this project to our local machine.
$ git add . # add all changes to our git.
$ git commit -m "publish" # commit all changes
$ git push # push to the master
$ git clone repository.git # clone this project to our server
$ cd project # go into the clone directory
$ docker-compose up # run docker
```

### Maintenance

* If you have changes to our code you repeat the process of build, push then pull to our server no need to run or
  restart our docker container.

## Contribution

Contributors of this Project are welcome just fork this project make changes and submit pull request.

## Issues

If you want to file a bug click issues and click new issue and submit.

## Reference

* https://reactjs.org/docs/getting-started.html
* https://devopedia.org/naming-conventions
* https://www.serendipidata.com/posts/naming-guidelines-for-boolean-variables
* https://guides.lib.berkeley.edu/how-to-write-good-documentation
* https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp