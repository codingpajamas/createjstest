var data = {};
 
data.assets = [
	{id:"sky", src:"images/Gulljakten_bakgrunn_clear.png"},
	{id:"heartOn", src:"images/heart.png"},
	{id:"heartOff", src:"images/heartdead.png"},
	{id:"cloud_0", src:"images/cloud_0.png"},
	{id:"cloud_1", src:"images/cloud_1.png"},
	{id:"cloud_2", src:"images/cloud_2.png"},
	{id:"cloud_3", src:"images/cloud_3.png"},
	{id:"cloud_4", src:"images/cloud_4.png"},
	{id:"forest", src:"images/Gulljakten_bakgrunn_objects.png"},
	{id:"house", src:"images/Gulljakten_house.png"},
	{id:"lock", src:"images/lock.png"},
	{id:"window_1", src:"images/windows/1.png"},
	{id:"window_2", src:"images/windows/2.png"},
	{id:"window_3", src:"images/windows/3.png"},
	{id:"window_4", src:"images/windows/4.png"},
	{id:"window_5", src:"images/windows/5.png"},
	{id:"window_6", src:"images/windows/6.png"},
	{id:"window_7", src:"images/windows/7.png"},
	{id:"window_8", src:"images/windows/8.png"},
	{id:"window_9", src:"images/windows/9.png"},
	{id:"die_1", src:"images/die_1.png"},
	{id:"die_2", src:"images/die_2.png"},
	{id:"die_3", src:"images/die_3.png"},
	{id:"die_4", src:"images/die_4.png"},
	{id:"die_5", src:"images/die_5.png"},
	{id:"die_6", src:"images/die_6.png"},
	{id:"return", src:"images/Bitmap1.png"},
	{id:"lvlBg_1", src:"images/Gulljakten_CloseUp_0_bg.png"},
	{id:"lvlBg_2", src:"images/Gulljakten_CloseUp_1_bg.png"},
	{id:"lvlBg_3", src:"images/Gulljakten_CloseUp_2_bg.jpg"},
	{id:"lvlBg_4", src:"images/Gulljakten_CloseUp_3_bg.jpg"},
	{id:"lvlBg_5", src:"images/Gulljakten_CloseUp_4_bg.jpg"},
	{id:"lvlBg_6", src:"images/Gulljakten_CloseUp_5_bg.jpg"},
	{id:"lvlBg_7", src:"images/Gulljakten_CloseUp_6_bg.jpg"},
	{id:"lvlBg_8", src:"images/Gulljakten_CloseUp_7_bg.jpg"},
	{id:"lvlBg_9", src:"images/Gulljakten_CloseUp_8_bg.jpg"},
	{id:"lvlFrame_1", src:"images/Gulljakten_CloseUp_frame_0.png"},
	{id:"lvlFrame_2", src:"images/Gulljakten_CloseUp_frame_1.png"},
	{id:"lvlFrame_3", src:"images/Gulljakten_CloseUp_frame_2.png"},
	{id:"lvlFrame_4", src:"images/Gulljakten_CloseUp_frame_3.png"},
	{id:"lvlFrame_5", src:"images/Gulljakten_CloseUp_frame_4.png"},
	{id:"lvlFrame_6", src:"images/Gulljakten_CloseUp_frame_5.png"},
	{id:"lvlFrame_7", src:"images/Gulljakten_CloseUp_frame_6.png"},
	{id:"lvlFrame_8", src:"images/Gulljakten_CloseUp_frame_7.png"},
	{id:"lvlFrame_9", src:"images/Gulljakten_CloseUp_frame_8.png"},
	{id:"banner", src:"images/banner.png"},
	{id:"boomerang", src:"clips/boom/boom.json", type:"spritesheet"},
	{id:"ansWrong", src:"sounds/effects/feil_lyd_gulljakten.mp3", type:"sound"},
	{id:"ansCorrect", src:"sounds/effects/riktig_lyd_gulljakten.mp3", type:"sound"},
	{id:"mainIntro", src:"sounds/nb/R2_05.mp3", type:"sound"},
	{id:"lvlIntro1_1", src:"sounds/nb/R2_1_01.mp3", type:"sound"},
	{id:"lvlIntro2_1", src:"sounds/nb/R2_2_01.mp3", type:"sound"},
	{id:"lvlIntro3_1", src:"sounds/nb/R2_3_01.mp3", type:"sound"},
	{id:"lvlIntro4_1", src:"sounds/nb/R2_4_01.mp3", type:"sound"},
	{id:"lvlIntro5_1", src:"sounds/nb/R2_5_01.mp3", type:"sound"},
	{id:"lvlIntro6_1", src:"sounds/nb/R2_6_01.mp3", type:"sound"},
	{id:"lvlIntro7_1", src:"sounds/nb/R2_7_01.mp3", type:"sound"},
	{id:"lvlIntro8_1", src:"sounds/nb/R2_8_01.mp3", type:"sound"},
	{id:"lvlIntro9_1", src:"sounds/nb/R2_9_01.mp3", type:"sound"}, 
	{id:"lvlEnd1", src:"sounds/nb/R2_1_04.mp3", type:"sound"},
	{id:"lvlEnd2", src:"sounds/nb/R2_2_04.mp3", type:"sound"},
	{id:"lvlEnd3", src:"sounds/nb/R2_3_04.mp3", type:"sound"},
	{id:"lvlEnd4", src:"sounds/nb/R2_4_04.mp3", type:"sound"},
	{id:"lvlEnd5", src:"sounds/nb/R2_5_04.mp3", type:"sound"},
	{id:"lvlEnd6", src:"sounds/nb/R2_6_04.mp3", type:"sound"},
	{id:"lvlEnd7", src:"sounds/nb/R2_7_04.mp3", type:"sound"},
	{id:"lvlEnd8", src:"sounds/nb/R2_8_04.mp3", type:"sound"},
	{id:"lvlEnd9", src:"sounds/nb/R2_9_04.mp3", type:"sound"},
]

data.clouds = [
	{id:0, x:-100, y:50, tween:[{x:-200, s:5000}, {x:-100, s:30000}]},
	{id:1, x:300, y:70, tween:[{x:-600, s:20000}, {x:300, s:30000}]},
	{id:2, x:600, y:190, tween:[{x:-600, s:15000}, {x:600, s:30000}]},
	{id:3, x:900, y:100, tween:[{x:-500, s:20000}, {x:900, s:30000}]},
	{id:4, x:1200, y:200, tween:[{x:-300, s:30000}, {x:1200, s:30000}]}
] 

data.subtitles = [
	{id:"mainIntro", txt:"Are you good with numbers? Then you might be able to open these windows."},
	{id:"lvlIntro1_1", txt:"Point at the window that is equal to the sum of the dice!"},
	{id:"lvlIntro2_1", txt:"Point at the correct sum."},
	{id:"lvlIntro3_1", txt:"Subtract the numbers, what is the answer?"},
	{id:"lvlIntro4_1", txt:"Now it will become more difficult. Will you make it?"},
	{id:"lvlIntro5_1", txt:"Oh, thes are bigger numbers, point at the answer."},
	{id:"lvlIntro6_1", txt:"Subtraction with big numbers, cool!"},
	{id:"lvlIntro7_1", txt:"Not easy, see if you can make it."},
	{id:"lvlIntro8_1", txt:"Oh? So many numbers? Ok, I guess you'll make it."},
	{id:"lvlIntro9_1", txt:"Oh no. We are not supposed to know this, are we? HAHA"},
	{id:"lvlEnd1", txt:"Yes, you did it! Time for a movie."},
	{id:"lvlEnd2", txt:"Yes, play movie!"},
	{id:"lvlEnd3", txt:"Yes, you are good!"},
	{id:"lvlEnd4", txt:"Yes, you made it."},
	{id:"lvlEnd5", txt:"You made it, yippie!"},
	{id:"lvlEnd6", txt:"Yippie!!! Here comes the movie!"},
	{id:"lvlEnd7", txt:"Thanks!"},
	{id:"lvlEnd8", txt:"Yes, - we made it."},
	{id:"lvlEnd9", txt:"You are solving it all! Very good, you have opened all the windows of the house! The next time you can enter wherever you feel like."}
]

data.windows = [ 
	{id:1, x:460, y:520, locked:false, score:0, type:"dice", difficulty:"easy"},
	{id:2, x:620, y:520, locked:false, score:0, type:"add_easy", difficulty:"easy"},
	{id:3, x:770, y:510, locked:false, score:0, type:"subtract_easy", difficulty:"easy"},
	{id:4, x:450, y:360, locked:false, score:0, type:"combo_easy", difficulty:"easy"},
	{id:5, x:600, y:360, locked:false, score:0, type:"add_easy", difficulty:"easy"},
	{id:6, x:770, y:352, locked:false, score:0, type:"subtract_easy", difficulty:"easy"},
	{id:7, x:468, y:160, locked:false, score:0, type:"combo_easy", difficulty:"easy"},
	{id:8, x:610, y:160, locked:false, score:0, type:"add_advanced", difficulty:"easy"},
	{id:9, x:756, y:160, locked:false, score:0, type:"subtract_advanced", difficulty:"easy"},
]

data.getLevelData = function(){
	return [
		{
			"id":1, "x":494, "y":228, "w":136, "h":136, 
			n:[{"id":2,"val":rand(8), "bg":"#f49399"}, {"id":3,"val":rand(8), "bg":"#ffebc1"}, {"id":4,"val":rand(8), "bg":"#addded"}]
		},
		{
			"id":2, "x":632, "y":228, "w":136, "h":136, 
			n:[{"id":2,"val":rand(9), "bg":"#f49399"}, {"id":3,"val":rand(9), "bg":"#ffebc1"}, {"id":4,"val":rand(9), "bg":"#addded"}]
		},
		{
			"id":3, "x":770, "y":228, "w":136, "h":136, 
			n:[{"id":2,"val":rand(10), "bg":"#f49399"}, {"id":3,"val":rand(10), "bg":"#ffebc1"}, {"id":4,"val":rand(10), "bg":"#addded"}]
		},
		{
			"id":4, "x":494, "y":366, "w":136, "h":136, 
			n:[{"id":2,"val":rand(11), "bg":"#f49399"}, {"id":3,"val":rand(11), "bg":"#ffebc1"}, {"id":4,"val":rand(11), "bg":"#addded"}]
		},
		{
			"id":5, "x":632, "y":366, "w":136, "h":136, 
			n:[{"id":2,"val":rand(12), "bg":"#f49399"}, {"id":3,"val":rand(12), "bg":"#ffebc1"}, {"id":4,"val":rand(12), "bg":"#addded"}]
		},
		{
			"id":6, "x":770, "y":366, "w":136, "h":136, 
			n:[{"id":2,"val":rand(12), "bg":"#f49399"}, {"id":3,"val":rand(12), "bg":"#ffebc1"},{"id":4,"val":rand(12), "bg":"#addded"}]
		},
		{
			"id":7, "x":494, "y":502, "w":136, "h":136, 
			n:[{"id":2,"val":rand(12), "bg":"#f49399"}, {"id":3,"val":rand(12), "bg":"#ffebc1"}, {"id":4,"val":rand(12), "bg":"#addded"}]
		},
		{
			"id":8, "x":632, "y":502, "w":136, "h":136, 
			n:[{"id":2,"val":rand(12), "bg":"#f49399"}, {"id":3,"val":rand(12), "bg":"#ffebc1"}, {"id":4,"val":rand(12), "bg":"#addded"}]
		},
		{
			"id":9, "x":770, "y":502, "w":136, "h":136, 
			n:[{"id":2,"val":rand(12), "bg":"#f49399"}, {"id":3,"val":rand(12), "bg":"#ffebc1"}, {"id":4,"val":rand(12), "bg":"#addded"}]
		} 
	] 
};