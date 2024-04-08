-- Clean the tables

DELETE
FROM contact_details;
DELETE
FROM contact;

-- Insert contacts and capture their IDs

INSERT INTO contact (first_name, last_name, job_title, company, address, city, zip_code, country)
VALUES ('John', 'Doe', 'Software Engineer', 'Google', '1234 Elm Street', 'Springfield', '12345', 'USA'),
       ('Jane', 'Doe', 'Project Manager', 'Yoox', '2345 Maple Street', 'Shelbyville', '23456', 'USA');

SELECT @JohnId := id
FROM contact
WHERE first_name = 'John' AND last_name = 'Doe';
SELECT @JaneId := id
FROM contact
WHERE first_name = 'Jane' AND last_name = 'Doe';


INSERT INTO contact_details (contact_id, type, info)
VALUES (@JohnId, 'Phone', '555-1234'),
       (@JaneId, 'Phone', '555-2345');
