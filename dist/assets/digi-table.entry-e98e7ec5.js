import{r as l,ar as i,as as a,h as t}from"./index-bbd3721e.js";import{r as d}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const r="digi-table{--digi--table--font-family:var(--digi--global--typography--font-family--default);--digi--table--font-size:var(--digi--typography--body--font-size--desktop);--digi--table--color:var(--digi--color--text--primary);--digi--table--font-weight:var(--digi--typography--body--font-weight--desktop);--digi--table--cell--margin:var(--digi--gutter--small);--digi--table--cell--padding--y:var(--digi--gutter--larger);--digi--table--cell--padding--x:var(--digi--gutter--larger);--digi--table--cell--padding--y--s:var(--digi--gutter--small);--digi--table--cell--padding--x--s:var(--digi--gutter--small);--digi--table--th--border-color:var(--digi--color--border--primary);--digi--table--td--border-color:var(--digi--color--border--neutral-2);--digi--table--background:var(--digi--color--background--neutral-6);--digi--table--background--even:var(--digi--color--background--secondary);--digi--table--color--active:var(--digi--color--text--inverted);--digi--table--background--active:var(--digi--color--background--complementary-1)}digi-table .digi-table--primary table,digi-table .digi-table--secondary table{border-collapse:collapse}digi-table .digi-table--primary th,digi-table .digi-table--secondary th{border-bottom:solid 1px var(--digi--table--th--border-color)}digi-table .digi-table--primary th[scope=row],digi-table .digi-table--primary td,digi-table .digi-table--secondary th[scope=row],digi-table .digi-table--secondary td{border-bottom:solid 1px var(--digi--table--td--border-color)}digi-table .digi-table--secondary tbody tr:nth-child(even){background:var(--digi--table--background)}digi-table .digi-table--tertiary table{border-spacing:var(--digi--table--cell--margin);border-collapse:separate}digi-table .digi-table--tertiary tbody tr:nth-child(odd){background:var(--digi--table--background)}digi-table .digi-table--tertiary tbody tr:nth-child(even){background:var(--digi--table--background--even)}digi-table .digi-table--small table th,digi-table .digi-table--small table td{padding:var(--digi--table--cell--padding--y--s) var(--digi--table--cell--padding--x--s)}digi-table table{font-family:var(--digi--table--font-family);font-size:var(--digi--table--font-size);color:var(--digi--table--color);font-weight:var(--digi--table--font-weight);text-align:left;width:100%}digi-table table th,digi-table table td{padding:var(--digi--table--cell--padding--y) var(--digi--table--cell--padding--x)}digi-table table tr[data-af-table-row~=active],digi-table table th[data-af-table-cell~=active],digi-table table td[data-af-table-cell~=active]{color:var(--digi--table--color--active);background-color:var(--digi--table--background--active)}digi-table table th[data-af-table-cell~=center],digi-table table td[data-af-table-cell~=center]{text-align:center}digi-table table th[data-af-table-cell~=right],digi-table table td[data-af-table-cell~=right]{text-align:right}",g=class{constructor(e){l(this,e),this.afVariation=i.PRIMARY,this.afSize=a.MEDIUM,this.afId=d("digi-navigation-breadcrumbs")}get cssModifiers(){return{"digi-table--primary":this.afVariation===i.PRIMARY,"digi-table--secondary":this.afVariation===i.SECONDARY,"digi-table--tertiary":this.afVariation===i.TERTIARY,"digi-table--small":this.afSize===a.SMALL}}render(){return t("div",{class:Object.assign({"digi-table":!0},this.cssModifiers)},t("slot",null))}};g.style=r;export{g as digi_table};
