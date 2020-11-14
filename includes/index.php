<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        //get one item from the database whichever one you clicked on and asked for in the UI
        $targetID = $_GET["id"];
        $result = getSingleUser($pdo, $targetID);

        return $result;
    } else {
        // user must want to see all items in the database
        $allUsers = getAllUsers($pdo);

        return $allUsers;
    }