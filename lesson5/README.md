# Lesson 5: Verify Webhook Signatures
The original use case for ngrok was for developing webhooks. Today, you can verify that the webhooks coming in are being sent from the desired source with [Webhook Verification](https://ngrok.com/docs/cloud-edge/modules/webhook/). 

This lesson teaches how to implement webhook verification for GitHub webhooks. For detailed instructions about how to set up GitHub webhooks please refer to the [GitHub Repository Webhooks](https://ngrok.com/docs/integrations/github/webhooks/) documentation in the ngrok Docs.

To verify that the incoming webhooks are coming from GitHub you'll add two arguments to your `ngrok` command. The first, `--verify-webhook=github` verifies the source of the webhook as GitHub. `--verify-webhook-secret=12345` is the Secret value you set in GitHub when creating the webhook.

```bash
npm i && node app
ngrok http 3002 --domain=$DOMAIN --verify-webhook=github --verify-webhook-secret=12345
```

Admittedly, this can be a bit of a chicken-and-egg scenario. To register the webhook in GitHub you need to know the destination--the url created by running the ngrok command. And, to run the ngrok command you need to know the value for `--verify-webhook-secret`. Assumig you're using a free ngrok account, you'll need to first run the commands above to generate your ngrok URL. When you do that you choose the value for the `--verify-webhook-secret`. Then, when you register the webhook in GitHub copy the value you chose in the command line and use it for the Secret value in GitHub.
