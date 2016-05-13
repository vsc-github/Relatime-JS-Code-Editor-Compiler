# Relatime-JS-Code-Editor-Compiler

This is a clone of coderPad built using node.js , express.js , socket.io. sandbox.js

1. A user can create a new session or join an existing session.
2. Users in the same session can see real time changes in the code.
3. User can run the code they've written and see the output in the right pane.
4. All the output of the terminal is updated in real time

Important Files:

index.js https://github.com/mastercod3r/Relatime-JS-Code-Editor-Compiler/blob/master/index.js
  Initializes the app. Defines the routes and listens to different socket broadcasts.
  
room.ejs https://github.com/mastercod3r/Relatime-JS-Code-Editor-Compiler/blob/master/views/room.ejs
  Its an ejs template that contains the markup for the coding platform. Emits different events and data for compilation in the sandbox.
  
choose.ejs https://github.com/mastercod3r/Relatime-JS-Code-Editor-Compiler/blob/master/views/choose.ejs
  Takes input from user and creates a custom URL to be directed to a partiular room.
