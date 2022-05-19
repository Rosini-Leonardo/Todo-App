# Todo App
<img width="1439" alt="app image" src="https://user-images.githubusercontent.com/96723681/166712355-dfbbce66-39ed-44a5-8df7-0b4d4f30e9a5.png">

> This is a full-stack application built to showcase my skills in programming fully dynamic web applications.

#
# How was it made?
It was created with the help of various technologies derived from the programming languages 
that I use most python and javascript, but also with HTML5 and CSS.

1. Front-end
     - styled-components
     - Bootstrap
     - React
     - react-icons

2. Back-end
     - Django
     - SQLite

3. Other dependecies
     - Webpack
     - Babel
     - webpack-dev-server
     - css-loader
     - style-loader
     - html-webpack-plugin


## How to make it work?
To initialize the Web App on your browser in localhost you must first install the zip from GitHub and then extract the project.
Then go to **todo/settings.py** and modify the _ALLOWED_HOSTS=[]_ section by adding the 
IP address of your machine (to show it run ifconfig/ipconfig, depend on what OS you are using).

Finally run `python3 manage.py runserver yourIPaddress`
