FROM python:latest

COPY ./main.py .

WORKDIR ./

ENTRYPOINT ["python", "main.py"]

