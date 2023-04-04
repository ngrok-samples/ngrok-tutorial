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
