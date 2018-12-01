<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate user object
include_once '../objects/cart.php';
 
$database = new Database();
$db = $database->getConnection();
 
$cart = new Cart($db);
 
// get posted data
// $data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($_POST['user_id']) &&
    !empty($_POST['product_id']) &&
    !empty($_POST['quantity'])
){
 
    // set user property values
    $cart->user_id = $_POST['user_id'];
    $cart->product_id = $_POST['product_id'];
    $cart->quantity = $_POST['quantity'];
 
    // create the user
    if($cart->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(
            array(
                "error" => false,
                "message" => "Product added to cart."
            )
        );
    }
 
    // if unable to create the user, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(
            array(
                "error" => true,
                "message" => "Unable to add cart."
            )
        );
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(
        array(
            "error" => true,
            "message" => "Unable to add cart. Data is incomplete."
        )
    );
}
?>