DROP TABLE IF EXISTS houses;

CREATE TABLE houses(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  address TEXT,
  city VARCHAR(40),
  state VARCHAR(2),
  zipcode INTEGER
);

INSERT INTO houses
(name, address, city, state, zipcode)
VALUES
('Dream Home', '358 Rolling Hill Lane', 'Franklin', 'TN', 37064),
('Victorian', '5893 17th Ave N', 'Seattle', 'WA', 98208),
('Tudor', '9383 State St', 'Miami', 'FL', 33195);