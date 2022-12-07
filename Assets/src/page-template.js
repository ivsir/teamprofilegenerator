
// create the team
const generateTeam = (team) => {
  // create the manager html
  const generateManager = (manager) => {
    return `
<div id="manager-card" class="card employee-card">
    <h3 class="card-header bg-info ml-5" id="card-header">
        <li id="position">${manager.getRole()}</li>
        <li id="name">${manager.getName()}</li>
    </h3>
    <div class="card-body" id="cardBody">
        <ul class="list-group">
            <li id="engineerID" class="list-group-item">ID: ${manager.getId()}</li>
            <li id="engineerEmail" class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li id="office" class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
  </div>
</div>
        `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
<div class="card employee-card">
    <h3 class="card-header bg-info ml-5" id="card-header">
        <li id="position">${engineer.getRole()}</li>
        <li id="name">${engineer.getName()}</li>
    </h3>
    <div class="card-body">
        <ul class="list-group">
            <li id = "class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">🎓${intern.getName()}</h2>
        <h3 class="card-title"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Teko:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Poppins&family=Teko:wght@300;400&display=swap");
        </style>
        <title>Team Profile Generator</title>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossorigin="anonymous"
        ></script>
      </head>
        <body>
            <nav class="navbar navbar-expand-lg custom-navbar text-center">
            <p class="text-center" id="header">My Team</p>
            </nav>
            <div class="col-12 col-md-12">
                <section class="row justify-content-around" >
                    <div class="col-12 col-sm-6 col-lg-4">
                    ${generateTeam(team)}
                    </div>
                 </section>
             </div>
        </body>
    </html>

    `;
};
