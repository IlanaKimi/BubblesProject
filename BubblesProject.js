(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TorsoSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpFZIhDlxQgRhaAghUQAhhVBHg1QAQgLAKAFIBmAAQBHBSASCVQAKBKgFA5IAKFFg");
	mask.setTransform(24.9693,34.4347);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape.setTransform(27.775,6.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_1.setTransform(27.775,14.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_2.setTransform(27.775,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_3.setTransform(27.775,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_4.setTransform(27.775,39.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_5.setTransform(27.775,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_6.setTransform(27.775,55.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_7.setTransform(27.775,63.15);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4F4F2").s().p("AhpFZIhDlxQgRhaAghUQAhhVBHg1QAQgLAKAFIBmAAQBHBSASCVQAKBKgFA5IAKFFg");
	this.shape_8.setTransform(24.9693,34.4347);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TorsoSide, new cjs.Rectangle(7.1,0,35.8,68.9), null);


(lib.torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTFVIggpiICmhHICbAAICmBHIggJig");
	mask.setTransform(26.525,34.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape.setTransform(27.775,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_1.setTransform(27.775,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_2.setTransform(27.775,21.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_3.setTransform(27.775,29.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_4.setTransform(27.775,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_5.setTransform(27.775,45.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_6.setTransform(27.775,53.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A1A1A").ss(1.9).p("AkVAAIIrAA");
	this.shape_7.setTransform(27.775,61.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// MergedLayer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4F4F2").s().p("AjTFVIggpiICmhHICbAAICmBHIggJig");
	this.shape_8.setTransform(26.525,34.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(2.1,0,48.9,68.1), null);


(lib.Start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpCzQgDAAgBgEQAAgCACgFIAhhTIhWi8IgDgGIgCgFQgBgEABgDQABgDADgCQADgDAGgCIAOgEIAQgEQAFgBADAAQADABABACQACACABADIA7CKIAAgBQAHgTAFgUQAFgVACgUIAFgpIACgpIABgFQABgCAEgCIAJgEIAQgFQAOgEAGAAQAGABACAFIABAGIAAAIIgFAxQgDAZgGAbQgFAbgIAeQgIAcgMAhIgjBfIgEAGQgCADgEACQgFADgFACIgPAFIgQAEIgFAAIgFgBg");
	this.shape.setTransform(33.675,20.645);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtCHQgNgEgLgJQgKgJgGgNQgIgNgEgQQgEgOgBgSQgCgSABgTQABgRAFgSQAFgSAJgQQAJgQAOgLQAOgMAVgFQATgGAQAFQARAEAPAMIgCgTQAAgGAGgDQAFgEAOgEIAMgCIAIgBQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAIABAEIAODYQABAFgGAEQgGAEgNAEIgMACIgIABIgEgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgCgjQgCAIgFAKQgFAKgJAKQgIAJgMAIQgLAIgMAEQgMADgJAAIgMgBgAgIg/QgKACgHAHQgGAHgFAKQgEAJgCALQgCALAAALQAAAMABAMIAEAVIAFANQACAGAFAEQAEAEAFACQAFABAIgCQAJgDAJgJQAIgIAHgNQAGgNAEgQQACgQAAgQIgCghQgMgKgLgEQgGgCgHAAQgEAAgGACg");
	this.shape_1.setTransform(6.975,23.7229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQCsQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgUk+QAAgDABgCQABgCADgCIAJgEIAOgFIANgDIAJAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIAVE+IgBAFIgEAEIgKAEIgNAEIgOAEIgIAAIgFgBg");
	this.shape_2.setTransform(-15.3833,25.0125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUCqQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBIgSkaQgBgLAFgHQAFgIALgDIBAgRQAMgDAJgCIATgCQAPgBANACQAMAEAKAGQAKAHAIAKQAHALAEAPQADAMABAPQABAPgDAPQgDAQgGAOQgIAPgMAOQgMAMgSAKQgSALgaAHIgeAIIAGBlIgBAFIgFAEIgKAFIgOAEIgOAEIgJAAIgGgBgAgCh1IgNADIgbAIIAHBqIAcgHQAMgEAIgGQAJgFAGgHQAFgHAEgIIAEgRQABgIgBgIQgBgIgCgIQgDgLgHgGQgIgHgLAAIgEAAIgHAAg");
	this.shape_3.setTransform(-37.3934,32.9607);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E2E9EF").ss(1,1,1).p("Ao9l/IRxAAQA5GIg2F3Ix0AAQgnmAAnl/g");
	this.shape_4.setTransform(-0.3659,24.233,1.0788,1.0861);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F5F7").s().p("Ao9GAQgnmAAnl/IRxAAQA5GIg2F3g");
	this.shape_5.setTransform(-0.3659,24.233,1.0788,1.0861);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D6BF47").ss(1,1,1).p("AI3qXQAWLGh7IRQoADBmRjRQh4oagCqyQISB4Jehzg");
	this.shape_6.setTransform(-0.4751,104.0047,1.0788,1.0861);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E7E2D0").ss(1,1,1).p("ADbsXIgJAWIAADbQEkCHAnE2QAnE0gJJqADkstIgJAWAjus0IAGAXIAFAYIAADiQjiBighDjQhvHrAgIkAjjsFIG1AEAjosdIHDAG");
	this.shape_7.setTransform(-0.9404,-57.32,1.0788,1.0861);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F2F5F7").ss(1,1,1).p("ADqgdIAAA7InTgHIAAg0");
	this.shape_8.setTransform(-1.4906,-148.9886,1.0788,1.0861);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6BF47").s().p("Am/IwQh4oagCqyQISB4JehzQAWLGh7IRQj3BdjbAAQjvAAjQhtg");
	this.shape_9.setTransform(-0.4751,104.0047,1.0788,1.0861);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7E2D0").s().p("Ao1MVQggokBvnrQAhjjDihiIAAjiIgFgYIHDAGIgJAWIm1gEIG1AEIAADbQEkCHAnE2QAnE0gJJqQkpA4kXAAQkiAAkOg8gAjos5IgGgXIHSAHIgJAWgAjos5g");
	this.shape_10.setTransform(-0.9404,-54.2573,1.0788,1.0861);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F5F7").s().p("AjoAXIAAg0IHSAAIAAA7g");
	this.shape_11.setTransform(-1.4906,-148.9886,1.0788,1.0861);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E2E9EF").ss(1,1,1).p("Aj7BqIH3AAAj7hiIH3gI");
	this.shape_12.setTransform(-1.7,-163.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F2F5F7").ss(1,1,1).p("Aj7B2IAAjMQDOg6EpAyIAADU");
	this.shape_13.setTransform(-1.7,-164.6198);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F5F7").s().p("Aj7B2IAAjMQDOg6EpAyIn3AIIH3gIIAADUgAD8heg");
	this.shape_14.setTransform(-1.7,-164.6198);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgyDFQgEgCAAgDQgBgDACgFIAphbIhojOIgDgGIgCgHQgCgEABgDQABgEAEgCQAEgDAHgCIARgFIASgEQAHgBADABQAEAAACACIADAGIBHCXIABAAQAIgWAFgWQAGgWAEgXIAFgsIACguQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgDAEgCIAMgFIATgFQARgFAHABQAIAAABAFIACAIIAAAJIgHA1QgEAbgGAeQgGAegKAgQgKAggOAkIgpBoQgCADgDAEIgIAFIgNAGIgSAFQgMADgHABIgHAAIgFAAg");
	this.shape_15.setTransform(39.955,22.7725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag2CTQgRgDgMgJQgMgLgIgOQgJgOgFgRQgEgQgCgUQgDgUACgUQABgTAGgVQAGgUALgQQALgSARgMQARgNAZgGQAXgGATAFQAUAEASANIgBgVQgBgFAHgEQAHgEARgEIAOgDIAJgBIAFACQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIARDtQAAAGgGAEQgIAEgRAFIgNACIgKABIgFgCIgCgFIgDgmQgBAJgHAMQgGALgLAKQgKAKgNAJQgOAJgPAEQgNADgLAAQgIAAgHgCgAgLhFQgLADgIAHQgJAHgEALQgFAKgCANQgDAMAAAMQgBANACANIAFAXQACAIAEAGQADAGAFAFQAEAEAHACQAGACAJgCQALgDALgKQAKgKAIgOQAIgOAEgRQAEgSgBgRIgDgkQgNgMgOgEQgHgCgIAAQgGAAgIACg");
	this.shape_16.setTransform(7.8219,26.1259);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOC+QgDAAgCgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgZldQAAgDABgCQACgDAEgCQAEgDAGgCIARgFQAKgDAGAAQAGgCAEABQAFABABABIACAFIAZFdIgBAFIgGAFQgDACgHACIgRAFIgQAEIgIAAIgDAAg");
	this.shape_17.setTransform(-19.1312,27.5383);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhfC8QgEgBgCgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgWk1QgBgMAGgIQAHgIAMgDIBOgUIAZgFQAMgCALgBQASgBAQADQAOADANAIQAMAHAJALQAIAMAFAQQAEAOABAQQABARgDAQQgEARgIAQQgIAQgPAPQgPAOgWALQgVAMgfAIIglAJIAHBuIgBAFQgCADgEADQgEACgHACIgSAFIgRAEIgJABIgCAAgAgDiAQgHABgJACIggAIIAJB1IAhgIQAPgEAKgGQAKgGAHgIQAHgIAEgJQADgJABgJQACgJgBgJQgBgJgCgIQgEgMgJgHQgJgHgOAAIgFgBIgIABg");
	this.shape_18.setTransform(-45.646,36.2688);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E7E2D0").ss(1,1,1).p("ADkstIgJAWIgJAWIAADbQEkCHAnE2QAnE0gJJqAjjsFIAADiQjiBighDjQhvHrAgIkAjosdIAFAYIG1AEAjus0IAGAXIHDAG");
	this.shape_19.setTransform(-1.9314,-62.8039,1.2991,1.191);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7E2D0").s().p("Ao1MVQggokBvnrQAhjjDihiIAAjiIG1AEIAADbQEkCHAnE2QAnE0gJJqQkpA4kXAAQkiAAkOg8gAjjshIgFgYIHDAGIgJAWgADbszgAjos5IgGgXIHSAHIgJAWg");
	this.shape_20.setTransform(-1.9314,-59.4456,1.2991,1.191);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E2E9EF").ss(1,1,1).p("AkuB0IJdAAAkuhrIJdgJ");
	this.shape_21.setTransform(-2.825,-179.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F2F5F7").ss(1,1,1).p("AkuCBIAAjfQD4hBFlA4IAADo");
	this.shape_22.setTransform(-2.825,-180.4959);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F5F7").s().p("AkuCBIAAjfQD4hBFlA4IpdAJIJdgJIAADogAEvhng");
	this.shape_23.setTransform(-2.825,-180.4959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{scaleX:1.0788,scaleY:1.0861,x:-1.4906,y:-148.9886}},{t:this.shape_10},{t:this.shape_9,p:{scaleX:1.0788,scaleY:1.0861,x:-0.4751,y:104.0047}},{t:this.shape_8,p:{scaleX:1.0788,scaleY:1.0861,x:-1.4906,y:-148.9886}},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.0788,scaleY:1.0861,x:-0.4751,y:104.0047}},{t:this.shape_5,p:{scaleX:1.0788,scaleY:1.0861,x:-0.3659,y:24.233}},{t:this.shape_4,p:{scaleX:1.0788,scaleY:1.0861,x:-0.3659,y:24.233}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_11,p:{scaleX:1.2991,scaleY:1.191,x:-2.5939,y:-163.3225}},{t:this.shape_9,p:{scaleX:1.2991,scaleY:1.191,x:-1.3711,y:114.0957}},{t:this.shape_19},{t:this.shape_8,p:{scaleX:1.2991,scaleY:1.191,x:-2.5939,y:-163.3225}},{t:this.shape_6,p:{scaleX:1.2991,scaleY:1.191,x:-1.3711,y:114.0957}},{t:this.shape_5,p:{scaleX:1.2991,scaleY:1.191,x:-1.3312,y:26.6979}},{t:this.shape_4,p:{scaleX:1.2991,scaleY:1.191,x:-1.3312,y:26.6979}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-194.4,166.3,389.1);


(lib.SideBartender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#005F99").ss(0.7).p("AA5D3Ihxnt");
	this.shape.setTransform(18.15,-47.55,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#005F99").ss(0.7).p("AgsjLIBZGX");
	this.shape_1.setTransform(1.175,-45.5,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007DDC").s().p("AAMExQgZgSgHgeQhKlOgkiJQgIggAPgcQAQgdAggKQAhgKAfARQAeASAIAiIBpHdQAHAggTAcQgSAcghAFIgOACQgXAAgUgNg");
	this.shape_2.setTransform(10.6901,-50.7797,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007DDC").s().p("Ah4ibQgIgeAPgcQAPgbAfgKQAggKAdARQAdARAIAgIBdGjIiaAdg");
	this.shape_3.setTransform(0.6862,-9.5887,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3A396").s().p("AALBzQgTAAgPhzIgOAeQgCAHgIgBQgIgBgBgIIgDgkQgDgWAJgUQAFgLAHgIIAGgFQgDgNAIgLQAHgKANgCIAMgCQAMgCAJAHQAKAHADAMIAAABIALAbQALAjACAiQADAxgRAfQgPAbgTAAIgBAAg");
	this.shape_4.setTransform(-4.9198,25.5372,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3A396").s().p("AgMBLQgMgJgDgPIgQhZQgDgOAJgNQAJgMAOgDQAOgCANAIQAMAJADAPIAQBYQADAPgJANQgIAMgPADIgHAAQgKAAgKgGg");
	this.shape_5.setTransform(-4.1,13.125,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#289DE5").s().p("ABRAyIi/g3QgFgBgBgFQgBgFADgEIAhgcQAEgCADAAICuAWQALABAEAKQAFAJgFAJIgNAoQgDAGgGACIgGACIgGgBg");
	this.shape_6.setTransform(12.5171,-87.7847,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007DDC").s().p("AhwFYQgahhgRh5QgijxAsh2QAXg8AtgfIApgTIB+AHQA+BZAOEwQAICYgFCHg");
	this.shape_7.setTransform(13.3363,-56.975,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhwFkIAnpvQACglAbgaQAbgZAkAAQArAAAcAhQAcAhgHArIhkJag");
	this.shape_8.setTransform(20.08,81.525,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AihgMIFDgBIAAAaIlDABg");
	this.shape_9.setTransform(16.125,136.6,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAOQgbgJATgRQAMgLAcARQAOAHANAKQgTAHgQAAQgMAAgMgEg");
	this.shape_10.setTransform(20.5174,125.8434,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAFQgEggAOgGQAXgLgCAcQgCAbgWAaQgFgPgCgRg");
	this.shape_11.setTransform(15.9368,123.2718,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiXhCIBmgBIBmA4IA5ALQAUADAOAPQANAPACAVIACAMIlBACg");
	this.shape_12.setTransform(16.125,131.075,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfhWIBRgBIgSCuIhRABg");
	this.shape_13.setTransform(24.975,115.55,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhmFdQgdgeACgrIAcoCQADg0AcgnQAgguAzAAQA1AAAkAqQAjApgIA0IhGIVQgGAigYAXQgZAYggACIgIAAQgmAAgcgbg");
	this.shape_14.setTransform(14.3001,25.1886,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah8B0QgrhkARhMQAFgYALgTIAJgPIEZAAIgyDsg");
	this.shape_15.setTransform(12.0158,-10.75,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRFiIhXpYQgFgkAVgeQAVgfAkgIQAqgIAiAaQAiAbACArIAZJpg");
	this.shape_16.setTransform(-1.3769,81.7718,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AihgMIFDgBIAAAaIlDABg");
	this.shape_17.setTransform(-16.15,136.6,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAOQgbgJATgRQAMgLAcARQAPAHAMAKQgTAHgQAAQgMAAgMgEg");
	this.shape_18.setTransform(-11.7326,125.8434,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAFQgEggAPgGQAWgLgCAcQgCAbgWAaQgFgPgCgRg");
	this.shape_19.setTransform(-16.3146,123.2718,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiXhCIBlgBIBnA4IA5ALQAVADANAPQANAQADAUIABAMIlBACg");
	this.shape_20.setTransform(-16.15,131.075,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguhWIBSgBIALCuIhSABg");
	this.shape_21.setTransform(-5.85,115.55,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMFbQgjgXgHgrIhNn9QgHgtAagmQAaglAtgKQAzgLAqAgQAqAhADA1IAkH+QACAigTAcQgTAcggAJQgOAEgNAAQgbAAgXgPg");
	this.shape_22.setTransform(3.9305,27.0887,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah3BwIggjpIEYAAIAXDzg");
	this.shape_23.setTransform(9.4,-10.375,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D26665").ss(0.5,1,1).p("AAGgNIgIAIQgHAJAJAK");
	this.shape_24.setTransform(11.9081,-111.25,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D26665").ss(0.5,1,1).p("AgPgKIALABQAMADAIAR");
	this.shape_25.setTransform(12.05,-112.35,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3A396").s().p("AgMAhQgNgIgEgQQgGgOAGgOQAGgOAMgEQAMgEAMAIQANAJAEAPQAFAPgFAOQgGAOgMAEIgIABQgIAAgIgGg");
	this.shape_26.setTransform(12.9,-111.8893,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#594128").s().p("AhIBZQgegdgRgoQgihQBCg6IARgMQAVgLATADIAhgcQArgYA0ATQAzATgbAfIglAcIgrAJIgTAtIAAABIAECKQgGAUgQAVQgfAoguAAg");
	this.shape_27.setTransform(13.0746,-119.8698,1,1,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D26665").ss(0.4,1,1).p("AgEAAIADAAQADABADgB");
	this.shape_28.setTransform(-4.7,-105.0167,1,1,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D26665").ss(0.5,1,1).p("AgMAAIAZAA");
	this.shape_29.setTransform(-4.25,-106.9,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A1A").s().p("AgbAJQgBgBAAAAQgBgBAAAAQgBgBABAAQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQANACALgEIAKgDQAGgDADgDQACgCAEAAQADAAACADQACACAAAEQAAACgCACIgCABQgGAEgHACQgHACgGABIgHAAQgKAAgKgDg");
	this.shape_30.setTransform(-2.4025,-108.6612,1,1,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#594128").s().p("AgOgGQAHgEAGgBIAngBIAAAVIgqgBIghAEg");
	this.shape_31.setTransform(-1,-119.7,1,1,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_32.setTransform(-2.525,-116.125,1,1,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#594128").s().p("AgZAdIARhNIAigHIgHBvg");
	this.shape_33.setTransform(12.275,-119.475,1,1,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#594128").s().p("AhZAVQAEguAhgNIA7gbQBEAcACgBQABgBAHAWIAGAVIgCAfQgfABgkgVQgegRgJgQQgFAbgKAQQgRAcglANQgFgVACgYg");
	this.shape_34.setTransform(2.8558,-126.325,1,1,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3A396").s().p("AgfAmIAahMIAjA9QAEAFgDAFQgDAGgGgBg");
	this.shape_35.setTransform(-5.6692,-113.85,1,1,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3A396").s().p("Ag+CAQghggAAgtIAAjIIBlgLQAcAAAfAmQAfAlAAAdIAACJQAAAhgYAXQgYAYghAAQgtAAggghg");
	this.shape_36.setTransform(3.825,-115.35,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#594128").s().p("AiEAlQgNg3AKgWQARgiAoAEQAMgWAXgRQAugjA5AbQA/AdAPA3QACAHAAALQACAhgIAHIg7AuIgrh0IhTAHQgGAGgJANQgRAZgLAkIgSBYg");
	this.shape_37.setTransform(7.7678,-124.6256,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#594128").s().p("AgZgJIgLgsIBPAwIAABBQgtgRgXg0gAgqg4IAEgDIACAGg");
	this.shape_38.setTransform(8.6,-101.2,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3A396").s().p("AgzB1QgXgWABgfIAAjKICTAAIAADKQAAAfgVAWQgWAVgfAAQgdAAgWgVg");
	this.shape_39.setTransform(11.75,-97.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-137.9,64.6,276);


(lib.Scene_1_DrinkEffects = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DrinkEffects
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AMRipIFKiCALLCgIA8AAAxaifIDIAAArKEsIhuAA");
	this.shape.setTransform(648.65,206.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AQRJYIAAgDIABgBIAEgGIADgBQAFgBADAAIAEAAIACABIADAEIACACIAAADQAAAFgCAHIgSADQgFgIgCgFgAWNEsIAAgCIABgDIAEgEIADgBQAFgCADAAIAEAAIACACIADADIACACIAAADQAAAGgCAGIgSACQgFgGgCgGgAs8EEIAAgDIABgBIAEgGIADgBQAFgCADAAIAEABIACABIADAEIACACIAAADQAAAGgCAGIgSADQgFgIgCgFgA2nD6IAAgDIAAgBIAEgGIADgBQAFgBAEgBIADABIACABIAEAEIABACIABADQAAAGgDAGIgRADQgFgIgCgFgAQvkiIAAgCIABgCIAEgFIADgBQAFgCADAAIAEAAIACACIADAEIACACIAAACQAAAGgCAGIgSADQgFgHgCgGgAxUpXIAAgCIABgDIAEgEIADgBQAFgCADAAIAEAAIACACIADADIACACIAAADQAAAGgCAGIgSACQgFgGgCgGg");
	this.shape_1.setTransform(622.575,190.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("AK+iOIEdhuAJOCgIA0AAAvai4ICsAAArXD9IhfAA");
	this.shape_2.setTransform(646.775,190);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AOCH5IAAgCIAAgBIAEgFIACgBQAEgCADAAIADABIAFAEIABACIABACQAAAFgCAFIgPACQgFgGgBgEgATJD8IAAgDIAEgFIACgBIAIgBIADAAIACABIADAEIABACIAAACQAAAEgCAGIgPACQgEgGgCgFgArJDbIAAgDIABgBIADgEIADgBIAHgCIADAAIACACIADADIABABIAAADQAAAFgCAFIgPADQgEgHgCgEgAzfDTIAAgDIAAgCIAEgDIACgBIAIgCIADAAIACACIADADIABABIAAACQAAAGgCAFIgPACIgGgKgAObjzIAAgCIABgCIADgEIADgBIAHgBIADAAIACABIADADIABACIABACQAAAFgCAFIgPACIgHgKgAu6n4IAAgCIAAgCIAEgEIACgBIAIgBIADAAIAGAGIAAACQAAAFgCAFIgPACIgGgKg");
	this.shape_3.setTransform(621.675,176.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AKjiCIEchtALzCTIAzAAAqoDwIhfAAAu+jaICsAA");
	this.shape_4.setTransform(652.925,169.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AJ2H6IAAgCIABgCIADgEIADgBQAEgCADAAIADABIAFADIABACIAAADQAAAEgCAGIgPACQgEgGgCgEgAO+D9IAAgEIADgEIADgBIAHgBIADAAIACABIADADIABACIABADQAAAEgCAGIgPACQgFgGgBgFgAvUDbIAAgCIABgBIADgFIADAAIAHgCIADAAIACACIADACIABACIAAADQAAAFgCAFIgPACQgEgGgCgFgAqgDNIAAgCIABgBIADgEIADgBIAHgCIADABIACABIADADIABABIABACQAAAFgCAGIgPACIgHgLgALPkuIAAgDIAAgCIAEgEIACAAIAIgCIADAAIACACIADACIABACIAAADQAAAEgCAGIgPACIgGgKgAs2n5IAAgCIAAgBIAEgEIACgCIAIgBIADAAIAGAGIAAACQAAAFgCAFIgPADIgGgLg");
	this.shape_5.setTransform(651.875,154.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(6,1,1).p("AL1B6IAsAaAKhhTIEchuAu8j7ICmAsAqvD8IhSgv");
	this.shape_6.setTransform(645.975,148.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AJ2H6IAAgCIAAgCIAEgEIADgBQADgCAEAAIADABIAEAEIACACIAAACQAAAFgCAFIgPACQgEgGgCgEgAO9D9IAAgEIAEgEIACgBIAIgBIADAAIACABIADADIABACIABADQgBAEgBAGIgQACQgEgGgCgFgAvUDcIAAgDIABgBIAEgEIACgBIAHgCIADAAIACACIADADIABABIABADQAAAFgDAFIgOACQgFgGgCgEgAqgDOIAAgCIABgCIAEgEIACgBIAIgCIACABIACABIAEADIABABIAAADQAAAFgCAFIgPACIgHgKgALPkvIAAgCIAAgCIADgEIADgBIAHgBIAEAAIABABIADADIABACIABACQAAAFgCAFIgPADIgGgLgAs2n5IAAgCIABgCIADgEIACgBIAIgBIADAAIAGAGIAAACQAAAFgCAFIgPADIgGgLg");
	this.shape_7.setTransform(644.9,132.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(6,1,1).p("AMUhSIBqhvAMPB7IAtAaAsij8IhbAtAqUD9IhSgw");
	this.shape_8.setTransform(631.95,133.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AF2GsIAAgCIABgCIADgEIACAAQAEgCADAAIADAAIAGAEIABACIAAACQAAAEgCAGIgPACQgFgGgBgEgAO9CxIAAgFIAEgEIACAAIAIgCIACABIACABIAEACIABACIAAADQAAAFgCAFIgPACQgEgGgCgEgAvTCPIAAgCIAAgCIAEgEIADgBIAHgBIADAAIABABIADADIACACIAAACQAAAFgCAFIgPACQgEgFgCgFgAqgCBIAAgCIABgCIAEgEIACgBIAIgCIACABIACABIAEADIABABIAAADQAAAFgCAGIgPACIgHgLgALOl7IAAgCIABgCIADgEIACgBIAIgBIADAAIACABIADADIABACIAAACQAAAFgCAFIgPACIgGgKgAs3mqIAAgDIAAgCIAEgDIACgBIAIgCIADAAIAGAGIABADQAAAEgCAGIgQACIgGgKg");
	this.shape_9.setTransform(633.55,125.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(6,1,1).p("AMPB7IAsAaAMThSIBrhvAshj7IhcAsAqUD8IhSgv");
	this.shape_10.setTransform(624.425,108.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AF2GsIAAgCIABgCIADgEIACgBQAFgCACAAIADABIAFAEIABACIABACQAAAFgCAFIgPACQgFgGgBgEgAO9CxIAAgEIAEgEIACgBIAIgCIACABIACABIAEADIABACIAAACQAAAFgCAFIgPACQgFgGgBgEgAvTCPIAAgCIAAgCIAEgEIADgBIAHgBIACAAIACABIAEADIABACIAAACQAAAFgCAFIgPADQgEgGgCgFgAqgCBIAAgCIABgCIAEgEIACgBIAIgBIACAAIACABIAEADIABACIAAACQAAAFgCAGIgPACIgHgLgALPl7IAAgCIAAgCIADgEIADgBIAHgBIAEAAIACABIACADIABACIABACQAAAFgCAFIgPADIgGgLgAs2mrIAAgCIAAgCIADgEIADgBIAHgBIADAAIAGAGIABACQAAAFgCAFIgQADIgFgLg");
	this.shape_11.setTransform(626,99.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(6,1,1).p("AMThSIBqhvAMOB7IAtAaAshj7IhbAsAqUD8IhSgv");
	this.shape_12.setTransform(629.975,87.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AF2GsIAAgCIAAgCIAEgEIACgBQAFgCADAAIACABIAGADIABACIAAADQAAAFgCAFIgPACQgEgGgCgEgAO9CwIAAgDIADgFIADgBIAHgBIADABIACAAIADADIABADIABACQgBAFgCAFIgOACQgFgGgBgFgAvSCPIAAgDIAAgBIADgEIADgBIAHgCIADAAIACACIADADIABACIAAACQAAAFgCAFIgOACQgFgGgBgEgAqgCBIAAgCIABgCIADgEIADgBIAIgBIADAAIABABIADADIACABIAAADQAAAFgCAGIgPACIgHgLgALOl7IAAgCIABgCIADgEIACgBIAIgCIADAAIACACIADADIABACIAAACQAAAFgBAFIgQACIgGgKgAs2mqIAAgDIAAgCIAEgEIACAAIAIgCIADAAIAGAGIABADQAAAEgCAGIgQACIgGgKg");
	this.shape_13.setTransform(631.55,79.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(6,1,1).p("AMShSIBrhvAMOB7IAsAaAsgj7IhcAsAqUD8IhRgv");
	this.shape_14.setTransform(629.675,51.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AF2GrIAAgCIABgBIADgFIADAAQADgCADAAIAEAAIAEAEIABACIABADQAAAEgCAGIgPACQgEgGgCgFgAO8CwIAAgEIAEgEIACgBIAHgBIADAAIADABIADADIAAACIABADQAAAEgCAGIgPACQgFgGgBgFgAvSCPIAAgDIABgBIADgEIACgBIAHgCIADAAIADACIACADIABABIABADQAAAFgCAFIgPACQgFgGgBgEgAqfCBIAAgCIABgCIADgEIACgBIAIgCIADABIACABIADADIABABIAAADQAAAFgCAFIgPACIgGgKgALNl7IAAgCIABgCIAEgEIACgBIAIgBIADAAIABABIAEADIABACIAAACQAAAFgCAFIgPADIgHgLgAs2mqIAAgDIABgBIADgEIADgBIAIgCIADAAIAGAGIAAADQAAAEgCAGIgPACIgHgKg");
	this.shape_15.setTransform(631.25,43.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,1,1).p("AsVjqIiAAsAq7DrIhsgvALZB6IAsAaAKThYIEDhu");
	this.shape_16.setTransform(642.675,34.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AF1GrIAAgCIABgBIADgFIADAAQAEgCADAAIADAAIAFAEIABACIAAADQAAAEgCAGIgPACQgEgGgCgFgAO8CwIAAgEIADgEIADgBIAHgBIADAAIACABIADADIABACIABADQAAAEgCAGIgPACQgFgGgBgFgAvSCPIAAgDIABgBIADgEIADgBIAHgCIADAAIACACIADADIABABIAAADQAAAFgCAFIgPACQgEgGgCgEgAqgCBIAAgCIABgCIADgEIADgBIAHgCIADABIACABIADADIABABIABADQAAAFgCAFIgPACIgHgKgALNl7IAAgCIABgCIADgEIADgBIAHgBIADAAIACABIADADIABACIABACQAAAFgCAFIgPADIgHgLgAs2mqIAAgDIAAgBIAEgEIACgBIAIgCIADAAIAGAGIAAADQAAAEgCAGIgPACIgGgKg");
	this.shape_17.setTransform(639.075,24.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(6,1,1).p("Aq7DrIhrgvALYB6IAtAaAKThYIEChuAsVjqIh/As");
	this.shape_18.setTransform(642.575,20.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AF1GrIAAgCIAAgBIAEgFIACAAQAEgCAEAAIACAAIAGAEIABACIAAADQAAAEgCAGIgPACQgFgGgBgFgAO7CwIAAgEIAEgEIADgBIAHgBIADAAIACABIADADIABACIABADQAAAEgDAGIgOACQgFgGgCgFgAvSCPIAAgDIABgBIAEgEIACgBIAHgCIADAAIACACIADADIABABIABADQAAAFgCAFIgPACQgFgGgCgEgAqfCBIAAgCIAAgCIAEgEIACgBIAIgCIADABIACABIADADIABABIABADQAAAFgCAFIgQACIgGgKgALNl7IAAgCIABgCIADgEIACgBIAIgBIADAAIACABIADADIABACIAAACQAAAFgCAFIgPADIgGgLgAs1mqIAAgDIAAgBIADgEIADgBIAHgCIADAAIAGAGIABADQAAAEgCAGIgQACIgFgKg");
	this.shape_19.setTransform(638.95,10.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(6,1,1).p("ALyDIIAsAZALdiGICehvAr5jgIiBAsArcD2Ig5gv");
	this.shape_20.setTransform(639.5,-26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AL9GFIAAgCIAAgCIAEgEIADgBQADgCAEAAIADABIAEAEIACAEIgCAKIgPACQgEgGgCgEgAN4DXIAAgEIADgEIACgBIAIgCIADABIACABIADADIABACIAAACQAAAFgBAFIgQACQgEgGgBgEgAuNC1IAAgCIAAgCIADgEIADgBIAHgBIADAAIACABIADADIABACIAAACQAAAFgCAFIgOADQgFgGgBgFgApcCnIAAgCIAAgCIADgEIADgBIAHgBIAEAAIACABIACADIABACIABACQAAAFgCAGIgPACIgGgLgAMPlUIAAgDIAAgBIAEgEIADgBIAHgCIADAAIACACIADADIABABIABADQAAAEgDAGIgOACIgHgKgArzmEIAAgCIABgCIAEgEIACgBIAIgBIADAAIAGAGIAAACQAAAFgCAFIgPADIgHgLg");
	this.shape_21.setTransform(631.85,-39.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(6,1,1).p("ALsinICNAgAL4AvIAsAaArxjhIiHAJAqzDiIg6gv");
	this.shape_22.setTransform(638.725,-38.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AL+GFIAAgCIABgCIADgEIACgBQAFgCACAAIADABIAGAEIAAAEIgBAKIgPACQgFgGgBgEgAN4DXIAAgEIADgEIADgBIAIgCIADABIABABIADADIACACIAAACQAAAFgCAFIgPACQgEgGgCgEgAuOC1IAAgCIAAgCIAEgEIADgBIAHgBIACAAIACABIAEADIABACIAAACQAAAFgCAFIgPADQgEgGgCgFgApcCnIAAgCIAAgCIAEgEIADgBIAHgBIADAAIACABIADADIABACIABACQAAAFgCAGIgPACIgHgLgAMQlUIAAgDIABgBIADgEIACgBIAIgCIADAAIACACIADADIABABIAAADQAAAEgBAGIgQACIgGgKgArzmEIAAgCIABgCIAEgEIACgBIAHgBIADAAIAHAGIAAACQAAAFgCAFIgQADIgGgLg");
	this.shape_23.setTransform(631.7,-53.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(6,1,1).p("ALnh+IBFhvAMJCAIAsAaAqkDxIg6gwAq0jwIh/As");
	this.shape_24.setTransform(637.1,-48.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AL+GFIAAgCIAAgCIAEgEIACgBQAEgCADAAIADABIAFAEIABAEIgBAKIgPACQgFgGgBgEgAN4DXIAAgEIADgEIADgBIAHgCIADABIACABIADADIABACIABACQAAAFgCAFIgPACQgFgGgBgEgAuOC1IAAgCIABgCIADgEIADgBIAHgBIADAAIACABIADADIABACIAAACQAAAFgCAFIgPADQgEgGgCgFgApcCnIAAgCIAAgCIAEgEIACgBIAIgBIADAAIACABIADADIABACIAAACQAAAFgCAGIgPACIgGgLgAMQlUIAAgDIAAgBIAEgEIACgBIAIgCIADAAIACACIADADIABABIAAADQAAAEgCAGIgPACIgGgKgArzmEIAAgCIABgCIADgEIADgBIAHgBIADAAIAGAGIABACQAAAFgCAFIgQADIgGgLg");
	this.shape_25.setTransform(631.625,-61.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(6,1,1).p("AKeh6IBDhvAMMBvIAsAaAq1DqIhLgMAp4iOIi/As");
	this.shape_26.setTransform(634.15,-74.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AL9GFIAAgCIABgCIAEgEIACgBQAEgCADAAIADABIAFAEIABAEIgBAKIgPACQgFgGgCgEgAN4DXIAAgEIADgEIACgBIAIgCIADABIACABIADADIABACIAAACQAAAFgCAFIgPACQgEgGgBgEgAuNC1IAAgCIAAgCIADgEIADgBIAHgBIADAAIACABIADADIABACIABACQgBAFgCAFIgOADQgFgGgBgFgApcCnIAAgCIAAgCIAEgEIADgBIAHgBIADAAIACABIADADIABACIABACQgBAFgCAGIgOACIgHgLgAMPlUIAAgDIABgBIAEgEIACgBIAIgCIACAAIACACIAEADIABABIAAADQAAAEgCAGIgPACIgHgKgArzmEIAAgCIABgCIAEgEIACgBIAIgBIACAAIAHAGIAAACQAAAFgCAFIgPADIgHgLg");
	this.shape_27.setTransform(631.5,-77.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},199).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_5},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6}]},5).to({state:[{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_17},{t:this.shape_16}]},5).to({state:[{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_23},{t:this.shape_22}]},5).to({state:[{t:this.shape_25},{t:this.shape_24}]},5).to({state:[{t:this.shape_27},{t:this.shape_26}]},5).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BartenderArmBottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BartenderArmBottle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DDC").s().p("Ah4CoIB1lNQAJgaAagLQAagKAZALQAYALAJAYQAKAYgJAYIhzFGg");
	this.shape.setTransform(825.1654,252.8968,3.0391,3.4267,0,69.2281,100.3503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3A396").s().p("Ag3BQQgJgGAPgjQAGgPAKgUIACgEIAHgNIAAABIgIgcIgHACQANgLAOgFIAJgBIAHgPQABgEADgDIAFgEIAFgCQAKgDAKAFIAIAFQAKAEADAJQADAKgFAJIABABIgGAXQgJAcgPAYQgWAjgaAMQgMAGgJAAQgJAAgFgFg");
	this.shape_1.setTransform(748.6789,242.2492,2.916,3.5298,0,66.3765,96.339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3A396").s().p("AAWA7QgMgBgIgKIgwg4QgIgJAAgNQABgMAKgIQAJgIANAAQAMABAIAKIAwA4QAIAJgBANQAAAMgKAIQgIAIgMAAIgCAAg");
	this.shape_2.setTransform(766.404,247.3909,2.475,3.8545,0,56.2366,-102.838);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007DDC").s().p("Ah1DwQgXgMgIgZQgIgYALgYQCAkKAoheQALgZAZgLQAZgKAZAJQAbALALAbQALAbgMAaIivFqQgMAZgaAIQgKADgKAAQgPAAgPgHg");
	this.shape_3.setTransform(852.9029,166.2949,3.4288,3.0527,0,11.2129,-168.2668);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3,p:{scaleX:3.4288,scaleY:3.0527,skewX:11.2129,skewY:-168.2668,x:852.9029,y:166.2949}},{t:this.shape_2,p:{scaleX:2.475,scaleY:3.8545,skewX:56.2366,skewY:-102.838,x:766.404,y:247.3909}},{t:this.shape_1,p:{scaleX:2.916,scaleY:3.5298,skewX:66.3765,skewY:96.339,x:748.6789,y:242.2492}},{t:this.shape,p:{scaleX:3.0391,scaleY:3.4267,skewX:69.2281,skewY:100.3503,x:825.1654,y:252.8968}}]},56).to({state:[{t:this.shape_3,p:{scaleX:3.6333,scaleY:3.1226,skewX:11.6399,skewY:-168.6969,x:852.0762,y:167.8}},{t:this.shape_2,p:{scaleX:2.3726,scaleY:3.9037,skewX:52.6718,skewY:-111.9842,x:769.8036,y:259.0307}},{t:this.shape_1,p:{scaleX:2.7554,scaleY:3.645,skewX:62.3481,skewY:89.525,x:741.6517,y:261.2317}},{t:this.shape,p:{scaleX:2.8683,scaleY:3.5548,skewX:65.0152,skewY:93.8343,x:827.2396,y:260.6541}}]},5).to({state:[{t:this.shape_3,p:{scaleX:3.4699,scaleY:3.1596,skewX:10.9487,skewY:-167.9856,x:853.334,y:169.7779}},{t:this.shape_2,p:{scaleX:2.5413,scaleY:3.9487,skewX:42.9815,skewY:-114.9906,x:776.741,y:259.758}},{t:this.shape_1,p:{scaleX:3.0106,scaleY:3.6075,skewX:53.038,skewY:84.043,x:750.8333,y:276.7555}},{t:this.shape,p:{scaleX:3.1339,scaleY:3.4969,skewX:55.9334,skewY:87.819,x:832.489,y:255.1576}}]},5).to({state:[{t:this.shape_3,p:{scaleX:3.5095,scaleY:3.1695,skewX:11.0444,skewY:-168.0891,x:853.6006,y:170.5109}},{t:this.shape_2,p:{scaleX:2.5369,scaleY:3.9864,skewX:38.2188,skewY:-120.1923,x:775.7976,y:281.7252}},{t:this.shape_1,p:{scaleX:3.008,scaleY:3.6497,skewX:48.1455,skewY:79.1185,x:758.3516,y:291.5293}},{t:this.shape,p:{scaleX:3.1345,scaleY:3.5391,skewX:51.0469,skewY:82.979,x:834.7211,y:269.5053}}]},5).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiFDiQgJgBgDgDQgEgDAAgEQABgEAEgGIBFhmIgtkkIgBgKIgBgIQAAgFACgFQACgDAFgDQAFgBAIgBIATgBIAUAAQAHABAEABQAEACABAEIACAJIAcDUIABAAQAOgZANgaQAMgbALgaQAKgbAJgcIAQg5QABgDACgCQACgDAFgCQAFgBAIgBIAWgBQAUAAAHACQAHADAAAHIgBAKIgCAMIgXBBQgMAhgQAkQgPAjgUAlQgUAmgaApIhKB2QgDAEgEADIgKAGIgQACIgUABIgVgBg");
	this.shape.setTransform(464.8472,-5.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqCiQgQgJgKgQQgKgRgEgVQgEgVAAgWQAAgWADgZQAEgZAIgZQAIgaAMgXQALgXARgSQARgSAWgLQAVgLAbAAQAZAAAUAMQATAMAPAWIAFgbQABgHAJgDQAIgDATAAIAPABQAHABADABQAEACABADQABACgBADIg3EwQgBAIgIADQgJADgSAAIgQAAIgKgCQgDgDgBgCQgBgDAAgEIAJgwQgFALgKAMQgKAMgNAKQgOAKgQAHQgRAGgSAAQgZAAgQgKgAgShbQgLAHgIALQgJAMgGAPQgGAPgEARQgFAPgBAQQgDARAAAOQAAAJACAKQABAJAEAIQAEAGAGAFQAGAEAJAAQAOAAAOgJQANgJAMgPQANgQAJgUQAJgWAFgWIAIguQgKgTgNgJQgOgKgRAAQgMAAgKAHg");
	this.shape_1.setTransform(433.045,-11.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag8DuQgIgBgEgCQgEgBgBgDQgCgCABgEIBQnAQAAgEADgCQACgDAFgCQAFgCAHgBIATgBIATABQAHABAEACQAEACABADQABACAAAEIhQHAQAAAEgDACQgCADgFABQgEACgIABIgTABIgSgBg");
	this.shape_2.setTransform(409.6633,-18.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiQDlIgLgCQgEgDgBgDIgBgFIBNmqQABgHAJgDQAIgDATAAIAQABQAFABAEABQADACACADQABACgBADIgIAyQAEgLAKgNQAKgMANgJQAOgLARgHQARgGASAAQAXAAARAJQAPAJALAQQAJAPAFAWQAEAVAAAYQAAAXgDAZQgEAagIAZQgHAYgMAYQgMAXgRASQgRASgVAKQgWALgbAAQgMAAgKgDQgLgDgJgFQgJgFgHgGQgIgHgFgIIgZCLIgCAFIgHAGIgNACIgTABIgTgBgAAXiTQgOAJgLAQQgMAPgKAVQgJAUgEAYIgJAtQALAUANAJQANAJAQAAQANAAALgGQAKgIAJgLQAIgMAGgNQAGgPAFgRQAEgRACgPQACgSAAgOQAAgMgCgJQgCgKgDgGQgEgHgGgDQgGgEgJAAQgOAAgOAJg");
	this.shape_3.setTransform(382.5417,-5.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhIClQgWgHgPgOQgPgOgHgWQgIgVAAgeQAAgXAEgaQAEgZAJgZQAIgaAOgXQANgYAUgRQATgRAZgMQAYgKAgAAQAcAAAVAHQAUAIAMAMQANAMAHAQQAGAPAAARQAAAYgKAUQgKAUgVAOQgVANggAHQghAIgsAAIgcAAIgCAQIgBANQAAAdANAOQANANAdAAQATABAQgEQAQgDANgEIAUgHQAIgDADgBQAEABACACQABACAAAFIgBAOIgCAOIgFAPQgCAGgEAEQgDADgKAFQgKAEgOADQgOADgRADQgQACgSAAQgdAAgWgHgAAAhnQgMAFgKALQgJALgGAOQgHAOgEAQIAaAAQAXAAARgEQARgDAKgHQAKgFAEgJQAFgJAAgJQAAgNgJgKQgKgJgTAAQgPAAgLAHg");
	this.shape_4.setTransform(352.175,-11.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AA9DeQgIgBgEgDQgEgCgCgCIgCgIIgPhiQgDgRgEgNQgEgNgGgJQgHgIgIgFQgKgDgMAAIgaAAIgeCoQgBADgCADQgDADgEABQgGADgIABIgTAAIgTAAQgIgBgEgDQgFgBgBgCQgCgDABgEIBJmQQACgQAJgHQAIgGALAAIBqAAQAcAAAWAFQAXAHAQALQAQANAIARQAJATAAAYQAAAWgFAVQgGAWgLAUQgMATgTAPQgSAOgbAJQAPAHAKATQAKATAGAiIAQBaIADANIAAAKQAAAEgCACQgCACgFADIgOACIgXAAIgVAAgAgqgbIAnAAQAWAAAQgHQAQgIAKgMQAJgLAFgOQAEgOAAgPQAAgKgCgIQgEgIgGgGQgGgGgLgDQgKgDgOgBIgtAAg");
	this.shape_5.setTransform(319.255,-16.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ASIiTQBrGOkxFQQkxFRtAiTQtCiTiDAWQiEAWDtkQQDtkQBtk1QBsk1GJjZQGHjYGpC8QGpC8BrGOg");
	this.shape_6.setTransform(367.6714,-24.1517,1.1441,1.2722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivMJQtCiTiDAWQiEAWDtkQQDtkQBtk1QBsk1GJjZQGHjYGpC8QGpC8BrGOQBrGOkxFQQjUDrnUAAQjNAAj8gtg");
	this.shape_7.setTransform(367.6714,-24.1517,1.1441,1.2722);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("AkYgWQDOBWFjhN");
	this.shape_8.setTransform(-19.675,146.0742);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AHmgBQAABxhrBRQgSAPgQAMQiOBcjLAAQjGAAiNhcQiShdAAiAQAAh1B6hUQAMgKAMgGQCNhdDGAAQDLAACOBdQCNBbAAB+g");
	this.shape_9.setTransform(-178.075,159.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ASigBQAAABAAACQAAAognAdQgeAbgnADQgDAAAAACQgIAAgLAAIgEAAQg2gCgjgeQgigcgEgkQgDgDAAgFQAAgpApgfQAjgdA2gBIAHAAQAIAAAEAAQAEAAADABQAnAFAeAYQAnAfAAApgAyhACQAAAPAIAOQAAAEAAABQAEAHAEAHQAHANAQAKQATATAeAHQAMAEAIAAIADAAQAIACAIAAIAIAAQA2gCAigeQAngeAAgpQAAgbgQgVQgMgNgLgNQgQgMgSgIQgXgHgfgDIgIAAQgIAAgIADIgDAAQgmACgfAZQgEAEgDADQgFADgEAFQgXAbAAAgg");
	this.shape_10.setTransform(-20.85,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F2F5F7").ss(1,1,1).p("AXVnDQAQAKATAJQEnC2CoDUQDTEPAAFHQAAJGqiGZQqmGcu4AAQptAAn2isAQCqZQD5BVDaCBQAjg7BJgwQCOhYDDAAQDDAACKBYQCOBZAAB/QAAB/iOBYQh3BMihANAg4tLQAAgCgEAAQlZi/AAkPQAAkPFZjCQFbi+HnAAQHqAAFcC+QFZDCAAEPQAAEPlZC/QkBCMlJAoANlPZQgmgYgegnQgMgKgEgLQg2hDgPhVQgIgoAAgvQAAh5A6heQAPgXAUgUQA1hDBIgaQAvgPAuAAQAHAAAIACQALAAAQACQAbADB2ASQB3AQAmAwQAqAwAIAxQALAxAgCRQAaCTh3BwQhJBAg5AZA0SqGQhrgahcg1Qi/hrAAiZQAAiZC/hsQDAhrEMAAQEMAAC8BrQDABsAACZQAABVg6BIQCpgRCwAAQATAAAbACQJUAGHmCsA0SqGQGEiQHPgmA+wVyQm8lqAAnYQAApFKimbQDPh+DphYAwvPWQAHgCAIgCQBRgXBBhKQAHgKAIgLQAyhCAThVQADgSAAgRQAFgaAAgaQAAh7g6hcQgIgJgEgHQgLgQgLgLQgfgmgmgZQgbgTgjgKQgqgQgyAAQgEAAgHAAQgPAAgMACQgEAAgEACIgEAAQgfAFhAAKQgUACgTAEQg1AGgjAOQgtAUgTAZQgQAXgMAWQgLAdgqA6QgrA8AEBBQAIBAAABBQAAA+BrBlQBFA+A6AZ");
	this.shape_11.setTransform(-17.55,0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF99FF").s().p("AN6BZIgEAAQhcgfAAgpQAAgqBcgeQBCgVBUgHQAmgDAmAAQBFAAA2AIQAiAEAfAJQAXAFAPAFQAbAHATAKQAuAYAAAfQAAAphcAfQhfAeiDAAQiCAAhcgegA02A5QhfgeAAgqQAAgqBfgfQAngMAtgHIBCgHQAOgDARgBIALAAIAHAAIAMAAQAfAAAbAEIA9AHIAPgEIATAEQAyAHAmAMIAuATQAuAYAAAeQAAAqhcAeQhfAeiDAAQiGAAhcgeg");
	this.shape_12.setTransform(-24.275,109.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AwiBpQgHAAgJgCIgDAAQgIAAgLgEQgegHgUgTQgPgLgIgMIgIgOIAAgFQgIgOAAgPQAAggAYgaQAEgGAEgDIAHgHQAfgZAmgCIADAAQAJgCAHAAIAIAAQAfABAXAJQASAGAQANIAXAaQAPAVAAAbQAAApgmAeQgiAeg2ACgAQfBnIgDAAQg2gDgjgdQgigcgEgkQgDgDgBgFQAAgqAqgeQAjgcA2gCIAGAAIANAAQAEAAADACQAnAEAeAYQAnAeAAAqIAAADQAAAngnAeQgeAbgnACQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIgTAAg");
	this.shape_13.setTransform(-20.85,52.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6633FF").s().p("ATQFzQhbgdh/AAQgqAAgmADQgngYgegnQgLgKgEgLQg2hDgQhVQgHgoAAgvQAAh4A6heQAPgXATgUQA2hDBIgaQAugPAuAAQAHAAAIACQAMAAAPACQAbADB3ASQB2AQAnAwQAqAwAHAxIArDBQAaCTh2BwQhJBAg5AZQgfgJgjgEgAPji7QgqAfAAAqQAAAGAEADQAEAkAiAcQAjAdA1ACIAEAAIATAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAmgDAfgaQAmgeAAgnIAAgEQAAgqgmgfQgfgXgmgFQgEgCgEAAIgMAAIgHAAQg1ACgjAcgAwsFPQgbgEgfAAIgLAAIgIAAIgKAAQg5AAg0AHIgSAEQg6gZhFg+QhrhlAAg+QAAhBgIg/QgEhBAqg8QArg6ALgdQAMgWAPgXQATgZAugUQAjgOA1gGQATgEAUgCIBfgPIAEAAQAEgCAEAAQALgCAQAAIALAAQAyAAAqAQQAiAKAbATQAnAZAeAmQALALAMAQQAEAHAIAJQA5BcAAB7QAAAZgEAaQAAARgEASQgTBVgyBCIgPAVQhBBKhQAXIgQAEIg9gHgAxai5IgHAHQgFADgEAFQgXAbAAAhQAAAPAIAOIAAAFIAIAOQAHAMAQALQATATAeAHQAMADAIAAIADAAQAIACAIAAIAIAAQA2gCAigdQAmgeAAgpQAAgcgPgVIgXgaQgQgNgSgHQgXgIgfgCIgIAAQgIAAgIACIgDAAQgmADgfAZg");
	this.shape_14.setTransform(-24.0335,64.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E5DFF").s().p("Az+BDQgagJgMgQQgIgRAIgRQAMgRATgKQAHgEAXgGIAbgKQAXgLAPgFQAfgIAaALQAfAIAAAVQAEASgXAUQgTARgQAHIgaAHIgXAKQgMAHgLACQgNAGgOAAQgLAAgMgEgATVBBQgPgCgYgIIgegSIgegOIgfgRQgigUAHgZQAEgPAagJQAYgKAXAFQAPACAaAQQAnATAfAMIAbAKQALAHAIAIQAHAKAAANQgEANgLAHQgLALgUAFQgHACgKAAQgJAAgMgCg");
	this.shape_15.setTransform(-34.8125,-8.5558);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(202,158,223,0.898)").s().p("AzJb+QBrhRAAhyQAAh+iNhcQiOhcjLAAQjHAAiOBcQgLAHgMAKQAMgKALgHQCOhcDHAAQDLAACOBcQCNBcAAB+QAAByhrBRIgiAbQiOBcjLgBQjHABiOhcQiRhdgBiBQAAh1B7hUQm8lrAAnYQAApFKimbQDPh9DphYQGDiQHQgnQnQAnmDCQQhrgahcg0Qi/hsAAiYQAAiaC/hrQC/hsENAAQEMAAC8BsQC/BrAACaQAABVg5BGQCogPCwgBQATAAAbACQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQlZi/AAkPQAAkPFZjCQFbi+HmAAQHrAAFcC+QFZDCAAEPQAAEPlZC/QkBCMlKAoQnmispUgGQJUAGHmCsQD6BVDaCBQAPAJAUAJQEmC3CpDUQipjUkmi3QgUgJgPgJQAjg7BIgwQCOhYDEAAQDDAACKBYQCNBZABB+QgBB/iNBZQh3BMihANQDTEPAAFGQAAJGqiGZQqmGdu5AAQpsAAn2itgAgrXKQCBAACggiIABAAIANgDIgNADIgBAAQigAiiBAAIAAAAIAAAAQiPAAhpgpIAAAAIgDgBIgHgDIAHADIADABIAAAAQBpApCPAAIAAAAIAAAAgAPIPuQhTAGhCAWQhcAdAAArQAAAqBcAfIAEAAQBbAeCDAAQCDAABfgeQBcgfAAgqQAAgfgugYQgTgKgbgHQgPgFgXgFQA5gZBJhAQB2hwgaiUIgrjBQgHgxgqgwQgmgwh3gQQh3gTgbgDQgPgCgMAAQgHgCgHAAQgvAAguAQQhIAag2BDQgTAUgPAXQg6BdAAB6QAAAvAIAnQAPBWA2BDQAEALALAKQAfAmAmAZQAmgDArgBQB+AABbAdQg1gHhFAAQgmAAgnADgA0lPVQguAHgmAMQhgAgAAApQAAAsBgAeQBcAeCGAAQCCAABggeQBcgeAAgsQAAgdgvgZIgtgTQgmgMgygHIgTgDQBQgXBBhKIAQgVQAyhCAThVQADgSAAgRQAEgaAAgaQAAh7g5hcQgIgJgDgHQgMgXgPgWQgUgagtgTQgcgUghgKQgrgPgxAAIgMAAQgPAAgMACQgEAAgEACIgEAAIhfAPQgUACgTADQg1AHgjAOQgtATgUAaQgPAWgMAXQgLAdgrA6QgpA7AEBCQAHBAAABAQAAA/BsBlQBEA+A6AYIATgDIALADgA1TiPQgOAGgYALIgbAJQgWAHgIADQgTALgMASQgHARAHARQAMAQAaAJQAbAIAXgKQALgCAMgHIAYgKIAagHQAPgHATgSQAYgUgEgSQAAgVgggIQgPgHgRAAQgMAAgNADgAOqiWQgaAJgFAPQgHAZAiAVIAfARIAeAOIAeASQAYAIAQACQAWADAPgDQAUgGALgKQAMgHADgNQABgNgIgKQgHgJgMgHIgbgLQgfgLgngTQgZgQgQgCQgIgCgHAAQgQAAgPAHg");
	this.shape_16.setTransform(-17.55,0.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AiFDiQgJgBgDgDQgEgDAAgEQABgEAEgGIBFhmIgtkkIgBgKIgBgIQAAgFACgFQACgDAFgDQAFgBAIgBIATgBIAUAAQAHABAEABQAEACABAEIACAJIAcDUIABAAQAOgZANgaQAMgbALgaQAKgbAJgcIAQg5QABgDACgCQACgDAFgCQAFgBAIgBIAWgBQAUAAAHACQAHADAAAHIgBAKIgCAMIgXBBQgMAhgQAkQgPAjgUAlQgUAmgaApIhKB2QgDAEgEADIgKAFIgQADIgUABIgVgBg");
	this.shape_17.setTransform(718.5972,-13.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AiQDlIgLgCQgEgDgBgDQgBgDAAgCIBNmqQABgHAJgDQAIgDATAAIAQABQAFABAEABQADACACADQABACgBADIgIAyQAEgLAKgNQAKgMANgJQAOgLARgHQARgGASAAQAXAAARAJQAPAJALAQQAJAPAFAWQAEAVAAAYQAAAXgDAZQgEAagIAZQgHAYgMAYQgMAXgRASQgRASgVAKQgWALgbAAQgMAAgKgDQgLgDgJgFQgJgFgHgGQgIgHgFgIIgZCLIgCAFIgHAGIgNACIgTABIgTgBgAAXiTQgOAJgLAQQgMAPgKAVQgJAUgEAYIgJAtQALAUANAJQANAJAQAAQANAAALgGQAKgIAJgLQAIgMAGgNQAGgPAFgRQAEgRACgPQACgSAAgOQAAgMgCgJQgCgKgDgGQgEgHgGgDQgGgEgJAAQgOAAgOAJg");
	this.shape_18.setTransform(636.2917,-13.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AA9DeQgIgBgEgDQgEgCgCgCIgCgIIgPhiQgDgRgEgNQgEgNgGgJQgHgIgIgFQgKgDgMAAIgaAAIgeCoQgBADgCADQgDADgEABQgGADgIABIgTAAIgTAAQgIgBgEgDQgFgBgBgDQgCgCABgEIBJmQQACgQAJgHQAIgGALAAIBqAAQAcAAAWAFQAXAHAQALQAQANAIARQAJATAAAYQAAAWgFAVQgGAWgLAUQgMATgTAPQgSAOgbAJQAPAHAKATQAKATAGAiIAQBaIADANIAAAKQAAAEgCACQgCACgFADIgOACIgXAAIgVAAgAgqgbIAnAAQAWAAAQgHQAQgIAKgMQAJgLAFgOQAEgOAAgPQAAgKgCgIQgEgIgGgGQgGgGgLgDQgKgDgOgBIgtAAg");
	this.shape_19.setTransform(573.005,-25.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16,p:{x:-17.55,y:0.15}},{t:this.shape_15,p:{x:-34.8125,y:-8.5558}},{t:this.shape_14,p:{x:-24.0335,y:64.125}},{t:this.shape_13,p:{x:-20.85,y:52.8}},{t:this.shape_12,p:{x:-24.275,y:109.125}},{t:this.shape_11,p:{x:-17.55,y:0.15}},{t:this.shape_10,p:{x:-20.85,y:52.8}},{t:this.shape_9,p:{x:-178.075,y:159.85}},{t:this.shape_8,p:{x:-19.675,y:146.0742}},{t:this.shape_7,p:{x:367.6714,y:-24.1517}},{t:this.shape_6,p:{x:367.6714,y:-24.1517}},{t:this.shape_5},{t:this.shape_4,p:{x:352.175,y:-11.35}},{t:this.shape_3},{t:this.shape_2,p:{x:409.6633,y:-18.625}},{t:this.shape_1,p:{x:433.045,y:-11.35}},{t:this.shape}]}).to({state:[{t:this.shape_16,p:{x:236.2,y:-8}},{t:this.shape_15,p:{x:218.9375,y:-16.7058}},{t:this.shape_14,p:{x:229.7165,y:55.975}},{t:this.shape_13,p:{x:232.9,y:44.65}},{t:this.shape_12,p:{x:229.475,y:100.975}},{t:this.shape_11,p:{x:236.2,y:-8}},{t:this.shape_10,p:{x:232.9,y:44.65}},{t:this.shape_9,p:{x:75.675,y:151.7}},{t:this.shape_8,p:{x:234.075,y:137.9242}},{t:this.shape_7,p:{x:621.4214,y:-32.3017}},{t:this.shape_6,p:{x:621.4214,y:-32.3017}},{t:this.shape_19},{t:this.shape_4,p:{x:605.925,y:-19.45}},{t:this.shape_18},{t:this.shape_2,p:{x:663.4133,y:-26.725}},{t:this.shape_1,p:{x:686.795,y:-19.45}},{t:this.shape_17}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.8,-205.3,1018.0999999999999,402.8);


(lib.MonsterOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("", "50px 'Calibri-BoldItalic'");
	this.text.lineHeight = 63;
	this.text.parent = this;
	this.text.setTransform(-50.1,-63.4,1.1006,1.3188);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBmIgGgCIgCgDIgCgEIgBgEIAAgGIgBgIIABgFIABgFQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQACgBADABIAIADIAMABQAGAAAKgCQAFgDAEgDQAFgDACgEQADgEAAgFQABgFgCgEQgBgGgEgDQgFgDgGgCIgOgDQgHgCgIgEQgGgCgGgIQgGgFgCgMQgDgNACgOQABgMAGgLQAGgLAKgJQALgIAPgFIAMgDIAMgBIAJABQAEABACACQACABABAEIABAHIAAAJIgBAJQAAABAAABQAAABAAAAQgBABAAAAQgBAAAAABIgFAAIgIgDIgKgBQgFABgHACQgEACgEACQgFAEgCAEQgCADAAAFQgBAEABAFQABAFAGADQAEACAGACIAOADQAHACAHAEQAIADAGAHQAFAFADAMQAEAPgCANQgCAOgHALQgHAMgLAJQgLAJgQAFQgGADgIAAIgMABIgLgCg");
	this.shape.setTransform(47.35,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBhQgJgFgHgKQgGgLgEgRQgDgMgBgPQgBgPABgOQACgPADgPQAFgPAIgNQAHgMALgKQAMgLAQgFQANgEALABQAMAAAIAFQAIAEAEAIQAGAHACAJQADAOgDAMQgDANgJALQgIAKgQAJQgQAJgVAIIgPAEIABAJIACAIQADAPAJAGQAIAFANgFQAKgDAIgEIAOgJIAJgHIAFgEQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIABAEIABAHIABAJIgBAIIgCAGQgBADgFAEIgLAIQgGAEgJAEQgIAEgJADQgOAFgMAAQgMAAgJgGgAADg/QgHACgFAGQgGAFgDAHQgDAHgCAJQgCAJAAAKIANgFQAMgEAIgEQAIgFAEgFQAEgFACgFQABgGgBgFQgCgHgGgEQgDgCgEAAIgIACg");
	this.shape_1.setTransform(32.8818,7.4409);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLCLIgBgEIgNkBIAAgEQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAGgEIAKgEIAIgCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQABAAAAABIANEBIAAAEIgDADIgHADIgJAEIgJACIgFABIgEgBg");
	this.shape_2.setTransform(21.15,7.1125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2CMQgEgBgBgEIgNkBIAAgEQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAGgEIAKgEIAJgCIAGAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIADBGIABAKIAAAJIAAALIgBAIQABgHAEgIIAKgPQAFgHAHgFQAGgGAIgCQAJgDAHABQAHAAAGAEQAGADAEAFQAFAFADAHQAEAGACAHIAEAPQADAMABAOQABAOAAAPQgBAPgEAPQgDAPgGAMQgGAMgKAKQgKAJgNAFQgNAEgLgEQgLgCgKgKIABAOQAAAFgEADQgEADgJADQgIACgEAAIgBAAgAAHggQgHACgFAIQgGAHgFAKQgEAKgCANQgDANABAOIACAaQAIAIAHADQAHADAIgDQAHgCAFgFQAEgFADgHQADgIABgJIABgTQABgJgBgKIgDgQIgDgKQgBgFgDgEQgDgDgEgCIgDAAIgFAAg");
	this.shape_3.setTransform(9.0583,12.5161);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2CMQgEgBgBgEIgNkBIAAgEQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAGgEIAKgEIAJgCIAGAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIADBGIABAKIAAAJIAAALIgBAIQABgHAEgIIAKgPQAFgHAHgFQAGgGAIgCQAJgDAHABQAHAAAGAEQAGADAEAFQAFAFADAHQAEAGACAHIAEAPQADAMABAOQABAOAAAPQgBAPgEAPQgDAPgGAMQgGAMgKAKQgKAJgNAFQgNAEgLgEQgLgCgKgKIABAOQAAAFgEADQgEADgJADQgIACgEAAIgBAAgAAHggQgHACgFAIQgGAHgFAKQgEAKgCANQgDANABAOIACAaQAIAIAHADQAHADAIgDQAHgCAFgFQAEgFADgHQADgIABgJIABgTQABgJgBgKIgDgQIgDgKQgBgFgDgEQgDgDgEgCIgDAAIgFAAg");
	this.shape_4.setTransform(-7.6917,17.9161);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBtQgIgBgGgEQgGgFgEgIQgEgJgCgKIgCgNIgCgOIgFhsIAAgDIADgEIAHgDIAJgEIAKgCIAFAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIABADIAFBoIABAJIACAJIACAIIADAFIAFADIAHgBQAGgCAFgHQAFgHAFgLQAFgLACgNQACgMgBgPIgEhMIABgDIADgEIAGgDIAJgEIAKgCIAGgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIAJCuIAAAEIgCADIgGADIgIADIgIACIgEABQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDIgBgcQgCAHgEAIQgDAJgHAHQgFAIgIAGQgHAGgIADQgIADgGAAIgGgBg");
	this.shape_5.setTransform(-24.5,25.6725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag9CJQgDgDgBgIIgMjdQAAgJADgFQAEgFAFgCIAxgPQAQgFALgBQANgBAJAEQAJAEAGAHQAGAIADANQACALAAALQAAAKgDAKQgDAKgGAIQgFAJgIAGQAHgBAHACQAGACAGAEQAFAFAEAHQAEAHACAJQACAJAAALQABAKgDAKQgCALgFAKQgGALgIAJQgIAJgNAJQgMAHgRAGIg3ASIgEAAQgDAAgDgBgAgCAJIgcAIIAEBJIAcgKQALgDAHgGQAHgHADgHQAEgIAAgIQABgJgCgIQgDgMgIgEQgEgCgGAAQgHAAgHADgAgNhdIgWAIIADBBIAXgHQAJgDAGgGQAGgGADgHQADgIAAgIQAAgHgBgHQgBgFgDgEQgCgDgEgCQgEgCgEAAIgMACg");
	this.shape_6.setTransform(-41.499,28.9917);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E2E9EF").ss(1,1,1).p("Ao9l/IRxAAQA5GIg2F3Ix0AAQgnmAAnl/g");
	this.shape_7.setTransform(0.0101,14.9634,1.0997,1.3177);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F5F7").s().p("Ao9GAQgnmAAnl/IRxAAQA5GIg2F3g");
	this.shape_8.setTransform(0.0101,14.9634,1.0997,1.3177);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D6BF47").ss(1,1,1).p("AI3qWQAWLFh8IQQn/DBmRjRQh4oZgCqxQISB3Jehyg");
	this.shape_9.setTransform(0.0887,111.4402,1.1006,1.3188);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E7E2D0").ss(1,1,1).p("ADbsXIgJAWIAADbQEjCHAoE1QAnE0gJJrAjosdIAFAYIAADiQjiBighDjQhuHqAfIkAjus0IAGAXIHDAGAjjsFIG1AEADkstIgJAW");
	this.shape_10.setTransform(-0.3861,-84.2543,1.1006,1.3188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F2F5F7").ss(1,1,1).p("ADqgdIAAA7InTgHIAAg0");
	this.shape_11.setTransform(-0.9474,-195.4661,1.1006,1.3188);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6BF47").s().p("Am/IvQh4oZgCqxQISB3JehyQAWLFh8IQQj2BdjbAAQjvAAjQhtg");
	this.shape_12.setTransform(0.0887,111.4402,1.1006,1.3188);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7E2D0").s().p("Ao1MUQgfokBunqQAhjjDihiIAAjiIgFgYIHDAGIgJAWIm1gEIG1AEIAADbQEjCHAoE1QAnE0gJJqQkqA5kWAAQkhAAkPg9gADbszgAjos5IgGgXIHSAHIgJAWg");
	this.shape_13.setTransform(-0.3861,-80.5519,1.1006,1.3188);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F5F7").s().p("AjoAXIAAg0IHSAAIAAA7g");
	this.shape_14.setTransform(-0.9474,-195.4661,1.1006,1.3188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MonsterOut, new cjs.Rectangle(-66.2,-200.4,132.5,400.9), null);


(lib.Monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2F5F7").ss(1,1,1).p("ACrgJQAAARg3ARQg3AShAAAQhBgBgygSQgzgTgBgTQgCgUA0gEQA0gDBBgBQBAAAA3AIQA3AHAAASg");
	this.shape.setTransform(197.6724,308.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,51,102,0.898)").s().p("Ah2AYQgzgTgBgTQgCgUA0gEQA0gDBBAAQBAAAA3AHQA3AIAAARQAAAQg3ASQg3ARhAAAQhBAAgygSg");
	this.shape_1.setTransform(197.6724,308.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F2F5F7").ss(1,1,1).p("AiogPQgBgTAzgFQAzgGBBAAQBAAAA2AJQA1AIAAARQAAARg1AUQg2AUhAAAQhBgBgygUQgxgVgCgTg");
	this.shape_2.setTransform(197.599,309.0256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,51,102,0.898)").s().p("AgCAuQhBgBgygUQgxgVgCgTQgBgTAzgFQAzgGBBAAQBAAAA2AJQA1AIAAARQAAARg1AUQg1AUg/AAIgCAAg");
	this.shape_3.setTransform(197.599,309.0256);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F2F5F7").ss(1,1,1).p("AilgQQgBgTAygGQAygHBBAAQBAAAA0AJQA0AJAAASQAAAQg1AXQg0AXhAgBQhBgBgxgXQgwgXgBgSg");
	this.shape_4.setTransform(197.549,309.3771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,51,102,0.898)").s().p("AgCAxQhBgBgxgXQgwgXgBgSQgBgTAygGQAygHBBAAQBAAAA0AJQA0AJAAASQAAAQg1AXQgyAWg+AAIgEAAg");
	this.shape_5.setTransform(197.549,309.3771);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F2F5F7").ss(1,1,1).p("AijgRQgBgSAxgIQAxgJBBAAQBAAAAzAKQAzAKAAASQAAAQg0AaQgzAahAgCQhBgBgwgZQgvgZgBgSg");
	this.shape_6.setTransform(197.4998,309.7042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,51,102,0.898)").s().p("AgCA0QhBgBgwgZQgvgZgBgSQgBgSAxgIQAxgJBBAAQBAAAAzAKQAyAKABASQAAAQg0AaQgwAZg9AAIgGgBg");
	this.shape_7.setTransform(197.4998,309.7042);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F2F5F7").ss(1,1,1).p("AihgRQgBgTAwgJQAxgKBBAAQBAAAAxALQAxALAAARQAAARgyAcQgyAdhAgCQhBgCgvgbQgvgbAAgRg");
	this.shape_8.setTransform(197.4247,310.0316);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,51,102,0.898)").s().p("AgCA4QhBgCgvgbQgvgbAAgRQgBgTAwgJQAxgKBBAAQBAAAAxALQAxALAAARQAAARgyAcQguAbg8AAIgIAAg");
	this.shape_9.setTransform(197.4247,310.0316);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F2F5F7").ss(1,1,1).p("AifgSQAAgSAvgLQAvgLBBAAQBAAAAwALQAwAMAAASQAAARgxAeQgxAghAgDQhBgCgugdQgugcAAgSg");
	this.shape_10.setTransform(197.3747,310.3842);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,51,102,0.898)").s().p("AgCA7QhBgCgugdQgugcAAgSQAAgSAvgLQAvgLBBAAQBAAAAwALQAwAMAAASQAAARgxAeQgtAdg7AAIgJAAg");
	this.shape_11.setTransform(197.3747,310.3842);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F2F5F7").ss(1,1,1).p("ACegTQAAARgwAhQgwAig/gDQhBgCgtggQgugeABgRQAAgSAugMQAugNBAAAQBBAAAuANQAvAMAAASg");
	this.shape_12.setTransform(197.3,310.711);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,51,102,0.898)").s().p("AgCA+QhAgCguggQgtgeAAgRQABgSAtgMQAvgNBAAAQBBAAAuANQAuAMAAASQABARgwAhQgsAgg7AAIgJgBg");
	this.shape_13.setTransform(197.3,310.711);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F2F5F7").ss(1,1,1).p("ACdgOQABAQggAUQggAUhIANQhGAMg3ggQg2ghAAgQQAAgSAugMQAvgNBAAAQBBAAAuANQAuAMAAASg");
	this.shape_14.setTransform(197.3,310.2492);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,51,102,0.898)").s().p("AhnAjQg2ghAAgQQABgSAtgMQAvgNBAAAQBBAAAuANQAuAMAAASQABAQggAUQggAUhIANQgUADgRAAQgwAAgogXg");
	this.shape_15.setTransform(197.3,310.2492);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F2F5F7").ss(1,1,1).p("AiegNQAAgRAugLQAugMBBAAQBAAAAwALQAvALABAQQABAQghAUQggAThHALQhGALg4geQg4geAAgPg");
	this.shape_16.setTransform(197.4515,309.8476);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,51,102,0.898)").s().p("AhmAgQg4geAAgPQAAgRAugLQAugMBBAAQBAAAAwALQAvALABAQQABAQghAUQggAThHALQgTADgRAAQgxAAgpgWg");
	this.shape_17.setTransform(197.4515,309.8476);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F2F5F7").ss(1,1,1).p("AiggMQAAgQAvgKQAugLBBAAQBAAAAxAJQAxAJABAQQABAPghATQghAUhGAJQhGAJg6gbQg6gcAAgOg");
	this.shape_18.setTransform(197.6265,309.447);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,51,102,0.898)").s().p("AhmAeQg6gcAAgOQAAgQAvgKQAugLBBAAQBAAAAxAJQAxAJABAQQABAPghATQghAUhGAJQgSACgRAAQgyAAgrgUg");
	this.shape_19.setTransform(197.6265,309.447);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F2F5F7").ss(1,1,1).p("AihgMQAAgOAugJQAugKBBAAQBAAAAyAIQAzAGABAQQACAPghASQgiAThGAHQhFAIg7gZQg8gZAAgOg");
	this.shape_20.setTransform(197.7806,309.0365);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,51,102,0.898)").s().p("AhlAbQg8gZAAgOQAAgOAugJQAugKBBAAQBAAAAyAIQAzAGABAQQACAPghASQgiAThGAHQgQACgPAAQg0AAgtgTg");
	this.shape_21.setTransform(197.7806,309.0365);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F2F5F7").ss(1,1,1).p("ACkgQQACAPgiARQgiAThFAGQhEAGg+gXQg+gXAAgMQAAgNAugIQAvgJBBAAQBAAAAzAFQA0AGACAOg");
	this.shape_22.setTransform(197.9321,308.6364);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,51,102,0.898)").s().p("AhlAYQg+gXAAgMQAAgNAugIQAvgJBBAAQBAAAAzAFQA0AGACAOQACAPgiARQgiAThFAGIgdABQg0AAgxgSg");
	this.shape_23.setTransform(197.9321,308.6364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},28).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	// Layer_2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ADfAAQAAA4gxAqQgJAHgJAGQhAAuhcAAQhaAAhCguQhCgvAAhAQAAg7A4gsQAEgEAGgDQBCguBaAAQBcAABAAuQBDAuAABAg");
	this.shape_24.setTransform(128.625,320.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.1,1,1).p("AoeAAQAAAJACAIQAAAAAAACQACAEADADQADAGAHAGQAJAJAOADQAFABAEABIABAAQAEABAFAAIACAAQAYgBAQgOQASgQAAgWQAAgMgHgKQgEgHgHgGQgHgHgJgDQgKgFgOgBIgEAAQgDAAgEABIgBAAQgTACgNANQgCABgCACQgCACgBACQgKAOAAAOgAIfAAIAAAAQAAAVgRAPQgOANgSACQgBAAAAAAQgEABgEAAIgEAAQgXgBgRgPQgQgNgBgTQAAgCAAgCQAAgVARgQQARgOAXgBIAEAAQAEAAACABQACAAABAAQASADAOALQARAQAAAVg");
	this.shape_25.setTransform(200.675,266.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F2F5F7").ss(1,1,1).p("ApSlFQgygOgqgaQhWg2AAhNQAAhNBWg3QBYg2B7AAQB8AABWA2QBYA3AABNQAAArgbAjQBNgHBQAAQALAAALAAQgBAAgBgBQifhgAAiJQAAiICfhhQCehhDhAAQDgAACgBhQCeBhAACIQAACJieBgQh2BHiWATQBwAsBlBBQAQgeAigYQBBgtBaAAQBZAABAAtQBAAuAAA+QAABAhAAtQg3AnhMAFQBjCJAAClQAAElk2DPQk3DQm1AAQkcAAjlhYAuFK9QjNi1AAjuQAAklE2jPQBfg/BrgsQCyhIDUgVAnqHvQAEgCACAAQAngMAcglQAEgFADgGQAYghAIgrQABgJACgJQAAgMAAgOQAAg9gbgvQgCgFgCgDQgGgIgFgHQgOgSgRgMQgNgKgOgGQgUgIgXAAQgDAAgDAAQgGABgGABQgCAAgBAAQgCAAgBABQgNACgfAFQgIABgKACQgYADgQAIQgVAJgJAOQgHAKgDAMQgHAPgTAeQgTAdADAgQADAhgBAgQgBAgAyAyQAhAgAYANAKtjjQAIAFAIAEQCIBbBLBrAGPHvQgRgMgPgTQgEgFgDgEQgYgjgIgrQgDgUAAgXQAAg+AbgvQAGgLAJgLQAaghAhgNQAUgJAXAAQADAAADABQAEAAAHABQANADA3AIQA2AJASAXQATAYAFAZQAEAZAOBJQANBKg4A4QggAggaANAgZmpQESADDfBW");
	this.shape_26.setTransform(202.125,240.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF99FF").s().p("AGYAtIgBgBQgrgPAAgWQAAgUArgPQAdgKAmgEQASgBARAAQAfAAAaAEQARACAOAEIAQAFQAMAEAJAFQAWAMgBAOQAAAWgqAPQgqAQg+AAQg7AAgqgPgAplAdQgqgQAAgUQAAgWAqgPQAUgGAVgEQAOgCAPgBIATgCIAEAAIAEAAQAOAAAOACIAcADIAGgBIAKABQAUAEATAGIAWAJQAVAMAAAQQAAAUgrAQQgrAPg8AAQg9AAgsgPg");
	this.shape_27.setTransform(199.15,295.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AnjA0IgJgBIgBAAIgJgBQgOgDgJgKQgHgFgDgHIgFgGIAAgDQgCgHAAgJQAAgOAKgOIADgEIAEgEQANgMATgCIABAAIAHgBIAEAAQAOABAKAEQAJAEAHAGQAHAHAEAHQAHAKAAAMQAAAWgSAPQgQAOgYABgAHhAzQgXAAgRgPQgQgNgBgTIAAgEQAAgVARgQQARgOAXgBIAEAAIAGABIADAAQASACAOAMQARAQAAAVIAAAAQAAAVgRAPQgOANgSACIgBAAIgIAAg");
	this.shape_28.setTransform(200.675,266.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6633FF").s().p("AI1C7QgrgOg7AAIgkABQgRgMgPgUIgGgJQgZgjgHgqQgEgVAAgXQAAg8AcgwQAFgLAJgLQAaghAigNQAUgIAWAAIAGABIALABIBEAKQA3AJARAYQAUAXAEAZIASBiQAOBJg4A5QghAggaAMQgOgEgQgCgAHHhdQgRAPAAAWIAAAEQABATAQANQARAPAXABIAEAAIAIgBIABAAQASgCAOgNQARgPAAgVIAAAAQAAgWgRgPQgOgMgSgDIgDAAIgGAAIgEAAQgXAAgRAPgAnpCpQgOgBgPAAIgDAAIgEAAQgdAAgZADIgKACQgZgMggggQgzgzABgfQABghgDgfQgDghAUgdQATgeAGgPQADgMAIgKQAIgOAWgJQAQgHAXgEIASgDIAtgHIACgBIADAAIANgBIAGAAQAWAAAUAHQAOAGANAKQASAMAOATIALAOIADAIQAcAvAAA9IAAAZIgEASQgHArgYAiIgHAKQgdAlgmAMIgGACIgcgEgAn/hcIgEADIgDAEQgKAOAAAPQAAAJACAIIAAACIAFAHQADAGAHAGQAJAJAOADIAJACIABAAIAJABIACAAQAYgBAQgOQASgQAAgWQAAgNgHgKQgEgHgHgGQgHgGgJgEQgKgFgOgBIgEAAIgHABIgBAAQgTACgNANg");
	this.shape_29.setTransform(199.2611,272.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E5DFF").s().p("ApKAiQgNgEgEgIQgEgJAEgJQAEgHAKgGIANgGIAMgEQAMgGAGgCQAOgEANAFQAOAEAAALQACAKgKAIQgIAJgJAEIgNADIgKAFIgJAGQgGACgGAAQgGAAgGgCgAI4AhQgIgBgKgEIgQgJIgNgIIgNgIQgQgKADgLQADgJALgEQALgFALACQAGACANAHQARAKAOAFQALAFABACIAKAFQAEAFgBAIQgBAGgGAEQgFAFgJACIgJABIgIAAg");
	this.shape_30.setTransform(194.2725,235.7442);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(202,158,223,0.898)").s().p("AowOGQAxgpAAg5QAAhBhDgtQhAgvhcABQhbgBhCAvIgKAHIAKgHQBCgvBbABQBcgBBAAvQBDAtAABBQAAA5gxApIgSAOQhAAuhcAAQhbAAhCguQhCgvAAhBQAAg7A4gsQjNi1AAjvQAAkkE2jPQBfg/BrgrQgygOgqgbQhWg2AAhNQAAhNBWg2QBYg3B7AAQB8AABWA3QBYA2AABNQAAArgbAjQjUAUiyBKQCyhKDUgUQBNgHBQABIAWAAIgCgCQifhgAAiJQAAiICfhhQCehgDhAAQDgAACgBgQCeBhAACIQAACJieBgQh2BIiWASQjfhVkSgDQESADDfBVQBwAsBlBBIAQAJQCIBcBLBrQhLhriIhcIgQgJQAQgeAigXQBBguBaAAQBZAABAAuQBAAtAAA+QAABBhAAsQg3AnhMAGQBjCIAACkQAAEmk2DPQk3DPm1ABQkcAAjlhYgAG8H6QgmAEgdALQgrAOAAAWQAAAVArAQIABAAQAqAPA7AAQA+AAAqgPQArgQAAgVQAAgQgWgMQgJgEgMgEIgQgGQAagNAgggQA4g4gNhJIgShjQgFgZgTgYQgSgXg2gJIhEgKIgLgCIgGgBQgXAAgUAJQghAMgaAiQgJALgGALQgbAvAAA+QAAAXADAVQAIAqAYAiIAHAKQAPATARANIAjgBQA8AAAqAOQgagEgfAAQgRAAgSABgApaHvQgVADgTAGQgqAPAAAWQAAAVAqAQQAsAQA8AAQA8AAArgQQArgQAAgVQAAgPgVgMIgWgKQgSgGgVgDIgKgCQAngMAcglIAHgLQAYgiAIgqIADgSIAAgaQAAg9gbgvIgEgIQgEgMgHgLQgKgNgVgJQgNgKgOgGQgUgHgXgBIgGAAIgMACIgDAAIgDABIgsAGIgSAEQgYADgQAIQgVAJgJANQgHALgDAMQgHAOgTAfQgTAdADAhQADAggBAhQgBAeAyA0QAhAfAYANIAKgCIAGACgApwhHQgGABgMAHIgMAEIgOAGQgKAFgDAJQgFAJAFAIQADAJANAEQANADALgDIAKgGIAKgGIAMgDQAKgDAIgJQAKgJgCgKQgBgLgOgEQgHgDgHAAQgGAAgGACgAGuhMQgLAFgCAJQgEALAQALIANAIIANAHIARAJQAKAFAHABQAKABAIgCQAIgCAGgFQAGgEAAgGQABgIgEgFIgKgHQgBgBgKgFQgOgFgRgLQgNgHgHgBIgGgBQgIAAgIADgAn/MkIAAAAg");
	this.shape_31.setTransform(202.125,240.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},28).wait(21));

	// Layer_3
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgkgGQAbAZAugW");
	this.shape_32.setTransform(201.725,361.1139);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AA/AAQAAAggOAYQgCAEgCADQgTAbgaAAQgZAAgTgbQgTgaAAglQAAghAQgZQACgCABgCQATgbAZAAQAaAAATAbQASAaAAAkg");
	this.shape_33.setTransform(181.05,365.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("ACbAAQAAAAAAABQAAALgFAJQgEAHgFABQgBAAAAAAQgBAAgBAAIgBAAQgHAAgEgIQgFgIAAgLQgBgBAAgBQAAgMAGgIQAEgIAHgBIABAAQABAAABAAQAAAAABABQAFABAEAHQAFAIAAAMgAiaABQAAAEABAEQAAABAAABQABACAAABQABAEACADQADAFAEADQABAAABAAIABAAQABABABAAIABAAQAHgBAEgIQAFgIAAgMQAAgIgCgGQgBgEgCgDQgCgDgCgCQgDgDgEAAIgBAAQgBAAgBAAIgBAAQgFABgEAHQAAABgBABQAAABgBACQgDAHAAAJg");
	this.shape_34.setTransform(201.575,334.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F2F5F7").ss(1,1,1).p("Aioi5QgOgIgNgPQgZgfAAgsQAAgsAZgfQAZgfAjAAQAjAAAZAfQAZAfAAAsQAAAZgHAUQAVgEAYAAQACAAADAAQAAAAAAAAQgtg3AAhPQAAhOAtg3QAtg3A/AAQBAAAAuA3QAtA3AABOQAABPgtA3QgiAogrALQAhAZAcAlQAEgRAKgOQATgZAZAAQAZAAATAZQASAaAAAkQAAAlgSAZQgQAWgVAEQAcBNAABeQAACohZB2QhYB2h7AAQhRAAhCgxADDiBQACADACACQAnA1AWA9ABxEcQgFgHgEgLQgBgDAAgDQgHgUgDgYQAAgMAAgNQAAgjAHgbQACgHACgGQAIgTAJgHQAGgFAGAAQABAAABABQACAAABAAQAEABAQAFQAPAFAFAOQAFAOABAOQACAOAEAqQADAqgPAgQgKATgHAHAiLEbQABgBABAAQAKgHAJgVQABgDABgDQAGgTADgZQAAgFAAgFQABgHAAgIQAAgjgHgbQgCgCAAgCQgCgFgBgDQgEgLgFgHQgEgGgEgDQgGgEgGAAQAAAAgBAAQgDAAgBAAQAAAAgBABIAAAAQgEABgJADQgCABgDABQgHACgEAEQgGAFgDAIQgCAGgCAHQgBAIgGARQgFARAAATQABASAAATQAAASAOAdQAKASAHAHAkAGRQg6hoAAiIQAAimBYh3QAbgkAfgZQAygqA9gLAgHjyQBOACA/Ax");
	this.shape_35.setTransform(202,319.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(202,158,223,0.898)").s().p("AifIEQAOgYAAggQAAglgSgaQgTgbgaAAQgaAAgTAbIgDAEIADgEQATgbAaAAQAaAAATAbQASAaAAAlQAAAggOAYIgEAHQgTAbgaAAQgaAAgTgbQgTgaAAglQAAgiAQgZQg6hoAAiIQAAimBYh3QAbgkAegZQgOgIgMgPQgZgfAAgsQAAgsAZgfQAZgfAkAAQAiAAAZAfQAZAfAAAsQAAAZgIAUQAXgEAWAAIAGAAIAAAAQgtg3AAhPQAAhOAtg3QAsg3BAAAQBAAAAtA3QAuA3gBBOQABBPguA3QghAogrALQg/gxhOgCQBOACA/AxQAhAZAcAlQAEgRAKgOQATgZAZAAQAZAAATAZQASAaAAAkQAAAlgSAZQgQAWgVAEQgWg9gng1IgEgFIAEAFQAnA1AWA9QAbBNABBeQAACohZB2QhYB2h8AAQhQAAhCgxgAgEGrQAPAAATgJIACgBIACgBIgCABIgCABQgTAJgPAAIgBAAIAAAAQgSAAgNgLIAAAAIgBgBIgBgBIAAAAIAAAAIABABIABABIAAAAQANALASAAIAAAAIABAAgAB+EiQgLACgIAGQgMAIAAANQAAAMAMAJIABAAQAMAIAQAAQARAAANgIQAMgJAAgMQAAgJgGgHIgGgFIgFgDQAIgHAJgTQAPgggDgqIgGg4QAAgOgGgOQgFgOgQgFIgTgGIgDAAIgCgBQgGAAgGAFQgKAHgGATIgFANQgIAbAAAjIABAZQACAYAHAUIADAGQADALAGAHIAKgBQAQAAANAIQgIgCgJAAIgKABgAirEbQgGACgFADQgNAJAAAMQAAANANAIQAMAJASAAQAQAAANgJQAMgIAAgNQAAgIgGgHIgGgGQgFgDgGgCIgDgBQALgHAIgVIACgGQAHgTACgZIAAgKIABgPQAAgjgIgbIgBgEIgDgNQgDgIgGgFQgDgGgFgDQgGgEgGAAIgCAAIgDAAIgBABIAAAAIgNAEIgFACQgHACgEAEQgHAFgCAIIgEANQgBAIgGARQgFARABATIAAAlQABASAOAdQAIASAIAHIADgBIABABgAixgoIgFAFIgEACIgDADQgDADgCAFQgBAFABAFQACAFAEACQADADADgDIADgDIADgDIAEgCIAEgHQADgGgBgFQAAgGgEgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABgAB7gqQgEACgBAFQAAAHAEAGIAEAFIAEAEIAEAFIAFADQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQADgCABgDQABgCABgEIgBgGIgDgFIgDgDIgJgJQgEgEgCgBIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABgAipi5QAzgqA8gLQg8ALgzAqgAiRHMIAAAAg");
	this.shape_36.setTransform(202,319.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6633FF").s().p("AChBrQgMgJgRAAIgKACQgFgIgEgKIgCgGQgHgUgCgZIgBgZQAAghAHgcIAFgMQAHgTAJgIQAGgEAGAAIACABIAEAAIATAGQAPAFAFANQAGAOABAOIAFA4QAEAqgQAgQgJASgIAIQgEgDgEgBgACCg1QgGAJAAAMIABACQAAALAFAIQAEAIAHABIABAAIACAAIABgBQAFgBAEgHQAFgJAAgLIAAgBQAAgMgFgJQgEgHgFgBIgBAAIgCAAIgBAAQgHAAgEAIgAiLBgIgHgBIgCAAIgBAAQgIAAgHACIgDABQgHgGgJgSQgOgeAAgSIgBgkQgBgSAGgSQAFgQACgIIADgOQADgHAGgFQAEgFAHgCIAFgBIANgFIAAAAIABAAIAEgBIABAAQAHABAFAEQAFADADAGQAFAGAEAMIADAIIACAEQAHAaAAAkIAAAOIgBAKQgCAYgHAUIgCAFQgIAWgLAGIgCABIgIgCgAiRg0IgBACIgBACQgDAIAAAJIABAJIAAABIABAEIADAGQADAGAEACIACABIABAAIACAAIABAAQAHAAAEgJQAFgIAAgMQAAgIgCgGIgDgHIgEgGQgDgDgEAAIgBAAIgCABIgBAAQgFAAgEAIg");
	this.shape_37.setTransform(201.1552,337.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF99FF").s().p("AB0AaIAAAAQgMgJAAgMQAAgMAMgIQAIgGALgCIAKgBQAJAAAHACQAFABAEADIAFADIAGAFQAGAHAAAIQAAAMgMAJQgNAIgRAAQgRAAgMgIgAitAQQgNgIAAgMQAAgMANgJQAFgDAGgCIAIgCIAGgBIABAAIABAAIAIABIAIACIACgBIACABQAHACAFADIAGAGQAGAHAAAIQAAAMgMAIQgNAJgRAAQgRAAgMgJg");
	this.shape_38.setTransform(201.125,350.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiJAeIgCAAIgBAAIgCgBQgEgDgDgFIgDgHIgBgDIAAgCIgBgJQAAgIADgHIABgDIABgCQAEgHAFgBIABAAIACgBIABAAQAEABADACIAEAGIADAIQACAFAAAHQAAANgFAIQgEAJgHAAgACKAeIgBAAQgHgBgEgIQgFgJAAgKIgBgCQAAgMAGgIQAEgJAHAAIABAAIACAAIABAAQAFACAEAHQAFAIAAAMIAAAAQAAAMgFAJQgEAHgFABIgBABIgCAAg");
	this.shape_39.setTransform(201.575,334.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E5DFF").s().p("AimATQgDgCgCgFQgBgFABgFQABgEADgDIAEgDIADgCIAGgFQAEgCADADQAEACAAAGQAAAFgCAFIgFAHIgDACIgEADIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBgACiATIgGgDIgDgFIgFgEIgEgFQgEgFABgHQAAgFAEgCQADgDADABQACABADAEIAJAJIAEADIACAEIABAGQAAAEgBACQgCADgDACIgCAAIgCAAg");
	this.shape_40.setTransform(199.75,316.5818);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgqgGQAfAaA2gYg");
	this.shape_41.setTransform(201.75,358.1078);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAhdQAfAAAVAcQAVAcAAAlQAAAigQAZQgDAEgCADQgVAcgfAAQgdAAgWgcQgVgbAAgnQAAgjASgZQAWgdAagD");
	this.shape_42.setTransform(177.775,362.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(227,230,232,0.937)").ss(1,1,1).p("AgBgeQAEAAAEABQAFABAEABQABAAABgBQABABACAAQAIACAFAEQAEADADADQAHAHAAAIQAAANgOAJQgOAJgUAAQgTAAgOgJQgOgJAAgNQAAgMAOgJQAGgEAHgCQAMgDAEAAAgDgeIAAAA");
	this.shape_43.setTransform(184.225,346.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("ACLAAQAAgMAHgJQAFgJAIAAQAKACAEAHQAGAJAAAMQAAANgGAIQgEAIgGABQgBABgDAAIAAAAQgIgBgFgJQgFgIgBgLQgBgBAAgBgAiyAAQAAgIADgIQAIgMAFgBIAFgBQAEABADACQADACACAEQADAEABAEQADAGAAAHQAAANgHAJQgFAJgHAAQgDAAgBAAQgCAAgCgBQgEgCgDgGQgDgDgBgEQAAgCgBgCQgBgGAAgFg");
	this.shape_44.setTransform(201.5,330.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F2F5F7").ss(1,1,1).p("AjDjCQgQgIgOgPQgdghAAguQAAguAdggQAdghAoAAQApAAAcAhQAdAgAAAuQAAAagJAVQAagEAaAAQAGAAABAAIAAgBQgHgHgGgJQgKgNgIgPQgWgrAAg0QAAhSA1g6QAzg6BKAAQBKAAA0A6QA1A6AABSQAABSg1A5QgmAqgyAMQAmAaAhAnQAFgSALgOQAVgbAeAAQAeAAAUAbQAVAbAAAmQAAAmgVAbQgRAXgZADQAgBSAABiQAACvhmB8QhnB8iPAAQhdAAhMg0AgPj9QAEAAADAAQAIAAAGABQgGgBgHAAIgBAAQAAAAAAAAQgHgIgGgJAjDjCQA6grBGgMAAGj8QBUAHBBAtADiiHQACADADADQAtA2AZBAACxExQgOgJgUAAQgGAAgFABQgGgHgFgMQgCgDgBgDQgHgUgDgaQgBgMAAgOQAAglAJgcQANghALgIQAHgFAHAAQABAAACABQABAAADAAQADACATAFQASAFAFAOQAHAPAAAOQADAPAEAsQAEAsgSAiQgLATgIAIQADABACACQAEACADADQAHAHAAAKQAAAMgOAKQgOAJgUAAQgUAAgOgJQgGgFgEgFIgEgKQAAgBAAAAQAAgBAAAAQAAgNAOgJQAKgGANgDQAFgBAGAAQAKAAAJADgAC7E1QgFgDgFgBAjIEnQgCABAAAAQgJgHgLgTQgQgeAAgTQAAgUgBgTQgBgUAHgSQAGgRACgJQAHgVAHgGQAFgEAIgCQADgBADgBQAKgDAFgCQAAAAABAAQACgBACAAQABAAABAAQAIAAAGAFQAFADAEAGQAGAHAEAMIABAAAjGEoQAAAAgCgBAiJBpQACAGACAHQABACAAADQAKAcAAAlQAAAIgBAHQAAAGgBAFQgDAagIAUQgBADgBADQgKAWgLAHAiJBpQACAIgBgDQABAEACAEAiTBbQAHAGADAIAi1ElIgBAAQgJAAgJACAizElIgCAAAjyGEIgHAAQgZADgTAYQgCADgBACQhDhtAAiOQAAiuBlh8QAfgmAkgb");
	this.shape_45.setTransform(202,314.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF99FF").s().p("ACHAbQgHgFgEgFIgEgKIAAgBIAAgBQAAgMAOgJQAKgGAMgDIAMgBQALAAAIADQAFABAFADIAFADQAEACADADQAHAHAAAJQAAAMgOAKQgOAJgUAAQgTAAgOgJgACGAbQgGgFgEgFQAEAFAHAFgAjJARQgOgJAAgMQAAgNAOgJQAGgEAHgCIAQgDIABAAIABAAIABAAIAJABIAJACIACgBIAEABQAHACAFAEIAIAGQAGAHABAJQAAAMgPAJQgOAJgUAAQgUAAgOgJgAB8ARIAAAAg");
	this.shape_46.setTransform(201,347.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AihAfIgEgBQgEgCgDgGIgDgHIgBgEIgCgLQAAgIAEgIQAGgMAGgBIAFgBQAEABAEACQACACACAEIAEAIQACAGABAHQAAANgHAJQgFAJgHAAIgEAAgACfAfQgIgBgFgJQgGgIAAgLIAAgCQgBgMAHgJQAFgJAIAAQAKACAFAHQAFAJAAAMQAAANgFAIQgFAIgGABIgEABg");
	this.shape_47.setTransform(201.5,330.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6633FF").s().p("AC6BwQgOgJgTAAIgMABQgGgHgEgMIgDgGQgIgUgCgaQgBgMAAgOQAAgkAJgcQANghALgIQAHgFAHAAIACABIAEAAIAWAHQASAFAGAOQAGAPABAOIAHA6QAEAsgSAiQgLATgJAIQgEgDgGgBgACWg3QgGAJAAANIABACQAAALAFAIQAGAJAIABIAAAAIAEgBQAGgBAEgIQAGgIAAgNQAAgNgGgJQgEgHgKgCQgIAAgGAJgAigBlIgJgBIgCAAIAAAAIgBAAQgJAAgJACIgDABQgIgHgLgTQgQgeAAgTIgBgmQgBgUAHgSIAIgaQAHgVAHgGQAFgEAIgCIAGgCIAOgFIACAAIAEgBIACAAQAHAAAHAFQAFADAEAGQAGAHAEAMIAAAAIAAAAQgEgMgGgHQAHAGADAIQACAIgCgDIAEAIIABAFQAJAcAAAlIAAAOIgBALQgDAagIAUIgCAGQgKAWgMAHIgCABIgJgCgAidg/QgGABgHAMQgDAIAAAJIABALIABAEIAEAHQADAGAEACIAEABIADAAQAIAAAFgJQAGgJAAgNQAAgIgCgGIgEgIQgCgEgDgCQgDgCgFgBg");
	this.shape_48.setTransform(201.0346,333.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9E5DFF").s().p("AjAATQgEgCgCgFQgBgFABgGQACgEACgDIAJgGIAGgFQAEgCAFADQAFADAAAGQAAAFgEAFQgCAGgCACIgIAFIgEADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBgAC7ATQgDgBgDgDIgEgFIgFgEIgEgFQgGgFABgIQABgFAEgCQAJgBAEAFIAKAJIAFADIACAEIABAHQAAAEgCACQgCADgCACIgDAAIgDAAg");
	this.shape_49.setTransform(199.4,311.6235);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(202,158,223,0.898)").s().p("Ai4IcQAQgZAAgiQAAgmgVgcQgWgbgfAAQAfAAAWAbQAVAcAAAmQAAAigQAZIgFAIQgWAcgfAAQgeAAgVgcQgWgcABgnQAAgjASgaIADgFQATgYAZgDIAHAAIgHAAQgZADgTAYIgDAFQhEhtAAiOQAAiuBnh8QAegmAkgbQA6grBGgMQhGAMg6ArQgQgIgOgPQgdghAAguQAAguAdggQAdghApAAQAoAAAcAhQAdAgAAAuQAAAagJAVQAagEAaAAIAHgBIAAAAIgNgQQgKgNgIgPQgWgrAAg0QABhSA0g6QAzg6BKAAQBKAAA0A6QA1A6AABSQAABSg1A5QgmAqgyAMQhBgthUgHQBUAHBBAtQAlAaAiAnIAFAGQAsA2AaBAQgahAgsg2IgFgGQAFgSALgOQAWgbAdAAQAeAAAUAbQAWAbgBAmQABAmgWAbQgRAXgZADQAgBSAABiQAACvhmB8QhmB8iQAAQheAAhLg0gAAoGzIhUgCQAfAbA1gZgAkoGkQAVgcAagEQgaAEgVAcgACSEvQgMADgKAGQgOAJAAANIAAABIAAABIAEAKQAEAFAGAFIABAAQAOAJATAAQAUAAAOgJQAOgKAAgMQAAgKgHgHQgDgDgEgCIgFgDQAIgIALgTQASgigEgsIgGg7QgBgOgHgPQgFgOgTgFIgVgHIgFAAIgCgBQgHAAgHAFQgLAIgNAhQgJAcAAAlQAAAOABAMQADAaAHAUIADAGQAEAMAHAHIAMgBQATAAAOAJQgIgDgLAAIgMABgAjGEoQgHACgGAEQgOAJAAANQAAANAOAJQAOAJAUAAQAUAAAOgJQAPgJAAgNQgBgJgGgHIgIgGQgFgEgHgCIgEgBQAMgHALgWIACgGQAHgUADgaIABgLIAAgPQABglgKgcIgBgFIgEgNQgDgIgHgGQgEgGgFgDQgGgFgIAAIgCAAIgEABIgCAAIgOAFIgGACQgIACgFAEQgHAGgHAVIgIAaQgGASAAAUIABAnQAAATAQAeQALATAIAHIAEgBIABABgAjNgqIgGAFIgJAGQgCADgCAFQgBAGABAFQACAFAEACQAEADADgDIAEgDIAIgFQACgCACgGQAEgGAAgFQAAgGgFgDQgCgCgDAAIgEABgACOgsQgEACgBAFQgBAIAGAGIAEAFIAFAEIAEAFQADADADABQAEABACgBQACgCACgDQACgCAAgEIgBgHIgCgFIgFgDIgKgJQgDgEgHAAIgDAAgAgIj9IAAAAIAOABIgOgBIAAAAIAOABIgOgBIAAgBIAAABIgHAAIAHAAIAAAAgAgIj9IAAAAg");
	this.shape_50.setTransform(202,314.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgwgHQAkAcA9gZg");
	this.shape_51.setTransform(201.75,355.1145);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAhhQAiAAAZAdQAYAdAAAnQAAAjgSAaQgDAEgDAEQgZAdgiAAQghAAgYgdQgZgdAAgoQAAgkAUgbQAWgaAYgG");
	this.shape_52.setTransform(174.5,359.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(212,214,216,0.875)").ss(0.9,1,1).p("AgCggQAFAAAFABQAFABAFACQABAAACgBQABABACAAQAIACAHAEQAEADAEADQAIAIAAAIQAAANgQAKQgQAKgXAAQgWAAgQgKQgQgKAAgNQAAgNAQgJQAHgEAIgCQAOgDAEgBAgFggQABAAABAA");
	this.shape_53.setTransform(181.825,343.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.1,1,1).p("ACeAAQAAgNAHgKQAGgJAJAAQALACAGAHQAGAKAAANQAAANgGAKQgGAIgGABQgCABgCAAIgBAAQgJgBgGgJQgGgJAAgMQgBgBAAgBgAjKABQAAgKADgIQAIgNAHgBIAFgBQAFABAEADQADACADAEQACAEACAFQACAGAAAIQAAAMgGAKQgGAKgJAAQgDAAgBAAQgCgBgCgBQgGgCgDgGQgCgDgCgEQgBgCAAgDQgBgFAAgFg");
	this.shape_54.setTransform(201.475,325.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F2F5F7").ss(1,1,1).p("AgiknIgihqQAAgDAAgDQAAgBAAgBQAAgBAAgBQAAhWA6g8QA7g8BUAAQBUAAA8A8QA7A8AABWQAABWg7A8QgsAsg4AMQAqAbAmAoQAGgSAMgPQAYgcAiAAQAhAAAYAcQAYAcAAAoQAAAogYAcQgVAYgbADQAkBVAABnQAAC3hzCBQh1CCijAAQhqAAhWg2AjejLQgSgIgQgQQgggiAAgxQAAgwAggiQAhgiAuAAQAuAAAhAiQAgAiAAAwQAAAbgKAXQAdgFAeAAIAHAAQgNgOgLgQAkSGVIgRACQgXAFgSAWQgDACgCADQhMhyAAiVQAAi2B0iCQAjgnAogcQBDgtBPgMAgRkJQAEAAAEAAQAGAAAFAAQgFAAgFAAIgBAAQgOgOgLgQAACkJIAEABQBgAHBLAwAEBiOQACAEAEACQAyA6AdBCADJE+QgQgJgWAAQgHAAgHABQgGgIgFgMQgCgDgBgDQgJgVgDgbQgBgNAAgOQAAgnAKgdQAPgjAMgIQAIgFAIAAQACAAABABQABAAADAAQAFABAUAGQAVAFAGAPQAIAPABAQQABAPAGAuQAEAugUAjQgMAUgKAIQADACADABIAAAAQAFADADADQAIAIAAAJQAAAOgQAJQgQAKgXAAQgVAAgQgKQgIgEgEgGIgFgLQAAAAAAgBQAAAAAAgBQAAgNAQgKQALgGAPgCQAGgBAGAAQANAAAJACgADUFCQgFgDgGgBAjjE0QgBABgCAAQgKgIgMgTQgTggABgUQAAgUgCgUQAAgVAHgSQAIgTABgJQAIgWAIgGQAGgFAJgCQADgBAEgBQALgDAFgBQABgBABAAQACAAADgBQABAAABAAQAIAAAIAFQAFAEAFAGQAGAHAGAMIAAAAQACAEACAFQAAACABADQAKAdAAAnQAAAIAAAIQAAAGgBAFQgDAbgIAVQgCADgBADQgLAYgOAHAicBtQADAJgCgEAicBtQADAHACAHAinBfQAIAGADAIAjPEyIAAAAQgKAAgKACAjLEyIgCAAAjhE1QgBAAgBgB");
	this.shape_55.setTransform(202,309.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF99FF").s().p("ACZAcQgIgEgEgGQAEAGAIAEIgBAAQgHgEgEgGIgFgLIAAgBIAAgBQAAgMAQgKQALgGAPgCIANgBQAMAAAJACIARAHIABAAIAHAFQAIAJAAAIQAAAOgPAJQgRAKgWAAQgWAAgQgKgAjkASQgQgJAAgNQAAgNAQgKQAHgEAIgCIARgDIABAAIABAAIACAAIAKABIALACIACgBIAEABQAIACAGAEIAIAGQAIAHAAAKQAAANgQAJQgQAKgWAAQgXAAgQgKg");
	this.shape_56.setTransform(200.875,343.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ai3AgIgEgBQgGgCgDgGIgEgHIgBgEIgBgLQAAgKADgIQAIgNAHgBIAFAAQAFABAEACIAGAGIAEAJQACAGAAAIQAAANgGAJQgGAJgJABIgEgBgAC0AgQgJAAgGgKQgGgIAAgMIgBgCQAAgMAHgKQAGgKAJAAQALACAGAIQAGAKAAAMQAAANgGAJQgGAIgGACIgEAAg");
	this.shape_57.setTransform(201.475,325.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6633FF").s().p("ADTB1QgPgJgWAAIgOABQgGgIgGgMQgCgDAAgEQgKgUgCgbQgCgNAAgOQAAgmAKgeQAQgiAMgIQAIgFAIAAIACABIAFAAIAZAHQAUAFAHAOQAHAQACAPIAHA8QAEAvgUAjQgNAUgJAIQgGgDgGgBgACrg6QgHAKAAANIAAACQABAMAGAJQAGAKAJAAIABAAIADAAQAHgCAFgIQAHgKAAgNQAAgNgHgKQgFgHgLgDQgJABgGAJgAi2BqIgLgBIgBAAIgCAAIAAAAQgKAAgKACIgDABQgKgIgMgTQgTggABgUIgCgnQAAgVAHgTQAHgSACgJQAIgWAIgHQAGgEAJgCIAGgCIARgEIACgBIAFgBIACAAQAIAAAHAFQAGAEAFAFQAGAIAGAMIAAAAIAEAJIABAFQAKAdAAAmIAAAQIgBALQgDAagJAWIgCAGQgLAYgOAHIgDABIgKgCgAiyhCQgHABgIAMQgEAJAAAKIABALIACAFIAEAHQADAFAFACIAEACIAEABQAJgBAGgJQAHgKAAgNQAAgJgDgGIgEgJIgGgFQgEgDgFgBgAjYBrQAKgCAKAAIgSADIgCgBg");
	this.shape_58.setTransform(200.9138,329.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9E5DFF").s().p("AjbAUQgEgDgCgFQgBgFABgGQACgEADgDIAKgGIAHgGQAFgCAEADQAGADAAAHQAAAFgDAGQgEAFgDACIgIAGIgEADQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAIgFgBgADUATIgGgDIgGgFIgFgFIgFgFQgGgGABgHQABgFAEgDQALgBAFAFIALAKIAFADQACACABACQACADAAAEQgBAEgCADQgCADgDABIgDABIgEgBg");
	this.shape_59.setTransform(199.075,306.5735);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(202,158,223,0.898)").s().p("AjRI0QASgaABgjQAAgogZgdQgYgdgjAAQAjAAAYAdQAZAdAAAoQgBAjgSAaIgGAIQgYAdgjAAQgiAAgYgdQgagdAAgoQABglAUgbIAFgFQASgWAYgFIAQgCIgQACQgYAFgSAWIgFAFQhMhyAAiVQAAi2B0iCQAjgnAogcQgSgIgQgQQgggiAAgxQAAgwAggiQAhgiAuAAQAvAAAgAiQAgAiABAwQAAAbgLAXQAdgFAeAAIAIAAIABAAIAKAAIgKAAIgBAAIALAAIgLAAQgOgOgLgQIgihqIgBgGIAAgCIAAgCQAAhWA8g8QA6g8BUAAQBUAAA8A8QA7A8AABWQAABWg7A8QgsAsg4AMQhLgwhggHIgEgBIAEABQBgAHBLAwQAqAbAlAoIAGAGQAzA6AdBCQgdhCgzg6IgGgGQAHgSAMgPQAYgcAiAAQAhAAAYAcQAYAcAAAoQAAAogYAcQgVAYgbADQAkBVAABnQAAC3h0CBQh0CCijAAQhqAAhWg2gAAvHGIhigDQAkAdA+gagAlRG3QAWgaAZgGQgZAGgWAagACmE9QgOACgLAGQgQAKAAANIAAACIAAAAIAFALQAEAGAHAEIABAAQAPAKAXAAQAWAAAQgKQAQgJAAgOQAAgJgIgIIgIgGIAAAAIgGgDQAKgIAMgUQAVgjgFguIgHg9QgCgQgHgPQgGgPgVgFIgZgHIgEAAIgDgBQgIAAgHAFQgNAIgPAjQgLAdAAAnQAAAOACANQADAbAJAVQAAADACADQAGAMAHAIIANgBQAWAAAPAJQgIgCgMAAIgOABgAjgE1QgJACgHAEQgQAKAAANQAAAOAQAJQAQAKAYAAQAWAAAQgKQAQgJAAgOQAAgJgIgIIgIgGQgGgEgJgCIgDgBQAOgHALgYIADgGQAIgVADgbIABgLIAAgQQAAgngKgdIgBgFIgEgOQgEgIgIgGQgFgGgGgEQgGgFgJAAIgCAAIgFABIgCABIgQAEIgHACQgJACgGAFQgIAGgIAWQgCAJgHATQgHASABAVIABAoQgBAUAUAgQALATAKAIIAEgBIACABgAjpgsIgHAFIgJAGQgEAEgBAFQgCAFACAGQABAFAFADQAFACAEgDIAEgDIAIgFQADgCADgGQAEgGAAgGQAAgHgGgCQgDgCgCAAIgFABgAChgvQgEADgBAFQgCAIAHAGIAEAGIAGAEIAGAGIAGADQAEABACgBQAEgCACgDQACgCABgEQgBgEgBgEQgBgCgDgCIgEgEIgLgKQgFgEgIAAIgDAAgAjejLQBDgtBPgMQhPAMhDAtgAgJkJIAAAAgAgRkJIAIAAQgOgOgLgQQALAQAOAOIgIAAgAgiknIAAAAg");
	this.shape_60.setTransform(202,309.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ag3gHQApAdBGgag");
	this.shape_61.setTransform(201.8,352.1019);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAhlQAnAAAbAeQAbAeAAApQAAAlgUAbQgEAEgDAEQgbAegnAAQglAAgcgeQgbgeAAgqQAAgmAXgcQAYgbAbgG");
	this.shape_62.setTransform(171.225,356.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(197,199,201,0.812)").ss(0.8,1,1).p("AgEghIAAAAAgCghQAFAAAFABQAHABAFABQACAAABgBQACABACAAQAJADAIAEQAEADAEADQAJAIAAAJQAAAOgRAKQgTAKgZAAQgYAAgSgKQgSgKAAgOQAAgNASgKQAHgEAJgDQAPgDAFAA");
	this.shape_63.setTransform(179.425,339.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.1,1,1).p("ACxAAQAAgNAIgKQAHgKAKAAQAMACAGAIQAIAKAAANQAAAOgIAJQgGAJgHABQgCABgCAAIgBAAQgKgBgHgKQgHgJAAgMQgBgBAAgBgAjjAAQAAgJAFgJQAIgNAIgBIAFgBQAGABAEADQAEACADAEQACAEACAFQADAGAAAIQAAAOgHAKQgHAKgKAAQgDAAgCAAQgBAAgDgBQgGgDgDgGQgDgDgCgEQgBgDAAgCQgCgGAAgGg");
	this.shape_64.setTransform(201.4,321.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F2F5F7").ss(1,1,1).p("AEfiUQAHgTAOgPQAbgeAlAAQAmAAAbAeQAbAdAAApQAAAqgbAdQgXAZggAEQApBZAABrQAAC/iBCHQiDCHi2AAQh3AAhgg5AgXkhIgdgoQgZgtAAg3QAAhZBCg/QBCg/BeAAQBeAABDA/QBCA/AABZQAABahCA+QgyAug/ANQAwAcAqAqQADAEAEADQA4A7AgBGAj4jTQgVgJgSgRQgkgkAAgyQAAgyAkgjQAlgkA0AAQAzAAAkAkQAlAjAAAyQAAAcgLAXQAggEAiAAIABAAQAGAAABgBIAAAAQgGgGgGgGAkzGmIgTACQgaAGgVAWQgCADgCACQhWh2AAibQAAi+CCiHQAogpAtgdQBKgwBZgNAADkTQgGgBgHAAIgBAAQAHAAAHABIAEAAQBrAHBTAyAgLkUQAAAAAAgBQgGgGgGgGAgSkUQAEAAADAAADgFMQgRgKgZAAQgIAAgHABQgHgHgGgNQgCgDgBgEQgKgWgDgcQgCgNAAgPQAAgoALgfQARgkAOgJQAJgFAJAAQABAAACABQACAAADAAQAFACAXAFQAXAGAHAPQAIAQACAQQACAQAGAwQAFAwgXAlQgOAVgLAIQAEACADACIAAAAQAFACAEADQAJAIAAAKQAAAOgSAKQgSAKgZAAQgZAAgSgKQgJgFgEgFIgFgMQAAgBAAgBQAAgOASgJQAMgHAQgDQAHgBAIAAQANAAAKADgADtFQQgGgDgHgBAi7BjQAHAIAGAMIAAABQACADACAGQABACABADQAMAeAAAoQAAAJgBAIQAAAGgBAGQgDAcgKAWQgBADgCADQgMAZgQAHAivByQADAJgCgDAivByQAEAHABAIAi7BjQAJAGADAJAj+FBQgCABgCAAQgLgHgNgVQgVghAAgVQAAgVgBgVQgBgVAIgUQAIgTADgJQAIgYAJgGQAHgFAKgCQAEgBADgBQANgDAGgCQABAAABAAQACgBADAAQACAAAAAAQAKAAAIAFQAGAEAGAGAjkE/IgCAAAjmE/IgCAAQgMAAgKACAj8FCQgBAAgBgB");
	this.shape_65.setTransform(202.025,304.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF99FF").s().p("ACrAdQgJgFgEgGQAEAGAJAFIAAAAQgJgFgEgGIgFgMIAAgBQAAgNASgKQAMgGAQgDIAPgBQANAAAKADQAQAFAEACIAAAAQAFACAEAEQAJAIAAAJQgBAOgRAKQgSAKgZAAQgaAAgRgKgAj/ASQgTgJABgNQgBgOATgLQAHgDAJgDIAUgDIACAAIAAAAIACAAIALABIAMACIADgBIADABQAKADAHADIAJAHQAJAHAAALQAAANgSAJQgSALgZAAQgaAAgRgLg");
	this.shape_66.setTransform(200.75,340.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AjOAiIgDgBQgGgDgEgGQgDgDgCgEIgBgFIgCgMQABgJAEgJQAJgNAHgBIAFgBQAGABAEADIAHAGIAEAJQADAGABAIQAAAOgIAKQgGAKgLAAIgFAAgADKAiQgLgBgGgKQgHgJgBgMIAAgCQAAgNAIgKQAGgKALAAQAMACAHAIQAGAKABANQgBAOgGAJQgHAJgHABIgEABg");
	this.shape_67.setTransform(201.4,321.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6633FF").s().p("ADsB4QAHABAGADQgGgDgHgBQgRgKgZAAIgPABQgHgHgGgNIgDgHQgKgWgDgcQgCgNAAgPQAAgnALgfQARgkAOgJQAJgFAJAAIADABIAFAAIAcAHQAXAGAHAPQAIAQACAQIAIA/QAFAwgXAlQgOAVgLAIIAHAEQgDgCgRgGgAC/g+QgIAKAAAOIAAACQABAMAHAJQAGAKALABIABAAIAEgBQAHgBAGgJQAHgJAAgOQAAgOgHgKQgGgIgMgCQgLAAgGAKgAjNBsIgLgBIgCAAIAAAAIgCAAQgLAAgLACIgEABQgLgHgNgVQgVghAAgVIgBgpQgBgVAIgUQAIgTADgJQAIgYAJgGQAHgFAKgCIAHgCIATgFIACAAIAFgBIACAAQAKAAAIAFQAGAEAGAGQAHAIAGAMIAAAAIAAAAQgGgMgHgIQAJAGADAJQADAJgCgEIAEAKIACAFQAMAeAAAoIgBAQIgBAMQgDAcgKAWIgDAGQgMAZgQAHIgDABIgMgCgAjIhHQgIABgIANQgFAJAAAKIACAMIABAFQACAEADADQADAGAGADIAEABIAFAAQAKAAAHgKQAHgKAAgOQAAgJgDgGIgEgJIgHgGQgEgDgGgBg");
	this.shape_68.setTransform(200.8141,325.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9E5DFF").s().p("Aj1AVQgFgDgCgFQgCgGACgFQACgFAEgEIALgGIAHgFQAGgDAFADQAGADAAAHQABAGgEAGQgEAFgDADIgKAFIgEADQgDACgCAAIgFgBgADuAUQgDAAgFgDIgGgGIgGgEIgFgGQgHgGABgIQABgFAFgDQAMgBAFAFIANAKIAFAEIAEAEQACADAAAEQgBAFgCACQgCAEgEABIgDABIgEgBg");
	this.shape_69.setTransform(198.725,301.5359);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(202,158,223,0.898)").s().p("AjqJMQAUgbAAglQAAgpgbgfQgbgegnAAIgTACQgaAGgVAWIgEAFIAEgFQAVgWAagGIATgCQAnAAAbAeQAbAfAAApQAAAlgUAbIgHAJQgbAegnAAQgmAAgcgeQgbgeAAgrQAAgmAXgdQhWh2AAibQAAi+CCiHQAogpAtgdQBKgwBZgNQhZANhKAwQgVgJgSgRQgkgkAAgyQAAgyAkgjQAlgkA0AAQAzAAAkAkQAlAjAAAyQAAAcgLAXQAggEAiAAIABAAIAHgBIAAAAIgMgMIgdgpQgZgsAAg3QAAhZBCg/QBCg/BeAAQBeAABDA/QBCA/AABZQAABahCA+QgyAug/ANQhTgyhrgHIgFgBIAFABQBrAHBTAyQAwAcAqAqQAHgTAOgPQAbgeAlAAQAmAAAbAeQAbAdAAApQAAAqgbAdQgXAZggAEQgghGg4g7IgHgHIAHAHQA4A7AgBGQApBZAABrQAAC/iBCHQiDCHi2AAQh3AAhgg5gAA2HZIhvgDQApAfBGgcgAl5HJQAYgaAbgHQgbAHgYAagAC6FKQgQADgMAHQgSAJAAAOIAAABIAFANQAEAFAJAFIAAAAQASAKAZAAQAZAAASgKQASgKAAgOQAAgKgJgIQgEgDgFgCIAAAAIgHgEQALgIAOgVQAXglgFgwIgIhAQgCgQgIgQQgHgPgXgGIgcgHIgFAAIgDgBQgJAAgJAFQgOAJgRAkQgLAfAAAoQAAAPACANQADAcAKAWIADAHQAGANAHAHIAPgBQAZAAARAKQgKgDgNAAIgPABgAj8FCQgJADgHAEQgSAKAAAOQAAAOASAKQASAKAZAAQAZAAATgKQARgKAAgOQAAgKgJgIIgIgGQgIgEgJgDIgEgBQAQgHAMgZIADgGQAKgWADgcIABgMIABgRQAAgogMgeIgCgFQgBgIgEgHQgDgJgJgGQgGgGgGgEQgIgFgKAAIgCAAIgFABIgCAAIgTAFIgHACQgKACgHAFQgJAGgIAYQgDAJgIATQgIAUABAVIABAqQAAAVAVAhQANAVALAHIAEgBIACABgAkFguIgHAGIgLAGQgEADgCAGQgCAGACAFQACAGAFACQAFADAFgDIAEgDIAKgGQADgCAEgGQAEgGgBgGQAAgHgGgDQgDgCgDAAIgFABgAC0gwQgFACgBAGQgBAIAHAGIAFAGIAGAFIAGAFQAFADADABQAEABADgBQAEgCACgDQACgDABgEQAAgEgCgEIgEgFIgFgDIgNgKQgEgEgJAAIgEAAgAACkUIgNAAIAAgBIAAABIgHAAIAHAAIABAAIAMAAIAAAAgAgKkUIgBAAIANAAIgMAAgAgLkUIAAAAg");
	this.shape_70.setTransform(202.025,304.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ag9gIQAtAgBOgdg");
	this.shape_71.setTransform(201.825,349.1018);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(182,184,185,0.749)").ss(0.8,1,1).p("AgCgjQAFAAAGACQAHABAGABQACgBABAAQADAAACABQAKACAIAEQAFAEAFADQAKAIAAAKQAAAOgUAKQgUALgcAAQgbAAgUgLQgUgKAAgOQAAgOAUgLQAJgEAJgCQASgDAFgBAgFgjIABAA");
	this.shape_72.setTransform(177.025,336.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.1,1,1).p("ADEAAQAAgOAIgLQAIgJALgBQAOACAHAIQAIALAAAOQAAAOgIAKQgHAJgIABQgCABgDAAIgBAAQgLgBgIgKQgHgJgBgMQAAgCAAgBgAj7AAQAAgKAFgJQAJgNAJgCIAFAAQAHAAAFADQAEADADAEQADAEACAFQADAHAAAIQAAAPgIAKQgHAKgMAAQgDAAgCAAQgCAAgCgBQgHgDgEgGQgDgEgCgDQgBgDgBgCQgBgHAAgGg");
	this.shape_73.setTransform(201.35,317.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F2F5F7").ss(1,1,1).p("AmiHcQheh7AAiiQAAjGCPiNQAsgqAygeQgXgJgUgSQgoglAAg0QAAg1AogkQApglA5AAQA5AAAoAlQApAkAAA1QAAAdgMAYQAjgFAmAAQAFAAAEAAIAAAAQhKhCAAhdQAAhcBKhCQBJhCBnAAQBoAABLBCQBJBCAABcQAABdhJBCQg3AvhGAOQA1AdAvAsQADADAEADQA/A/AjBIQAtBcAABwQAADHiPCMQiRCNjJAAQiEAAhrg6AE+iaQAHgUAPgQQAegfAqAAQApAAAeAfQAeAeAAArQAAAsgeAeQgZAagjAEAAAkfQgFAAgHgBIAAAAQAHAAAFABIAEAAQB5AHBdA1AgVkgIAJAAAkTjcQBSgyBjgNAD4FZQgUgKgbAAQgIAAgJABQgIgIgGgNQgCgDgBgEQgMgXgDgdQgCgNAAgRQAAgpANggQASgmAQgJQAJgFALAAQABAAACAAQACAAADACQAGAAAZAGQAZAGAJAQQAJARABAQQADARAGAyQAGAygaAmQgPAWgLAJQAEABADACIAAAAQAGADAEADQAKAJAAAKQAAAPgUAKQgUAKgcAAQgcAAgTgKQgEgCgDgCIgGgFQgIgHAAgJQAAgPAUgKQAOgHASgCQAIgBAIAAQAOAAAMACgAEHFeQgHgDgIgCAjQBnQAIAIAHANIAAAAQADAFACAFQABACABADQAMAfAAArQAAAJAAAIQgBAGAAAHQgEAcgLAXQgBAEgCADQgOAZgRAIAjCB2QADAKgCgEAjCB2QAEAIACAIAkaFOQgCABgCAAQgMgHgPgWQgXgjAAgVQABgWgCgWQgBgWAJgVQAJgTADgKQAJgZAKgGQAHgFALgCQAFgCAEAAQAOgEAGgBQACgBABAAQACAAADAAQACAAABAAQAKAAAKAFQAGADAGAHQAKAGAEAJAj/FMIgBAAQgOAAgMACAj9FMIgCAAAkXFPQgBAAgCgB");
	this.shape_74.setTransform(202.05,299.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABRBCQgEAFgEAEQgeAfgrAAQgpAAgfgfQgegfAAgsQAAgoAZgdQACgCACgCQABAAAAgBQAfggApAAQArAAAeAgQAfAfAAArQAAAmgXAcg");
	this.shape_75.setTransform(167.95,353.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF99FF").s().p("AC9AfIgIgFIgFgEQgIgIABgJQgBgNAVgKQANgHASgDIAQgBQAOAAAMADQASAGAEACIAAAAQAGACAEAEQAKAIAAAJQAAAPgUAKQgTALgdAAQgbAAgUgKgAkbATQgUgKAAgOQAAgOAUgLQAJgEAJgCIAXgEIABAAIAAAAIACAAQAHAAAGACIANACIADgBIAEABQALACAIAEIAKAHQAJAIAAAKQAAAOgTAKQgUALgcAAQgcAAgUgLg");
	this.shape_76.setTransform(200.65,336.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AjkAjIgEgBQgGgDgEgGQgEgDgCgEIgBgFIgCgMQAAgKAFgKQAJgNAJgBIAGgBQAGAAAFADQAEADADAEIAGAJQADAHAAAJQAAAOgJAKQgHAKgLABIgGgBgADgAjQgMAAgIgLQgHgJAAgMIgBgDQAAgOAIgKQAIgKAMAAQAOABAGAJQAIAKAAAOQAAAPgIAJQgHAJgIABIgEABg");
	this.shape_77.setTransform(201.35,317.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6633FF").s().p("AEGB/QgUgKgbAAIgRABQgIgIgHgNIgDgHQgLgYgEgdQgBgNAAgQQAAgpAMggQATglAPgJQAKgGAKAAIADABIAFABIAgAHQAZAGAIAQQAJAQACARIAJBBQAGAzgaAmQgPAWgMAIQgHgDgHgBgADTg/QgJAKAAAPIABADQAAAMAIAKQAHAKAMAAIABAAIAEAAQAJgBAGgJQAIgKAAgPQAAgPgIgKQgGgIgOgCQgMAAgHAKgAjjBzQgGgCgGAAIgCAAIAAAAIgCAAQgNAAgMADIgFABQgLgIgPgWQgXgiAAgWQAAgWgBgVQgBgWAJgUQAIgUADgKQAJgYAKgHQAIgFALgCIAIgCIAVgFIACgBIAGAAIACAAQALAAAJAFQAHAEAGAGQAIAJAGAMIABABIgBgBQgGgMgIgJQAKAHAEAJQADAJgCgDIAEAJIACAFQANAgAAAqIAAARIgCAMQgDAdgLAWIgEAIQgNAZgSAIIgDABIgNgCgAjehIQgIABgKAOQgFAJAAALIACAMIACAFQABAEAEADQAEAHAGACIAFABIAFABQALgBAHgKQAJgKAAgOQAAgKgDgHIgGgJQgDgEgEgCQgFgDgGgBg");
	this.shape_78.setTransform(200.7012,321.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9E5DFF").s().p("AkPAWQgGgDgCgFQgCgGACgGQACgFAFgEIAMgGIAIgGQAGgDAGAEQAHADAAAHQABAGgFAGQgEAGgEACIgKAGIgFADQgDACgDAAIgFgBgAEHAVQgDAAgFgDIgHgGIgGgFIgHgGQgHgGACgIQABgGAFgDQANgBAGAFIAPALIAFAEIAEAEQACADAAAFQgBAEgCADQgDADgEACIgEABIgEgBg");
	this.shape_79.setTransform(198.38,296.4859);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(202,158,223,0.898)").s().p("AkDJlQAWgcAAgnQAAgrgeggQgegggrAAQgqAAgeAgIgCABIgEAEIAEgEIACgBQAeggAqAAQArAAAeAgQAeAgAAArQAAAngWAcIgIAJQgeAegrAAQgqAAgegeQggggAAgsQAAgpAagdQheh7AAihQAAjGCPiOQAtgqAxgeQBSgxBjgOQhjAOhSAxQgXgJgUgSQgoglAAg0QAAg1AogkQApglA5AAQA6AAAoAlQAoAkAAA1QAAAdgMAYQAkgFAlAAIAJAAQhKhBABhdQgBhdBKhCQBJhCBoAAQBnAABLBCQBJBCAABdQAABdhJBBQg3AwhFANQheg1h5gHIgEAAIgMgBIAAABIAMAAIAEAAQB5AHBeA1QA0AdAvAsIAHAGQA+A/AkBIQgkhIg+g/IgHgGQAHgUAPgQQAfgeApgBQApABAeAeQAeAeAAAsQAAArgeAeQgZAbgjADQAtBdABBwQAADHiQCMQiRCMjJAAQiEAAhqg6gAA8HsIh8gDQAuAhBOgegADOFYQgSACgNAIQgVAKABAOQgBAJAIAHIAFAFIAIAEQAUALAbAAQAdAAATgLQAUgLAAgOQAAgLgKgHQgEgEgGgCIAAAAIgHgEQAMgJAPgWQAZglgFgzIgJhCQgCgRgJgRQgIgQgagFIgfgHIgFgBIgDgBQgKAAgKAFQgQAKgSAlQgNAgAAAqQABAQABANQADAdAMAYIADAHQAGAMAIAIIASAAQAbgBATAKQgMgCgOAAIgQABgAkXFQQgJACgJAEQgUALAAAOQAAAPAUAKQAUALAcAAQAcAAAUgLQATgKAAgPQAAgKgJgJIgKgGQgIgEgLgCIgEgBQARgJAOgZIADgHQALgXAEgcIABgNIAAgSQAAgqgMgfIgCgFQgCgIgDgHQgEgKgLgGQgFgHgHgDQgJgFgLgBIgDAAIgFABIgCABIgVAFIgJACQgKACgIAFQgKAGgJAZQgDAKgIAUQgKAUACAWQABAWgBAWQAAAVAYAjQAOAWAMAIIAEgBIADABgAkhgwIgIAGIgMAHQgFADgCAGQgCAGACAGQACAGAGACQAGADAFgDIAFgEIAKgFQAEgDAEgGQAFgHgBgGQAAgHgGgDQgEgCgEAAIgFABgADIgyQgGADgBAFQgCAIAIAIIAGAFIAGAFIAIAGQAEADAEABQAEABAEgBQAEgCACgEQACgDABgEQABgEgDgEIgEgFIgFgEIgOgLQgGgEgJAAIgEABgAgMkgIAAAAIAAAAIgJAAIAJAAgAAAkfIAAAAgAgMkfIAAgBIAMABIgMAAg");
	this.shape_80.setTransform(202.05,299.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhEgIQAzAhBWgeg");
	this.shape_81.setTransform(201.825,346.1086);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(166,168,170,0.686)").ss(0.7,1,1).p("AgDgkQAHAAAGABQAIABAHACQABgBACAAQACAAADABQALACAJAFQAGADAFADQAKAJAAAKQAAAPgVALQgWALgfAAQgeAAgWgLQgVgLAAgPQAAgOAVgLQAKgFALgCQATgEAFAAAgFgkIAAAA");
	this.shape_82.setTransform(174.625,332.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.1,1,1).p("ADXAAQAAgOAJgLQAJgLALAAQAQACAHAJQAJALAAAOQAAAPgJAKQgHAKgJABQgDAAgCAAIgCAAQgLAAgJgLQgIgJgBgOQAAgBAAgBgAkTAAQAAgKAFgJQAKgPAKgBIAGgBQAHABAFADQAFADADAEQADAEADAFQADAIAAAIQAAAPgJALQgIAKgMABQgEAAgCgBQgCAAgDgBQgHgCgFgHQgDgEgCgEQgBgCgBgDQgBgHAAgGg");
	this.shape_83.setTransform(201.3,313.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AgBhuQABAAAAAAQAvAAAhAhQAhAgAAAtQAAAogZAdQgEAFgEAEQghAhgvAAQgtAAgighQghghAAgtQAAgpAcgfQAdgcAggI");
	this.shape_84.setTransform(164.675,351.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F2F5F7").ss(1,1,1).p("Al3HJIgVACQggAGgZAYQgDADgCADQhoiAAAioQAAjOCeiSQAwgtA2gfQgZgJgVgTQgtgmAAg3QAAg2AtgmQAsgnA/AAQA/AAArAnQAtAmAAA2QAAAfgOAZQAngFApAAIADAAQAHAAAAgBIAAAAQgFgEgEgEIgPgPQg4g9AAhQQAAhhBQhEQBQhEByAAQByAABSBEQBQBEAABhQAABghQBEQg8AyhNAOQA6AeAzAuQAIgVARgRQAhgfAuAAQAtAAAhAfQAhAgAAAtQAAAtghAfQgcAcgnAEQAzBgAAB0QAADPieCRQieCTjeAAQiQAAh1g+AAAkqQgGgBgHAAIAAAAQAAAAgBgBQgFgEgEgEAgNkrQAHAAAGABIAEAAQCFAHBmA3AgVkrQAEAAAEAAAkujlQBbgzBrgOAFcigQAEAEAEADQBFBAAmBMAERFnQgWgKgeAAQgKAAgIABQgJgJgIgNQgCgEgBgEQgNgYgDgeQgCgOAAgRQAAgrANghQAVgnARgJQAKgGAMAAQABAAACABQACAAAEAAQAGACAcAGQAcAGAJAQQAKARACASQACARAHA0QAHA0gcAoQgRAXgNAIQAEACAEACIAAAAQAHADAEADQALAJAAALQAAAPgWALQgWALgfAAQgeAAgVgLIgBAAQgFgDgDgDIgHgFQgHgHAAgIQAAgPAWgLQAPgHATgDQAJgBAJAAQAQAAAOADgAEgFrQgIgDgHgBAjOCLQABACABADQAOAhAAAsQAAAJgBAJQAAAHgBAGQgEAegMAYQgCADgCAEQgOAagUAJAk1FcQgCAAgDABQgNgJgQgWQgZgkAAgWQAAgXgBgXQgCgXAKgVQAKgVADgKQAKgZALgHQAIgFAMgDQAFgBAEgBQAQgDAHgCQACAAABAAQACgBAEAAQACAAABAAQALAAAKAFQAIAEAGAHQALAHAFAJQAEAIACAIAjkBrQAJAJAHANIABAAQACAEADAGAjUB7QADAKgCgEAkVFZIgCAAAkXFZIgCAAQgPAAgNADAkyFdQgBgBgCAA");
	this.shape_85.setTransform(202.05,294.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF99FF").s().p("ADPAgIAAgBIgJgFIgHgGQgGgHAAgIQAAgOAWgKQAPgIATgCIASgBQAQAAANADIAXAIIABAAQAGACAEAEQALAIAAAKQAAAPgVALQgWALgfAAQgeAAgWgKgAk3AUQgVgLAAgOQAAgPAVgLQAKgEALgDIAYgDIACAAIAAAAIACAAIAOABIAPACIADgBIAFABQALADAJAEIALAHQAKAIAAALQAAAOgVALQgWALgfAAQgfAAgWgLg");
	this.shape_86.setTransform(200.525,333.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Aj6AkIgFgBQgHgCgFgHQgDgEgBgEIgCgFIgCgNQAAgKAFgJQAKgPAKgBIAGgBQAHABAFADQAFADADAEIAGAJQAEAIgBAIQABAPgKALQgIAKgMABIgGgBgAD0AkQgLAAgJgLQgIgJgBgOIAAgCQAAgOAJgLQAJgLALAAQAQACAHAJQAJALAAAOQAAAPgJAKQgHAKgJABIgEAAg");
	this.shape_87.setTransform(201.3,313.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6633FF").s().p("AEfCCQAIABAHADQgHgDgIgBQgVgKgeAAIgTABQgIgJgIgNIgDgIQgNgYgDgeQgCgOAAgRQAAgqANghQAVgnARgJQAKgGAMAAIADABIAGAAIAiAIQAcAGAJAQQAJARADASIAJBEQAHA0gdAoQgQAXgOAIIAJAEIgYgIgADohDQgKALAAAPIABACQAAAOAJAJQAIALAMAAIACAAIAEAAQAJgBAHgKQAJgKAAgPQAAgPgJgLQgHgJgPgCQgMAAgIALgAj4B1IgOgBIgCAAIAAAAIgCAAQgPAAgNADIgFABQgNgJgQgWQgZgkAAgWIgBgtQgCgXAKgVQAKgVADgKQAKgZALgHQAIgFAMgDIAJgCIAXgFIADAAIAGgBIADAAQALAAAKAFQAIAEAGAHQALAHAFAJQADAKgCgEIAFAKIACAFQAOAhAAAsIgBARIgBANQgEAegMAYIgEAHQgOAagUAJIgDABIgOgDgAjzhNQgJABgLAPQgFAJAAALIACANIACAFQABAEAEAEQAEAHAHACIAGABIAFABQAMgBAJgKQAJgLAAgPQAAgJgEgIIgFgJQgEgEgFgDQgFgDgHgBgAjFhjIABAAIgBAAQgHgNgJgJQAJAJAHANg");
	this.shape_88.setTransform(200.5592,317.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9E5DFF").s().p("AkpAXQgHgDgCgGQgCgGACgGQACgFAFgEIANgHIAJgGQAHgDAHAEQAGADABAIQABAGgGAGQgDAGgFADIgLAGIgGADQgCACgEAAIgFgBgAEgAWQgEgBgFgDIgIgGIgHgFIgGgGQgIgGABgJQABgGAHgDQAOgBAGAGIARALIAGAEIAEAEQACADAAAFQAAAFgDADQgEADgEACIgEAAIgFAAg");
	this.shape_89.setTransform(198.05,291.4365);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(202,158,223,0.898)").s().p("AkcJ8IgJAKQghAggvAAQguAAgiggQghghAAguQAAgqAdgeQhoiAAAioQgBjOCeiSQAwgtA3gfQgZgJgWgTQgsgmAAg3QAAg2AsgmQAtgnA+AAQA/AAArAnQAuAmgBA2QAAAfgNAZQhsAOhaAzQBagzBsgOQAngFApAAIACAAIAIgBIAAAAIgKgIIgPgPQg4g9AAhQQAAhhBRhEQBPhEBzAAQByAABRBEQBRBEgBBhQABBghRBEQg8AyhNAOQhmg3iFgHIgEgBIgNAAIANAAIAEABQCFAHBmA3QA6AeAzAuIAIAHQBFBAAmBMQAzBgAAB0QgBDPidCRQieCTjdAAQiRAAh0g+gAkcJ8QAZgdAAgoQAAgtgighQghgggvAAIgBAAIgWACQggAGgZAYIgEAGIAEgGQAZgYAggGIAWgCIABAAQAvAAAhAgQAiAhAAAtQAAAogZAdgABDH/IiJgDQAyAiBXgfgAnJHvQAcgcAhgIQghAIgcAcgADiFlQgUADgOAHQgXALAAAPQAAAIAHAHIAHAFIAJAGIAAAAQAVALAfAAQAfAAAVgLQAWgLAAgPQAAgLgLgJQgEgDgHgDIAAAAIgJgEQAOgIARgXQAcgogHg0IgJhFQgDgSgJgRQgJgQgcgGIgigIIgGAAIgDgBQgLAAgKAGQgSAJgVAnQgNAhAAArQAAARACAOQADAeANAYIADAIQAIANAJAJIASgBQAeAAAWAKQgNgDgQAAIgSABgAkyFdQgKACgKAFQgWALABAPQgBAPAWALQAWALAfAAQAeAAAXgLQAVgLAAgPQAAgLgLgJIgKgGQgKgFgKgCIgGgBQAUgJAPgaIADgHQAMgYAEgeIABgNIABgSQAAgsgOghIgCgFQgCgIgEgIQgEgJgMgHQgGgHgHgEQgKgFgMAAIgDAAIgGABIgDAAIgXAFIgJACQgLADgJAFQgKAHgKAZQgDAKgLAVQgJAVABAXIACAuQgBAWAZAkQARAWANAJIAEgBIADABgAk9gyIgJAGIgNAHQgFAEgCAGQgCAGACAGQACAGAHADQAGADAFgEIAGgDIALgGQAFgDADgGQAGgHgBgGQgBgIgGgDQgEgCgEAAIgGABgADbg1QgHADgBAGQgBAJAIAHIAGAGIAHAFIAIAGQAFADAEABQAFABAEgBQAEgCAEgDQADgDAAgFQAAgFgCgDIgEgFIgGgEIgRgLQgFgFgLAAIgEAAgAgNkrIAAAAIANAAIgNAAIAAAAIAAgBIAAABgAgNkrIgIAAIAIAAgAHPgNQgmhMhFhAIgIgHQAIgVARgRQAhgfAuAAQAtAAAhAfQAgAgAAAtQAAAtggAfQgcAcgnAEIAAAAgAFcigIAAAAg");
	this.shape_90.setTransform(202.05,294.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhKgJQA3AkBeggg");
	this.shape_91.setTransform(201.85,343.1085);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(151,153,154,0.624)").ss(0.7,1,1).p("AgDglQAHAAAHABQAIABAIACQACgBABAAQADAAADABQALACAKAFQAHADAFAEQAMAJAAAKQAAAQgYALQgYALghAAQggAAgYgLQgYgLAAgQQAAgPAYgLQAKgFAMgCQAVgEAGAAQABAAABAA");
	this.shape_92.setTransform(172.225,329.125);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(0.1,1,1).p("ADqAAQAAgPAKgMQAJgKANAAQARACAIAIQAKAMAAAPQgBAQgJALQgIAJgKACQgCAAgDAAIgCAAQgNAAgJgLQgJgKgBgOQAAgCAAgBgAksABQAAgLAGgKQAMgPAKgBIAGgBQAIABAGADQAFADAEAEQADAEADAGQAEAIAAAJQAAAPgKALQgJALgOABQgEAAgCgBQgDAAgCgBQgIgDgFgHQgDgDgDgFQgBgCgBgDQgCgHAAgGg");
	this.shape_93.setTransform(201.25,308.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAhyQAAAAAAAAQAzAAAkAiQAkAhAAAvQAAAqgbAeQgEAFgFAEQgkAigzAAQgxAAgkgiQglgiAAgvQAAgqAfggQAfgeAkgI");
	this.shape_94.setTransform(161.375,348.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#F2F5F7").ss(1,1,1).p("AmXHaIgYADQgiAGgbAZQgEADgCADQhxiFAAivQAAjVCriYQA1guA7ggQgcgKgXgTQgwgoAAg5QAAg4AwgoQAxgoBDAAQBFAAAvAoQAxAoAAA4QAAAggPAaQArgGAsAAIADAAIAIAAQgLgJgJgJIhEiZQAAhkBYhHQBYhGB7AAQB8AABZBGQBXBHAABkQAABlhXBGQhBA0hUAOQA/AgA4AvQAJgWASgRQAkghAyAAQAxAAAjAhQAkAhAAAuQAAAvgkAhQgeAcgqAEQA3BkAAB4QAADXirCXQitCYjxAAQidAAh/g/AlQFpQgDABgCAAQgOgJgSgXQgcglABgXQAAgYgCgYQgBgYALgVQAKgWAEgLQAKgaAMgHQAJgFANgDQAGgBAEgBQARgEAIgBQACgBABAAQADAAAEgBQABAAACAAQAMAAALAGQAIAEAHAHQAKAJAIAOIAAAAQADAFADAFQABADABADQAPAiAAAtQAAAKAAAKQgBAGgBAHQgEAfgNAYQgCAEgCAEQgQAbgVAJAgEk2QgFAAgFAAIAAgBQAFABAFAAIAFAAIEDBBAgOk3QgLgJgKgJAgXk3QAFAAAEAAAlIjtQBig2B1gOAF7imQAEAEAFADQBLBDApBOAEoF1QgXgLghAAQgKAAgKABQgJgJgIgOQgDgEgBgDQgOgZgEggQgCgOAAgRQAAgtAPgjQAXgpASgJQALgGANAAQABAAADABQACAAADAAQAIACAeAGQAeAGAKASQAKARADATQACARAIA2QAHA3gfApQgRAXgPAJQAFACAEACIABAAQAGADAFAEQAMAJAAALQAAAQgXALQgYALgiAAQggAAgYgLIgBAAQgFgDgEgDIgIgGQgHgHAAgIQAAgQAYgLQAQgHAVgDQAKgBAKAAQASAAANADgAE5F5QgIgDgJgBAjnCAQAEAKgDgEAj4BvQAMAHAFAKQAEAIADAIAkuFmIgCAAAlNFqQgBAAgCgBAkyFmQgQAAgOAD");
	this.shape_95.setTransform(202.05,289.475);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF99FF").s().p("ADhAhIAAAAIgKgGIgHgGQgHgHAAgJQAAgOAYgLQAQgIAVgCIATgCQASAAAOAEIAaAIIAAAAIALAGQAMAKAAAJQAAARgXAKQgXAMgjAAQggAAgYgLgAlSAVQgYgLABgPQgBgQAYgLQALgFALgCIAbgEIACAAIACAAQAIAAAHABIAQADIADgBIAGABQALACAKAFIANAHQALAJAAALQAAAPgYALQgYALggAAQgiABgYgMg");
	this.shape_96.setTransform(200.4,329.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AkQAmIgFgBQgIgDgFgHQgDgEgCgEIgDgGIgCgMQABgLAFgKQALgPALgBIAGgBQAIABAFADQAGADADAEIAGAKQAEAIABAJQAAAPgLALQgIALgOABIgGgBgAEKAmQgNgBgJgKQgJgLAAgOIgBgCQAAgPAKgLQAJgLANgBQARADAIAJQAKALAAAPQgBAQgJALQgIAJgKACIgFAAg");
	this.shape_97.setTransform(201.25,308.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9E5DFF").s().p("AlEAYQgHgDgCgGQgCgHACgGQACgFAFgFIAPgHIAKgGQAHgDAHAEQAIADAAAIQABAHgFAGQgFAHgFACQgIAEgEADIgGADQgDACgDAAIgHgBgAE6AXQgEgBgGgDIgJgGIgHgGIgIgGQgIgHACgIQABgGAGgEQAQgBAHAGIARALIAHAFIAFAEQACAEAAAFQgBAEgDADQgDAEgFACIgEAAIgFAAg");
	this.shape_98.setTransform(197.7042,286.3865);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6633FF").s().p("AE5CJQgYgKggAAIgUAAQgKgJgIgOIgEgHQgNgZgEggQgCgOAAgRQAAgsAPgjQAWgpATgJQALgFAMAAIAEAAIAGABIAlAIQAeAGAKARQALASACASIAKBGQAIA3gfApQgSAXgPAKQgHgEgJgBgAD8hEQgKALAAAQIABADQAAAOAJAKQAJALANAAIACAAIAFAAQAKgCAIgJQAJgLABgQQAAgQgKgLQgIgIgRgDQgNAAgJALgAkOB8QgHgCgIAAIgCAAIgCAAQgQABgOADIgGABQgOgKgRgXQgcglAAgXQABgYgCgXQgCgXALgWQALgWADgKQALgaAMgHQAJgGANgDIAKgBIAYgGIADgBIAHgBIADAAQANABALAFQAIAEAHAIQAJAJAIANIAAABIAAgBQgIgNgJgJQAMAHAFAJQADAKgDgDIAGAKIACAFQAPAjAAAsIAAATIgBANQgFAfgNAZIgEAIQgQAagVAKIgDABIgQgDgAkIhOQgKACgMAPQgFAJAAAMIABANIADAFQACAFADADQAFAIAIACIAGABIAGABQANAAAJgMQAKgLAAgPQAAgKgEgIIgGgKQgEgDgFgEQgGgDgHAAg");
	this.shape_99.setTransform(200.4391,313.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(202,158,223,0.898)").s().p("Ak2KVIgJAJQgjAig0AAQgyAAgkgiQglgiAAgvQAAgrAfggQhxiFAAivQAAjVCsiYQA0guA7ggQBjg2B1gOQh1AOhjA2QgcgKgXgTQgwgoAAg5QAAg4AwgoQAxgoBDAAQBGAAAuAoQAyAoAAA4QAAAggPAaQAqgGAtAAIACAAIAJAAIgVgSIAVATIgVgTIhEiZQAAhkBZhHQBWhGB8AAQB9AABYBGQBYBHAABkQAABlhYBGQhBA0hUAOQA/AgA4AvQAIgWAUgRQAjghAyAAQAxAAAkAhQAjAhAAAuQAAAvgjAhQgfAcgpAEQA2BkAAB4QAADXirCXQitCYjwAAQieAAh/g/gAk2KVQAcgegBgqQABgvglgiQgjgig0AAIgBAAIgYADQgiAGgbAZIgGAGIAGgGQAbgZAigGIAYgDIABAAQA0AAAjAiQAlAigBAvQABAqgcAegABJISIiVgDQA3AkBeghgAnyICQAfgeAkgHQgkAHgfAegAD2FzQgWADgPAHQgZALAAAQQAAAIAIAHIAHAGIAKAGIAAAAQAYALAgAAQAiAAAXgLQAYgLAAgQQAAgLgMgJIgMgHIAAAAIgJgEQAPgJASgXQAfgpgIg3IgKhHQgCgTgLgRQgKgSgegGIgmgIIgFAAIgEgBQgNAAgKAGQgTAJgXApQgPAjAAAtQABARACAOQADAgAOAZIAEAHQAIAOAJAJIAUgBQAhAAAXALQgNgDgSAAIgTABgAlNFqQgLADgLAEQgXAMAAAPQAAAQAXALQAYAMAiAAQAhAAAYgMQAXgLAAgQQAAgLgLgJIgMgHQgKgEgMgDIgFgBQAVgJAQgbIAEgIQANgYAEgfIACgNIAAgUQAAgtgPgiIgCgGQgCgIgEgIQgGgKgLgHQgIgHgIgEQgLgGgMAAIgDAAIgHABIgDABIgZAFIgKACQgMADgJAFQgMAHgLAaQgDALgLAWQgLAVACAYQABAYAAAYQgBAXAcAlQASAXAOAJIAFgBIADABgAlZg0IgKAGIgOAHQgFAFgCAGQgDAGADAHQACAGAHADQAHADAGgEIAGgDQADgDAJgEQAFgCAEgHQAGgHgBgHQAAgIgIgDQgEgCgEAAIgHABgADug3QgGAEgCAGQgBAIAIAIIAIAGIAHAGIAIAGQAGADAFABQAFABAEgBQAFgCADgEQADgDABgEQAAgFgCgEIgGgFIgGgFIgSgLQgFgFgMAAIgFAAgAGEifQBKBDArBOQgrhOhKhDIgJgHIAJAHgAgEk2IAFAAIEDBBIkDhBIgFAAIgKAAIABAAIAJAAIAAAAgAgOk2IgJgBIAJABgAgEk2IAAAAgAgNk2IgBAAIAKAAIgJAAg");
	this.shape_100.setTransform(202.05,289.475);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhRgJQA8AlBngig");
	this.shape_101.setTransform(201.85,340.1083);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(136,138,139,0.561)").ss(0.6,1,1).p("AgGgmIAAAAAgEgmQAIAAAIABQAJAAAIADQACgBACgBQADABACABQANACALAFQAHAEAGADQAMAJAAALQAAAQgZAMQgaAMgkAAQgjAAgagMQgZgMAAgQQAAgPAZgMQALgFANgCQAXgEAGAA");
	this.shape_102.setTransform(169.825,325.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.1,1,1).p("AD9AAQAAgQALgLQAKgLAOgBQASADAIAJQALALAAAQQAAAQgLALQgIAKgLACQgDAAgCAAIgCAAQgOAAgKgMQgKgKAAgOQgBgCAAgBgAlEAAQAAgLAGgKQANgPALgCIAHAAQAIAAAGAEQAGADAEAEQAEAFADAFQAEAIAAAJQAAARgLALQgKALgOABQgEAAgDgBQgCAAgEgBQgIgDgFgHQgEgEgCgFQgCgCgBgDQgCgHAAgHg");
	this.shape_103.setTransform(201.175,304.675);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAh2QA3AAAnAjQAnAjAAAwQAAArgdAfQgFAFgFAFQgnAjg3AAQg1AAgogjQgngjAAgxQAAgsAhghQAjgfAngI");
	this.shape_104.setTransform(158.125,345.625);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#F2F5F7").ss(1,1,1).p("Aljj2QgdgKgagUQg0gpAAg7QAAg6A0gqQA1gpBJAAQBKAAA0ApQA0AqAAA6QAAAhgQAbQAugGAwAAIACAAQALAAgBAAQhfhJAAhoQAAhoBfhJQBehKCHAAQCFAABgBKQBfBJAABoQAABohfBJQhGA1haAPQBDAhA8AxQAKgWAUgSQAngjA1AAQA2AAAmAjQAmAiAAAwQAAAwgmAiQggAegtAEQA6BnAAB9QAADfi5CcQi6CekFAAQiqAAiJhCAlrF2QgDABgDABQgPgKgTgYQgegmAAgYQABgZgCgYQgCgZAMgXQALgWAEgLQAMgbANgIQAJgFAOgDQAGgBAFgBQASgEAIgBQADgBABAAQADgBAEAAQACAAACAAQANAAAMAGQAJAEAHAHQALAKAIAOIABAAQADAFADAGQABACABAEQAQAjAAAvQAAAKAAAKQgBAHgBAGQgFAhgOAZQgCAEgCAEQgRAcgXAJAm3HsIgaACQglAGgeAbQgEACgCAEQh7iKAAi1QAAjdC6ieQA4gvBAgiQBrg3B+gPAGZisQAFAEAFADQBRBGAuBRAgalCQAGAAAFAAQAAAAgBAAAABlBQgHAAgJAAIAAgBQAJAAAHABIEZBDAFAGDQgZgLgjAAQgLAAgLABQgKgKgJgOQgCgEgCgEQgPgagEggQgCgQAAgRQAAgvAQgkQAYgqAUgKQAMgGAOAAQACAAABABQADAAAEABQAIABAhAHQAgAGALASQALASADATQACATAJA4QAIA4giArQgTAYgQAJQAGACAEACIAAAAQAIADAFAEQANAJAAAMQAAAQgaAMQgZAMglAAQgjAAgZgMIgBAAQgGgDgFgDIgIgGQgHgIAAgIQAAgQAagMQASgIAWgCQALgBAKAAQATAAAPADgAFSGHQgIgDgKgBAj5CFQAEAIADAJAj5CFQADAKgCgEAlIF0IgDAAQgRAAgPACAlGF0IgCAAAloF4QgBgBgCgBAkMBzQANAIAGAK");
	this.shape_105.setTransform(202.05,284.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF99FF").s().p("AD0AiIgBAAIgLgGIgIgGQgHgIAAgJQAAgPAagLQASgIAWgCIAVgBQATAAAPACQAKACAIADIAKAEIAAAAQAIADAFAEQANAJAAAKQAAARgaALQgZANglAAQgjAAgZgMgAluAWQgZgMAAgPQAAgQAZgMQAMgFAMgCIAdgFIADAAIAAAAIACAAIARACIAQADIAEgCIAGACQANACAKAFIANAHQANAJAAAMQAAAPgaAMQgZAMgkgBQglABgagMg");
	this.shape_106.setTransform(200.275,326.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AkmAnIgGgBQgIgDgFgHQgEgEgCgFIgDgFQgCgHAAgHQAAgLAGgKQANgPALgCIAHAAQAIAAAGAEQAGADAEAEIAHAKQAEAIAAAJQAAARgLALQgKALgOABIgHgBgAEgAnQgOAAgKgMQgKgKAAgOIgBgDQAAgQALgLQAKgLAOgBQASADAIAJQALALAAAQQAAAQgLALQgIAKgLACIgFAAg");
	this.shape_107.setTransform(201.175,304.675);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6633FF").s().p("AFSCOQgagLgjAAIgVABQgLgJgIgPIgEgHQgPgagEghQgDgPAAgSQAAgtARglQAYgpAUgKQAMgGANAAIAEAAIAHABIAoAIQAhAHAKASQAMASACATIALBJQAIA4ghArQgUAYgPAKQgJgDgJgCgAEQhGQgKALAAARIAAADQABAOAJAKQAKAMAOAAIACAAIAGAAQAKgCAJgKQAKgLAAgQQAAgRgKgLQgJgJgSgDQgOABgKALgAkkCAIgRgBIgCAAIAAAAIgCAAQgRAAgQADIgFABQgPgJgUgYQgegnABgYQAAgYgCgYQgBgZALgWQAMgXAEgLQALgbANgHQAKgGAOgCIAKgDIAbgFIADgBIAIgBIADAAQAOAAALAGQAJAEAIAIQAKAJAJAOIAAABIAAgBQgJgOgKgJQANAHAFAKQAEALgDgEIAGAKIACAGQARAkAAAuIgBATIgBAOQgFAggOAaIgEAIQgSAcgWAJIgEABIgRgDgAkehRQgLACgMAPQgGAKAAAMQAAAHACAHIACAFQACAFAEAEQAGAHAIADIAGABIAHABQAOgBAJgLQALgLAAgRQAAgKgEgIIgHgKQgEgEgFgDQgGgEgIAAg");
	this.shape_108.setTransform(200.3185,308.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#9E5DFF").s().p("AleAYQgHgDgDgGQgCgGACgHQADgGAGgEIAPgHIALgGQAIgEAHAEQAJAEAAAIQABAHgGAGQgFAHgFADQgJADgFADIgFAEQgEACgEAAQgDAAgEgCgAFUAYQgFgBgGgDIgJgHIgIgFIgIgHQgKgHACgJQACgGAGgEQARgBAIAGIATAMIAHAEIAFAFQADAEgBAFQAAAFgEADQgDAEgFABIgGABIgEAAg");
	this.shape_109.setTransform(197.3417,281.3304);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(202,158,223,0.898)").s().p("AlPKtQAeggAAgqQAAgygogiQgngkg2ABQA2gBAnAkQAoAiAAAyQAAAqgeAgIgKAKQgnAjg2AAQg2AAgogjQgngjAAgxQAAgtAhgiIAGgFQAegbAmgGIAagCIgaACQgmAGgeAbIgGAFQh7iJAAi1QAAjdC6ieQA4gvBAgiQgdgLgZgUQg1gpAAg6QAAg7A1gpQA0gpBKAAQBKAAAzApQA1ApAAA7QAAAggQAcQAtgGAwAAIACAAIALgBIAAABIgLAAIALAAIAAgBQhfhJgBhnQABhoBfhJQBehKCFAAQCGAABgBKQBfBJAABoQAABnhfBJQhGA2haAPQBEAhA7AxQAKgWAUgTQAngiA2AAQA1AAAnAiQAmAjgBAwQABAwgmAiQgiAdgtAEQgthRhRhFIgKgHIAKAHQBRBFAtBRQA7BoAAB9QAADfi5CcQi6CekFAAQipAAiKhCgABPIlIiigDQA9AmBlgjgAoaIUQAigeAogIQgoAIgiAegAEJGBQgWACgRAIQgaALAAAQQAAAJAGAIIAIAGIAMAGIAAAAQAZAMAjAAQAlAAAZgNQAagLAAgRQAAgLgNgJQgFgEgIgDIAAAAIgKgEQAQgKATgXQAigrgIg4IgLhLQgDgTgLgSQgLgSgggGIgogIIgIgBIgDgBQgNAAgMAGQgVAKgXApQgRAlAAAuQAAASACAPQAFAhAOAaIAFAHQAIAPAKAJIAWAAQAjgBAZALQgPgCgTAAIgVABgAloF4QgMACgLAFQgaAMAAAQQAAAQAaAMQAaAMAkgBQAkABAagMQAZgMAAgQQAAgMgMgJIgNgHQgLgFgNgCIgGgCQAXgJASgcIADgIQAOgaAFggIACgNIABgUQgBgvgQgkIgCgFQgCgKgFgHQgFgLgNgHQgIgHgJgEQgMgHgNAAIgDAAIgIABIgEABIgaAGIgLACQgOADgJAFQgNAIgMAbQgDALgMAWQgLAXABAZQACAYgBAYQAAAZAeAmQAUAYAOAKIAGgCIADACgAl1g2IgKAHIgQAHQgFAEgDAHQgDAGADAHQACAGAIADQAHADAIgDIAFgEQAEgDAJgEQAGgDAFgGQAGgHgBgIQAAgHgJgEQgEgCgEAAQgEAAgEABgAEBg5QgHADgBAHQgCAJAJAIIAJAGIAIAGIAJAHQAGADAFAAQAFABAFgBQAFgBADgEQAEgEAAgEQAAgGgCgDIgFgGIgHgEIgTgMQgHgFgNAAIgFAAgAljj2QBrg4B/gOQh/AOhrA4gAgOlCIAPABIEZBDIkZhDIgQgBgAgOlCIgBAAIAQABIgPgBgAgPlCIAAAAgAgPlDIAAAAg");
	this.shape_110.setTransform(202.05,284.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhXgKQBBAoBugkg");
	this.shape_111.setTransform(201.9,337.1151);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.1,1,1).p("AlcAAQAAgLAGgLQANgQAMgBIAIgBQAJABAGADQAHADAEAFQAEAFADAFQAEAJAAAJQAAARgLAMQgLALgPABQgFAAgCgBQgDAAgDgBQgJgDgGgHQgFgEgCgFQgBgCgCgDQgBgIAAgHgAEQAAQAAgQALgNQALgLAPAAQATACAKAJQALANAAAQQgBAQgKAMQgKAKgLACQgDAAgCAAIgDAAQgPAAgLgMQgKgKAAgPQgBgCAAgBg");
	this.shape_112.setTransform(201.15,300.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(121,123,124,0.502)").ss(0.5,1,1).p("AgEgoQAJAAAIABQAJABAJACQACgBACAAQADAAADABQAOADAMAFQAHAEAGADQAOAKAAALQAAARgbAMQgcAMgnAAQgmAAgcgMQgbgMAAgRQAAgQAbgMQANgFANgDQAZgDAGgBQABAAABAA");
	this.shape_113.setTransform(167.45,322.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAh7QA7AAApAlQArAkAAAyQAAAsggAhQgFAGgGAEQgpAkg7AAQg6AAgqgkQgqglAAgyQAAguAjgiQAlggArgI");
	this.shape_114.setTransform(154.85,342.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F2F5F7").ss(1,1,1).p("Al9j/QgggLgbgUQg4grAAg8QAAg9A4grQA4gqBPAAQBQAAA3AqQA5ArAAA9QAAAhgSAcQAygFAzAAIADAAQALAAgBgBQgGgEgGgFIhaioQAAgDAAgDQAAhrBmhNQBlhLCQAAQCQAABnBLQBmBNAABrQAABrhmBMQhLA4hhAPQBIAiBBAzQAKgYAWgSQAqgkA5AAQA6AAApAkQApAjAAAyQAAAygpAjQgjAfgxAEQA/BrAACBQAADnjHCiQjICjkYAAQi2AAiUhEAmGGDQgDABgDABQgQgKgVgZQgggoAAgYQABgagCgZQgCgaAMgXQANgYAEgLQAMgcAOgIQAKgFAPgDQAHgCAFgBQAUgEAIgBQADgBABAAQAEgBAEAAQACAAACAAQAOAAANAGQAJAEAIAIQAOAIAGAKQAFAJADAJQABADABADQASAlAAAwQAAALgBAKQgBAHgBAHQgFAhgPAbQgCAEgCAEQgTAdgYAJAnXH9IgcACQgpAHggAbQgEADgDADQiDiPAAi7QAAjlDHijQA9gxBFgjQByg5CIgQAG4iyQAFAEAFADQBYBIAwBUAAblLQgWgCgVAAQgGgFgHgFAkgB3QAMAKAJAPIAAAAAkMCJQAEALgDgEQADAFAEAGAAblLIESBDQABAAABABAFYGQQgbgLgmAAQgMAAgLABQgLgKgJgPQgDgEgCgEQgPgbgFghQgCgQAAgTQAAgwARglQAagsAWgKQANgGAOAAQACAAACABQADAAAEAAQAJACAjAHQAjAGALATQAMATADATQADAUAJA6QAIA6gjAsQgVAZgRAKQAGACAFACIAAAAQAHADAGAEQAOAJAAANQAAAQgbANQgcAMgnAAQgmAAgbgMQgHgDgFgDIgRgWQAAAAAAgBQAAgRAcgMQATgIAYgDQAMgBALAAQAUAAAQADgAgblNQAbAAAbACAFsGVQgJgDgLgCAleGBIgDAAAmCGFQgCgBgCgBAljGBQgTAAgQAC");
	this.shape_115.setTransform(202.075,279.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("Ak8AoIgGgBQgJgDgGgHQgFgEgCgFIgCgFIgCgPQAAgLAGgLQANgQAMgBIAIgBQAJABAHADQAFADAFAFQAFAFACAFQAFAJgBAJQAAARgLAMQgKALgQABIgHgBgAE1AoQgPAAgLgMQgKgKAAgPIgBgDQAAgQALgNQALgLAPAAQAUACAIAJQAMANAAAQQAAAQgMAMQgJAKgLACIgGAAg");
	this.shape_116.setTransform(201.15,300.475);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF99FF").s().p("AEGAjIgMgGIgRgWIAAgBQAAgQAcgLQATgJAYgDIAXgBQAUAAARAEQAKABAJADIALAEIAAABIAOAGQANAKAAALQAAARgbAMQgbAMgoAAQgmAAgbgMgAEFAjIgLgGIAMAGgAmJAXQgbgMAAgRQAAgRAbgMQAMgEAOgDIAfgEIACAAIADAAIASABIASADIAEgCIAGACQAOADALAEIAOAIQAOAKAAALQAAARgcAMQgcAMgmgBQgnABgcgMgAD6AdIAAAAg");
	this.shape_117.setTransform(200.15,322.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6633FF").s().p("AFrCTQgbgLgmAAIgXABQgLgKgKgPIgEgIQgQgbgFghQgCgQAAgTQAAgvASglQAagsAVgKQANgGAOAAIAEABIAIAAIArAJQAjAGALATQANATADATIALBNQAJA6gkAsQgVAZgRAKQgJgDgKgCgAElhJQgMAMAAARIABADQAAAPALALQAKALAPABIADAAIAFgBQAMgBAJgKQALgMAAgRQAAgRgLgMQgJgJgUgDQgPABgKALgAk6CFIgSgBIgCAAIgDAAQgSAAgRACIgGACQgQgKgVgZQgggoABgYQAAgagCgYQgCgaANgXQAMgYAEgLQANgcANgIQALgFAPgDIALgDIAdgFIADgBIAIgBIAEAAQAPAAAMAGQAKAEAIAIQAOAIAGAKQADALgCgEIAGALIADAGQARAlAAAwIAAAUIgCAOQgFAhgPAbIgFAIQgSAdgZAJIgEACIgSgDgAkzhUQgMACgNAQQgHAKAAANIACAOIADAFQACAFAEAFQAGAHAJADIAGABIAIABQAPgBAKgLQAMgMAAgRQAAgLgFgIQgCgGgFgEQgEgFgGgDQgHgEgIAAgAj5hsIABAAIgBAAQgJgPgLgKQALAKAJAPg");
	this.shape_118.setTransform(200.2183,304.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#9E5DFF").s().p("Al4AZQgIgDgDgHQgDgGADgHQADgGAGgFIAQgHIAMgHQAJgDAIAEQAJAEAAAIQABAHgGAHQgFAHgGADIgPAHIgGAEQgEACgDAAQgEAAgEgCgAFtAYQgFAAgHgEIgKgHIgIgGIgJgGQgKgIACgJQACgGAHgEQASgBAIAGQALAIAJAEIAIAFIAGAEQADAEgBAGQAAAFgEADQgEAEgFACIgHABIgEgBg");
	this.shape_119.setTransform(197.0292,276.3048);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(202,158,223,0.898)").s().p("AloLFQAgggAAgtQAAgzgrgkQgpgkg7AAQA7AAApAkQArAkAAAzQAAAtggAgIgLAKQgpAlg7AAQg7AAgqglQgqgkAAgzQAAgvAjgiIAHgGQAggbApgHIAcgCIgcACQgpAHggAbIgHAGQiDiPAAi7QAAjlDHijQA9gxBFgjQgggLgbgUQg4grAAg8QAAg9A4grQA4gqBPAAQBQAAA3AqQA5ArAAA9QAAAhgSAcQAygFAzAAIADAAIAKgBIgMgJIANAKIAqACIgqgCIgNgKIhaioIAAgGQAAhrBmhNQBlhLCQAAQCQAABnBLQBmBNAABrQAABrhmBMQhLA4hhAPQBIAiBBAzQAKgYAWgSQAqgkA5AAQA6AAApAkQApAjAAAyQAAAygpAjQgjAfgxAEQA/BrAACBQAADnjHCiQjICjkYAAQi2AAiUhEgABWI4IivgEQBBApBuglgApDInQAlggArgIQgrAIglAggAEdGOQgYADgTAIQgcAMAAARIAAABIARAVIALAHIABAAQAbAMAmAAQAnAAAcgMQAbgNAAgQQAAgNgOgJIgNgHIAAAAIgLgEQARgKAVgZQAjgsgIg6IgMhOQgDgTgMgTQgLgTgjgGIgsgJIgHAAIgEgBQgOAAgNAGQgWAKgaAsQgRAlAAAwQAAATACAQQAFAhAPAbIAFAIQAJAPALAKIAXgBQAmAAAbALQgQgDgUAAIgXABgAmCGFQgOACgMAFQgbAMAAARQAAARAbAMQAcAMAnAAQAmAAAcgMQAcgMAAgRQAAgMgOgJIgOgIQgMgFgNgCIgGgCQAYgJATgdIAEgIQAPgbAFghIACgOIABgVQAAgwgSglIgCgGQgDgJgFgJQgGgKgOgIQgIgIgJgEQgNgGgOAAIgEAAIgIABIgEABIgcAFIgMADQgPADgKAFQgOAIgMAcQgEALgNAYQgMAXACAaQACAZgBAaQAAAYAgAoQAVAZAQAKIAGgCIAEACgAmRg4IgLAHIgRAHQgGAFgCAHQgDAHADAGQACAHAIADQAIADAIgDIAGgEIAOgHQAGgDAFgHQAHgIgBgHQgBgIgJgEQgEgCgFAAIgIABgAEUg7QgHAEgBAGQgDAJALAJIAIAGIAJAGIAKAHQAGAEAFAAQAGABAFgBQAGgCADgEQAEgDABgFQAAgGgCgEIgHgFIgHgFQgJgEgLgIQgHgFgOAAIgGAAgAHCirQBYBIAwBUQgwhUhYhIIgKgHIAKAHgAl9j/QByg5CIgQQiIAQhyA5gAAalLIETBDIACABIgCgBIkThDIg1gCIA1ACg");
	this.shape_120.setTransform(202.075,279.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhdgKQBFApB2glg");
	this.shape_121.setTransform(201.925,334.0719);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(0.1,1,1).p("Al0AAQAAgMAHgLQANgQAOgBIAIgBQAJABAHADQAHADAEAFQAFAFADAGQAFAIAAAKQAAASgNAMQgLAMgQABQgFAAgDgBQgDAAgEgBQgJgDgGgIQgFgEgDgFQgBgDgBgDQgCgIAAgHgAEjAAQAAgRAMgMQALgMARgBQAVADAJAKQAMAMAAARQAAARgMAMQgJALgNABQgDABgDAAIgCAAQgRgBgLgMQgLgLgBgPQAAgCAAgBg");
	this.shape_122.setTransform(201.075,296.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAh/QA/AAAtAmQAtAlAAA0QAAAugiAhQgGAHgFAEQgtAmg/AAQg+AAgtgmQgtglAAg1QAAgwAmgjQAoghAtgI");
	this.shape_123.setTransform(151.55,340.05);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(106,107,108,0.439)").ss(0.5,1,1).p("AgEgpQAJAAAJABQAKABAJACQADgBABAAQAEAAADABQAPADAMAFQAIAEAHADQAPAKAAAMQAAARgeANQgeAMgpAAQgoAAgegMQgegNAAgRQAAgRAegMQANgFAOgDQAbgEAHAAAgHgpIAAAA");
	this.shape_124.setTransform(165.025,318.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F2F5F7").ss(1,1,1).p("AmYkIQgigLgdgVQg7gsAAg/QAAg+A7gsQA9gtBUAAQBVAAA7AtQA9AsAAA+QAAAjgTAdQA1gGA3AAIADAAQAJAAACAAIAAAAQgJgHgIgGIgqgpQgzg8AAhMQAAhvBuhOQBshPCaAAQCaAABuBPQBtBOAABvQAABvhtBPQhRA5hnAQQBNAjBGA1QALgYAXgUQAsgkA+AAQA9AAAtAkQAsAlAAAzQAAA0gsAkQgmAgg0AFQBEBuAACGQAADujVCoQjWCpksAAQjDAAiehHAn4IOIgeADQgsAHgiAcQgEADgDADQiNiUAAjBQAAjtDVipQBCgzBJgkQB6g7CSgQAmhGRQgEAAgDABQgRgKgWgaQgjgpABgZQAAgbgCgaQgCgbAOgYQANgYAEgMQANgdAPgIQALgFAQgDQAHgCAGgBQAVgEAJgCQACAAACAAQAEgBAEAAQADAAABAAQAQAAAOAGQAJAEAJAIQAMAKAKAQIAAAAAmdGSQgDgBgBAAAHXi4QAFAEAGADQBdBLA0BXAFwGeQgdgMgpAAQgMAAgMABQgMgKgKgQQgDgEgCgEQgQgcgFgiQgDgRAAgTQAAgyATgmQAcgtAXgKQAOgHAPAAQACAAACABQADAAAFAAQAJACAlAHQAmAHAMATQANAUADAUQADAUAKA8QAJA8gmAuQgXAagSAKQAHACAFACIAAAAQAIADAGAEQAPAKAAANQAAARgdANQgdAMgrAAQgoAAgdgMQgPgHgIgHIgIgPIAAgBQAAgSAegMQAUgIAagDQAMgCAMAAQAWAAARAEgAgDlYIADAAIE9BFQABAAABABQABAAABABQACAAABABAgDlYQgHAAgHAAIgBgBQAAAAAAAAQgJgGgIgHAgSlZQAIABAHAAAgdlZQAGAAAFAAAkfCOQAGAJACAJQABADACADQATAmAAAzQAAALAAAKQgCAHgBAHQgFAjgQAbQgCAFgDAEQgUAegaAKAkfCOQAEALgDgEQADAFAEAGAk0B7QAPAIAGALAGFGjQgJgEgMgBAl6GOIgCAAQgUAAgRADAl3GOIgDAA");
	this.shape_125.setTransform(202.075,274.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AlSAqIgHgBQgJgDgGgIQgFgEgDgFIgCgGQgCgIAAgHQAAgMAHgLQANgQAOgBIAIgBQAJABAHADQAHADAEAFQAFAFADAGQAFAIAAAKQAAASgNAMQgLAMgQABIgIgBgAFLAqQgRgBgLgMQgLgLgBgPIAAgDQAAgRAMgMQALgMARgBQAVADAJAKQAMAMAAARQAAARgMAMQgJALgNABIgGABg");
	this.shape_126.setTransform(201.075,296.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF99FF").s().p("AEZAkQgPgGgIgHIgIgQIAAgBQAAgQAegMQAUgIAagEIAYgBQAWAAARAEQALABAKADIALAFIABAAQAHADAHAEQAPAKAAALQAAARgdANQgeANgqAAQgpAAgcgNgAEYAkQgPgGgHgHQAIAHAPAGIgBAAgAmkAYQgdgNAAgQQAAgSAdgNQANgEAOgEIAigDIACAAIAAAAIADAAQAKgBAJACIAUACIADgBIAIABQAOAEANAEIAOAIQAPAKAAANQAAAQgdANQgeAMgqAAQgpAAgegMgAECAXIAAAAg");
	this.shape_127.setTransform(200,319.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6633FF").s().p("AGECYQgdgMgpAAIgYABQgMgJgKgRIgFgIQgQgcgFgiQgDgQAAgUQAAgwATgnQAcgtAXgKQAOgHAPAAIAEABIAIABIAuAIQAmAHAMAUQANATADAUIANBPQAJA8gmAuQgXAagSAKQgJgDgMgCgAE5hLQgMAMAAARIAAADQABAQALALQALAMARABIACAAIAGgBQANgBAJgLQAMgMAAgSQAAgRgMgMQgJgLgVgCQgRABgLAMgAlQCKQgJgCgKAAIgDAAIAAAAIgCAAQgUAAgRADIgHABQgRgJgWgaQgjgqABgZQAAgbgCgZQgCgaAOgZQANgYAEgMQANgdAPgHQALgGAQgDIANgCIAegHIAEAAIAIgBIAEAAQAQAAAOAGQAJAEAJAJQAMAKAKAPIAAAAIAAAAQgKgPgMgKQAPAHAGALQAEAMgDgFIAHALIADAHQATAlAAAzIAAAUIgDAOQgFAjgQAbIgFAJQgUAfgaAJIgEABIgUgCgAlIhWQgOABgNAQQgHALAAANQAAAHACAIIACAFQADAGAFAEQAGAHAJAEIAHABIAIABQAQgBALgMQANgNAAgRQAAgLgFgJQgDgFgFgFQgEgFgHgDQgHgDgJgCg");
	this.shape_128.setTransform(200.0983,300.85);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9E5DFF").s().p("AmSAaQgJgDgDgHQgDgHADgHQADgGAGgFIASgHIAMgHQAKgDAJAEQAJADAAAJQACAIgHAHQgGAHgGADQgLAEgEADIgHAEQgEACgFAAIgHgCgAGGAZQgFAAgHgEIgLgHIgJgGIgJgHQgLgHACgKQACgHAIgDQATgBAJAGQAMAIAJAEIAIAFQAFADACACQADAEgBAGQAAAFgEADQgEAEgGACIgGABIgGgBg");
	this.shape_129.setTransform(196.6792,271.2371);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(202,158,223,0.898)").s().p("AmBLdQAighAAguQAAg1guglQgsgmg/AAQA/AAAsAmQAuAlAAA1QAAAugiAhIgMALQgsAlg/AAQg/AAgtglQgtgmAAg0QAAgxAmgjIAHgGQAigcAsgHIAegDIgeADQgsAHgiAcIgHAGQiNiUAAjBQAAjtDVipQBCgzBJgkQgigLgdgVQg7gsAAg/QAAg+A7gsQA9gtBUAAQBVAAA7AtQA9AsAAA+QAAAjgTAdQA1gGA3AAIADAAIAKAAIABAAIgRgNIgqgpQgzg8AAhMQAAhvBuhOQBshPCaAAQCaAABuBPQBtBOAABvQAABvhtBPQhRA5hnAQQBNAjBGA1QALgYAXgUQAsgkA+AAQA9AAAtAkQAsAlAAAzQAAA0gsAkQgmAgg0AFQg0hXhdhLIgLgHIALAHQBdBLA0BXQBEBuAACGQAADujVCoQjWCpksAAQjDAAiehHgABdJLIi8gEQBFAqB3gmgAprI6QAnghAugIQguAIgnAhgAExGcQgaADgUAIQgeAMAAASIAAABIAIAPQAHAHAPAHIABAAQAdAMAoAAQArAAAdgMQAdgNAAgRQAAgNgPgKQgGgEgIgDIAAAAIgMgEQASgKAXgaQAmgugJg8IgNhQQgDgUgNgUQgMgTgmgHIgugJIgIAAIgEgBQgPAAgOAHQgXAKgcAtQgTAmAAAyQAAATADARQAFAiAQAcIAFAIQAKAQAMAKIAYgBQApAAAdAMQgRgEgWAAIgYACgAmdGSQgPADgNAFQgdAMAAASQAAARAdANQAeAMApAAQAqAAAegMQAdgNAAgRQAAgNgPgKIgOgHQgNgFgOgDIgHgBQAagKAUgeIAFgJQAQgbAFgjIADgOIAAgVQAAgzgTgmIgDgGQgCgJgGgJQgGgLgPgIQgJgIgJgEQgOgGgQAAIgEAAIgIABIgEAAIgeAGIgNADQgQADgLAFQgPAIgNAdQgEAMgNAYQgOAYACAbQACAaAAAbQgBAZAjApQAWAaARAKIAHgBIAEABgAmtg5IgMAGIgSAIQgGAFgDAHQgDAHADAHQADAHAJADQAIADAIgEIAHgEQAEgDALgEQAGgDAGgHQAHgIgCgHQAAgJgJgEQgFgCgFAAQgEAAgFACgAEog9QgIAEgCAGQgCAKALAJIAJAHIAJAFIALAIQAHADAFABQAHABAFgBQAGgCAEgEQAEgEAAgFQABgGgDgEQgCgDgFgCIgIgFQgJgFgMgIQgIgFgPAAIgFAAgAmYkIQB6g7CSgQQiSAQh6A7gAgRlYIAOAAIADAAIE9BFIACABIACABIADABIgDgBIgCgBIgCgBIk9hFIgDAAIgPAAIAPAAIgOAAIgBAAgAgSlYIgBgBIABABIgLgBIALABIAAAAgAgSlYIAAAAg");
	this.shape_130.setTransform(202.075,274.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhkgLQBKAsB/gng");
	this.shape_131.setTransform(201.925,331.0717);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAiDQBDAAAvAnQAxAnAAA1QAAAvgkAjQgGAGgHAFQgvAnhDAAQhCAAgwgnQgwgnAAg2QAAgxAoglQArgiAvgI");
	this.shape_132.setTransform(148.3,337.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(91,92,93,0.376)").ss(0.4,1,1).p("AgFgrQAKAAAKABQAKABAKACQADAAACgBQAEABADAAQAPADAOAFQAIAFAHADQAQAKAAANQAAARgfANQggANgsAAQgrAAgggNQgfgNAAgRQAAgSAfgNQAOgFAPgDQAdgDAHgBAgIgrIAAAA");
	this.shape_133.setTransform(162.625,315.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(0.1,1,1).p("AmNAAQAAgMAIgLQAOgRAPgCIAIgBQAKABAIAEQAHADAFAFQAFAFADAHQAFAIAAAKQAAATgNAMQgMANgSAAQgFAAgDAAQgDgBgEgBQgKgDgGgIQgFgEgEgGQgBgCgCgDQgCgJAAgHgAE2AAQAAgSANgMQAMgNASAAQAVADALAKQANAMAAASQAAASgNAMQgLALgMACQgEABgDAAIgCAAQgSgBgMgNQgMgLAAgQQgBgCAAgBg");
	this.shape_134.setTransform(201,292);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#F2F5F7").ss(1,1,1).p("AghlvIgjgeQhEhEAAhYQAAhyB1hRQBzhSCkAAQCkAAB1BSQB0BRAAByQAAB0h0BQQhWA8huAQQBTAkBJA2QAMgZAZgTQAvgmBCAAQBBAAAvAmQAvAmAAA0QAAA2gvAmQgoAgg3AFQBIBzAACJQAAD3jjCtQjkCvk/AAQjQAAiohJAmykQQglgMgegWQhAguAAhAQAAhBBAguQBAgtBaAAQBbAAA+AtQBBAuAABBQAAAkgUAdQA4gFA7AAIADAAQALAAABgBQgHgFgHgFAm8GeQgEAAgEABQgSgKgXgbQglgqAAgbQABgbgCgbQgCgbAOgZQAOgZAEgMQAPgfAPgIQAMgGARgCQAIgCAFgBQAXgFAKgBQACgBACAAQAEAAAFgBQACAAACAAQARAAAOAGQALAFAJAIQAQAIAHALQAFAKADAKQABADACADQAUAnAAA0QAAALAAAKQgCAJAAAGQgGAlgSAcQgCAFgDAEQgVAfgcAKAoZIgIggACQguAHglAdQgEADgDAEQiWiZAAjIQAAj0DjiuQBFg1BPglQCCg9CbgSAmTGbIgCAAQgVAAgSADAm4GfQgDgBgBAAAH1i/QAGAEAGAFQBkBMA3BaAGIGsQgfgNgrAAQgNAAgNABQgNgKgLgRQgCgDgCgFQgSgcgGgkQgCgSAAgSQAAg0AUgoQAdguAZgLQAPgHAQAAQACAAACABQAEAAAFAAQAJACAoAHQAoAIANAUQAOAUADAVQADAUALA+QAJA+goAvQgYAbgTALQAGABAFADIABAAQAJADAGAEQAQAKAAAOQAAASgfANQgfAMgtAAQgrAAgfgMQgRgHgIgIIgIgQQAAgTAggMQAVgJAcgDQANgBANAAQAXAAASAEgAAeliIE5BIQABAAABABAgTllIAAAAQgHgFgHgFAAeliQgYgCgYAAQgBAAAAgBAlIB/QANALAKAQIAAAAAkxCSQAEAMgEgEQAEAFAEAHAgflkQAfAAAeACAGfGxQgLgEgMgBAmPGbIgDAA");
	this.shape_135.setTransform(202.075,269.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF99FF").s().p("AErAlQgRgGgIgIQAIAIARAGIgBAAQgQgGgIgIIgIgQQAAgSAggMQAVgJAcgDIAagBQAXAAASADQAcAHAHADIAAAAQAJADAGAEQAQAKAAANQAAARgfANQgfANgtAAQgrAAgfgNgAnAAYQgfgNAAgRQAAgSAfgNQAOgFAQgDIAjgEIACAAIABAAIADAAIAUABIAVADIAEgBIAIABQAPADANAFIAQAIQAQAKAAANQAAARggANQgfANgtAAQgsAAgggNgAmmguQASgDAVAAIgjAEIgEgBgAl/gxIAAAAg");
	this.shape_136.setTransform(199.875,315.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AlnAsIgIgCQgKgDgHgIQgFgEgDgGIgCgFQgCgJAAgHQgBgMAIgMQAOgQAPgCIAJgBQAJACAIADQAHADAFAGQAFAEADAHQAFAIAAAKQAAASgNANQgMAMgRABIgIAAgAFhAsQgSgBgMgNQgMgLgBgQIAAgDQAAgRANgOQAMgLASgBQAWADAKAJQANAOAAARQAAARgNANQgLALgNACIgGABg");
	this.shape_137.setTransform(201,292);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6633FF").s().p("AGdCdQgfgMgrAAIgaABQgNgKgLgRIgEgIQgSgdgGgjQgCgSAAgTQAAgzAUgoQAdguAZgKQAPgHAQAAIAEAAIAJABIAxAJQAoAHANAUQAOAUADAVIAOBSQAJA9goAwQgYAbgTAKQgLgDgMgCgAFNhOQgNANAAASIABADQAAAQAMALQAMANASABIACAAIAHgBQANgCAKgLQANgMAAgSQAAgSgNgNQgKgKgWgDQgSABgMAMgAlmCOIgUgBIgDAAIgBAAIgCAAQgVAAgSADIgIABQgSgKgXgbQglgrAAgaQABgbgCgaQgCgcAOgZQAOgZAEgMQAPgeAPgIQAMgGARgDIANgDIAhgFIAEgBIAJgBIAEAAQARAAAOAGQALAFAJAIQANAKAKAQIAAABIAIALIADAHQAUAnAAA0IAAAUIgCAPQgGAkgSAdIgFAIQgVAggcAKIgEABIgVgDgAlehZQgOABgPARQgHALAAANQAAAHACAJIADAGQADAFAFAFQAGAHAKADIAIACIAIAAQARAAAMgMQANgNAAgTQAAgLgFgIQgDgGgFgFQgFgFgHgEQgHgDgKgBg");
	this.shape_138.setTransform(199.9777,296.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#9E5DFF").s().p("AmtAbQgJgDgDgHQgDgHADgIQADgGAHgFIATgIIANgHQAKgDAJAEQALAEAAAJQABAIgHAHQgGAHgHADIgQAHQgEAEgDABQgFACgEAAIgJgCgAGfAaQgFAAgHgEIgMgIIgKgGIgJgHQgMgIACgKQACgHAIgDQAVgBAKAGQAMAIAKAFQAIAEABABQAFADACACQADAEgBAGQAAAFgEAEQgEAEgHACIgHABIgGgBg");
	this.shape_139.setTransform(196.3292,266.1871);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(202,158,223,0.898)").s().p("AmaL2QAkgkAAgvQAAg2gwgnQgwgnhDAAIggADQguAHglAdIgHAGIAHgGQAlgdAugHIAggDQBDAAAwAnQAwAnAAA2QAAAvgkAkIgMAKQgwAnhDAAQhCAAgxgnQgwgnAAg2QAAgxApgmQiWiYAAjIQAAj0DjivQBFg0BPgmQglgLgegVQhAgvAAhAQAAhABAgvQBAgtBaAAQBbAAA+AtQBBAvAABAQAAAkgUAeQibARiCA8QCCg8CbgRQA4gGA7AAIAEAAIALgBIABABIAwACIg8gCIA8ACIgwgCIgBgBIAAAAIgNgJIgjgeQhFhFAAhYQAAhyB1hSQBzhRCkAAQCkAAB1BRQB0BSAAByQAABzh0BRQhWA8huAQIgCgBIk5hIIE5BIIACABQBTAkBJA2IAMAIQBkBNA3BaQg3hahkhNIgMgIQAMgYAZgUQAvgmBCAAQBBAAAvAmQAvAmAAA0QAAA2gvAmQgoAgg3AFQBIBzAACJQAAD2jjCuQjkCvk/gBQjQAAiohIgABjJeIjIgEQBKAsB+gogAqTJMQAqghAwgJQgwAJgqAhgAFFGpQgcADgVAJQggAMAAATIAIAQQAIAIAQAGIABAAQAfANArAAQAtAAAfgNQAfgNAAgRQAAgOgQgKQgGgEgJgDIAAAAIgMgEQATgLAYgbQAogvgJg+IgOhTQgDgUgOgUQgNgVgogHIgxgIIgJgBIgEgBQgQAAgPAHQgZAKgdAvQgUAoAAA0QAAASACASQAGAkASAcIAEAIQALARANAKIAagBQArAAAfAMQgSgDgXAAIgaABgAm4GfQgQADgOAFQgfANAAASQAAASAfANQAgANAsAAQAtAAAfgNQAggNAAgSQAAgNgQgKIgQgIQgNgFgPgDIgIgBQAcgKAVggIAFgIQASgcAGglIACgPIAAgVQAAg0gUgnIgDgHQgDgJgFgKQgHgLgQgIQgJgIgLgFQgOgGgRAAIgEAAIgJABIgEABIghAGIgNADQgRADgMAFQgPAIgPAeQgEAMgOAZQgOAZACAcQACAbgBAbQAAAaAlArQAXAbASAKIAIgBIAEABgAnIg8IgOAIIgSAIQgIAEgCAHQgDAIADAHQACAHAKAEQAJACAIgDQADgBAEgEIARgHQAHgDAGgHQAHgIgCgIQAAgJgKgEQgFgCgFAAQgFAAgEABgAE7g/QgIADgCAIQgDAJAMAKIAKAHIAJAFIAMAIQAIAEAFABQAHABAGgCQAGgBAEgFQAEgEABgFQAAgFgCgFQgDgDgFgDQAAgBgIgEQgKgFgNgIQgIgFgQAAIgGAAg");
	this.shape_140.setTransform(202.075,269.75);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhqgLQBPAtCGgpg");
	this.shape_141.setTransform(201.95,328.0716);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AgBiHQABAAAAAAQBIAAAyAoQAzAoAAA3QAAAxgmAkQgHAGgGAFQgyAohIAAQhGAAgzgoQgzgoAAg4QAAgyAsgmQArgjAygJ");
	this.shape_142.setTransform(145,334.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(76,77,77,0.314)").ss(0.3,1,1).p("AgFgsQAKAAALACQALAAAKACQADAAACgBQAEABAEAAQAQADAOAFQAJAFAIAEQARALAAAMQAAATgiANQghANgvAAQguAAgigNQghgNAAgTQAAgSAhgOQAPgFAQgDQAegDAIgBQABAAACAA");
	this.shape_143.setTransform(160.225,311.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(0.1,1,1).p("AmlAAQAAgMAIgMQAQgRAPgCIAJgBQALABAIAEQAHADAFAFQAFAGAEAGQAFAJAAAKQAAATgOANQgMANgTAAQgGAAgDAAQgDgBgEgBQgLgDgHgIQgFgEgDgGQgCgCgBgEQgDgJAAgHgAFJAAQAAgSAOgNQANgNASAAQAYACALALQANANAAASQAAASgNANQgLALgOACQgEABgDAAIgDAAQgSgBgNgNQgNgLAAgRQgBgCAAgBg");
	this.shape_144.setTransform(200.95,287.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#F2F5F7").ss(1,1,1).p("Agnl9IgugqQg7hBAAhTQAAh1B8hUQB6hUCuAAQCuAAB8BUQB8BUAAB1QAAB3h8BUQhbA9h1ARQBYAlBOA4QANgZAagVQAygnBGAAQBFAAAyAnQAyAnAAA2QAAA4gyAnQgrAhg6AFAo8IxIghADQgxAHglAeQgFADgDAEQigieAAjOQAAj8Dxi1QBKg2BTgmQgmgMghgXQhDgvAAhCQAAhDBDgvQBEgvBfAAQBhAABCAvQBFAvAABDQAAAlgVAeQA8gGA+AAIAEAAQAKAAACAAQgKgGgJgHAnYGrQgEABgDAAQgTgKgagbQgngtABgbQABgcgDgcQgCgcAPgaQAPgaAFgMQAPggARgIQAMgFASgDQAIgCAGgCQAYgEALgCQACAAACAAQAFgBAFgBQACAAACAAQASAAAPAHQALAFAKAIQAOALALAQIAAABQAEAFAEAHAmtGoQgXAAgUADAmoGoIgDAAAnTGsQgDAAgCgBAIUjFQAGAEAHAEQBpBQA7BcQBMB2AACPQAAD+jwCzQjyC0lTAAQjdAAiyhLAGgG5QghgNguAAQgOAAgNABQgOgKgLgRQgDgEgCgEQgTgegGglQgDgSAAgUQAAg1AWgqQAfgvAagLQAQgHARAAQACAAADAAQADAAAFACQALACAqAGQAqAIAOAVQAPAUADAWQAEAVALBAQAKBAgrAxQgaAcgUAKQAHACAGADIAAAAQAJADAHAEQARALAAAOQAAASghANQghAOgwAAQguAAgggOQgRgGgIgHIgKgRIAAgBQAAgUAigMQAXgJAdgDQAOgBANAAQAYAAAUADgAgHlvIAEAAIFqBKQABAAABABQABAAACABQABAAABABAgUlwIAAAAQgKgGgJgHAgTlvQAGAAAGAAQgGAAgGAAIAAAAQgBgBAAAAAgglwQAGABAHAAAlECXQAFANgEgFAlECXQAGAKADAKQABADACAEQAVAoAAA1QAAAMAAALQgCAIAAAHQgGAlgTAeQgCAFgDADQgXAhgdAKAlcCDQARAIAHAMAG4G+QgLgDgNgCAnNkZQCKg/ClgS");
	this.shape_145.setTransform(202.075,264.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF99FF").s().p("AE9AnQgQgHgJgHQAJAHAQAHIgBAAQgQgHgIgHIgKgQIAAgCQAAgSAigNQAXgJAegDQANgBAOAAQAXAAAVADQANACAKAEIANAEIAAAAIARAIQAQAKAAANQAAASghAOQghANgvAAQgvAAgggNgAnbAZQghgNAAgSQAAgTAhgNQAPgFAQgDIAmgFIADAAIACAAQAMAAALACIAVADIAFgCIAIACQAQADAOAFIARAIQARALAAANQAAASgiANQgiANgvAAQguAAgigNg");
	this.shape_146.setTransform(199.75,312.375);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("Al+AtIgHgCQgLgDgHgIQgGgEgCgGIgDgGQgDgJAAgHQAAgMAIgMQAQgRAPgCIAJgBQAKABAJAEQAGADAFAFQAHAGACAGQAGAJAAAKQAAATgPANQgLANgTAAIgJAAgAF2AtQgTgBgNgNQgMgLAAgRIgBgDQAAgSANgNQANgNATAAQAYACALALQANANAAASQAAASgNANQgLALgOACIgIABg");
	this.shape_147.setTransform(200.95,287.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6633FF").s().p("AG2CiQghgNguAAIgbABQgOgKgLgRIgFgIQgTgegGglQgDgSAAgTQAAg1AWgqQAfgvAagLQAQgHARAAIAFAAIAIABIA1AJQAqAIAOAVQAPAUADAWIAPBUQAKBAgrAxQgaAcgUAKQgLgDgNgCgAFhhQQgNANAAASIAAAEQABAQAMAMQANANATAAIACAAIAHAAQAOgCALgLQANgNABgTQAAgSgOgNQgLgLgXgDQgTABgNANgAl8CTQgKgCgMAAIgDAAIgCAAQgXAAgUADIgHABQgTgKgagcQgngrABgcQABgcgDgbQgCgcAPgaQAPgZAFgNQAPgfARgJQAMgFASgEIAOgCIAjgHIAEgBIAKgBIAEAAQASABAPAGQALAFAKAIQAOALALAQIAAABIAAgBQgLgQgOgLQARAJAHAMQAFAMgEgFIAIAMIADAGQAVApAAA2IAAAVIgCAPQgGAmgTAcIgFAJQgXAhgdAKIgFABIgWgCgAl0hdQgPACgPARQgIAMAAAOQAAAHACAJIADAGQADAGAGAEQAHAIAKADIAIABIAJABQASAAAMgNQAPgNAAgTQAAgLgGgJQgDgGgGgGQgFgFgHgDQgIgFgKAAg");
	this.shape_148.setTransform(199.8576,292.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#9E5DFF").s().p("AnHAcQgKgDgDgIQgDgHADgIQADgGAIgFIAUgIQAJgGAFgBQAKgEAKAEQALAEAAAJQACAJgIAHQgGAHgHAEQgMAEgGADIgHAFQgFABgEAAQgFAAgFgBgAG5AbQgGAAgIgEIgMgIIgKgGIgLgIQgMgIADgKQACgHAIgEQAWgBAKAGQAOAJAKAEIAJAGIAIAFQADAEgBAGQAAAGgFADQgEAFgGACIgIABIgGgBg");
	this.shape_149.setTransform(195.975,261.1308);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(202,158,223,0.898)").s().p("AmzMOQAmgkAAgxQAAg4gzgoQgygohIAAIgCAAIghADQgxAHglAeIgIAGIAIgGQAlgeAxgHIAhgDIACAAQBIAAAyAoQAzAoAAA4QAAAxgmAkIgNALQgyAohIAAQhGAAgzgoQg0goAAg4QAAgzAsgnQigidAAjOQAAj8Dxi0QBKg2BTgnQgmgMghgWQhDgwAAhCQAAhDBDgvQBEgvBfAAQBhAABCAvQBFAvAABDQAAAlgVAeQilASiKA/QCKg/ClgSQA8gFA+AAIAEAAIAMgBIAAAAIgTgNIgugqQg7hBAAhTQAAh1B8hUQB6hUCuAAQCuAAB8BUQB8BUAAB1QAAB4h8BTQhbA9h1ARIgCgBIgDgBIgDgBIlphKIgEAAIAEAAIFpBKIADABIADABIACABQBYAmBOA4QANgaAagUQAygoBGAAQBFAAAyAoQAyAnAAA1QAAA4gyAnQgrAhg6AGQg7hdhphPIgNgIIANAIQBpBPA7BdQBMB2AACOQAAD+jwCzQjyC0lTAAQjdAAiyhLgABqJxIjVgEQBOAuCHgqgAq7JfQAsgiAygJQgyAJgsAigAFZG3QgdADgXAJQgiANAAASIAAADIAKAPQAIAIAQAHIABAAQAgAMAuAAQAwAAAhgMQAhgOAAgTQAAgNgRgKIgQgIIAAAAIgNgFQAUgKAagcQArgxgKhAIgPhVQgDgWgPgUQgOgVgqgIIg1gJIgIgBIgFAAQgRAAgQAHQgaALgfAvQgWAqAAA2QAAATADASQAGAlATAeIAFAIQALARAOAKIAbgBQAuAAAhANQgUgEgYAAQgNAAgOACgAnTGsQgQAEgPAEQghAOAAATQAAASAhANQAiAOAuAAQAvAAAigOQAhgNAAgSQAAgOgRgKIgQgJQgOgEgRgEIgHgBQAdgKAXghIAFgJQATgcAGgmIACgPIAAgWQAAg2gVgpIgDgGQgDgLgGgIQgHgMgRgJQgKgIgLgFQgPgGgSgBIgEAAIgKABIgEABIgjAGIgOADQgSAEgMAFQgRAJgPAfQgFANgPAZQgPAaACAcQADAcgBAcQgBAcAnArQAaAcATAKIAHgBIAFABgAnkg9QgFABgJAGIgUAIQgIAFgDAIQgDAHADAIQADAHAKADQAKADAJgDIAHgFQAGgDAMgEQAHgEAGgHQAIgIgCgJQAAgIgLgEQgFgDgFAAQgFAAgFACgAFOhBQgIAEgCAHQgDAKAMAKIALAHIAKAGIAMAIQAIAEAGABQAHAAAHgBQAGgCAEgEQAFgEAAgFQABgGgDgFIgIgGIgJgGQgKgEgOgJQgIgFgSAAIgGAAgAgUlvIABAAIAMAAIgNAAIANAAIgMAAIgBAAIAAgBIAAABgAgUlvIgMAAIAMAAg");
	this.shape_150.setTransform(202.075,264.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhwgMQBTAwCOgrg");
	this.shape_151.setTransform(201.975,325.0784);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAiLQBMAAA0ApQA3ApAAA5QAAAygoAlQgHAHgIAFQg0AphMAAQhJAAg3gpQg2gpAAg6QAAg0AtgnQAwgkA2gK");
	this.shape_152.setTransform(141.75,331.725);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(61,61,62,0.251)").ss(0.3,1,1).p("AgGgtQAMAAALABQALABAMACQADgBACgBQAEABAEABQARADAPAFQAKAFAIAEQARALAAANQAAATgjAOQgjANgyAAQgwAAgkgNQgjgOAAgTQAAgSAjgPQAPgFASgDQAfgEAJAAAgJgtIAAAA");
	this.shape_153.setTransform(157.825,308.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(0.1,1,1).p("Am9AAQAAgNAIgMQAQgSAQgCIAKgBQALABAJAEQAIAEAFAFQAGAGAEAGQAFAJAAALQAAATgPAOQgNANgUABQgGAAgDgBQgDAAgFgCQgMgDgHgIQgGgFgDgFQgCgCgBgEQgCgJAAgIgAFcAAQAAgSAPgPQANgNATAAQAZADAMAKQAOAPAAASQAAATgOANQgMAMgPACQgDAAgEAAIgDAAQgTAAgNgOQgOgLgBgSQAAgCAAgBg");
	this.shape_154.setTransform(200.9,283.55);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#F2F5F7").ss(1,1,1).p("AgWl8QiChWAAh6QAAh6CChWQCChWC4AAQC4AACEBWQCCBWAAB6QAAB6iCBWQhhBAh7ARQBcAnBTA6QANgbAcgVQA1gpBJAAQBKAAA1ApQA0AoAAA4QAAA5g0AoQgtAjg/AFQBRB6AACTQAAEGj+C4QkAC6lmAAQjqAAi8hOApbJCIgkADQg0AHgpAfQgEAEgEADQioiiAAjUQAAkFD/i5QBNg4BZgoQgpgMgjgXQhHgxAAhFQAAhEBHgxQBIgxBlAAQBmAABHAxQBIAxAABEQAAAngWAfQA/gGBCAAIAEAAQANAAgBgBAnzG4QgEABgEABQgVgLgagdQgqgtACgcQAAgdgDgdQgBgdAPgaQAQgbAFgNQAQggASgJQAMgGAUgDQAJgCAGgBQAZgEAMgCQACgBACAAQAEgBAGAAQADAAACAAQASAAARAHQAMAFAKAIQAPAMALAQIAAAAQAEAGAFAHAnAG1IgEAAAnEG1IgCAAQgYAAgVADAnuG6QgDgBgCgBAIzjKQAGAEAHAEQBwBRA9BgAG5HHQgjgNgxAAQgPAAgOABQgPgLgMgRQgDgFgCgEQgUgfgGgmQgDgSAAgVQAAg3AWgqQAigxAbgMQARgHASAAQADAAACABQADAAAGABQALABAtAIQAtAIAOAVQAQAVAEAWQADAWAMBCQALBCguAyQgbAdgVALQAHACAFACIABABQAKADAHAFQASAKAAAOQAAATgjAOQgiAOg0AAQgwAAgigNQgBgBAAAAQgEgBgDgCIgHgDQgWgMAAgPQAAgTAkgNQAXgJAggEQAOgBAOAAQAaAAAWAEgAAil5IFfBMQABABACABAAil5QgbgCgcAAQAAAAgBgBAlWCcQAEAMgEgFAlWCcQAFAJAEALQABADACAEQAXAqAAA3QAAAMAAALQgCAIgCAIQgGAmgUAeQgCAFgDAFQgYAhgfAKAlwCHQARAJAJAMAgil7QAiAAAiACAHSHMQgMgEgNgBAnnkiQCRhBCvgS");
	this.shape_155.setTransform(202.1,259.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF99FF").s().p("AFPAoIgBAAIgHgDIgGgDQgXgMAAgPQABgTAjgNQAYgJAfgDIAdgBQAZAAAWADQANACAMAEIANAEIABAAQAKAEAHAEQASALAAANQgBATgiAOQgjANgzAAQgxAAgigNgAn2AaQgkgOABgSQgBgTAkgOQAPgGASgDIAngEIADAAIAAAAIADAAQAMAAALABIAYADIAEgBIAIABQARADAQAGIASAIQARALAAAOQAAASgjAOQgkAOgyAAQgwAAgkgOg");
	this.shape_156.setTransform(199.65,308.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AmUAuIgIgCQgMgDgGgHQgHgFgCgGIgEgGQgCgJAAgIQAAgNAIgMQAQgSARgCIAKAAQALAAAIAEQAHAEAGAFQAGAGADAGQAGAKAAAKQAAAUgPAOQgNAMgTABIgKgBgAGMAuQgUAAgOgOQgNgMgBgRIAAgDQAAgSAOgPQAOgNAUAAQAZADALAKQAOAPAAASQAAATgOANQgMAMgOABIgIABg");
	this.shape_157.setTransform(200.9,283.55);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6633FF").s().p("AHQCnQgjgNgxAAIgdABQgOgLgMgRIgFgJQgVgegGgmQgDgTAAgUQAAg2AXgrQAhgxAcgLQAQgIATAAIAFABIAJABIA3AJQAtAIAPAVQAQAWADAWIAPBXQALBBguAzQgbAcgVAMQgLgEgOgCgAF2hTQgOAOAAATIAAADQABASANALQAOAOATAAIADAAIAHAAQAPgCAMgMQAOgNAAgTQAAgTgOgOQgMgLgZgDQgTABgOANgAmRCXQgLgBgNAAIgDAAIAAAAIgCAAQgZAAgUADIgIABQgVgLgagcQgqguABgbQABgdgDgcQgCgdAQgbQAQgaAFgNQAQghARgIQANgGAUgDIAPgDIAkgGIAFgBIAKgCIAFAAQASAAARAHQALAFALAJQAOALAMARIAAAAIAAAAQgMgRgOgLQARAIAIAMQAEANgDgFIAJANIADAGQAWAqAAA3IAAAWIgDAQQgGAmgUAfIgFAJQgYAhgfALIgFABIgXgDgAmJhfQgQACgQARQgIAMAAAOQAAAIACAJIADAGQADAGAGAFQAHAIAMADIAIABIAJABQAUgBANgMQAPgOAAgUQAAgLgGgKQgDgGgGgFQgGgGgHgDQgJgEgLgBg");
	this.shape_158.setTransform(199.745,288.625);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#9E5DFF").s().p("AnhAdQgLgDgDgIQgDgIADgIQADgGAJgFIAVgJQAJgGAFgBQALgEALAEQAMAEAAAKQACAJgJAHQgGAIgIADQgNAEgFAEIgIAFQgFABgFAAQgFAAgFgBgAHSAcQgGgBgIgEIgNgIIgLgGIgLgHQgNgJADgLQACgHAJgEQAXgBALAGQAOAJAMAFIAJAGIAIAFQADAEAAAHQgBAFgFAEQgEAFgHACIgHAAIgIAAg");
	this.shape_159.setTransform(195.6411,256.0808);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(202,158,223,0.898)").s().p("AnMMmQAogmAAgyQAAg6g2gpQg1gphMAAQBMAAA1ApQA2ApAAA6QAAAygoAmIgOALQg1AqhMAAQhKAAg2gqQg2gpAAg6QAAg1AtgnIAJgHQAogfA0gHIAkgDIgkADQg0AHgoAfIgJAHQioiiAAjVQAAkFD+i4QBOg5BZgnQgqgMgigXQhHgxAAhFQAAhFBHgwQBJgxBkAAQBmAABHAxQBIAwAABFQAAAngWAfQA/gGBCAAIAEAAQANAAgBgBIACABQAbAAAbACQgbgCgbAAIgCgBQiDhWABh6QgBh6CDhWQCChXC4AAQC4AACEBXQCBBWABB6QgBB6iBBWQhhBAh8ARIgCgCIlfhMIFfBMIACACQBdAmBTA7IANAIQBvBRA+BfQg+hfhvhRIgNgIQANgbAbgWQA2goBJAAQBKAAA0AoQA1ApAAA3QAAA6g1AoQgtAjg+AEQBRB6AACTQAAEHj+C4QkAC6lmgBQjqABi8hOgABwKEIjigFQBTAxCPgsgArkJyQAwgkA1gJQg1AJgwAkgAFtHEQgfADgZAKQgjANAAATQAAAPAWAMIAHADIAHADIABAAQAiAOAxAAQAzAAAigOQAjgOAAgTQAAgOgSgKQgHgFgKgDIgBgBIgMgEQAUgLAbgdQAvgzgMhBIgPhYQgDgWgQgWQgOgUgtgJIg4gJIgJgBIgFgBQgSABgRAHQgcALghAyQgWAqAAA3QAAAUADATQAFAmAVAeIAFAJQAMASAOAKIAegBQAwAAAjAOQgVgEgZAAIgdABgAnuG5QgSAEgPAFQgjAOAAATQAAATAjAOQAkAOAxAAQAyAAAjgOQAjgOAAgTQAAgOgRgLIgSgIQgPgFgRgEIgIgBQAggKAXgiIAGgJQATgfAGglIAEgQIAAgYQgBg2gWgqIgDgHQgEgLgFgJQgJgNgRgIQgKgJgMgEQgQgIgTABIgFAAIgKABIgEABIglAGIgPADQgTADgOAGQgRAIgQAhQgFANgQAaQgPAbACAdQACAdAAAdQgBAbApAuQAbAdAUAKIAIgBIAFABgAoBhAQgEACgKAGIgVAJQgJAEgCAIQgEAIAEAIQADAHAKADQAKAEAKgEIAIgEQAFgEANgEQAIgDAGgIQAJgJgCgIQAAgKgMgEQgFgCgGAAQgFAAgGABgAFhhDQgJAEgCAHQgDAKANAKIALAHIALAHIANAIQAIAEAHAAQAHACAHgCQAHgCAFgEQAFgEAAgGQABgGgDgFIgJgGIgJgFQgLgFgPgJQgJgGgTAAIgGABgAnnkiQCShBCugSQiuASiSBBgAAil5IhEgCIBEACg");
	this.shape_160.setTransform(202.1,259.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah3gMQBYAxCXgsg");
	this.shape_161.setTransform(201.975,322.0783);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAiPQBQAAA4AqQA5AqAAA7QAAA0gqAmQgIAHgHAFQg4AqhQAAQhNAAg5gqQg6grAAg7QAAg2AxgoQAxglA5gK");
	this.shape_162.setTransform(138.45,328.95);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(45,46,46,0.188)").ss(0.2,1,1).p("AgGgvQAMAAAMACQAMAAAMADQADgBACAAQAFAAAEABQASADAPAGQALAEAIAEQATAMAAANQAAATgmAPQglAOg0AAQgzAAgmgOQglgPAAgTQAAgTAlgOQARgGASgDQAhgEAJgBAgKgvIABAA");
	this.shape_163.setTransform(155.425,304.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(0.1,1,1).p("AnWAAQAAgNAJgNQARgSARgCIALgBQALABAJAEQAIAEAGAFQAGAGAEAGQAGAKAAALQAAAUgQAOQgOANgUABQgHAAgDgBQgEAAgFgBQgMgDgIgJQgGgFgDgGQgCgCgBgEQgDgJAAgIgAFvAAQAAgTAPgOQAOgOAUAAQAbADAMALQAPAOAAATQAAATgPAOQgMAMgQACQgEAAgDAAIgEAAQgUAAgOgOQgOgMgBgSQAAgCAAgBg");
	this.shape_164.setTransform(200.85,279.325);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#F2F5F7").ss(1,1,1).p("AgXmHQiKhZAAh+QAAh9CKhZQCIhZDDAAQDCAACKBZQCKBZAAB9QAAB+iKBZQhlBBiDASQBiAoBYA8QANgcAegWQA4gpBNAAQBOAAA4ApQA3AqAAA5QAAA8g3ApQgxAjhBAFQBVB+AACXQAAEOkMC+QkNC/l7AAQj2AAjGhQAoCkqQgrgNgkgYQhLgyAAhHQAAhHBLgyQBLgyBqAAQBtAABKAyQBMAyAABHQAAAngYAhQBDgGBFAAIAFAAQAHAAAHAAQAGAAAFAAIAEAAIGdBQQABABABABAp8JUIglACQg3AIgrAgQgGADgDAEQiyinAAjbQAAkMENi/QBSg6BdgoQCahDC3gTAoOHGQgFAAgDABQgWgLgcgeQgsguABgdQABgegDgeQgDgeASgbQAQgcAFgNQARghATgJQAOgGAUgEQAJgBAHgBQAagFAMgBQADgCACAAQAFAAAGgBQACAAADAAQAUAAAQAHQANAFALAJQAPAMAMARIAAAAIABABQAEAFAFAHQABADACAEQAYAsAAA4QAAANAAALQgDAJAAAIQgHAngUAfQgDAFgEAFQgZAiggALAncHCIgDAAQgZAAgWAEAnZHCIgDAAAoJHHQgDgBgCAAAJSjQQAGAEAHAEQB2BUBBBiAHRHUQglgNg0AAQgPAAgPABQgPgMgNgRQgDgFgDgEQgVgfgGgoQgEgSAAgWQAAg4AYgsQAjgzAdgMQASgHATAAQACAAADABQAEAAAGABQAMACAvAHQAvAIAPAWQARAVAEAYQADAWAMBEQAMBEgwA0QgdAdgWAMQAHACAGACIABABQALAEAHAEQATALAAAOQAAAUglAOQglAOg1AAQgzAAgkgNQgBgBAAAAQgmgPAAgTQAAgUAmgNQAZgKAhgDQAPgCAPAAQAbAAAXAEgAgLmGQgFAAgGAAIAAAAQAAgBgBAAAgkmGQAOgBgBAAAlpChQAEAMgDgEAmECLQATAJAIANQAHAJADALAHrHaQgNgEgNgC");
	this.shape_165.setTransform(202.1,254.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF99FF").s().p("AFhAqIgBgBQglgPAAgTQAAgTAlgOQAagJAggDIAfgBQAbAAAWADQAOACAMAEIAOAEIABAAIASAIQATAMAAANQAAATglAPQglAOg1AAQgzAAglgNgAoSAaQglgOAAgSQAAgUAlgOQARgGASgDIAqgFIADAAIAAAAIADAAQANAAAMABIAYAEIAFgBIAJABQASADAPAGIATAJQATALAAAOQAAASgmAOQglAPg0AAQg0AAgmgPg");
	this.shape_166.setTransform(199.525,305.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AmqAvIgJgBQgMgDgHgJQgHgFgCgGIgEgGQgDgJABgIQAAgNAIgNQARgSASgCIAKgBQALABAJAEQAIAEAGAFQAHAGADAGQAGAKAAALQAAAUgQAOQgOANgUABIgKgBgAGgAvQgTAAgPgOQgOgMgBgSIAAgDQAAgTAPgOQAPgOATAAQAbADAMALQAPAOAAATQAAATgPAOQgMAMgPACIgIAAg");
	this.shape_167.setTransform(200.85,279.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6633FF").s().p("AHpCsQglgNgzAAIgfABQgPgLgNgSIgFgJQgWgfgGgoQgDgSAAgWQAAg3AYgsQAjgzAdgLQARgIAUAAIAFABIAJABIA7AJQAvAIAQAWQAQAWAEAXIAQBZQAMBEgxA0QgcAdgXAMQgMgEgOgCgAGKhVQgPAOAAAUIABADQAAASAOAMQAPAOAUAAIADAAIAIAAQAPgCAMgMQAPgOABgTQAAgUgQgOQgMgLgagDQgUAAgPAOgAmnCcQgMgCgNAAIgDAAIAAAAIgDAAQgaAAgVAEIgJABQgVgLgcgdQgsgvABgdQABgegDgdQgDgeARgbQARgbAFgOQARghATgIQANgHAVgDIAPgDIAngGIAFgBIAKgCIAGAAQATAAARAHQANAFALAKQAPALAMARIAAAAIABABIgBgBIAAAAQgMgRgPgLQASAIAJANQAEANgDgFIAJAMIADAHQAXAsAAA4IAAAXIgDARQgGAngVAfIgGAKQgZAighALIgFABIgYgDgAmehiQgRACgSASQgIANAAAOQAAAIACAJIAEAGQADAGAGAFQAIAJALADIAJABIAKABQAUgBAOgNQAQgOAAgUQAAgMgGgKQgDgGgHgGQgFgFgJgEQgIgEgMgBg");
	this.shape_168.setTransform(199.603,284.525);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9E5DFF").s().p("An7AeQgLgEgEgHQgDgIADgJQAEgGAIgGIAWgJIAQgHQAMgEALAFQAMAEAAAKQACAIgJAIQgHAIgIAEQgNAEgGAEIgIAFQgFABgGAAQgFAAgFgBgAHsAdQgHgBgIgEIgOgIIgMgHIgLgHQgOgJADgLQACgIAKgEQAYgBAMAHQAOAJANAFQAJAEABACIAIAFQAEAEgBAHQgBAGgFAEQgFAEgHACIgIABIgHAAg");
	this.shape_169.setTransform(195.2986,251.0313);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(202,158,223,0.898)").s().p("AnlM+QArgmAAg0QgBg8g5gqQg4grhQAAIgmADQg2AIgrAgQgGADgDAEQADgEAGgDQArggA2gIIAmgDQBQAAA4ArQA5AqABA8QAAA0grAmIgPAMQg4AqhQABQhOgBg5gqQg5grAAg7QgBg3AxgoQixinAAjbQAAkMEMi/QBSg6BdgoQgrgNglgYQhLgyABhHQgBhHBLgyQBNgyBpAAQBtAABJAyQBNAyAABHQAAAogYAgQi3ASiaBEQCahEC3gSQBDgGBFAAIAFAAIAOAAIABAAIALAAIADAAIGdBQIACACIgCgCImdhQIgDAAIgMAAIgBgBIAAAAQiKhZAAh+QAAh9CKhZQCIhZDDAAQDCAACKBZQCKBZAAB9QAAB+iKBZQhlBBiDASQBiAoBXA8IAOAIQB2BUBBBiQhBhih2hUIgOgIQAOgcAegWQA4gpBOAAQBMAAA4ApQA4AqAAA5QAAA7g4AqQgvAjhCAFQBWB9gBCYQAAEOkMC9QkNDAl7AAQj2AAjGhQgAB2KXIjugFQBYAzCWgugAsMKFQAyglA4gKQg4AKgyAlgAGBHSQghADgaAJQglAOAAAUQAAATAlAPIABABQAlANAzAAQA2AAAkgOQAlgPAAgTQAAgOgTgMIgSgIIgBAAIgNgEQAWgMAcgdQAxg0gMhEIgPhbQgFgXgQgVQgPgWgwgIIg6gJIgKgBIgFgCQgUABgRAHQgdAMgjAyQgYAsAAA5QAAAVAEATQAGAoAVAfIAFAJQANASAPALIAfgBQAzAAAmANQgXgDgbAAIgeABgAoJHHQgSADgRAGQglAOAAAUQAAATAlAOQAmAPA0AAQA0AAAlgPQAmgOAAgTQAAgOgTgLIgTgJQgPgGgSgDIgJgBQAigMAZghIAGgKQAUggAHgmIADgRIAAgYQAAg4gYgsIgDgHQgDgLgHgKQgIgMgTgIQgLgKgNgFQgRgHgTAAIgFAAIgLACIgFABIgmAFIgQAEQgUADgOAHQgTAIgRAhQgFANgQAcQgSAbADAeQADAegBAeQgBAdAsAuQAcAdAWAMIAIgBIAFABgAochBIgQAHIgWAJQgIAGgEAHQgDAIADAIQADAIALADQAMAEAJgEIAIgEQAHgFANgDQAIgEAHgIQAJgJgCgIQgBgLgMgEQgFgCgGAAQgGAAgFACgAF0hGQgJAFgCAIQgDAKANAKIAMAIIAMAHIANAIQAJAEAGAAQAJACAHgCQAHgCAFgFQAFgEABgFQAAgHgDgEIgIgHQgCgBgJgEQgMgGgPgJQgKgGgUAAIgGAAgAgVmGIgBAAIAMAAIgLAAgAgWmGIAAAAgAgWmGIAAAAgAgkmGIANgBIABABIgOAAgAgXmHIAAAAIAAAAg");
	this.shape_170.setTransform(202.1,254.95);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah9gNQBcAzCfgug");
	this.shape_171.setTransform(202.025,319.0657);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAiTQBUAAA6ArQA9AsAAA8QAAA2gtAnQgHAHgJAFQg6AshUAAQhSAAg8gsQg8gsAAg9QAAg3AzgqQA0gmA8gJ");
	this.shape_172.setTransform(135.175,326.15);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(30,31,31,0.125)").ss(0.2,1,1).p("AgGgwQAMAAAMABQANABANACQADAAACgBQAFABAFAAQASAEARAFQALAFAJAEQATAMAAAOQAAAUgnAOQgnAPg3AAQg2AAgogPQgmgOAAgUQAAgUAmgPQASgFATgEQAjgDAJgBAgKgwIAAAA");
	this.shape_173.setTransform(153.025,301.275);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(0.1,1,1).p("AnuAAQAAgOAKgNQASgTASgBIAKgBQANABAJAEQAJAEAFAFQAHAGAEAHQAGAJAAAMQAAAVgRAOQgOAOgWAAQgGAAgEAAQgEgBgFAAQgMgEgJgJQgGgFgDgGQgCgDgCgDQgDgKAAgIgAGCAAQAAgUAQgPQAPgNAVgBQAcADANALQAQAPAAAUQgBAUgPAOQgNAMgQACQgEABgEAAIgEAAQgVgBgPgOQgPgNgBgSQAAgCAAgBg");
	this.shape_174.setTransform(200.775,275.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#F2F5F7").ss(1,1,1).p("AgwmiIg6gyQhAhFAAhWQAAiBCShcQCPhcDNAAQDMAACRBcQCRBcAACBQAACCiRBbQhrBCiJATQBnApBcA9QAOgcAfgWQA7grBSAAQBRAAA7ArQA6ArAAA7QAAA9g6ApQgyAmhFAFQBaCBAACbQAAEWkbDEQkbDEmOAAQkDAAjQhSAodkzQgtgNgmgZQhPg0AAhIQAAhJBPgzQBQg0BvAAQByAABNA0QBRAzAABJQAAApgZAgQBGgGBJAAIAEAAQANAAABAAIABAAQgNgIgLgIAqdJlIgnADQg6AIgtAgQgGAEgEAEQi6isAAjiQAAkUEajEQBXg7BhgqQCihFDBgUAopHTQgFABgFAAQgWgLgdgfQgugvAAgeQABgfgCgeQgDggASgbQARgcAGgPQARghAUgJQAOgHAWgDQAJgCAHgBQAcgFANgCQADgBACAAQAFAAAGgBQADAAACAAQAVAAASAHQANAFAMAKQAQAMAMARIAAAAQAFAGAFAHAokHUQgDAAgCgBAn1HQIgDAAQgbAAgWADAnxHQIgEAAAJwjXQAHAEAHAFQB8BWBFBmAHoHiQgngOg2AAQgQAAgQABQgQgLgNgTQgDgFgDgDQgWghgHgoQgDgUAAgWQAAg6AZgtQAkg0AfgMQASgIAVAAQACAAADAAQAEAAAGACQAMABAyAJQAyAIAQAXQARAWAEAXQAEAYANBGQAMBFgzA2QgdAegYAMQAIACAGADIABAAQALADAIAFQAUAMAAAOQAAAVgnAOQgmAOg5AAQg1AAgngNQAAgBgBAAQgGgCgGgDIgJgFQgSgLAAgOQAAgVAngNQAbgKAigEQAQgBAQAAQAdAAAXAEgAAHmRQgPAAgPgBQgBAAgBAAQgMgIgLgIAl8CmQAFANgFgGAl8CmQAHAKADAKQACAEACAEQAZAsAAA6QAAANAAAMQgDAJAAAIQgHApgWAgQgDAFgEAFQgaAjgjALAgnmSQAYABAWAAIGmBUAIEHoQgNgEgPgCAmYCQQATAJAJAN");
	this.shape_175.setTransform(202.125,250);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF99FF").s().p("AFzArIgBgBIgLgFIgKgFQgSgLAAgOQAAgTAngOQAbgKAjgDQAPgCARAAQAcAAAXAEQAjAIAHADIABAAQALAEAIAEQAUALAAAOQAAAVgnAOQgmAOg4AAQg2AAgngNgAotAbQgngPAAgTQAAgUAngPQARgGATgDIAsgEIADAAIAAAAIAEAAQAOgBAMACIAZADIAFgBIAKABQATADAQAGIAUAJQATAMAAAOQAAATgnAPQgnAPg3AAQg2AAgogPg");
	this.shape_176.setTransform(199.4,302);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AnAAxIgJgCQgMgDgJgJQgGgEgDgHIgEgGQgDgKAAgIQAAgNAKgOQASgTASgBIAKgBQANABAJAEQAJAEAFAFQAHAGAEAHQAGAKAAALQAAAVgRAOQgOAOgWABIgKgBgAG2AxQgVAAgPgPQgPgNgBgRIAAgEQAAgUAQgPQAPgNAVAAQAcACANALQAQAPAAAUQgBAUgPAOQgNAMgQADIgIAAg");
	this.shape_177.setTransform(200.775,275.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6633FF").s().p("AICCxQgngOg2AAIggABQgQgLgNgSIgGgJQgWghgHgoQgDgUAAgVQAAg6AZgtQAkg0AfgMQASgIAVAAIAFABIAKABIA+AKQAyAIAQAXQARAWAEAYIARBcQAMBFgzA2QgdAegYAMQgNgEgPgCgAGehYQgQAOAAAVIABAEQAAASAPAMQAPAPAWAAIADAAIAIAAQARgCAMgNQAQgOAAgUQAAgVgQgOQgMgMgcgCQgWAAgPAOgAm+CgQgMgBgNAAIgEAAIAAAAIgDAAQgbAAgWADIgKABQgWgLgdgeQgugwAAgeQABgfgCgdQgDgfASgcQARgcAGgOQARgiAUgJQAOgHAWgDIAQgDIApgHIAFgBIALgBIAFAAQAVAAASAHQANAFAMAKQAQAMAMARIABABIgBgBQgMgRgQgMQATAJAJANQAFANgEgFIAJANIAEAHQAZAsAAA7IAAAXQgDAJAAAIQgHApgWAgIgHAKQgaAjgjALIgFABIgagDgAm0hlQgSACgSATQgJANAAAOQAAAIACAKIAEAGQAEAHAGAFQAIAIAMAEIAKABIAKABQAVgBAPgNQARgPAAgVQAAgMgHgKQgDgHgHgFQgGgGgJgEQgJgEgMgBg");
	this.shape_178.setTransform(199.5016,280.475);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#9E5DFF").s().p("AoWAeQgMgDgDgIQgEgIAEgJQADgGAJgGIAYgJQALgHAFgBQAMgEAMAFQANAEAAAKQACAJgJAIQgHAJgJADQgOAFgGADQgGAEgDABQgFACgGAAQgFAAgGgCgAIFAdQgHAAgJgEIgPgJIgMgHIgMgIQgOgJADgLQACgIAKgEQAagBAMAHQAPAJANAFQAKAFABABQAGADADADQADAFgBAGQAAAGgFAEQgFAFgIACIgJABIgHgBg");
	this.shape_179.setTransform(194.9611,246);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(202,158,223,0.898)").s().p("An+NWQAsgnAAg1QAAg+g8gsQg7grhUAAIgnADQg6AIgtAgIgKAIIAKgIQAtggA6gIIAngDQBUAAA7ArQA8AsAAA+QAAA1gsAnIgQANQg7ArhUAAQhSAAg8grQg8gtAAg8QAAg4AygqQi6isAAjhQAAkVEajEQBXg7BhgqQgtgNgmgYQhPg1AAhIQAAhJBPg0QBQgzBvAAQByAABNAzQBRA0AABJQAAApgZAgQjBAUiiBFQCihFDBgUQBGgFBJAAIAEAAIAuABIGmBTImmhTIgegBIgCgBIABgBIgYgPIg6gzQhAhEAAhWQAAiBCShcQCPhcDNAAQDMAACRBcQCRBcAACBQAACCiRBaQhrBDiJATQBnApBcA9IAOAJQB8BWBFBmQhFhmh8hWIgOgJQAOgcAfgWQA7grBSAAQBRAAA7ArQA6ArAAA7QAAA9g6ApQgyAlhFAGQBaCBAACcQAAEVkbDEQkbDFmOgBQkDAAjQhSgAB9KqIj7gFQBcA0CfgvgAs1KYQA1gnA8gJQg8AJg1AngAGUHgQgiADgbAKQgnAOAAAUQAAAOASALIAJAFIAMAFIABABQAnANA1AAQA5AAAmgOQAngOAAgVQAAgPgUgLQgIgEgLgEIgBAAIgOgGQAYgLAdgeQAzg2gMhGIgRhcQgEgZgRgVQgQgXgygJIg+gKIgKgBIgFAAQgVAAgSAIQgfALgkA1QgZAtAAA6QAAAWADAUQAHAoAWAgIAGAJQANATAQALIAggBQA2AAAnAOQgXgEgdAAQgQAAgQACgAokHUQgTADgSAGQgmAPAAAUQAAAUAmAPQAoAPA3AAQA3AAAngPQAngPAAgUQAAgOgTgMIgUgJQgRgGgSgDIgKgBQAjgLAagkIAHgJQAWghAHgoQAAgIADgJIAAgZQAAg6gZgsIgEgIQgDgLgHgJQgJgNgTgKQgMgJgNgFQgSgHgVAAIgFAAIgLABIgFABIgpAHIgQACQgWAEgOAGQgUAJgRAiQgGAPgRAcQgSAcADAeQACAfgBAfQAAAdAuAxQAdAeAWALIAKgBIAFABgAo4hDQgGABgLAHIgXAJQgJAGgDAHQgEAJAEAIQADAIAMADQALAEAKgEQAEgBAFgEQAHgDAOgFQAIgDAIgJQAJgJgCgJQgBgKgMgEQgHgDgGAAQgGAAgFACgAGIhHQgKAEgDAIQgDALAPAKIAMAIIALAHIAPAJQAKAEAGAAQAJACAHgCQAIgCAFgFQAFgEABgGQABgGgEgFQgDgEgGgDQgBgBgJgFQgNgFgQgJQgKgGgVAAIgGAAgAgnmRIAOgBIACABIAeABIgugBgAgZmSIAAAAg");
	this.shape_180.setTransform(202.125,250);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiEgNQBiA1Cngwg");
	this.shape_181.setTransform(202.025,316.0724);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAiYQBYAAA+AtQA/AtAAA+QAAA3gvAoQgIAHgIAGQg+AthYAAQhVAAg/gtQhAgtAAg/QAAg5A2grQAlgbAqgN");
	this.shape_182.setTransform(131.9,323.375);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(15,15,15,0.063)").ss(0.1,1,1).p("AgHgyQANAAANACQAOABANACQADgBADAAQAFAAAEABQAUAEASAGQALAEAJAFQAVAMAAAOQAAAVgpAPQgpAPg6AAQg5AAgqgPQgogPAAgVQAAgUAogPQATgGAUgEQAlgEAJgBQACAAACAA");
	this.shape_183.setTransform(150.625,297.775);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(0.1,1,1).p("AoGAAQAAgOAKgNQASgUATgCIALgBQANABAKAFQAJAEAGAFQAHAGAEAHQAHAKAAAMQAAAVgSAPQgPAOgXABQgHAAgEgBQgEAAgFgBQgNgEgJgJQgGgFgEgGQgCgDgCgEQgCgKAAgIgAGUAAQAAgUASgPQAPgPAWAAQAdADAOAMQARAPAAAUQAAAUgRAPQgOANgQACQgFAAgEAAIgEAAQgWAAgPgPQgQgNgBgTQgBgCAAgBg");
	this.shape_184.setTransform(200.75,270.875);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#F2F5F7").ss(1,1,1).p("Ao3k8QgwgNgogaQhTg1AAhLQAAhLBTg1QBUg1B1AAQB3AABSA1QBUA1AABLQAAAqgaAiQBJgGBNAAIAFAAQAIAAAHAAQAHAAAGAAIAEAAIHLBWQBrArBhA/QAPgdAggXQA+gsBWAAQBVAAA+AsQA9AsAAA9QAAA+g9AsQg1AmhJAFQBfCEAAChQAAEekoDIQkqDLmhAAQkPAAjbhVAgameQiYheAAiGQAAiECYheQCXheDXAAQDWAACZBeQCXBeAACEQAACGiXBeQhxBFiPASAq9J2IhRAMQglALggAWQgGADgEAEQjEixAAjnQAAkdEpjJQBbg9BmgrQCqhHDKgUApFHgQgEAAgFABQgYgLgfggQgwgyABgeQABgfgDggQgDggATgcQASgeAGgNQASgjAVgJQAPgIAXgDQAKgCAHgCQAegEAMgBQAEgBACAAQAFgCAHAAQADAAACAAQAWAAATAHQANAGANAKQAQAMAOASIAAAAQAFAGAFAIAoRHcQgcAAgYAEAoKHcIgDAAAo/HhQgDgBgDAAAKPjdQAHAEAIAFQCCBZBHBoAIAHvQgogOg5AAQgRAAgRABQgQgMgPgSQgDgFgDgFQgXgigHgpQgEgTAAgXQAAg8AagvQAng1AggMQATgIAWAAQADAAACAAQAFAAAGACQANABA0AJQA0AIARAXQASAXAFAYQADAYAOBIQANBIg2A3QgfAfgZAMQAIACAHADIABABQAMADAIAFQAVAMAAAPQAAAVgpAPQgoAPg7AAQg5AAgogPQAAAAgBAAQgHgDgFgDIgLgFQgSgMAAgNQAAgWApgNQAcgLAkgDQARgBARAAQAdAAAZADgAIdH1QgNgEgQgCAgMmdQgGAAgGAAIgBAAQAAgBgBAAAgomdQAPgBgBAAAmPCqQAGAOgFgGAmPCqQAIAKADAMQACADACAEQAaAuAAA8QAAANAAAMQgCAJgBAJQgIAogWAiQgDAFgEAFQgbAkglAMAmsCUQAUAJAJAN");
	this.shape_185.setTransform(202.125,245.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF99FF").s().p("AGGAsIgBAAIgNgGIgKgFQgTgMAAgOQAAgUAqgOQAcgKAkgDIAhgCQAeAAAZAEQAPACAOAEIAPAFIABAAIAUAIQAUAMAAAOQAAAVgoAPQgpAPg7AAQg4AAgogOgApJAcQgogPAAgUQAAgVAogPQATgGAUgDIAugFIADAAIAEAAQAOAAANABIAbAEIAFgCIAKACQAUADARAGIAVAJQAUAMAAAPQAAAUgpAPQgpAPg6AAQg5AAgqgPgAoog2QAYgDAcAAIguAFIgGgCg");
	this.shape_186.setTransform(199.275,298.525);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AnWAyIgKgBQgNgEgJgJQgGgFgEgGQgCgDgBgEQgDgKAAgIQAAgOAJgNQAUgUASgCIAMgBQAMABAKAFQAJAEAGAFQAIAGADAHQAHAKAAAMQAAAVgSAPQgPAOgWABIgLgBgAHLAyQgWAAgPgPQgQgNgBgTIgBgDQABgUARgPQAPgPAWAAQAdADAOAMQARAPAAAUQAAAUgRAPQgNANgSACIgHAAg");
	this.shape_187.setTransform(200.75,270.875);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6633FF").s().p("AIcC2QgpgOg5AAIgiABQgQgMgOgSIgGgKQgYghgHgqQgDgTAAgXQAAg7AagvQAng1AggMQATgJAVABIAGAAIAKABIBBAKQA0AJARAXQATAXAEAYIARBfQANBIg1A3QgfAfgZAMQgOgEgPgCgAGzhbQgRAQAAAUIABAEQAAATAQANQAQAPAWAAIAEAAIAIAAQARgCAOgNQAQgPABgVQAAgUgRgQQgOgLgdgDQgWAAgQAOgAnTClQgNgCgOAAIgEAAIgDAAQgcAAgYADIgKACQgXgMgfgeQgwgyABgeQABgggDgfQgDgfASgdQATgeAGgOQASgiAVgKQAPgGAWgEIARgDIArgGIAFgBIAMgCIAGAAQAVAAATAHQAOAFAMAKQARAMANATIAAAAIAAAAQgNgTgRgMQAVAKAJANQAFAOgFgGIALANIADAIQAaAtAAA9IAAAYIgDARQgHApgXAiIgHAKQgbAkglALIgFACIgbgDgAnJhoQgTACgTATQgJANAAAQQAAAIACAKQACAEACACQAEAHAGAFQAJAJANAEIAJABIALABQAXgBAPgOQASgPAAgVQAAgNgHgKQgEgHgHgGQgGgFgJgFQgKgEgNgBg");
	this.shape_188.setTransform(199.3811,276.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#9E5DFF").s().p("AowAfQgMgDgEgIQgEgJAEgIQAEgIAJgFIAYgKQAMgGAGgBQANgFAMAFQANAEABALQACAJgKAJQgIAIgJAEQgOAEgHAEIgJAFQgGACgFAAQgGAAgGgCgAIeAeQgHAAgJgEIgQgJIgNgHIgMgIQgPgKADgLQACgIALgFQAbgBANAHQAQAKANAFQAKAFABABIAKAGQAEAFgBAHQgBAGgGAEQgFAFgIACIgJABIgIgBg");
	this.shape_189.setTransform(194.6225,240.9438);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(202,158,223,0.898)").s().p("AoXNuQAvgoAAg3QAAg/hAgtQg+gthXAAQBXAAA+AtQBAAtAAA/QAAA3gvAoIgRANQg+AthXAAQhXAAg/gtQg/gtAAg/QAAg6A1grQAEgEAGgDQAggWAlgLIBRgMIhRAMQglALggAWQgGADgEAEQjEixAAjnQAAkcEpjLQBbg8BmgrQgwgNgogaQhTg1AAhLQAAhLBTg1QBUg1B1AAQB3AABSA1QBUA1AABLQAAAqgaAiQBJgGBNAAIAFAAIAPAAIABAAIALAAIAFAAIHLBWInLhWIgFAAIgMAAIgBgBIAAAAQiYheAAiGQAAiECYheQCXheDXAAQDWAACZBeQCXBeAACEQAACGiXBeQhxBFiPASQBrArBhA/QAPgdAggXQA+gsBWgBQBVABA+AsQA9AsAAA8QAABAg9ArQg1AmhJAFQhHhoiChaIgPgIIAPAIQCCBaBHBoQBfCFAACgQAAEdkoDJQkqDLmhAAQkPAAjbhVgACEK9IkJgGQBiA3CngxgAtdKqQAmgbApgNQgpANgmAbgAGoHtQgkADgcAKQgpAOAAAWQAAANASAMIAKAFIANAGIABAAQAoAPA5AAQA7AAAogPQApgPAAgVQAAgPgVgNIgUgIIgBAAIgPgFQAZgMAfgfQA2g3gNhIIgRhgQgFgYgSgXQgRgXg0gJIhBgKIgLgBIgFAAQgWgBgTAJQggAMgnA1QgaAvAAA8QAAAXAEATQAHAqAXAhIAGAKQAPASAQAMIAigBQA5AAAoAOQgZgEgdAAIgiACgAo/HhQgUAEgTAFQgoAPAAAVQAAAWAoAOQAqAPA6ABQA6gBApgPQApgOAAgWQAAgPgVgMIgUgJQgSgFgUgEIgJgCQAlgLAbgkIAHgKQAWgiAIgpIADgRIAAgZQAAg9gagtIgEgIQgDgLgIgKQgJgNgUgKQgNgKgNgFQgTgHgWAAIgFAAIgMACIgGABIgqAGIgRADQgXAEgPAGQgVAKgSAiQgGAOgSAeQgTAdADAfQADAggBAgQgBAeAwAyQAfAeAYAMIAJgCIAGACgApUhFQgGABgMAHIgYAJQgJAFgEAJQgEAJAEAIQAEAIAMAEQAMADALgDIAJgGQAHgDAOgFQAJgEAIgIQAKgKgCgIQgBgMgNgEQgHgCgGAAQgGAAgGACgAGbhJQgLAEgCAIQgDALAPALIAMAIIANAHIAQAJQAJAEAHABQAJABAIgCQAIgCAFgEQAGgFABgGQABgHgEgFIgKgGQgBgCgKgEQgNgGgQgKQgLgGgXAAIgGABgAo3k8QCqhHDKgUQjKAUiqBHgAgYmdIgBAAIAMAAIgLAAgAgZmdIAAAAgAgZmdIAAAAgAgomdIAOgBIABABIgPAAgAgameIAAAAIAAAAg");
	this.shape_190.setTransform(202.125,245.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiKgOQBmA3Cvgx");
	this.shape_191.setTransform(202.05,313.0723);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ADfAAQAAA4gxAqQgJAHgJAGQhAAuhcAAQhaAAhCguQhCgvAAhAQAAg7A4gsQAEgEAGgDQBCguBaAAQBcAABAAuQBDAuAABAg");
	this.shape_192.setTransform(128.625,320.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(0.1,1,1).p("AoeAAQAAAJACAIQAAAAAAACQACAEADADQADAGAHAGQAJAJAOADQAFABAEABIABAAQAEABAFAAIACAAQAYgBAQgOQASgQAAgWQAAgMgHgKQgEgHgHgGQgHgHgJgDQgKgFgOgBIgEAAQgDAAgEABIgBAAQgTACgNANQgCABgCACQgCACgBACQgKAOAAAOgAIfAAIAAAAQAAAVgRAPQgOANgSACQgBAAAAAAQgEABgEAAIgEAAQgXgBgRgPQgQgNgBgTQAAgCAAgCQAAgVARgQQARgOAXgBIAEAAQAEAAACABQACAAABAAQASADAOALQARAQAAAVg");
	this.shape_193.setTransform(200.675,266.65);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#F2F5F7").ss(1,1,1).p("AgZmpQgBAAgBgBQifhgAAiJQAAiICfhhQCehhDhAAQDgAACgBhQCeBhAACIQAACJieBgQh2BHiWATQBwAsBlBBQAQgeAigYQBBgtBaAAQBZAABAAtQBAAuAAA+QAABAhAAtQg3AnhMAFQBjCJAAClQAAElk2DPQk3DQm1AAQkcAAjlhYApSlFQgygOgqgaQhWg2AAhNQAAhNBWg3QBYg2B7AAQB8AABWA2QBYA3AABNQAAArgbAjQBNgHBQAAQALAAALAAQESADDfBWAuFK9QjNi1AAjuQAAklE2jPQBfg/BrgsQCyhIDUgVAnqHvQAEgCACAAQAngMAcglQAEgFADgGQAYghAIgrQABgJACgJQAAgMAAgOQAAg9gbgvQgCgFgCgDQgGgIgFgHQgOgSgRgMQgNgKgOgGQgUgIgXAAQgDAAgDAAQgGABgGABQgCAAgBAAQgCAAgBABQgNACgfAFQgIABgKACQgYADgQAIQgVAJgJAOQgHAKgDAMQgHAPgTAeQgTAdADAgQADAhgBAgQgBAgAyAyQAhAgAYANAKtjjQAIAFAIAEQCIBbBLBrAGPHvQgRgMgPgTQgEgFgDgEQgYgjgIgrQgDgUAAgXQAAg+AbgvQAGgLAJgLQAaghAhgNQAUgJAXAAQADAAADABQAEAAAHABQANADA3AIQA2AJASAXQATAYAFAZQAEAZAOBJQANBKg4A4QggAggaAN");
	this.shape_194.setTransform(202.125,240.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF99FF").s().p("AGYAtIgBgBQgrgPAAgWQAAgUArgPQAdgKAmgEQASgBARAAQAfAAAaAEQARACAOAEIAQAFQAMAEAJAFQAWAMgBAOQAAAWgqAPQgqAQg+AAQg7AAgqgPgAplAdQgqgQAAgUQAAgWAqgPQAUgGAVgEQAOgCAPgBIATgCIAEAAIAEAAQAOAAAOACIAcADIAGgBIAKABQAUAEATAGIAWAJQAVAMAAAQQAAAUgrAQQgrAPg8AAQg9AAgsgPg");
	this.shape_195.setTransform(199.15,295.075);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AnjA0IgJgBIgBAAIgJgBQgOgDgJgKQgHgFgDgHIgFgGIAAgDQgCgHAAgJQAAgOAKgOIADgEIAEgEQANgMATgCIABAAIAHgBIAEAAQAOABAKAEQAJAEAHAGQAHAHAEAHQAHAKAAAMQAAAWgSAPQgQAOgYABgAHhAzQgXAAgRgPQgQgNgBgTIAAgEQAAgVARgQQARgOAXgBIAEAAIAGABIADAAQASACAOAMQARAQAAAVIAAAAQAAAVgRAPQgOANgSACIgBAAIgIAAg");
	this.shape_196.setTransform(200.675,266.65);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6633FF").s().p("AI1C7QgrgOg7AAIgkABQgRgMgPgUIgGgJQgZgjgHgqQgEgVAAgXQAAg8AcgwQAFgLAJgLQAaghAigNQAUgIAWAAIAGABIALABIBEAKQA3AJARAYQAUAXAEAZIASBiQAOBJg4A5QghAggaAMQgOgEgQgCgAHHhdQgRAPAAAWIAAAEQABATAQANQARAPAXABIAEAAIAIgBIABAAQASgCAOgNQARgPAAgVIAAAAQAAgWgRgPQgOgMgSgDIgDAAIgGAAIgEAAQgXAAgRAPgAnpCpQgOgBgPAAIgDAAIgEAAQgdAAgZADIgKACQgZgMggggQgzgzABgfQABghgDgfQgDghAUgdQATgeAGgPQADgMAIgKQAIgOAWgJQAQgHAXgEIASgDIAtgHIACgBIADAAIANgBIAGAAQAWAAAUAHQAOAGANAKQASAMAOATIALAOIADAIQAcAvAAA9IAAAZIgEASQgHArgYAiIgHAKQgdAlgmAMIgGACIgcgEgAn/hcIgEADIgDAEQgKAOAAAPQAAAJACAIIAAACIAFAHQADAGAHAGQAJAJAOADIAJACIABAAIAJABIACAAQAYgBAQgOQASgQAAgWQAAgNgHgKQgEgHgHgGQgHgGgJgEQgKgFgOgBIgEAAIgHABIgBAAQgTACgNANg");
	this.shape_197.setTransform(199.2611,272.325);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9E5DFF").s().p("ApKAiQgNgEgEgIQgEgJAEgJQAEgHAKgGIANgGIAMgEQAMgGAGgCQAOgEANAFQAOAEAAALQACAKgKAIQgIAJgJAEIgNADIgKAFIgJAGQgGACgGAAQgGAAgGgCgAI4AhQgIgBgKgEIgQgJIgNgIIgNgIQgQgKADgLQADgJALgEQALgFALACQAGACANAHQARAKAOAFQALAFABACIAKAFQAEAFgBAIQgBAGgGAEQgFAFgJACIgJABIgIAAg");
	this.shape_198.setTransform(194.2725,235.7442);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(202,158,223,0.898)").s().p("AowOGQAxgpAAg5QAAhBhDgtQhAgvhcABQhbgBhCAvIgKAHIAKgHQBCgvBbABQBcgBBAAvQBDAtAABBQAAA5gxApIgSAOQhAAuhcAAQhbAAhCguQhCgvAAhBQAAg7A4gsQjNi1AAjvQAAkkE2jPQBfg/BrgrQgygOgqgbQhWg2AAhNQAAhNBWg2QBYg3B7AAQB8AABWA3QBYA2AABNQAAArgbAjQBNgHBQABIAWAAIgCgCQifhgAAiJQAAiICfhhQCehgDhAAQDgAACgBgQCeBhAACIQAACJieBgQh2BIiWASQjfhVkSgDQESADDfBVQBwAsBlBBIAQAJQCIBcBLBrQhLhriIhcIgQgJQAQgeAigXQBBguBaAAQBZAABAAuQBAAtAAA+QAABBhAAsQg3AnhMAGQBjCIAACkQAAEmk2DPQk3DPm1ABQkcAAjlhYgAgLLoQBAAABQgXIABAAIAEgBIgEABIgBAAQhQAXhAAAIAAAAIAAAAQhIAAg0gcIgEgCIAEACQA0AcBIAAIAAAAIAAAAgAG8H6QgmAEgdALQgrAOAAAWQAAAVArAQIABAAQAqAPA7AAQA+AAAqgPQArgQAAgVQAAgQgWgMQgJgEgMgEIgQgGQAagNAgggQA4g4gNhJIgShjQgFgZgTgYQgSgXg2gJIhEgKIgLgCIgGgBQgXAAgUAJQghAMgaAiQgJALgGALQgbAvAAA+QAAAXADAVQAIAqAYAiIAHAKQAPATARANIAjgBQA8AAAqAOQgagEgfAAQgRAAgSABgApaHvQgVADgTAGQgqAPAAAWQAAAVAqAQQAsAQA8AAQA8AAArgQQArgQAAgVQAAgPgVgMIgWgKQgSgGgVgDIgKgCQAngMAcglIAHgLQAYgiAIgqIADgSIAAgaQAAg9gbgvIgEgIQgEgMgHgLQgKgNgVgJQgNgKgOgGQgUgHgXgBIgGAAIgMACIgDAAIgDABIgsAGIgSAEQgYADgQAIQgVAJgJANQgHALgDAMQgHAOgTAfQgTAdADAhQADAggBAhQgBAeAyA0QAhAfAYANIAKgCIAGACgApwhHQgGABgMAHIgMAEIgOAGQgKAFgDAJQgFAJAFAIQADAJANAEQANADALgDIAKgGIAKgGIAMgDQAKgDAIgJQAKgJgCgKQgBgLgOgEQgHgDgHAAQgGAAgGACgAGuhMQgLAFgCAJQgEALAQALIANAIIANAHIARAJQAKAFAHABQAKABAIgCQAIgCAGgFQAGgEAAgGQABgIgEgFIgKgHQgBgBgKgFQgOgFgRgLQgNgHgHgBIgGgBQgIAAgIADgApSlEQCyhKDUgUQjUAUiyBKgAn/MkIAAAAg");
	this.shape_199.setTransform(202.125,240.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},1).to({state:[]},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.4,140.2,223.49999999999997,236.40000000000003);


(lib.cork_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2E9EF").ss(1,1,1).p("Aj/AAIH/AA");
	this.shape.setTransform(263.025,-70.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F2F5F7").ss(1,1,1).p("Aj/CIIAAjqQACgBABAAQABAAABAAQDNhBEoA3QACABADABIAADz");
	this.shape_1.setTransform(263.025,-83.8104);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F5F7").s().p("Aj/CIIAAjqIADgBIACAAQDNhBEoA3IAFACIAADzg");
	this.shape_2.setTransform(263.025,-83.8104);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F2F5F7").ss(1,1,1).p("Aj/hiQACgBABAAQDPhBEoA3IAFD1In/AAg");
	this.shape_3.setTransform(263.025,-124.9552);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F5F7").s().p("Aj/CIIAAjqIADgBQDPhBEoA3IAFD1g");
	this.shape_4.setTransform(263.025,-124.9552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:-83.8104}},{t:this.shape_1,p:{y:-83.8104}},{t:this.shape,p:{y:-70.25}}]}).to({state:[{t:this.shape_4,p:{y:-124.9552}},{t:this.shape_3,p:{y:-124.9552}}]},1).to({state:[{t:this.shape_4,p:{y:-166.1052}},{t:this.shape_3,p:{y:-166.1052}}]},1).to({state:[{t:this.shape_4,p:{y:-207.2552}},{t:this.shape_3,p:{y:-207.2552}}]},1).to({state:[{t:this.shape_4,p:{y:-248.3552}},{t:this.shape_3,p:{y:-248.3552}}]},1).to({state:[{t:this.shape_4,p:{y:-289.5052}},{t:this.shape_3,p:{y:-289.5052}}]},1).to({state:[{t:this.shape_4,p:{y:-330.6552}},{t:this.shape_3,p:{y:-330.6552}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).to({state:[{t:this.shape_4,p:{y:-371.8052}},{t:this.shape_3,p:{y:-371.8052}}]},1).to({state:[{t:this.shape_4,p:{y:-371.8052}},{t:this.shape_3,p:{y:-371.8052}}]},1).to({state:[{t:this.shape_4,p:{y:-371.8052}},{t:this.shape_3,p:{y:-371.8052}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).to({state:[{t:this.shape_2,p:{y:-371.8104}},{t:this.shape_1,p:{y:-371.8104}},{t:this.shape,p:{y:-358.25}}]},1).wait(1));

	// Layer_1
	this.text = new cjs.Text("", "30px 'Calibri-BoldItalic'", "#F2F5F7");
	this.text.lineHeight = 39;
	this.text.parent = this;
	this.text.setTransform(214.2,67.35,1.1007,1.3189);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBmIgGgDIgCgCIgCgEIAAgEIgBgHIAAgHIAAgFIABgFQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAgBQACgBAEACIAHADIAMACQAHAAAJgDQAGgCAEgDQAEgEADgEQABgEABgFQABgEgBgFQgBgGgGgDQgEgDgGgCIgOgDQgIgCgGgEQgHgCgGgIQgGgFgDgNQgDgNACgNQACgNAGgKQAGgMAKgIQALgIAPgFIAMgCIAMgCIAJABQAEABACACQACABABAFIABAGIABAJIgBAJQgBABAAABQAAABAAAAQgBABAAAAQAAAAgBABIgFAAIgIgCIgJgCQgGAAgHADQgEABgFADQgEAEgBAEQgDADAAAFQgBAEABAFQACAFAEADQAFADAFABIAPADQAHACAIADQAHAEAGAHQAFAGADALQADAPgCAOQgBANgHALQgHAMgLAJQgLAJgQAFQgGADgHAAIgNABIgLgCg");
	this.shape_5.setTransform(311.65,133.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBhQgJgFgHgKQgGgLgEgRQgDgMgBgPQgBgPABgOQACgPADgPQAFgPAIgNQAHgMALgKQAMgLAQgFQANgEALABQAMAAAIAFQAIAEAEAIQAGAHACAJQADAOgDAMQgDANgJAKQgIALgQAJQgQAJgVAIIgPAEIABAJIACAIQADAPAJAGQAIAFANgFQAKgDAIgEIAOgJIAJgHIAFgEQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIABAEIABAHIABAJIgBAIIgCAGIgGAHIgLAIQgGAEgJAEQgIAEgJADQgOAFgMAAQgMAAgJgGgAADg/QgHACgFAGQgGAFgDAHQgDAHgCAJQgCAJAAAKIANgFQAMgEAIgEQAIgFAEgFQAEgFACgFQABgGgBgFQgCgHgGgEQgDgCgEAAIgIACg");
	this.shape_6.setTransform(297.2318,138.1409);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKCLIgCgEIgOkBIABgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAIAGgEIAJgEIAJgCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQABAAAAABIANEBIAAAEIgDADIgGADIgKAEIgIACIgGABIgDgBg");
	this.shape_7.setTransform(285.45,137.8125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2CMQgEgBgBgEIgNkBIAAgEQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAGgEIAKgEIAJgCIAGAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIADBGIABAKIAAAJIAAALIgBAIQABgHAEgIIAKgPQAFgHAHgFQAGgGAIgCQAJgDAHABQAHAAAGAEQAGADAEAFQAFAFADAHQAEAGACAHIAEAPQADAMABAOQABAOAAAPQgBAPgEAPQgDAPgGAMQgGAMgKAKQgKAJgNAFQgNAEgLgEQgLgCgKgKIABAOQAAAFgEADQgEADgJADQgIACgEAAIgBAAgAAHggQgHACgFAIQgGAHgFAKQgEAKgCANQgDANABAOIACAaQAIAIAHADQAHADAJgDQAGgCAFgFQAEgFADgHQADgIABgJIABgTQABgJgBgKIgDgQIgDgKQgBgFgDgEQgDgDgEgCIgDAAIgFAAg");
	this.shape_8.setTransform(273.3583,143.2161);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2CMQgEgBgBgEIgNkBIAAgEQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAGgEIAKgEIAJgCIAGAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIADBGIABAKIAAAJIAAALIgBAIQABgHAEgIIAKgPQAFgHAHgFQAGgGAIgCQAJgDAHABQAHAAAGAEQAGADAEAFQAFAFADAHQAEAGACAHIAEAPQADAMABAOQABAOAAAPQgBAPgEAPQgDAPgGAMQgGAMgKAKQgKAJgNAFQgNAEgLgEQgLgCgKgKIABAOQAAAFgEADQgEADgJADQgIACgEAAIgBAAgAAHggQgHACgFAIQgGAHgFAKQgEAKgCANQgDANABAOIACAaQAIAIAHADQAHADAJgDQAGgCAFgFQAEgFADgHQADgIABgJIABgTQABgJgBgKIgDgQIgDgKQgBgFgDgEQgDgDgEgCIgDAAIgFAAg");
	this.shape_9.setTransform(256.5583,148.6161);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdBtQgHgBgGgEQgHgFgEgIQgEgJgCgKIgCgNIgCgOIgFhsIAAgDIADgEIAHgDIAJgEIAKgCIAFAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIAAADIAGBoIABAJIACAJIACAIIAEAFIAEADIAHgBQAGgCAFgHQAGgHAEgLQAFgLABgNQADgMgBgPIgEhMIABgDIADgEIAGgDIAJgEIAKgCIAGgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIAJCuIAAAEIgCADIgGADIgIADIgIACIgEABQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgDIgBgcQgCAHgEAIQgDAJgGAHQgHAIgHAGQgHAGgIADQgIADgGAAIgGgBg");
	this.shape_10.setTransform(239.75,156.3725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9CJQgDgDgBgIIgMjdQAAgJADgFQAEgFAFgCIAxgPQAQgFALgBQANgBAJAEQAJAEAGAHQAGAIADANQACALAAALQAAAKgDAKQgDAKgGAIQgFAIgIAHQAHgBAHACQAGACAGAEQAFAFAEAHQAEAHACAJQACAJAAALQABAKgDAKQgCALgFAKQgFALgJAJQgIAJgNAJQgMAHgRAGIg3ASIgEAAQgDAAgDgBgAgCAJIgcAIIAEBJIAcgKQALgDAHgGQAHgHADgHQAEgIAAgIQABgJgCgIQgDgMgIgEQgEgCgGAAQgHAAgHADgAgNhdIgWAIIADBBIAXgHQAJgDAGgGQAGgGADgHQADgIAAgIQAAgIgBgHQgBgFgDgDQgCgEgEgCQgEgBgEAAIgMACg");
	this.shape_11.setTransform(222.751,159.6917);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E2E9EF").ss(1,1,1).p("Ao9l/IRxAAQA5GIg2F3Ix0AAQgnmAAnl/g");
	this.shape_12.setTransform(264.3072,145.6834,1.0997,1.3177);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F5F7").s().p("Ao9GAQgnmAAnl/IRxAAQA5GIg2F3g");
	this.shape_13.setTransform(264.3072,145.6834,1.0997,1.3177);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D6BF47").ss(1,1,1).p("AI3qWQAWLFh8IQQn/DBmRjRQh4oZgCqxQISB3Jehyg");
	this.shape_14.setTransform(264.3923,242.156,1.1007,1.3189);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E7E2D0").ss(1,1,1).p("ADbsXIgJAWAjus0IAGAXIAFAYIAADiQjiBighDjQhuHqAfIkAjjsFIG1AEIAADbQEjCHAoE1QAnE0gJJrAjosdIHDAGADkstIgJAW");
	this.shape_15.setTransform(263.9175,46.4524,1.1007,1.3189);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F2F5F7").ss(1,1,1).p("ADqgdIAAA7InTgHIAAg0");
	this.shape_16.setTransform(263.3562,-64.7646,1.1007,1.3189);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6BF47").s().p("Am/IvQh4oZgCqxQISB3JehyQAWLFh8IQQj2BdjbAAQjvAAjQhtg");
	this.shape_17.setTransform(264.3923,242.156,1.1007,1.3189);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7E2D0").s().p("Ao1MUQgfokBunqQAhjjDihiIAAjiIgFgYIHDAGIgJAWIm1gEIG1AEIAADbQEjCHAoE1QAnE0gJJqQkqA5kWAAQkhAAkPg9gAjos5IgGgXIHSAHIgJAWgAjos5g");
	this.shape_18.setTransform(263.9175,50.155,1.1007,1.3189);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F5F7").s().p("AjoAXIAAg0IHSAAIAAA7g");
	this.shape_19.setTransform(263.3562,-64.7646,1.1007,1.3189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.text}]}).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(198.1,-386.3,132.50000000000003,717.5);


(lib.BubblesB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBOQgEgBgCgBIgCgCIgBgEIgBgCIAAgGIAAgEIAAgGIABgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAEAAIAIACIAKABQAGAAAIgBQAFgCAEgDIAGgFQADgEAAgDQABgEgBgEQgCgFgEgCIgJgDIgNgCIgNgEQgHgDgFgFQgFgEgCgJQgDgKABgKQACgKAGgIQAFgJAJgGQAKgGANgEIALgCIALgBIAJABIAFACQACABABADIAAAFIABAHIgBAHQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgFAAIgHgBIgIgBIgMACQgEABgDACQgEACgCAEIgDAFIABAHQABAFAEACIAKADIANACQAHACAGADQAHACAFAFQAFAFADAIQADALgCALQgCAKgGAJQgGAIgKAHQgKAHgOAEIgNACIgLABIgKgBg");
	this.shape.setTransform(102.09,175.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBOQgLAAgIgEQgJgEgFgIQgGgIgDgNIgEgUQgBgMABgKQABgMAEgLQAEgLAGgKQAHgKALgHQAKgIAPgEQAMgDAKAAQAKABAHADQAIAEAFAFQAEAGACAHQACAKgCAJQgCAJgIAJQgJAJgOAGQgOAHgUAFIgNAEIABAGIACAGQADAMAHAEQAHAEANgDIAQgGIANgGIAIgGIAFgDQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIACADIABAFIABAGIgBAHIgBAFIgGAFIgKAGIgOAGIgPAFQgMAEgJAAIgDAAgAADgwQgHACgFAEQgEAEgDAGQgEAFgBAHIgCAOIAMgDQALgDAHgEQAHgDAEgEQAEgEABgEQABgEgBgEQgBgGgFgCQgDgCgEAAIgHABg");
	this.shape_1.setTransform(88.9611,178.6747);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBqIgDgBIgCgCIgMjDIAAgDIADgDIAGgDIAIgCIAIgCIAFAAIADABIABACIANDDIAAADIgDADIgGACIgIADIgIACIgFAAg");
	this.shape_2.setTransform(78.275,178.4125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxBqQgEgBAAgDIgMjDIAAgDIADgCIAFgDIAJgDIAJgCIAFAAIADABIABADIADA1IABAHIAAAIIgBAHIAAAHQABgFAEgGQADgGAFgFIAMgKQAFgEAHgCQAIgCAHABQAHAAAFACQAFADAEAEIAHAJIAGAKIADALQADAJABALQABAKgBAMQAAALgDALQgDAMgGAJQgGAJgJAIQgIAHgNADQgMADgJgCQgKgCgJgIIAAALQAAADgDADQgEACgJACIgKADIgBgBgAAGgYQgGABgEAGQgGAFgEAIQgEAHgCALQgCAJABAKIABAVQAHAGAHACQAGACAIgCQAGgBAEgEQAEgFACgFQADgGACgGIABgPQAAgHgBgHQgBgGgCgHIgCgHIgEgGQgCgDgEgBIgDgBIgFABg");
	this.shape_3.setTransform(67.2825,182.5542);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxBqQgEgBAAgDIgMjDIAAgDIADgCIAFgDIAJgDIAJgCIAFAAIADABIABADIADA1IABAHIAAAIIgBAHIAAAHQABgFAEgGQADgGAFgFIAMgKQAFgEAHgCQAIgCAHABQAHAAAFACQAFADAEAEIAHAJIAGAKIADALQADAJABALQABAKgBAMQAAALgDALQgDAMgGAJQgGAJgJAIQgIAHgNADQgMADgJgCQgKgCgJgIIAAALQAAADgDADQgEACgJACIgKADIgBgBgAAGgYQgGABgEAGQgGAFgEAIQgEAHgCALQgCAJABAKIABAVQAHAGAHACQAGACAIgCQAGgBAEgEQAEgFACgFQADgGACgGIABgPIgBgOQgBgGgCgHIgCgHIgEgGQgCgDgEgBIgDgBIgFABg");
	this.shape_4.setTransform(52.0325,186.6042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaBTQgHgBgGgEQgFgDgEgHQgDgFgDgJIgCgJIgBgLIgFhRIAAgDIAEgDIAFgDIAIgBIAJgDIAGAAIACABIABACIAFBPIABAHIABAGIADAGIADAEIAFADIAFgBQAFgCAFgEQAFgGAFgIQADgJACgKQADgIgBgMIgEg5IABgDIADgDIAFgCIAJgDIAIgCIAGgBIACACQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIAICDIAAAEIgDACIgEACIgIACIgHACIgEAAIgDgBIgBgDIgBgVQgCAGgDAGQgEAHgFAFQgGAGgHAFQgFAEgIACQgHADgFgBIgGAAg");
	this.shape_5.setTransform(36.7625,192.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3BnQgDgBgBgHIgLinQAAgHADgEQADgDAFgBIAsgMQAPgEAKgBQALAAAJACQAIADAGAGQAFAGADAKQACAIAAAIQgBAIgCAHQgDAIgFAGQgFAHgHAEQAGAAAGABQAGACAFADQAFADAEAGQADAFACAHQACAHAAAIQABAHgDAIQgCAIgEAJQgFAHgIAIQgIAHgKAGQgMAFgPAFIgyANIgEABQgDAAgCgCgAgCAGIgZAHIAEA3IAZgHQAKgDAGgFQAGgEADgGQAEgGAAgGQABgHgCgGQgDgJgHgDQgEgCgFAAQgGAAgHACgAgMhGIgUAFIADAyIAVgFQAIgDAGgEQAFgFADgFQACgGAAgGQABgGgBgFIgEgHIgGgEQgDgBgEAAIgLACg");
	this.shape_6.setTransform(21.2506,195.0031);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E2E9EF").ss(1,1,1).p("Ao9l/IRxAAQA5GIg2F3Ix0AAQgnmAAnl/g");
	this.shape_7.setTransform(59.3543,184.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F5F7").s().p("Ao9GAQgnmAAnl/IRxAAQA5GIg2F3g");
	this.shape_8.setTransform(59.3543,184.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D6BF47").ss(1,1,1).p("AI3qXQAWLGh7IRQoADBmRjRQh4oagCqyQISB4Jehzg");
	this.shape_9.setTransform(59.1413,257.658);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F2F5F7").ss(1,1,1).p("ADpgdIAAA7InSgHIAAg0");
	this.shape_10.setTransform(58.2,24.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E7E2D0").ss(1,1,1).p("ADbsXIgJAWAjosdIAFAYIAADiQjiBighDjQhvHrAgIkAjus0IAGAXIHDAGAjjsFIG1AEIAADbQEkCHAnE2QAnE0gJJqADkstIgJAW");
	this.shape_11.setTransform(58.71,109.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6BF47").s().p("Am/IwQh4oagCqyQISB4JehzQAWLGh7IRQj3BdjbAAQjvAAjQhtg");
	this.shape_12.setTransform(59.1413,257.658);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F5F7").s().p("AjpAXIAAg0IHSAAIAAA7g");
	this.shape_13.setTransform(58.2,24.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7E2D0").s().p("Ao1MVQggokBvnrQAhjjDihiIAAjiIgFgYIHDAGIgJAWIm1gEIG1AEIAADbQEkCHAnE2QAnE0gJJqQkpA4kXAAQkiAAkOg8gAjos5IgGgXIHSAHIgJAWgAjos5g");
	this.shape_14.setTransform(58.71,111.9448);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E2E9EF").ss(1,1,1).p("AjphaIHSgHAjpBiIHSAA");
	this.shape_15.setTransform(58,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F2F5F7").ss(1,1,1).p("AjpBtIAAi8QC/g2ETAvIAADD");
	this.shape_16.setTransform(58,10.3243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F5F7").s().p("AjpBtIAAi8QC/g2EUAvInTAHIHTgHIAADDgADqhWg");
	this.shape_17.setTransform(58,10.3243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,120.7,327);


(lib.BartenderFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D26665").ss(0.4,1,1).p("AgOAAIAJABQAKABAKgC");
	this.shape.setTransform(332.8887,137.514,6.588,4.0871);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AABAMIgNgDIgNgFQgHgEADgHQAFgHAHAEIAKAHIAKAEQAMADAMgCQADAAABADQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgJADgLAAIgHAAg");
	this.shape_1.setTransform(356.6724,118.5119,6.5842,4.0853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AgbAJQgEgBABgEQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAMACAMgDIAKgEIAJgGQACgCAEAAQAEABACACQAFAGgGAFIgCABIgNAFIgNADIgHAAQgLAAgJgDg");
	this.shape_2.setTransform(311.3948,118.6523,6.5842,4.0853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#594128").s().p("AAFAHIgqACIAAgVIAmABQAIAAAGAGIAXASg");
	this.shape_3.setTransform(376.3696,73.5683,6.588,4.0871);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(366.4876,88.1798,6.588,4.0871);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#594128").s().p("AgOgFQAGgGAIAAIAmgBIAAAVIgqgCIghAGg");
	this.shape_5.setTransform(288.7491,73.5683,6.588,4.0871);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_6.setTransform(298.6311,88.1798,6.588,4.0871);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D26665").ss(0.5,1,1).p("AgJgeIAAA1IABADQABADADACQADABACgBIAKgC");
	this.shape_7.setTransform(336.0181,99.215,6.588,4.0871);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#594128").s().p("Ah9AVQACgoAwgOIAAAAIBXgbQBkAcAEgBQACAAAEAWIAEAUQgCAHgKAHQgVANgqABQgtABgpgTQgigPgNgRIgIAoQgIAXgUALQgIgTABgVg");
	this.shape_8.setTransform(330.8838,43.9392,6.5881,4.0874);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3A396").s().p("Ag0CWQgZgPgTglQgPgggGg6IgDgzQAAgeAPgeQAeg8BLAAQBNAAAeA8QAOAegBAeQAABhgYAwQgeA8hAACIgDAAQgeAAgVgOg");
	this.shape_9.setTransform(334.7279,90.9572,6.5881,4.0874);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D26665").ss(0.5,1,1).p("AAGgNQgFADgDAEQgHAJAJAL");
	this.shape_10.setTransform(249.1389,108.0218,6.5829,4.084);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D26665").ss(0.5,1,1).p("AgPgKIALAAQAMAEAIAR");
	this.shape_11.setTransform(248.1135,103.4977,6.5805,4.0827);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3A396").s().p("AAGAlQgYgFgHgeQgIgdASgHQAPgGAKAHQAGADADAFQABAQAIAoQgHAGgJAAIgGAAg");
	this.shape_12.setTransform(244.7744,105.2349,6.5854,4.0856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D26665").ss(0.5,1,1).p("AgFgNIAIAHQAHAJgJAL");
	this.shape_13.setTransform(420.368,108.0218,6.5829,4.084);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D26665").ss(0.5,1,1).p("AARgKQgFgBgHACQgMADgIAR");
	this.shape_14.setTransform(420.8514,103.3664,6.5805,4.0827);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3A396").s().p("AgbAfQAIgoACgQIAIgIQAKgHAPAGQASAHgHAdQgIAegYAFIgGAAQgJAAgHgGg");
	this.shape_15.setTransform(424.7756,105.2349,6.5854,4.0856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#594128").s().p("AiHAfQgDgPgCgSQgDgZADgNQAJgiAkAEIALgNQAPgQARgLQA2giA7AaQBBAeAOA3QACAHABALQAAARgDAUIgSBkIhainIhVAHQgHAGgJANQgSAZgLAkIgSBYg");
	this.shape_16.setTransform(333.697,53.2355,6.5881,4.0874);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#289DE5").s().p("Ag+A0IAnhEQAKgSAPgLIAUgPQAHgEAIAEIAUALQAIAFgCAJIgIA/QAAAFgFABQgFACgDgEIgrgtQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIg0BLg");
	this.shape_17.setTransform(377.3388,213.6514,6.5806,4.0827);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#289DE5").s().p("AALgMQgEgGgFAFIgrAtQgDAEgFgCQgEgBgBgFIgIg/QgCgIAIgGIAUgLQAIgEAHAEIAUAPQAPALAKASIAnBEIAAALg");
	this.shape_18.setTransform(293.9386,213.6514,6.5806,4.0827);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#007DDC").s().p("AiTAzIBUhlIA7BRIA1hRIBkBlg");
	this.shape_19.setTransform(341.446,224.3246,6.5847,4.0842);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#594128").s().p("Ag0AOIgdgpIAVAVQAcATAiAAQAfAAAcggQAOgRAHgQIgDAzQgNAygzAEIgEAAQgeAAghgng");
	this.shape_20.setTransform(335.0873,152.4445,6.5859,4.0859);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3A396").s().p("Ag5BpQgZgYAAgiIAAiwIClAAIAACwQAAAigYAYQgZAZgiAAQghAAgYgZg");
	this.shape_21.setTransform(335.4166,182.0258,6.5859,4.0859);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#005F99").ss(0.7).p("AgGCAIANkA");
	this.shape_22.setTransform(485.0208,347.6555,6.5832,4.0844);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#005F99").ss(0.7).p("AAHCAIgMkA");
	this.shape_23.setTransform(186.3085,347.6555,6.5832,4.0844);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#289DE5").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_24.setTransform(321.6256,439.5699,6.5805,4.0826);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_25.setTransform(321.6256,396.2941,6.5805,4.0826);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(321.6256,352.9162,6.5805,4.0826);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_27.setTransform(321.6256,309.5383,6.5805,4.0826);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_28.setTransform(321.6256,266.2625,6.5805,4.0826);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#005F99").ss(0.7).p("AAAkdIAAI7");
	this.shape_29.setTransform(337.7219,357.458,6.5832,4.0844);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#007DDC").s().p("AjSFSIggpdIClhHICbAAICkBHIgfJdg");
	this.shape_30.setTransform(335.7469,335.1982,6.5832,4.0844);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#007DDC").s().p("Ah9igQgHghATgcQATgbAigGQAfgFAaASQAZASAGAfIBkGXIiXApg");
	this.shape_31.setTransform(587.5406,523.6254,6.5805,4.0826);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3A396").s().p("AgKBFQgFgVgIgwIgNAfQgCAHgIgBQgIgBgBgHIgFgkQgCgXAHgUQAFgLAHgIIAGgFQgDgNAHgLQAHgLANgCIAMgCQALgCAKAHQAKAGADAMIAAABIAMAbQANAjADAhQAEAxgRAgQgOAbgUABQgNAAgLgug");
	this.shape_32.setTransform(630.709,666.8526,6.5805,4.0826);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3A396").s().p("AgKBLQgMgIgDgPIgThYQgDgPAIgNQAJgMAOgDQAPgDAMAIQAMAIAEAPIASBYQADAPgIANQgIAMgPADIgJABQgJAAgJgGg");
	this.shape_33.setTransform(622.7199,616.2653,6.5805,4.0826);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#007DDC").s().p("AATEzQgbgRgJggIh1nbQgHgiAUgdQAUgdAjgGQAggFAbATQAaATAHAgQAbCIBRFPQAHAegPAbQgQAbgeAJQgMADgLAAQgTAAgTgKg");
	this.shape_34.setTransform(517.5116,355.1632,6.5832,4.0844);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#007DDC").s().p("Ah+DXIBjmXQAHgfAYgSQAagSAfAFQAiAGATAbQATAcgHAhIhmGgg");
	this.shape_35.setTransform(85.5131,522.2254,6.5805,4.0826);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3A396").s().p("AgvBXQgRggAFgxQADghAMgjIAMgbIAAgBQADgMAKgGQAKgHALACIAMACQANACAHALQAHALgCANIAFAFQAHAIAFALQAIAUgDAXIgFAkQgBAHgIABQgHABgDgHIgNgfQgRBzgUAAQgUgBgOgbg");
	this.shape_36.setTransform(42.4083,665.4526,6.5805,4.0826);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3A396").s().p("AgQBQQgPgDgIgMQgIgNADgPIAThYQADgPAMgIQAMgIAPADQAPADAIAMQAIANgDAPIgTBYQgDAPgMAIQgJAGgJAAIgJgBg");
	this.shape_37.setTransform(50.1927,614.8653,6.5805,4.0826);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#007DDC").s().p("AhPE6QgegJgQgbQgQgbAIgeQBYlxAUhmQAHggAagTQAbgTAgAFQAjAGAUAdQAUAdgIAiIh1HbQgIAggbARQgSAKgUAAQgLAAgMgDg");
	this.shape_38.setTransform(155.7466,353.7632,6.5832,4.0844);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjjBzIAPjmIGkAAIAUDmg");
	this.shape_39.setTransform(337.0676,520.8502,6.5865,4.0861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BartenderFront, new cjs.Rectangle(1.7,0,669.9,713.7), null);


(lib.BartenderBottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DDC").s().p("AhOiHQgEgaAQgUQAPgVAagFQAagFAXARQAWARADAcIAfFfIiAAIg");
	this.shape.setTransform(-30.1437,34.2145,0.814,1.0968);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3A396").s().p("AgOBPQgVgUgKgoQgGgbAAgeIACgYIAAgBQgBgKAGgIQAGgIAKgBIAKgCQALgBAHAGQAJAHABAKIAGADQAHAEAHAIQALANAEATIAGAdQACAHgGACQgGADgEgFIgTgUQAHAlACATQADAngLAEIgHABQgMAAgOgOg");
	this.shape_1.setTransform(-27.1986,66.2689,0.814,1.0968);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3A396").s().p("AgNA9QgKgHgCgNIgIhKQgCgMAIgKQAHgKANgBQALgCAKAIQAKAIABAMIAJBKQACAMgIAKQgHAKgNABIgEAAQgJAAgIgGg");
	this.shape_2.setTransform(-28.9813,56.0226,0.814,1.0968);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007DDC").s().p("AhRD+QgZgIgLgYQgLgXAHgZQBXkaAbhjQAHgaAWgOQAXgOAbAFQAcAHAPAZQAPAZgIAcIh5GAQgHAagZAMQgOAHgOAAQgLAAgLgEg");
	this.shape_3.setTransform(-25.7655,-6.1173,0.8914,1.097);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D26665").ss(0.4,1,1).p("AgOAAIAJABQAKABAKgC");
	this.shape_4.setTransform(-0.175,-53.7607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D26665").ss(0.5,1,1).p("AgeAAIA9AA");
	this.shape_5.setTransform(-0.175,-55.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AABAMIgNgDIgNgFQgHgEADgHQAFgHAHAEIAKAHIAKAEQAMADAMgCQADAAABADQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgJADgLAAIgHAAg");
	this.shape_6.setTransform(3.4667,-57.5406);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgbAJQgEgBABgEQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAMACAMgDIAKgEIAJgGQACgCAEAAQAEABACACQAFAGgGAFIgCABIgNAFIgNADIgHAAQgLAAgJgDg");
	this.shape_7.setTransform(-3.4101,-57.5062);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#594128").s().p("AAFAHIgqACIAAgVIAmABQAIAAAGAGIAXASg");
	this.shape_8.setTransform(6.425,-68.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_9.setTransform(4.925,-64.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#594128").s().p("AgOgFQAGgGAIAAIAmgBIAAAVIgqgCIghAGg");
	this.shape_10.setTransform(-6.875,-68.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_11.setTransform(-5.375,-64.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D26665").ss(0.5,1,1).p("AgJgeIAAA1IABADQABADADACQADABACgBIAKgC");
	this.shape_12.setTransform(0.3,-62.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#594128").s().p("Ah9AVQACgoAwgOIAAAAIBXgbQBkAcAEgBQACAAAEAWIAEAUQgCAHgKAHQgVANgqABQgtABgpgTQgigPgNgRIgIAoQgIAXgUALQgIgTABgVg");
	this.shape_13.setTransform(-0.4803,-75.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3A396").s().p("Ag0CWQgZgPgTglQgPgggGg6IgDgzQAAgeAPgeQAeg8BLAAQBNAAAeA8QAOAegBAeQAABhgYAwQgeA8hAACIgDAAQgeAAgVgOg");
	this.shape_14.setTransform(0.1032,-64.2968);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D26665").ss(0.5,1,1).p("AAGgNQgFADgDAEQgHAJAJAL");
	this.shape_15.setTransform(-12.8581,-60.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D26665").ss(0.5,1,1).p("AgPgKIALAAQAMAEAIAR");
	this.shape_16.setTransform(-13,-61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3A396").s().p("AAGAlQgYgFgHgeQgIgdASgHQAPgGAKAHQAGADADAFQABAQAIAoQgHAGgJAAIgGAAg");
	this.shape_17.setTransform(-13.5353,-60.7926);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D26665").ss(0.5,1,1).p("AgFgNIAIAHQAHAJgJAL");
	this.shape_18.setTransform(13.1531,-60.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D26665").ss(0.5,1,1).p("AARgKQgFgBgHACQgMADgIAR");
	this.shape_19.setTransform(13.25,-61.2321);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3A396").s().p("AgbAfQAIgoACgQIAIgIQAKgHAPAGQASAHgHAdQgIAegYAFIgGAAQgJAAgHgGg");
	this.shape_20.setTransform(13.798,-60.7926);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#594128").s().p("AiHAfQgDgPgCgSQgDgZADgNQAJgiAkAEIALgNQAPgQARgLQA2giA7AaQBBAeAOA3QACAHABALQAAARgDAUIgSBkIhainIhVAHQgHAGgJANQgSAZgLAkIgSBYg");
	this.shape_21.setTransform(-0.0532,-73.5256);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#289DE5").s().p("Ag+A0IAnhEQAKgSAPgLIAUgPQAHgEAIAEIAUALQAIAFgCAJIgIA/QAAAFgFABQgFACgDgEIgrgtQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIg0BLg");
	this.shape_22.setTransform(6.6368,-34.2191);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#289DE5").s().p("AALgMQgEgGgFAFIgrAtQgDAEgFgCQgEgBgBgFIgIg/QgCgIAIgGIAUgLQAIgEAHAEIAUAPQAPALAKASIAnBEIAAALg");
	this.shape_23.setTransform(-6.0368,-34.2191);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#007DDC").s().p("AiTAzIBUhlIA7BRIA1hRIBkBlg");
	this.shape_24.setTransform(1.15,-31.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#594128").s().p("Ag0AOIgdgpIAVAVQAcATAiAAQAfAAAcggQAOgRAHgQIgDAzQgNAygzAEIgEAAQgeAAghgng");
	this.shape_25.setTransform(0.175,-49.2399);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3A396").s().p("Ag5BpQgZgYAAgiIAAiwIClAAIAACwQAAAigYAYQgZAZgiAAQghAAgYgZg");
	this.shape_26.setTransform(0.225,-42);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#005F99").ss(0.7).p("AgGCAIANkA");
	this.shape_27.setTransform(22.675,-1.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#005F99").ss(0.7).p("AAHCAIgMkA");
	this.shape_28.setTransform(-22.7,-1.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#289DE5").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_29.setTransform(-2.125,20.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_30.setTransform(-2.125,10.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_31.setTransform(-2.125,-0.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(-2.125,-11.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_33.setTransform(-2.125,-21.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#005F99").ss(0.7).p("AAAkdIAAI7");
	this.shape_34.setTransform(0.3,0.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#007DDC").s().p("AjSFSIggpdIClhHICbAAICkBHIgfJdg");
	this.shape_35.setTransform(0,-4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AjjBzIAPjmIGkAAIAUDmg");
	this.shape_36.setTransform(0.175,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-86.5,61.3,163);


(lib.Bartender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D26665").ss(0.4,1,1).p("AgOAAIAJABQAKABAKgC");
	this.shape.setTransform(-0.175,-104.6607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D26665").ss(0.5,1,1).p("AgeAAIA9AA");
	this.shape_1.setTransform(-0.175,-106.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AABAMIgNgDIgNgFQgHgEADgHQAFgHAHAEIAKAHIAKAEQAMADAMgCQADAAABADQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgJADgLAAIgHAAg");
	this.shape_2.setTransform(3.4667,-108.4406);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AgbAJQgEgBABgEQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAMACAMgDIAKgEIAJgGQACgCAEAAQAEABACACQAFAGgGAFIgCABIgNAFIgNADIgHAAQgLAAgJgDg");
	this.shape_3.setTransform(-3.4101,-108.4062);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#594128").s().p("AAFAHIgqACIAAgVIAmABQAIAAAGAGIAXASg");
	this.shape_4.setTransform(6.425,-119.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_5.setTransform(4.925,-115.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594128").s().p("AgOgFQAGgGAIAAIAmgBIAAAVIgqgCIghAGg");
	this.shape_6.setTransform(-6.875,-119.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#594128").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_7.setTransform(-5.375,-115.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D26665").ss(0.5,1,1).p("AgJgeIAAA1IABADQABADADACQADABACgBIAKgC");
	this.shape_8.setTransform(0.3,-113.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#594128").s().p("Ah9AVQACgoAwgOIAAAAIBXgbQBkAcAEgBQACAAAEAWIAEAUQgCAHgKAHQgVANgqABQgtABgpgTQgigPgNgRIgIAoQgIAXgUALQgIgTABgVg");
	this.shape_9.setTransform(-0.4803,-126.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3A396").s().p("Ag0CWQgZgPgTglQgPgggGg6IgDgzQAAgeAPgeQAeg8BLAAQBNAAAeA8QAOAegBAeQAABhgYAwQgeA8hAACIgDAAQgeAAgVgOg");
	this.shape_10.setTransform(0.1032,-115.1968);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D26665").ss(0.5,1,1).p("AAGgNQgFADgDAEQgHAJAJAL");
	this.shape_11.setTransform(-12.8581,-111);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D26665").ss(0.5,1,1).p("AgPgKIALAAQAMAEAIAR");
	this.shape_12.setTransform(-13,-112.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3A396").s().p("AAGAlQgYgFgHgeQgIgdASgHQAPgGAKAHQAGADADAFQABAQAIAoQgHAGgJAAIgGAAg");
	this.shape_13.setTransform(-13.5353,-111.6926);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D26665").ss(0.5,1,1).p("AgFgNIAIAHQAHAJgJAL");
	this.shape_14.setTransform(13.1531,-111);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D26665").ss(0.5,1,1).p("AARgKQgFgBgHACQgMADgIAR");
	this.shape_15.setTransform(13.25,-112.1321);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3A396").s().p("AgbAfQAIgoACgQIAIgIQAKgHAPAGQASAHgHAdQgIAegYAFIgGAAQgJAAgHgGg");
	this.shape_16.setTransform(13.798,-111.6926);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#594128").s().p("AiHAfQgDgPgCgSQgDgZADgNQAJgiAkAEIALgNQAPgQARgLQA2giA7AaQBBAeAOA3QACAHABALQAAARgDAUIgSBkIhainIhVAHQgHAGgJANQgSAZgLAkIgSBYg");
	this.shape_17.setTransform(-0.0532,-124.4256);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#289DE5").s().p("Ag+A0IAnhEQAKgSAPgLIAUgPQAHgEAIAEIAUALQAIAFgCAJIgIA/QAAAFgFABQgFACgDgEIgrgtQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIg0BLg");
	this.shape_18.setTransform(6.6368,-85.1191);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#289DE5").s().p("AALgMQgEgGgFAFIgrAtQgDAEgFgCQgEgBgBgFIgIg/QgCgIAIgGIAUgLQAIgEAHAEIAUAPQAPALAKASIAnBEIAAALg");
	this.shape_19.setTransform(-6.0368,-85.1191);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#007DDC").s().p("AiTAzIBUhlIA7BRIA1hRIBkBlg");
	this.shape_20.setTransform(1.15,-82.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#594128").s().p("Ag0AOIgdgpIAVAVQAcATAiAAQAfAAAcggQAOgRAHgQIgDAzQgNAygzAEIgEAAQgeAAghgng");
	this.shape_21.setTransform(0.175,-100.1399);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3A396").s().p("Ag5BpQgZgYAAgiIAAiwIClAAIAACwQAAAigYAYQgZAZgiAAQghAAgYgZg");
	this.shape_22.setTransform(0.225,-92.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#005F99").ss(0.7).p("AgGCAIANkA");
	this.shape_23.setTransform(22.675,-52.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#005F99").ss(0.7).p("AAHCAIgMkA");
	this.shape_24.setTransform(-22.7,-52.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#289DE5").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_25.setTransform(-2.125,-30.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(-2.125,-40.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_27.setTransform(-2.125,-51.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_28.setTransform(-2.125,-61.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#289DE5").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_29.setTransform(-2.125,-72.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#005F99").ss(0.7).p("AAAkdIAAI7");
	this.shape_30.setTransform(0.3,-50.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#007DDC").s().p("AjSFSIggpdIClhHICbAAICkBHIgfJdg");
	this.shape_31.setTransform(0,-55.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#007DDC").s().p("Ah9igQgHghATgcQATgbAigGQAfgFAaASQAZASAGAfIBkGXIiXApg");
	this.shape_32.setTransform(37.9808,-9.8543);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3A396").s().p("AgKBFQgFgVgIgwIgNAfQgCAHgIgBQgIgBgBgHIgFgkQgCgXAHgUQAFgLAHgIIAGgFQgDgNAHgLQAHgLANgCIAMgCQALgCAKAHQAKAGADAMIAAABIAMAbQANAjADAhQAEAxgRAgQgOAbgUABQgNAAgLgug");
	this.shape_33.setTransform(44.5408,25.2278);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3A396").s().p("AgKBLQgMgIgDgPIgThYQgDgPAIgNQAJgMAOgDQAPgDAMAIQAMAIAEAPIASBYQADAPgIANQgIAMgPADIgJABQgJAAgJgGg");
	this.shape_34.setTransform(43.3268,12.8369);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#007DDC").s().p("AATEzQgbgRgJggIh1nbQgHgiAUgdQAUgdAjgGQAggFAbATQAaATAHAgQAbCIBRFPQAHAegPAbQgQAbgeAJQgMADgLAAQgTAAgTgKg");
	this.shape_35.setTransform(27.3066,-51.1546);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#007DDC").s().p("Ah+DXIBjmXQAHgfAYgSQAagSAfAFQAiAGATAbQATAcgHAhIhmGgg");
	this.shape_36.setTransform(-38.0058,-9.8543);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3A396").s().p("AgvBXQgRggAFgxQADghAMgjIAMgbIAAgBQADgMAKgGQAKgHALACIAMACQANACAHALQAHALgCANIAFAFQAHAIAFALQAIAUgDAXIgFAkQgBAHgIABQgHABgDgHIgNgfQgRBzgUAAQgUgBgOgbg");
	this.shape_37.setTransform(-44.5562,25.2278);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3A396").s().p("AgQBQQgPgDgIgMQgIgNADgPIAThYQADgPAMgIQAMgIAPADQAPADAIAMQAIANgDAPIgTBYQgDAPgMAIQgJAGgJAAIgJgBg");
	this.shape_38.setTransform(-43.3732,12.8369);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#007DDC").s().p("AhPE6QgegJgQgbQgQgbAIgeQBYlxAUhmQAHggAagTQAbgTAgAFQAjAGAUAdQAUAdgIAiIh1HbQgIAggbARQgSAKgUAAQgLAAgMgDg");
	this.shape_39.setTransform(-27.3424,-51.1546);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjjBzIAPjmIGkAAIAUDmg");
	this.shape_40.setTransform(0.175,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bartender, new cjs.Rectangle(-50.7,-137.4,101.5,174.10000000000002), null);


(lib.BarTableFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332303").ss(2,1,1).p("EBx+gC0IAAHiIkXd5MjfVAAAMAAMglbEhqjgNPIIRr/IQ8pYIdrAAIjzKEMCpcAAAIAAVXEhuZgHoIADgFEhx9gCnIDVk0EhulgHgIDzlh");
	this.shape.setTransform(2212.225,900.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(10,1,1).p("EBwrgAGIABAAEBwrAAHIBhAAEhyLgAGMDhwAAA");
	this.shape_1.setTransform(2220.4,880.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E4128").s().p("Ehx1AinMAALglbIAfAAIACgNQAGgZASgdIgCAAIgCgEIADgEIgFgBIABgBIgBAAIBaiQQACgDACgCIABAAIAIgHIAMgIIAWgkIAAgBQADgQAKgOIADgFQAIgLATgTQAMgPATgfIATgXQADgEAOgbQATglAYgQIBrirIIQr/IQ8pYIdrAAIjyKEMCpbAAAIAAVXIgBAAIAAANIAAAKIABAAIAAHiIkWd5gEBwvgDLMjhwAAAg");
	this.shape_2.setTransform(2212.975,900.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarTableFront, new cjs.Rectangle(1481.9,678,1474.2999999999997,445), null);


(lib.BarBGBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(5,1,1).p("EBTaAjwIRnSNEBTaAjwMAAAhZsEhlAAjwMC4aAAA");
	this.shape.setTransform(853,645.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(16,2,1).p("EAKAgggIAANxILQAAAKAQ4ILQAAAKAyvMAAAAjnA1QyvIfQAAA1QQ4IfQAAIAAPo");
	this.shape_1.setTransform(972.2,655.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#332303").ss(16,1,1).p("EgVQgggIfQAAILQAAIAANxMAAAAjnIAAPoIrQAAI/QAAIAAvoMAAAgjng");
	this.shape_2.setTransform(972.2,655.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#996633").ss(5,2,1).p("EBqlADYI4bm1Mi80AAA");
	this.shape_3.setTransform(860.9906,322.7656);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#866D5A").s().p("EAKAAggIAAvnI/PAAIfPAAIAAPnI/PAAIAAvnMAAAgjoIAAtwIfPAAILRAAIAANwIrRAAIAAtwIAANwILRAAMAAAAjoIrRAAMAAAgjoI/PAAIfPAAMAAAAjoILRAAIAAPngAKAyvg");
	this.shape_4.setTransform(972.2,655.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4B5A1").s().p("EiKaBaZItagOMAAAiW9QBQhVAriRIABgIQBgg0BIh8QBAhuA4izIBYlBQA0jAAyh3QBEieBVhSQBBg/BbghQA8gUBsgTQK0hzNmgmQIKgXQVgDMAmigAFQLrgCF2AMQJuAUHwBCQFMAtOMC2QMMCdHOAmQESAYFcAEQC3ACG3gEQPogKakAAQFFAACiAIQENAODXAtQFtBOFnDEQFfC9FKEnQEODwC3EBQCqDxCiFgQB3EACcGfQCXGSBjEuQB+GEBTFcQCLJMAqJWQAtJ0hCJLQhFJli7IWQjDIokjF5QhgB9iQCUIj5D9QnAHQmEI/QijDxhGBTQiKCjiEAqQhdAdiUgVQjMgdgoAAQhyABhdBCQhsgRhNBlQg3BHgaB6QgMA4gFA7gEBSdBAfIxnyNMAAAhZsMAAABZsMi4ZAAAMC4ZAAAgA1LmtMAAAAjnIAAPoIfQAAILQAAIAAvoMAAAgjnIAAtxIrQAAI/QAAgEBA2graIYcG1I4cm1Mi8zAAAgEBA2AuSg");
	this.shape_5.setTransform(971.7163,578.5357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarBGBack, new cjs.Rectangle(0,0,1943.5,1157.1), null);


(lib.BarBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(1,1,1).p("EhO5AQ7IiogEEhoOA44MAPCgn2IKTgHEhZYg43MAAABJrIH3ADMBjdgACEBoPAQ7Mi3IAAA");
	this.shape.setTransform(875.65,505.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(15,2,1).p("AAA0BIAAUdIAATmA9iAmIdigKId2gJA/a0BIfaAAIfbAA");
	this.shape_1.setTransform(894.1,344.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#332303").ss(10,1,1).p("Afb0TIAAUTIAATwI/bAAI/aAAMAAAgoDAfbUUI/bAAI/aAA");
	this.shape_2.setTransform(894.1,346.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(10,1,1).p("Ad2qJIBlAAAAAJmIAAAkA/aKKIAAgkAfbJmIAAAk");
	this.shape_3.setTransform(894.1,411.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CAE4F7").s().p("AAAUUIAAgkIAAAkI/ZAAIAAgkIfZAAIfaAAIAAAkgAfaTwI/aAAI/ZAAMAAAgoDIfZAAIAAUdI9iAJIdigJIAATmIAAzmId2gKIBkAAIhkAAI92AKIAA0dIfaAAIAAUTIAATwgA/ZTwgAAAAKgAAA0Tg");
	this.shape_4.setTransform(894.1,346.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4B5A1").s().p("Eg/3BPtQkeggljhEQjRgnmshcQtdi6mzhlQrOimo5igQgzh+gCiLQgCiLAviAQA7igBvgzQAvgWBEgFQAagCBgAAQAZAAAXgCQAWAGAWADQBEAHBAgWQBDgYArgyQAtgzALhFQALhGgeg8QgZgxg4gsIgJgGMAPCgn2IKTgHIiogEMBjcgACMhjcAACIn3gDMAAAhJrMAAABJrIH3ADICoAEIqTAHMgPCAn2QgggYhBgmQnPkRlOmVQjVkDiIkcQhXi1g4i/QgsiVggi2QgYiHgZjJQhTqcgKpCIgBgiQgCirAGh/QAKizAciVQAThfAhh0QAUhHAriJII48PIhWgBQArg6A1gyQASgRATgQQBBg4Bdg4QA3giBzg9QEnidCXhHQBSgmCCg4QBfgpA7gTQBWgcBKgIQBSgICoAHQCUgCBTg2IACgBQA/gpAhhHIABgEQBLgZA4g9QAyg2AshXIBFidQAohdAog6QA1hOBCgoQAzgeBHgQQAvgKBUgJQIeg5KogSQGYgLMxgCIeIgCQJIgBEkAGQHlAJGEAhQEDAWLHBYQJiBNFpATQDWALEQACQCQABFWgCQMOgFUyAAQD9AAB/AEQDTAHCnAWQEeAmEZBgQESBcECCQQDTB1CPB+QCFB1B/CsQBcB9B6DLQB3DEBNCTQBjC+BACqQBtEfAhEjQAjEzgzEfQg2EriTEFQiYENjkC4QhLA9hwBJIjDB7QleDjkwEXQh/B2g2AoQhtBQhnAUQhIAPh0gLQiggOgfAAQhZABhJAgQhUgIg8AxQgrAjgVA7QgJAbgEAdMi3HAAAMC3HAAAQgDAdACAeQADA1AUA8QAOAqAdBDQCJE0DWFqQCCDbERGoIKGPnQAzBPAXApQAnBEAVA7QAoBugEB1QgDB3gxBoQgfBEg4BHQgoAzhFBIQkBEOj5CwQknDQktBZQigAwjHAYQiRASjeAKQkTANlYAEQjPACmcAAQvDgBnigCQongCjnADQm1AFlYAYQkHASokA8QoVA6kVASQk7AVnHAFQoCADkBAEQsDAWmCADIiBABQpLAAm1gygEgl3gOJIAAAlIfaAAIfaAAIAAglIAAzwIAA0UI/aAAI/aAAgEha3AHtg");
	this.shape_5.setTransform(935.4525,563.6974);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#675B43").s().p("EhDSBW2QkugsnuhwQpWiIjEglInWhRQkYgxi7gwQhegYlshuQkZhVi1ghQjvgsgtgMQiegshahUQh3hwgxjgQgzjmAgjtQAgjtBujQQBLiOBbhJQArgiA3gbQitiZiciqQm5nkjKoCQglhcgcheQgqiIggimQgZh9gbi1Qhur4gLr9IgBgzQgCjGAHiLQAJi3AbiXQAXh7AriXQAahYA7i2ICCmNIAXhEIDiqwQgrgigbgyQgbg0gCg4QgDg6AVhCQAQgxAjhEQAdg3Ahg1QCZj8DkjDQBzhiBug9QAzgcBegrQBogvAqgWQAtgXBTgyQBWgyAqgXQBAghBVgjQAxgVBngnQCDgyBGgWQBxgjBfgKQAogEBngDQBbgDA0gIQAhgFBDgNIAFAAQATg+AphHQAegzBAhiQAzhTBkirQBdiOBohDQBTg2B5gcQBQgSCNgOQJRg7LogTQHEgMN5gCIaigDQLGgCFqAJQJSAPHaAxQCoASJpBRQHkBAEuATQC7ALDrADQCNACEagBMAj3gAIQEhgBCQAFQDwAIC+AbQH/BKIlEIQC2BXCMBXQCmBnCAByQCSCBCMC2QBuCNCDDQQCwEXB2DtQCNEcBPEKQCXH9g0IJQg3IdkJGzQh0C+iaCkQiaCli3CAQhKA0j8CYQjNB7hwBdQhCA3hhBfQiDCBgcAaQjBCzioA5QhmAjiGAHQhAAEhngDQAlBWA2BjQAkBDBRCJQEbHjCTDtQD1GMDZEuQCXDUAoA9QBmCeAyCHQBRDagPDuQgPDuhuDMQhQCViQCaQhaBfi8CmQiEB2hGA6QhzBfhjBCQm2EmqMBiQkBAmlEAMQjDAImFAAQxsABo2gFQqWgGi0AAQnbACltAYQkXASobA6QooA6kJATQlLAWnWAJQoVAHkLAFQtgAcmvABIgbAAQrUAAoahQgEh17A2cQhgAAgaACQhEAGgvAVQhvAzg7CgQgvCAACCLQACCMAzB+QI5CfLOCnQGzBlNdC5QGsBcDRAoQFjBDEeAhQHlA3KcgGQGCgDMDgWQEBgEICgEQHHgFE7gUQEVgSIVg6QIkg8EHgSQFYgYG1gGQDngDInACQHiACPDABQGcABDPgCQFYgEETgNQDegLCRgRQDHgZCggvQEthaEnjQQD5ivEBkOQBFhIAog0QA4hHAfhEQAxhnADh3QAEh1gohuQgVg7gnhFQgXgpgzhPIqGvnQkRmniCjbQjWlriJk0QgdhCgOgqQgUg9gDg0QgCgfADgcQAEgdAJgbQAVg8ArgjQA8gxBUAIQBJggBZAAQAfAACgAOQB0AKBIgOQBngVBthPQA2gpB/h1QEwkYFejiIDDh8QBwhIBLg9QDki4CYkOQCTkEA2ksQAzkegjkzQghkkhtkfQhAiqhji9QhNiUh3jEQh6jKhch9Qh/isiFh2QiPh9jTh1QkCiQkShdQkZhfkegmQingWjTgHQh/gEj9AAQ0yAAsOAFQlWACiQgBQkQgCjWgMQlpgTpihMQrHhZkDgWQmEggnlgKQkkgGpIABI+IADQsxABmYALQqoAToeA4QhUAJgvAKQhHAQgzAfQhCAog1BNQgoA6goBeIhFCdQgsBXgyA2Qg4A8hLAaIgBADQghBHg/AqIgCABQhTA2iUABQiogGhSAIQhKAHhWAdQg7AThfAoQiCA4hSAnQiXBHknCdQhzA9g3AhQhdA4hBA5QgTAQgSARQg1AygrA6IBWAAIo4cQQgrCJgUBHQghBzgTBfQgcCWgKCzQgGB+ACCrIABAiQAKJCBTKcQAZDJAYCHQAgC3AsCUQA4DABXC0QCIEdDVECQFOGVHPERQBBAnAgAXIAJAHQA4ArAZAyQAeA7gLBHQgLBFgtAzQgrAxhDAYQhAAXhEgIQgWgCgWgGQgXABgZAAg");
	this.shape_6.setTransform(935.2533,563.7406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarBG, new cjs.Rectangle(0,0,1870.5,1127.5), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_WalkingCostumer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// WalkingCostumer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332303").ss(11,2,1).p("ADHYPMgELggtIjA3WAEFf1Ig6nF");
	this.shape.setTransform(-59.2008,384.1992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(7,2,0,3).p("AIEsOIkSBjQAkOxBJN7ADU9gQAHJlAXJQIsOEZAkMa4QBNIHIVwtQAEgIAFgJIC7ko");
	this.shape_1.setTransform(-12.0251,370.1322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#332303").ss(10,1,1).p("EgJ6griQGUAGIbABQBAAADhgCIAPRVIAWZnIAAIDQhFDUhACrQAAABAAAAUgV4A4iAMSgx9");
	this.shape_2.setTransform(-21.775,459.1809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#996600").ss(2,1,1).p("A9fhPIAAgBAS57iIgNABAi9XTQAAgBAGgFQAKgJAcgVQgcATgPAJQgEACgCABQgIAFgBAAIgBAAQj/H9toDlEAaEgi0IDcHP");
	this.shape_3.setTransform(1128.375,598.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#332303").ss(2,1,1).p("EBnggbkIAAK8UgqYgAOgdvAABEAntgbrIBDgBIBIACIiLgBIm1gCQgFAAgFAAItFgHQCJCbJBIQIFsFmIKgKUIBuBrEBevgbgIAbgBIAiAAEAowgbsMAlIAAHIRfADIKogDEAu+gBQIaVYjIA5AKIABAAIA0gkEBJHAW8IAUASIAGAFEgFqgi0IAARwEgFqgi0MA9VBFpEgFqgi0MBsNAAAEhp5gIvIgBgEIgEgc");
	this.shape_4.setTransform(638.9375,598.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#866D5A").s().p("AhwUHIg6nFIgBgEIABACQAZCnBJAAIAAAAIADAAQCXgHFeq5IAGgNIACgDIAIgQIC7koIAAIDQhFDUhACrIAAABQrneBh/AAQhxAAFx3cgAhIPnQhJAAgZinIgBgCIgDgdMgENggtIMOkaQAkOzBJN6IgIAQIgCADIgGANQleK5iXAHIgDAAIAAAAgAHAEHIAAAAgAFT4mIsOEaIi/3WQGUAGIbABIEhgCIAPRVIAWZnIi7EoQhJt6gkuzgAFT4mIEShiIkSBiQgWpQgIplQAIJlAWJQgAJ7ghg");
	this.shape_5.setTransform(-21.775,459.1809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E4128").s().p("EgCUAmgQoJo7hrGpMgrsg7zIAAxvMA9VBFoMg9VhFoMBsNAAAIDcHOIqoAEIxfgEMglHgAHIBIADIiLgCIm1gBIgKAAItFgIQCJCbJBIQIFsFmIKgKUIBuBsIhuhsIgBgBIaUYjIA5AKIg5gKIAIgFIAGAGIAGgHQASAJAUAHIgBAAQgxgCgJgIIABAAIgBAAQj/H9toDlQANNBjuAAQhvAAili1gEgKcgiMIBDgBg");
	this.shape_6.setTransform(959.925,640.1986);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#675B43").s().p("A+xCjQpAoQiKiaINFAHIAKAAIG1ACICLABIhIgCMAlHAAHIAAAJIIkgBIDjgBIAlAAIELgDIA9AAIH0gDIAAK7UgqWgAOgdvAABIFFFRg");
	this.shape_7.setTransform(1033,472.425);

	this.instance = new lib.BarBG();
	this.instance.setTransform(696.4,411.15,1,1,0,0,0,935.3,563.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_SurprisedCostumerBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SurprisedCostumerBackground
	this.instance = new lib.BarBGBack();
	this.instance.setTransform(759.7,317.9,1,1,0,0,0,971.7,578.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_SideBartender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SideBartender
	this.instance = new lib.SideBartender("synched",0);
	this.instance.setTransform(1015.9,473.65,1.2452,1.0621,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ShockedCostumer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ShockedCostumer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(0.4).p("AAUAAIgmAA");
	this.shape.setTransform(723.5333,103.6501,3.4801,3.4801,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AgOADIAKgEQAKgDAJAH");
	this.shape_1.setTransform(666.8952,102.6024,3.4801,3.4801,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABAAAQAAAagTATQgTATgaAAQgaAAgTgTQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAag");
	this.shape_2.setTransform(639.4026,103.7371,3.4801,3.4801,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AjfAAQAABcBCBCQBCBCBcAAQBcAABDhCQBAhCAAhcQAAhchAhCQhDhBhcAAQhcAAhCBBQhCBCAABcg");
	this.shape_3.setTransform(692.1192,98.0334,0.9966,0.9966);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AAKALIgyACIgBgcIAvABQAJAAAIAHIATAXg");
	this.shape_4.setTransform(642.5354,77.321,3.484,3.484,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgMAFIgkgEIAbgSQAKgEAJACIA0ANIgIAbg");
	this.shape_5.setTransform(697.3711,79.3042,3.4837,3.4837,0,14.9865,-165.0135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D26665").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_6.setTransform(665.8784,166.6379,3.484,3.484,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D26665").ss(0.5,1,1).p("AgQgLIAhAX");
	this.shape_7.setTransform(646.5421,111.1304,3.484,3.484,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D26665").ss(0.5,1,1).p("AASgLIgkAX");
	this.shape_8.setTransform(689.0472,111.1304,3.484,3.484,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_9.setTransform(644.1032,102.001,3.484,3.484,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(692.0957,102.001,3.484,3.484,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D26665").ss(0.7,1,1).p("AAQgjIAAA5QAAADAAACQgCAFgFACQgFACgEgBIgPgE");
	this.shape_11.setTransform(665.8784,115.6551,3.484,3.484,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABcATQgaAJgbAFQgaAFgQgBQgRgBgWAAQgWABgbgDQgbgDApghQApgiAiAAQAgAAAtAXQAsAXgbAJg");
	this.shape_12.setTransform(672.013,146.8613);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#38141F").s().p("AgDAlQgRgBgWAAQgWABgbgDQgbgDApghQApgiAiAAQAgAAAtAXQAsAXgbAJQgaAJgbAFQgVAEgPAAIgGAAg");
	this.shape_13.setTransform(672.013,146.8613);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1A1A").s().p("ABrAgQg1AShVgVQg3gNg6gZQgBA5gbBiQgQhpAbg6IgBAAQgGgUAGgYQAMgwBAgRIAFABQAFAEAAALQA1gZA6gIQBHgJAlAaQAwAigPA1QgIAagSATIgOAMQAMA5gLBHQgVhBgJgxg");
	this.shape_14.setTransform(671.1635,52.5367,3.4848,3.4848,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3A396").s().p("AhBDdQgdgTgUgcQgUgdgGgiQgQhTgChaQgDgtARgsQAkhYBrACQBqACAmBXQASArgCArQAABZgTBVQgHAggSAaQgTAbgbASIgHAEQgdATgiAAIgBAAQgiAAgdgRg");
	this.shape_15.setTransform(677.5554,100.9381,3.4848,3.4848,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D26665").ss(0.7,1,1).p("AAIgRIgKAKQgJALALAO");
	this.shape_16.setTransform(741.9315,110.1102,3.4618,3.4618,0,15.1721,-164.8279);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D26665").ss(0.7,1,1).p("AgUgNIAOABQAQAFALAV");
	this.shape_17.setTransform(743.9204,104.9084,3.4446,3.4446,0,15.1914,-164.8086);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3A396").s().p("AgXAVQghg4AcgUQAWgRAVASQAKAJAGANIALAlIgEAqIACAMIgDABQgHAEgHAAQgWAAgYgrg");
	this.shape_18.setTransform(745.7267,109.5906,3.4816,3.4816,0,14.9981,-165.0019);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E88E85").s().p("AgmA5IgDgBIAMgyIAFgpIASgTQAUgQASATQAXAWgjA1QgYAngTAAQgIAAgHgGg");
	this.shape_19.setTransform(626.4642,110.3959,3.4717,3.4717,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1A1A").s().p("Ai6gOQgJgxArgiQAlgcAsAAICnAAQAtAAAbAdQAgAjgSA4IgPB6IlJAIg");
	this.shape_20.setTransform(682.6846,74.1103,3.4848,3.4848,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1A1A1A").s().p("AhIACIgmhMIAcAqQAmApAuAAQAqAAAlgmQATgTAKgUIABAVQAAAagFAVQgTBFhEAGIgEAAQgpAAguhJg");
	this.shape_21.setTransform(684.0526,175.8983,3.4656,2.3385,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3A396").s().p("AhOCPQghghAAgvIAAjtIDfAAIAADtQAAAvggAhQgiAgguAAQguAAggggg");
	this.shape_22.setTransform(684.3991,191.2508,3.4656,2.3385,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3A396").s().p("AgBAvQhQAAgigkQgLgKgFgMIgDgLIA4gYICdAAIA3AYQgBASgRAPQgjAkhRAAg");
	this.shape_23.setTransform(681.162,216.4784,5.2995,2.9422);

	this.instance = new lib.torso();
	this.instance.setTransform(691.5,308.75,5.3039,2.9454,0,0,0,28.3,35.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3A396").s().p("AAnE3QgWgNgIgZIiLnqQgHgjAUgdQAUgeAjgFQAhgFAbATQAaATAGAgIBlHuQAFAYgMAVQgNAVgYAHQgJACgJAAQgPAAgPgHg");
	this.shape_24.setTransform(808.2382,315.2812,5.2947,2.9379,8.1495);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3A396").s().p("AhhimQgJgbAPgYQAPgZAcgFQAagEAVAPQAUAPAFAZIBOGtIhIAQg");
	this.shape_25.setTransform(852.2857,468.2911,5.2687,2.9264,8.2811);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3A396").s().p("AgXAAIgNAfQgDAHgHAAQgIgBgBgIIgFgkQgDgYAIgTQAFgMAHgHIAFgGQgDgMAIgLQAHgLANgDIAMgCQALgCAKAHQAKAHADALIAAABIAMAcQANAiADAiQAEAygRAgQgOAbgUAAIAAAAQgUAAgRhzg");
	this.shape_26.setTransform(874.1885,567.4413,5.2687,2.9264,8.2811);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3A396").s().p("AhWE8QgYgHgMgVQgNgVAFgYIBlnuQAGggAagTQAcgTAgAFQAjAFAUAeQAUAdgHAjIiLHqQgHAZgXANQgPAHgPAAQgJAAgJgCg");
	this.shape_27.setTransform(539.5691,319.1173,5.2957,2.9384,-6.6277);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3A396").s().p("AhlDpIBOmtQAFgZAUgPQAVgPAaAEQAcAFAPAZQAPAYgIAbIiAGfg");
	this.shape_28.setTransform(506.6286,471.9017,5.2602,2.929,-6.7625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3A396").s().p("AgNBzQgUAAgOgbQgRggAEgyQADgiANgiIAMgcIAAgBQADgLAKgHQAKgHALACIAMACQANADAHALQAIALgDAMIAGAGQAHAHAEAMQAIASgDAZIgFAkQgBAIgIABQgHAAgDgHIgNgfQgIAxgFAUQgLAugNAAIAAAAg");
	this.shape_29.setTransform(482.0685,570.5309,5.2602,2.929,-6.7625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABvAOQgMANgfAGQgfAGgVAEQgVAEgfgEQgggFgfgHQgggHAyghQAygjAgAAQAhAAAsAXQAsAWgLANg");
	this.shape_30.setTransform(672.749,148.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#38141F").s().p("AgkAqQgggEgfgHQgggHAygiQAygiAgAAQAhAAAsAXQAsAWgLANQgMANgfAGIg0AKQgKACgLAAQgOAAgRgDg");
	this.shape_31.setTransform(672.749,148.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3A396").s().p("AkTFNQhxhNAAhsIAAosIMJAAIAAIsQAABshzBNQhxBMihAAQigAAhzhMg");
	this.shape_32.setTransform(684.375,191.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABzASQgIAWgmAHQgnAGgTgBQgTgBglgDQglgDgZgOQgZgPAyghQAygiAhAAQAhAAAtAXQAsAYgIAWg");
	this.shape_33.setTransform(669.7735,148.5569);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#38141F").s().p("AALA0Ig4gEQglgDgZgOQgZgPAyghQAygiAhAAQAhAAAtAXQAsAYgIAWQgIAWgmAHQgiAFgTAAIgFAAg");
	this.shape_34.setTransform(669.7735,148.5569);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3A396").s().p("AgHCKQmrgBi0hnQg6gfgbglIgNghIEphGIM/AAIEpBGQgFA0hdAxQi6BnmqABg");
	this.shape_35.setTransform(681.9293,217.3299,0.9998,0.9998);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1A1A1A").s().p("AhPgcQAcgYAdAAICogEIgBBkIizgHIhvAUg");
	this.shape_36.setTransform(640.9844,75.8497,0.9994,0.9994);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AB0ASQgFAagsAGQgtAGgPAAQgPAAgkgEQgkgEgbgSQgagSAyghQAygiAhAAQAhAAAtAXQAsAYgGAag");
	this.shape_37.setTransform(671.2409,149.2629);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#38141F").s().p("AgsA0QgkgEgbgSQgagSAyghQAygiAhAAQAhAAAtAXQAsAYgGAaQgFAagsAGQgtAGgPAAIgCAAQgOAAgjgEg");
	this.shape_38.setTransform(671.2409,149.2629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29,p:{scaleX:5.2602,scaleY:2.929,rotation:-6.7625,x:482.0685,y:570.5309,skewX:0,skewY:0}},{t:this.shape_28,p:{scaleX:5.2602,scaleY:2.929,rotation:-6.7625,x:506.6286,y:471.9017,skewX:0,skewY:0}},{t:this.shape_27,p:{scaleX:5.2957,scaleY:2.9384,rotation:-6.6277,x:539.5691,y:319.1173}},{t:this.shape_26,p:{scaleX:5.2687,scaleY:2.9264,rotation:8.2811,x:874.1885,y:567.4413,skewX:0,skewY:0}},{t:this.shape_25,p:{scaleX:5.2687,scaleY:2.9264,rotation:8.2811,x:852.2857,y:468.2911,skewX:0,skewY:0}},{t:this.shape_24,p:{scaleX:5.2947,scaleY:2.9379,rotation:8.1495,x:808.2382,y:315.2812}},{t:this.instance,p:{regX:28.3,scaleX:5.3039,scaleY:2.9454,x:691.5,y:308.75,regY:35.4}},{t:this.shape_23,p:{scaleX:5.2995,scaleY:2.9422,x:681.162,y:216.4784}},{t:this.shape_22,p:{scaleX:3.4656,scaleY:2.3385,x:684.3991,y:191.2508}},{t:this.shape_21,p:{scaleX:3.4656,scaleY:2.3385,x:684.0526,y:175.8983}},{t:this.shape_20,p:{scaleX:3.4848,scaleY:3.4848,x:682.6846,y:74.1103}},{t:this.shape_19,p:{scaleX:3.4717,scaleY:3.4717,x:626.4642,y:110.3959}},{t:this.shape_18,p:{scaleX:3.4816,scaleY:3.4816,x:745.7267,y:109.5906,skewX:14.9981,skewY:-165.0019}},{t:this.shape_17,p:{scaleX:3.4446,scaleY:3.4446,skewX:15.1914,skewY:-164.8086,x:743.9204,y:104.9084}},{t:this.shape_16,p:{scaleX:3.4618,scaleY:3.4618,skewX:15.1721,skewY:-164.8279,x:741.9315,y:110.1102}},{t:this.shape_15,p:{scaleX:3.4848,scaleY:3.4848,x:677.5554,y:100.9381}},{t:this.shape_14,p:{scaleX:3.4848,scaleY:3.4848,x:671.1635,y:52.5367}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{scaleX:3.484,scaleY:3.484,x:665.8784,y:115.6551}},{t:this.shape_10,p:{scaleX:3.484,scaleY:3.484,x:692.0957,y:102.001}},{t:this.shape_9,p:{scaleX:3.484,scaleY:3.484,x:644.1032,y:102.001}},{t:this.shape_8,p:{scaleX:3.484,scaleY:3.484,x:689.0472,y:111.1304}},{t:this.shape_7,p:{scaleX:3.484,scaleY:3.484,x:646.5421,y:111.1304}},{t:this.shape_6,p:{scaleX:3.484,scaleY:3.484,x:665.8784,y:166.6379}},{t:this.shape_5,p:{scaleX:3.4837,scaleY:3.4837,x:697.3711,y:79.3042,skewX:14.9865,skewY:-165.0135}},{t:this.shape_4,p:{scaleX:3.484,scaleY:3.484,x:642.5354,y:77.321}},{t:this.shape_3,p:{scaleX:0.9966,scaleY:0.9966,x:692.1192,y:98.0334}},{t:this.shape_2,p:{scaleX:3.4801,scaleY:3.4801,x:639.4026,y:103.7371}},{t:this.shape_1,p:{scaleX:3.4801,scaleY:3.4801,x:666.8952,y:102.6024}},{t:this.shape,p:{scaleX:3.4801,scaleY:3.4801,x:723.5333,y:103.6501}}]},172).to({state:[{t:this.shape_29,p:{scaleX:5.2764,scaleY:2.9299,rotation:-6.7763,x:483.1384,y:566.1036,skewX:0,skewY:0}},{t:this.shape_28,p:{scaleX:5.2764,scaleY:2.9299,rotation:-6.7763,x:507.7814,y:467.4244,skewX:0,skewY:0}},{t:this.shape_27,p:{scaleX:5.2964,scaleY:2.9388,rotation:-6.629,x:544.7932,y:318.127}},{t:this.shape_26,p:{scaleX:5.2652,scaleY:2.9276,rotation:8.2521,x:868.0174,y:566.062,skewX:0,skewY:0}},{t:this.shape_25,p:{scaleX:5.2652,scaleY:2.9276,rotation:8.2521,x:846.095,y:466.8805,skewX:0,skewY:0}},{t:this.shape_24,p:{scaleX:5.2963,scaleY:2.9387,rotation:8.1523,x:804.9026,y:315.8859}},{t:this.instance,p:{regX:27.9,scaleX:5.3042,scaleY:2.9456,x:688,y:309.25,regY:35.4}},{t:this.shape_23,p:{scaleX:5.3001,scaleY:2.9423,x:683.3442,y:217.6288}},{t:this.shape_32},{t:this.shape_21,p:{scaleX:3.4659,scaleY:2.3327,x:684.0966,y:176.1599}},{t:this.shape_20,p:{scaleX:3.485,scaleY:3.485,x:682.9307,y:74.6641}},{t:this.shape_19,p:{scaleX:3.4719,scaleY:3.4719,x:626.7072,y:110.9515}},{t:this.shape_18,p:{scaleX:3.4652,scaleY:3.4652,x:746.071,y:110.119,skewX:14.9981,skewY:-165.0019}},{t:this.shape_17,p:{scaleX:3.4306,scaleY:3.4306,skewX:15.0051,skewY:-164.9949,x:744.5542,y:105.6612}},{t:this.shape_16,p:{scaleX:3.446,scaleY:3.446,skewX:14.998,skewY:-165.002,x:742.5911,y:110.7883}},{t:this.shape_15,p:{scaleX:3.485,scaleY:3.485,x:677.8013,y:101.4933}},{t:this.shape_14,p:{scaleX:3.485,scaleY:3.485,x:671.4091,y:53.0893}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_11,p:{scaleX:3.4842,scaleY:3.4842,x:667.2742,y:116.2106}},{t:this.shape_10,p:{scaleX:3.4842,scaleY:3.4842,x:693.4927,y:103.8055}},{t:this.shape_9,p:{scaleX:3.4842,scaleY:3.4842,x:645.498,y:103.8055}},{t:this.shape_8,p:{scaleX:3.4842,scaleY:3.4842,x:690.444,y:112.9355}},{t:this.shape_7,p:{scaleX:3.4842,scaleY:3.4842,x:647.9369,y:112.9355}},{t:this.shape_6,p:{scaleX:3.4842,scaleY:3.4842,x:667.2742,y:167.196}},{t:this.shape_5,p:{scaleX:3.4839,scaleY:3.4839,x:698.667,y:78.708,skewX:14.9865,skewY:-165.0135}},{t:this.shape_4,p:{scaleX:3.4842,scaleY:3.4842,x:643.9301,y:76.6746}},{t:this.shape_3,p:{scaleX:0.9998,scaleY:0.9998,x:687.1333,y:100.437}},{t:this.shape_2,p:{scaleX:3.4822,scaleY:3.4822,x:632.2318,y:100.5483}},{t:this.shape_1,p:{scaleX:3.4822,scaleY:3.4822,x:659.7411,y:99.413}},{t:this.shape,p:{scaleX:3.4822,scaleY:3.4822,x:716.4138,y:100.4613}}]},5).to({state:[{t:this.shape_29,p:{scaleX:5.275,scaleY:2.9279,rotation:-6.8044,x:480.8193,y:568.5451,skewX:0,skewY:0}},{t:this.shape_28,p:{scaleX:5.275,scaleY:2.9279,rotation:-6.8044,x:505.418,y:469.9702,skewX:0,skewY:0}},{t:this.shape_27,p:{scaleX:5.2971,scaleY:2.9392,rotation:-6.63,x:542.4124,y:320.7372}},{t:this.shape_26,p:{scaleX:5.265,scaleY:2.9282,rotation:8.24,x:868.0243,y:567.2315,skewX:0,skewY:0}},{t:this.shape_25,p:{scaleX:5.265,scaleY:2.9282,rotation:8.24,x:846.0854,y:468.0308,skewX:0,skewY:0}},{t:this.shape_24,p:{scaleX:5.2967,scaleY:2.9389,rotation:8.1526,x:804.9774,y:317.249}},{t:this.instance,p:{regX:27.9,scaleX:5.305,scaleY:2.946,x:686.75,y:309.4,regY:35.3}},{t:this.shape_35},{t:this.shape_22,p:{scaleX:3.4612,scaleY:2.3326,x:682.2374,y:191.865}},{t:this.shape_21,p:{scaleX:3.4612,scaleY:2.3326,x:681.8913,y:176.5516}},{t:this.shape_20,p:{scaleX:3.4855,scaleY:3.4855,x:680.6198,y:75.0748}},{t:this.shape_19,p:{scaleX:3.471,scaleY:3.471,x:624.4402,y:111.3247}},{t:this.shape_18,p:{scaleX:3.4762,scaleY:3.4762,x:744.6889,y:110.2862,skewX:14.9988,skewY:-165.0012}},{t:this.shape_17,p:{scaleX:3.4391,scaleY:3.4391,skewX:15.0369,skewY:-164.9631,x:743.1464,y:105.722}},{t:this.shape_16,p:{scaleX:3.4562,scaleY:3.4562,skewX:14.9986,skewY:-165.0014,x:741.2076,y:110.9365}},{t:this.shape_15,p:{scaleX:3.4855,scaleY:3.4855,x:675.4896,y:101.9081}},{t:this.shape_14,p:{scaleX:3.4855,scaleY:3.4855,x:669.0964,y:53.4969}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_11,p:{scaleX:3.4847,scaleY:3.4847,x:664.9603,y:116.6288}},{t:this.shape_10,p:{scaleX:3.4847,scaleY:3.4847,x:691.183,y:105.0206}},{t:this.shape_9,p:{scaleX:3.4847,scaleY:3.4847,x:643.1807,y:105.0206}},{t:this.shape_8,p:{scaleX:3.4847,scaleY:3.4847,x:688.1338,y:113.7521}},{t:this.shape_7,p:{scaleX:3.4847,scaleY:3.4847,x:645.62,y:113.7521}},{t:this.shape_6,p:{scaleX:3.4847,scaleY:3.4847,x:664.9603,y:167.6222}},{t:this.shape_5,p:{scaleX:3.4844,scaleY:3.4844,x:696.3557,y:77.9178,skewX:14.9866,skewY:-165.0134}},{t:this.shape_4,p:{scaleX:3.4847,scaleY:3.4847,x:641.6125,y:75.8863}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:684.8674,y:98.4976}},{t:this.shape_2,p:{scaleX:3.4827,scaleY:3.4827,x:629.9145,y:100.5633}},{t:this.shape_1,p:{scaleX:3.4827,scaleY:3.4827,x:657.4279,y:99.4278}},{t:this.shape,p:{scaleX:3.4827,scaleY:3.4827,x:714.1091,y:100.4762}}]},5).to({state:[{t:this.shape_29,p:{scaleX:5.2631,scaleY:2.9288,rotation:0,x:481.0231,y:569.8827,skewX:-6.7688,skewY:-6.8333}},{t:this.shape_28,p:{scaleX:5.2631,scaleY:2.9288,rotation:0,x:505.59,y:471.2341,skewX:-6.7688,skewY:-6.8333}},{t:this.shape_27,p:{scaleX:5.2979,scaleY:2.9403,rotation:-6.6397,x:540.5054,y:317.5123}},{t:this.shape_26,p:{scaleX:5.2601,scaleY:2.9288,rotation:0,x:865.6017,y:566.6736,skewX:8.2526,skewY:8.3382}},{t:this.shape_25,p:{scaleX:5.2601,scaleY:2.9288,rotation:0,x:843.724,y:467.4303,skewX:8.2526,skewY:8.3382}},{t:this.shape_24,p:{scaleX:5.2973,scaleY:2.94,rotation:8.1619,x:804.4479,y:313.6373}},{t:this.instance,p:{regX:27.9,scaleX:5.3044,scaleY:2.9458,x:687.7,y:307.9,regY:35.2}},{t:this.shape_23,p:{scaleX:5.3005,scaleY:2.9427,x:679.1651,y:216.3809}},{t:this.shape_22,p:{scaleX:3.4782,scaleY:2.3322,x:682.6426,y:190.9961}},{t:this.shape_21,p:{scaleX:3.4782,scaleY:2.3322,x:682.2948,y:175.6848}},{t:this.shape_20,p:{scaleX:3.4851,scaleY:3.4851,x:681.3788,y:74.716}},{t:this.shape_19,p:{scaleX:3.4642,scaleY:3.4642,x:625.4499,y:110.7638}},{t:this.shape_18,p:{scaleX:3.4661,scaleY:3.4661,x:744.9076,y:110.0694,skewX:15.172,skewY:-164.828}},{t:this.shape_17,p:{scaleX:3.4313,scaleY:3.4313,skewX:15.2447,skewY:-164.7553,x:743.2978,y:105.5504}},{t:this.shape_16,p:{scaleX:3.4493,scaleY:3.4493,skewX:15.2752,skewY:-164.7248,x:741.2123,y:110.7183}},{t:this.shape_15,p:{scaleX:3.4851,scaleY:3.4851,x:676.2492,y:101.5459}},{t:this.shape_14,p:{scaleX:3.4851,scaleY:3.4851,x:669.8568,y:53.1407}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_11,p:{scaleX:3.4843,scaleY:3.4843,x:665.7207,y:116.2652}},{t:this.shape_10,p:{scaleX:3.4843,scaleY:3.4843,x:691.9403,y:106.2593}},{t:this.shape_9,p:{scaleX:3.4843,scaleY:3.4843,x:643.9436,y:105.8593}},{t:this.shape_8,p:{scaleX:3.4843,scaleY:3.4843,x:688.8915,y:115.3896}},{t:this.shape_7,p:{scaleX:3.4843,scaleY:3.4843,x:646.3827,y:116.1896}},{t:this.shape_6,p:{scaleX:3.4843,scaleY:3.4843,x:665.7207,y:167.2525}},{t:this.shape_5,p:{scaleX:3.484,scaleY:3.484,x:697.115,y:76.3594,skewX:14.9866,skewY:-165.0134}},{t:this.shape_36},{t:this.shape_3,p:{scaleX:0.9999,scaleY:0.9999,x:685.5909,y:96.9394}},{t:this.shape_2,p:{scaleX:3.4823,scaleY:3.4823,x:630.6788,y:100.551}},{t:this.shape_1,p:{scaleX:3.4823,scaleY:3.4823,x:658.1888,y:99.4156}},{t:this.shape,p:{scaleX:3.4823,scaleY:3.4823,x:714.863,y:100.4639}}]},5).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ReplayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ReplayButton
	this.replay = new lib.Replay();
	this.replay.name = "replay";
	this.replay.setTransform(501.6,18.95);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.Replay(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ehazg5oMC1nAAAMAAABzRMi1nAAAg");
	this.shape.setTransform(646.425,58.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E6B6").s().p("EhazA5pMAAAhzRMC1nAAAMAAABzRg");
	this.shape_1.setTransform(646.425,58.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.replay}]},465).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PlayButton
	this.text = new cjs.Text("This animation used resources from:\n\nhttps://www.freepik.com/pikisuperstar\n\nhttps://www.zapsplat.com", "italic bold 20px 'Calibri'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 526;
	this.text.parent = this;
	this.text.setTransform(16,559.7);

	this.start = new lib.Start();
	this.start.name = "start";
	this.start.setTransform(629.9,358,1.6038,1.7164,-4.7156,0,0,1,0.1);
	new cjs.ButtonHelper(this.start, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiC9hEwMEF7AAAMAAACJhMkF7AAAg");
	this.shape.setTransform(697.2,368.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8F6").s().p("EiC9BExMAAAiJhMEF7AAAMAAACJhg");
	this.shape_1.setTransform(697.2,368.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.start},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_PlayButton, null, null);


(lib.Scene_1_Monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Monster
	this.instance = new lib.Monster();
	this.instance.setTransform(664.1,-104.2,0.8253,0.9988,0,0,0,206,269.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(318).to({_off:false},0).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_LastBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LastBg
	this.instance = new lib.BarBGBack();
	this.instance.setTransform(679.45,51.65,0.9786,0.9494,0,0,0,967.1,573.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366).to({_off:false},0).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_costumerSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// costumerSide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3A396").s().p("AAVE2QgUgOgFgYIhxnrQgHggARgdQAQgcAggJQAjgJAdASQAfASAHAjIBMH4QAEAagQAVQgPAVgaAEIgKAAQgTAAgQgLg");
	this.shape.setTransform(199.4553,321.8891,0.9953,0.854);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3A396").s().p("AhXirQgHgZAOgXQANgWAZgHQAbgHAXAQQAYAQAEAcIA3GvIhIAPg");
	this.shape_1.setTransform(221.242,358.4002,0.9854,0.863,0,-17.1126,-12.7512);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3A396").s().p("AgEBiQgdgWgQgvQgMgggDglIAAgeIgBgBQgCgLAGgLQAHgKAMgDIAMgDQANgEALAHQAKAHACANIAIADQAJAEAJAIQAQAPAHAWIALAjQACAHgHAFQgGADgGgFIgZgWQANAtAEAXQAJAugNAGQgFACgGAAQgOAAgQgNg");
	this.shape_2.setTransform(237.5327,383.1689,0.9854,0.863,0,-17.1126,-12.7512);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3A396").s().p("AAuA7QhTgGgpgbQgNgIgHgKIgEgIIAugvIA+gBIAOgKIAwAJIAkBIIgBASQgLASgrAAg");
	this.shape_3.setTransform(203.3,281.7);

	this.instance = new lib.TorsoSide();
	this.instance.setTransform(204.8,312.15,1,1,0,0,0,27.8,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhKkOQADglAbgaQAbgZAlAAQArAAAdAhQAcAigHArIhIJfIiaAAg");
	this.shape_4.setTransform(198.795,451.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.9).p("AgKAXIAVgt");
	this.shape_5.setTransform(203.775,505.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.9).p("AgNAfIAbg8");
	this.shape_6.setTransform(199.75,504.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AilALIAAgVIFLAAIAAAVg");
	this.shape_7.setTransform(201.6,507.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1A1A1A").s().p("AilA3IAThSQABgEAEgCQADgCADACQAoAYAbgLQALgFAZgaQAGgGALAEICZA9QAMAGAJAMQAHAMAAAPIAAACg");
	this.shape_8.setTransform(201.6,500.858);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8B9IAWj5IBjAAIgWD5g");
	this.shape_9.setTransform(194.825,489.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("AhmFfQgfgeADgrIAcoGQADg1AcgnQAhguAzAAQA1AAAkAqQAkApgIA1IhHIZQgGAigYAYQgZAYggACIgIAAQgmAAgcgcg");
	this.shape_10.setTransform(204.6217,394.8384);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1A1A").s().p("Ah9B1QgrhkARhOQAFgYALgTIAJgOIEbAAIgyDtg");
	this.shape_11.setTransform(206.9362,358.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#03101E").s().p("Ah4BxIggjrIEbAAIAWD1g");
	this.shape_12.setTransform(209.55,359);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0A0A0A").s().p("AggFlIhOpdQgFglAVgeQAVgfAlgHQApgJAjAbQAiAaACAsIAkJug");
	this.shape_13.setTransform(220.9019,451.8875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.9).p("AgKAXIAVgt");
	this.shape_14.setTransform(236.275,505.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.9).p("AgNAfIAcg8");
	this.shape_15.setTransform(232.25,504.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AilALIAAgVIFLAAIAAAVg");
	this.shape_16.setTransform(234.15,507.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1A1A1A").s().p("AilA4IAThTQABgEADgBQADgCAEACQAnAYAbgLQALgFAZgaQAGgHALAFICZA8QANAHAJAMQAHAMAAAOIAAADg");
	this.shape_17.setTransform(234.15,500.8458);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjB9Igbj5IBjAAIAaD5g");
	this.shape_18.setTransform(224.95,489.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0A0A0A").s().p("AgMFdQgkgXgGgrIhOoBQgHguAagmQAagmAugJQAzgLArAhQAqAgADA2IAlICQABAigTAcQgTAdggAJQgPAEgNAAQgbAAgXgQg");
	this.shape_19.setTransform(215.0824,396.7653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D26665").ss(0.5,1,1).p("AAGgNQgFADgDAFQgIAIAJAL");
	this.shape_20.setTransform(202.6046,254.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D26665").ss(0.5,1,1).p("AgRgKIAMABQANADAKAR");
	this.shape_21.setTransform(202.475,253.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3A396").s().p("AgTARQgcgsAXgPQAUgNAQAOQAJAHAEAJIAKAdIgDAhIABAJIgCAAQgGAEgGAAQgSAAgUghg");
	this.shape_22.setTransform(201.8012,254.3417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1A1A1A").ss(0.3).p("AAoAAIhQAA");
	this.shape_23.setTransform(208.8,252.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1A1A1A").ss(0.3,1,1).p("AArAAQAAAVgNAOQgMAPgSAAQgRAAgMgPQgNgOAAgVQAAgTANgPQAMgPARAAQASAAAMAPQANAPAAATg");
	this.shape_24.setTransform(217.125,252.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D26665").ss(0.5,1,1).p("AgPgCIAHACQAJADAPAA");
	this.shape_25.setTransform(219.4,260.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1A1A1A").s().p("AgTgGQAHgFAIAAIAoAAIAAAVIgsgBIgbADg");
	this.shape_26.setTransform(216.575,248);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#D26665").ss(0.4,1,1).p("AAOgIIgbAR");
	this.shape_27.setTransform(218.875,253.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1A1A1A").s().p("AgHAIQgEgDABgFQgBgDAEgEQADgEAEABQAFgBADAEQAEAEgBADQABAFgEADQgDAEgFgBQgEABgDgEg");
	this.shape_28.setTransform(218.2,251.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1A1A1A").s().p("AhlA5Qglg6AEgLIgKgBQADgRAKgUQAUgoAkgNQAJgDAIACQAJACAGAHQAEAFAAAFQAegSAygHQA6gHAVAUQAgAegJAsQgJAngfAMQgfANg1gQQgjgKgggSQAAAVAEAhQAAAcgUAiQgTgbgSgdg");
	this.shape_29.setTransform(211.2238,241.7246);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A1A").s().p("AhkBKQgUgVgPggQgeg9Aag0QATgoAvgUQAvgTAdAKIAeAGQAnAJA0ATQA0ATgsABIg3gCIgrAIIgTAuIAAAAIAECMQgJAUgRAUQglApgvAAg");
	this.shape_30.setTransform(203.0048,250.2413);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3A396").s().p("AggAnIAbhNIAjA+QAEAFgDAFQgDAFgFAAg");
	this.shape_31.setTransform(221.1021,254.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3A396").s().p("Ag/CFQggghAAgwIAAjPIBmgLQAcAAAfAnQAfAmgBAfIAACNQABAjgYAYQgXAZgjAAQgtAAghgig");
	this.shape_32.setTransform(211.5,253.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1A1A1A").s().p("AgZgJIgMgxIBQAwIAABLQgugRgWg5gAgqg9IAEgDIABAGg");
	this.shape_33.setTransform(206.725,267.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3A396").s().p("Ag4B+QgYgYAAghIAAjaICgAAIAADaQABAhgYAYQgYAYghAAQghAAgXgYg");
	this.shape_34.setTransform(203,272.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3A396").s().p("AAVE2QgUgOgFgYIhxnrQgHggARgdQAQgcAggJQAjgJAdASQAfASAHAjIBMH4QAEAagQAVQgPAVgaAEIgKAAQgTAAgQgLg");
	this.shape_35.setTransform(244.6939,307.8143,0.9563,0.9079,0,36.4177,29.7278);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3A396").s().p("AhXirQgHgZAOgXQANgWAZgHQAbgHAXAQQAYAQAEAcIA3GvIhIAPg");
	this.shape_36.setTransform(226.5281,348.9892,0.9789,0.8828,0,20.3033,15.9308);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3A396").s().p("AgEBiQgdgWgQgvQgMgggDglIAAgeIgBgBQgCgLAGgLQAHgKAMgDIAMgDQANgEALAHQAKAHACANIAIADQAJAEAJAIQAQAPAHAWIALAjQACAHgHAFQgGADgGgFIgZgWQANAtAEAXQAJAugNAGQgFACgGAAQgOAAgQgNg");
	this.shape_37.setTransform(224.5815,377.9606,0.9789,0.8828,0,20.3033,15.9308);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3A396").s().p("AiTh3QgOgTAFgXQAFgXAVgNQAXgPAcAGQAcAHANAXIDEFeIg+Ajg");
	this.shape_38.setTransform(292.9191,357.0525,0.9961,0.9961,14.9942);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3A396").s().p("AAJBaQgegTgUgqQgPgdgHghIgEgbIAAgBQgEgKAGgKQAFgKAMgDIALgDQANgEALAGQALAGADALIAIACQAJAEAKAHQARAMAJAUIAPAgQADAFgHAFQgGAEgFgFIgcgTQASAoAHAVQANAqgMAFQgGADgHAAQgNAAgRgKg");
	this.shape_39.setTransform(303.7403,386.0931);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0A0A0A").s().p("AAFF0QgpgYgKgtIh3ofQgLgxAcgpQAcgqAzgLQA8gNAxAiQAzAhAGA5IBIIiQADAkgTAfQgVAfgkAKQgSAFgRAAQgdAAgbgPg");
	this.shape_40.setTransform(300.2334,396.4762);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1A1A1A").s().p("Ag6F3QgsgBgcggQgbghAGgqIBGoCQAIg0AfglQAkgqAzAEQA1AEAgAsQAhAtgNA0IhzIQQgIAhgaAWQgZAVghAAIgBAAg");
	this.shape_41.setTransform(439.332,394.154);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3A396").s().p("AgFBZQgcgWgQgsQgLgegDghIAAgcIAAgBQgDgLAGgJQAHgJAMgCIALgBQANgDALAHQAKAHACANIAIACQAJAEAJAJQAPAOAGAVIALAgQADAHgHAEQgHADgFgFIgZgWQANAqAEAVQAHArgMAEQgEABgFAAQgOAAgRgOg");
	this.shape_42.setTransform(475.8711,386.9384);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3A396").s().p("AAGBZQgdgTgUgqQgOgdgGghIgDgbIgBgBQgDgKAFgKQAFgKAMgDIAMgDQAMgDAMAGQALAFADAMIAHADQAKADAKAHQAQANAJAUIAOAgQADAGgHAEQgGADgGgEIgagUQARApAGAVQAMApgMAGQgFACgHAAQgNAAgSgLg");
	this.shape_43.setTransform(537.0153,385.0806);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3A396").s().p("AATBYQgegQgZgoQgRgcgJgfIgGgbIgBgBQgEgJAEgLQAEgKAMgEIALgFQAMgEAMAFQAMAEAEALIAHACQAKACALAGQARALALATIARAfQAEAGgGAEQgGAEgGgDIgdgRQAWAnAIATQAQApgLAGQgHAFgJAAQgMAAgQgJg");
	this.shape_44.setTransform(579.2989,381.5018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{x:203}},{t:this.shape_33,p:{x:206.725}},{t:this.shape_32,p:{x:211.5}},{t:this.shape_31,p:{x:221.1021}},{t:this.shape_30,p:{x:203.0048}},{t:this.shape_29,p:{x:211.2238}},{t:this.shape_28,p:{x:218.2}},{t:this.shape_27,p:{x:218.875}},{t:this.shape_26,p:{x:216.575}},{t:this.shape_25,p:{x:219.4}},{t:this.shape_24,p:{x:217.125}},{t:this.shape_23,p:{x:208.8}},{t:this.shape_22,p:{x:201.8012}},{t:this.shape_21,p:{x:202.475}},{t:this.shape_20,p:{x:202.6046}},{t:this.shape_19,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:215.0824,y:396.7653}},{t:this.shape_18,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:224.95,y:489.575}},{t:this.shape_17,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:234.15,y:500.8458}},{t:this.shape_16,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:234.15,y:507.5,rotation:0}},{t:this.shape_15,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:232.25,y:504.4}},{t:this.shape_14,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:236.275,y:505.025,rotation:0}},{t:this.shape_13,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:220.9019,y:451.8875}},{t:this.shape_12,p:{x:209.55,y:359}},{t:this.shape_11,p:{x:206.9362,y:358.6}},{t:this.shape_10,p:{scaleX:1,scaleY:1,rotation:0,x:204.6217,y:394.8384,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:1,scaleY:1,rotation:0,x:194.825,y:489.575,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:1,scaleY:1,rotation:0,x:201.6,y:500.858,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:1,scaleY:1,rotation:0,x:201.6,y:507.5,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:1,scaleY:1,rotation:0,x:199.75,y:504.4,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:1,scaleY:1,rotation:0,x:203.775,y:505.025,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:1,scaleY:1,rotation:0,x:198.795,y:451.625,skewX:0,skewY:0}},{t:this.instance,p:{x:204.8}},{t:this.shape_3,p:{x:203.3}},{t:this.shape_2,p:{scaleX:0.9854,scaleY:0.863,skewX:-17.1126,skewY:-12.7512,x:237.5327,y:383.1689}},{t:this.shape_1,p:{scaleX:0.9854,scaleY:0.863,skewX:-17.1126,skewY:-12.7512,x:221.242,y:358.4002}},{t:this.shape,p:{scaleX:0.9953,scaleY:0.854,skewX:0,skewY:0,x:199.4553,y:321.8891}}]}).to({state:[{t:this.shape_34,p:{x:256}},{t:this.shape_33,p:{x:259.725}},{t:this.shape_32,p:{x:264.5}},{t:this.shape_31,p:{x:274.1021}},{t:this.shape_30,p:{x:256.0048}},{t:this.shape_29,p:{x:264.2238}},{t:this.shape_28,p:{x:271.2}},{t:this.shape_27,p:{x:271.875}},{t:this.shape_26,p:{x:269.575}},{t:this.shape_25,p:{x:272.4}},{t:this.shape_24,p:{x:270.125}},{t:this.shape_23,p:{x:261.8}},{t:this.shape_22,p:{x:254.8012}},{t:this.shape_21,p:{x:255.475}},{t:this.shape_20,p:{x:255.6045}},{t:this.shape_19,p:{scaleX:1.0008,scaleY:1.0437,skewX:12.3267,skewY:13.4773,x:250.983,y:393.6433}},{t:this.shape_18,p:{scaleX:0.9914,scaleY:1.033,skewX:12.2046,skewY:13.2797,x:242.4522,y:482.6793}},{t:this.shape_17,p:{scaleX:0.9914,scaleY:1.033,skewX:12.2046,skewY:13.2797,x:248.8677,y:496.1534}},{t:this.shape_16,p:{scaleX:0.9914,scaleY:1.033,skewX:12.2046,skewY:13.2797,x:247.4147,y:502.8714,rotation:0}},{t:this.shape_15,p:{scaleX:0.9914,scaleY:1.033,skewX:12.2046,skewY:13.2797,x:246.2584,y:499.309}},{t:this.shape_14,p:{scaleX:0.9914,scaleY:1.033,skewX:12.2046,skewY:13.2797,x:250.0054,y:500.8566,rotation:0}},{t:this.shape_13,p:{scaleX:0.999,scaleY:1.0418,skewX:12.2593,skewY:13.3742,x:243.8052,y:451.8932}},{t:this.shape_12,p:{x:259.75,y:359}},{t:this.shape_11,p:{x:257.1362,y:358.6}},{t:this.shape_10,p:{scaleX:0.9986,scaleY:0.9986,rotation:-9.5871,x:266.8221,y:398.6337,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9875,scaleY:0.9875,rotation:5.2869,x:274.19,y:485.779,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9875,scaleY:0.9875,rotation:5.2869,x:279.825,y:497.4895,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:0.9875,scaleY:0.9875,rotation:5.2869,x:279.2207,y:504.0204,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9875,scaleY:0.9875,rotation:5.2869,x:277.6837,y:500.8039,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:0.9875,scaleY:0.9875,rotation:5.2869,x:281.5845,y:501.7847,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.5,x:271.2525,y:457.445,skewX:0,skewY:0}},{t:this.shape_37,p:{scaleX:0.9789,scaleY:0.8828,skewX:20.3033,skewY:15.9308,x:224.5815,y:377.9606}},{t:this.shape_36},{t:this.shape_35,p:{scaleX:0.9563,scaleY:0.9079,skewX:36.4177,skewY:29.7278,x:244.6939,y:307.8143}},{t:this.instance,p:{x:257.8}},{t:this.shape_3,p:{x:256.3}},{t:this.shape_2,p:{scaleX:0.9848,scaleY:0.9106,skewX:-21.581,skewY:-17.792,x:288.3886,y:378.4938}},{t:this.shape_1,p:{scaleX:0.9848,scaleY:0.9106,skewX:-21.581,skewY:-17.792,x:269.6822,y:353.718}},{t:this.shape,p:{scaleX:0.9956,scaleY:0.9005,skewX:-5.2036,skewY:-4.1333,x:253.4061,y:315.5104}}]},4).to({state:[{t:this.shape_34,p:{x:294}},{t:this.shape_33,p:{x:297.725}},{t:this.shape_32,p:{x:302.5}},{t:this.shape_31,p:{x:312.1021}},{t:this.shape_30,p:{x:294.0048}},{t:this.shape_29,p:{x:302.2238}},{t:this.shape_28,p:{x:309.2}},{t:this.shape_27,p:{x:309.875}},{t:this.shape_26,p:{x:307.575}},{t:this.shape_25,p:{x:310.4}},{t:this.shape_24,p:{x:308.125}},{t:this.shape_23,p:{x:299.8}},{t:this.shape_22,p:{x:292.8012}},{t:this.shape_21,p:{x:293.475}},{t:this.shape_20,p:{x:293.6045}},{t:this.shape_40},{t:this.shape_18,p:{scaleX:1.1295,scaleY:1.0529,skewX:-3.1612,skewY:-1.5414,x:322.7061,y:483.2864}},{t:this.shape_17,p:{scaleX:1.1295,scaleY:1.0529,skewX:-3.1612,skewY:-1.5414,x:333.7476,y:494.8553}},{t:this.shape_16,p:{scaleX:1.1295,scaleY:1.0529,skewX:-3.1612,skewY:-1.5414,x:334.1339,y:501.8504,rotation:0}},{t:this.shape_15,p:{scaleX:1.1295,scaleY:1.0529,skewX:-3.1612,skewY:-1.5414,x:331.8088,y:498.6493}},{t:this.shape_14,p:{scaleX:1.1295,scaleY:1.0529,skewX:-3.1612,skewY:-1.5414,x:336.3894,y:499.184,rotation:0}},{t:this.shape_13,p:{scaleX:1.1392,scaleY:1.0614,skewX:-3.1168,skewY:-1.4982,x:314.2666,y:454.7661}},{t:this.shape_12,p:{x:297.75,y:359}},{t:this.shape_11,p:{x:295.1362,y:358.6}},{t:this.shape_10,p:{scaleX:0.9985,scaleY:1.0366,rotation:0,x:297.6017,y:393.6019,skewX:3.4306,skewY:3.7721}},{t:this.shape_9,p:{scaleX:0.9899,scaleY:1.0185,rotation:0,x:281.4916,y:486.0718,skewX:17.8947,skewY:19.2284}},{t:this.shape_8,p:{scaleX:0.9899,scaleY:1.0185,rotation:0,x:284.2933,y:499.2159,skewX:17.8947,skewY:19.2284}},{t:this.shape_7,p:{scaleX:0.9899,scaleY:1.0185,rotation:0,x:282.2147,y:505.6533,skewX:17.8947,skewY:19.2284}},{t:this.shape_6,p:{scaleX:0.9899,scaleY:1.0185,rotation:0,x:281.4557,y:502.0457,skewX:17.8947,skewY:19.2284}},{t:this.shape_5,p:{scaleX:0.9899,scaleY:1.0185,rotation:0,x:285.0223,y:503.9637,skewX:17.8947,skewY:19.2284}},{t:this.shape_4,p:{scaleX:0.9947,scaleY:1.0315,rotation:0,x:287.4258,y:456.4154,skewX:3.4569,skewY:3.8264}},{t:this.instance,p:{x:295.8}},{t:this.shape_3,p:{x:294.3}},{t:this.shape_39},{t:this.shape_38,p:{scaleX:0.9961,scaleY:0.9961,rotation:14.9942,x:292.9191,y:357.0525}},{t:this.shape,p:{scaleX:0.9943,scaleY:0.901,skewX:9.7976,skewY:10.724,x:284.2384,y:316.9715}}]},3).to({state:[{t:this.shape_37,p:{scaleX:0.9815,scaleY:0.8837,skewX:-10.3382,skewY:-14.9173,x:362.6367,y:375.2326}},{t:this.shape_1,p:{scaleX:0.9815,scaleY:0.8837,skewX:-10.3382,skewY:-14.9173,x:349.5278,y:349.3218}},{t:this.shape_35,p:{scaleX:0.9596,scaleY:0.9106,skewX:5.4945,skewY:-1.1927,x:336.4955,y:309.9081}},{t:this.shape_34,p:{x:333}},{t:this.shape_33,p:{x:336.725}},{t:this.shape_32,p:{x:341.5}},{t:this.shape_31,p:{x:351.1021}},{t:this.shape_30,p:{x:333.0048}},{t:this.shape_29,p:{x:341.2238}},{t:this.shape_28,p:{x:348.2}},{t:this.shape_27,p:{x:348.875}},{t:this.shape_26,p:{x:346.575}},{t:this.shape_25,p:{x:349.4}},{t:this.shape_24,p:{x:347.125}},{t:this.shape_23,p:{x:338.8}},{t:this.shape_22,p:{x:331.8012}},{t:this.shape_21,p:{x:332.475}},{t:this.shape_20,p:{x:332.6045}},{t:this.shape_19,p:{scaleX:1.0003,scaleY:1.0437,skewX:6.887,skewY:8.0542,x:331.8444,y:393.9709}},{t:this.shape_18,p:{scaleX:0.9867,scaleY:1.0307,skewX:6.6702,skewY:7.7725,x:332.1079,y:482.3779}},{t:this.shape_17,p:{scaleX:0.9867,scaleY:1.0307,skewX:6.6702,skewY:7.7725,x:339.7526,y:495.1438}},{t:this.shape_16,p:{scaleX:0.9867,scaleY:1.0307,skewX:6.6702,skewY:7.7725,x:338.9559,y:501.9559,rotation:0}},{t:this.shape_15,p:{scaleX:0.9867,scaleY:1.0307,skewX:6.6702,skewY:7.7725,x:337.4696,y:498.5288}},{t:this.shape_14,p:{scaleX:0.9867,scaleY:1.0307,skewX:6.6702,skewY:7.7725,x:341.3297,y:499.7057,rotation:0}},{t:this.shape_13,p:{scaleX:0.9958,scaleY:1.0397,skewX:6.7334,skewY:7.8796,x:332.3765,y:453.0081}},{t:this.shape_12,p:{x:336.75,y:359}},{t:this.shape_11,p:{x:334.1362,y:358.6}},{t:this.shape_10,p:{scaleX:0.9984,scaleY:0.9984,rotation:-4.6065,x:340.2837,y:399.1384,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9849,scaleY:0.9849,rotation:10.3009,x:340.1847,y:486.2869,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9849,scaleY:0.9849,rotation:10.3009,x:344.7628,y:498.4136,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:0.9849,scaleY:0.9849,rotation:10.3009,x:343.593,y:504.8499,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9849,scaleY:0.9849,rotation:10.3009,x:342.3462,y:501.5201,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:0.9849,scaleY:0.9849,rotation:10.3009,x:346.1365,y:502.8346,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:0.9934,scaleY:0.9934,rotation:-4.4092,x:339.7588,y:457.6256,skewX:0,skewY:0}},{t:this.instance,p:{x:334.8}},{t:this.shape_3,p:{x:333.3}},{t:this.shape_2,p:{scaleX:0.9849,scaleY:0.9134,skewX:0.9419,skewY:4.5202,x:328.7711,y:387.1364}},{t:this.shape_38,p:{scaleX:0.9955,scaleY:0.9955,rotation:22.4875,x:321.9214,y:357.4341}},{t:this.shape,p:{scaleX:0.9928,scaleY:0.9016,skewX:17.2966,skewY:18.2208,x:320.104,y:316.2366}}]},4).to({state:[{t:this.shape_37,p:{scaleX:0.9816,scaleY:0.8838,skewX:-16.8531,skewY:-21.1514,x:408.7931,y:373.702}},{t:this.shape_1,p:{scaleX:0.9816,scaleY:0.8838,skewX:-16.8531,skewY:-21.1514,x:392.8124,y:349.4054}},{t:this.shape_35,p:{scaleX:0.9596,scaleY:0.9099,skewX:-0.7332,skewY:-7.421,x:374.5887,y:309.2607}},{t:this.shape_34,p:{x:368}},{t:this.shape_33,p:{x:371.725}},{t:this.shape_32,p:{x:376.5}},{t:this.shape_31,p:{x:386.1021}},{t:this.shape_30,p:{x:368.0048}},{t:this.shape_29,p:{x:376.2238}},{t:this.shape_28,p:{x:383.2}},{t:this.shape_27,p:{x:383.875}},{t:this.shape_26,p:{x:381.575}},{t:this.shape_25,p:{x:384.4}},{t:this.shape_24,p:{x:382.125}},{t:this.shape_23,p:{x:373.8}},{t:this.shape_22,p:{x:366.8012}},{t:this.shape_21,p:{x:367.475}},{t:this.shape_20,p:{x:367.6045}},{t:this.shape_10,p:{scaleX:1,scaleY:1,rotation:3.7604,x:371.2189,y:393.2373,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9881,scaleY:0.9881,rotation:18.7464,x:357.6714,y:482.3781,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9881,scaleY:0.9881,rotation:18.7464,x:360.4277,y:495.0866,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.9881,scaleY:0.9881,skewX:0,skewY:0,x:358.3185,y:501.3014,rotation:18.7464}},{t:this.shape_6,p:{scaleX:0.9881,scaleY:0.9881,rotation:18.7464,x:357.5719,y:497.8133,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.9881,scaleY:0.9881,skewX:0,skewY:0,x:361.1395,y:499.6763,rotation:18.7464}},{t:this.shape_4,p:{scaleX:0.9971,scaleY:0.9971,rotation:3.809,x:361.8023,y:449.2921,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:1.0001,scaleY:1.0437,skewX:1.451,skewY:2.6165,x:369.2951,y:393.3695}},{t:this.shape_18,p:{scaleX:0.9873,scaleY:1.0302,skewX:1.268,skewY:2.3323,x:378.8021,y:480.7808}},{t:this.shape_17,p:{scaleX:0.9873,scaleY:1.0302,skewX:1.268,skewY:2.3323,x:387.6205,y:492.7587}},{t:this.shape_7,p:{scaleX:0.9873,scaleY:1.0302,rotation:0,x:387.4688,y:499.612,skewX:1.268,skewY:2.3323}},{t:this.shape_15,p:{scaleX:0.9873,scaleY:1.0302,skewX:1.268,skewY:2.3323,x:385.6652,y:496.3429}},{t:this.shape_5,p:{scaleX:0.9873,scaleY:1.0302,rotation:0,x:389.6215,y:497.1483,skewX:1.268,skewY:2.3323}},{t:this.shape_13,p:{scaleX:0.9949,scaleY:1.0385,skewX:1.3286,skewY:2.4498,x:374.2165,y:448.6457}},{t:this.shape_12,p:{x:371.75,y:359}},{t:this.shape_11,p:{x:369.1362,y:358.6}},{t:this.instance,p:{x:369.8}},{t:this.shape_3,p:{x:368.3}},{t:this.shape_2,p:{scaleX:0.9854,scaleY:0.9135,skewX:7.3957,skewY:10.9809,x:352.3391,y:386.1077}},{t:this.shape_38,p:{scaleX:0.9958,scaleY:0.9958,rotation:28.9607,x:348.6224,y:356.6844}},{t:this.shape,p:{scaleX:0.9925,scaleY:0.902,skewX:23.7615,skewY:24.6923,x:351.8038,y:316.272}}]},4).to({state:[{t:this.shape_37,p:{scaleX:0.9806,scaleY:0.884,skewX:-22.5369,skewY:-26.9012,x:429.1726,y:367.1832}},{t:this.shape_1,p:{scaleX:0.9806,scaleY:0.884,skewX:-22.5369,skewY:-26.9012,x:410.8735,y:344.5866}},{t:this.shape_35,p:{scaleX:0.9585,scaleY:0.9102,skewX:-6.4402,skewY:-13.129,x:387.7308,y:308.5069}},{t:this.shape_34,p:{x:378}},{t:this.shape_33,p:{x:381.725}},{t:this.shape_32,p:{x:386.5}},{t:this.shape_31,p:{x:396.1021}},{t:this.shape_30,p:{x:378.0048}},{t:this.shape_29,p:{x:386.2238}},{t:this.shape_28,p:{x:393.2}},{t:this.shape_27,p:{x:393.875}},{t:this.shape_26,p:{x:391.575}},{t:this.shape_25,p:{x:394.4}},{t:this.shape_24,p:{x:392.125}},{t:this.shape_23,p:{x:383.8}},{t:this.shape_22,p:{x:376.8012}},{t:this.shape_21,p:{x:377.475}},{t:this.shape_20,p:{x:377.6045}},{t:this.shape_10,p:{scaleX:0.9985,scaleY:0.9985,rotation:10.1714,x:379.7024,y:394.0845,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9891,scaleY:0.9891,rotation:10.2078,x:353.8596,y:481.1969,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9891,scaleY:0.9891,rotation:10.2078,x:358.4767,y:493.3671,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.9891,scaleY:0.9891,skewX:0,skewY:0,x:357.3125,y:499.8324,rotation:10.2078}},{t:this.shape_6,p:{scaleX:0.9891,scaleY:0.9891,rotation:10.2078,x:356.0551,y:496.4906,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.9891,scaleY:0.9891,skewX:0,skewY:0,x:359.8634,y:497.8045,rotation:10.2078}},{t:this.shape_4,p:{scaleX:0.9968,scaleY:0.9968,rotation:10.1481,x:364.5216,y:450.6402,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:1.0001,scaleY:1.0437,skewX:1.451,skewY:2.6165,x:380.1451,y:397.8695}},{t:this.shape_18,p:{scaleX:0.989,scaleY:1.0322,skewX:1.2748,skewY:2.4732,x:386.5989,y:484.6357}},{t:this.shape_17,p:{scaleX:0.989,scaleY:1.0322,skewX:1.2748,skewY:2.4732,x:395.4305,y:496.6591}},{t:this.shape_7,p:{scaleX:0.989,scaleY:1.0322,rotation:0,x:395.2777,y:503.5258,skewX:1.2748,skewY:2.4732}},{t:this.shape_15,p:{scaleX:0.989,scaleY:1.0322,skewX:1.2748,skewY:2.4732,x:393.4715,y:500.2457}},{t:this.shape_5,p:{scaleX:0.989,scaleY:1.0322,rotation:0,x:397.4343,y:501.0624,skewX:1.2748,skewY:2.4732}},{t:this.shape_13,p:{scaleX:0.9976,scaleY:1.0413,skewX:1.3704,skewY:2.5485,x:384.6163,y:455.6067}},{t:this.shape_12,p:{x:382.75,y:360}},{t:this.shape_11,p:{x:380.1362,y:359.6}},{t:this.instance,p:{x:379.8}},{t:this.shape_3,p:{x:378.3}},{t:this.shape_2,p:{scaleX:0.9852,scaleY:0.9132,skewX:13.8679,skewY:17.4556,x:351.7477,y:385.6505}},{t:this.shape_38,p:{scaleX:0.9953,scaleY:0.9953,rotation:35.4368,x:351.2746,y:355.7632}},{t:this.shape,p:{scaleX:0.9926,scaleY:0.9007,skewX:30.2492,skewY:31.1654,x:359.4125,y:315.2217}}]},3).to({state:[{t:this.shape_37,p:{scaleX:0.981,scaleY:0.8846,skewX:-16.5463,skewY:-20.8376,x:470.4971,y:378.1545}},{t:this.shape_1,p:{scaleX:0.981,scaleY:0.8846,skewX:-16.5463,skewY:-20.8376,x:454.6434,y:353.745}},{t:this.shape_35,p:{scaleX:0.9592,scaleY:0.9102,skewX:-0.3929,skewY:-7.0902,x:440.972,y:310.912}},{t:this.shape_34,p:{x:435}},{t:this.shape_33,p:{x:438.725}},{t:this.shape_32,p:{x:443.5}},{t:this.shape_31,p:{x:453.1021}},{t:this.shape_30,p:{x:435.0048}},{t:this.shape_29,p:{x:443.2238}},{t:this.shape_28,p:{x:450.2}},{t:this.shape_27,p:{x:450.875}},{t:this.shape_26,p:{x:448.575}},{t:this.shape_25,p:{x:451.4}},{t:this.shape_24,p:{x:449.125}},{t:this.shape_23,p:{x:440.8}},{t:this.shape_22,p:{x:433.8012}},{t:this.shape_21,p:{x:434.475}},{t:this.shape_20,p:{x:434.6045}},{t:this.shape_41},{t:this.shape_9,p:{scaleX:0.991,scaleY:0.991,rotation:4.7472,x:419.6216,y:487.1847,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.991,scaleY:0.991,rotation:4.7472,x:425.3873,y:498.8835,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.991,scaleY:0.991,skewX:0,skewY:0,x:424.8425,y:505.4432,rotation:4.7472}},{t:this.shape_6,p:{scaleX:0.991,scaleY:0.991,rotation:4.7472,x:423.2697,y:502.2299,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.991,scaleY:0.991,skewX:0,skewY:0,x:427.1936,y:503.1773,rotation:4.7472}},{t:this.shape_4,p:{scaleX:0.9963,scaleY:0.9963,rotation:4.6895,x:428.232,y:454.1419,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:1.0006,scaleY:1.0431,skewX:-2.7459,skewY:-1.5092,x:439.2506,y:395.0043}},{t:this.shape_18,p:{scaleX:0.9922,scaleY:1.0338,skewX:-2.7478,skewY:-1.5175,x:453.8446,y:484.8383}},{t:this.shape_17,p:{scaleX:0.9922,scaleY:1.0338,skewX:-2.7478,skewY:-1.5175,x:463.5284,y:496.2351}},{t:this.shape_7,p:{scaleX:0.9922,scaleY:1.0338,rotation:0,x:463.8582,y:503.1063,skewX:-2.7478,skewY:-1.5175}},{t:this.shape_15,p:{scaleX:0.9922,scaleY:1.0338,skewX:-2.7478,skewY:-1.5175,x:461.82,y:499.9551}},{t:this.shape_5,p:{scaleX:0.9922,scaleY:1.0338,rotation:0,x:465.8432,y:500.4947,skewX:-2.7478,skewY:-1.5175}},{t:this.shape_13,p:{scaleX:0.9985,scaleY:1.0408,skewX:-2.7647,skewY:-1.515,x:448.17,y:451.4051}},{t:this.shape_12,p:{x:439.75,y:360}},{t:this.shape_11,p:{x:437.1362,y:359.6}},{t:this.instance,p:{x:436.8}},{t:this.shape_3,p:{x:435.3}},{t:this.shape_2,p:{scaleX:0.9853,scaleY:0.9132,skewX:7.9641,skewY:11.552,x:419.3119,y:387.5177}},{t:this.shape_38,p:{scaleX:0.9956,scaleY:0.9956,rotation:29.4787,x:415.6165,y:356.5239}},{t:this.shape,p:{scaleX:0.9929,scaleY:0.9013,skewX:24.2956,skewY:25.2174,x:419.1945,y:314.9709}}]},3).to({state:[{t:this.shape_2,p:{scaleX:0.9815,scaleY:0.8847,skewX:-9.6004,skewY:-14.0589,x:503.2872,y:381.8579}},{t:this.shape_1,p:{scaleX:0.9815,scaleY:0.8847,skewX:-9.6004,skewY:-14.0589,x:490.5026,y:355.7302}},{t:this.shape_35,p:{scaleX:0.9591,scaleY:0.9108,skewX:6.2361,skewY:-0.3419,x:482.0456,y:310.21}},{t:this.shape_34,p:{x:479}},{t:this.shape_33,p:{x:482.725}},{t:this.shape_32,p:{x:487.5}},{t:this.shape_31,p:{x:497.1021}},{t:this.shape_30,p:{x:479.0048}},{t:this.shape_29,p:{x:487.2238}},{t:this.shape_28,p:{x:494.2}},{t:this.shape_27,p:{x:494.875}},{t:this.shape_26,p:{x:492.575}},{t:this.shape_25,p:{x:495.4}},{t:this.shape_24,p:{x:493.125}},{t:this.shape_23,p:{x:484.8}},{t:this.shape_22,p:{x:477.8012}},{t:this.shape_21,p:{x:478.475}},{t:this.shape_20,p:{x:478.6045}},{t:this.shape_10,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.7259,x:489.6504,y:397.2489,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9941,scaleY:0.9941,rotation:-10.7273,x:497.187,y:488.5282,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9941,scaleY:0.9941,rotation:-10.7273,x:505.8917,y:498.2946,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.9941,scaleY:0.9941,skewX:0,skewY:0,x:507.1207,y:504.7817,rotation:-10.7273}},{t:this.shape_6,p:{scaleX:0.9941,scaleY:0.9941,rotation:-10.7273,x:504.7402,y:502.0963,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.9941,scaleY:0.9941,skewX:0,skewY:0,x:508.787,y:501.962,rotation:-10.7273}},{t:this.shape_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.7259,x:494.4937,y:454.1234,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:1.001,scaleY:1.0444,skewX:6.7003,skewY:7.8925,x:478.441,y:396.0324}},{t:this.shape_18,p:{scaleX:0.9905,scaleY:1.0327,skewX:6.5471,skewY:7.7396,x:475.6792,y:487.1644}},{t:this.shape_17,p:{scaleX:0.9905,scaleY:1.0327,skewX:6.5471,skewY:7.7396,x:483.3816,y:499.9555}},{t:this.shape_7,p:{scaleX:0.9905,scaleY:1.0327,rotation:0,x:482.5981,y:506.7827,skewX:6.5471,skewY:7.7396}},{t:this.shape_15,p:{scaleX:0.9905,scaleY:1.0327,skewX:6.5471,skewY:7.7396,x:481.0983,y:503.3487}},{t:this.shape_5,p:{scaleX:0.9905,scaleY:1.0327,rotation:0,x:484.9751,y:504.5268,skewX:6.5471,skewY:7.7396}},{t:this.shape_13,p:{scaleX:0.9986,scaleY:1.042,skewX:6.635,skewY:7.797,x:477.5571,y:456.9986}},{t:this.shape_12,p:{x:483.75,y:360}},{t:this.shape_11,p:{x:481.1362,y:359.6}},{t:this.instance,p:{x:480.8}},{t:this.shape_3,p:{x:479.3}},{t:this.shape_42},{t:this.shape_38,p:{scaleX:0.9952,scaleY:0.9952,rotation:21.9895,x:468.5705,y:357.2454}},{t:this.shape,p:{scaleX:0.9927,scaleY:0.9005,skewX:16.7983,skewY:17.7208,x:466.5739,y:315.6929}}]},4).to({state:[{t:this.shape_2,p:{scaleX:0.9794,scaleY:0.8828,skewX:-2.5648,skewY:-6.9852,x:542.2414,y:380.3779}},{t:this.shape_1,p:{scaleX:0.9794,scaleY:0.8828,skewX:-2.5648,skewY:-6.9852,x:532.7731,y:352.9354}},{t:this.shape_35,p:{scaleX:0.9567,scaleY:0.9084,skewX:13.2218,skewY:6.5278,x:530.5127,y:310.6179}},{t:this.shape_34,p:{x:531}},{t:this.shape_33,p:{x:534.725}},{t:this.shape_32,p:{x:539.5}},{t:this.shape_31,p:{x:549.1021}},{t:this.shape_30,p:{x:531.0048}},{t:this.shape_29,p:{x:539.2238}},{t:this.shape_28,p:{x:546.2}},{t:this.shape_27,p:{x:546.875}},{t:this.shape_26,p:{x:544.575}},{t:this.shape_25,p:{x:547.4}},{t:this.shape_24,p:{x:545.125}},{t:this.shape_23,p:{x:536.8}},{t:this.shape_22,p:{x:529.8012}},{t:this.shape_21,p:{x:530.475}},{t:this.shape_20,p:{x:530.6045}},{t:this.shape_10,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.2725,x:535.4808,y:393.1812,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.991,scaleY:0.991,rotation:19.27,x:520.3573,y:482.0065,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.991,scaleY:0.991,rotation:19.27,x:523.005,y:494.7769,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.991,scaleY:0.991,skewX:0,skewY:0,x:520.8328,y:500.9902,rotation:19.27}},{t:this.shape_6,p:{scaleX:0.991,scaleY:0.991,rotation:19.27,x:520.116,y:497.4853,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.991,scaleY:0.991,skewX:0,skewY:0,x:523.6768,y:499.3863,rotation:19.27}},{t:this.shape_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.2725,x:525.4406,y:449.3708,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:0.9998,scaleY:1.0437,skewX:1.4937,skewY:2.681,x:533.0534,y:399.4695}},{t:this.shape_18,p:{scaleX:0.9919,scaleY:1.0344,skewX:1.3964,skewY:2.5886,x:540.1715,y:486.5013}},{t:this.shape_17,p:{scaleX:0.9919,scaleY:1.0344,skewX:1.3964,skewY:2.5886,x:549.0037,y:498.5681}},{t:this.shape_7,p:{scaleX:0.9919,scaleY:1.0344,rotation:0,x:548.8359,y:505.4489,skewX:1.3964,skewY:2.5886}},{t:this.shape_15,p:{scaleX:0.9919,scaleY:1.0344,skewX:1.3964,skewY:2.5886,x:547.0314,y:502.1582}},{t:this.shape_5,p:{scaleX:0.9919,scaleY:1.0344,rotation:0,x:551.004,y:502.9848,skewX:1.3964,skewY:2.5886}},{t:this.shape_13,p:{scaleX:0.9978,scaleY:1.0405,skewX:1.4134,skewY:2.6022,x:537.6575,y:454.3256}},{t:this.shape_12,p:{x:535.75,y:360}},{t:this.shape_11,p:{x:533.1362,y:359.6}},{t:this.instance,p:{x:532.8}},{t:this.shape_3,p:{x:531.3}},{t:this.shape_43},{t:this.shape_38,p:{scaleX:0.9958,scaleY:0.9958,rotation:16.0491,x:527.1936,y:356.8072}},{t:this.shape,p:{scaleX:0.9932,scaleY:0.9017,skewX:10.8471,skewY:11.7712,x:521.448,y:317.1142}}]},3).to({state:[{t:this.shape_2,p:{scaleX:0.9812,scaleY:0.8846,skewX:6.4722,skewY:2.1462,x:565.1233,y:385.1622}},{t:this.shape_1,p:{scaleX:0.9812,scaleY:0.8846,skewX:6.4722,skewY:2.1462,x:560.0756,y:356.5011}},{t:this.shape_35,p:{scaleX:0.9575,scaleY:0.9094,skewX:22.7017,skewY:16.0061,x:560.3773,y:310.1277}},{t:this.shape_34,p:{x:564}},{t:this.shape_33,p:{x:567.725}},{t:this.shape_32,p:{x:572.5}},{t:this.shape_31,p:{x:582.1021}},{t:this.shape_30,p:{x:564.0048}},{t:this.shape_29,p:{x:572.2238}},{t:this.shape_28,p:{x:579.2}},{t:this.shape_27,p:{x:579.875}},{t:this.shape_26,p:{x:577.575}},{t:this.shape_25,p:{x:580.4}},{t:this.shape_24,p:{x:578.125}},{t:this.shape_23,p:{x:569.8}},{t:this.shape_22,p:{x:562.8012}},{t:this.shape_21,p:{x:563.475}},{t:this.shape_20,p:{x:563.6045}},{t:this.shape_10,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.2929,x:570.528,y:394.0468,skewX:0,skewY:0}},{t:this.shape_9,p:{scaleX:0.9949,scaleY:0.9949,rotation:0.2891,x:559.6993,y:485.4822,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:0.9949,scaleY:0.9949,rotation:0.2891,x:566.3832,y:496.7419,skewX:0,skewY:0}},{t:this.shape_16,p:{scaleX:0.9949,scaleY:0.9949,skewX:0,skewY:0,x:566.3499,y:503.3501,rotation:0.2891}},{t:this.shape_6,p:{scaleX:0.9949,scaleY:0.9949,rotation:0.2891,x:564.5248,y:500.2566,skewX:0,skewY:0}},{t:this.shape_14,p:{scaleX:0.9949,scaleY:0.9949,skewX:0,skewY:0,x:568.5262,y:500.8986,rotation:0.2891}},{t:this.shape_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.2929,x:564.4116,y:450.7976,skewX:0,skewY:0}},{t:this.shape_19,p:{scaleX:1.0008,scaleY:1.0446,skewX:0.8337,skewY:2.028,x:566.4623,y:398.4452}},{t:this.shape_18,p:{scaleX:0.9914,scaleY:1.0348,skewX:15.8035,skewY:16.969,x:575.5535,y:483.8475}},{t:this.shape_17,p:{scaleX:0.993,scaleY:1.0352,skewX:0.8749,skewY:2.0465,x:582.7384,y:502.2056}},{t:this.shape_7,p:{scaleX:0.993,scaleY:1.0352,rotation:0,x:582.6333,y:509.0934,skewX:0.8749,skewY:2.0465}},{t:this.shape_15,p:{scaleX:0.993,scaleY:1.0352,skewX:0.8749,skewY:2.0465,x:580.7968,y:505.8171}},{t:this.shape_5,p:{scaleX:0.993,scaleY:1.0352,rotation:0,x:584.7812,y:506.6068,skewX:0.8749,skewY:2.0465}},{t:this.shape_13,p:{scaleX:0.9995,scaleY:1.0432,skewX:0.8833,skewY:2.0814,x:571.6326,y:458.2245}},{t:this.shape_12,p:{x:568.75,y:360}},{t:this.shape_11,p:{x:566.1362,y:359.6}},{t:this.instance,p:{x:565.8}},{t:this.shape_3,p:{x:564.3}},{t:this.shape_44},{t:this.shape_38,p:{scaleX:0.9961,scaleY:0.9961,rotation:10.0906,x:567.4726,y:355.7067}},{t:this.shape,p:{scaleX:0.9934,scaleY:0.9012,skewX:4.8983,skewY:5.8194,x:556.7888,y:316.017}}]},4).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CorkOff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CorkOff
	this.instance = new lib.cork_off();
	this.instance.setTransform(658.25,-143,0.9947,0.9947,0,0,0,283.2,-45.3);

	this.text = new cjs.Text("", "50px 'Calibri-BoldItalic'");
	this.text.lineHeight = 63;
	this.text.parent = this;
	this.text.setTransform(589.55,-45,1.1003,1.3185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},272).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bubbles_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bubbles
	this.instance = new lib.BubblesB("synched",0);
	this.instance.setTransform(736.85,204.25,0.4009,0.4277,0,0,0,59.8,162.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(5).to({x:732.95,y:213.75},0).wait(5).to({x:736.8,y:234.65},0).wait(5).to({x:742.3,y:253.5},0).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bubbles
	this.instance = new lib.BubblesB("synched",0);
	this.instance.setTransform(615.85,-100.9,2.3679,2.5122,0,0,0,59.6,180.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BMonster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BMonster
	this.instance = new lib.MonsterOut();
	this.instance.setTransform(693.25,272.65,2.7908,1.799,0,0,0,9.3,12.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.7907,x:667.3007,y:251.4257},0).wait(1).to({scaleX:2.7906,x:667.3015,y:253.0515},0).wait(1).to({scaleX:2.7905,x:667.3023,y:254.6772},0).wait(1).to({x:667.3031,y:256.303},0).wait(1).to({scaleX:2.7904,x:667.3039,y:257.9287},0).wait(1).to({scaleX:2.7903,x:667.3047,y:259.5545},0).wait(1).to({scaleX:2.7902,x:667.3055,y:261.1802},0).wait(1).to({scaleX:2.7901,x:667.3063,y:262.806},0).wait(1).to({scaleX:2.79,x:667.3071,y:264.4317},0).wait(1).to({scaleX:2.7899,x:667.3079,y:266.0575},0).wait(1).to({scaleX:2.7898,x:667.3087,y:267.6832},0).wait(1).to({x:667.3095,y:269.309},0).wait(1).to({scaleX:2.7897,x:667.3103,y:270.9347},0).wait(1).to({scaleX:2.7896,x:667.3111,y:272.5605},0).wait(1).to({scaleX:2.7895,x:667.3119,y:274.1862},0).wait(1).to({scaleX:2.7894,x:667.3127,y:275.812},0).wait(1).to({scaleX:2.7893,x:667.3135,y:277.4378},0).wait(1).to({scaleX:2.7892,x:667.3143,y:279.0635},0).wait(1).to({x:667.3151,y:280.6893},0).wait(1).to({scaleX:2.7891,x:667.3159,y:282.315},0).wait(1).to({scaleX:2.789,x:667.3167,y:283.9408},0).wait(1).to({scaleX:2.7889,x:667.3175,y:285.5665},0).wait(1).to({scaleX:2.7888,x:667.3183,y:287.1923},0).wait(1).to({scaleX:2.7887,x:667.3191,y:288.818},0).wait(1).to({scaleX:2.7886,x:667.3199,y:290.4438},0).wait(1).to({scaleX:2.7885,x:667.3207,y:292.0695},0).wait(1).to({x:667.3215,y:293.6953},0).wait(1).to({scaleX:2.7884,x:667.3223,y:295.321},0).wait(1).to({scaleX:2.7883,x:667.3231,y:296.9468},0).wait(1).to({scaleX:2.7882,x:667.324,y:298.5725},0).wait(1).to({scaleX:2.7881,x:667.3248,y:300.1983},0).wait(1).to({scaleX:2.788,x:667.3256,y:301.8241},0).wait(1).to({scaleX:2.7879,x:667.3264,y:303.4498},0).wait(1).to({x:667.3272,y:305.0756},0).wait(1).to({scaleX:2.7878,x:667.328,y:306.7013},0).wait(1).to({scaleX:2.7877,x:667.3288,y:308.3271},0).wait(1).to({scaleX:2.7876,x:667.3296,y:309.9528},0).wait(1).to({scaleX:2.7875,x:667.3304,y:311.5786},0).wait(1).to({scaleX:2.7874,x:667.3312,y:313.2043},0).wait(1).to({scaleX:2.7873,x:667.332,y:314.8301},0).wait(1).to({scaleX:2.7872,x:667.3328,y:316.4558},0).wait(1).to({x:667.3336,y:318.0816},0).wait(1).to({scaleX:2.7871,x:667.3344,y:319.7073},0).wait(1).to({scaleX:2.787,x:667.3352,y:321.3331},0).wait(1).to({scaleX:2.7869,x:667.336,y:322.9588},0).wait(1).to({scaleX:2.7868,x:667.3368,y:324.5846},0).wait(1).to({scaleX:2.7867,x:667.3376,y:326.2104},0).wait(1).to({scaleX:2.7866,x:667.3384,y:327.8361},0).wait(1).to({scaleX:2.7865,x:667.3392,y:329.4619},0).wait(1).to({x:667.34,y:331.0876},0).wait(1).to({scaleX:2.7864,x:667.3408,y:332.7134},0).wait(1).to({scaleX:2.7863,x:667.3416,y:334.3391},0).wait(1).to({scaleX:2.7862,x:667.3424,y:335.9649},0).wait(1).to({scaleX:2.7861,x:667.3432,y:337.5906},0).wait(1).to({scaleX:2.786,x:667.344,y:339.2164},0).wait(1).to({scaleX:2.7859,x:667.3448,y:340.8421},0).wait(1).to({x:667.3456,y:342.4679},0).wait(1).to({scaleX:2.7858,x:667.3464,y:344.0936},0).wait(1).to({scaleX:2.7857,x:667.3472,y:345.7194},0).wait(1).to({scaleX:2.7856,x:667.348,y:347.3451},0).wait(1).to({scaleX:2.7855,x:667.3488,y:348.9709},0).wait(1).to({scaleX:2.7854,x:667.3496,y:350.5967},0).wait(1).to({scaleX:2.7853,x:667.3504,y:352.2224},0).wait(1).to({scaleX:2.7852,x:667.3512,y:353.8482},0).wait(1).to({x:667.352,y:355.4739},0).wait(1).to({scaleX:2.7851,x:667.3528,y:357.0997},0).wait(1).to({scaleX:2.785,x:667.3536,y:358.7254},0).wait(1).to({scaleX:2.7849,x:667.3544,y:360.3512},0).wait(1).to({scaleX:2.7848,x:667.3552,y:361.9769},0).wait(1).to({scaleX:2.7847,x:667.3561,y:363.6027},0).wait(1).to({scaleX:2.7846,x:667.3569,y:365.2284},0).wait(1).to({x:667.3577,y:366.8542},0).wait(1).to({scaleX:2.7845,x:667.3585,y:368.4799},0).wait(1).to({scaleX:2.7844,x:667.3593,y:370.1057},0).wait(1).to({scaleX:2.7843,x:667.3601,y:371.7314},0).wait(1).to({scaleX:2.7842,x:667.3609,y:373.3572},0).wait(1).to({scaleX:2.7841,x:667.3617,y:374.9829},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BartenderMonster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BartenderMonster
	this.instance = new lib.Bartender();
	this.instance.setTransform(1119.35,-290.2,17.2147,9.8648,0,0,0,1.4,-44.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(1).to({regX:0,regY:-50.4,scaleX:17.2127,scaleY:9.8645,x:1095.25,y:-346.7},0).wait(1).to({scaleX:17.2108,scaleY:9.8642,y:-345},0).wait(1).to({scaleX:17.2088,scaleY:9.8639,y:-343.3},0).wait(1).to({scaleX:17.2069,scaleY:9.8636,y:-341.55},0).wait(1).to({scaleX:17.2049,scaleY:9.8633,y:-339.85},0).wait(1).to({scaleX:17.2029,scaleY:9.863,y:-338.15},0).wait(1).to({scaleX:17.201,scaleY:9.8627,y:-336.45},0).wait(1).to({scaleX:17.199,scaleY:9.8623,y:-334.7},0).wait(1).to({scaleX:17.1971,scaleY:9.862,y:-333},0).wait(1).to({scaleX:17.1951,scaleY:9.8617,y:-331.3},0).wait(1).to({scaleX:17.1932,scaleY:9.8614,y:-329.55},0).wait(1).to({scaleX:17.1912,scaleY:9.8611,y:-327.85},0).wait(1).to({scaleX:17.1892,scaleY:9.8608,y:-326.15},0).wait(1).to({scaleX:17.1873,scaleY:9.8605,y:-324.4},0).wait(1).to({scaleX:17.1853,scaleY:9.8602,y:-322.7},0).wait(1).to({scaleX:17.1834,scaleY:9.8599,y:-321},0).wait(1).to({scaleX:17.1814,scaleY:9.8595,y:-319.25},0).wait(1).to({scaleX:17.1794,scaleY:9.8592,y:-317.55},0).wait(1).to({scaleX:17.1775,scaleY:9.8589,x:1095.3,y:-315.85},0).wait(1).to({scaleX:17.1755,scaleY:9.8586,y:-314.1},0).wait(1).to({scaleX:17.1736,scaleY:9.8583,y:-312.4},0).wait(1).to({scaleX:17.1716,scaleY:9.858,y:-310.7},0).wait(1).to({scaleX:17.1697,scaleY:9.8577,y:-309},0).wait(1).to({scaleX:17.1677,scaleY:9.8574,y:-307.25},0).wait(1).to({scaleX:17.1657,scaleY:9.857,y:-305.55},0).wait(1).to({scaleX:17.1638,scaleY:9.8567,y:-303.85},0).wait(1).to({scaleX:17.1618,scaleY:9.8564,y:-302.1},0).wait(1).to({scaleX:17.1599,scaleY:9.8561,y:-300.4},0).wait(1).to({scaleX:17.1579,scaleY:9.8558,y:-298.7},0).wait(1).to({scaleX:17.1559,scaleY:9.8555,y:-296.95},0).wait(1).to({scaleX:17.154,scaleY:9.8552,y:-295.25},0).wait(1).to({scaleX:17.152,scaleY:9.8549,y:-293.55},0).wait(1).to({scaleX:17.1501,scaleY:9.8546,y:-291.8},0).wait(1).to({scaleX:17.1481,scaleY:9.8542,y:-290.1},0).wait(1).to({scaleX:17.1462,scaleY:9.8539,y:-288.4},0).wait(1).to({scaleX:17.1442,scaleY:9.8536,y:-286.65},0).wait(1).to({scaleX:17.1422,scaleY:9.8533,y:-284.95},0).wait(1).to({scaleX:17.1403,scaleY:9.853,x:1095.35,y:-283.25},0).wait(1).to({scaleX:17.1383,scaleY:9.8527,y:-281.5},0).wait(1).to({scaleX:17.1364,scaleY:9.8524,y:-279.8},0).wait(1).to({scaleX:17.1344,scaleY:9.8521,y:-278.1},0).wait(1).to({scaleX:17.1324,scaleY:9.8517,y:-276.4},0).wait(1).to({scaleX:17.1305,scaleY:9.8514,y:-274.65},0).wait(1).to({scaleX:17.1285,scaleY:9.8511,y:-272.95},0).wait(1).to({scaleX:17.1266,scaleY:9.8508,y:-271.25},0).wait(1).to({scaleX:17.1246,scaleY:9.8505,y:-269.5},0).wait(1).to({scaleX:17.1227,scaleY:9.8502,y:-267.8},0).wait(1).to({scaleX:17.1207,scaleY:9.8499,y:-266.1},0).wait(1).to({scaleX:17.1187,scaleY:9.8496,y:-264.35},0).wait(1).to({scaleX:17.1168,scaleY:9.8492,y:-262.65},0).wait(1).to({scaleX:17.1148,scaleY:9.8489,y:-260.95},0).wait(1).to({scaleX:17.1129,scaleY:9.8486,y:-259.2},0).wait(1).to({scaleX:17.1109,scaleY:9.8483,y:-257.5},0).wait(1).to({scaleX:17.1089,scaleY:9.848,y:-255.8},0).wait(1).to({scaleX:17.107,scaleY:9.8477,y:-254.05},0).wait(1).to({scaleX:17.105,scaleY:9.8474,y:-252.35},0).wait(1).to({scaleX:17.1031,scaleY:9.8471,x:1095.4,y:-250.65},0).wait(1).to({scaleX:17.1011,scaleY:9.8468,y:-248.95},0).wait(1).to({scaleX:17.0992,scaleY:9.8464,y:-247.2},0).wait(1).to({scaleX:17.0972,scaleY:9.8461,y:-245.5},0).wait(1).to({scaleX:17.0952,scaleY:9.8458,y:-243.8},0).wait(1).to({scaleX:17.0933,scaleY:9.8455,y:-242.05},0).wait(1).to({scaleX:17.0913,scaleY:9.8452,y:-240.35},0).wait(1).to({scaleX:17.0894,scaleY:9.8449,y:-238.65},0).wait(1).to({scaleX:17.0874,scaleY:9.8446,y:-236.9},0).wait(1).to({scaleX:17.0854,scaleY:9.8443,y:-235.2},0).wait(1).to({scaleX:17.0835,scaleY:9.8439,y:-233.5},0).wait(1).to({scaleX:17.0815,scaleY:9.8436,y:-231.75},0).wait(1).to({scaleX:17.0796,scaleY:9.8433,y:-230.05},0).wait(1).to({scaleX:17.0776,scaleY:9.843,y:-228.35},0).wait(1).to({scaleX:17.0757,scaleY:9.8427,y:-226.6},0).wait(1).to({scaleX:17.0737,scaleY:9.8424,y:-224.9},0).wait(1).to({scaleX:17.0717,scaleY:9.8421,y:-223.2},0).wait(1).to({scaleX:17.0698,scaleY:9.8418,y:-221.45},0).wait(1).to({scaleX:17.0678,scaleY:9.8415,y:-219.75},0).wait(1).to({scaleX:17.0659,scaleY:9.8411,x:1095.45,y:-218.05},0).wait(1).to({scaleX:17.0639,scaleY:9.8408,y:-216.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BarBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BarBG
	this.instance = new lib.BarBGBack();
	this.instance.setTransform(700.9,15.4,0.9998,0.9998,0,0,0,971.4,578.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bar
	this.instance = new lib.BarTableFront();
	this.instance.setTransform(820.15,586.25,3.0155,4.2203,0,0,0,2211.1,901.8);

	this.instance_1 = new lib.Bartender("synched",0);
	this.instance_1.setTransform(655.65,-619.3,19.2029,10.5209,0,0,0,0,-50.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332303").ss(2,1,1).p("EhfBgALIjVgFEBiXAARIgNAAMiPHgAW");
	this.shape.setTransform(386.175,-83.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(2,2,1).p("ABLzzIAAADIg/QpIgCAYIhTWi");
	this.shape_1.setTransform(-214.5409,-213.6716);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E806F").s().p("AA2R2IgzgBQgJAAgEgEQgDgCgCgEIgaABIg3gDQgNgCgKAAIgYAEQgLAAgKgCIgDAAIgGADQgWAOgYgFQgagEgRgSQgVgUgHghQgIghAHgeIAIgWQgHgbAFgcQAGgYANgVQgEgUAEgUIACgHIAEgNIACgDIAAgDQAGgQAMgNQABgDACgBQAEgNAGgLIADgDQgCgPADgPQAGggAUgYQANgPAOgHIAIgYQABgGADgFIABgSIAJgwIABgGIAAgHQAEgxAbgmIAWh7QAKghANgbIAShqQAMhEAMgiQAPgiAEgVQADgJADgeQACgaAEgOQAFgLAHgIIAAgRQACgeANgZIADgEIAAgCQACgbAMgTQgBgvAMgfQAHgLAHgJQAAgTAFgSQADgMAGgJIAAgXQAAgmAHgcQAGglARgYQACgDAEgBQABgbACgIIANghQAKgOADgHIABgQQABgaAMgcQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAFgjASguIAJgcQAAgHADgFIAEgSIADgfQAEgeAMgcIAEgFIACgOIASg9QgCgSAAgXQAAggAKgPIACAAQABgTAGgUIADgMQAGgGAFACQAFABADALQARA0gSAuIgDAJQAAAUgJAWQADANAAAUIAAAKIAAAGQAAAfgBAGIgIAcQgCAOgBAdQAAARgFAYQAFAVAAAfQACBTgBAoIgEAsIgIAoIgBATQABAEACAEQAKAcgBAbIgHA6QgCAJACApIAAAKIgCAYIgCAQQgFAZgMASQALAYAAAbQAAAigRAdIAAABQAFANADARQAFAZgHAcIgCANQgBAegFAOQgFATgNAdIABAFQAWBZgTA4IgKAiIgBAmQgBARgKAeIADAGQACAZgBALQAAAtgIArQAAANgDAIQAAAfgFAcQACADABADQAVA1gIA/QgFAcgHAfIgMA3IAAABQAUAvgSA0QgGAOgIANIAAAYIABARIAAAHIAFAzQABAfgGAXIAABWIgNgBQgZgEgRgTQgVgTgIgiQgIghAIgeIAIgVQgIgcAGgbQAFgZAOgUQgFgVAFgTQhUEKBSAjIgIAAIgCAAQgKADgKAAQgJAAgIgDg");
	this.shape_2.setTransform(-239.1186,-201.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4B5A1").s().p("Eim1DhxQjvgDjbgPQligXkogzQpJhnrvkeQgRgG0LoUQuMlmnAjBQknh/kFh/MIXFAAAQlaCAk2BSQlbBbqgBwQq2B0lFBRQnsB8wnGTQvqF7otB4QoDBtqJAlQmOATsHgBMkJngARQ3WgCs/AUQhcAEhTABQqnASjqAAIgYAAgElD9CNuQxiwMnbydQhrkNholjQg/jVhwmsQhomJgwjPQhQlRgrkUQhOnqgTqIQgIj6gDuCQgQzuAIp2QAMw8BksdQBJpCCNqFQAciAAfiCQBGk0BglfQBjluB9mfQEAtaIw6eMAOigrxQBpk+AsicQBLkKAgjfQAQh1AYkjQAUkHAZiRQAmjeBRilQBajACFheQBxhQDLggQEdgvAvgNQCbgwDRiYQDkivB2hOQFmjnHjhDQFlgxIRAkQKmAtNlCQQGFBBR9DeQPCC4JABRQNQB5K8AOQMpASPxh6QJZhJS6jLQYhkGMbisQUbkaP6l1QDKhHGQiVQFdh9ECg7QF+hVHxgRQDqgIKNALQKuANVdgEQVdgCKuAMUAmUAAuAqXAErUAlPAEHArCAHhQEKAtCRA1QDfBUCJCdQBtB6BbDQQAmBbBoEmQDhKDFqLqQDfHMHNNgQHdN2DVGxQFtLrDnJ9QEiMhF/ZwQDeO1C3KUUgcEgAHgiagACIgbAAMjEkgAMMiPHgAXMCPHAAXIANAAQmKAImRAAIAAAKMggyAABIsLAHIgOAAQACgHADgBQABgEACgBIy5gIIgBANI4HAAIAAgNI3rAAQAAgGACgFI2UAAIAAgFI21gIIAAgIIyVgDImdgMQgPAAgMgFQhSgkBUkKQgFAUAFAUQgOAVgFAYQgGAcAIAbIgIAWQgIAeAIAhQAIAhAVAUQARASAZAEIANACIAJgBQANgCALgIIAHgDIACAAQAKACAMAAIAXgEQAKAAAOACIA2ADIAbgBQABAEADACQAFAEAKAAIAyABQARAFAUgFIACAAIBGAAIAAhWQAFgXgBgfIgEgzIAAgHIgBgRIAAgYQAHgNAGgOQATg0gUgvIAAgBIALg3QAIgfAEgcQAIg/gVg1QAAgDgCgDQAEgcAAgfQADgIABgNQAHgrAAgtQABgLgCgZIgCgGQAJgeABgRIABgmIAKgiQATg4gVhZIgBgFQAMgdAGgTQAEgPABgeIADgNQAGgcgEgZQgDgRgFgNIAAgBQARgdAAgiQAAgbgLgYQAMgSAEgZIADgQIBAxDIlxAAMhUXAAAMgznAmRIAMAAMgu5BbGMAAABhaIgkghgEFo7BZ0IADBKQAWGfghILQhBQtjyMtgEiVhgsvIDIABIDVAFImxABgEiUwg00IIC/sIg/QqIAAgLQgCgoACgKIAHg5QABgcgKgbQgCgEgBgFIABgSIAIgoIAEgsQABgogChTQAAgggFgUQAFgZAAgQQABgeACgNIAIgdQABgFAAggIAAgGIAAgJQAAgVgDgNQAJgWAAgUIADgIQASgugRg1QgDgLgFgBQgFgCgGAGIgDANQgGATgBATIgCABQgKAPAAAgQAAAWACATIgSA8IgCAOIgEAGQgMAbgEAfIgDAfIgEARQgDAFAAAHIgJAcQgSAugFAkQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgMAcgBAZIgBARQgDAHgKANIgNAiQgCAHgBAcQgEABgCADQgRAXgGAlQgHAcAAAnIAAAWQgGAKgDAMQgFARAAAUQgHAIgHALQgMAfABAvQgMAUgCAaIAAACIgDAEQgNAZgCAfIAAAQQgHAIgFAMQgFAOgCAaQgDAdgDALQgEAUgPAjQgMAigMBDIgSBrQgNAagKAhIgWB7QgbAmgEAxIAAAHIgBAHIgJAwIgBARQgDAFgBAGIgIAZQgOAGgNAPQgUAYgGAhQgDAOACAQIgDADQgGALgEAMQgCABgBADQgMAOgGAQQAZhQAphjg");
	this.shape_3.setTransform(693.6807,200.6591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]},118).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.HalfCostumer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(0.4).p("AAUAAIgmAA");
	this.shape.setTransform(274.7744,88.835,3.4865,3.4865,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AgOADIAKgEQAKgDAJAH");
	this.shape_1.setTransform(218.0319,87.7854,3.4865,3.4865,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABAAAQAAAagTATQgTATgaAAQgaAAgTgTQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAag");
	this.shape_2.setTransform(190.4887,88.9221,3.4865,3.4865,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AjfAAQAABcBCBCQBCBCBcAAQBcAABDhCQBAhCAAhcQAAhchAhCQhDhBhcAAQhcAAhCBBQhCBCAABcg");
	this.shape_3.setTransform(245.575,88.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AAKALIgyACIgBgcIAvABQAJAAAIAHIATAXg");
	this.shape_4.setTransform(196.0569,63.1735,3.4865,3.4865,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgMAFIgkgEIAbgSQAKgEAJACIA0ANIgIAbg");
	this.shape_5.setTransform(250.7957,74.7909,3.4865,3.4865,0,14.9992,-165.0008);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D26665").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_6.setTransform(219.4164,154.9551,3.4865,3.4865,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D26665").ss(0.7,1,1).p("ACOgOQiFASg1AGQg2AHgrgE");
	this.shape_7.setTransform(221.775,129.4113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D26665").ss(0.5,1,1).p("AgQgLIAhAX");
	this.shape_8.setTransform(200.0664,93.8546,3.4865,3.4865,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D26665").ss(0.5,1,1).p("AASgLIgkAX");
	this.shape_9.setTransform(242.6015,93.8546,3.4865,3.4865,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_10.setTransform(197.6259,83.9181,3.4865,3.4865,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1A1A").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_11.setTransform(245.6521,83.9181,3.4865,3.4865,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D26665").ss(0.7,1,1).p("AAQgjIAAA5QAAADAAACQgCAFgFACQgFACgEgBIgPgE");
	this.shape_12.setTransform(219.4164,103.9363,3.4865,3.4865,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("ABrAgQg1AShVgVQg3gNg6gZQgBA5gbBiQgQhpAbg6IgBAAQgGgUAGgYQAMgwBAgRIAFABQAFAEAAALQA1gZA6gIQBHgJAlAaQAwAigPA1QgIAagSATIgOAMQAMA5gLBHQgVhBgJgxg");
	this.shape_13.setTransform(222.2233,39.4107,3.4865,3.4865,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3A396").s().p("AhBDdQgdgTgUgcQgUgdgGgiQgQhTgChaQgDgtARgsQAkhYBrACQBqACAmBXQASArgCArQAABZgTBVQgHAggSAaQgTAbgbASIgHAEQgdATgiAAIgBAAQgiAAgdgRg");
	this.shape_14.setTransform(228.6182,87.835,3.4865,3.4865,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D26665").ss(0.7,1,1).p("AAIgRIgKAKQgJALALAO");
	this.shape_15.setTransform(290.2043,98.4506,3.4857,3.4857,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D26665").ss(0.7,1,1).p("AgUgNIAOABQAQAFALAV");
	this.shape_16.setTransform(290.7216,93.377,3.4851,3.4851,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3A396").s().p("AgXAVQghg4AcgUQAWgRAVASQAKAJAGANIALAlIgEAqIACAMIgDABQgHAEgHAAQgWAAgYgrg");
	this.shape_17.setTransform(293.5052,96.3002,3.4862,3.4862,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E88E85").s().p("AgmA5IgDgBIAMgyIAFgpIASgTQAUgQASATQAXAWgjA1QgYAngTAAQgIAAgHgGg");
	this.shape_18.setTransform(175.3153,95.9917,3.4862,3.4862,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A1A1A").s().p("Ai6gOQgJgxArgiQAlgcAsAAICnAAQAtAAAbAdQAgAjgSA4IgPB6IlJAIg");
	this.shape_19.setTransform(233.7498,60.9945,3.4865,3.4865,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1A1A").s().p("AhIACIgmhMIAcAqQAmApAuAAQAqAAAlgmQATgTAKgUIABAVQAAAagFAVQgTBFhEAGIgEAAQgpAAguhJg");
	this.shape_20.setTransform(232.3314,160.9081,3.4862,2.3457,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3A396").s().p("AhOCPQghghAAgvIAAjtIDfAAIAADtQAAAvggAhQgiAgguAAQguAAggggg");
	this.shape_21.setTransform(232.68,176.308,3.4862,2.3457,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3A396").s().p("AgBAvQhQAAgigkQgLgKgFgMIgDgLIA4gYICdAAIA3AYQgBASgRAPQgjAkhRAAg");
	this.shape_22.setTransform(232.6995,204.5499,5.3059,2.9468);

	this.instance = new lib.torso();
	this.instance.setTransform(239.35,291.5,5.3059,2.9468,0,0,0,27.9,34.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3A396").s().p("AAnE3QgWgNgIgZIiLnqQgHgjAUgdQAUgeAjgFQAhgFAbATQAaATAGAgIBlHuQAFAYgMAVQgNAVgYAHQgJACgJAAQgPAAgPgHg");
	this.shape_23.setTransform(359.5605,305.0202,5.3052,2.9467,8.2297);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3A396").s().p("AhhimQgJgbAPgYQAPgZAcgFQAagEAVAPQAUAPAFAZIBOGtIhIAQg");
	this.shape_24.setTransform(397.9849,442.8427,5.3001,2.9432,8.2295);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3A396").s().p("AgXAAIgNAfQgDAHgHAAQgIgBgBgIIgFgkQgDgYAIgTQAFgMAHgHIAFgGQgDgMAIgLQAHgLANgDIAMgCQALgCAKAHQAKAHADALIAAABIAMAcQANAiADAiQAEAygRAgQgOAbgUAAIAAAAQgUAAgRhzg");
	this.shape_25.setTransform(420.1125,542.5335,5.3001,2.9432,8.2295);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3A396").s().p("AhWE8QgYgHgMgVQgNgVAFgYIBlnuQAGggAagTQAcgTAgAFQAjAFAUAeQAUAdgHAjIiLHqQgHAZgXANQgPAHgPAAQgJAAgJgCg");
	this.shape_26.setTransform(99.2005,306.7276,5.3052,2.9466,-6.7104);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3A396").s().p("AhlDpIBOmtQAFgZAUgPQAVgPAaAEQAcAFAPAZQAPAYgIAbIiAGfg");
	this.shape_27.setTransform(56.7458,443.4491,5.3036,2.9438,-6.7101);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3A396").s().p("AgNBzQgUAAgOgbQgRggAEgyQADgiANgiIAMgcIAAgBQADgLAKgHQAKgHALACIAMACQANADAHALQAIALgDAMIAGAGQAHAHAEAMQAIASgDAZIgFAkQgBAIgIABQgHAAgDgHIgNgfQgIAxgFAUQgLAugNAAIAAAAg");
	this.shape_28.setTransform(31.8571,542.5651,5.3036,2.9438,-6.7101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance},{t:this.shape_22}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HalfCostumer, new cjs.Rectangle(0,-11.4,451.8,588.8), null);


(lib.FrontCostumer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D26665").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape.setTransform(219.4164,166.4051,3.4865,3.4865,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D26665").ss(0.5,1,1).p("AgQgLIAhAX");
	this.shape_1.setTransform(200.0664,105.3046,3.4865,3.4865,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D26665").ss(0.5,1,1).p("AASgLIgkAX");
	this.shape_2.setTransform(242.6015,105.3046,3.4865,3.4865,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D26665").ss(0.7,1,1).p("AAQgjIAAA5QAAADAAACQgCAFgFACQgFACgEgBIgPgE");
	this.shape_3.setTransform(219.4164,115.3863,3.4865,3.4865,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("ABrAgQg1AShVgVQg3gNg6gZQgBA5gbBiQgQhpAbg6IgBAAQgGgUAGgYQAMgwBAgRIAFABQAFAEAAALQA1gZA6gIQBHgJAlAaQAwAigPA1QgIAagSATIgOAMQAMA5gLBHQgVhBgJgxg");
	this.shape_4.setTransform(222.2233,50.8607,3.4865,3.4865,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3A396").s().p("AhBDdQgdgTgUgcQgUgdgGgiQgQhTgChaQgDgtARgsQAkhYBrACQBqACAmBXQASArgCArQAABZgTBVQgHAggSAaQgTAbgbASIgHAEQgdATgiAAIgBAAQgiAAgdgRg");
	this.shape_5.setTransform(228.6182,99.285,3.4865,3.4865,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D26665").ss(0.7,1,1).p("AAIgRIgKAKQgJALALAO");
	this.shape_6.setTransform(290.2149,109.8333,3.4836,3.4836,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D26665").ss(0.7,1,1).p("AgUgNIAOABQAQAFALAV");
	this.shape_7.setTransform(290.743,104.6927,3.4806,3.4806,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3A396").s().p("AgXAVQghg4AcgUQAWgRAVASQAKAJAGANIALAlIgEAqIACAMIgDABQgHAEgHAAQgWAAgYgrg");
	this.shape_8.setTransform(293.5079,107.729,3.4855,3.4855,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E88E85").s().p("AgmA5IgDgBIAMgyIAFgpIASgTQAUgQASATQAXAWgjA1QgYAngTAAQgIAAgHgGg");
	this.shape_9.setTransform(175.3414,107.4206,3.4855,3.4855,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("Ai6gOQgJgxArgiQAlgcAsAAICnAAQAtAAAbAdQAgAjgSA4IgPB6IlJAIg");
	this.shape_10.setTransform(233.7498,72.4445,3.4865,3.4865,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1A1A").s().p("AhIACIgmhMIAcAqQAmApAuAAQAqAAAlgmQATgTAKgUIABAVQAAAagFAVQgTBFhEAGIgEAAQgpAAguhJg");
	this.shape_11.setTransform(232.3401,172.3277,3.4858,2.3451,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3A396").s().p("AhOCPQghghAAgvIAAjtIDfAAIAADtQAAAvggAhQgiAgguAAQguAAggggg");
	this.shape_12.setTransform(232.6887,187.7236,3.4858,2.3451,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3A396").s().p("AgBAvQhQAAgigkQgLgKgFgMIgDgLIA4gYICdAAIA3AYQgBASgRAPQgjAkhRAAg");
	this.shape_13.setTransform(232.6995,215.9999,5.3059,2.9468);

	this.instance = new lib.torso();
	this.instance.setTransform(239.35,302.95,5.3059,2.9468,0,0,0,27.9,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3A396").s().p("AAnE3QgWgNgIgZIiLnqQgHgjAUgdQAUgeAjgFQAhgFAbATQAaATAGAgIBlHuQAFAYgMAVQgNAVgYAHQgJACgJAAQgPAAgPgHg");
	this.shape_14.setTransform(359.5605,316.4702,5.3052,2.9467,8.2297);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3A396").s().p("AhhimQgJgbAPgYQAPgZAcgFQAagEAVAPQAUAPAFAZIBOGtIhIAQg");
	this.shape_15.setTransform(397.763,454.1515,5.2974,2.9414,8.2293);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3A396").s().p("AgXAAIgNAfQgDAHgHAAQgIgBgBgIIgFgkQgDgYAIgTQAFgMAHgHIAFgGQgDgMAIgLQAHgLANgDIAMgCQALgCAKAHQAKAHADALIAAABIAMAcQANAiADAiQAEAygRAgQgOAbgUAAIAAAAQgUAAgRhzg");
	this.shape_16.setTransform(419.881,553.7842,5.2974,2.9414,8.2293);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3A396").s().p("AhWE8QgYgHgMgVQgNgVAFgYIBlnuQAGggAagTQAcgTAgAFQAjAFAUAeQAUAdgHAjIiLHqQgHAZgXANQgPAHgPAAQgJAAgJgCg");
	this.shape_17.setTransform(99.2005,318.1776,5.3052,2.9466,-6.7104);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3A396").s().p("AhlDpIBOmtQAFgZAUgPQAVgPAaAEQAcAFAPAZQAPAYgIAbIiAGfg");
	this.shape_18.setTransform(56.7161,454.7572,5.3026,2.9423,-6.7102);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3A396").s().p("AgNBzQgUAAgOgbQgRggAEgyQADgiANgiIAMgcIAAgBQADgLAKgHQAKgHALACIAMACQANADAHALQAIALgDAMIAGAGQAHAHAEAMQAIASgDAZIgFAkQgBAIgIABQgHAAgDgHIgNgfQgIAxgFAUQgLAugNAAIAAAAg");
	this.shape_19.setTransform(31.8292,553.835,5.3026,2.9423,-6.7102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrontCostumer, new cjs.Rectangle(0,0,451.5,588.6), null);


(lib.Fainting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D26665").ss(0.7,1,1).p("ACBAAQAAATgmAOQgmAOg1AAQg1AAgmgOQgmgOAAgTQAAgTAmgOQAmgNA1AAQA1AAAmANQAmAOAAATg");
	this.shape.setTransform(221.6,144.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#38141F").s().p("AhbAhQgmgOAAgTQAAgTAmgOQAmgNA1AAQA2AAAlANQAmAOAAATQAAATgmAOQglAOg2AAQg1AAgmgOg");
	this.shape_1.setTransform(221.6,144.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AAKALIgyACIgBgcIAvABQAJAAAIAHIATAXg");
	this.shape_2.setTransform(196.5069,71.1735,3.4865,3.4865,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AgMAFIgkgEIAbgSQAKgEAJACIA0ANIgIAbg");
	this.shape_3.setTransform(251.2457,71.7909,3.4865,3.4865,0,14.9992,-165.0008);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(198.0759,86.9181,3.4865,3.4865,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgkAlQgOgPgBgVQABgWAOgOQAPgPAVAAQAWAAAOAPQAQAOAAAWQAAAVgQAPQgOAOgWAAQgVAAgPgOg");
	this.shape_5.setTransform(246.1,86.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A1A1A").ss(0.4).p("AAUAAIgmAA");
	this.shape_6.setTransform(275.8244,94.435,3.4865,3.4865,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AgOADIAKgEQAKgDAJAH");
	this.shape_7.setTransform(219.0819,93.3854,3.4865,3.4865,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABAAAQAAAagTATQgTATgaAAQgaAAgTgTQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAag");
	this.shape_8.setTransform(191.5387,94.5221,3.4865,3.4865,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AjfAAQAABcBCBCQBCBCBcAAQBcAABDhCQBAhCAAhcQAAhchAhCQhDhBhcAAQhcAAhCBBQhCBCAABcg");
	this.shape_9.setTransform(246.625,94.5);

	this.instance = new lib.FrontCostumer();
	this.instance.setTransform(225.8,294.4,1,1,0,0,0,225.8,294.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fainting, new cjs.Rectangle(0,0,451.5,588.6), null);


(lib.Faint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fainting
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D26665").ss(0.7,1,1).p("AB2AAQAAAGgjAFQgiAEgxAAQgvAAgjgEQgjgFAAgGQAAgFAjgFQAjgEAvAAQAxAAAiAEQAjAFAAAFg");
	this.shape.setTransform(-4.6,-152.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#38141F").s().p("AhSAKQgjgEAAgGQAAgFAjgEQAigFAwAAQAwAAAjAFQAjAEgBAFQABAGgjAEQgjAFgwAAQgwAAgigFg");
	this.shape_1.setTransform(-4.6,-152.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AAKALIgyACIgBgcIAvABQAJAAAIAHIATAXg");
	this.shape_2.setTransform(-29.3431,-217.2265,3.4865,3.4865,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AgMAFIgkgEIAbgSQAKgEAJACIA0ANIgIAbg");
	this.shape_3.setTransform(25.3957,-216.6091,3.4865,3.4865,0,14.9992,-165.0008);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(-27.7741,-199.4819,3.4865,3.4865,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgkAlQgOgPgBgVQABgWAOgOQAPgPAVAAQAWAAAOAPQAQAOAAAWQAAAVgQAPQgOAOgWAAQgVAAgPgOg");
	this.shape_5.setTransform(20.25,-199.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A1A1A").ss(0.4).p("AAUAAIgmAA");
	this.shape_6.setTransform(49.9744,-199.965,3.4865,3.4865,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AgOADIAKgEQAKgDAJAH");
	this.shape_7.setTransform(-6.7681,-201.0146,3.4865,3.4865,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("ABAAAQAAAagTATQgTATgaAAQgaAAgTgTQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAag");
	this.shape_8.setTransform(-34.3113,-199.8779,3.4865,3.4865,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1A1A1A").ss(0.4,1,1).p("AjfAAQAABcBCBCQBCBCBcAAQBcAABDhCQBAhCAAhcQAAhchAhCQhDhBhcAAQhcAAhCBBQhCBCAABcg");
	this.shape_9.setTransform(20.775,-199.9);

	this.instance = new lib.FrontCostumer();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,225.8,294.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah1AAQAAgGAigFQAjgFAwAAQAxAAAjAFQAiAFAAAGQAAAHgiAFQgjAFgxAAQgwAAgjgFQgigFAAgHg");
	this.shape_10.setTransform(-4.6,-152.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#38141F").s().p("AhTALQgigEAAgHQAAgGAigFQAjgEAwAAQAxAAAjAEQAiAFAAAGQAAAHgiAEQgjAFgxABQgwgBgjgFg");
	this.shape_11.setTransform(-4.6,-152.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A1A1A").s().p("ACvCFQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCFQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlrhvQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExgxIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_12.setTransform(-1,-209.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah2AAQAAgGAjgGQAjgFAwAAQAxAAAjAFQAjAGAAAGQAAAHgjAGQgjAFgxAAQgwAAgjgFQgjgGAAgHg");
	this.shape_13.setTransform(-4.575,-152.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#38141F").s().p("AhTANQgjgGAAgHQAAgGAjgGQAjgFAwAAQAxAAAjAFQAjAGAAAGQAAAHgjAGQgjAFgxAAQgwAAgjgFg");
	this.shape_14.setTransform(-4.575,-152.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A1A1A").s().p("ACvCGQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCGQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlrhwQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExgyIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_15.setTransform(-1,-209.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah2AAQAAgHAigGQAkgFAwAAQAxAAAjAFQAjAGAAAHQAAAIgjAGQgjAGgxAAQgwAAgkgGQgigGAAgIg");
	this.shape_16.setTransform(-4.55,-152.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#38141F").s().p("AhTAOQgjgGAAgIQAAgHAjgGQAjgGAwAAQAxAAAjAGQAjAGAAAHQAAAIgjAGQgjAGgxAAQgwAAgjgGg");
	this.shape_17.setTransform(-4.55,-152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1A1A").s().p("ACvCHQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCHQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlrhxQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExgzIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_18.setTransform(-1,-209.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah3AAQAAgHAjgHQAjgGAxAAQAxAAAjAGQAkAHAAAHQAAAJgkAGQgjAGgxAAQgxAAgjgGQgjgGAAgJg");
	this.shape_19.setTransform(-4.525,-151.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#38141F").s().p("AhUAPQgjgGAAgJQAAgHAjgHQAjgGAxAAQAxAAAjAGQAkAHAAAHQAAAJgkAGQgjAGgxAAQgxAAgjgGg");
	this.shape_20.setTransform(-4.525,-151.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1A1A1A").s().p("ACvCIQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCIQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrhzQAdgYAdAAICpgDIgCBkIi0gHIhvAUgAExg0IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_21.setTransform(-1,-209.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah3AAQAAgIAjgHQAjgHAxAAQAyAAAjAHQAjAHAAAIQAAAJgjAHQgjAHgyAAQgxAAgjgHQgjgHAAgJg");
	this.shape_22.setTransform(-4.525,-151.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#38141F").s().p("AhUAQQgjgHAAgJQAAgIAjgHQAjgHAxAAQAyAAAjAHQAjAHAAAIQAAAJgjAHQgjAHgyAAQgxAAgjgHg");
	this.shape_23.setTransform(-4.525,-151.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1A1A1A").s().p("ACvCJQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCJQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrhzQAdgZAdAAICpgDIgCBlIi0gIIhvAUgAExg1IjIAEIgBhlIC8AFQAiABAeAXIBKBXg");
	this.shape_24.setTransform(-1,-209.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah4AAQAAgJAjgHQAkgHAxAAQAyAAAkAHQAjAHAAAJQAAAKgjAHQgkAHgyAAQgxAAgkgHQgjgHAAgKg");
	this.shape_25.setTransform(-4.5,-151.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#38141F").s().p("AhVARQgjgHAAgKQAAgJAjgHQAkgHAxAAQAyAAAjAHQAkAHAAAJQAAAKgkAHQgjAHgyAAQgxAAgkgHg");
	this.shape_26.setTransform(-4.5,-151.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1A1A1A").s().p("ACvCKQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCKQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrh0QAdgZAdAAICpgEIgCBmIi0gHIhvATgAExg2IjIAEIgBhlIC8AFQAiACAeAWIBKBXg");
	this.shape_27.setTransform(-1,-209.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah4AAQAAgJAjgIQAkgIAxAAQAyAAAkAIQAjAIAAAJQAAALgjAHQgkAIgyAAQgxAAgkgIQgjgHAAgLg");
	this.shape_28.setTransform(-4.5,-151.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#38141F").s().p("AhVASQgjgHgBgLQABgJAjgIQAkgIAxAAQAzAAAjAIQAjAIABAJQgBALgjAHQgjAIgzAAQgxAAgkgIg");
	this.shape_29.setTransform(-4.5,-151.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A1A").s().p("ACvCLQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCLQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrh2QAdgYAdAAICpgEIgCBlIi0gGIhvATgAExg3IjIAFIgBhnIC8AGQAiACAeAWIBKBXg");
	this.shape_30.setTransform(-1,-209.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah5AAQAAgKAjgIQAkgIAyAAQAyAAAkAIQAkAIAAAKQAAALgkAIQgkAIgyAAQgyAAgkgIQgjgIAAgLg");
	this.shape_31.setTransform(-4.45,-151.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#38141F").s().p("AhWATQgjgIAAgLQAAgKAjgIQAlgIAxAAQAyAAAkAIQAkAIAAAKQAAALgkAIQgkAIgyAAQgxAAglgIg");
	this.shape_32.setTransform(-4.45,-151.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1A1A1A").s().p("ACvCMQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCMQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrh3QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg4IjIAFIgBhnIC8AGQAiABAeAXIBKBXg");
	this.shape_33.setTransform(-1,-209.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah6AAQAAgLAkgJQAkgIAyAAQAyAAAkAIQAlAJAAALQAAAMglAIQgkAJgyAAQgyAAgkgJQgkgIAAgMg");
	this.shape_34.setTransform(-4.45,-151.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#38141F").s().p("AhWAUQgkgIAAgMQAAgLAkgJQAlgIAxAAQAyAAAlAIQAjAJABALQgBAMgjAIQglAJgyAAQgxAAglgJg");
	this.shape_35.setTransform(-4.45,-151.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1A1A1A").s().p("ACvCNQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCNQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrh3QAdgZAdAAICpgDIgCBkIi0gHIhvAUgAExg5IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_36.setTransform(-1,-209.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah6AAQAAgMAkgJQAkgJAyAAQAzAAAkAJQAkAJAAAMQAAAMgkAJQgkAJgzAAQgyAAgkgJQgkgJAAgMg");
	this.shape_37.setTransform(-4.425,-151.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#38141F").s().p("AhWAVQgkgJAAgMQAAgMAkgIQAkgJAyAAQAzAAAkAJQAkAIAAAMQAAAMgkAJQgkAJgzAAQgyAAgkgJg");
	this.shape_38.setTransform(-4.425,-151.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1A1A1A").s().p("ACvCOQgOgPAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAPQgOAPgXAAQgWAAgPgPgAkvCOQgQgPAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAPQgQAPgUAAQgWAAgPgPgAlrh4QAdgZAdAAICpgDIgCBlIi0gIIhvAUgAExg6IjIAEIgBhlIC8AFQAiABAeAXIBKBXg");
	this.shape_39.setTransform(-1,-210);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah7AAQAAgMAkgKQAlgJAyAAQAzAAAkAJQAlAKAAAMQAAANglAJQgkAKgzAAQgyAAglgKQgkgJAAgNg");
	this.shape_40.setTransform(-4.425,-151.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#38141F").s().p("AhXAWQgkgJAAgNQAAgMAkgKQAlgJAyAAQAzAAAkAJQAlAKAAAMQAAANglAJQgkAKgzAAQgyAAglgKg");
	this.shape_41.setTransform(-4.425,-151.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1A1A1A").s().p("ACvCQQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCQQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh6QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg7IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_42.setTransform(-1,-210.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah8AAQAAgMAlgKQAkgKAzAAQA0AAAkAKQAlAKAAAMQAAANglAKQgkAKg0AAQgzAAgkgKQglgKAAgNg");
	this.shape_43.setTransform(-4.4,-150.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#38141F").s().p("AhXAXQgkgJAAgOQAAgNAkgKQAkgKAzAAQA0AAAjAKQAlAKAAANQAAAOglAJQgjALg0AAQgzAAgkgLg");
	this.shape_44.setTransform(-4.4,-150.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1A1A1A").s().p("ACvCRQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCRQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh7QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg8IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_45.setTransform(-1,-210.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah8AAQAAgNAkgLQAlgKAzAAQA0AAAkAKQAlALAAANQAAAOglAKQgkALg0AAQgzAAglgLQgkgKAAgOg");
	this.shape_46.setTransform(-4.4,-150.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#38141F").s().p("AhXAYQglgKAAgOQAAgNAlgLQAlgKAyAAQA0AAAkAKQAlALAAANQAAAOglAKQgkALg0AAQgyAAglgLg");
	this.shape_47.setTransform(-4.4,-150.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A1A1A").s().p("ACvCSQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCSQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh8QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg9IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_48.setTransform(-1,-210.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah8AAQAAgPAkgKQAlgLAzAAQAzAAAlALQAlAKAAAPQAAAOglALQglAMgzAAQgzAAglgMQgkgLAAgOg");
	this.shape_49.setTransform(-4.35,-150.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#38141F").s().p("AhYAZQglgLAAgOQAAgOAlgLQAlgLAzAAQAzAAAlALQAlALAAAOQAAAOglALQglAMgzgBQgzABglgMg");
	this.shape_50.setTransform(-4.35,-150.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1A1A1A").s().p("ACvCTQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCTQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh9QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg+IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_51.setTransform(-1,-210.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah9AAQAAgPAkgLQAmgLAzAAQA0AAAlALQAlALAAAPQAAAQglALQglALg0AAQgzAAgmgLQgkgLAAgQg");
	this.shape_52.setTransform(-4.35,-150.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#38141F").s().p("AhZAbQgkgMAAgPQAAgOAkgMQAmgLAzAAQA0AAAlALQAlAMAAAOQAAAPglAMQglALg0AAQgzAAgmgLg");
	this.shape_53.setTransform(-4.35,-150.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1A1A1A").s().p("ACvCUQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCUQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh+QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg/IjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_54.setTransform(-1,-210.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah+AAQAAgPAlgMQAmgLAzAAQA0AAAlALQAmAMAAAPQAAAQgmAMQglAMg0AAQgzAAgmgMQglgMAAgQg");
	this.shape_55.setTransform(-4.325,-150.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#38141F").s().p("AhZAcQglgMAAgQQAAgQAlgLQAmgMAzABQA0gBAlAMQAmALAAAQQAAAQgmAMQglALg0AAQgzAAgmgLg");
	this.shape_56.setTransform(-4.325,-150.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1A1A1A").s().p("ACvCVQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCVQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrh/QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExhAIjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_57.setTransform(-1,-210.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah+AAQAAgRAlgMQAmgLAzAAQA1AAAlALQAlAMAAARQAAAQglANQglAMg1AAQgzAAgmgMQglgNAAgQg");
	this.shape_58.setTransform(-4.325,-150.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#38141F").s().p("AhZAdQglgNAAgQQAAgRAlgMQAmgLAzAAQA1AAAlALQAlAMAAARQAAAQglANQglAMg1AAQgzAAgmgMg");
	this.shape_59.setTransform(-4.325,-150.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1A1A1A").s().p("ACvCWQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCWQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlriAQAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExhBIjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_60.setTransform(-1,-210.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah/AAQAAgRAmgMQAlgNA0AAQA1AAAlANQAmAMAAARQAAARgmANQglANg1AAQg0AAglgNQgmgNAAgRg");
	this.shape_61.setTransform(-4.3,-150.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#38141F").s().p("AhZAeQgmgNAAgRQAAgRAmgMQAlgNA0AAQA1AAAlANQAmAMAAARQAAARgmANQglANg1AAQg0AAglgNg");
	this.shape_62.setTransform(-4.3,-150.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1A1A1A").s().p("ACvCXQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCXQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlriBQAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExhCIjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_63.setTransform(-1,-210.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D26665").ss(0.7,1,1).p("Ah/AAQAAgSAlgNQAmgMA0AAQA1AAAlAMQAmANAAASQAAASgmANQglANg1AAQg0AAgmgNQglgNAAgSg");
	this.shape_64.setTransform(-4.275,-149.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#38141F").s().p("AhaAfQglgNAAgSQAAgRAlgNQAmgNA0AAQA1AAAlANQAmANAAARQAAASgmANQglANg1AAQg0AAgmgNg");
	this.shape_65.setTransform(-4.275,-149.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1A1A1A").s().p("ACvCYQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCYQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriCQAdgZAdAAICpgDIgCBlIi0gHIhvAUgAExhEIjIAFIgBhmIC8AGQAiABAeAWIBKBXg");
	this.shape_66.setTransform(-1,-210.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D26665").ss(0.7,1,1).p("AiAAAQAAgSAlgNQAmgOA1AAQA1AAAlAOQAnANAAASQAAATgnANQglAOg1AAQg1AAgmgOQglgNAAgTg");
	this.shape_67.setTransform(-4.25,-149.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#38141F").s().p("AhbAgQglgNAAgTQAAgSAlgNQAngOA0AAQA1AAAlAOQAnANAAASQAAATgnANQglAOg1AAQg0AAgngOg");
	this.shape_68.setTransform(-4.25,-149.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A1A1A").s().p("ACvCZQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCZQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriDQAdgYAdgBICpgDIgCBlIi0gHIhvATgAExhEIjIAEIgBhmIC8AGQAiABAeAWIBKBYg");
	this.shape_69.setTransform(-1,-211.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#D26665").ss(0.7,1,1).p("ACCAAQAAATgnAOQglAOg2AAQg1AAgmgOQgmgOAAgTQAAgTAmgOQAmgNA1AAQA2AAAlANQAnAOAAATg");
	this.shape_70.setTransform(-4.25,-149.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#38141F").s().p("AhbAhQglgOAAgTQAAgTAlgOQAmgNA1AAQA2AAAlANQAnAOAAATQAAATgnAOQglAOg2AAQg1AAgmgOg");
	this.shape_71.setTransform(-4.25,-149.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1A1A1A").s().p("ACvCaQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCaQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriEQAdgZAdABICpgEIgCBlIi0gHIhvATgAExhFIjIAEIgBhmIC8AFQAiACAeAWIBKBYg");
	this.shape_72.setTransform(-1,-211.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#D26665").ss(0.7,1,1).p("AiBAAQAAgTAmgOQAmgNA1AAQA2AAAlANQAnAOAAATQAAATgnAOQglAOg2AAQg1AAgmgOQgmgOAAgTg");
	this.shape_73.setTransform(-4.25,-149.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1A1A1A").s().p("ACvCbQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCbQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriFQAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExhHIjIAFIgBhmIC8AFQAiACAeAXIBKBWg");
	this.shape_74.setTransform(-1,-211.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1A1A1A").s().p("ACvCcQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCcQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriGQAdgZAdAAICpgDIgCBlIi0gHIhvAUgAExhIIjIAFIgBhmIC8AGQAiABAeAXIBKBWg");
	this.shape_75.setTransform(-1,-211.35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1A1A1A").s().p("ACvCdQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCdQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriHQAdgYAdgBICpgDIgCBlIi0gHIhvATgAExhIIjIAEIgBhmIC8AGQAiABAeAWIBKBXg");
	this.shape_76.setTransform(-1,-211.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1A1A1A").s().p("ACvCeQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCeQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlriIQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExhJIjIAEIgBhmIC8AFQAiACAeAWIBKBYg");
	this.shape_77.setTransform(-1,-211.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A1A1A").s().p("ACvCfQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCfQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlriJQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExhLIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_78.setTransform(-1,-211.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1A1A1A").s().p("ACvCgQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCgQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlriKQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExhMIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_79.setTransform(-1,-211.775);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1A1A1A").s().p("ACvChQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvChQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlriLQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExhNIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_80.setTransform(-1,-211.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1A1A1A").s().p("ACvCcQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXABQgWgBgPgOgAkvCcQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUABQgWgBgPgOgAlriGQAdgZAdAAICpgDIgCBlIi0gIIhvAUgAExhIIjIAEIgBhlIC8AFQAiABAeAXIBKBXg");
	this.shape_81.setTransform(-1,-212.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1A1A1A").s().p("ACvCRQgOgPAAgWQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCRQgQgPAAgWQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlrh7QAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExg9IjIAFIgBhmIC8AFQAiACAeAXIBKBWg");
	this.shape_82.setTransform(-1,-213.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1A1A1A").s().p("ACvCLQgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvCLQgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlrh1QAdgZAdAAICpgDIgCBlIi0gIIhvAUgAExg3IjIAEIgBhlIC8AFQAiABAeAXIBKBXg");
	this.shape_83.setTransform(-1,-214.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1A1A1A").s().p("AhbAhQglgOAAgTQAAgTAlgOQAmgNA1AAQA2AAAlANQAnAOAAATQAAATgnAOQglAOg2AAQg1AAgmgOg");
	this.shape_84.setTransform(-4.25,-149.675);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1A1A1A").s().p("ACvCGQgOgQAAgVQAAgWAOgOQAPgQAWAAQAXAAAOAQQAPAOAAAWQAAAVgPAQQgOAOgXAAQgWAAgPgOgAkvCGQgQgQAAgVQAAgWAQgOQAPgQAWAAQAUAAAQAQQAPAOAAAWQAAAVgPAQQgQAOgUAAQgWAAgPgOgAlrhwQAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExgxIjIAEIgBhmIC8AGQAiABAeAXIBKBXg");
	this.shape_85.setTransform(-1,-214.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1A1A1A").s().p("ACvCAQgOgPAAgWQAAgWAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAWQAAAWgPAPQgOAOgXAAQgWAAgPgOgAkvCAQgQgPAAgWQAAgWAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAWQAAAWgPAPQgQAOgUAAQgWAAgPgOgAlrhqQAdgYAdAAICpgEIgCBlIi0gHIhvAUgAExgsIjIAFIgBhmIC8AFQAiACAeAXIBKBWg");
	this.shape_86.setTransform(-1,-215.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1A1A1A").s().p("ACvB6QgOgPAAgVQAAgXAOgOQAPgPAWAAQAXAAAOAPQAPAOAAAXQAAAVgPAPQgOAOgXAAQgWAAgPgOgAkvB6QgQgPAAgVQAAgXAQgOQAPgPAWAAQAUAAAQAPQAPAOAAAXQAAAVgPAPQgQAOgUAAQgWAAgPgOgAlrhkQAdgZAdAAICpgDIgCBlIi0gHIhvATgAExgmIjIAFIgBhmIC8AFQAiACAeAWIBKBXg");
	this.shape_87.setTransform(-1,-215.975);

	this.instance_1 = new lib.Fainting();
	this.instance_1.setTransform(157.45,167.5,1,1,0,0,0,378.8,461.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-199.475}},{t:this.shape_4,p:{y:-199.4819}},{t:this.shape_3,p:{y:-216.6091}},{t:this.shape_2,p:{y:-217.2265}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_63,p:{y:-210.825}},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_74},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_75},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_76},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_77},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_78},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_79},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_80},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-199.475}},{t:this.shape_4,p:{y:-199.4819}},{t:this.shape_3,p:{y:-222.6091}},{t:this.shape_2,p:{y:-223.2265}},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_81},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_63,p:{y:-213.125}},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_82},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_83},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_85},{t:this.shape_84},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_86},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-207.475}},{t:this.shape_4,p:{y:-207.4819}},{t:this.shape_3,p:{y:-222.6091}},{t:this.shape_2,p:{y:-223.2265}},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-207.475}},{t:this.shape_4,p:{y:-207.4819}},{t:this.shape_3,p:{y:-222.6091}},{t:this.shape_2,p:{y:-223.2265}},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_87},{t:this.shape_71},{t:this.shape_73}]},1).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-207.475}},{t:this.shape_4,p:{y:-207.4819}},{t:this.shape_3,p:{y:-222.6091}},{t:this.shape_2,p:{y:-223.2265}},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).wait(1).to({regX:228,regY:296,rotation:-6.0238,x:-9.9,y:18.4},0).wait(1).to({rotation:-12.0476,x:-24.55,y:36.85},0).wait(1).to({rotation:-18.0714,x:-37.35,y:56.7},0).wait(1).to({rotation:-24.0952,x:-47.85,y:77.7},0).wait(1).to({rotation:-30.119,x:-56.15,y:99.8},0).wait(1).to({rotation:-36.1429,x:-62.1,y:122.55},0).wait(1).to({rotation:-42.1667,x:-65.6,y:145.8},0).wait(1).to({rotation:-48.1905,x:-66.65,y:169.3},0).wait(1).to({rotation:-54.2143,x:-65.25,y:192.85},0).wait(1).to({rotation:-60.2381,x:-61.3,y:216.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.2,-294.4,634.3,844.1);


(lib.BartenderSmiling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smile
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660033").ss(4,1,1,3,true).p("AjpgCQC7AhEXgq");
	this.shape.setTransform(333.2,129.3306);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660033").ss(4,1,1,3,true).p("AjogEQC8AjEWgp");
	this.shape_1.setTransform(333.05,129.3381);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660033").ss(4,1,1,3,true).p("AjogGQC+AlETgp");
	this.shape_2.setTransform(332.875,129.3594);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#660033").ss(3.9,1,1,3,true).p("AjogIQC/AmESgo");
	this.shape_3.setTransform(332.725,129.4006);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#660033").ss(3.9,1,1,3,true).p("AjogJQDBAoEQgo");
	this.shape_4.setTransform(332.575,129.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#660033").ss(3.8,1,1,3,true).p("AjogKQDDAqEOgo");
	this.shape_5.setTransform(332.4,129.3381);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#660033").ss(3.8,1,1,3,true).p("AjogLQDEAsENgo");
	this.shape_6.setTransform(332.25,129.2649);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#660033").ss(3.8,1,1,3,true).p("AjogLQDFAtEMgn");
	this.shape_7.setTransform(332.1,129.1499);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#660033").ss(3.7,1,1,3,true).p("AjogMQDHAvEKgn");
	this.shape_8.setTransform(331.925,129.079);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#660033").ss(3.7,1,1,3,true).p("AjogNQDJAxEIgm");
	this.shape_9.setTransform(331.775,129.0045);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#660033").ss(3.7,1,1,3,true).p("AjogOQDKAzEHgm");
	this.shape_10.setTransform(331.625,128.9235);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#660033").ss(3.6,1,1,3,true).p("AjogPQDMA1EFgm");
	this.shape_11.setTransform(331.45,128.8556);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#660033").ss(3.6,1,1,3,true).p("AjogPQDNA2EEgm");
	this.shape_12.setTransform(331.3,128.7763);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#660033").ss(3.5,1,1,3,true).p("AjogQQDPA4ECgm");
	this.shape_13.setTransform(331.15,128.71);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#660033").ss(3.5,1,1,3,true).p("AjogRQDRA6EAgl");
	this.shape_14.setTransform(330.95,128.6418);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#660033").ss(3.5,1,1,3,true).p("AjogSQDSA8D/gl");
	this.shape_15.setTransform(330.8,128.5771);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#660033").ss(3.4,1,1,3,true).p("AjogTQDUA9D9gk");
	this.shape_16.setTransform(330.65,128.5013);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#660033").ss(3.4,1,1,3,true).p("AjngTQDVA/D6gl");
	this.shape_17.setTransform(330.475,128.4378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#660033").ss(3.4,1,1,3,true).p("AjngUQDWBAD5gk");
	this.shape_18.setTransform(330.325,128.3634);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#660033").ss(3.3,1,1,3,true).p("AjngVQDYBCD3gj");
	this.shape_19.setTransform(330.175,128.3005);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#660033").ss(3.3,1,1,3,true).p("AjngWQDaBED1gj");
	this.shape_20.setTransform(330,128.2389);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#660033").ss(3.2,1,1,3,true).p("AjngXQDbBGD0gi");
	this.shape_21.setTransform(329.85,128.1391);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#660033").ss(3.2,1,1,3,true).p("AjngYQDdBIDygi");
	this.shape_22.setTransform(329.7,128.0786);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#660033").ss(3.2,1,1,3,true).p("AjngZQDeBKDxgi");
	this.shape_23.setTransform(329.525,128.0077);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#660033").ss(3.1,1,1,3,true).p("AjngZQDgBLDvgi");
	this.shape_24.setTransform(329.375,127.9481);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#660033").ss(3.1,1,1,3,true).p("AjngaQDhBNDugh");
	this.shape_25.setTransform(329.225,127.8905);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#660033").ss(3.1,1,1,3,true).p("AjmgbQDiBPDsgh");
	this.shape_26.setTransform(329.05,127.8319);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#660033").ss(3,1,1).p("AjmgcQDkBQDqgg");
	this.shape_27.setTransform(328.9,127.7633);
	this.shape_27._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(27).to({_off:false},0).wait(8));

	// Layer_1
	this.instance = new lib.BartenderFront();
	this.instance.setTransform(0,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0,669.9,713.7);


(lib.BarBGFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BarTableFront();
	this.instance.setTransform(996.5,587.4,1.2313,1.35,0,0,0,2210.5,901.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332303").ss(10,2,1).p("EhBUgRGMCCpAAAEhBUgAYMCCpAAAEhBUARHMCCpAAA");
	this.shape.setTransform(1130.8,239.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332303").ss(2,1,1).p("AAAABIAAgB");
	this.shape_1.setTransform(588.85,291);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#332303").ss(2,2,1).p("AAAgBIAAAD");
	this.shape_2.setTransform(588.85,290.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4B5A1").s().p("Eh5UA7FQnIlOjBl8QgshXgrhyQgahFgtiJQgqh/gUhDQgghsgShZQgfiegJjQQgDhRgBkhQgGmWADjLQAFldApkBQAdi6A6jPIAXhTQAehjAnhxQAoh2AyiFQBpkVDkohIF6uGQAqhmASgyQAfhWANhIQAHglAJheQAIhVAKgvQAQhHAgg1QAmg+A2geQAugaBSgKQB0gPATgFQA/gPBVgxQBdg4AwgZQCShLDEgVQCRgQDYALQEUAPFhAvQCeAUHUBIQGIA7DqAaQFZAnEdAFQFJAFGagnQD1gXHshCQJ/hUFDg4QIUhaGeh4ID1hHQCNgoBpgTQCcgcDKgFQBegDELAEQEXAEIvgBQIugBEYAEQPlAPRPBgQPKBVRgCaQBtAPA7ARQBaAbA4AyQAsAoAlBDQAQAdArBfQBbDPCTDwQBbCUC7EWQDCEeBXCLQCVDwBdDNQB2EDCdISQBZExBLDVI5agDIgLAAMhNkgAEMhRSgANQgygBAohlIgBADQgBAGABAHQgFAGgCAIQgCAJADAJIgEAHQgDAJAEALQADALAIAGQAIAGAJABQAKACAJgEIADgBIABAAIAJAAIAKgBIAJAAIAWACIALgBIACACIAFABIAVABQAHABAIgBIABAAIAdAAIAAgcQABgIAAgKIgBgQIAAgCIgBgFIAAgIIAFgJQAIgRgJgPIAAAAIAGgSIAEgTQAEgUgJgRIgBgCQACgJAAgKIABgHQADgOAAgOIgBgMIAAgCQAEgJAAgGIABgMIADgLQAIgSgIgdIgBgBQAFgKADgGQABgFABgJIABgFQACgIgCgJIgCgJIAAgBQAGgJAAgLQAAgJgEgHQAFgGACgIIABgFIAAgIIAAgDIAAgQIACgTQABgJgDgIIgCgDIABgGIADgNIABgOIAAgoQAAgKgCgHIACgNIABgOIAEgJIAAgMIAAgCIAAgDIgBgLQADgHAAgGIABgDQAIgPgHgRQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAABQgBAAgBAAQAAAAgBABIgCAEIgCAMIAAABQgEAEgBALQAAAHABAGIgCAFIgDAHIgCAHIgBAFIgCACQgFAIgBAKIgBAKIgCAGIgCAEIgDAJQgHAPgCALIgBAAQgFAJgBAJIAAAFIgFAHIgCAEIgDAGQgCADAAAIIgCACQgHAHgDAMQgCAJAAANIAAAHIgEAHQgCAFAAAHIgFAGQgGAKAAAPQgEAHgBAIIAAABIgBABQgFAIgBAKIAAAFQgDADgCADQgCAFgBAIIgCANQgCAHgGALQgFALgFAWIgHAiQgGAIgDALIgKAoQgLAMgBAPIAAADIAAACIgEAPIgBAGIgBADIgDAIQgGACgGAFQgHAIgDAKQgBAFAAAFIgBABIgDAIIgCABQgFAFgDAGQALgaARghIDRqNIAAgBMgksAAAI0/MVIAEAAIzEdUIAAfXIgPgKgEBplgEwMiCpAAAgEgsagNxIAAgEgEBplgWRMiCpAAAgEBplgm/MiCpAAAg");
	this.shape_3.setTransform(873.2,379.1229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarBGFront, new cjs.Rectangle(0,0,1914.7,886.5), null);


(lib.Scene_1_SuspectingCostumer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SuspectingCostumer
	this.instance = new lib.HalfCostumer();
	this.instance.setTransform(746.4,623.85,1,1,0,0,0,226,288.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_frontBarTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontBarTable
	this.instance = new lib.BartenderBottle("synched",0);
	this.instance.setTransform(752.7,141.2,4.0727,2.3088,0,0,0,0.1,-9.8);

	this.instance_1 = new lib.BarBGFront();
	this.instance_1.setTransform(702.6,341.25,0.9443,0.9209,0,0,0,950.3,441.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332303").ss(2,2,1).p("AAblTIgUD7IAAADIgDAfAAEgvIgeGC");
	this.shape.setTransform(371.5243,252.2507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E806F").s().p("AAUEyIgTgBIgEAAIgCgCIgKAAIgTgBIgJAAIgJABIgIAAIgBAAIgCAAQgIAEgJgCQgJAAgHgFQgHgGgDgIQgDgKADgIIADgFQgDgIACgHQACgHAFgFQgCgFACgGQACgIAHgHIACgBIADgGIABgBQAAgEABgEQACgIAHgHQAFgEAFgCIADgGIACgDIAAgFIADgNIABgBIAAgDQABgMAKgKIAIgiQAEgIAFgHIAGgdQAEgSAFgJQAFgJACgGIACgKQABgHABgDQABgDADgDIAAgEQABgIAFgHIAAgBIAAgBQABgGAEgGQAAgMAFgIIAFgGQAAgFACgFIADgGIAAgFQAAgLADgHQACgKAGgHIACgBQAAgHACgCIAEgJIAFgGIAAgEQABgHAEgHIABgBQACgJAGgMIADgIIACgDIABgFIABgIQACgIAEgHIACgCIABgEIABgGIADgGIACgEQgBgFAAgGQAAgJAEgDIAAgBIADgKIACgDQAAgBABAAQAAAAAAAAQABgBAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAHAOgHAMIgCACQAAAGgCAGIABAJIAAACIAAACIgBAKIgCAHIgCAMIgCALQACAGAAAIIABAhIgCALIgDALIAAAFIABADQADAGAAAGIAAACIgDAQIAAANIAAADIAAAGIgBAEQgCAHgEAFQAEAGAAAIQAAAJgGAHIAAABIADAIQABAHgCAHIgBADIgCAMIgHAMIABACQAHAXgGAQIgEAJIAAAKIgEAMIAAACIABAKQAAAMgDALIgBAGQAAAIgCAIIABABQAIAOgDARQgBAIgDAIIgFAPIAAAAQAIANgHANIgFAIIAAAHIABAEIAAACIABANQABAIgCAHIAAAXIgaAAIgBAAIgHABIgGgBg");
	this.shape_1.setTransform(362.5247,255.5208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4B5A1").s().p("EhQpAkOQhYgBhQgEQiCgGhtgOQjWgbkUhNIngiQQlOhgikgzQhtgihfgiMDEaAAAQh/AihyAWQh/AYj3AeQj/Afh3AWQi0AhmHBsQlwBljMAgQi9AejvAKQiRAFkdAAMhhfgAFQolgBkxAGIhAABQjvAFhZAAIgQAAgEBxFgALIABATQAIBvgMCMQgYEehZDagEgWFgj9IACgCIABgBIm8gCIAAADIo3AAIAAgDIorAAIAAgDIoMAAIAAgCIoYgCIAAgCMA+JAAHQiRADiTAAIAAACIsDABIkeABIgFAAgEhKTgkNICYABIifABg");
	this.shape_2.setTransform(829.1692,518.2023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]},56).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CostumerFainting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CostumerFainting
	this.instance = new lib.Faint();
	this.instance.setTransform(661.95,239.65,1.0081,0.9661,0,0,0,9.3,9.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366).to({_off:false},0).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BubblyDrink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BubblyDrink
	this.instance = new lib.BubblesB("synched",0);
	this.instance.setTransform(655.5,17.85,1.0862,1.3199,0,0,0,72.8,163.5);

	this.instance_1 = new lib.BarBGFront();
	this.instance_1.setTransform(514.9,87.6,1.0862,1.3199,0,0,0,948.4,433.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0862,scaleY:1.3199,rotation:0,x:655.5,regX:72.8,y:17.85,regY:163.5}}]},199).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0861,scaleY:1.3198,rotation:-2.9843,x:655.45,regX:72.8,y:17.85,regY:163.5}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0861,scaleY:1.3197,rotation:-5.2201,x:655.6,regX:72.9,y:17.8,regY:163.5}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.086,scaleY:1.3197,rotation:-2.771,x:655.55,regX:72.9,y:17.8,regY:163.5}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.086,scaleY:1.3196,rotation:1.9648,x:655.6,regX:73,y:17.75,regY:163.4}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0859,scaleY:1.3195,rotation:6.9288,x:655.55,regX:73,y:17.8,regY:163.4}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0858,scaleY:1.3194,rotation:6.4917,x:655.45,regX:73,y:17.8,regY:163.4}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0858,scaleY:1.3194,rotation:6.9736,x:655.45,regX:73,y:17.6,regY:163.3}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0857,scaleY:1.3193,rotation:2.521,x:655.45,regX:73,y:17.6,regY:163.3}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0857,scaleY:1.3192,rotation:-1.9203,x:655.35,regX:73,y:17.55,regY:163.3}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0856,scaleY:1.3191,rotation:-4.3685,x:655.35,regX:73,y:17.5,regY:163.3}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0853,scaleY:1.3188,rotation:-7.6279,x:655.1,regX:73.2,y:17.5,regY:163.2}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0854,scaleY:1.3189,rotation:-4.6354,x:655.2,regX:73.1,y:17.55,regY:163.3}}]},5).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.0853,scaleY:1.3188,rotation:-0.1717,x:655.25,regX:73.2,y:17.6,regY:163.3}}]},5).to({state:[{t:this.instance_1}]},8).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bartender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bartender
	this.instance = new lib.BartenderSmiling();
	this.instance.setTransform(720.45,71.65,0.9214,0.8722,0,0,0,348.2,344.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(432).to({_off:false},0).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BarBGbartender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BarBGbartender
	this.instance = new lib.BarBGFront();
	this.instance.setTransform(630.75,405.3,1.3386,2.1066,0,0,0,954.7,440.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(432).to({_off:false},0).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BackGroundMonster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BackGroundMonster
	this.instance = new lib.BarBGFront();
	this.instance.setTransform(336.95,367.2,1.8484,2.3744,0,0,0,951.6,436.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(1).to({regX:957.3,regY:443.2,x:347.5,y:385.2},0).wait(1).to({y:387.05},0).wait(1).to({y:388.85},0).wait(1).to({y:390.7},0).wait(1).to({y:392.55},0).wait(1).to({y:394.35},0).wait(1).to({y:396.2},0).wait(1).to({y:398.05},0).wait(1).to({y:399.85},0).wait(1).to({y:401.7},0).wait(1).to({y:403.55},0).wait(1).to({y:405.35},0).wait(1).to({y:407.2},0).wait(1).to({y:409.05},0).wait(1).to({y:410.85},0).wait(1).to({y:412.7},0).wait(1).to({y:414.55},0).wait(1).to({y:416.35},0).wait(1).to({y:418.2},0).wait(1).to({y:420.05},0).wait(1).to({y:421.85},0).wait(1).to({y:423.7},0).wait(1).to({y:425.55},0).wait(1).to({y:427.35},0).wait(1).to({y:429.2},0).wait(1).to({y:431.05},0).wait(1).to({y:432.85},0).wait(1).to({y:434.7},0).wait(1).to({y:436.55},0).wait(1).to({y:438.3},0).wait(1).to({y:440.15},0).wait(1).to({y:442},0).wait(1).to({y:443.8},0).wait(1).to({y:445.65},0).wait(1).to({y:447.5},0).wait(1).to({y:449.3},0).wait(1).to({y:451.15},0).wait(1).to({y:453},0).wait(1).to({y:454.8},0).wait(1).to({y:456.65},0).wait(1).to({y:458.5},0).wait(1).to({y:460.3},0).wait(1).to({y:462.15},0).wait(1).to({y:464},0).wait(1).to({y:465.8},0).wait(1).to({y:467.65},0).wait(1).to({y:469.5},0).wait(1).to({y:471.3},0).wait(1).to({y:473.15},0).wait(1).to({y:475},0).wait(1).to({y:476.8},0).wait(1).to({y:478.65},0).wait(1).to({y:480.5},0).wait(1).to({y:482.3},0).wait(1).to({y:484.15},0).wait(1).to({y:486},0).wait(1).to({y:487.8},0).wait(1).to({y:489.65},0).wait(1).to({y:491.5},0).wait(1).to({y:493.3},0).wait(1).to({y:495.15},0).wait(1).to({y:497},0).wait(1).to({y:498.8},0).wait(1).to({y:500.65},0).wait(1).to({y:502.5},0).wait(1).to({y:504.3},0).wait(1).to({y:506.15},0).wait(1).to({scaleY:2.3743,y:508},0).wait(1).to({y:509.8},0).wait(1).to({y:511.65},0).wait(1).to({y:513.5},0).wait(1).to({y:515.3},0).wait(1).to({y:517.15},0).wait(1).to({y:519},0).wait(1).to({y:520.8},0).wait(1).to({y:522.65},0).wait(1).to({y:524.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.BubblesProject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.PlayButton.start;
		var self=this;
		self.stop ();
		
		self.start.addEventListener("click",startPlaying);
		
		function startPlaying ()
		
		{
		self.gotoAndPlay(1);	
			}
	}
	this.frame_1 = function() {
		playSound("cut_foot_stepswav");
	}
	this.frame_27 = function() {
		playSound("iNeedAdrinkwav");
	}
	this.frame_65 = function() {
		playSound("cut_plastic_woodswav");
		createjs.Sound.registerSound("/sounds/cut_plastic_wood.wav","knock");
		
		
		createjs.Sound.play("knock");
	}
	this.frame_105 = function() {
		createjs.Sound.registerSound("/sounds/bubble_sound.wav","sparkle");
		
		
		createjs.Sound.play("sparkle");
	}
	this.frame_117 = function() {
		playSound("cut_bubble_soundwav");
	}
	this.frame_270 = function() {
		playSound("popwav");
	}
	this.frame_340 = function() {
		playSound("HIcutwav");
	}
	this.frame_430 = function() {
		playSound("impact_wood_thumpwav");
	}
	this.frame_465 = function() {
		this.replay = this.ReplayButton.replay;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",playAgain)
		
		function playAgain()
		
		{
		self.gotoAndPlay(1);	
			}
			
			createjs.Sound.stop();
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",playAgain);
		
		function playAgain()
		{
		self.gotoAndPlay(1)	
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(26).call(this.frame_27).wait(38).call(this.frame_65).wait(40).call(this.frame_105).wait(12).call(this.frame_117).wait(153).call(this.frame_270).wait(70).call(this.frame_340).wait(90).call(this.frame_430).wait(35).call(this.frame_465).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640.05,360,0.9907,0.9907,0,0,0,0.1,0);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(118).to({_off:false},0).wait(1).to({regX:0,scaleX:0.9867,scaleY:0.9867,x:639.898,y:353.8722},0).wait(1).to({scaleX:0.9827,scaleY:0.9827,x:639.846,y:347.7445},0).wait(1).to({scaleX:0.9788,scaleY:0.9788,x:639.794,y:341.6167},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,x:639.742,y:335.4889},0).wait(1).to({scaleX:0.9708,scaleY:0.9708,x:639.69,y:329.3612},0).wait(1).to({scaleX:0.9668,scaleY:0.9668,x:639.6381,y:323.2334},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,x:639.5861,y:317.1056},0).wait(1).to({scaleX:0.9588,scaleY:0.9588,x:639.5341,y:310.9779},0).wait(1).to({scaleX:0.9548,scaleY:0.9548,x:639.4821,y:304.8501},0).wait(1).to({scaleX:0.9508,scaleY:0.9508,x:639.4301,y:298.7224},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,x:639.3781,y:292.5946},0).wait(1).to({scaleX:0.9428,scaleY:0.9428,x:639.3261,y:286.4668},0).wait(1).to({scaleX:0.9388,scaleY:0.9388,x:639.2741,y:280.3391},0).wait(1).to({scaleX:0.9348,scaleY:0.9348,x:639.2221,y:274.2113},0).wait(1).to({scaleX:0.9308,scaleY:0.9308,x:639.1701,y:268.0835},0).wait(1).to({scaleX:0.9268,scaleY:0.9268,x:639.1182,y:261.9558},0).wait(1).to({scaleX:0.9228,scaleY:0.9228,x:639.0662,y:255.828},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:639.0142,y:249.7002},0).wait(1).to({scaleX:0.9148,scaleY:0.9148,x:638.9622,y:243.5725},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:638.9102,y:237.4447},0).wait(1).to({scaleX:0.9069,scaleY:0.9069,x:638.8582,y:231.3169},0).wait(1).to({scaleX:0.9029,scaleY:0.9029,x:638.8062,y:225.1892},0).wait(1).to({scaleX:0.8989,scaleY:0.8989,x:638.7542,y:219.0614},0).wait(1).to({scaleX:0.8949,scaleY:0.8949,x:638.7022,y:212.9336},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:638.6502,y:206.8059},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,x:638.5983,y:200.6781},0).wait(1).to({scaleX:0.8829,scaleY:0.8829,x:638.5463,y:194.5504},0).wait(1).to({scaleX:0.8789,scaleY:0.8789,x:638.4943,y:188.4226},0).wait(1).to({scaleX:0.8749,scaleY:0.8749,x:638.4423,y:182.2948},0).wait(1).to({scaleX:0.8709,scaleY:0.8709,x:638.3903,y:176.1671},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,x:638.3383,y:170.0393},0).wait(1).to({scaleX:0.8629,scaleY:0.8629,x:638.2863,y:163.9115},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:638.2343,y:157.7838},0).wait(1).to({scaleX:0.8549,scaleY:0.8549,x:638.1823,y:151.656},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,x:638.1303,y:145.5282},0).wait(1).to({scaleX:0.8469,scaleY:0.8469,x:638.0783,y:139.4005},0).wait(1).to({scaleX:0.843,scaleY:0.843,x:638.0264,y:133.2727},0).wait(1).to({scaleX:0.839,scaleY:0.839,x:637.9744,y:127.1449},0).wait(1).to({scaleX:0.835,scaleY:0.835,x:637.9224,y:121.0172},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:637.8704,y:114.8894},0).wait(1).to({scaleX:0.827,scaleY:0.827,x:637.8184,y:108.7616},0).wait(1).to({scaleX:0.823,scaleY:0.823,x:637.7664,y:102.6339},0).wait(1).to({scaleX:0.819,scaleY:0.819,x:637.7144,y:96.5061},0).wait(1).to({scaleX:0.815,scaleY:0.815,x:637.6624,y:90.3784},0).wait(1).to({scaleX:0.811,scaleY:0.811,x:637.6104,y:84.2506},0).wait(1).to({scaleX:0.807,scaleY:0.807,x:637.5584,y:78.1228},0).wait(1).to({scaleX:0.803,scaleY:0.803,x:637.5065,y:71.9951},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:637.4545,y:65.8673},0).wait(1).to({scaleX:0.795,scaleY:0.795,x:637.4025,y:59.7395},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:637.3505,y:53.6118},0).wait(1).to({scaleX:0.787,scaleY:0.787,x:637.2985,y:47.484},0).wait(3).to({scaleX:0.7735,scaleY:0.7735,x:637.15,y:26.65},0).wait(4).to({regX:0.1,regY:0.1,scaleX:0.7734,scaleY:0.7734,x:637.2,y:26.75},0).wait(290));

	// ReplayButton_obj_
	this.ReplayButton = new lib.Scene_1_ReplayButton();
	this.ReplayButton.name = "ReplayButton";
	this.ReplayButton.depth = 0;
	this.ReplayButton.isAttachedToCamera = 0
	this.ReplayButton.isAttachedToMask = 0
	this.ReplayButton.layerDepth = 0
	this.ReplayButton.layerIndex = 0
	this.ReplayButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ReplayButton).wait(465).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(1));

	// PlayButton_obj_
	this.PlayButton = new lib.Scene_1_PlayButton();
	this.PlayButton.name = "PlayButton";
	this.PlayButton.setTransform(697.2,377.9,1,1,0,0,0,697.2,377.9);
	this.PlayButton.depth = 0;
	this.PlayButton.isAttachedToCamera = 0
	this.PlayButton.isAttachedToMask = 0
	this.PlayButton.layerDepth = 0
	this.PlayButton.layerIndex = 1
	this.PlayButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.PlayButton).to({_off:true},1).wait(465));

	// Bartender_obj_
	this.Bartender = new lib.Scene_1_Bartender();
	this.Bartender.name = "Bartender";
	this.Bartender.depth = 0;
	this.Bartender.isAttachedToCamera = 0
	this.Bartender.isAttachedToMask = 0
	this.Bartender.layerDepth = 0
	this.Bartender.layerIndex = 2
	this.Bartender.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bartender).wait(432).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(34));

	// BarBGbartender_obj_
	this.BarBGbartender = new lib.Scene_1_BarBGbartender();
	this.BarBGbartender.name = "BarBGbartender";
	this.BarBGbartender.depth = 0;
	this.BarBGbartender.isAttachedToCamera = 0
	this.BarBGbartender.isAttachedToMask = 0
	this.BarBGbartender.layerDepth = 0
	this.BarBGbartender.layerIndex = 3
	this.BarBGbartender.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BarBGbartender).wait(432).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(34));

	// CostumerFainting_obj_
	this.CostumerFainting = new lib.Scene_1_CostumerFainting();
	this.CostumerFainting.name = "CostumerFainting";
	this.CostumerFainting.depth = 0;
	this.CostumerFainting.isAttachedToCamera = 0
	this.CostumerFainting.isAttachedToMask = 0
	this.CostumerFainting.layerDepth = 0
	this.CostumerFainting.layerIndex = 4
	this.CostumerFainting.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CostumerFainting).wait(366).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).to({_off:true},66).wait(34));

	// LastBg_obj_
	this.LastBg = new lib.Scene_1_LastBg();
	this.LastBg.name = "LastBg";
	this.LastBg.depth = 0;
	this.LastBg.isAttachedToCamera = 0
	this.LastBg.isAttachedToMask = 0
	this.LastBg.layerDepth = 0
	this.LastBg.layerIndex = 5
	this.LastBg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LastBg).wait(366).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).to({_off:true},66).wait(34));

	// BMonster_obj_
	this.BMonster = new lib.Scene_1_BMonster();
	this.BMonster.name = "BMonster";
	this.BMonster.depth = 0;
	this.BMonster.isAttachedToCamera = 0
	this.BMonster.isAttachedToMask = 0
	this.BMonster.layerDepth = 0
	this.BMonster.layerIndex = 6
	this.BMonster.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BMonster).wait(288).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(1).to({regX:667.3,regY:312.5,scaleX:1,scaleY:1,x:525.25,y:564.2},0).wait(76).to({_off:true},1).wait(100));

	// Monster_obj_
	this.Monster = new lib.Scene_1_Monster();
	this.Monster.name = "Monster";
	this.Monster.depth = 0;
	this.Monster.isAttachedToCamera = 0
	this.Monster.isAttachedToMask = 0
	this.Monster.layerDepth = 0
	this.Monster.layerIndex = 7
	this.Monster.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Monster).wait(318).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).to({_off:true},48).wait(100));

	// BartenderMonster_obj_
	this.BartenderMonster = new lib.Scene_1_BartenderMonster();
	this.BartenderMonster.name = "BartenderMonster";
	this.BartenderMonster.depth = 0;
	this.BartenderMonster.isAttachedToCamera = 0
	this.BartenderMonster.isAttachedToMask = 0
	this.BartenderMonster.layerDepth = 0
	this.BartenderMonster.layerIndex = 8
	this.BartenderMonster.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BartenderMonster).wait(288).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(1).to({regX:1095.3,regY:-283.1,scaleX:1,scaleY:1,x:953.25,y:-31.4},0).wait(76).to({_off:true},1).wait(100));

	// BackGroundMonster_obj_
	this.BackGroundMonster = new lib.Scene_1_BackGroundMonster();
	this.BackGroundMonster.name = "BackGroundMonster";
	this.BackGroundMonster.depth = 0;
	this.BackGroundMonster.isAttachedToCamera = 0
	this.BackGroundMonster.isAttachedToMask = 0
	this.BackGroundMonster.layerDepth = 0
	this.BackGroundMonster.layerIndex = 9
	this.BackGroundMonster.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BackGroundMonster).wait(288).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(1).to({regX:347.6,regY:454,scaleX:1,scaleY:1,x:205.55,y:705.7},0).wait(76).to({_off:true},1).wait(100));

	// DrinkEffects_obj_
	this.DrinkEffects = new lib.Scene_1_DrinkEffects();
	this.DrinkEffects.name = "DrinkEffects";
	this.DrinkEffects.depth = 0;
	this.DrinkEffects.isAttachedToCamera = 0
	this.DrinkEffects.isAttachedToMask = 0
	this.DrinkEffects.layerDepth = 0
	this.DrinkEffects.layerIndex = 10
	this.DrinkEffects.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.DrinkEffects).wait(199).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(65).to({_off:true},24).wait(178));

	// CorkOff_obj_
	this.CorkOff = new lib.Scene_1_CorkOff();
	this.CorkOff.name = "CorkOff";
	this.CorkOff.depth = 0;
	this.CorkOff.isAttachedToCamera = 0
	this.CorkOff.isAttachedToMask = 0
	this.CorkOff.layerDepth = 0
	this.CorkOff.layerIndex = 11
	this.CorkOff.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CorkOff).wait(272).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).to({_off:true},16).wait(178));

	// BubblyDrink_obj_
	this.BubblyDrink = new lib.Scene_1_BubblyDrink();
	this.BubblyDrink.name = "BubblyDrink";
	this.BubblyDrink.depth = 0;
	this.BubblyDrink.isAttachedToCamera = 0
	this.BubblyDrink.isAttachedToMask = 0
	this.BubblyDrink.layerDepth = 0
	this.BubblyDrink.layerIndex = 12
	this.BubblyDrink.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BubblyDrink).wait(199).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(73).to({_off:true},16).wait(178));

	// ShockedCostumer_obj_
	this.ShockedCostumer = new lib.Scene_1_ShockedCostumer();
	this.ShockedCostumer.name = "ShockedCostumer";
	this.ShockedCostumer.depth = 0;
	this.ShockedCostumer.isAttachedToCamera = 0
	this.ShockedCostumer.isAttachedToMask = 0
	this.ShockedCostumer.layerDepth = 0
	this.ShockedCostumer.layerIndex = 13
	this.ShockedCostumer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ShockedCostumer).wait(172).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).wait(15).to({_off:true},12).wait(267));

	// BarBG_obj_
	this.BarBG = new lib.Scene_1_BarBG();
	this.BarBG.name = "BarBG";
	this.BarBG.depth = 0;
	this.BarBG.isAttachedToCamera = 0
	this.BarBG.isAttachedToMask = 0
	this.BarBG.layerDepth = 0
	this.BarBG.layerIndex = 14
	this.BarBG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BarBG).wait(172).to({regX:142.1,regY:-251.7,scaleX:1.2929,scaleY:1.2929,y:0.05},0).to({_off:true},27).wait(267));

	// Bubbles_obj_
	this.Bubbles = new lib.Scene_1_Bubbles();
	this.Bubbles.name = "Bubbles";
	this.Bubbles.depth = 0;
	this.Bubbles.isAttachedToCamera = 0
	this.Bubbles.isAttachedToMask = 0
	this.Bubbles.layerDepth = 0
	this.Bubbles.layerIndex = 15
	this.Bubbles.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bubbles).wait(118).to({regX:5.9,regY:3.3,scaleX:1.0093,scaleY:1.0093,x:0.05,y:0.05},0).to({_off:true},54).wait(294));

	// Bar_obj_
	this.Bar = new lib.Scene_1_Bar();
	this.Bar.name = "Bar";
	this.Bar.depth = 0;
	this.Bar.isAttachedToCamera = 0
	this.Bar.isAttachedToMask = 0
	this.Bar.layerDepth = 0
	this.Bar.layerIndex = 16
	this.Bar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bar).wait(118).to({regX:5.9,regY:3.3,scaleX:1.0093,scaleY:1.0093,x:0.05,y:0.05},0).to({_off:true},54).wait(294));

	// BartenderArmBottle_obj_
	this.BartenderArmBottle = new lib.Scene_1_BartenderArmBottle();
	this.BartenderArmBottle.name = "BartenderArmBottle";
	this.BartenderArmBottle.depth = 0;
	this.BartenderArmBottle.isAttachedToCamera = 0
	this.BartenderArmBottle.isAttachedToMask = 0
	this.BartenderArmBottle.layerDepth = 0
	this.BartenderArmBottle.layerIndex = 17
	this.BartenderArmBottle.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BartenderArmBottle).wait(71).to({_off:true},18).wait(377));

	// Bubbles_obj_
	this.Bubbles_1 = new lib.Scene_1_Bubbles_1();
	this.Bubbles_1.name = "Bubbles_1";
	this.Bubbles_1.depth = 0;
	this.Bubbles_1.isAttachedToCamera = 0
	this.Bubbles_1.isAttachedToMask = 0
	this.Bubbles_1.layerDepth = 0
	this.Bubbles_1.layerIndex = 18
	this.Bubbles_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bubbles_1).wait(71).to({_off:true},18).wait(377));

	// SuspectingCostumer_obj_
	this.SuspectingCostumer = new lib.Scene_1_SuspectingCostumer();
	this.SuspectingCostumer.name = "SuspectingCostumer";
	this.SuspectingCostumer.depth = 0;
	this.SuspectingCostumer.isAttachedToCamera = 0
	this.SuspectingCostumer.isAttachedToMask = 0
	this.SuspectingCostumer.layerDepth = 0
	this.SuspectingCostumer.layerIndex = 19
	this.SuspectingCostumer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SuspectingCostumer).wait(89).to({_off:true},29).wait(348));

	// SurprisedCostumerBackground_obj_
	this.SurprisedCostumerBackground = new lib.Scene_1_SurprisedCostumerBackground();
	this.SurprisedCostumerBackground.name = "SurprisedCostumerBackground";
	this.SurprisedCostumerBackground.depth = 0;
	this.SurprisedCostumerBackground.isAttachedToCamera = 0
	this.SurprisedCostumerBackground.isAttachedToMask = 0
	this.SurprisedCostumerBackground.layerDepth = 0
	this.SurprisedCostumerBackground.layerIndex = 20
	this.SurprisedCostumerBackground.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SurprisedCostumerBackground).wait(89).to({_off:true},29).wait(348));

	// frontBarTable_obj_
	this.frontBarTable = new lib.Scene_1_frontBarTable();
	this.frontBarTable.name = "frontBarTable";
	this.frontBarTable.depth = 0;
	this.frontBarTable.isAttachedToCamera = 0
	this.frontBarTable.isAttachedToMask = 0
	this.frontBarTable.layerDepth = 0
	this.frontBarTable.layerIndex = 21
	this.frontBarTable.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.frontBarTable).wait(56).to({_off:true},33).wait(377));

	// costumerSide_obj_
	this.costumerSide = new lib.Scene_1_costumerSide();
	this.costumerSide.name = "costumerSide";
	this.costumerSide.setTransform(213.4,369.5,1,1,0,0,0,213.4,369.5);
	this.costumerSide.depth = 0;
	this.costumerSide.isAttachedToCamera = 0
	this.costumerSide.isAttachedToMask = 0
	this.costumerSide.layerDepth = 0
	this.costumerSide.layerIndex = 22
	this.costumerSide.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.costumerSide).wait(32).to({_off:true},24).wait(410));

	// SideBartender_obj_
	this.SideBartender = new lib.Scene_1_SideBartender();
	this.SideBartender.name = "SideBartender";
	this.SideBartender.setTransform(1015.8,473.6,1,1,0,0,0,1015.8,473.6);
	this.SideBartender.depth = 0;
	this.SideBartender.isAttachedToCamera = 0
	this.SideBartender.isAttachedToMask = 0
	this.SideBartender.layerDepth = 0
	this.SideBartender.layerIndex = 23
	this.SideBartender.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SideBartender).to({_off:true},56).wait(410));

	// WalkingCostumer_obj_
	this.WalkingCostumer = new lib.Scene_1_WalkingCostumer();
	this.WalkingCostumer.name = "WalkingCostumer";
	this.WalkingCostumer.setTransform(696.4,411.1,1,1,0,0,0,696.4,411.1);
	this.WalkingCostumer.depth = 0;
	this.WalkingCostumer.isAttachedToCamera = 0
	this.WalkingCostumer.isAttachedToMask = 0
	this.WalkingCostumer.layerDepth = 0
	this.WalkingCostumer.layerIndex = 24
	this.WalkingCostumer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.WalkingCostumer).to({_off:true},56).wait(410));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-977.4,-1175.1,4044.4,2820.7);
// library properties:
lib.properties = {
	id: 'CF4AE9CA9AF73944A1049E42093BF5E0',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/cut_bubble_soundwav.mp3?1598748743505", id:"cut_bubble_soundwav"},
		{src:"sounds/cut_foot_stepswav.mp3?1598748743505", id:"cut_foot_stepswav"},
		{src:"sounds/cut_plastic_woodswav.mp3?1598748743505", id:"cut_plastic_woodswav"},
		{src:"sounds/HIcutwav.mp3?1598748743505", id:"HIcutwav"},
		{src:"sounds/impact_wood_thumpwav.mp3?1598748743505", id:"impact_wood_thumpwav"},
		{src:"sounds/iNeedAdrinkwav.mp3?1598748743505", id:"iNeedAdrinkwav"},
		{src:"sounds/popwav.mp3?1598748743505", id:"popwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF4AE9CA9AF73944A1049E42093BF5E0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;