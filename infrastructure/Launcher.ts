import { Project1Stack } from './Project1Stack'
import { App } from 'aws-cdk-lib'

const app =  new App()
new Project1Stack(app, 'project1', {
  stackName: 'Project1'
})