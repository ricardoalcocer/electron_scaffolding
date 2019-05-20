# Electron Scaffolding

Empty electron project that provides a basic structure for native cross-platform desktop apps

![](http://drops.ricardoalcocer.com/drops/Screen%20Shot%202019-05-20%20at%202.02.24%20PM.png)

### Usage

1. Clone this repo by running `git clone git@github.com:ricardoalcocer/electron_scaffolding.git`
2. Install dependencies by running `npm install`
3. Start the project by running `npm start`
4. Package the app by running `npm run package-mac`

### Project structure

```
📁 assets
    📁 icons
        📁 darwin
            📄 icon.icns
        📁 png
            📄 16x16.png
        📁 win32
            📄 icon.ico
📁 bindings
    📄 mainwindow.js
📁 css
📁 fonts
📁 menus
    📄 mainwindow.js
📁 views
    📁 darwin
        📄 mainwindow.html
        📄 mainwindow.css
    📁 linux
        📄 mainwindow.html
        📄 mainwindow.css
    📁 win32
        📄 mainwindow.html
        📄 mainwindow.css
📄 .gitignore
📄 main.js
📄 package.json
📄 README.md
```

### TO DO

* Create `controllers` folder to store controllers for each view 
