# TemplatesInAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1. 
To see the live website visit: http://templatesinangular.s3-website-us-east-1.amazonaws.com/

## Prerequisites

This project requires Angular

### Node.js and npm

To get Node.js, go to nodejs.org

To check Node version, run `node -v` in a terminal/console window.

To check your npm version run `npm -v` in a terminal/console window.

### Angular CLI

`npm install -g @angular/cli`

## Instructions to run locally

### Step 1: Clone this repo
`git clone https://github.com/garri1105/templatesInAngular`
    
### Step 2: cd into directory and install dependencies
`cd templatesInAngular`

`npm install`

This can take a few minutes.

### Step 3: Serve the application
`ng serve --open`

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

## Design decisions

At first I thought about writing a simple python script and have the user interact the CLI. It was tempting because of the speed I would finish the project but it felt too simple and uncomfortable for the user. That's why I decided to go a little bit fancier and build an interactive website using Angular. It is a framework I feel comfortable with and it allows me to decompose my code into lots of easily maintainable and scalable components, which was one of the goals of this challenge.

After finishing a rough draft of my front end I thought about deploying the app with Bottle.py in order to have a back end that would grant me read and write access to my JSON files. This approach would mean that anyone wanting to run my program would need some version of python and a specific python library, on top of the already bloated Angular framework. This is why I decided to learn how to use AWS and share a link to the live website. I liked this idea because I had never used AWS and I thought it would be exciting to learn the basics.

I verified the correctness of my program by only visual input. Does the output change when I select a different guest, company or template? Does it ever break? No additional tests were performed.

I believe I checked every box in the assignment. If I had more time I would:
- Build tests that would check the validity of my program in a more efficient way than: "does it look good" and "does it break".
- Polish up the HTML and CSS, which is my favorite part.
- Make it possible to add more guests and companies directly from the front end. 
- Add more extra variables additional to {greeting}, both from the front end and from the codebase. It would give a lot of flexibility to the templates and it would make their creation a lot more speedy and efficient. 
- For a more ambitious goal it would be nice to have a Send button that redirects to an email/messaging app with the template as the Body of the message.
