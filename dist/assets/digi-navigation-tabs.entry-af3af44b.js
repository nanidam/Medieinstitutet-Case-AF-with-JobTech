import{r as d,c as e,h as n,g as o}from"./index-bbd3721e.js";import{r as b}from"./randomIdGenerator.util-17972493-3e0a24fb.js";import{l as g}from"./logger.util-9b5aeb0e-eecc5f5e.js";const c=".sc-digi-navigation-tabs-h{--digi--navigation-tabs--color:var(--digi--color--text--primary);--digi--navigation-tabs--padding:var(--digi--padding--medium) var(--digi--padding--largest);--digi--navigation-tabs--box-shadow--selected:inset 0 -4px 0 0 var(--digi--color--border--secondary);--digi--navigation-tabs--divider--color--indicator:var(--digi--global--color--neutral--grayscale--darkest-2);--digi--navigation-tabs--divider:1px solid var(--digi--navigation-tabs--divider--color--indicator);--digi--navigation-tabs--background-color--active:var(--digi--color--background--neutral-1);--digi--navigation-tabs--background-color--indicator:var(--digi--navigation-tabs--background-color--active);--digi--navigation-tabs--tab--border:none;--digi--navigation-tabs--tab--background-color:transparent}.digi-navigation-tabs__tablist.sc-digi-navigation-tabs{display:flex}.sc-digi-navigation-tabs-h .digi-navigation-tabs__tablist.sc-digi-navigation-tabs{border-bottom:var(--digi--navigation-tabs--divider)}.sc-digi-navigation-tabs-h .digi-navigation-tabs__tab.sc-digi-navigation-tabs{color:var(--digi--navigation-tabs--color);font-family:var(--digi--global--typography--font-family--default);text-align:center;font-weight:var(--digi--typography--label--font-weight--desktop);padding:var(--digi--navigation-tabs--padding);background-color:var(--digi--navigation-tabs--tab--background-color);border:var(--digi--navigation-tabs--tab--border)}.sc-digi-navigation-tabs-h .digi-navigation-tabs__tab[aria-selected].sc-digi-navigation-tabs{box-shadow:var(--digi--navigation-tabs--box-shadow--selected)}.sc-digi-navigation-tabs-h .digi-navigation-tabs__tab.sc-digi-navigation-tabs:hover,.sc-digi-navigation-tabs-h .digi-navigation-tabs__tab.sc-digi-navigation-tabs:focus{--digi--navigation-tabs--tab--background-color:var(--digi--navigation-tabs--background-color--indicator)}",l=class{constructor(a){d(this,a),this.afOnChange=e(this,"afOnChange",7),this.afOnClick=e(this,"afOnClick",7),this.afOnFocus=e(this,"afOnFocus",7),this.afOnTabsReady=e(this,"afOnTabsReady",7),this.afOnReady=e(this,"afOnReady",3),this.tabPanels=[],this.activeTab=0,this.currentTabIndex=this.activeTab,this.afAriaLabel="",this.afInitActiveTab=0,this.afId=b("digi-navigation-tabs"),this.afPreventScrollOnFocus=!1}async afMSetActiveTab(a){this.setActiveTab(a)}changeHandler(a){this.afOnChange.emit(a)}setTabFocus(a){a=this.tabId(this.tabPanels[a].afId),document.getElementById(`${a}`)&&document.getElementById(`${a}`).focus({preventScroll:this.afPreventScrollOnFocus})}clickHandler(a,t){this.setActiveTab(t),this.afOnClick.emit(a)}focusHandler(a){const t=this.tabPanels.findIndex(i=>this.tabId(i.afId)===document.activeElement.id)===this.activeTab;this.currentTabIndex=t?this.activeTab:this.currentTabIndex,this.afOnFocus.emit(a)}leftHandler(){this.decrementCurrentTabIndex(),this.setTabFocus(this.currentTabIndex)}rightHandler(){this.incrementCurrentTabIndex(),this.setTabFocus(this.currentTabIndex)}homeHandler(){this.setTabFocus("0")}endHandler(){this.setTabFocus(this.tabPanels.length-1)}tabId(a){return`${a}-tab`}decrementCurrentTabIndex(){this.currentTabIndex>0?this.currentTabIndex=this.currentTabIndex-1:this.currentTabIndex=this.tabPanels.length-1}incrementCurrentTabIndex(){this.currentTabIndex<this.tabPanels.length-1?this.currentTabIndex=this.currentTabIndex+1:this.currentTabIndex=0}componentDidLoad(){this.getTabs(),this.afOnReady.emit()}getTabs(a=null){let t;if(t=this.hostElement.querySelectorAll(`#${this.afId}-observer > digi-navigation-tab`),!t){g.warn("navigation-tabs tablist is empty, have you missed anything?",this.hostElement);return}this.tabPanels=[...t];let i=this.afInitActiveTab?this.afInitActiveTab:0;if(a){if(!a.detail.addedNodes||!a.detail.removedNodes)return;const r=a.detail.addedNodes.item(0),s=a.detail.removedNodes.item(0);i=this.currentTabIndex,r?Object.values(a.target.children).indexOf(r)<=this.currentTabIndex&&(i+=1):s&&(s.dataset.position==a.target.children.length&&s.dataset.position==this.currentTabIndex||s.dataset.position<this.currentTabIndex)&&(i-=1)}this.setActiveTab(i),this.afOnTabsReady.emit(i)}setActiveTab(a){this.activeTab=a,this.currentTabIndex=this.activeTab,this.tabPanels.forEach((t,i)=>{t.setAttribute("af-active",i===a),t.setAttribute("data-position",i)})}render(){return n("div",{class:"digi-navigation-tabs"},n("digi-util-keydown-handler",{onAfOnLeft:()=>this.leftHandler(),onAfOnRight:()=>this.rightHandler(),onAfOnHome:()=>this.homeHandler(),onAfOnEnd:()=>this.endHandler()},n("div",{class:"digi-navigation-tabs__tablist",role:"tablist","aria-label":this.afAriaLabel},this.tabPanels.map((a,t)=>n("button",{class:"digi-navigation-tabs__tab",role:"tab",type:"button","aria-selected":this.activeTab===t?"true":null,"aria-controls":a.afId,tabindex:this.activeTab!==t?"-1":null,id:`${this.tabId(a.afId)}`,onClick:i=>this.clickHandler(i,t),onFocus:i=>this.focusHandler(i)},a.afAriaLabel)))),n("digi-util-mutation-observer",{onAfOnChange:a=>this.getTabs(a),id:`${this.afId}-observer`},n("slot",null)))}get hostElement(){return o(this)}static get watchers(){return{activeTab:["changeHandler"]}}};l.style=c;export{l as digi_navigation_tabs};
