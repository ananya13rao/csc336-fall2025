The URL to your deployed app on Render
What your app is and what it does
Which external libraries you used
Anything you would like me to know


did npm install express, no package.json or package-lock.json showed up


react is the front end, node/express is the back end. 


package.json

"scripts" : {
    "dev": "vite",
    "build": "vite build", 
    "postbuild": "cp -r dist/*../server/public" ,
    "lint": "eslint .", 
    "preview": "vite preview"
}