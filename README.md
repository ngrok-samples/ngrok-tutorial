# ngrok-tutorial
This will help us learn ngrok

Requirements: 
- For most labs: Nodejs
- For the TCP ones: docker and a good SQL client ;)

Lessons:

# Serve Local Web Apps (lesson1)
ngrok http 8080

# Serve Local Files (lesson2)
ngrok http file://$(pwd)/lesson2

# Authentication (lesson3)
ngrok http file://$(pwd)/lesson2 --oauth=github
ngrok http 3001 --oauth=google --oauth-email-domain=ngrok.com
ngrok http 3001 --oauth=google --oauth-allow-email=frederico.hakamine@gmail.com

# API Protection (lesson4)
ngrok http 3001
ngrok http 3001 --basic-auth "user:pass"

# Verify Webhook Signatures (lesson5)
ngrok http 3002 --verify-webhook=github --verify-webhook-secret=12345

# Production (lesson6)
ngrok tunnel 3001 --region us --label edge=
ngrok tunnel 3002 --region us --label edge=
ngrok tunnel 3003 --region us --label edge=

# Nifty tricks (lesson7)
    # Enforce IP Restrictions
    ngrok http 80 --cidr-allow $(curl http://ifconfig.me/ip)/32
    # Enrich Requests with Geo Location
    ngrok http 80 --request-header-add "country: ${.ngrok.geo.country_code}"
    # Improve Header Security
    ngrok http 80 --response-header-add "content-security-policy: self;"
    # Add Mutual TLS Authentication
    ngrok http 80 --mutual-tls-cas=[root-ca.pem]

# Lesson 10. 
    # Enable SSH Access
    ngrok tcp 22
    # Enable Database Access with CIDR
    ngrok tcp 3306 --cidr-allow $(curl http://ifconfig.me/ip)/32