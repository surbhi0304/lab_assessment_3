 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="false"%>
    

<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="login.js"></script>
</head>
 
<body>
    <form name="trainee_form" action="traineecontroller.do" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="trainee_name"><br /><br />
        Branch: <input type="text" name="branch"> <br /><br />
        Percentage: <input type="number" step="0.01" name="percentage"><br /><br />
        <input type="submit" value="Submit">
    </form>
</body>
 
</html>
