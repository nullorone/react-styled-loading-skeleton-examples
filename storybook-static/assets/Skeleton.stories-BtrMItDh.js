import{T as c,j as g}from"./index-CQZhdZR6.js";import"./index-DJO9vBfz.js";const h={title:"Components/Skeleton",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"range",min:0,max:800,step:50}},height:{control:{type:"range",min:0,max:100,step:5}},rounded:{control:"select",options:[void 0,2,4,8,12,16,20]},timingFunc:{control:"select",options:["ease","ease-in","ease-in-out","ease-out"]},direction:{control:"select",options:["row","column"]},gap:{control:{type:"range",min:2,max:12,step:1}}}},e={args:{width:500,height:30,rounded:2,isCircle:!1,duration:1500,baseColor:"#e9e9e9",highlightColor:"#f9f9f9",gradient:"90deg, #e9e9e9, #f9f9f9, #e9e9e9",withoutAnimation:!1}},o={args:{width:100,height:30,count:4},render:({gap:d,direction:p,...l})=>g.jsx(c,{...l,flex:{gap:d??2,direction:p??"row"}})};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 30,
    rounded: 2,
    isCircle: false,
    duration: 1500,
    baseColor: '#e9e9e9',
    highlightColor: '#f9f9f9',
    gradient: '90deg, #e9e9e9, #f9f9f9, #e9e9e9',
    withoutAnimation: false
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: 100,
    height: 30,
    count: 4
  },
  render: ({
    gap,
    direction,
    ...props
  }) => {
    return <Skeleton {...props} flex={{
      gap: gap ?? 2,
      direction: direction ?? 'row'
    }} />;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["BaseUsage","ColsAndRows"];export{e as BaseUsage,o as ColsAndRows,f as __namedExportsOrder,h as default};
