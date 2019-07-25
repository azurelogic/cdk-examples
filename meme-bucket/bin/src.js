#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { MemeBucketStack } = require('../lib/meme-bucket-stack');

const app = new cdk.App();
new MemeBucketStack(app, 'MemeBucketStack');
