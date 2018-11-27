"use strict";
cc._RF.push(module, '233a1eVDeNNfJzmxXNq3nI/', 'Type2NPCPlayer');
// scripts/Type2NPCPlayer.js

'use strict';

var BasePlayer = require("./BasePlayer");

cc.Class({
  extends: BasePlayer,

  // LIFE-CYCLE CALLBACKS:
  start: function start() {
    BasePlayer.prototype.start.call(this);
  },
  onLoad: function onLoad() {
    BasePlayer.prototype.onLoad.call(this);
    this.clips = {
      '01': 'FlatHeadSisterRunTop',
      '0-1': 'FlatHeadSisterRunBottom',
      '-20': 'FlatHeadSisterRunLeft',
      '20': 'FlatHeadSisterRunRight',
      '-21': 'FlatHeadSisterRunTopLeft',
      '21': 'FlatHeadSisterRunTopRight',
      '-2-1': 'FlatHeadSisterRunBottomLeft',
      '2-1': 'FlatHeadSisterRunBottomRight'
    };
  },
  update: function update(dt) {}
});

cc._RF.pop();