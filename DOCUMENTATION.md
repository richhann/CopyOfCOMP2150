# COMP2110 Task Manager - Starter Code

This project implements the COMP2110 Task Manager front end.  It is intended as a
sample solution to the main requirements for the assignment, however it does not
attempt to present a well-designed UI - proof of concept only, ugly CSS.

## Installation

The project has no external dependencies, it uses Lit via a CDN load directly into
the HTML page.   To view the pages you just need a web server such as the Live Server
from VSCode.  Open up the index.html page. 

## Backend Server

Your portal will make use of a server that we have implemented that is running on <https://comp2110-portal-server.fly.dev/>.   Documentation for the services it provides
is in [this Github repository](https://github.com/MQCOMP2110-2024/comp2110-taskmanager-server/).

## Starter Code

The code included here implements the basic framework for the application, including
an overall page structure and the main task manager, login and advertising components.  
If you run the application you will see the basic
page with space for a number of _widgets_.  

Your team will fill these slots with your own widgets. (A _widget_
is a name for an element of a graphical user interface, basically the same as a
component).  In your final page design, you can place widgets where-ever you 
like.

The module `config.js` exports a variable `BASE_URL` that contains the address
of the backend server. This is used for example in the task-manager component
to define the URL endpoint.  You may also want to use it if you make use of
other API endpoints from the server.

The code contains implementations of the following components:

### `<comp2110-task-manager>`

This is a container for the whole application and currently contains
some of the pre-defined widgets.  You can modify this as you see fit to achieve
your overall application layout and behaviour.

### `<widget-container>`

This component implements a container for widgets and can be used to define
the style information and layout for the group.  You can modify this if you
wish or replace it with something else.

### `<login-widget>`

This component implements a login form that will allow a user to authenticate to the
backend server.   If the user is logged in, the component displays their name and
a logout button rather than the form.  

Authentication is implemented in the `auth.js` module.  Once a user login succeeds,
the current user details are stored in the browser [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) so that
they persist over browser sessions.  In your code, you can use the function
`getUser()` from the `auth.js` module to find out if a user is logged in and get
their details.  

### `<task-manager>`

This component implements a task manager that can show tasks in multiple
categories on different boards.  Other components used are `<task-board>`
`<task-card>` and `<edit-task>`   It is a basic implementation that lacks
some features like being able to add new tasks.

### `<ad-widget>`

This component displays an advertisement from the backend portal server. You should not
modify it and it should appear somewhere in your page design.

### The `models.js` module

The `models.js` module implements an interface to task data accessed via the backend
API.  It exports a single object instance `TaskModel` that can be used to access task
data.  Examples of use can be seen in the `task-*` components.  To trigger loading
of task data from the API (in `task-manager.js`) call:

```javascript
 TaskModel.loadData();
```

To get a list of tasks in a category (in `task-board.js`):

```javascript
TaskModel.getTasks('Done');
```

To get details of a single task given the id (in `task-card.js`):

```javascript
TaskModel.getTask(22);
```

See the comments within `models.js` for details of other methods on the task 
model.  These should be enough to implement the widgets mentiond in the assignment
spec but you can extend the interface if you need to.


