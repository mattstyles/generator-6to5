'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('6to5') + ' generator!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'projectName',
            message: 'What would you like to call this awesome project?',
            validate: function( str ) {
                return !/\s/.test( str );
            }
        },
        {
            type: 'input',
            name: 'ghUser',
            message: 'What is your Github username?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the project license?',
            choices: [ 'WTFPL', 'ISC', 'MIT' ]
        }
    ];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      Object.keys( props ).forEach( function( prop ) {
        this[ prop ] = props[ prop ];
    }.bind( this ));

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
        this.template( '_package.json', 'package.json' );
        this.template( '_bower.json', 'bower.json' );
        this.template( 'jshintrc', '.jshintrc' );
        this.src.copy( 'bowerrc', '.bowerrc' );
        this.template( '_README.md', 'README.md' );
        this.src.copy( 'gitignore', '.gitignore' );

        this.template( '_gulpfile.js', 'gulpfile.js' );
        this.template( '_index.html', 'index.html' );

        this.directory( './src/', './src/' );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
