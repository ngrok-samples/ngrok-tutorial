# Lesson 3: Authentication
This lesson shows how to put oauth in front of a tunnel. Remember in Lesson 2 we created a tunnel to a directory on your machine. To protect that tunnel add `--oauth=github` to require authentication to authorize access to the files. 

For the lesson, navigate back to the `lesson2` directory and then run the `ngrok` command below including `--oauth==github`.

```bash
cd $TUTORIAL_HOME/lesson2
ngrok http --domain=$DOMAIN file://$(pwd) --oauth=github
```
When you navigate to the `https://<insert_domain_here>/hello.html` you will first be greeted by a GitHub login and then authorizion form before accessing the webpage.

Now, to add this same authentication to an app running on a port the syntax will be similar. Although, instead of pointing to `file://` you'll point to a port. In the case of this lesson, the Node application is running on port `3001`

First, get the application running with the following commands
```bash
cd $TUTORIAL_HOME/lesson3 && npm i && node app
```

Next, we'll try out a few of the additional options that can be paired with `--oauth`. 

## Google OAuth: Restrict Access to Domain
```bash
ngrok http 3001 --domain=$DOMAIN --oauth=google --oauth-allow-domain=ngrok.com
```
There are times when authenticating a user through Google isn't enough and we want to only allow users from a specific domain. We can do this by passing the `--oauth-allow-domain` argument with the domain we wish to allow. In the example above, we're allowing anyone authenticated with a `ngrok.com` account. 

## Google OAuth: Allow Only Email
```bash
ngrok http 3001 --domain=$DOMAIN --oauth=google --oauth-allow-email=<email>
```
When you want to only allow specific users you can also do that by passing the `--oauth-allow-email` argument. 


## GitHub OAuth: Allow Only Repo Access
```bash
ngrok http 3001 --domain=$DOMAIN --oauth=github --oauth-scope=repo
```
When using GitHub OAuth you can also limit access to those who have access to a specific repo by passing the `--oauth-scope=repo` argument. 

*TODO: test this one out to verify behavior*