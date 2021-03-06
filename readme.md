# Cheesy

*Browserify your code and run it in it's own [Thrust](https://github.com/breach/thrust) browser window.*

## Example

```
cheesy main.js 800 600
```

This will browserify your js, wrap it in an html template, and then open it an a thrust browser window with width 800 and height 600.

Specifying the width and height is optional.

## Install

```
npm install -g seanewest/cheesy
```

## Usage

```
cheesy entry.js [width] [height]
```

## Pipeline Friends

Cheesy is just a composition of [browserify](https://github.com/substack/node-browserify), [jstohtml](https://github.com/seanewest/jstohtml), and [thrust-cat](https://github.com/seanewest/thrust-cat), which you can all run from the command line in a pipeline:

```
cat index.js | browserify - |  jstohtml | thrust-cat 200 400
```
