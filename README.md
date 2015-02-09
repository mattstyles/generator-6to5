# generator-6to5 [![Build Status](https://secure.travis-ci.org/mattstyles/generator-6to5.png?branch=master)](https://travis-ci.org/mattstyles/generator-6to5)

> [Yeoman](http://yeoman.io) generator for scaffolding [6to5](http://6to5.org/) built client-side apps.

If [Slush](http://slushjs.github.io/) is more your thing then consider checking out the slightly more involved [slush-es2015](https://github.com/mattstyles/slush-es2015).

## Tech List

* Less
* Browserify
* 6to5
* Built with Gulp

## Getting Started

```bash
npm install -g yo
npm install -g generator-6to5
mkdir awesome-app && cd $_
yo 6to5
```

This generator is pretty skinny on functionality but it’ll scaffold you out a good and clean starting point for exploring 6to5.

## Browserify

_A note on browserify_

You might be wondering why the template package specifies `browserify 7.0.x` rather than the latest, well, there is a bug regarding `watchify` that results in builds exponentially growing in size. The fix is simply to use `7.0.x` and not worry about it, although, if you’re not interested in watching files then go ahead and use the latest.

## Yeoman

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

WTFPL
