const { isTokenExpired, getClientToken } = require('./tokenCall')

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imx4aU5xUjdNdXY2ZGJZN1dBZ3EtbTFCRTA5dyIsImtpZCI6Imx4aU5xUjdNdXY2ZGJZN1dBZ3EtbTFCRTA5dyJ9.eyJhdWQiOiJtaWNyb3NvZnQ6aWRlbnRpdHlzZXJ2ZXI6ODJjZjI5MWUtMTBkOC00ZjM5LWJmYzktOWY0M2U3OTM0ODcwIiwiaXNzIjoiaHR0cDovL2xvZ2luLnJlZi51Zy5rdGguc2UvYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTY2MDEyNDE3NiwibmJmIjoxNjYwMTI0MTc2LCJleHAiOjE2NjAxMjc3NzYsImt0aGlkIjoidTFzd3VvbjMiLCJ1c2VybmFtZSI6InNhYmFoYXQiLCJzdWIiOiJ4Zk5DdUhTck9qSmljMnR3NFJ3QzF1M3NtRk5mYnJrWHZjOU1HalptekdzPSIsImFwcHR5cGUiOiJDb25maWRlbnRpYWwiLCJhcHBpZCI6IjgyY2YyOTFlLTEwZDgtNGYzOS1iZmM5LTlmNDNlNzkzNDg3MCIsImF1dGhtZXRob2QiOiJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YWM6Y2xhc3NlczpQYXNzd29yZFByb3RlY3RlZFRyYW5zcG9ydCIsImF1dGhfdGltZSI6IjIwMjItMDgtMTBUMDg6MTI6NTAuODMxWiIsInZlciI6IjEuMCIsInNjcCI6Im9wZW5pZCJ9.K8358hS7yBLQntY4P-9FHuuYN_AfABx8UVnrMsMCqr7DICZ_kWKYfU8fEPtmIoStrPdsEVvtv1wtCtd8uDI3zgl0SWNDntQdimsU1K4I9illQ9sAZL0Nikd2OeAC6n9qRuJmQwwZOO3y2LEv2fsVR948ataZE5RVSQ--xHi-AQzyfiSpNu0bwOPycGFD0vkR3uPjbakXV27S102vDofpz_JdvC1c7UcshElqfjg0Tdesac28mNs0ybgMoEKBLVDjhaqda87loMy7vFN6WKnsfbfSe3WVo8OfqrjJys8fPUmiPYTKXs9OmyAh-27DZ300_q_-KG1EV9db3_qdYhS7xg'


describe('Test cases for authentication token', () => {
  test('check token expiry', () => {
      expect(isTokenExpired(token)).toBeTrue()
  })
})
