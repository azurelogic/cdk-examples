const {Stack, Fn, CfnOutput} = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');

class MemeBucketStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const memeBucket = new s3.Bucket(this, 'MemeBucket', {
        bucketName: Fn.sub('memes-${AWS::Region}${AWS::AccountId}')
    });

    new CfnOutput(this, 'MemeBucketName', {
      value: memeBucket.bucketName,
      description: 'S3 bucket for my private meme stash'
    });
}}

module.exports = { MemeBucketStack };
