document.querySelector("form").addEventListener("submit",complete)

function complete(){
      event.preventDefault()
      var paymentobj={
            firstname:form.fname.value,
            lastname:form.lname.value,
            email:form.mail.value,
            atm:form.atmno.value,
            yearmonth:form.month.value,
            cvv:form.cvvpin.value,
            country:form.contry.value,
            totalprize:form.payamount.value,
            checkit:form.check.value,
      }
      
 localStorage.setItem("paymentdata",JSON.stringify(paymentobj))
 alert("Registration complete")
     window.location.href="next.html" 
}

var getdata=localStorage.getItem("paydata")
document.querySelector("#payamount").value=getdata
import {
      navbar,
      footer,
      company,
      resourse,
      solutions,
      salesReadinesPlatform,
      main,
    } 
    from "../fw19_1035/componant/navbar.js"
    
    document.getElementById("navbar").innerHTML = navbar();
    document.getElementById("footer").innerHTML = footer();
    let arr = document.querySelectorAll(".arr");
    
    // main function to
    main(arr);