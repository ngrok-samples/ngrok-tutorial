# ngrok-tutorial
This will help us learn ngrok

Requirements: 
- For most labs: Nodejs
- For the TCP ones: docker and a good SQL client ;)

Lessons:

# Lesson 1: Serve Local Web Apps

```
cd lesson1 && npm i && npm app
ngrok http 8080 --subdomain=event-name
```

# Lesson 2: Serve Local Files

```
cd ../
ngrok http file://$(pwd)/lesson2 --subdomain=event-name
mv lesson2/hello.html lesson2/index.html
```

# Lesson 3: Authentication

```
ngrok http file://$(pwd)/lesson2 --oauth=github
cd lesson3 && npm i && npm app
ngrok http 3001 --subdomain=event-name --oauth=google --oauth-allow-domain=ngrok.com
ngrok http 3001 --subdomain=event-name --oauth=google --oauth-allow-email=frederico.hakamine@gmail.com
# ngrok http 3001 --oauth=github --oauth-scope=repo
```

# Lesson 4: APIs

```
cd ../lesson4 && npm i && npm app
ngrok http 3001
ngrok http 3001 --basic-auth "user:pass"
```

# Lesson 5: Verify Webhook Signatures

```
cd ../lesson5 && npm i && npm app
ngrok http 3002 --verify-webhook=github --verify-webhook-secret=12345
```

# Lesson 6: Production

```
cd ../lesson6 && npm i && npm app1
cd ../lesson6 && npm i && npm app2
cd ../lesson6 && npm i && npm app3
EDGE=<YourEdgeId>
ngrok tunnel 3001 --region us --label edge=$(EDGE)
ngrok tunnel 3002 --region us --label edge=$(EDGE)
ngrok tunnel 3003 --region us --label edge=$(EDGE)
```

# Lesson 7: Nifty tricks
- Enforce IP Restrictions
ngrok http 80 --cidr-allow $(curl http://ifconfig.me/ip)/32
- Enrich Requests with Geo Location
ngrok http 80 --request-header-add "country: ${.ngrok.geo.country_code}"
- Improve Header Security
ngrok http 80 --response-header-add "content-security-policy: self;"
- Add Mutual TLS Authentication
ngrok http 80 --mutual-tls-cas=[root-ca.pem]

# Lesson 8
- Enable SSH Access
ngrok tcp 22
- Enable Database Access with CIDR

```
cd ../lesson8
docker-compose up
ngrok tcp 3306 --cidr-allow $(curl http://ifconfig.me/ip)/32
```
