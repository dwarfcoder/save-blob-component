exports.config = {
  namespace: 'saveblobcomponent',
  generateDistribution: true,
  serviceWorker: false,  
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
