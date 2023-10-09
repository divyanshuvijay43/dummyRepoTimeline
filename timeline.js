window.onload = displayLogsData; 
async function displayLogsData(){
    // $.getJSON("logsData.json",function (data){
    //     $.each(data,function(key,value){
    //         console.log(key+"->" + value);
    //     })
    // })

    // fetch("/mathworks/devel/sbs/31/dvijayve.dvijayveVisualizeLogs/visualizeLogs/viewLogs/logsData.json",{
    //  mode:'no-cors',
    // })
    // .then((res) =>{
    //     console.log(res);
    //     // // result = res.json();
    //     // if(!res.ok){
    //     //     console.log('error');
    //     // }
    //     return res.json();
    // })
    // .then((jsondata) =>{
    //     console.log(jsondata);
    // });

// const reader = require('fs');

// fs.readFile('/mathworks/devel/sbs/31/dvijayve.dvijayveVisualizeLogs/visualizeLogs/viewLogs/output.xml'),(err,data) => {
//     if (err) throw err;
//     console.log(data);
// }


// fetch('/mathworks/devel/sbs/31/dvijayve.dvijayveVisualizeLogs/visualizeLogs/viewLogs/output.xml',{mode:'no-cors'})
// .then(response => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.text();
// })
// .then(data => {
//     // Parse the XML data
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(data, "text/xml");
    
//     // Access and manipulate the XML data as needed
//     const xmlString = new XMLSerializer().serializeToString(xmlDoc);
    
//     console.log(xmlString);
//     // Display the XML data
//     // document.getElementById("xmlData").textContent = xmlString;
// })
// .catch(error => {
//     console.error("Fetch error:", error);
// });

//     const response = await fetch("https://reqbin.com/echo/get/json",{
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     }
// });

fetch("C:/Users/dvijayve/OneDrive-MathWorks/Desktop/FTE_DVJ/Project/VisualizeLogs/data.JSON",{
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
.then(res => res.json())
.then((result) => {
    console.log(result);
})



    // .then(function(response){
    //     console.log(response);
    //     return response.json();
    // })
    // .then((data) => {
    //     // rslt = 1;
    //     // rslt2 = data;
    //     console.log(data);

    //     // console.log('Name:',data[0].Name);
    //     // console.log('Age:',data[0].Age);
    // })
    // .catch((error) => {
    //     console.error('Error fetching JSON data:',error);
    // })

};
