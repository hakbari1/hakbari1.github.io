// TODO: fetch data from the postgreSQL database (to be implemented later)
function fetchGradeData(){
    // This function will query the PostgreSQL database and return grade data
    console.log("fetching grade Data...");
    // Create a new request for HTTP data
    let xhr = new XMLHTTPRequest();
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades"
    // when the request changes status, we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
        //check if we're done
        if(xhr.readystate === xhr.Done){
            //check if we're successful
            if(xhr.status !== 200){
                console.error(`could not get grades.
                    status: ${xhr.status}`
                );
            }
         // And then call the fuction to update the HTML with our data
         populategradebook(JSON.parse(xhr.responseText));  
        }

    }.bind(this)
    xhr.open("get", apiRoute, true);
    xhr.send();
}

// TODO: populate the table with grade data
function populategradebook(data){
    // This function will take the fetched grade data and populate the table
    console.log("populating gradebook with data", data);
}

// TODO REMOVE THIS
// CALL the stubs to demostrate the workflow
const gradedata = fetchgradeData();
populateGradebook(gradedata)
//END REMOVE