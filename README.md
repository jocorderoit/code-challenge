# Getting Started with Create React App

This project for the frontend coding challenge

## Project Notes

1. The frontend project is built with React and use Reack Hook to manage state/contect.
2. Folder Components: major components include LandingPage, PostTable, CommentTable, and NewCommentForm.
3. Folder Helpers: api, additional helper functions, and defined types are in this folder.
4. Folder hook: app context and session are defined in this folder.
5. Since this project only have "posts" and "comments", instead of using router and break posts/comments into two pages, the project use Modal to display comments as well as a form to add new comment.
6. Note that once the page is refreshed, all the new added comments will be gone since these new ccomments should be stored into a real database but now just temporality be stored into app context

## Project Functionalities

1. When the page is loading, retrieve data from calling posts/comments api and store them into app context.
2. All the posts data will be listed on the landing page. Each row will have 2 links at the last two columns: view (comment), add (comment)
3. Click "view", the corresponding comments that have the some postId will be displayed in the popup modal.
4. Click "add", a form to add new comment will be displayed in the popup modal. The buttom will only be enable when all three fields are filled (No additional validation is implemented at this point).
5. New comment's id is getting the biggist id from the existing comments, and then add 1. The new comment will be added into comments in the app context. User can click "view" to see the new added comment

## Available Scripts

In the project directory, you can run:

### `npm i`

Please run this comment in order to install all the required packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
