//text being displayed
var txt = "Animal Sound Drum Machine";
var txt2 = "By Isabella Heron";

//SOUNDS
var AS;
var BS;
var CS;
var DS;
var ES;
var FS;
var GS;
var HS;
var IS;
var JS;
var KS;
var LS;
var MS;
var NS;
var OS;
var PS;
var QS;
var RS;
var SS;
var TS;
var US;
var VS;
var WS;
var XS;
var YS;
var ZS;

//OBJECTS
var aObject;
var bObject;
var cObject;
var dObject;
var eObject;
var fObject;
var gObject;
var hObject;
var iObject;
var jObject;
var kObject;
var lObject;
var mObject;
var nObject;
var oObject;
var pObject;
var qObject;
var rObject;
var sObject;
var tObject;
var uObject;
var vObject;
var wObject;
var xObject;
var yObject;
var zObject;

//LETTER IMAGES
var AA;
var BB;
var CC;
var DD;
var EE;
var FF;
var GG;
var HH;
var II;
var JJ;
var KK;
var LL;
var MM;
var NN;
var OO;
var PP;
var QQ;
var RR;
var SS;
var TT;
var UU;
var VV;
var WW;
var XX;
var YY;
var ZZ;

//ANIMAL IMAGES
var Aligator;
var Bear;
var Cat;
var Dog;
var Elephant;
var Fox;
var Goat;
var Horse;
var Ibis;
var Jaguar;
var Koala;
var Lion;
var Monkey;
var Narwhal;
var Owl;
var Pig;
var Quail;
var Rooster;
var Snake;
var Turkey;
var Unicorn;
var Vulture;
var Walrus;
var Xray;
var Yak;
var Zebra;

function preload() {
	//sounds
	AS = loadSound("sounds/gator.wav");
	BS = loadSound("sounds/bear.wav");
	CS = loadSound("sounds/cat.wav");
	DS = loadSound("sounds/dog.wav");
	ES = loadSound("sounds/elephant.wav");
	FS = loadSound("sounds/fox.wav");
	GS = loadSound("sounds/gator.wav");
	HS = loadSound("sounds/horse.wav");
	IS = loadSound("sounds/ibis.wav");
	JS = loadSound("sounds/jaguar.wav");
	KS = loadSound("sounds/koala.wav");
	LS = loadSound("sounds/lion.wav");
	MS = loadSound("sounds/monkey.wav");
	NS = loadSound("sounds/narwhal.wav");
	OS = loadSound("sounds/owl.wav");
	PS = loadSound("sounds/pig.wav");
	QS = loadSound("sounds/quail.wav");
	RS = loadSound("sounds/rooster.wav");
	SNS = loadSound("sounds/snake.wav");
	TS = loadSound("sounds/turkey.wav");
	US = loadSound("sounds/unicorn.wav");
	VS = loadSound("sounds/vulture.wav");
	WS = loadSound("sounds/walrus.wav");
	XS = loadSound("sounds/xenon.wav");
	YS = loadSound("sounds/yak.wav");
	ZS = loadSound("sounds/zebra.wav");
	
	//animal images
  Aligator = loadImage("animals/gator.png");
  Bear = loadImage("animals/bear.png");
  Cat = loadImage("animals/cat.png");
  Dog = loadImage("animals/dog.png");
  Elephant = loadImage("animals/elephant.png");
  Fox = loadImage("animals/fox.png");
  Goat = loadImage("animals/goat.png");
  Horse = loadImage("animals/horse.png");
  Ibis = loadImage("animals/ibis.png");
  Jaguar = loadImage("animals/jaguar.png");
  Koala = loadImage("animals/koala.png");
  Lion = loadImage("animals/lion.png");
  Monkey = loadImage("animals/monkey.png");
  Narwhal = loadImage("animals/narwhal.png");
  Owl = loadImage("animals/owl.png");
  Pig = loadImage("animals/pig.png");
  Quail = loadImage("animals/quail.png");
  Rooster = loadImage("animals/rooster.png");
  Snake = loadImage("animals/snake.png");
  Turkey = loadImage("animals/turkey.png");
  Unicorn = loadImage("animals/unicorn.png");
  Vulture = loadImage("animals/vulture.png");
  Walrus = loadImage("animals/walrus.png");
  Xray = loadImage("animals/xray.png");
  Yak = loadImage("animals/yak.png");
  Zebra = loadImage("animals/zebra.png");

	
	//letter images
	AA = loadImage("letters/a.png");
  BB = loadImage("letters/b.png");
  CC = loadImage("letters/c.png");
  DD = loadImage("letters/d.png");
  EE = loadImage("letters/e.png");
	FF = loadImage("letters/f.png");
  GG = loadImage("letters/g.png");
  HH = loadImage("letters/h.png");
  II = loadImage("letters/i.png");
  JJ = loadImage("letters/j.png");
  KK = loadImage("letters/k.png");
  LL = loadImage("letters/l.png");
  MM = loadImage("letters/m.png");
  NN = loadImage("letters/n.png");
  OO = loadImage("letters/o.png");
  PP = loadImage("letters/p.png");
  QQ = loadImage("letters/q.png");
  RR = loadImage("letters/r.png");
  SS = loadImage("letters/s.png");
  TT = loadImage("letters/t.png");
  UU = loadImage("letters/u.png");
  VV = loadImage("letters/v.png");
  WW = loadImage("letters/w.png");
  XX = loadImage("letters/x.png");
  YY = loadImage("letters/y.png");
  ZZ = loadImage("letters/z.png");
}

function setup() {
	background("#FFFF00");
  createCanvas(windowWidth, windowHeight);
	aObject = new AnimalLetter(AA, Aligator, AS, 10 ,0);
	bObject = new AnimalLetter(BB, Bear, BS, 213 ,0);
	cObject = new AnimalLetter(CC, Cat, CS, 416 ,0);
	dObject = new AnimalLetter(DD, Dog, DS, 619 ,0);
	eObject = new AnimalLetter(EE, Elephant, ES, 822 ,0);
	fObject = new AnimalLetter(FF, Fox, FS, 1025 ,0);
	gObject = new AnimalLetter(GG, Goat, GS, 1228 ,0);	
	hObject = new AnimalLetter(HH, Horse, HS, 110 ,208);	
	iObject = new AnimalLetter(II, Ibis, IS, 313 ,208);	
	jObject = new AnimalLetter(JJ, Jaguar, JS, 516 ,208);		
	kObject = new AnimalLetter(KK, Koala, KS, 719 ,208);	
	lObject = new AnimalLetter(LL, Lion, LS, 922 ,208);	
	mObject = new AnimalLetter(MM, Monkey, MS, 1125 ,208);	
	nObject = new AnimalLetter(NN, Narwhal, NS, 10 ,416);	
	oObject = new AnimalLetter(CC, Owl, OS, 213 ,416);	
	pObject = new AnimalLetter(PP, Pig, PS, 416 ,416);	
	qObject = new AnimalLetter(QQ, Quail, QS, 619 ,416);	
	rObject = new AnimalLetter(RR, Rooster, RS, 822 ,416);	
	sObject = new AnimalLetter(SS, Snake, SNS, 1025 ,416);	
	tObject = new AnimalLetter(TT, Turkey, TS, 1228 ,416);	
	uObject = new AnimalLetter(UU, Unicorn, US, 110 ,625);	
	vObject = new AnimalLetter(VV, Vulture, VS, 313 ,625);	
	wObject = new AnimalLetter(WW, Walrus, WS, 516 ,625);	
	xObject = new AnimalLetter(XX, Xray, XS, 719 ,625);	
	yObject = new AnimalLetter(YY, Yak, YS, 922 ,625);	
	zObject = new AnimalLetter(ZZ, Zebra, ZS, 1125 ,625);	
}

function draw() {
	aObject.show();
	bObject.show();
	cObject.show();
	dObject.show();
	eObject.show();
	fObject.show();
	gObject.show();
	hObject.show();
	iObject.show();
	jObject.show();
	kObject.show();
	lObject.show();
	mObject.show();
	nObject.show();
	oObject.show();
	pObject.show();
	qObject.show();
	rObject.show();
	sObject.show();
	tObject.show();
	uObject.show();
	vObject.show();
	wObject.show();
	xObject.show();
	yObject.show();
	zObject.show();
	verticalText(txt, 1515, 100);
	verticalText(txt2, 1545, 230);
}


function mouseClicked(){ //check for button clicks
	aObject.clicked();
	bObject.clicked();
	cObject.clicked();
	dObject.clicked();
	eObject.clicked();
	fObject.clicked();
	gObject.clicked();
	hObject.clicked();
	iObject.clicked();
	jObject.clicked();
	kObject.clicked();
	lObject.clicked();
	mObject.clicked();
	nObject.clicked();
	oObject.clicked();
	pObject.clicked();
	qObject.clicked();
	rObject.clicked();
	sObject.clicked();
	tObject.clicked();
	uObject.clicked();
	vObject.clicked();
	wObject.clicked();
	xObject.clicked();
	yObject.clicked();
	zObject.clicked();
}
 
function verticalText(input, x, y) { //function that draws vertical text
  var output = "";  // create an empty string
  for (var i = 0; i < input.length; i += 1) {
    output += input.charAt(i) + "\n"; // add each character with a line break in between
  }
  push(); // use push and pop to restore style (in this case the change in textAlign) after displaing the text 
  textAlign(CENTER, TOP); // center the characters horizontaly with CENTER and display them under the provided y with TOP
	textSize(20);//sets text size to 20
  text(output, x, y); // display the text
  pop();
}

function AnimalLetter(letterImg, animalImg, sound, x, y){
	this.letter = letterImg;
	this.animal = animalImg;
	this.sound = sound;
	this.x = x;
	this.y = y;
	this.currentImage = this.letter;
	this.show = function(){
		image(this.currentImage, x, y, this.currentImage.width/4.5, this.currentImage.height/4.5);
		}
	this.clicked = function() {
		//console.log("clicking in obj");
		//console.log(collidePointRect(mouseX,mouseY,this.x, this.y, this.currentImage.width/3,this.currentImage.height/3))
    if(collidePointRect(mouseX,mouseY,this.x, this.y,this.currentImage.width/4.5,this.currentImage.height/4.5)){
			//console.log("click detected");
			if(this.currentImage == this.letter){
				this.currentImage = this.animal;
				this.sound.loop();
				} else {
						this.currentImage = this.letter;
						this.sound.setLoop(false);
      }
    };
  };
}