People Counter App
==================

A simple web application to count and track the number of people entering a place. Built using HTML, CSS, and JavaScript.

Features
--------

*   Increment count
    
*   Decrement count
    
*   Save previous entries
    
*   Reset counter after saving
    
*   Simple and clean user interface
    

Tech Stack
----------

*   HTML
    
*   CSS
    
*   JavaScript (DOM Manipulation)
    

Project Structure
-----------------

*   index.html — Main structure of the application
    
*   style.css — Styling of the UI
    
*   index.js — Logic for counter functionality
    

How It Works
------------

*   Clicking "INCREMENT" increases the count
    
*   Clicking "DECREMENT" decreases the count
    
*   Clicking "SAVE" stores the current count and resets it
    
*   Saved entries are displayed on the screen
    

Core Logic
----------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   let count = 0  function increment() {      count++      document.getElementById("count").innerText = count  }  function decrement() {      count--      document.getElementById("count").textContent = count  }  function save() {      let saveEl = document.getElementById("save-el")      saveEl.textContent = saveEl.textContent + count + " - "      count = 0      document.getElementById("count").textContent = count  }   `

How to Run
----------

1.  Download or clone the project
    
2.  Open index.html in any browser
    

Possible Improvements
---------------------

*   Prevent negative count values
    
*   Store data using localStorage
    
*   Improve UI with animations and better styling