For Social Media App Project :-
--------------------------------------------------------------------------------------------------------------------------------------------------------------

what uses this project -> reactjs, firebase, material UI, express, react (with Redux). 

VS Code Extension -\
	1. Bracket pair colorizer\
	2. es7 react/redux/react-native/js snippets

Note :- '\' backslash used for line break.
---------------------------------------------------------------------------------------------------------------------------------------------------------------	

Part-1 

Firebase Setting -\
	1. Add new project with name "socailape"\
	2. go to functions tab and click on get started\
	3. open cmd and enter "npm install -g firebase-tools" \
	4. enter another command "firebase login"\
	5. goto directory socialape-functions and enter "firebase init"\
	6. choose socialape project\
	7. choose javascript\
	8. ESLint -> no\
	9. Install dependencied with npm -> yes\
	10. code .\
	11. make some change inside index.js inside function folder and in cmd write "firebase deploy".
	
	// for get Created documents in firebase collection (screams)
	12. Goto database nav bar and add collection named "screams" 
	13. Add documents manual with some data.
	14. make some changes in index.js under fuction folder then hit "firebase deploy" command.
	
	// for creating documents in firebase collection (screams)
	15. make function on index,js under fuction folder then hit "firebase deploy" command.
	16. goto postman and run with createScream url and create documents.
	
	Note-> we can use "firebase serve" because "firebase deploy" will take more time to deploy so "firebase serve" do changes locally by which we can test it quickly.
	
----------------------------------------------------------------------------------------------------------------------------------------------------------------

Part-2

Express & Response formating :-\
	1. cd functions and "npm install --save express".\
	2. do changes in index.js file.\
	3. Add dbschema.js file.
	
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
	
Part-3 User Authentication :-\
	1. Goto firebase dashboard and goto Authentication navBar.\
	2. goto sigin method and enable Email and Password option.\
	3. Now, goto Project Setting and click on "</>" icon and grab the firebase auth configuration.\
	4. goto terminal and "cd functions" and then "npm install --save firebase".  --> to signup and authenticate an user.\
	5. make update to index.js file.
	
	Note :-
		1. Firebase doesn't allow to store more info. regarding user by default.
		2. SO we create manually seperate collection to add further userDetails.
		3. We created 'users' collection to check whether user is registers or not.
		
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

Part-4 Validation & Login Route\
	1. update index.js file.\
	2. deploy to firebase and test it.

--------------------------------------------------------------------------------------------------

Part-5 Authentication Middleware\
	1. update index.js file\
	2. deploy to firebase and test it.

--------------------------------------------------------------------------------------------------

Part-6 Refactoring and orginising\
	1. create an folder "util" under function folder.\ 
	2. create an "admin.js" inside util folder.    -> for seperating admin work\
	3. create an "handlers" folder inside function folder.\
	4. create file 'screams.js' and 'users.js'     -> for seperating route works\
	5. create an 'config.js' under util folder	   -> for config string \
	6. create an 'fbauth.js' under util folder     -> for firebase authentication config.

-------------------------------------------------------------------------------------------------

Part-7 Image Upload\
	1. install 'npm install --save busboy'\
	2. update 'index.js'\
	3. goto 'Storage Tab' in firebase and add "allow read;" and click on "Publish" button.