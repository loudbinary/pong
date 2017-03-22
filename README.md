# pong
Device Prototype #2

1. Configure limited use IAM Authentication Key.  
2. Assign key to device.
3. Boot Raspberry PI, start node script automatically
4. Script start

* Create NODE Package, npm init
* npm install dotenv --save
* npm install aws-sdk
* Create a .env file
* In file place DEVICEID=PONG_SERVER
* Using AWS Credentials IN config.json
* Read in .env with instructions.
* Call simple register lambda, that responds with SNS - ARN
* Device subscribes to SNS ARN
* Waits for PONG Message to be published into SNS Topic
* Upon PONG, responds to PING with { type: PONG, message: PONG, DEVICEID: <deviceid>}
* Repeat
