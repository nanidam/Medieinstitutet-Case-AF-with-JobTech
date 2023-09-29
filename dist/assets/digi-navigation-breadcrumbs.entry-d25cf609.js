import{r as e,c as n,h as r,g as d}from"./index-bbd3721e.js";import{l as o}from"./logger.util-9b5aeb0e-eecc5f5e.js";import{r as s}from"./randomIdGenerator.util-17972493-3e0a24fb.js";import{_ as g}from"./text-2fb6c0c4-138bda8d.js";const c='.sc-digi-navigation-breadcrumbs-h{--digi--navigation-breadcrumbs--items--display:flex;--digi--navigation-breadcrumbs--items--flex-wrap:wrap;--digi--navigation-breadcrumbs--items--padding:0;--digi--navigation-breadcrumbs--items--margin:0;--digi--navigation-breadcrumbs--item--font-family:var(--digi--global--typography--font-family--default);--digi--navigation-breadcrumbs--item--font-size:var(--digi--typography--breadcrumbs--font-size--desktop);--digi--navigation-breadcrumbs--item--text-decoration:var(--digi--typography--breadcrumbs--text-decoration--desktop);--digi--navigation-breadcrumbs--item--color:var(--digi--color--text--primary);--digi--navigation-breadcrumbs--divider--padding:var(--digi--gutter--icon);--digi--navigation-breadcrumbs--link--visited--color:var(--digi--color--text--link-visited);--digi--navigation-breadcrumbs--link--hover--focus--color:var(--digi--color--text--link-hover);--digi--navigation-breadcrumbs--link--hover--focus--text-decoration:underline;--digi--navigation-breadcrumbs--link--color:var(--digi--color--text--link)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__items.sc-digi-navigation-breadcrumbs{list-style:none;display:var(--digi--navigation-breadcrumbs--items--display);flex-wrap:var(--digi--navigation-breadcrumbs--items--flex-wrap);margin:var(--digi--navigation-breadcrumbs--items--margin);padding:var(--digi--navigation-breadcrumbs--items--padding)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__item.sc-digi-navigation-breadcrumbs{font-family:var(--digi--navigation-breadcrumbs--item--font-family);font-size:var(--digi--navigation-breadcrumbs--item--font-size);color:var(--digi--navigation-breadcrumbs--item--color)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__item.sc-digi-navigation-breadcrumbs:not([aria-current=page])::after{content:"/";padding-inline:var(--digi--navigation-breadcrumbs--divider--padding)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__link.sc-digi-navigation-breadcrumbs{text-decoration:none;color:var(--digi--navigation-breadcrumbs--link--color);font-size:var(--digi--navigation-breadcrumbs--item--font-size);-webkit-text-decoration:var(--digi--navigation-breadcrumbs--item--text-decoration);text-decoration:var(--digi--navigation-breadcrumbs--item--text-decoration)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__link.sc-digi-navigation-breadcrumbs:visited{color:var(--digi--navigation-breadcrumbs--link--visited--color)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__link.sc-digi-navigation-breadcrumbs:focus,.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__link.sc-digi-navigation-breadcrumbs:hover{-webkit-text-decoration:var(--digi--navigation-breadcrumbs--link--hover--focus--text-decoration);text-decoration:var(--digi--navigation-breadcrumbs--link--hover--focus--text-decoration);--digi--navigation-breadcrumbs--link--color:var(--digi--navigation-breadcrumbs--link--hover--focus--color)}.sc-digi-navigation-breadcrumbs-h .digi-navigation-breadcrumbs__link.sc-digi-navigation-breadcrumbs:focus-visible{outline:var(--digi--focus-outline);border-radius:var(--digi--global--border-radius--small)}',b=class{constructor(i){e(this,i),this.afOnClick=n(this,"afOnClick",7),this.linkItems=[],this.currentPage=void 0,this.afAriaLabel=g.breadcrumbs,this.afId=s("digi-navigation-breadcrumbs"),this.afCurrentPage=void 0}onAfCurrentPage(i){this.currentPage=i}componentDidLoad(){this.getBreadcrumbs()}getBreadcrumbs(){const i=this._observer.children;if(!i||(i==null?void 0:i.length)<=0){o.warn("The slot contains no link elements.",this.hostElement);return}this.linkItems=[...i].filter(a=>a.tagName.toLowerCase()==="a").map(a=>({text:a.textContent,href:a.getAttribute("href")||""}))}clickHandler(i){this.afOnClick.emit(i)}render(){var i;return r("nav",{class:"digi-navigation-breadcrumbs","aria-label":this.afAriaLabel},r("ol",{class:"digi-navigation-breadcrumbs__items"},this.linkItems.map(a=>r("li",{class:"digi-navigation-breadcrumbs__item"},r("a",{class:"digi-navigation-breadcrumbs__link",onClick:t=>this.clickHandler(t),href:a.href},a.text))),r("li",{class:"digi-navigation-breadcrumbs__item","aria-current":"page"},(i=this.currentPage)!==null&&i!==void 0?i:this.afCurrentPage),r("digi-util-mutation-observer",{onAfOnChange:()=>this.getBreadcrumbs(),ref:a=>this._observer=a,hidden:!0},r("slot",null))))}get hostElement(){return d(this)}static get watchers(){return{afCurrentPage:["onAfCurrentPage"]}}};b.style=c;export{b as digi_navigation_breadcrumbs};
