<?php
class Cart{
 
    // database connection and table name
    private $conn;
    private $table_name = "cart";
 
    // object properties
    public $user_id;
    public $product_id;
    public $quantity;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function show(){
    
        // query to read single record
        $query = "SELECT
                    c.product_id, p.name, p.price, c.quantity
                FROM
                    " . $this->table_name . " c
                LEFT JOIN
                    product p
                        ON c.product_id = p.id
                WHERE
                    user_id=:user_id ";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // bind id of cart to be updated
        $stmt->bindParam(":user_id", $this->user_id);
    
        // execute query
        $stmt->execute();

        return $stmt;
    }
}