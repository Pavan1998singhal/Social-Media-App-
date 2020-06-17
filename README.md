# Social-Media-App-
Build a social media app using React, Redux, Node, Express and Firebase.


For Social Media App Project :-

what uses this project -> reactjs, firebase, material UI, express, react Redux, 


VS Code Extension -
	Bracket pair colorizer
	es7 react/redux/react-native/js snippets
	
Firebase Setting -
	1. Add new project with name "socailape"
	2. go to functions tab and click on get started
	3. open cmd and enter "npm install -g firebase-tools" 
	4. enter another command "firebase login"
	5. goto directory socialape-functions and enter "firebase init"
	6. choose socialape project
	7. choose javascript
	8. ESLint -> no
	9. Install dependencied with npm -> yes
	10. code .
	11. make some change inside index.js inside function folder and in cmd write "firebase deploy".
	
	// for get Created documents in firebase collection (screams)
	12. Goto database nav bar and add collection named "screams" 
	13. Add documents manual with some data.
	13. make some changes in index.js under fuction folder then hit "firebase deploy" command.
	
	// for creating documents in firebase collection (screams)
	14. make function on index,js under fuction folder then hit "firebase deploy" command.
	15. goto postman and run with createScream url and create documents.
	
	Note-> we can use "firebase serve" because "firebase deploy" will take more time to deploy so "firebase serve" do changes locally by which we can test it quickly.
	
Express & Response formating :-
	1. cd functions and "npm install --save express".
	2. 