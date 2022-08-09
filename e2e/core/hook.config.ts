import { config } from './config';
import {
  Before,
  After,
  BeforeAll,
  setDefaultTimeout,
  ITestCaseHookParameter,
  AfterAll,
} from '@cucumber/cucumber';
import { APIRequestContext, request, APIResponse } from '@playwright/test';
setDefaultTimeout(process.env.PWDEBUG ? -1 : config.TIMEOUT);

declare global {
  var testName: string;
  var interact: Promise<APIRequestContext>;
  var response: Promise<APIResponse>;
}

BeforeAll(async () => {
  globalThis.interact = request.newContext({
    baseURL: config.BASE_API_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      // Add authorization token to all requests.
      //'Authorization': `token ${process.env.API_TOKEN}`,
    },
    // httpCredentials: {
    //   username: process.env.USERNAME || 'random',
    //   password: process.env.PASSWORD || 'random',
    // },
    timeout: config.TIMEOUT,
  });
});
Before(async ({ pickle }: ITestCaseHookParameter) => {
  globalThis.testName = pickle.name.replace(/\W/g, '-');
});

After(async function (scenario: ITestCaseHookParameter) {
  if (scenario.result!.status) {
    await this.attach(
      `Status: ${scenario.result!.status}. Duration:${scenario.result!.duration.seconds}s`,
    );
  }
});

AfterAll(async () => {
  await (await interact).dispose();
});
