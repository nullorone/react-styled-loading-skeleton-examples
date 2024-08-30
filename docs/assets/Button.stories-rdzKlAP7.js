import{j as r,T as p}from"./index-CQZhdZR6.js";import"./index-DJO9vBfz.js";const o=({primary:t=!1,size:i="medium",backgroundColor:u,label:l,...d})=>{const m=t?"storybook-button--primary":"storybook-button--secondary";return r.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${i}`,m].join(" "),style:{backgroundColor:u},...d,children:l})};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const g={title:"Components/Button",component:o,parameters:{layout:"centered"}},e={args:{isLoading:!0},render:({isLoading:t})=>t?r.jsx(p,{width:84,height:36,rounded:42}):r.jsx(o,{primary:!0,label:"Button"})};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  render: ({
    isLoading
  }) => {
    return isLoading ? <Skeleton width={84} height={36} rounded={42} /> : <Button primary label={'Button'} />;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,g as default};
