<?php
$servername ='localhost';
$username ='root';
$password ='';
$dbname ='book';


   
   $name = $_POST['name'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $address = $_POST['id'];
   $location = $_POST['location'];
   $guests = $_POST['guests'];
   $arrivals = $_POST['arrivals'];
   $leaving = $_POST['leaving'];

 

//create connection
$conn = mysqli_connect(hostname: $localhost,
                       username: $username,
                       password: $password,
                       database: $dbname);


   if(mysqli_connect_errno()){
      die("connetion error:".mysqli_connect_error());
   }
echo "connection succesful.";
?>


}else{
   echo 'something went wrong please try again!';
}