# Lesson 7: Nifty tricks

```bash
cd $TUTORIAL_HOME/lesson1
```

## Enforce IP Restrictions: 
```bash
ngrok http 3001 --domain=$DOMAIN --cidr-allow $(curl http://ifconfig.me/ip)/32
```

## Enrich Requests with Geo Location: 
```bash
ngrok http 3001 --domain=$DOMAIN --request-header-add "country: ${.ngrok.geo.country_code}"`
```

## Improve Header Security: 
```bash
ngrok http 3001 --domain=$DOMAIN --response-header-add "content-security-policy: self;"`
```

## Add Mutual TLS Authentication: 
```bash
ngrok http 3001 --domain=$DOMAIN --mutual-tls-cas=[root-ca.pem]`
```