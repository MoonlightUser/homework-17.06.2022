//TASK 1
function TASK1(){
    const winTEXT = "nice. if u want to stop write [N]. If continue out here anithing else"
    const lessTEXT = "our num is less then u. Try again"
    const biggerTEXT = "our num is bigger then u. Try again"
    const questionTEXT = "put here ur num"
    
    const ourNum = 25;
    let stopFlag = false
    while (!stopFlag){
        const userNum = parseInt(prompt(questionTEXT))
        if (userNum > ourNum){
            alert(lessTEXT)
        }
        else if (userNum < ourNum){
            alert(biggerTEXT)
        }
        else{
            let stopUser = prompt(winTEXT)
            if(stopUser = "N"){
                stopFlag = true
            }
        }
    }
}

//TASK 2
function TASK2(){
    //Дать возможность юзеру создавать столько свойств и значений для объекта - сколько захочет юзер.
    let userObj = {}
    let redFlag = false
    
    function app(userObj, redFlag){
        while (!redFlag){ //stop program when redFlag is true
            let listOfData = createKey(userObj) //take oject, new key and redFlag(true or false) from createKet()
            
            //update object and flag 
            userObj = listOfData[0] 
            redFlag = listOfData[2]
            if (redFlag != true){
                listOfData = createValue(userObj, listOfData[1]) //update list of data
                redFlag = listOfData[1] //if in listOfData second element is true we end the app
            }
        }
        return userObj
    }
    
    
    function createKey(obj){
        let userKey = prompt("fill in ur key to obj") //user create the name of new key
    
        // -- stop program 
        if (userKey == null){ //if prompt was canceled, it return null
            return [obj, userKey, true]
        }
        // -- stop program
    
        else{
            obj[userKey] = ""
            return [obj, userKey, false]
        }
    }
    
    
    function createValue(obj, key){
        let userValue = prompt("fill in ur value to obj")
    
        // -- stop program 
        if (userValue == null){ //if prompt was canceled, it return null
            return [obj, true]
        }
        // -- stop program
    
        else{
            obj[key] = userValue
            return [obj, false]
        }
    }
    
    function tableData(obj){
        const tbl = document.getElementsByTagName("table")[0]
        const tblBody = document.getElementsByTagName("tbody")[0]
        for (let i in obj) {
            // creates a table row
            const row = document.createElement("tr");
            
            const cell = document.createElement("td");
            const cellText = document.createTextNode(i);
            const cell2 = document.createElement("td");
            const cellText2 = document.createTextNode(obj[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            // appends <table> into <body>
            document.body.appendChild(tbl);
    }
    tableData(app(userObj, redFlag));
}

if (prompt("TASK1 or TASK2? (1, 2)") == "1"){
    TASK1()
}
else{
    TASK2()
}