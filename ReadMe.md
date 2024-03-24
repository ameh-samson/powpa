# Instruction for setup

- run npm install sass --save-dev to install sass

- then add this to your package.json file. the watch ensures you see any changes you make in the scss in your browser. Note that you can also customize your path.

```
{
  "scripts": {
    "compile:sass": "sass --watch src/scss/main.scss src/css/style.css"
  }
}

```
