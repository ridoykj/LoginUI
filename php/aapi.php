<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'userinfo';
$dbTable = 'userdata';
$requestType = '';


$userid = '';

main();
function main()
{
	createDataBase();
	createTable();
	global $requestType;
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$requestType = $_POST["request"];
		request();
	}
}

function createDataBase()
{
	global $servername, $username, $password, $dbname;
	$conn = mysqli_connect($servername, $username, $password);
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
	mysqli_query($conn, $sql);
	mysqli_close($conn);
}


function createTable()
{
	global $servername, $username, $password, $dbname, $dbTable;
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sql = "CREATE TABLE `$dbname`.`$dbTable`
	( `id` INT NULL AUTO_INCREMENT , `userid` TEXT NOT NULL , `pass` TEXT NOT NULL , PRIMARY KEY (`id`));";
	mysqli_query($conn, $sql);
	mysqli_close($conn);
}


function request()
{
	global $requestType;
	switch ($requestType) {
		case 'create':
			CREATE();
			break;

		case 'delete':
			DELETE();
			break;

		case 'update':
			UPDATE();
			break;

		case 'search':
			break;

		case 'read':
			READ();
			break;

		case 'check':
			if ($_SERVER["REQUEST_METHOD"] == "POST") {
				global $userid;
				$userid = $_POST["userid"];
			}
			checkd($userid);
			break;

		case 'login':
			login();
			break;

		default:
			echo "Wrong Requested ridoykj";
			break;
	}
}

function CREATE()
{
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$userid = $_POST["userid"];
		$pass = $_POST["pass"];
	}

	if (!check($userid)) {
		global $servername, $username, $password, $dbname, $dbTable;
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		$sql = "INSERT INTO `$dbTable` (`userid`, `pass`) VALUES ('" . $userid . "', '" . $pass . "');";

		mysqli_query($conn, $sql);
		mysqli_close($conn);
	} else {
		echo "false";
	}
}

function DELETE()
{
	# code...
}

function UPDATE()
{
	# code...
}

function check($userid)
{
	global $servername, $username, $password, $dbname, $dbTable;
	$connect = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "SELECT * FROM $dbTable WHERE userid = '" . $userid . "';";
	$result = mysqli_query($connect, $sql);

	if ($result->num_rows > 0) {
		return true;
	} else {
		return false;
	}
}

function checkd($userid)
{
	global $servername, $username, $password, $dbname, $dbTable;
	$connect = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "SELECT * FROM $dbTable WHERE userid = '" . $userid . "';";
	$result = mysqli_query($connect, $sql);

	if ($result->num_rows > 0) {
		echo 'true';
	} else {
		echo 'false';
	}
}

function login()
{
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$userid = $_POST["username"];
		$pass = $_POST["pass"];
	}

	global $servername, $username, $password, $dbname, $dbTable;
	$connect = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "SELECT * FROM $dbTable WHERE userid = '" . $userid . "' AND pass = '" . $pass . "';";
	$result = mysqli_query($connect, $sql);
	if ($result->num_rows > 0) {
		READ();
	} else {
		echo "rid777";
	}
}

function READ()
{
	global $servername, $username, $password, $dbname, $dbTable;
	$connect = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "SELECT * FROM $dbTable;";
	$result = mysqli_query($connect, $sql);
	$json_array = array();
	while ($row = mysqli_fetch_assoc($result)) {
		$json_array[] = $row;
	}
	echo json_encode($json_array);
}
