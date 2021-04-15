(this.webpackJsonpmealdb=this.webpackJsonpmealdb||[]).push([[0],{34:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(21),r=n.n(i),c=(n(27),n(4)),l=n(2),o=n(11),j=n(8),u=n.n(j),b=n(0),d=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("nav",{className:"navbar is-light mb-3",children:[Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(c.b,{className:"navbar-item",to:"/",children:"MealDB"}),Object(b.jsxs)("div",{className:u()("navbar-burger",n?"is-active":null),onClick:function(){return a(!n)},children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})]}),Object(b.jsxs)("div",{className:u()("navbar-menu",n?"is-active":null),onClick:function(){return a(!n)},children:[Object(b.jsx)(c.b,{className:"navbar-item",to:"/categories",children:"Categories"}),Object(b.jsx)(c.b,{className:"navbar-item",to:"/countries",children:"Countries"}),Object(b.jsx)(c.b,{className:"navbar-item",to:"/ingredients",children:"Ingredients"})]})]})},m=n(12),h=n(13),p=n(15),O=n(14),x=function(e){var t=e.title,n=void 0===t?"":t,s=e.imgURL,a=void 0===s?null:s;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("header",{className:"card-header",children:Object(b.jsx)("p",{className:"card-header-title",children:n.length>20?n.slice(0,19).trim()+"...":n})}),a?Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Item"})})}):null]})},g=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={data:[],sites:0,site:0,type:"categories"===e.props.type?"categories":"meals"},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(t){return t.json().then((function(t){return e.setState({data:t[e.state.type],sites:Math.ceil(t[e.state.type].length/12)})}))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.site,s=t.sites,a=this.state.data.slice(12*n,12*n+12);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"pagination is-centered is-small",children:s>10?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"pagination-previous",onClick:function(){return e.setState((function(e){return{site:e.site-1}}))},disabled:0===n,children:"Previous"}),Object(b.jsx)("button",{className:"pagination-next",onClick:function(){return e.setState((function(e){return{site:e.site+1}}))},disabled:n===s-1,children:"Next page"}),Object(b.jsxs)("ul",{className:"pagination-list is-hidden-touch",children:[Object(b.jsx)("li",{className:u()("pagination-link",0===n?"is-current":null),onClick:function(){return e.setState({site:0})},children:"1"}),Object(b.jsx)("li",{className:"pagination-ellipsis",children:"\u2026"}),Object(b.jsx)("li",{className:u()("pagination-link",n===s-1?"is-current":null),onClick:function(){return e.setState({site:s-1})},children:s-1})]})]}):Object(b.jsx)("ul",{className:"pagination-list",children:Array(s).fill(1).map((function(t,s){return Object(b.jsx)("li",{className:u()("pagination-link",n===s?"is-current":null),onClick:function(){return e.setState({site:s})},children:s+1},s)}))})}),Object(b.jsx)("div",{className:"columns is-multiline mt-1",children:"categories"===this.props.type?a.map((function(e){return Object(b.jsx)(c.b,{className:"column is-one-third",to:"/category/"+e.strCategory,children:Object(b.jsx)(x,{title:e.strCategory,imgURL:e.strCategoryThumb})},e.idCategory)})):"countries"===this.props.type?a.map((function(e){return Object(b.jsx)(c.b,{className:"column is-one-fifth",to:"/country/"+e.strArea,children:Object(b.jsx)(x,{title:e.strArea})},e.strArea)})):"ingredients"===this.props.type?a.map((function(e){return Object(b.jsx)(c.b,{className:"column is-one-quarter",to:"/ingredient/"+e.strIngredient,children:Object(b.jsx)(x,{title:e.strIngredient,imgURL:"https://www.themealdb.com/images/ingredients/"+e.strIngredient+".png"})},e.idIngredient)})):"meals"===this.props.type?a.map((function(e){return Object(b.jsx)(c.b,{className:"column is-one-third",to:"/meal/"+e.idMeal,children:Object(b.jsx)(x,{title:e.strMeal,imgURL:e.strMealThumb})},e.idMeal)})):null})]})}}]),n}(a.a.Component),v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/list.php?a=list",type:"countries"})})},f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/categories.php",type:"categories"})})},y=function(e){var t=e.match.params.category;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c="+t,type:"meals"})})},N=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/list.php?i=list",type:"ingredients"})})},w=function(e){var t=e.match.params.ingredient;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?i="+t,type:"meals"})})},k=function(e){var t=e.match.params.country;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?a="+t,type:"meals"})})},C=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={id:e.props.match.params.id,data:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+this.state.id).then((function(t){return t.json().then((function(t){return e.setState({data:t.meals[0]})}))}))}},{key:"render",value:function(){var e=this.state.data,t=Object.fromEntries(Object.entries(e).filter((function(e){var t=Object(o.a)(e,2),n=t[0],s=t[1];return n.startsWith("strIngredient")&&s}))),n=Object.fromEntries(Object.entries(e).filter((function(e){var t=Object(o.a)(e,2),n=t[0],s=t[1];return n.startsWith("strMeasure")&&s}))),s=Object.fromEntries(Object.values(t).map((function(e,t){return[e,Object.values(n)[t]]})));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"columns",children:[Object(b.jsx)("div",{className:"column is-one-third",children:Object(b.jsx)(x,{title:e.strMeal?e.strMeal:"",imgURL:e.strMealThumb})}),Object(b.jsx)("div",{className:"column",children:Object.keys(s).map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(c.b,{to:"/ingredient/"+e,children:Object(b.jsx)("span",{style:{textTransform:"capitalize"},children:e+" "})}),Object.values(s)[t]]},t)}))})]}),Object(b.jsx)("div",{children:e.strInstructions})]})}}]),n}(a.a.Component),M=function(){return Object(b.jsxs)(c.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(l.a,{to:"/categories"})}}),Object(b.jsx)(l.b,{exact:!0,path:"/mealdb",render:function(){return Object(b.jsx)(l.a,{to:"/categories"})}}),Object(b.jsx)(l.b,{path:"/categories",component:f}),Object(b.jsx)(l.b,{path:"/category/:category",component:y}),Object(b.jsx)(l.b,{path:"/countries",component:v}),Object(b.jsx)(l.b,{path:"/country/:country",component:k}),Object(b.jsx)(l.b,{path:"/ingredients",component:N}),Object(b.jsx)(l.b,{path:"/ingredient/:ingredient",component:w}),Object(b.jsx)(l.b,{path:"/meal/:id",component:C})]})})]})};r.a.render(Object(b.jsx)(M,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.87702f02.chunk.js.map