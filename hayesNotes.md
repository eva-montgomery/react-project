# Hayes Notes

Cool app! I like the idea and it has a fun design.

## Commits

See line 147 on `WineForm.js`. I did some reading on `URL.createObjectUrl()` and saw that a `revokeObjectUrl()` was required when using this method:
"Call this method when you've finished using an object URL to let the browser know not to keep the reference to the file any longer."
I added this method in the callback to this.setState() and it seemed to help.

In the handleSubmit function in `wineForm.js`, I added a function to reset the form, since the form itself does not have state and did not re-render when you reset the state of `wineForm.js`

## Vague Reccomendations

1. Clean up console.logs for frontend and backend
2. In production app, when I refresh or close the browser, my session is destroyed / I am automatically logged out. Perhaps on line 52 in `index.js` in the backend, you could add logic that checks if user is logged in (perhaps using requireLogin auth middleware below it) and if not, then redirect to log in page, else redirect to main dashboard. I think this code is making it so when I refresh or exit the browser, my session is destroyed and I am automatically logged out.
3. I can see the session secret in index.js in backend; perhaps you can use dotenv and env configs in your ec2 instance? No sensitive information should be visible on github.
4. Separate and import routes from a /routes folder using module.exports and require to help clean up index.js
5. Email login is case sensitive; also, not receiving any error messages for mistaken email / password, etc. Login feature should have more messaging (see mdBootstrap toasts and modals for UX ideas)
6. Inspecting the react components using the react inspection exrtension for goolge chrome, I see that the redux connections to local state are all "anonymous", and had trouble parsing the connections in general. I don't know redux very well, but is there a way to name these or to clean up the state tree somehow? It would make it easier to troubleshoot the app ;)
