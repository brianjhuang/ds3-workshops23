# Data Science Student Society Workshops

This is a minimal website used by the workshops committee to host information, recordings, and upcoming workshops. It's maintained by Brian Huang and committee. 

## Overview

This application is a Simple React Appliation created using the `create-react-app` scaffold and written in Typescript (a typed version of Javascript).


More information on the scaffold can be found here: https://reactjs.org/docs/create-a-new-react-app.html


More information on Typescript can be found here, however it is fundamentally the same as Javascript with added type-enforcement: https://www.typescriptlang.org/

## Requirements
In order to run and be able to develop on the Workshops website you need to have Node installed on your local machine.

The install for Node can be found here: https://nodejs.org/en/

Node is a runtime environment for Javascript/Typescript and allows us to have access to a bunch of commands, similar to PIP for Python.

This app uses Node Version `18.12.1` (https://nodejs.org/dist/v18.12.1/node-v18.12.1.pkg)

## Forking the Repository
In order to modify/submit changes to the repository without being a collaborator, you need to FORK the repository, not clone it.

Forking detaches the repository so that you can have your own copy. It is not the same as CLONING a repository, which is connected the the original repository. Cloning is used when you have access to push/write permissions in a repository, however adding the entire committee to the repo is hectic and creating a fork and pull requests will develop skills you'll need in industry and when working on open source software.

To fork the repo, navigate to the header bar and click on the Fork button. After you have forked your repo, you can CLONE your fork into your local machine. To clone your repo click the green Code button in your FORKED repo and copy the link. Navigate to terminal and clone the repository into the folder you'd like.

Example:
```
git clone https://github.com/brianjhuang/ds3-workshops23.git
```

Note: This is the command to clone the main repo, you should replace this link with the link in your FORKED repository.

## Creating a branch so you can add your own changes
In order to make changes to the MAIN repo from your FORK, you need to make a branch in your fork. This branch is what will be sent back to the main repo for review and merging. 

To do this, BEFORE YOU MAKE ANY CHANGES, run the following in your Forked Repo Directory.
```
git pull
git checkout -b your-branchname
```

We ALWAYS want to pull new changes in from the main repo so that we can avoid any weird conflicts.

`git checkout -b` allows you to create a new branch and immediately move to it. 

`git branch` allows you to see all branches

`git checkout your-branchmae` allows you to move to the new branch.

NAME YOUR BRANCH AFTER YOUR CHANGE AND WITH YOUR NAME, an example: `brianhuang-added-pandas-workshop`

So my command to create my branch is:
`git checkout -b brianhuang-added-pandas-workshop`

## Modifying the WebPage
Since the webpage is built using React, all changes should be done by creating a React Component and appending it to the `App.tsx` file. This README does not cover fundamentals of React, but the React website has great tutorials for those interested in modiyfing the web page and creating your own components.

https://reactjs.org/

For those less familiar with Typescript and React, the website is set up in a low-code/no-code manner where modifying `workshops.json` and `options.json` should allow you to add/modify whatever you need to the page.
  
Data flows in from the two config files/JSON files into App.tsx, where it is then passed into the right component as a prop.

workshops.json -> App.tsx -> LastWorkshop -> Hosts
<br>
workshops.json -> App.tsx -> NextWorkshop -> Hosts
<br>
options.json -> App.tsx -> Dropdown

In `workshops.json` we can add a new workshop by adding an additional entry into the JSON object.
```
"IntroToPP": {
        "title": "Workshop Name",
        "date": "April 1st, 2022",
        "link_id": "(endOfYouTubeLink) dQw4w9WgXcQ",
        "image_placeholder": "image_path",
        "slide_links": "slide_link",
        "embed_desc": "Copy this from Notion!",
        "hosts": [
            {
                "host_name": "Loren Phillips",
                "button_type": "linkedin",
                "url": "linkedin.com"
            },
            {
                "host_name": "Brian Huang",
                "button_type": "linkedin",
                "url": "linkedin.com"
            }
        ],
        "next_workshop": "NextWorkShopID"
    }
```

In `options.json` we can add a new dropdown along with our new workshop by doing the same:
```
   {
        "key": "NextWorkShopID",
        "text": "Next Workshop (what shows up in the dropdown)",
        "value": "NextWorkShopID"
    }
```

Both of these changes need to be made in order to modify the website/add a new Workshop!

## Running your App Locally to Verify Changes
Running a React App is super simple!

By running `npm start` you can launch your React App on a local server.

Navigate to the repository folder in terminal/command line and run `npm start`

Here's an example:
```
cd Projects/ds3-workshops23
npm-start
```

On start, the website should launch to a localhost port, usually 3000 (so the URL looks like localhost:3000/ds3-workshops23).

## Making a Pull Request to Submit Changes

You've finished your changes! Now let's submit a pull request. 

Push your changes to your branch!
```
git add .
git commit -m "USEFUL COMMIT MESSAGE"
git push
```

We can use `git add .` to add everything we've done. 

The `.` specifies adding everything, but you can also specify a filename, like so: `git add workshops.json`. 

`git commit -m` commits and allows us to add a message. Make your commit message useful such as listing your changes. This makes changes easier to track. Example: "Added Pandas Workshop to website"

`git push` this sends your changes up to your branch~

Once this is finished, navigate to your repo, you should see a Pull Request button in green.

Click on that, fill out the info, and submit it for review!

Look through this tutorial for any commands I may have missed: 
https://opensource.com/article/19/7/create-pull-request-github

### Congrats! You submitted your changes! It will now be reviewed and merged in!
