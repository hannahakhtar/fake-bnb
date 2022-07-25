# from https://www.freecodecamp.org/news/how-to-dockerize-a-flask-app/

# what syntax to use when parsing the Dockerfile and location of the syntax file
# syntax=docker/dockerfile:1

# base image
FROM python:3.8-slim-buster

# telling Docker to use the same directory and name for rest of operations
# this is contained in the Docker image 
WORKDIR /backend

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_DEBUG=1

COPY . .

EXPOSE 8000

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]