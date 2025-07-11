import{u as A,h as oe,a4 as ge,g2 as b,g3 as fe,ew as J,g4 as xe,j as e,F as x,U as S,aG as N,$ as ye,D as se,E as ie,aU as je,L as ae,r as L,B as m,d as h,a5 as be,n as Ce,dw as we,w as G,x as X,y as P,z,T as f,A as _,C as Q,bq as Y,br as ee,aK as Te,I as te,aJ as $e,ds as ve,bj as ke}from"./strapi-kNRxLYGu.js";import{u as D,a as re,g as u,A as Me,C as ne}from"./index-Cr5tfW7U-CUBOfRKW.js";import"./sortBy-BZ66OsRi.js";import"./groupBy-DG3sCQLt.js";import"./_baseEach-IQlAOfY3.js";import"./index-BDDi1119.js";import"./index-BRVyLNfZ.js";import"./_arrayIncludesWith-BNzMLSv9.js";import"./_baseMap-CnB48Wo3.js";const Ie=h(m)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,le=h.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 2rem;
      position: relative;

      &::before {
        content: '';
        width: 0.4rem;
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 2.6rem;
        border-radius: 4px;

        ${({$isFromDynamicZone:t,$isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,de=({customRowComponent:t,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:s=!1,firstLoopComponentUid:r})=>{const{modifiedData:i}=D(),{schema:{attributes:p}}=b(i,["components",n],{schema:{attributes:[]}});return e.jsx(le,{$isChildOfDynamicZone:o,className:"component-row",children:e.jsx("td",{colSpan:12,children:e.jsx(pe,{customRowComponent:t,items:p,targetUid:n,firstLoopComponentUid:r||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:r?n:null})})})},Fe=({isActive:t=!1,icon:n="dashboard"})=>{const o=ne[n]||ne.dashboard;return e.jsx(x,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:e.jsx(o,{height:"2rem",width:"2rem"})})},ce=h(m)`
  position: absolute;
  display: none;
  top: 5px;
  right: 0.8rem;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Ae=h(x)`
  width: 14rem;
  height: 8rem;
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};

    ${ce} {
      display: block;
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,De=({component:t,dzName:n,index:o,isActive:s=!1,isInDevelopmentMode:r=!1,onClick:i})=>{const{modifiedData:p,removeComponentFromDynamicZone:j}=D(),{schema:{icon:y,displayName:g}}=b(p,["components",t],{schema:{}}),l=a=>{a.stopPropagation(),j(n,o)};return e.jsxs(Ae,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:i,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[e.jsx(Fe,{icon:y,isActive:s}),e.jsx(m,{marginTop:1,maxWidth:"100%",children:e.jsx(f,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:g})}),r&&e.jsx(ce,{tag:"button",onClick:l,children:e.jsx(ke,{})})]})},Re=h(N)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.9rem;
  border-radius: 6.4rem;
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Be=h(m)`
  height: 9rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Se=h(x)`
  width: 100%;
  overflow-x: auto;
`,Ne=h(m)`
  padding-top: 9rem;
`,Le=h(x)`
  flex-shrink: 0;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
`,Ee=({customRowComponent:t,components:n=[],addComponent:o,name:s,targetUid:r})=>{const{isInDevelopmentMode:i}=D(),[p,j]=L.useState(0),{formatMessage:y}=A(),g=a=>{p!==a&&j(a)},l=()=>{o(s)};return e.jsx(le,{className:"dynamiczone-row",$isFromDynamicZone:!0,children:e.jsxs("td",{colSpan:12,children:[e.jsx(Be,{paddingLeft:8,children:e.jsxs(Se,{gap:2,children:[i&&e.jsx("button",{type:"button",onClick:l,children:e.jsxs(Le,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(Re,{}),e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y({id:u("button.component.add"),defaultMessage:"Add a component"})})]})}),e.jsx(x,{role:"tablist",gap:2,children:n.map((a,d)=>e.jsx(De,{dzName:s||"",index:d,component:a,isActive:p===d,isInDevelopmentMode:i,onClick:()=>g(d)},a))})]})}),e.jsx(Ne,{children:n.map((a,d)=>{const c={customRowComponent:t,component:a};return e.jsx(m,{id:`dz-${s}-panel-${d}`,role:"tabpanel","aria-labelledby":`dz-${s}-tab-${d}`,style:{display:p===d?"block":"none"},children:e.jsx("table",{children:e.jsx("tbody",{children:L.createElement(de,{...c,isFromDynamicZone:!0,component:r,key:a})})})},a)})})]})})},Oe=h(m)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Pe=h(m)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.4rem;
`,ze=({children:t,icon:n,color:o,...s})=>e.jsx(Pe,{paddingBottom:4,paddingTop:4,tag:"button",type:"button",...s,children:e.jsxs(x,{children:[e.jsx(Oe,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(m,{paddingLeft:3,children:e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})}),pe=({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r=!1,isMain:i=!1,isNestedInDZComponent:p=!1,isSub:j=!1,items:y=[],secondLoopComponentUid:g,targetUid:l})=>{const{formatMessage:a}=A(),{trackUsage:d}=oe(),{isInDevelopmentMode:c,modifiedData:M,isInContentTypeView:T}=D(),{onOpenModalAddField:v}=re(),C=()=>{d("hasClickedCTBAddFieldBanner"),v({forTarget:o,targetUid:l})};return l?y.length===0&&i?e.jsxs(G,{colCount:2,rowCount:2,children:[e.jsx(X,{children:e.jsxs(P,{children:[e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(Q,{colSpan:2,children:e.jsx(Y,{action:e.jsx(S,{onClick:C,size:"L",startIcon:e.jsx(N,{}),variant:"secondary",children:a({id:u("table.button.no-fields"),defaultMessage:"Add new field"})}),content:a(T?{id:u("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:u("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}),hasRadius:!0,icon:e.jsx(ee,{width:"16rem"})})})})})]}):e.jsxs(Ie,{children:[e.jsx(m,{paddingLeft:6,paddingRight:i?6:0,...i&&{style:{overflowX:"auto"}},children:e.jsxs("table",{children:[i&&e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx("th",{colSpan:2,children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx("tbody",{children:y.map($=>{const{type:I}=$,R=n;return e.jsxs(L.Fragment,{children:[e.jsx(R,{...$,isNestedInDZComponent:p,targetUid:l,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r,secondLoopComponentUid:g}),I==="component"&&e.jsx(de,{...$,customRowComponent:n,targetUid:l,isNestedInDZComponent:r,editTarget:o,firstLoopComponentUid:s}),I==="dynamiczone"&&e.jsx(Ee,{...$,customRowComponent:n,addComponent:t,targetUid:l})]},$.name)})})]})}),i&&c&&e.jsx(Te,{cursor:"pointer",icon:e.jsx(N,{}),onClick:C,children:a({id:u(`form.button.add.field.to.${M.contentType?M.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),j&&c&&!r&&e.jsx(ze,{icon:e.jsx(N,{}),onClick:C,color:r?"primary":"neutral",children:a({id:u("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):e.jsxs(G,{colCount:2,rowCount:2,children:[e.jsx(X,{children:e.jsxs(P,{children:[e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(Q,{colSpan:2,children:e.jsx(Y,{content:a({id:u("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}),hasRadius:!0,icon:e.jsx(ee,{width:"16rem"})})})})})]})},Ze=h(m)`
  position: absolute;
  left: -1.8rem;
  top: 0px;

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,We=h.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ue=t=>e.jsx(Ze,{children:e.jsx(We,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Ve=({type:t,customField:n=null,repeatable:o=!1})=>{const{formatMessage:s}=A();let r=t;return["integer","biginteger","float","decimal"].includes(t)?r="number":["string"].includes(t)&&(r="text"),n?e.jsx(f,{children:s({id:u("attribute.customField"),defaultMessage:"Custom field"})}):e.jsxs(f,{textColor:"neutral800",children:[s({id:u(`attribute.${r}`),defaultMessage:t})," ",o&&s({id:u("component.repeatable"),defaultMessage:"(repeatable)"})]})},He=({content:t})=>e.jsx(e.Fragment,{children:ie(t)}),Ke=h(m)`
  position: relative;
`,qe=L.memo(({configurable:t=!0,customField:n=null,editTarget:o,firstLoopComponentUid:s=null,isFromDynamicZone:r=!1,name:i,onClick:p,relation:j="",repeatable:y=!1,secondLoopComponentUid:g=null,target:l=null,targetUid:a=null,type:d})=>{const{contentTypes:c,isInDevelopmentMode:M,removeAttribute:T}=D(),{formatMessage:v}=A(),C=d==="relation"&&j.includes("morph"),$=["integer","biginteger","float","decimal"].includes(d)?"number":d,I=b(c,[l],{}),R=b(I,["schema","displayName"],""),B=b(I,"plugin"),Z=l?"relation":$,E=()=>{C||t!==!1&&p(o,g||s||a,i,d,n)};let k;return g&&s?k=2:s?k=1:k=0,e.jsxs(Ke,{tag:"tr",onClick:M&&t&&!C?E:void 0,children:[e.jsxs("td",{style:{position:"relative"},children:[k!==0&&e.jsx(Ue,{color:r?"primary200":"neutral150"}),e.jsxs(x,{paddingLeft:2,gap:4,children:[e.jsx(Me,{type:Z,customField:n}),e.jsx(f,{textColor:"neutral800",fontWeight:"bold",children:i})]})]}),e.jsx("td",{children:l?e.jsxs(f,{textColor:"neutral800",children:[v({id:u(`modelPage.attribute.${C?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"})," ",e.jsxs("span",{style:{fontStyle:"italic"},children:[e.jsx(He,{content:R})," ",B&&`(${v({id:u("from"),defaultMessage:"from"})}: ${B})`]})]}):e.jsx(Ve,{type:d,customField:n,repeatable:y})}),e.jsx("td",{children:M?e.jsx(x,{justifyContent:"flex-end",onClick:F=>F.stopPropagation(),children:t?e.jsxs(x,{gap:1,children:[!C&&e.jsx(te,{onClick:E,label:`${v({id:"app.utils.edit",defaultMessage:"Edit"})} ${i}`,variant:"ghost",children:e.jsx(se,{})}),e.jsx(te,{onClick:F=>{F.stopPropagation(),T(o,i,g||s||"")},label:`${v({id:"global.delete",defaultMessage:"Delete"})} ${i}`,variant:"ghost",children:e.jsx($e,{})})]}):e.jsx(ve,{})}):e.jsx(m,{height:"3.2rem"})})]})}),Je=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n},W={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ge=({isInContentTypeView:t,contentTypeKind:n})=>t?n==="singleType"?W.singleTypesConfigurations:W.collectionTypesConfigurations:W.componentsConfigurations,Xe=L.memo(({disabled:t,isInContentTypeView:n=!0,contentTypeKind:o="collectionType",targetUid:s=""})=>{const{formatMessage:r}=A(),i=be(),p=Ge({isInContentTypeView:n,contentTypeKind:o}),j=r({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"}),y=()=>(t||i(n?`/content-manager/collection-types/${s}/configurations/edit`:`/content-manager/components/${s}/configurations/edit`),!1),{isLoading:g,allowedActions:l}=Ce({viewConfig:p});return g||!l.canConfigureView&&!l.canConfigureLayout?null:e.jsx(S,{startIcon:e.jsx(we,{}),variant:"tertiary",onClick:y,disabled:t,children:j})}),_e=h(ae.Header)`
  overflow-wrap: anywhere;
`,lt=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:s,submitData:r}=D(),{formatMessage:i}=A(),{trackUsage:p}=oe(),j=ge("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:y,onOpenModalAddField:g,onOpenModalEditField:l,onOpenModalEditSchema:a,onOpenModalEditCustomField:d}=re(),c=s?"contentType":"component",M=[c,"schema","attributes"],T=b(n,[c,"uid"]),v=b(n,[c,"isTemporary"],!1),C=b(n,[c,"schema","kind"],null),$=b(n,M,[]),I=fe(t,[c,"plugin"]),R=!J(n,t),B=s?"contentType":"component",Z=w=>{y({dynamicZoneTarget:w,targetUid:T})},E=async(w,U,V,H,K)=>{const q=Je(H);K?d({forTarget:w,targetUid:U,attributeName:V,attributeType:q,customFieldUid:K}):l({forTarget:w,targetUid:U,attributeName:V,attributeType:q,step:H==="component"?"2":null})};let k=b(n,[c,"schema","displayName"],"");const F=b(n,[c,"schema","kind"],""),O=j?.params.currentUID==="create-content-type";!k&&O&&(k=i({id:u("button.model.create"),defaultMessage:"Create new collection type"}));const ue=()=>{const w=F||c;w==="collectionType"&&p("willEditNameOfContentType"),w==="singleType"&&p("willEditNameOfSingleType"),a({modalType:c,forTarget:c,targetUid:T,kind:w})};xe({when:R,message:i({id:u("prompt.unsaved"),defaultMessage:"Are you sure?"})});const he=o&&e.jsxs(x,{gap:2,marginLeft:2,children:[!O&&e.jsx(S,{startIcon:e.jsx(N,{}),variant:"secondary",minWidth:"max-content",onClick:()=>{g({forTarget:B,targetUid:T})},children:i({id:u("button.attributes.add.another"),defaultMessage:"Add another field"})}),e.jsx(S,{startIcon:e.jsx(ye,{}),onClick:async()=>await r(),type:"submit",disabled:J(n,t),children:i({id:"global.save",defaultMessage:"Save"})})]}),me=o&&!I&&!O&&e.jsx(S,{startIcon:e.jsx(se,{}),variant:"tertiary",onClick:ue,children:i({id:"app.utils.edit",defaultMessage:"Edit"})});return e.jsxs(e.Fragment,{children:[e.jsx(_e,{id:"title",primaryAction:he,secondaryAction:me,title:ie(k),subtitle:i({id:u("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.jsx(je,{})}),e.jsx(ae.Content,{children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(x,{justifyContent:"flex-end",children:e.jsx(x,{gap:2,children:e.jsx(Xe,{targetUid:T,isInContentTypeView:s,contentTypeKind:C,disabled:O||v},"link-to-cm-settings-view")})}),e.jsx(m,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:e.jsx(pe,{items:$,customRowComponent:w=>e.jsx(qe,{...w,onClick:E}),addComponentToDZ:Z,targetUid:T,editTarget:B,isMain:!0})})]})})]})};export{lt as default};
