CREATE TABLE IF NOT EXISTS "user"
(
    id         VARCHAR(128) NOT NULL, -- https://firebase.google.com/docs/auth/admin/manage-users
    email      VARCHAR(320) NOT NULL, -- RFC5321
    is_public  BOOL         NOT NULL, -- 検証のためsettingと重複
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
    FOREIGN KEY (from_user_id) references "user"(id),
    FOREIGN KEY (to_user_id)   references "user"(id)
);

CREATE TABLE IF NOT EXISTS "bookmark"
(
  user_id    VARCHAR(128)   NOT NULL,
  url        VARCHAR(2000)  NOT NULL, -- https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
  have_read  BOOL           NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP      NOT NULL,
  updated_at TIMESTAMP      NOT NULL,
  PRIMARY KEY (user_id, url),
  FOREIGN KEY (user_id) references "user"(id)
);

CREATE TABLE IF NOT EXISTS "setting"
(
  user_id    VARCHAR(128) NOT NULL,
  allow_bookmark_public   BOOL   NOT NULL DEFAULT TRUE,
  allow_follow_public     BOOL   NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP           NOT NULL,
  updated_at TIMESTAMP           NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) references "user"(id)
);

CREATE FUNCTION set_created_at() RETURNS TRIGGER AS '
  begin
    new.created_at := ''now'';
    return new;
  end;
' LANGUAGE plpgsql;

CREATE FUNCTION set_update_at() RETURNS TRIGGER AS '
  begin
    new.updated_at := ''now'';
    return new;
  end;
' LANGUAGE plpgsql;

CREATE TRIGGER created_at BEFORE INSERT ON public.user     FOR EACH ROW EXECUTE PROCEDURE set_created_at();
CREATE TRIGGER created_at BEFORE INSERT ON public.follow   FOR EACH ROW EXECUTE PROCEDURE set_created_at();
CREATE TRIGGER created_at BEFORE INSERT ON public.bookmark FOR EACH ROW EXECUTE PROCEDURE set_created_at();
CREATE TRIGGER created_at BEFORE INSERT ON public.setting  FOR EACH ROW EXECUTE PROCEDURE set_created_at();
CREATE TRIGGER created_at_update_at BEFORE INSERT ON public.user     FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER created_at_update_at BEFORE INSERT ON public.follow   FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER created_at_update_at BEFORE INSERT ON public.bookmark FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER created_at_update_at BEFORE INSERT ON public.setting  FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER update_at  BEFORE UPDATE ON public.user     FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER update_at  BEFORE UPDATE ON public.bookmark FOR EACH ROW EXECUTE PROCEDURE set_update_at();
CREATE TRIGGER update_at  BEFORE UPDATE ON public.setting  FOR EACH ROW EXECUTE PROCEDURE set_update_at();
