
var userId = ctx && ctx.req && ctx.req.headers && ctx.req.headers.authorization

console.log(ctx.req.headers)

if (event === "GET") {
  if (!userId) cancel("You must be authenticated view purchases", 401)
  query.userId = userId
}

if (event === "POST") {
  if (!userId) cancel("You must be authenticated to purchase", 401)
  this.userId = userId
}