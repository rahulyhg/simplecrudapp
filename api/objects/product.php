<?php
class Product{
 
    // database connection and table name
    private $conn;
    private $table_name = "product";
 
    // object properties
    public $name;
    public $description;
    public $price;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // used when filling up the update product form
    function list(){
    
        // query to read single record
        $query = "SELECT
                    *
                FROM
                    " . $this->table_name ;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }
}