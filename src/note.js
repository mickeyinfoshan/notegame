var BEGIN_Y = 0;
var END_Y = 0;

var Note = cc.Sprite.extend({
	v : null,
	x : null,
	tag : null,
	layer : null,
	init : function(v_,layer_){
		this._super();
		this.v = v_;
		this.layer = layer_;
		this.init_tag();
		this.init_x();
        this.setAnchorPoint(0.5,0.5);
        this.setPosition(this.x,SIZE.height);
		this.layer.addChild(this);
		this.schedule(this.moveDown);
	},
	init_tag : function() {
        var note_source_list = [s_note0,s_note1,s_note2,s_note3];
        this.tag = Math.floor(Math.random() * 3);
        this.initWithFile(note_source_list[this.tag]);
	},
	init_x : function() {
        this.x = Math.floor(Math.random() * SIZE.width);
	},
	moveDown:function(dt){
        var y = this.getPositionY();
        y = y - this.v * dt;
        this.setPositionY(y);
        if(y<END_Y){
        	this.destroy();
            this.layer.gameOver();
        }        
    },
    destroy : function() {
    	var note_index = this.layer.note_list.indexOf(this);
    	this.layer.note_list.splice(note_index,1);
    	this.layer.removeChild(this);
    },
    isInRange : function() {
    	var y = this.getPositionY();
    	if(y>BEGIN_Y && y < END_Y) {
    		return true;
    	}
    	return false;
    },

});