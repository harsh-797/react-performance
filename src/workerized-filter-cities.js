import makeFilterCitiesWorker from 'workerize!./filter-cities'

const {getItems} = makeFilterCitiesWorker()

console.log(getItems)

export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
