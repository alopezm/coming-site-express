# Coming Site Express

Coming Site Express is a small utility to create sites that indicate the user that the page is under construction.

[![Travis Build](https://img.shields.io/travis/alopezm/coming-site-express.svg?style=flat-square)](https://travis-ci.org/alopezm/coming-site-express)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


## Getting Started

These instructions will get you a copy of Coming Site Express up and running on your local machine for development and testing purposes.


### Prerequisities

There aren't too many things to you need to set up to get Coming Site Express up and running.

All you need to set up is node.js and npm.
On Ubuntu, first make sure you have build-essential installed:
```
sudo apt-get install build-essential
sudo apt-get install nodejs
```

### Example

To test the code you only need to copy **src/examples/config.json** to **/config.json**

```
cp example/config.json config.json
npm i
npm run generate
```

Open in a browser **public/index.html**

## Running the tests

We are using commitzen and semantic release to manage our commits and package publishing.
So you will need to run the following to commit.
```
npm run commit
```
Note: The git hooks are still not set up properly, they will be up and runnign soon.

## Contributing

###Submitting an issue or feature request

If you find a bug or wish to make a feature request pleaes open an issue at [Github Coming Site Express Repo](https://github.com/alopezm/coming-site-express)

### Working on an issue:

If you think you can fix an issue or implement a feature, make sure nobody else is working on it by commenting on the issue and having a conversation there before beginning work on it. This is to avoid duplication of work.

## License

[MIT]

[MIT]: LICENSE.md
