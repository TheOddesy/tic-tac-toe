(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),i=r.n(n),a=r(7),c=r.n(a),u=(r(14),r(15),r(8)),o=r(2),l=r(3),h=r(5),j=r(4);function d(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.Component),x=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},s}return Object(l.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();O(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:r}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],i=O(n.squares),a=r.map((function(e,r){var n=r?"Go to step #"+r:"Start the Game";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){t.jumpTo(r)},children:n})},r)}));return e=i?"Winner is "+i+"!":"Next player is "+(this.state.xIsNext?"X":"O"),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"TIC-TAC-TOE"}),Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(b,{onClick:function(e){return t.handleClick(e)},squares:n.squares})}),Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{className:"status",children:e}),Object(s.jsx)("ul",{children:a})]})]})]})}}]),r}(n.Component);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(u.a)(t[r],3),n=s[0],i=s[1],a=s[2];if(e[n]&&e[n]===e[i]&&e[i]===e[a])return e[n]}return null}var m=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"big-circle-1"}),Object(s.jsx)("div",{className:"moon"}),Object(s.jsx)("div",{className:"triangle"}),Object(s.jsx)("div",{className:"info",children:Object(s.jsx)("a",{href:"https://theoddesy.github.io/HomePage/",target:"_blank",rel:"noopener noreferrer",children:"Who made this?"})}),Object(s.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),s(e),n(e),i(e),a(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.a97c200a.chunk.js.map