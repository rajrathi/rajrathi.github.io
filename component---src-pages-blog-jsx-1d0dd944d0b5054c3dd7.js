(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",c="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-purple-700 leading-normal uppercase",o="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:c},l.a.createElement("h2",{className:s},t)),l.a.createElement("div",{className:o},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),c="mb-6",s="font-semibold text-lg text-black pb-1 text-xl",o="text-md text-gray-600 font-light space-y-1 mb-2",m="flex sm:flex-wrap md:flex-wrap space-x-4 text-blue-600 font-mono text-sm";t.a=function(e){var t,a=e.name,l=e.description,i=e.link,u=void 0!==i&&i,d=e.internal,f=void 0!==d&&d,p=e.technology,x=(void 0===p?"":p).toString().split(" "),E=1!==x.length&&x.map((function(e){return r.a.createElement("div",{class:"box-border md:box-content p-1 rounded-md  bg-blue-100 m4 justify-center",key:e},e)}));return t=f?r.a.createElement(n.Link,{to:u},a):r.a.createElement("a",{href:u},a),r.a.createElement("div",{className:c},r.a.createElement("h3",{className:s+" "+(u?"hover:underline hover:text-black":"")},u?t:a),r.a.createElement("p",{className:o},l),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("div",{className:m},E))))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("6uTu"),s=a("ivnd"),o="text-lg font-bold",m="underline";t.default=function(){return l.a.createElement(c.a,null,l.a.createElement(s.a,{title:"Not found"}),l.a.createElement("h1",{className:o},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:m,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("STHm"),c=a("hbLQ"),s=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(c.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},o=a("eNIv"),m=a("6uTu"),i=a("ivnd"),u=a("pssB"),d=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(m.a,null,l.a.createElement(i.a,{title:"Blog"}),l.a.createElement(o.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(s,{posts:a})):l.a.createElement(u.default,null)},"3587809548")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-1d0dd944d0b5054c3dd7.js.map