function managerPage(manager) {
    return `<div class="card hovercard">
    <div class="cardheader">
        <div class="card-heading">
            ${manager.getName()}, ${manager.getRole()}
        </div>
    </div>
    <div class="card-body">
        <div class="desc">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
</div>`
}


function internPage(intern) {
    return `<div class="card hovercard">
     <div class="cardheader">
         <div class="card-heading">
             ${intern.getName()}, ${intern.getRole()}
         </div>
     </div>
     <div class="card-body">
         <div class="desc">
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${intern.getId()}</li>
                 <li class="list-group-item">Email: ${intern.getEmail()}</li>
                 <li class="list-group-item">School: ${intern.getSchool()}</li>
             </ul>
         </div>
     </div>
 </div>`
 }

 
 function engineerPage(engineer) {
    return `<div class="card hovercard">
        <div class="cardheader">
            <div class="card-heading">
               ${engineer.getName()}, ${engineer.getRole()}
            </div>
        </div>
        <div class="card-body">
            <div class="desc">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <a href="https://github.com/${engineer.getGithub()}">
                        <li class="list-group-item">Github</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>`
    }

 
 module.exports = { 
    managerPage,
    internPage, 
    engineerPage 
}