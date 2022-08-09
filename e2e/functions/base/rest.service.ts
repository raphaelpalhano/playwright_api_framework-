export async function requestWithBody(endpoint: string, body: object | string) {
  const request = await (
    await interact
  ).post(endpoint, {
    data: body,
    failOnStatusCode: true,
    headers: {
      Accept: '*/*',
      ContentType: 'application/json',
    },
  });
  return request;
}
