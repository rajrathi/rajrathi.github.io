(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",c="pb-6 md:w-full md:max-w-150 md:p-0",o="font-xs font-light tracking-widest text-sm text-purple-700 leading-normal uppercase",s="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:c},l.a.createElement("h2",{className:o},t)),l.a.createElement("div",{className:s},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),c="mb-6",o="font-semibold text-lg text-black pb-1 text-xl",s="text-md text-gray-600 font-light space-y-1 mb-2",i="flex md:flex-wrap space-x-4 text-blue-600 font-mono text-sm";t.a=function(e){var t,a=e.name,l=e.description,m=e.link,u=void 0!==m&&m,d=e.internal,f=void 0!==d&&d,p=e.technology,x=(void 0===p?"":p).toString().split(" "),E=1!==x.length&&x.map((function(e){return r.a.createElement("div",{class:"box-border md:box-content p-1 rounded-md  bg-blue-100 m4 justify-center",key:e},e)}));return t=f?r.a.createElement(n.Link,{to:u},a):r.a.createElement("a",{href:u},a),r.a.createElement("div",{className:c},r.a.createElement("h3",{className:o+" "+(u?"hover:underline hover:text-black":"")},u?t:a),r.a.createElement("p",{className:s},l),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("div",{className:i},E))))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("6uTu"),o=a("ivnd"),s="text-lg font-bold",i="underline";t.default=function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{title:"Not found"}),l.a.createElement("h1",{className:s},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:i,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("STHm"),c=a("hbLQ"),o=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(c.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},s=a("eNIv"),i=a("6uTu"),m=a("ivnd"),u=a("pssB"),d=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(i.a,null,l.a.createElement(m.a,{title:"Blog"}),l.a.createElement(s.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(o,{posts:a})):l.a.createElement(u.default,null)},"3587809548")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-820b4d4e2c43ab76734f.js.map