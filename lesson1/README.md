# Lesson 1: Serve Local Web Apps

This lesson shows how to run ngrok to create a tunnel to a web server running in Node.js on port 8080. To accomplish this lesson, run the following commands in this directory.

```bash
npm i && node app
ngrok http 8080 --subdomain=$SUBDOMAIN
```

This will create a tunnel at the subdomain specified at $SUBDOMAIN.
