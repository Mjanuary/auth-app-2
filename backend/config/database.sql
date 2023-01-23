-- Database: imihigo_db

-- DROP DATABASE IF EXISTS imihigo_db;

CREATE DATABASE imihigo_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;




-- Table: public.roles

-- DROP TABLE IF EXISTS public.roles;

CREATE TABLE IF NOT EXISTS public.roles
(
    role_id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    role_name character varying(200) COLLATE pg_catalog."default",
    access character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT roles_pkey PRIMARY KEY (role_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.roles
    OWNER to postgres;




-- Table: public.two_step_factor

-- DROP TABLE IF EXISTS public.two_step_factor;

CREATE TABLE IF NOT EXISTS public.two_step_factor
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9999 CACHE 1 ),
    user_id character varying(200) COLLATE pg_catalog."default",
    email character varying(200) COLLATE pg_catalog."default",
    code character varying(10) COLLATE pg_catalog."default",
    phone character varying(100) COLLATE pg_catalog."default",
    generated_time timestamp with time zone NOT NULL,
    role_id character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT two_step_factor_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.two_step_factor
    OWNER to postgres;





-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id character varying(200) COLLATE pg_catalog."default",
    email character varying(200) COLLATE pg_catalog."default",
    phone character varying COLLATE pg_catalog."default",
    password character varying(200) COLLATE pg_catalog."default",
    first_name character varying COLLATE pg_catalog."default",
    last_name character varying COLLATE pg_catalog."default",
    middle_name character varying COLLATE pg_catalog."default",
    role_id integer,
    nid character varying COLLATE pg_catalog."default",
    status integer DEFAULT 1
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;