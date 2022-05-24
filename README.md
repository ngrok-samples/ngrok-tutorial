# ngrok-tutorial
This will help us learn ngrok

Requirements: 
- For most labs: Nodejs
- For the TCP ones: docker and a good SQL client ;)


Variables:
export SUBDOMAIN=test-fred
export TUTORIAL_HOME=$PWD

Lessons:

# Lesson 1: Serve Local Web Apps

```
cd $TUTORIAL_HOME/lesson1 && npm i && node app
ngrok http 8080 --subdomain=$SUBDOMAIN
```

# Lesson 2: Serve Local Files

```
cd $TUTORIAL_HOME/lesson2
ngrok http --subdomain=$SUBDOMAIN file://$(pwd)
```

# Lesson 3: Authentication

```
cd $TUTORIAL_HOME/lesson2
ngrok http --subdomain=$SUBDOMAIN file://$(pwd) --oauth=github
cd $TUTORIAL_HOME/lesson3 && npm i && node app
ngrok http 3001 --subdomain=$SUBDOMAIN --oauth=google --oauth-allow-domain=ngrok.com
ngrok http 3001 --subdomain=$SUBDOMAIN --oauth=google --oauth-allow-email=<email>
ngrok http 3001 --subdomain=$SUBDOMAIN --oauth=github --oauth-scope=repo
```

# Lesson 4: APIs

```
cd $TUTORIAL_HOME/lesson4 && npm i && node app
ngrok http 3001 --subdomain=$SUBDOMAIN
ngrok http 3001 --subdomain=$SUBDOMAIN --basic-auth "user:pass"
```

# Lesson 5: Verify Webhook Signatures

```
cd $TUTORIAL_HOME/lesson5 && npm i && node app
ngrok http 3002 --subdomain=$SUBDOMAIN --verify-webhook=github --verify-webhook-secret=12345
```

# Lesson 6: Production

```
cd $TUTORIAL_HOME/lesson6 && npm i && node app1
cd $TUTORIAL_HOME/lesson6 && npm i && node app2
cd $TUTORIAL_HOME/lesson6 && npm i && node app3

export EDGE=<YourEdgeId>
ngrok tunnel 3001 --region us --label edge=$EDGE
ngrok tunnel 3002 --region us --label edge=$EDGE
ngrok tunnel 3003 --region us --label edge=$EDGE
```

# Lesson 7: Nifty tricks

cd $TUTORIAL_HOME/lesson1

- Enforce IP Restrictions
ngrok http 3001 --subdomain=$SUBDOMAIN --cidr-allow $(curl http://ifconfig.me/ip)/32
- Enrich Requests with Geo Location
ngrok http 3001 --subdomain=$SUBDOMAIN --request-header-add "country: ${.ngrok.geo.country_code}"
- Improve Header Security
ngrok http 3001 --subdomain=$SUBDOMAIN --response-header-add "content-security-policy: self;"
- Add Mutual TLS Authentication
ngrok http 3001 --subdomain=$SUBDOMAIN --mutual-tls-cas=[root-ca.pem]

# Lesson 8
- Enable SSH Access
ngrok tcp 22
- Enable Database Access with CIDR

```
cd $TUTORIAL_HOME/lesson8
docker-compose up
ngrok tcp 3306 --cidr-allow $(curl http://ifconfig.me/ip)/32
```
