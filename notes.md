### webpack used for bundle script, assets, css-modules.

webpack for installing webpack , webpack-cli for using webpack cmd by using terminal and ts loader which teaches webpack how to complile ts into js, --D for saving as devDependecy

for working webpack we have to also install typesctipt as devDependecy.

public folder can be also dist folder

In order to tell webpack how to compile our code we need to creeate config.js file


write code 
then go to package.json script then add  "build": "webpack",

webpack dev server for live reload 'npm i webpack-dev-server -D'

then create a script for that  serve: 'webpack-dev-server'
fire npm run serve

source map establish the link between source fil which is ts file and bundle.js file
the real benifits by using source map if an error occurs then it will show error in your ts not in bundle.js file



tsc --init
npm init
npm i webpack webpack-cli ts-loader --D