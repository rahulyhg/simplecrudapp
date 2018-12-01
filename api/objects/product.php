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

    function show(){
    
        // query to read single record
        $query = "SELECT
                    id, name, description, price
                FROM
                    " . $this->table_name . "
                WHERE
                    id=:id
                LIMIT
                    0,1";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // bind id of product to be updated
        $stmt->bindParam(":id", $this->id);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->price = $row['price'];
        $this->description = $row['description'];
    }
}