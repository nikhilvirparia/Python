-- SELECT * from dojos;

-- INSERT INTO dojos(name, created_at, updated_at) 
-- VALUES('dojo1', NOW(), NOW());

-- INSERT INTO dojos(name, created_at, updated_at) 
-- VALUES('dojo2', NOW(), NOW());

-- INSERT INTO dojos(name, created_at, updated_at) 
-- VALUES('dojo3', NOW(), NOW());

-- Retrieve all the ninjas from the first dojo
-- SELECT * from ninjas WHERE dojo_ID = 4;

-- Retrieve all the ninjas from the last dojo
-- SELECT * from ninjas WHERE dojo_ID = 6;


-- SET SQL_SAFE_UPDATES = 0;
-- DELETE FROM dojos WHERE id='1';
-- DELETE FROM dojos WHERE id='2';
-- DELETE FROM dojos WHERE id='3';


-- SELECT * from dojos

-- Created 3 Ninjas that belong to first dojo

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Jack', 'ninjas1', 25, NOW(), NOW(), 4);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Dan', 'ninjas2', 26, NOW(), NOW(), 4);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('James', 'ninjas3', 27, NOW(), NOW(), 4);

-- Created 3 Ninjas that belong to second dojo

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Nick', 'ninjas5', 27, NOW(), NOW(), 5);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Tyler', 'ninjas6', 29, NOW(), NOW(), 5);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Shawn', 'ninjas7', 30, NOW(), NOW(), 5);

-- Created 3 Ninjas that belong to third dojo

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('David', 'ninjas6', 30, NOW(), NOW(), 6);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Josh', 'ninjas7', 32, NOW(), NOW(), 6);

-- INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_ID)
-- VALUES('Cody', 'ninjas8', 110, NOW(), NOW(), 6);

--  Retrieve the last ninja's dojo
-- SELECT name from dojos
-- LEFT JOIN ninjas
-- ON ninjas.dojo_id = dojos.id
-- ORDER BY ninjas.id DESC LIMIT 1;



