const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const appendFileAsync = util.promisify(fs.appendFile);

const render = require("./lib/htmlRenderer");

const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your manager's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "officeNumber",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your intern's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What school does your intern attend?",
    name: "school",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineer's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github",
  },
];
const nextTeamMember = {
  type: "list",
  message: "What type of employee would you like to add next?",
  name: "Next",
  choices: ["Software Engineer", "Intern", "No more employees to add"],
};

async function nextMember() {
  let newMember = await inquirer.prompt(nextTeamMember);
  switch (newMember.Next) {
    case "Software Engineer":
      let engineerAnswers = await inquirer.prompt(engineerQuestions);
      let engineerArr = [];
      let engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      engineerArr.push(engineer);
      let htmlEngineer = render(engineerArr);
      appendFileAsync("./output/team.html", htmlEngineer);
      // console.log(engineerAnswers.name);
      nextMember();
      break;
    case "Intern":
      let internAnswers = await inquirer.prompt(internQuestions);
      let internArr = [];
      let intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      internArr.push(intern);
      let htmlIntern = render(internArr);
      appendFileAsync("./output/team.html", htmlIntern);
      nextMember();
      break;
    case "No more employees to add":
    default:
      return;
  }
}

// async function IQ(questionType) {
//   let name = await inquirer.prompt(questionType);
//   // return name;
//   // console.log(name);
//   nextMember();
// }

async function init() {
  try {
    let managerAnswers = await inquirer.prompt(managerQuestions);
    let managerArr = [];

    let manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    managerArr.push(manager);
    // console.log(managerArr);
    let html = render(managerArr);
    appendFileAsync("./output/team.html", html);
    // console.log("success");

    nextMember();
  } catch (err) {
    console.log(err);
  }
}

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// async function init() {
//   console.log("running");
//   try {
//     const response = await inquirer.prompt(questions);
//     const data = { ...response };

//     const html = render(data);

//     writeFileAsync("index.html", html);
//     console.log("success");
//   } catch (err) {
//     console.log(err);
//   }
// }

// init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// const questions = [
//   {
//     type: "input",
//     name: "managerName",
//     message: "Enter name of Manager: ",
//   },
//   {
//     type: "input",
//     name: "managerId",
//     message: "Enter ID of manager: ",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message: "Enter email of manager: ",
//   },
//   {
//     type: "input",
//     name: "managerOffice",
//     message: "Enter office number of manager: ",
//   },
//   {
//     type: "input",
//     name: "engineerName1",
//     message: "Enter name of engineer number 1: ",
//   },
//   {
//     type: "input",
//     name: "engineerId1",
//     message: "Enter ID of engineer number 1: ",
//   },
//   {
//     type: "input",
//     name: "engineerEmail1",
//     message: "Enter email of engineer number 1: ",
//   },
//   {
//     type: "input",
//     name: "engineerGithub1",
//     message: "Enter GitHub Username of engineer number 1: ",
//   },
//   {
//     type: "input",
//     name: "engineerName2",
//     message: "Enter name of engineer number 2: ",
//   },
//   {
//     type: "input",
//     name: "engineerId2",
//     message: "Enter ID of engineer number 2: ",
//   },
//   {
//     type: "input",
//     name: "engineerId2",
//     message: "Enter email of engineer number 2: ",
//   },
//   {
//     type: "input",
//     name: "engineerGithub2",
//     message: "Enter GitHub Username of engineer number 2: ",
//   },

//   {
//     type: "input",
//     name: "engineerName3",
//     message: "Enter name of engineer number 3: ",
//   },
//   {
//     type: "input",
//     name: "engineerId3",
//     message: "Enter ID of engineer number 3: ",
//   },
//   {
//     type: "input",
//     name: "engineerEmail3",
//     message: "Enter email of engineer number 3: ",
//   },
//   {
//     type: "input",
//     name: "engineerGithub3",
//     message: "Enter GitHub Username of engineer number 3: ",
//   },

//   {
//     type: "input",
//     name: "internName",
//     message: "Enter name of Intern: ",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message: "Enter ID of Intern: ",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "Enter email of Intern: ",
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "Enter school of intern: ",
//   },
// ];
