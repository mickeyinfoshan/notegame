var SIZE = null;

var NoteLayer = cc.Layer.extend({
	background : null,
	note_list : [],
	bottom_buttons : [],
	point : 0,
	pointLabel : null,
	note_speed : 15,
	note_intervel : 2,
	hardship_change_interval : 5,	
	init : function() {
		this._super();
		this.setTouchEnabled(true);
		SIZE = cc.Director.getInstance().getWinSize();
		BEGIN_Y = SIZE.height;
		
		this.addBackground();
		this.addButtons();
		this.addPointLabel();

		this.schedule(this.addNotes,this.note_intervel);
		this.schedule(this.changeHardShip, this.hardship_change_interval);
	},
	addButtons : function() {
		for(var i = 0; i<4; i++) {
			var tag = i;
			var button = createNoteButton(this,tag);
			//button.setPosition(i/4*SIZE.width,SIZE.height/2);
			this.bottom_buttons.push(button);
			//this.addChild()		
		}
		/*var menu = cc.Menu.create(this.bottom_buttons[0]);
		menu.setPosition(SIZE.width/2, SIZE.height/2);
		this.addChild(menu);*/
	},
	addNotes : function() {
		console.log("add!!");
		var note = new Note();
		note.init(this.note_speed,this);
		this.note_list.push(note);
	},
	changeNoteSpeend : function(dt) {
		var deltaSpeed = 10;
		this.note_speed += deltaSpeed;
	},
	changeNoteInterval : function(dt) {
		var deltaIntervel = 1;
		var minIntervel = 1;
		if(this.note_intervel>minIntervel)
			this.note_intervel -= deltaIntervel;
	},
	changeHardShip : function(dt) {
		this.changeNoteSpeend(dt);
		this.changeNoteInterval(dt);
	},

	gameOver : function() {
		this.unscheduleAllCallbacks(); 
		this.note_list = [];
		this.pointLabel.setString('game over');
	},

	addBackground : function() {
		this.background = cc.Sprite.create(s_HelloWorld);
        this.background.setAnchorPoint(0.5, 0.5);
        this.background.setPosition(SIZE.width / 2, SIZE.height / 2);
        //this.background.setHeight(SIZE.height);
        
        this.background.setOpacity(100);
        //this.background.setContentSize(SIZE.width,SIZE.height);
        var scale = SIZE.height/this.background.getContentSize().height;
        this.background.setScale(scale);
        this.addChild(this.background, 0);

	},

	addPointLabel : function() {
		this.pointLabel = cc.LabelTTF.create('0', "Impact", 42);
		this.pointLabel.setPosition(SIZE.width / 2, SIZE.height * 3 / 4);
		this.addChild(this.pointLabel,5);
	}
});