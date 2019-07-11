# inventory-sample-crud
Sample inventory CRUD application

## Requirements
1. MySQL 5.6 (or 5.7) with database 'inventory'
2. MySQL user 'root' with password 'user'
3. NodeJS

## Running the application
1. Make sure to satisfy the requirements
2. Clone the repository
```
$ git clone https://github.com/acdeguzman/inventory-sample-crud.git
```
3. Run npm install
4. Run the command
```
mysql -uroot -puser inventory < <path_to_the_project>/database/sample_data.sql
```
5. Run the application
```
npm run dev
```