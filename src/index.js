/* eslint-disable comma-dangle */
import List from './list';
import Task from './task';
import displayTasksForList from './listMethods';
import showLists from './appNav';

window.document.title = 'To-Do-List - Gene Mecija';

// Setup example lists and tasks
const firstList = new List('Become Rich');
const task1 = new Task(
  firstList.id,
  'Dig for gold',
  'There must be some gold left. Better start digging',
  '2019-12-01',
  'Money'
);
firstList.taskList[task1.id] = task1;
const task2 = new Task(
  firstList.id,
  'Find change',
  'Look in couch cushions for loose change',
  '2019-11-27',
  'Money'
);
firstList.taskList[task2.id] = task2;

const secondList = new List('Eat Healthy');
const task3 = new Task(
  secondList.id,
  'Buy Vegetables',
  'Consider buying vegetables instead of ice cream',
  '2023-01-01',
  'Food'
);
secondList.taskList[task3.id] = task3;

// Load examples into localStorage
localStorage.setItem('allLists', JSON.stringify([firstList, secondList]));

// Set up app layout
const body = document.querySelector('body');

const appWindow = document.createElement('div');
appWindow.classList.add('appWindow');
body.appendChild(appWindow);

const appNav = document.createElement('div');
appNav.classList.add('appNav');
appWindow.appendChild(appNav);

const appContent = document.createElement('div');
appContent.classList.add('appContent');
appWindow.appendChild(appContent);

// Get localStorage data
let allLists = [];
allLists = JSON.parse(localStorage.getItem('allLists'));

// Populate appNav with lists
appNav.appendChild(showLists());
// Populate appContent with the first list's tasks
appContent.appendChild(displayTasksForList(allLists[0]));
