<?php
require_once('../vendor/autoload.php');

header('Content-Type: application/json');

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : 0;
$table = isset($_REQUEST['table']) ? $_REQUEST['table'] : 0;
$db = isset($_REQUEST['db']) ? $_REQUEST['db'] : 0;
$return ='';
$db_name = false;

$connectionParams = [
    'dbname' => $db_name ?: 'stat',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
];
$connection = \Doctrine\DBAL\DriverManager::getConnection($connectionParams);
$builder = new \TY\VisualQueryBuilder\Builder($connection);

if ($action === 'getFields') {
    $return = [
        'field_a_1',
        'field_a_2',
        'field_a_3',
        'field_a_4',
        'field_a_5',
        'field_a_6',
        'field_a_7',
        'field_a_8'
    ];
}
if ($action === 'getTables') {
    $result = $builder->getTablesName($db);
}

print json_encode($return);