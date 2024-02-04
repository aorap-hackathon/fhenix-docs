"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[5259],{6703:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(5893),t=r(1151);const i={},d="Permissioned.Sol",o={id:"devdocs/Solidity API/Permissioned",title:"Permissioned.Sol",description:"Abstract contract that provides EIP-712 based signature verification for access control. To learn more about why this can be important, and what EIP712 is, refer to our Permits & Access Control.",source:"@site/docs/devdocs/Solidity API/Permissioned.md",sourceDirName:"devdocs/Solidity API",slug:"/devdocs/Solidity API/Permissioned",permalink:"/fhenix-docs/docs/devdocs/Solidity API/Permissioned",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Solidity API/Permissioned.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FHE.sol",permalink:"/fhenix-docs/docs/devdocs/Solidity API/FHE"},next:{title:"Utility Contracts",permalink:"/fhenix-docs/docs/devdocs/Solidity API/Utilities"}},c={},l=[{value:"SignerNotMessageSender",id:"signernotmessagesender",level:3},{value:"SignerNotOwner",id:"signernotowner",level:3},{value:"constructor",id:"constructor",level:3},{value:"onlySender",id:"onlysender",level:3},{value:"Parameters",id:"parameters",level:4},{value:"onlyPermitted",id:"onlypermitted",level:3},{value:"Parameters",id:"parameters-1",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"permissionedsol",children:"Permissioned.Sol"}),"\n",(0,s.jsxs)(n.p,{children:["Abstract contract that provides EIP-712 based signature verification for access control. To learn more about why this can be important, and what EIP712 is, refer to our ",(0,s.jsx)(n.a,{href:"/fhenix-docs/docs/devdocs/Encryption%20and%20Privacy/Permits-Access-Control",children:"Permits & Access Control"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This contract should be inherited by other contracts to provide EIP-712 signature validated access control"})}),"\n",(0,s.jsx)(n.h3,{id:"signernotmessagesender",children:"SignerNotMessageSender"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error SignerNotMessageSender()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Emitted when the signer is not the message sender"}),"\n",(0,s.jsx)(n.h3,{id:"signernotowner",children:"SignerNotOwner"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error SignerNotOwner()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Emitted when the signer is not the specified owner"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"constructor() internal\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Constructor that initializes EIP712 domain separator with a name and version\nsolhint-disable-next-line func-visibility, no-empty-blocks"})}),"\n",(0,s.jsx)(n.h3,{id:"onlysender",children:"onlySender"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlySender(struct Permission permission)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by the message sender"}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permission"}),(0,s.jsx)(n.td,{children:"struct Permission"}),(0,s.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"onlypermitted",children:"onlyPermitted"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlyPermitted(struct Permission permission, address owner)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by a specific owner address"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permission"}),(0,s.jsx)(n.td,{children:"struct Permission"}),(0,s.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"owner"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"The expected owner of the public key to match against the recovered signer"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(7294);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);