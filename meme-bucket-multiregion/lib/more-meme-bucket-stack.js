const {Stack, Fn, CfnOutput, Tag} = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');

class MoreMemeBucketStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const memeBucket = new s3.Bucket(this, 'MemeBucket', {
        bucketName: Fn.sub('morememes-${AWS::Region}${AWS::AccountId}'),
        versioned: props.versioning
    });

    new CfnOutput(this, 'MemeBucketName', {
      value: memeBucket.bucketName,
      description: 'S3 bucket for my private meme stash'
    });

    //this.node.applyAspect(new Tag('memes', 'all-of-them'))
}}

module.exports = { MoreMemeBucketStack };
