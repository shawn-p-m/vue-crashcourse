# Vue Crash Course 
Download node if you don't have it installed already.

## Setup Frontend 
From the directory you want to make app in run the commands:
``` 
npm i @vue/cli -g 
```
``` 
vue create vue-crashcourse-myversion 
```



Choose the following when prompted:  
? Please pick a preset: Manually select features  
? Check the features needed for your project: Choose Vue version, Babel, Router, CSS Pre-processors, Linter  
? Choose a version of Vue.js that you want to start the project with 2.x  
? Use history mode for router? (Requires proper server setup for index fallback in production) No  
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)  
? Pick a linter / formatter config: Prettier  
? Pick additional lint features: Lint on save  
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files  
? Save this as a preset for future projects? No  
```
cd vue-crashcourse-myversion
```
```
npm install axios
```
```
npm run serve
```

## Setup Pseudo Server
Create file in root directory called data.json

Keep other terminal running and open a new terminal. Then put in the following commands from root:
```
npm i -g json-server
```
```
json-server --watch data.json
```








This command makes a dist folder that has all your files and folders necessary for deployment:
```
npm run build
```