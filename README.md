# React Suspense Demo

> React Suspense: _"A generic way for components to suspend rendering while they load asynchronous data"_ - **Dan Abramov**

## Demo

https://romaindso.github.io/react-suspense-demo/

3 mini apps to experiments with **React Suspense**

- Todolist
- Pokédex (with images)
- Component's lazy loading

Use the menu to navigate between these 3 examples.  
Refresh the page to see React Suspense in action

## Run

```bash
npm install
npm start
```

## How to to play with Suspense

- checkout [facebook/react](https://github.com/facebook/react/)
- set enableStableConcurrentModeAPIs = true in `ReactFeatureFlags.js`
- run `yarn build`
- copy `build/dist/*` to some dir in your project
- setup alias: {react: ‘dir/react.whatever.js’ (and react-dom, etc) in webpack/parcel/etc config

Credits: [@threepointone](https://twitter.com/threepointone/status/1027660980342468608)

## License

MIT
