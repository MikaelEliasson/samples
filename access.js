fetch('/settings/user')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    window.companies = myJson.CompanyMemberships;
    console.log(window.companies)
  });

windows.companies.forEach(c => console.log(c.CompanyId));


window.companies.forEach(c => { 
console.log(c.CompanyId);
var data = {Email: 'mikael+dev1@bokio.se', MembershipType: 1140101039 };

fetch('/' + c.CompanyId + '/Settings/Users/Invite', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())

});
