module.exports = {
  channels: ["#elitistjerks","#buubot"],
  server: "irc.gamesurge.net",
  botName: "memer",
  urlSummarizer: {
    yieldToOtherBots: true,
    otherBots: ["meme"],
    yieldDomains: ["twitter.com"]
  },
  admins: { Antiarc: true },
  pg: {
    user: "memebot", //env var: PGUSER
    database: "memebot", //env var: PGDATABASE
    host: "localhost",
    password: 'memebot',  //env var: PGPASSWORD
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
  },
  summaryBlacklist: [
    /userbenchmark\.com$/,
    /blacklist-test/
  ]
};
