(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return b}));var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),i=a.n(r),c=a("eNIv"),m=a("6uTu"),o=a("STHm"),s=function(e){var t=e.about;return i.a.createElement(o.a,{title:"About Me"},i.a.createElement("div",{className:"mb-4"},i.a.createElement("p",null,t)))},u=a("Wbzz"),d=a("hbLQ"),p=function(e){var t=e.posts;return i.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return i.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},E=function(e){var t=e.education;return t.length?i.a.createElement(o.a,{title:"Education"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},f=function(e){var t=e.experience;return t.length?i.a.createElement(o.a,{title:"Experience"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},x=function(e){var t=e.projects;return t.length?i.a.createElement(o.a,{title:"Latest Projects"},t.slice(0,5).map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link,technology:e.technology})})),t.length>=5&&i.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/projects"},"View all projects →")):null},g=function(e){var t=e.skills;return i.a.createElement(o.a,{title:"Skills"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},k=a("ivnd"),b=(t.default=function(e){var t=e.data,a=l()(t,"site.siteMetadata.about",!1),n=l()(t,"site.siteMetadata.projects",!1),r=t.allMarkdownRemark.edges,o=l()(t,"site.siteMetadata.experience",!1),u=l()(t,"site.siteMetadata.education",!1),d=l()(t,"site.siteMetadata.skills",!1),b=!r||!r.length;return i.a.createElement(m.a,null,i.a.createElement(k.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:b}),a&&i.a.createElement(s,{about:a}),n&&n.length&&i.a.createElement(x,{projects:n}),!b&&i.a.createElement(p,{posts:r}),o&&o.length&&i.a.createElement(f,{experience:o}),u&&u.length&&i.a.createElement(E,{education:u}),d&&d.length&&i.a.createElement(g,{skills:d}))},"3013413585")},STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-purple-700 leading-normal uppercase",m="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:i},l.a.createElement("h2",{className:c},t)),l.a.createElement("div",{className:m},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),i="mb-6",c="font-semibold text-lg text-black pb-1 text-xl",m="text-md text-gray-600 font-light space-y-1 mb-2",o="md:flex flex box-decoration-slice space-x-4 text-blue-600 font-mono text-md text-sm";t.a=function(e){var t,a=e.name,l=e.description,s=e.link,u=void 0!==s&&s,d=e.internal,p=void 0!==d&&d,E=e.technology,f=(void 0===E?"":E).toString().split(" "),x=1!==f.length&&f.map((function(e){return r.a.createElement("div",{class:"box-border md:box-content p-1 rounded-md  bg-blue-100 m4 justify-center",key:e},e)}));return t=p?r.a.createElement(n.Link,{to:u},a):r.a.createElement("a",{href:u},a),r.a.createElement("div",{className:i},r.a.createElement("h3",{className:c+" "+(u?"hover:underline hover:text-black":"")},u?t:a),r.a.createElement("p",{className:m},l),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("div",{className:o},x))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a4350a7ec972311dcb04.js.map