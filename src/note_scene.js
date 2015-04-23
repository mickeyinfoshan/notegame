var NoteScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var noteLayer = new NoteLayer();
        this.addChild(noteLayer);
        noteLayer.init();
    }
});