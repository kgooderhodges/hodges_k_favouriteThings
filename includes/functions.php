<?php
    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM tbl_fav_things";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;

            //return $result;
            echo(json_encode($result));
        }
    }

    // get specific user
    function getSingleUser($conn, $id) {
        $query = "SELECT * FROM tbl_fav_things WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;

            //return $result;
            echo(json_encode($result));
        }
    }