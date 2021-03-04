function checkNumberIfFloat(value) {
    return Number(value) === value && value % 1 !== 0;
 }

function validateForm() {
    let id = document.getElementById("trainee_id").value
    if (id == "") {
      alert("ID should not be empty");
      return false;
    }

    let name = document.forms["trainee_form"]["trainee_name"].value;
    if(name.trim()==""){

        alert("Name should not be empty")
        return false
    }

    let branch = document.forms["trainee_form"]["branch"].value;
    if(branch.trim()=="" ){
        alert("branch should not be empty")
        return false
    }

    // if(branch != "java" || branch != "oracle" || branch != "php" || branch != "dotnet"){
    //     alert("Branch must be from these java, oracle, php, dotnet")
    //     return false;
    // }

    let percentage = document.forms["trainee_form"]["percentage"].value;
    if(percentage.trim()==""){
        alert("pecentage should not be empty")
        return false
    }
  }