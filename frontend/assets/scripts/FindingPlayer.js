cc.Class({
  extends: cc.Component,

  properties: {
   firstPlayerInfoNode: {
      type: cc.Node,
      default: null
    },
    secondPlayerInfoNode: {
      type: cc.Node,
      default: null
    },
    findingAnimNode: {
      type: cc.Node,
      default: null
    },
    myAvatarNode: {
      type: cc.Node,
      default: null
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
  },
  init() {
    this.firstPlayerInfoNode.active = false;
    this.secondPlayerInfoNode.active = false;
    this.playersInfoNode = {};
    Object.assign(this.playersInfoNode, {1: this.firstPlayerInfoNode});
    Object.assign(this.playersInfoNode, {2: this.secondPlayerInfoNode});

    window.firstPlayerInfoNode = this.firstPlayerInfoNode;
    this.findingAnimNode.active = true;
  },
  exitBtnOnClick(evt) {
    window.closeWSConnection();
    window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
    cc.sys.localStorage.removeItem('selfPlayer');
    cc.director.loadScene('login');
  },
  updatePlayersInfo(players) {
    if (!players) return;
    for (let i in players) {
      const playerInfo = players[i];
      const playerInfoNode = this.playersInfoNode[playerInfo.joinIndex];
      const nameNode = playerInfoNode.getChildByName("name");
      nameNode.getComponent(cc.Label).string = constants.PLAYER_NAME[playerInfo.joinIndex]; 
      playerInfoNode.active = true;
      if (2 == playerInfo.joinIndex) {
        this.findingAnimNode.active = false;
      }
    }

    //显示自己的头像名称以及他人的头像名称
    for (let i in players) {
      const playerInfo = players[i];
      const playerInfoNode = this.playersInfoNode[playerInfo.joinIndex];

      (() => { //远程加载头像
        let remoteUrl = playerInfo.avatar;
        if(remoteUrl == ''){
          console.log('用户'+ i +' 没有头像, 提供临时头像');
          remoteUrl = 'http://wx.qlogo.cn/mmopen/xzq2UIB49VaicY1Hk3jDLk6e8nISmsQuEcqxicEMuC1jKx75QnwibDLWnRHoEmMZdKOJWjspUd8aSD8DfoUYLEqQJ6rcHibNP5Gib/0';
        }
        cc.loader.load({url: remoteUrl, type: 'jpg'}, function (err, texture) {
          if(err != null){
            console.error(err);
          }else{
            const sf = new cc.SpriteFrame();
            sf.setTexture(texture);
            playerInfoNode.getChildByName('avatarMask').getChildByName('avatar').getComponent(cc.Sprite).spriteFrame = sf;
          }
        });
      })();


      const nameNode = playerInfoNode.getChildByName("name");
      nameNode.getComponent(cc.Label).string = playerInfo.name; 
    }
  },
});
