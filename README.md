# MWeeb React Boiler Plate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and add
functionality to easily Develop and Deploy a Mobile First Web Application.

ReactJS is Client Side Framework to run in browser, MWeeb used nq-api to save and get the data from the server. you can
use other API like [parse-platform](https://parseplatform.org) or API you prepared.

## Software architecture

Our design pattern inspired from MVP (Model View Presenter) pattern, but we don't have model Class instead we use
Javascript Object to represent the data we implement this pattern to separate the UI and the logic to for readable code
and testable.

* Single Responsibility - Make sure all our code has a single responsibility as possible.
* Dependency Injection - Inject the dependency from the outside to easy mock in testing.

### Concept

* Domain - Domain or entities the specific Object Model in our Application.
* UseCase - Rhe specific task in domain that we execute in Presenter.
* View - The view is our Component Class Page, Javascript don't have interface so our component directly inject to our
  Presenter.
* Presenter - All custom logic before we execute the use-case are here.

### Folder Structure

We use flat directory structure as possible

#### Folders

* base - All base class is here.
* pages - All Class Page store here.
* components - All custom component not in nq-component are here.
* domain - All use-cases are here.

#### Modules

* App - The Root Component Handle the routing.
* BasePage - A Parent Class to all Pages common function are here.
* AppContext - We use this module for global state.
* AppProvider - A subcomponent of the App and store the global state.
* withRouter - A high order component use for navigation.
* Functions - All other custom function is in src folder.

## Best Practices

We develop as team so we follow code conduct and best practices as possible.

### Naming Convention

* folders - Should use lowercase and use hyphens for space.
* functions - Should start with lowercase and be a verb.
* classes - Should start with uppercase and be a noun.
* variables - Should start with lowercase.
* js file - Should same with its content either class or function.

#### Variables

* boolean - Should begin with is, has, or add ed e.g, isEdit,hasValue,checked the default value of boolean is false so
  avoid using word with negative meaning as possible.
* null - Use null instead of undefined to declare a null object.

### Comments

Used comment to easily remember and understand your code and for other developer who want to read your code.

We use JSDoc to generate a code documentation, so it's important that our comments are supported to JSDoc.

#### functions

* What a function does
* What are the function's parameters are
* What a function returns

#### Variable

Variable comment is optional add comment in variable if you have complex variable.

* What variable for
* Type of the variable

#### Class

* What class does
* What are the properties of the class
* What are the methods of the class

## Technologies Used

- react - version 18.1.0 - The parent of all Component
- react-dom - version 18.1.0 - For dom manipulation
- react-router-dom - version 6.3.0 - Use for routing
- jest-dom - version 5.16.5 - Use for Unit testing
- nq-js - version 1.0.0 - Use for client side API
- nq-component - version 1.0.0 - Use for UI components

## Development

### Installation

first clone this package

```
git clone https://repository.git
```

then goto the folder

```
cd sushi-admin
```

install all dependency

```
yarn install
```

run all local link

```
yarn run link
```

start local development

```
yarn start
```

### Testing

Testing in Programming is important we use

#### Unit Testing

* We need to unit test our presenter and other custom function.

## Production

* Docker - We used docker environment for consistent configuration.
* Nginx - We used nginx as HTTP server in docker environment to serve our HTML to the users.
* Git - We use git for easy transfer the build folder.
* SSH - We use ssh to remote access our server.

### Recommended Hardware

* ubuntu 18
* minimum of 20gb storage
* minimum of 1gb ram
* minimum of 1 CPU

### Deployment

build this project to our local machine.

```
yarn build
```

add all changes to our git

```
git add .
```

commit all changes

```
git commit -m "publish"
```

push to the master

```
git push
```

clone this project to our server

```
git clone repository.git
```

goto this folder and run docker

```
cd your-project
docker-compose up
```

### Maintenance

* If you have changes to our code you repeat the process of build, push then pull to our server no need to run or
  restart our docker container.

## Contribution

Contributors of this Project are welcome just fork this project make changes and submit pull request.

## Issues

if you want to file a bug click issues and click new issue and submit.

## Reference

* https://reactjs.org/docs/getting-started.html
* https://devopedia.org/naming-conventions
* https://www.serendipidata.com/posts/naming-guidelines-for-boolean-variables
* https://guides.lib.berkeley.edu/how-to-write-good-documentation
