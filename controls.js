var numSocket = new Rete.Socket('Number value');

var VueNumControl = {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  template: '<input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>',
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    change(e){
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey)
        this.putData(this.ikey, this.value)
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}

class NumControl extends Rete.Control {

  constructor(emitter, key, readonly) {
    super(key);
    this.component = VueNumControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}



var textSocket = new Rete.Socket('Text value');

var VueTextControl = {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData', 'placeholder'],
  template: '<input type="text" :placeholder="placeholder" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>',
  data() {
    return {
      value: "",
    }
  },
  methods: {
    change(e){
      this.update();
    },
    update() {
      if (this.ikey)
        this.putData(this.ikey, this.value)
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}

class TextControl extends Rete.Control {

  constructor(emitter, key, {readonly, placeholder}={}) {
    super(key);
    this.component = VueTextControl;
    this.props = { emitter, ikey: key, readonly, placeholder };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}



var longTextSocket = new Rete.Socket('Text value');

var VueLongTextControl = {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData', 'placeholder', 'id'],
  template: '<textarea type="text" :class="id" :placeholder="placeholder" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>',
  data() {
    return {
      value: "",
    }
  },
  methods: {
    change(e){
      this.update();
    },
    update() {
      if (this.ikey)
        this.putData(this.ikey, this.value)
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}

class LongTextControl extends Rete.Control {

  constructor(emitter, key, {readonly, placeholder, id}={}) {
    super(key);
    this.component = VueLongTextControl;
    this.props = { emitter, ikey: key, readonly, placeholder, id};
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}




var imageSocket = new Rete.Socket('Text value');

var VueImageControl = {
  props: ['emitter', 'ikey', 'getData', 'putData', 'identifier'],
  template: '<div class="imageViewer"><img class="imageViewer" alt="Background image" ><br><input class="imageViewer" type="file" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/></div>',
  data() { 
    return {
      value: "",
    }
  },
  methods: {
    change(e){
      val = e.target.value.split("\\")
      this.$el.firstChild.src = "img/"+val[val.length-1];
      this.update();
    },
    update() {
      if (this.ikey){
        this.putData(this.ikey, this.value)
      }

      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}

class ImageControl extends Rete.Control {

  constructor(emitter, key) {
    super(key);
    this.component = VueImageControl;
    this.props = { emitter, ikey: key};
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}




var locationSocket = new Rete.Socket("Location value");

class LocationControl extends Rete.Control {

  constructor(emitter, key) {
    super(key);
    this.component = VueTextControl;
    this.props = { emitter, ikey: key};
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}




var choiceSocket = new Rete.Socket("Choice value");

class ChoiceControl extends Rete.Control {

  constructor(emitter, key) {
    super(key);
    this.component = VueTextControl;
    this.props = { emitter, ikey: key };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}



