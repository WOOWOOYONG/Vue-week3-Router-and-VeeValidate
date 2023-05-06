import{_ as p,r as c,o as b,c as f,a as e,d as a,w as r,n}from"./index-20b77472.js";const h={data(){return{userName:"",userEmail:"",userPhone:"",userDelivery:"",userNote:""}},methods:{isPhone(d){return/^(09)[0-9]{8}$/.test(d)?!0:"要輸入09開頭的手機號碼喔"},onSubmit(d,{resetForm:s}){console.log("送出表單"),console.log(d),s()},isValid(){if(this.userEmail)return!0}}},V={class:"validate_form"},y={class:"col-md-12"},k=e("label",{for:"name",class:"form-label"},"姓名",-1),N=e("div",{class:"valid-feedback"},"Looks good!",-1),g={class:"col-md-12"},x=e("label",{for:"email",class:"form-label"},"信箱",-1),E=e("div",{class:"valid-feedback"},"Looks good!",-1),P={class:"col-md-12"},w=e("label",{for:"phone",class:"form-label"},"電話",-1),U=e("div",{class:"valid-feedback"},"Looks good!",-1),D={class:"col-md-12"},F=e("label",{for:"delivery",class:"form-label"},"選擇寄送方式",-1),S=e("option",{value:"",selected:"",disabled:""},"請選擇...",-1),q=e("option",{value:"貓頭鷹快遞"},"貓頭鷹快遞",-1),B=e("option",{value:"無人機投放"},"無人機投放",-1),C=e("option",{value:"到店自取"},"到店自取",-1),L={class:"col-md-12"},M=e("label",{for:"note",class:"form-label"},"備註",-1),z={class:"col-12"},G=["disabled"];function j(d,s,A,H,l,u){const t=c("VField"),m=c("ErrorMessage"),_=c("VForm");return b(),f("main",null,[e("div",V,[a(_,{class:"row g-3 needs-validation",novalidate:"",onSubmit:u.onSubmit},{default:r(({errors:o,meta:v})=>[e("div",y,[k,a(t,{name:"name",type:"text",modelValue:l.userName,"onUpdate:modelValue":s[0]||(s[0]=i=>l.userName=i),class:n(["form-control",{"is-invalid":o.name,"is-valid":!o.name&&l.userName}]),id:"name",label:"姓名",rules:"required",as:"input"},null,8,["modelValue","class"]),a(m,{name:"name",class:n({"invalid-feedback ":o.name})},null,8,["class"]),N]),e("div",g,[x,a(t,{name:"email",type:"email",modelValue:l.userEmail,"onUpdate:modelValue":s[1]||(s[1]=i=>l.userEmail=i),class:n(["form-control",{"is-invalid":o.email,"is-valid":!o.email&&l.userEmail}]),id:"email",label:"信箱",rules:"required|email",as:"input"},null,8,["modelValue","class"]),a(m,{name:"email",class:n({"invalid-feedback ":o.email})},null,8,["class"]),E]),e("div",P,[w,a(t,{name:"phone",type:"tel",maxlength:"10",modelValue:l.userPhone,"onUpdate:modelValue":s[2]||(s[2]=i=>l.userPhone=i),class:n(["form-control",{"is-invalid":o.phone,"is-valid":!o.phone&&l.userPhone}]),id:"phone",label:"電話","aria-describedby":"inputGroupPrepend",as:"input",rules:u.isPhone},null,8,["modelValue","class","rules"]),a(m,{name:"phone",class:n({"invalid-feedback ":o.phone})},null,8,["class"]),U]),e("div",D,[F,a(t,{name:"delivery",modelValue:l.userDelivery,"onUpdate:modelValue":s[3]||(s[3]=i=>l.userDelivery=i),class:n(["form-select",{"is-invalid":o.delivery,"is-valid":!o.delivery&&l.userDelivery}]),id:"delivery",label:"寄送方式",rules:"required",as:"select"},{default:r(()=>[S,q,B,C]),_:2},1032,["modelValue","class"]),a(m,{name:"delivery",class:n({"invalid-feedback ":o.delivery})},null,8,["class"])]),e("div",L,[M,a(t,{name:"note",id:"note",cols:"30",rows:"10",class:"form-control",placeholder:"有什麼想說的嗎？",as:"textarea",modelValue:l.userNote,"onUpdate:modelValue":s[4]||(s[4]=i=>l.userNote=i)},null,8,["modelValue"])]),e("div",z,[e("button",{class:"btn btn-primary",type:"submit",disabled:!v.valid},"送出",8,G)])]),_:1},8,["onSubmit"])])])}const J=p(h,[["render",j]]);export{J as default};
