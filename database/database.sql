create TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR unique,
    password VARCHAR,
    jwt: VARCHAR
);

create TABLE map (
    id SERIAL PRIMARY KEY,
    map json NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);