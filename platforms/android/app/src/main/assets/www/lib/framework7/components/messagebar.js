(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var a=e.$,s=(e.Template7,e.utils),r=(e.device,e.support,e.Class),i=(e.Modal,e.ConstructorMethods),n=(e.ModalMethods,function(e){function t(t,r){void 0===r&&(r={}),e.call(this,r,[t]);var i=this,n={top:!1,topOffset:0,bottomOffset:0,attachments:[],renderAttachments:void 0,renderAttachment:void 0,maxHeight:null,resizePage:!0};i.useModulesParams(n),i.params=s.extend(n,r);var h=a(i.params.el);if(0===h.length)return i;if(h[0].f7Messagebar)return h[0].f7Messagebar;h[0].f7Messagebar=i;var o,l=h.parents(".page").eq(0),c=l.find(".page-content").eq(0),m=h.find(".messagebar-area");o=i.params.textareaEl?a(i.params.textareaEl):h.find("textarea");var g=h.find(".messagebar-attachments"),p=h.find(".messagebar-sheet");function u(){i.params.resizePage&&i.resizePage()}function f(e){e.preventDefault()}function d(e){var t=a(this).index();a(e.target).closest(".messagebar-attachment-delete").length?(a(this).trigger("messagebar:attachmentdelete",t),i.emit("local::attachmentDelete messagebarAttachmentDelete",i,this,t)):(a(this).trigger("messagebar:attachmentclick",t),i.emit("local::attachmentClick messagebarAttachmentClick",i,this,t))}function b(){i.checkEmptyState(),i.$el.trigger("messagebar:change"),i.emit("local::change messagebarChange",i)}function v(){i.sheetHide(),i.$el.addClass("messagebar-focused"),i.$el.trigger("messagebar:focus"),i.emit("local::focus messagebarFocus",i)}function $(){i.$el.removeClass("messagebar-focused"),i.$el.trigger("messagebar:blur"),i.emit("local::blur messagebarBlur",i)}return i.params.top&&h.addClass("messagebar-top"),s.extend(i,{$el:h,el:h[0],$areaEl:m,areaEl:m[0],$textareaEl:o,textareaEl:o[0],$attachmentsEl:g,attachmentsEl:g[0],attachmentsVisible:g.hasClass("messagebar-attachments-visible"),$sheetEl:p,sheetEl:p[0],sheetVisible:p.hasClass("messagebar-sheet-visible"),$pageEl:l,pageEl:l[0],$pageContentEl:c,pageContentEl:c,top:h.hasClass("messagebar-top")||i.params.top,attachments:[]}),i.attachEvents=function(){h.on("textarea:resize",u),h.on("submit",f),h.on("click",".messagebar-attachment",d),o.on("change input",b),o.on("focus",v),o.on("blur",$),t.on("resize",u)},i.detachEvents=function(){h.off("textarea:resize",u),h.off("submit",f),h.off("click",".messagebar-attachment",d),o.off("change input",b),o.off("focus",v),o.off("blur",$),t.off("resize",u)},i.useModules(),i.init(),i}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.focus=function(){return this.$textareaEl.focus(),this},t.prototype.blur=function(){return this.$textareaEl.blur(),this},t.prototype.clear=function(){return this.$textareaEl.val("").trigger("change"),this},t.prototype.getValue=function(){return this.$textareaEl.val().trim()},t.prototype.setValue=function(e){return this.$textareaEl.val(e).trigger("change"),this},t.prototype.setPlaceholder=function(e){return this.$textareaEl.attr("placeholder",e),this},t.prototype.resizePage=function(){var e=this.params,t=this.$el,a=this.top,s=this.$pageEl,r=this.$pageContentEl,i=this.$areaEl,n=this.$textareaEl,h=this.$sheetEl,o=this.$attachmentsEl,l=t[0].offsetHeight,c=e.maxHeight;if(a);else{var m=parseInt(r.css("padding-bottom"),10),g=l+e.bottomOffset;if(g!==m&&r.length){var p=parseInt(r.css("padding-top"),10),u=r[0].scrollHeight,f=r[0].offsetHeight,d=r[0].scrollTop===u-f;c||(c=s[0].offsetHeight-p-h.outerHeight()-o.outerHeight()-parseInt(i.css("margin-top"),10)-parseInt(i.css("margin-bottom"),10)),n.css("max-height",c+"px"),r.css("padding-bottom",g+"px"),d&&r.scrollTop(r[0].scrollHeight-f),t.trigger("messagebar:resizepage"),this.emit("local::resizePage messagebarResizePage",this)}}},t.prototype.checkEmptyState=function(){var e=this.$el,t=this.$textareaEl.val().trim();t&&t.length?e.addClass("messagebar-with-value"):e.removeClass("messagebar-with-value")},t.prototype.attachmentsCreate=function(e){void 0===e&&(e="");var t=a('<div class="messagebar-attachments">'+e+"</div>");return t.insertBefore(this.$textareaEl),s.extend(this,{$attachmentsEl:t,attachmentsEl:t[0]}),this},t.prototype.attachmentsShow=function(e){void 0===e&&(e="");return this.$attachmentsEl=this.$el.find(".messagebar-attachments"),0===this.$attachmentsEl.length&&this.attachmentsCreate(e),this.$el.addClass("messagebar-attachments-visible"),this.attachmentsVisible=!0,this.params.resizePage&&this.resizePage(),this},t.prototype.attachmentsHide=function(){return this.$el.removeClass("messagebar-attachments-visible"),this.attachmentsVisible=!1,this.params.resizePage&&this.resizePage(),this},t.prototype.attachmentsToggle=function(){return this.attachmentsVisible?this.attachmentsHide():this.attachmentsShow(),this},t.prototype.renderAttachment=function(e){return this.params.renderAttachment?this.params.renderAttachment.call(this,e):'\n      <div class="messagebar-attachment">\n        <img src="'+e+'">\n        <span class="messagebar-attachment-delete"></span>\n      </div>\n    '},t.prototype.renderAttachments=function(){var e,t=this;e=t.params.renderAttachments?t.params.renderAttachments.call(t,t.attachments):""+t.attachments.map(function(e){return t.renderAttachment(e)}).join(""),0===t.$attachmentsEl.length?t.attachmentsCreate(e):t.$attachmentsEl.html(e)},t.prototype.sheetCreate=function(e){void 0===e&&(e="");var t=a('<div class="messagebar-sheet">'+e+"</div>");return this.$el.append(t),s.extend(this,{$sheetEl:t,sheetEl:t[0]}),this},t.prototype.sheetShow=function(e){void 0===e&&(e="");return this.$sheetEl=this.$el.find(".messagebar-sheet"),0===this.$sheetEl.length&&this.sheetCreate(e),this.$el.addClass("messagebar-sheet-visible"),this.sheetVisible=!0,this.params.resizePage&&this.resizePage(),this},t.prototype.sheetHide=function(){return this.$el.removeClass("messagebar-sheet-visible"),this.sheetVisible=!1,this.params.resizePage&&this.resizePage(),this},t.prototype.sheetToggle=function(){return this.sheetVisible?this.sheetHide():this.sheetShow(),this},t.prototype.init=function(){return this.attachEvents(),this.checkEmptyState(),this},t.prototype.destroy=function(){this.emit("local::beforeDestroy messagebarBeforeDestroy",this),this.$el.trigger("messagebar:beforedestroy",this),this.detachEvents(),this.$el[0]&&(this.$el[0].f7Messagebar=null,delete this.$el[0].f7Messagebar),s.deleteProps(this)},t}(r)),h={name:"messagebar",static:{Messagebar:n},create:function(){this.messagebar=i({defaultSelector:".messagebar",constructor:n,app:this,domProp:"f7Messagebar",addMethods:"clear getValue setValue setPlaceholder resizePage focus blur attachmentsCreate attachmentsShow attachmentsHide attachmentsToggle renderAttachments sheetCreate sheetShow sheetHide sheetToggle".split(" ")})},on:{tabBeforeRemove:function(e){var t=this;a(e).find(".messagebar-init").each(function(e,a){t.messagebar.destroy(a)})},tabMounted:function(e){var t=this;a(e).find(".messagebar-init").each(function(e,r){t.messagebar.create(s.extend({el:r},a(r).dataset()))})},pageBeforeRemove:function(e){var t=this;e.$el.find(".messagebar-init").each(function(e,a){t.messagebar.destroy(a)})},pageInit:function(e){var t=this;e.$el.find(".messagebar-init").each(function(e,r){t.messagebar.create(s.extend({el:r},a(r).dataset()))})}},vnode:{"messagebar-init":{insert:function(e){var t=e.elm;this.messagebar.create(s.extend({el:t},a(t).dataset()))},destroy:function(e){var t=e.elm;this.messagebar.destroy(t)}}}};if(t){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))