function createNoteButton(layer,tag) {
	var normalImgList = [s_button0,s_button1,s_button2,s_button3];
	var selectedImgList = [s_button0,s_button1,s_button2,s_button3];
	var noteClickHandler = function() {
		var note = layer.note_list[0];
		if(tag == note.tag && note.isInRange()) {
			layer.point += 10;
			layer.pointLabel.setString(layer.point);
		}
		else{
			layer.gameOver();
		}
	};
	var noteButton = cc.MenuItemImage.create(
            normalImgList[tag],
            selectedImgList[tag],
            noteClickHandler,layer);
	noteButton.tag = tag;
    noteButton.setAnchorPoint(0.5, 0.5);
    //layer.addChild(noteButton);
    var menu = cc.Menu.create(noteButton);
    menu.setPositionX(tag * SIZE.width / 4 + SIZE.width / 8);
    menu.setPositionY(noteButton.getContentSize().height);
    layer.addChild(menu);
    return noteButton;
}