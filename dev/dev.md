# Setting up the devlopment environment
We recomend using VScode for development

Requires the installation of the Windows Subsystem for Linux (wsl)
See: https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once installed type the command 'wsl' into the terminal in VScode 
(or if not using vscode press win+r and type 'wsl' into the run box)

Next, type 'cd dev' then run the script 'setup.sh' from your wsl terminal by typing 'sudo ./setup.sh'
Note: You may need to run the command 'sudo chmod 755 setup.sh' if you get any errors about not having permissions 

This script should handle installing the updates and packages required for running this project

# Creating new pages
This application uses react router to emulate having multiple "pages" while actually functioning as a single page application.

To add a new page 
1. In 'App.js' make sure to import the component that is to be your new page
2. Inside the 'Router' JSX tags in the render() function add a new 'Route' tag
3. Inside of this 'Route' tag include both the path and component prop. The path is the desired route for this 'page' and the component should be the react component that has been created for this 'page'

# Handling state
Each of the seperate pages uses the values stored in the state of 'App.js' when determining what values to display to the user.

To make sure that all the state is properly maintianed across the application
1. In the state of any new class that is created set the value to be based on the props
2. Create or use a function in 'App.js' that is passed down to the new component as a prop that updates the state of 'App.js'
3. Make sure to call this function that is passed down as a prop whenever the state is updated in the child component

# Third-party libraries used 
The following libraries are used in this project
1. Material-ui https://material-ui.com/
2. Fullcalendar https://fullcalendar.io/
3. ReactToPrint https://www.npmjs.com/package/react-to-print 
4. datebook https://datebook.dev
5. React Router https://reactrouter.com/ 


