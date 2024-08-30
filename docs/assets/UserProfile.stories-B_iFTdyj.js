import{j as e,T as r}from"./index-CQZhdZR6.js";import"./index-DJO9vBfz.js";const i=()=>e.jsxs("div",{className:"wrapper",children:[e.jsx("div",{className:"avatar"}),e.jsxs("div",{className:"user-info",children:[e.jsx("span",{className:"user-name",children:"John Dao"}),e.jsx("span",{className:"user-position",children:"Developer"}),e.jsx("span",{className:"user-description",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam, at blanditiis consectetur consequuntur cum"})]})]});i.__docgenInfo={description:"",methods:[],displayName:"UserProfile"};const l={title:"Blocks/UserProfile",component:i,parameters:{layout:"centered"}},s={args:{isLoading:!0},render:({isLoading:o})=>o?e.jsxs("div",{className:"wrapper",children:[e.jsx(r,{width:80,height:80,isCircle:!0}),e.jsxs("div",{className:"user-info",children:[e.jsx(r,{widthPercentage:100,height:22,count:2,flex:{direction:"column",gap:8}}),e.jsx(r,{height:110})]})]}):e.jsx(i,{})};var n,a,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  render: ({
    isLoading
  }) => {
    return isLoading ? <div className={'wrapper'}>
            <Skeleton width={80} height={80} isCircle />
            <div className={'user-info'}>
                <Skeleton widthPercentage={100} height={22} count={2} flex={{
          direction: 'column',
          gap: 8
        }} />
                <Skeleton height={110} />
            </div>
        </div> : <UserProfile />;
  }
}`,...(t=(a=s.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const m=["Base"];export{s as Base,m as __namedExportsOrder,l as default};
