"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3005],{4331:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(5893),i=s(1151);const r={sidebar_position:6,title:"\ud83d\udd75\ufe0f Permissions",description:"Managing access to sensitive data & Permissioned contracts"},o=void 0,a={id:"devdocs/Writing Smart Contracts/Permissions",title:"\ud83d\udd75\ufe0f Permissions",description:"Managing access to sensitive data & Permissioned contracts",source:"@site/docs/devdocs/Writing Smart Contracts/Permissions.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Permissions",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Writing Smart Contracts/Permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\ud83d\udd75\ufe0f Permissions",description:"Managing access to sensitive data & Permissioned contracts"},sidebar:"docsSidebar",previous:{title:"Require Statements",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Requires"},next:{title:"Type Conversions",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Converting-between-Types"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Example Scenario",id:"example-scenario",level:2},{value:"Notes",id:"notes",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Permissioned"})," contract is an abstract Solidity contract that leverages EIP-712 standard signatures to enforce access controls. It's designed to be used by developers who require signature verification to restrict access to certain contract functions. While it can be used to restrict any kind of function, it's particularly useful for creating access-controlled view functions where data should only be visible to entities with a verified signature."]}),"\n",(0,n.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(t.p,{children:"One of the common use cases for such access control is in scenarios where sensitive information must be retrieved from a contract but should not be publicly accessible. For example, a contract managing private user data may implement view functions which require a signature to confirm the identity of the requester. This ensures that only the user or an authorized party can access that user's data."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,n.jsxs)(t.p,{children:["To utilize the ",(0,n.jsx)(t.code,{children:"Permissioned"})," contract, you would inherit it in your own contract and apply the custom modifiers to the functions you want to protect. For implementing access-controlled view functions, follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Define a view function in your contract. For example, to retrieve sensitive data:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function getSensitiveData(Permission calldata perm) public view onlySender(perm) returns (string memory) {\n    // Logic to return sensitive data\n}\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Off-chain, the user generates a signature over their request using EIP-712 signed with their private key. This process typically involves structured data that lists the types of variables involved and their values. The result is a signature that proves the user consents to the requested operation."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Call the view function with the generated signature as one of the parameters. Only if the signature is verified and corresponds to the ",(0,n.jsx)(t.code,{children:"msg.sender"})," will the view function execute and return the sensitive data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,n.jsx)(t.p,{children:"Imagine a contract holding medical records. You want to create a secure method for patients to view their records:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'pragma solidity ^0.8.20;\n\nimport "@fhenixprotocol/contracts/access/Permissioned.sol";\n\ncontract MedicalRecords is Permissioned {\n    \n    mapping(address => string) private records;\n\n    function viewMedicalRecord(Permission calldata perm) public view onlySender(perm) returns (string memory) {\n        return records[msg.sender];\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The patient, after obtaining the appropriate signature using their private key, would submit it along with their request to view their records. The contract verifies the signature against the caller's address, and if it matches, returns the patient\u2019s medical record."}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["In this example we are just showcasing the usage of permissions. ",(0,n.jsx)(t.code,{children:"string"})," and ",(0,n.jsx)(t.code,{children:"address"})," are still public data types and can be read directly from the chain!"]})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Permissioned view functions only allow access upon successful signature verification, enhancing contract's data privacy."}),"\n",(0,n.jsx)(t.li,{children:"Users need to protect their private keys used to generate EIP-712 signatures to maintain the integrity of the access control system."}),"\n",(0,n.jsx)(t.li,{children:"Developers must integrate off-chain EIP-712 compliant signing processes to ensure users can generate valid signatures for contract interactions."}),"\n",(0,n.jsx)(t.li,{children:"EIP-712 signatures provide strong assurances of user intention, making them ideal for sensitive operations."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);