import{r as a,s as i,t as n,h as s,g as l}from"./index-bbd3721e.js";import{l as r}from"./logger.util-9b5aeb0e-eecc5f5e.js";const o=".sc-digi-expandable-faq-h{display:block}",h=class{constructor(e){a(this,e),this.isExpanded=void 0,this.afHeading=void 0,this.afHeadingLevel=i.H2,this.afVariation=n.PRIMARY,this.listItems=[]}componentWillLoad(){this.getListItems(),this.setFaqItemProps()}componentWillUpdate(){this.getListItems(),this.setFaqItemProps()}getListItems(){let e=this.hostElement.querySelectorAll("digi-expandable-faq-item");if(!e||e.length<=0){r.warn("The slot contains no children elements.",this.hostElement);return}this.listItems=[...Array.from(e)].map(t=>({outerHTML:t.outerHTML,ref:t}))}setFaqItemProps(){this.listItems&&this.listItems.forEach(e=>{e.ref.afVariation=this.afVariation;try{const t=Number.parseInt(this.afHeadingLevel.split("h")[1]);e.ref.afHeadingLevel="h"+(t+1)}catch{}})}render(){return s("div",{class:{"digi-expandable-faq":!0}},s(this.afHeadingLevel,null,this.afHeading),s("slot",null))}get hostElement(){return l(this)}};h.style=o;export{h as digi_expandable_faq};
