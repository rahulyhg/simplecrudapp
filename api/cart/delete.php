<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object file
include_once '../config/database.php';
include_once '../objects/cart.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare cart object
$cart = new Cart($db);
 
// set cart id to be deleted
$cart->id = $_POST['id'];
 
// delete the cart
if($cart->delete()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(
        array(
            "error" => false,
            "message" => "Product deleted from cart."
        )
    );
}
 
// if unable to delete the cart
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(
        array(
            "error" => true,
            "message" => "Unable to delete cart."
        )
    );
}
?>