# Lesson 1: Serve Local Web Apps

This lesson shows how to run ngrok to create a tunnel to a web server running in Node.js on port 8080. Make sure that the port you specify here matches the port defined in `app.js`. To accomplish this lesson, run the following commands in this directory.

```bash
npm i && node app
ngrok http 8080 --domain=$DOMAIN
```

This will create a tunnel at the domain specified at $DOMAIN.
