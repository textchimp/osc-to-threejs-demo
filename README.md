# OSC to the Browser via Websockets

1. Start the relay server
```bash
node js/ws-osc-relay.js
```
Note you will need the NPM packages `osc`, `express` and `ws`
```bash
npm i -g osc express ws
```

2. Open `index.html` in your browser

3. Send an OSC message to the browser from Sonic Pi:

```ruby
live_loop :oscy do
  zzz = 0.5
  note = 50
  play note
  osc_send "localhost", 57121, "/note", tick, zzz, note
  sleep zzz
end
```

Note you can also use any OSC-enabled app or code to send this OSC message, but for this Three.js demo to work, the second argument (`zzz`, the note duration) must be around 0.5 - 2.0.

4. $$ Profit $$
