import{r as t,h as i,g as l,aU as a}from"./index-bbd3721e.js";import{r}from"./randomIdGenerator.util-17972493-3e0a24fb.js";import{l as s}from"./logger.util-9b5aeb0e-eecc5f5e.js";import{_ as o}from"./text-2fb6c0c4-138bda8d.js";const n=".sc-digi-form-label-h .digi-form-label.sc-digi-form-label{font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--label--font-size--desktop);color:var(--digi--color--text--primary);display:flex;flex-direction:column}.sc-digi-form-label-h .digi-form-label__label--label.sc-digi-form-label{font-weight:var(--digi--typography--label--font-weight--desktop)}.sc-digi-form-label-h .digi-form-label__label--label.sc-digi-form-label,.sc-digi-form-label-h .digi-form-label__label--description.sc-digi-form-label{line-height:var(--digi--typography--label--line-height--desktop);cursor:pointer;display:block}.sc-digi-form-label-h .digi-form-label__label-group.sc-digi-form-label{display:inline-flex;align-items:center;gap:var(--digi--gutter--icon)}.sc-digi-form-label-h .digi-form-label__description.sc-digi-form-label{max-width:var(--digi--paragraph-width--medium);line-height:var(--digi--typography--label-description--line-height--desktop);font-size:var(--digi--typography--label-description--font-size--desktop)}",d=class{constructor(e){t(this,e),this.labelText=void 0,this.hasActionSlot=void 0,this.afLabel=void 0,this.afId=r("digi-form-label"),this.afFor=void 0,this.afDescription=void 0,this.afRequired=void 0,this.afAnnounceIfOptional=!1,this.afRequiredText=o.required.toLowerCase(),this.afAnnounceIfOptionalText=o.optional.toLowerCase()}componentWillLoad(){this.setLabelText(),this.validateLabel(),this.validateFor(),this.handleSlotVisibility()}validateLabel(){}validateFor(){this.afFor||s.warn("digi-form-label must have a for attribute. Please add a for attribute using af-for",this.hostElement)}setLabelText(){this.labelText=`${this.afLabel} ${this.requiredText}`,this.afLabel||s.warn("digi-form-label must have a label. Please add a label using af-label",this.hostElement)}handleSlotVisibility(){this.hasActionSlot=!!this.hostElement.querySelector('[slot="actions"]')}get requiredText(){return this.afRequired&&!this.afAnnounceIfOptional?` (${this.afRequiredText})`:!this.afRequired&&this.afAnnounceIfOptional?` (${this.afAnnounceIfOptionalText})`:""}render(){return i("div",{class:"digi-form-label"},i("div",{class:"digi-form-label__label-group"},this.afFor&&this.afLabel&&i("label",{class:"digi-form-label__label",htmlFor:this.afFor,id:this.afId},i("span",{class:"digi-form-label__label--label"},this.labelText),this.afDescription&&i("span",{class:"digi-form-label__label--description"},this.afDescription)),this.hasActionSlot&&i("div",{class:"digi-form-label__actions"},i("slot",{name:"actions"}))))}get hostElement(){return l(this)}static get watchers(){return{afLabel:["validateLabel","setLabelText"],afFor:["validateFor"],afRequired:["setLabelText"],afAnnounceIfOptional:["setLabelText"]}}};d.style=n;const g=".sc-digi-form-validation-message-h{--digi--form-validation-message--icon-color--success:var(--digi--color--icons--success);--digi--form-validation-message--icon-color--warning:var(--digi--color--icons--warning);--digi--form-validation-message--icon-color--error:var(--digi--color--icons--danger)}.sc-digi-form-validation-message-h .digi-form-validation-message.sc-digi-form-validation-message{display:flex;flex-wrap:wrap;align-items:center}.sc-digi-form-validation-message-h .digi-form-validation-message--success.sc-digi-form-validation-message{--ICON-COLOR:var(--digi--form-validation-message--icon-color--success)}.sc-digi-form-validation-message-h .digi-form-validation-message--warning.sc-digi-form-validation-message{--ICON-COLOR:var(--digi--form-validation-message--icon-color--warning)}.sc-digi-form-validation-message-h .digi-form-validation-message--error.sc-digi-form-validation-message{--ICON-COLOR:var(--digi--form-validation-message--icon-color--error)}.sc-digi-form-validation-message-h .digi-form-validation-message__icon.sc-digi-form-validation-message{color:var(--ICON-COLOR);margin-inline-end:var(--digi--gutter--icon)}.sc-digi-form-validation-message-h .digi-form-validation-message__icon.sc-digi-form-validation-message>*.sc-digi-form-validation-message{--digi--icon--width:1.25em;--digi--icon--height:1.25em;--digi--icon--color:var(--ICON-COLOR);display:flex}.sc-digi-form-validation-message-h .digi-form-validation-message__text.sc-digi-form-validation-message{flex:1;font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--tag--font-size--desktop);color:var(--digi--color--text--primary)}",f=class{constructor(e){t(this,e),this.afVariation=a.SUCCESS}get cssModifiers(){return{"digi-form-validation-message--success":this.afVariation===a.SUCCESS,"digi-form-validation-message--error":this.afVariation===a.ERROR,"digi-form-validation-message--warning":this.afVariation===a.WARNING}}get icon(){switch(this.afVariation){case a.SUCCESS:return"validation-success";case a.ERROR:return"validation-error";case a.WARNING:return"validation-warning"}}render(){return i("div",{class:Object.assign({"digi-form-validation-message":!0},this.cssModifiers)},i("div",{class:"digi-form-validation-message__icon","aria-hidden":"true"},i("digi-icon",{afName:this.icon})),i("span",{class:"digi-form-validation-message__text"},i("slot",null)))}get hostElement(){return l(this)}};f.style=g;export{d as digi_form_label,f as digi_form_validation_message};