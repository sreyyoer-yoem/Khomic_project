-- DROP TABLE user_sessions;
-- DROP TABLE users;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    code_resetpass VARCHAR NULL,
    expired_code BIGINT,
    profile VARCHAR DEFAULT('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_552721&psig=AOvVaw0_jesdr43rT-7Ihxj9x2nx&ust=1692695248226000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJC7pquz7YADFQAAAAAdAAAAABAn'),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()

);
CREATE TABLE IF NOT EXISTS user_sessions(
    session_id VARCHAR(120) PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    ip VARCHAR(120),
    session_data JSON,
    created_at TIMESTAMP DEFAULT NOW(),
    expired_at TIMESTAMP DEFAULT NOW() + INTERVAL '7 days'
);


