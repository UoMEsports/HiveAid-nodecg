module.exports = {
  apps : [{
    name: 'hiveaid-overlay',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'shields',
      host : 'uomesports.co.uk',
      ref  : 'origin/master',
      repo : '~/git/hiveaid-overlay.git',
      path : '/home/shields/graphics/hiveaid-overlay',
      'post-deploy' : 'npm install --production && bower install -P && git submodule update --init && cd bundles/hiveaid-bundle && npm ci && npm run build && cd ../.. && pm2 reload ecosystem.config.js --env production'
    }
  }
};
