import{r as o,c as p,al as l,am as f,an as r,h as i,g}from"./index-bbd3721e.js";import{l as a}from"./logger.util-9b5aeb0e-eecc5f5e.js";const u=".sc-digi-progress-steps-h{display:block}",S=class{constructor(t){o(this,t),this.afOnReady=p(this,"afOnReady",3),this.afHeadingLevel=l.H2,this.afVariation=f.PRIMARY,this.afCurrentStep=1,this.steps=[]}async afMNext(){this.afCurrentStep+=1}async afMPrevious(){this.afCurrentStep-=1}componentWillLoad(){this.getSteps(),this.setStepProps()}componentWillUpdate(){this.getSteps(),this.setStepProps()}componentDidLoad(){this.afOnReady.emit()}getSteps(){let t=this.hostElement.querySelectorAll("digi-progress-step");if(!t||t.length<=0){a.warn("The slot contains no children elements.",this.hostElement);return}this.steps=[...Array.from(t)].map(e=>({outerHTML:e.outerHTML,ref:e}))}setStepProps(){if(this.steps&&this.afCurrentStep<1){a.warn(`Current step is set to ${this.afCurrentStep} which is not allowed.`,this.hostElement),this.afCurrentStep=1;return}if(this.steps&&this.afCurrentStep>this.steps.length+1){a.warn(`Current step is set to ${this.afCurrentStep} which is more than the amount of available steps (${this.steps.length}).`,this.hostElement),this.afCurrentStep=this.steps.length+1;return}this.steps&&this.steps.forEach((t,e)=>{t.ref.afVariation=this.afVariation;try{const n=Number.parseInt(this.afHeadingLevel.split("h")[1]);t.ref.afHeadingLevel="h"+n;const h=e==this.steps.length-1;t.ref.afIsLast=h;let s;e<this.afCurrentStep-1?s=r.DONE:e==this.afCurrentStep-1?s=r.CURRENT:s=r.UPCOMING,t.ref.afStepStatus=s}catch{}})}render(){return i("div",{role:"list"},i("digi-typography",null,i("slot",null)))}get hostElement(){return g(this)}};S.style=u;export{S as digi_progress_steps};
