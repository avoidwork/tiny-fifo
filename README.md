# tiny-fifo
Tiny FIFO cache for Client or Server

[![build status](https://secure.travis-ci.org/avoidwork/tiny-fifo.svg)](http://travis-ci.org/avoidwork/tiny-fifo)

```javascript
const cache = fifo(max, ttl = 0);
```

## clear
### Method

Clears the contents of the cache

	return {Object} fifo instance

**Example**

```javascript
cache.clear();
```

## delete
### Method

Removes item from cache

	param  {String} key Item key
	return {Object}     fifo instance

**Example**

```javascript
cache.delete("myKey");
```

## evict
### Method

Evicts the first item from cache

	return {Object} fifo instance

**Example**

```javascript
cache.evict();
```

## get
### Method

Gets item in cache

	param  {String} key Item key
	return {Mixed}      Undefined or Item value

**Example**

```javascript
const item = cache.get("myKey");
```

## keys
### Method

Returns an `Array` of cache item keys

	return {Array} Array of keys

**Example**

```javascript
console.log(cache.keys());
```

## max
### Property

Max items to hold in cache (1000)

**Example**

```javascript
const cache = fifo(500);

cache.max; // 500
```

## set
### Method

Sets item in cache

	param  {String} key   Item key
	param  {Mixed}  value Item value
	return {Object}       fifo instance

**Example**

```javascript
cache.set("myKey", {prop: true});
```

## size
### Property

Number of items in cache

**Example**

```javascript
const cache = fifo();

cache.size; // 0 - it's a new cache!
```

## ttl
### Property

Milliseconds an item will remain in cache; lazy expiration upon next `get()` of an item

**Example**

```javascript
const cache = fifo();

cache.ttl = 3e4;
```

## License
Copyright (c) 2019 Jason Mulligan
Licensed under the BSD-3 license.
