const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const turbPre = new GraphQLObjectType({
  name: "TubingPressure",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const flartem = new GraphQLObjectType({
  name: "FlareTemp",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const InjValve = new GraphQLObjectType({
  name: "InjValveOpen",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const OT = new GraphQLObjectType({
  name: "OilTemp",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const CasPress = new GraphQLObjectType({
  name: "CasingPressure",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const WatTem = new GraphQLObjectType({
  name: "WaterTemp",
  fields: {
    id: { type: GraphQLString },
    val: { type: GraphQLInt },
    created: { type: GraphQLString },
    metricId: { type: GraphQLString }
  }
});

const metricType = new GraphQLObjectType({
  name: "Metric",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    metricTB: {
      type: new GraphQLList(turbPre),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/metrics`).then(res => res.data);
      }
    },
    metricFT: {
      type: new GraphQLList(flartem),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${parentValue.id}/flareTemp`)
          .then(res => res.data);
      }
    },
    metricIVO: {
      type: new GraphQLList(InjValve),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${parentValue.id}/injValveOpen`)
          .then(res => res.data);
      }
    },
    metricOT: {
      type: new GraphQLList(OT),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${parentValue.id}/oilTemp`)
          .then(res => res.data);
      }
    },
    metricCP: {
      type: new GraphQLList(CasPress),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${parentValue.id}/casingPressure`)
          .then(res => res.data);
      }
    },
    metricWT: {
      type: new GraphQLList(WatTem),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${parentValue.id}/waterTemp`)
          .then(res => res.data);
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    metrics: {
      type: metricType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/metrics/${args.id}`)
          .then(resp => resp.data);
      }
    },
    tubingP: {
      type: turbPre,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/tubingPressures/${args.id}`)
          .then(resp => resp.data);
      }
    },
    flareT: {
      type: flartem,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/flareTemps/${args.id}`)
          .then(resp => resp.data);
      }
    },
    injVal: {
      type: InjValve,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/injValveOpens/${args.id}`)
          .then(resp => resp.data);
      }
    },
    oilT: {
      type: OT,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/oilTemps/${args.id}`)
          .then(resp => resp.data);
      }
    },
    cp: {
      type: CasPress,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/casingPressures/${args.id}`)
          .then(resp => resp.data);
      }
    },
    waterT: {
      type: WatTem,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/waterTemps/${args.id}`)
          .then(resp => resp.data);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addTubinPres: {
      type: turbPre,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/tubingPressures", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    // 2
    addflareT: {
      type: flartem,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/flareTemps", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    //   3
    addInjValve: {
      type: InjValve,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/injValveOpens", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    //   4
    addOT: {
      type: OT,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/oilTemps", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    //   5
    addCasPress: {
      type: CasPress,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/casingPressures", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    //   6
    addWatTem: {
      type: WatTem,
      args: {
        val: { type: new GraphQLNonNull(GraphQLInt) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        metricId: { type: GraphQLString }
      },
      resolve(parentValue, { val, created, metricId }) {
        return axios
          .post("http://localhost:3000/waterTemps", {
            val,
            created,
            metricId
          })
          .then(res => res.data);
      }
    },
    // delete
    deleteTubinPres: {
      type: turbPre,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/tubingPressures/${id}`)
          .then(res => res.data);
      }
    },
    // 2
    deleteflartem: {
      type: flartem,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/flareTemps/${id}`)
          .then(res => res.data);
      }
    },
    //   3
    deleteInjValve: {
      type: InjValve,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/injValveOpens/${id}`)
          .then(res => res.data);
      }
    },
    //   4
    deleteOT: {
      type: OT,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/oilTemps/${id}`)
          .then(res => res.data);
      }
    },
    //   5
    deleteCasPress: {
      type: CasPress,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/casingPressures/${id}`)
          .then(res => res.data);
      }
    },
    //   6
    deleteWatTem: {
      type: WatTem,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/waterTemps/${id}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
