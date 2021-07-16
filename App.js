const SubBtn = document.getElementById('submit-btn');
const teamCard = document.getElementById('team-card');

SubBtn.addEventListener('click', function(x) {
    const fullName = document.getElementById('validationDefault01').value;
    const email = document.getElementById('validationDefault03').value;
    const userName = document.getElementById('validationDefaultUsername').value;
    const gander = document.getElementById('validationDefault04').value;
    const age = document.getElementById('validationDefault05').value;
    const address = document.getElementById('validationDefault05').value;

    console.log(fullName, email,userName,gander );
    const teamInfo = document.createElement("div");
    teamInfo.classList.add('col-md-5', 'team-info', 'card');
    teamCard.appendChild(teamInfo);

    const nameCreat = document.createElement('h2');
    nameCreat.innerText = "Name: " + fullName;
    teamInfo.appendChild(nameCreat);

    console.log(teamInfo)
    x.preventDefault();
});