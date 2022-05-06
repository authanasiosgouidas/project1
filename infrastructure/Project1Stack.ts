import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda'
import { join } from 'path'
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway'

export class Project1Stack extends Stack {

  private api = new RestApi(this, 'ProjectApi')

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    const helloLambda = new LambdaFunction(this, 'helloLambda', {
      runtime: Runtime.NODEJS_12_X, 
      code: Code.fromAsset(join(__dirname, '..', 'services', 'hello')),
      handler: 'hello.main'
    })

    // Hello Api lambda intergration:
    const helloLambdaIntergration = new LambdaIntegration(helloLambda)
    const helloLamdbaResource = this.api.root.addResource('hello')
    helloLamdbaResource.addMethod('GET', helloLambdaIntergration)
  }
}