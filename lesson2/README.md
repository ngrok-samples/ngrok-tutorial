# Lesson 2: Serve Local Files
This lesson shows that you don't even need a server or service running on a particular port. By using `file://$(pwd)` you create a tunnel to current directory.

```bash
ngrok http --subdomain=$SUBDOMAIN file://$(pwd)
```

After running this command navigate to the `https://<insert_subdomain_here>.ngrok.app/hello.html` to see the results.