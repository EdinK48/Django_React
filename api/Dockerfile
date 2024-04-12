FROM python:3.8-slim-buster

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django djangorestframework django-cors-headers psycopg2-binary

COPY . .

EXPOSE 8000
