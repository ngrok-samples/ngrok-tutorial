# Lesson 8: CIDR

## Enable SSH Access: 
```bash
ngrok tcp 22
```

## Enable Database Access with CIDR
```bash
docker-compose up
ngrok tcp 3306 --cidr-allow $(curl http://ifconfig.me/ip)/32
```
