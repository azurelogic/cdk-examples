#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { MoreMemeBucketStack } = require('../lib/more-meme-bucket-stack');

const app = new cdk.App();
new MoreMemeBucketStack(app, 'MoreMemeBucketStack-us-east-1', {
  env: {
    region: 'us-east-1'
  },
  versioning: true
});
new MoreMemeBucketStack(app, 'MoreMemeBucketStack-us-west-2', {
  env: {
    region: 'us-west-2'
  },
  versioning: false
});
