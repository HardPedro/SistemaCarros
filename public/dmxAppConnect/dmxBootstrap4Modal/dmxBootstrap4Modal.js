/*!
 DMXzone Bootstrap 4 Modal
 Version: 2.0.0
 (c) 2024 Wappler.io
 @build 2024-04-15 17:48:46
 */
dmx.Component("bs4-modal",{attributes:{nobackdrop:{type:Boolean,default:!1},nocloseonclick:{type:Boolean,default:!1},nokeyboard:{type:Boolean,default:!1},nofocus:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},methods:{toggle(){jQuery(this.$node).modal("toggle")},show(){jQuery(this.$node).modal("show")},hide(){jQuery(this.$node).modal("hide")},update(){jQuery(this.$node).modal("handleUpdate")}},events:{show:Event,shown:Event,hide:Event,hidden:Event},render(o){this.$parse(),jQuery(o).on("show.bs.modal",this.dispatchEvent.bind(this,"show")),jQuery(o).on("shown.bs.modal",this.dispatchEvent.bind(this,"shown")),jQuery(o).on("hide.bs.modal",this.dispatchEvent.bind(this,"hide")),jQuery(o).on("hidden.bs.modal",this.dispatchEvent.bind(this,"hidden")),this._modal()},performUpdate(o){JSON.stringify(o)!=JSON.stringify(this.props)&&this._modal()},destroy(){jQuery(this.$node).off(".bs.modal"),jQuery(this.$node).modal("dispose")},_modal(){jQuery(this.$node).modal({backdrop:!this.props.nobackdrop&&this.props.nocloseonclick?"static":!this.props.nobackdrop,keyboard:!this.props.nokeyboard,focus:!this.props.nofocus,show:!!this.props.show})}});
//# sourceMappingURL=dmxBootstrap4Modal.js.map
