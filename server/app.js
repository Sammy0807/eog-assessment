let express = require("express");
let express_graphql = require("express-graphql");
let { buildSchema } = require("graphql");

// schema
let data = buildSchema(`
type Query {
    metrics
}

type Metrics {
    tubingPressure: {
        value: Int
        created: Date()
    }
    flareTemp: {
        value: Int
        created: Date()
    }
    injValveOpen: {
        value: Int
        created: Date()
    }
    oilTemp: {
        value: Int
        created: Date()
    }
    casingPressure: {
        value: Int
        created: Date()
    }
    waterTemp: {
        value: Int
        created: Date()
    }
}
`);

const metVal = () => {
    let c = []
    for(let i = 0; i>0; i++){
    setTimeout(c.push(Math.floor(Math.random()*(999-100+1)+100)), 1000);
}
    return c    
}

let root = {
  message: () => "Hello World"
  getMessage: 
};

// create express server and graphql endpoint
let app = express();
app.use(
  "/api",
  express_graphql({
    schema: data,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () => console.log("server running on 4000"));
