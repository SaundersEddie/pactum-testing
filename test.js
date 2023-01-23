const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('http://httpbin.org/status/200')
    .expectStatus(200);
});

it('should return a robot.txt file', async () => {
  await spec()
    .get('http://httpbin.org/robots.txt')
    .expectStatus(200)
    .expectHeader('content-type', 'text/plain')
    .expectBody('User-agent: *\nDisallow: /deny\n')
});
