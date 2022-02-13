CREATE TABLE IF NOT EXISTS "user"
(
    id    VARCHAR(128) NOT NULL, -- https://firebase.google.com/docs/auth/admin/manage-users
    email      VARCHAR(320) NOT NULL, -- RFC5321
    created_at TIMESTAMP    NOT NULL,
    updated_at TIMESTAMP    NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "follow"
(
    from_user_id  VARCHAR(128) NOT NULL,
    to_user_id    VARCHAR(128) NOT NULL,
    created_at    TIMESTAMP    NOT NULL,
    PRIMARY KEY (from_user_id, to_user_id),
    foreign key (from_user_id) references "user"(id),
    foreign key (to_user_id)   references "user"(id)
);

CREATE TABLE IF NOT EXISTS "bookmark"
(
  user_id    VARCHAR(128)   NOT NULL,
  url        VARCHAR(2000)  NOT NULL, -- https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
  read       bool           NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP      NOT NULL,
  updated_at TIMESTAMP      NOT NULL,
  PRIMARY KEY (user_id, url),
  foreign key (user_id) references "user"(id)
);
