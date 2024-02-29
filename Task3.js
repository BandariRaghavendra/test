
let inputs=document.querySelectorAll("input")
let btn=document.querySelector("button")
let myTable=document.querySelector("#table2")
let warning=document.getElementById("warning")

let formHandle=()=>{
      
    let userName=inputs[0].value
    let userSalary=inputs[1].value
    let userCompany=inputs[2].value
    
    if(userName=="" || userSalary=="" || userCompany=="")
    {
        // alert("please enter the inputs")
        warning.innerText="please fill all the fields"
        warning.style.color="red"
        warning.style.textAlign="center"
    }
    else if((userName.length >4 && userName.length <20 ) && (userSalary.length >4 && userSalary.length <20 ) && (userCompany.length >2 && userCompany.length <20 ) )
    {
         
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
    
        td1.innerText=userName
        td2.innerText=userSalary
        td3.innerText=userCompany
    
        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tr1.appendChild(td3)
    
        myTable.appendChild(tr1)
    
        console.log(userName,userSalary,userCompany);
    
        inputs[0].value=""
        inputs[1].value=""
        inputs[2].value=""
    }

    else{
            
    alert("enter valid details")
        }
    }

