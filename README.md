
# Cerf Feedback System

With this project, CERF Technology Solutions director members are able to provide feedback among themselves thorugh a user-friendly and practical web application. For now, it is only available in Portuguese language, since this website's target users and its work environment are portuguese speakers.

## Walkthrough

### Login

To provide feedback, users must be logged in first! For test purposes, login was simplified to simple click on the image who relates to the manager who wants to leave its feedback.

![Two ways of doing Login](https://i.imgur.com/cOAgffG.jpg)
![On the login page](https://i.imgur.com/wNDDVht.jpg)

### Feedback Evaluation

Once logged in, the manager can choose which other manager he is going to evaluate.
![Choosing the evaluation's target](https://i.imgur.com/1A2wvAX.jpg)

Having the evaluation's target been chosen, it is time to start the evaluation. There are three characteristics that will be evaluated form 1 to 5, and a comment can be left on each evaluation.

![Evaluation process](https://i.imgur.com/TRwEtkZ.jpg)

![]


### Checking your own results

Every manager can check what results he was given by other managers. to do this, just click on you profile photo on the top left corner of the screen.

![How to get on the Results page](https://i.imgur.com/ry5poqg.jpg)

To see your performance on one of the key aspects, click on the arrow beside it

![Click on the arrows](https://i.imgur.com/NG08xEg.jpg)
![The actual result](https://i.imgur.com/fAZJOHl.jpg)


## How it was developed?

This application was created using create-react-app. The state is controled React hooks, and the backend used was the google firebase to store the evaluation scores and comments. For deployment, google firebase was also used!