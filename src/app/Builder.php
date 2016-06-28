<?php

namespace TY\VisualQueryBuilder;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Query\QueryBuilder;

class Builder
{
    private $dbal_connection;

    public function __construct(Connection $dbal_connection)
    {
        $this->dbal_connection = $dbal_connection;
    }


    public function getDatabases()
    {
        $connection = $this->getConnection();
        $schema_manager = $connection->getSchemaManager();
        $databases = $schema_manager->listDatabases();
        return $databases;
    }

    public function getTablesName($db_name)
    {
        $connection = $this->getConnection($db_name);
        $schema_manager = $connection->getSchemaManager();
        return $schema_manager->listTableNames();
    }

    public function getColumns($table_name)
    {
        $connection = $this->getConnection();
        $schema_manager = $connection->getSchemaManager();
        return $schema_manager->listTableColumns($table_name);
    }

    public function generateSql($data)
    {
        if ( $builder = $this->generateBuilder($data)) {
            return $builder->getSQL();
        }
        return null;
    }

    public function generateBuilder($data)
    {
        
        $from = $data['from'];
        $alias = $data['alias'];

        $builder = $this->dbal_connection->createQueryBuilder();
        $builder->select($data['select']);
        if (is_array($from)){
            $builder->from(sprintf("(%s)",$this->generateSql($from)), $alias);
        }
        else {
            $builder->from($from, $alias);
        }
        $this->setJoins($builder,$data);
        $this->setWhere($builder,$data);


        return $builder;
    }

    private function setJoins(QueryBuilder &$builder, $data)
    {
        foreach ($data['joins'] as $join_data) {
            $type = $join_data['type'];
            $table_name = $join_data['table'];
            $from = $join_data['from'];
            $alias = $join_data['alias'];
            $condition = $join_data['on'];

            switch ($type) {
                case 'left':
                    $builder->leftJoin($from, $table_name, $alias, $condition);
                    break;
                case 'right':
                    $builder->rightJoin($from, $table_name, $alias, $condition);
                    break;
                case 'inner':
                default:
                    $builder->innerJoin($from, $table_name, $alias, $condition);
            }
        }
    }

    private function setWhere(QueryBuilder &$builder, $data)
    {

    }

    private function setGroupBy(QueryBuilder &$builder, $data)
    {

    }

    private function setOrderBy(QueryBuilder &$builder, $data)
    {

    }

    private function setHaving(QueryBuilder &$builder, $data)
    {

    }

    private function setLimits(QueryBuilder &$builder, $data)
    {
        $first = $data['limit'][0];
        $count = $data['limit'][1];
        if ( !null == $first && $count) {
            $builder->setFirstResult($first);
            $builder->setMaxResults($count);
        }
    }


}