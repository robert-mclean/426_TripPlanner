tickets = []

var body; 

var buildItenerary = function(){

    body = $('body'); 
    body.empty(); 

    var header = $('<h1 id= "mainItenerary"> My Tickets </h1>');
    
    var ticketDiv = $('<div id="ticketHolder"></div>');

    


  

    var backHome = $('<button id="backHome">Go Back Home</button>').click(() =>{homePage(user);});
    body.append(backHome);
    body.append(header);
    body.append(ticketDiv);  

    $.ajax(root_url + `tickets?filter[user_id]=${userId}`, 
    {   type: 'GET', 
        xhrFields: {withCredentials: true}, 
        data: {},
        success: (response) => { 
            tickets = response; 
            populateTickets();

        }
    });



    

}


var populateTickets = function(){

    console.log(tickets.length); 
    for(let i = 0; i < tickets.length; i++){
        var fname = tickets[i].name; 
        var gender = tickets[i].gender; 
        var age = tickets[i].age;
        console.log(age); 
        alert("this works"); 

        var tempDiv = $('<div id="tickethehe"></div>');

        tempDiv.append(age); 
        body.append(tempDiv); 

    }

    

}