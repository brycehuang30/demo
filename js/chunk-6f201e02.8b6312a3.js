(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f201e02"],{"0039":function(e,t,r){},"021b":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("99af"),r("b0c0");var n=r("5530"),a=(r("96cf"),r("1da1")),u=r("d4ec"),c=r("bee2"),o=r("6ad1"),i=r("f52b"),s=function(){function e(){Object(u["a"])(this,e)}return Object(c["a"])(e,null,[{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:r},e.next=3,o["a"].post("workspace/".concat(t,"/member-groups"),JSON.stringify(n));case 3:return a=e.sent,e.abrupt("return",a.data.memberGroup);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,c,s,p,m,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get("workspace/".concat(t,"/member-groups/").concat(r));case 2:for(n=e.sent,a=n.data.memberGroup.members,u=0;u<a.length;u+=1)c=a[u],s=c.uuid,p=c.name,m=c.phone,f=c.confirmed,a[u]=new i["a"](s,p,m,f);return e.abrupt("return",n.data.memberGroup);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getMemberGroups",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get("workspace/".concat(t,"/member-groups"));case 2:return r=e.sent,e.abrupt("return",r.data.memberGroups);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){var u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=Object(n["a"])({},a),e.next=3,o["a"].put("workspace/".concat(t,"/member-groups/").concat(r),u);case 3:return c=e.sent,e.abrupt("return",c.data.memberGroup);case 5:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"deleteMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].delete("workspace/".concat(t,"/member-groups/").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteMemberInMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].delete("workspace/".concat(t,"/member-groups/").concat(r,"/members/").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"updateMemberInMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a,u){var c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=Object(n["a"])({},u),e.next=3,o["a"].put("workspace/".concat(t,"/member-groups/").concat(r,"/members/").concat(a),c);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));function t(t,r,n,a){return e.apply(this,arguments)}return t}()}]),e}()},"059a":function(e,t,r){},"7c89":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"workspace-memberGroups"},[r("div",{staticClass:"member-groups"},[r("transition-group",{staticClass:"transition-tag",attrs:{name:"list-complete",tag:"div"}},e._l(e.memberGroups,(function(t,n){return r("div",{key:t.uuid,staticClass:"list-complete-item col-lg-4 col-xl-3 my-3 ui-card"},[r("memberGroupCard",{attrs:{group:t},on:{removeMe:function(t){return e.deleteGroupCard(n)}}})],1)})),0)],1),r("v-dialog")],1)},a=[],u=(r("a434"),r("96cf"),r("1da1")),c=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group-card"},[r("div",{staticClass:"pic"},[r("img",{attrs:{src:e.previewImage}}),r("h2",[e._v(e._s(e.group.memberCount)+" 人")])]),r("div",{staticClass:"content"},[r("h1",{staticClass:"group-title"},[e._v(" "+e._s(e.group.uniqueName)+" ")]),r("div",{staticClass:"btn-area"},[r("div",{staticClass:"ui-btn"},[r("div",{staticClass:"icon-btn",attrs:{title:"刪除"},on:{click:e.removeGroup}},[r("i",{staticClass:"fas fa-trash"})])]),r("div",{staticClass:"ui-btn"},[r("div",{staticClass:"icon-btn",attrs:{title:"編輯"},on:{click:e.enterGroup}},[r("i",{staticClass:"fas fa-pen"})])])])])])},i=[],s=c["default"].extend({name:"MemberGroupCard",components:{},props:{group:{type:Object,required:!1,default:null}},data:function(){return{defaultThumbnial:"https://images.unsplash.com/photo-1565057748808-18c797216b0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"}},computed:{previewImage:function(){return this.defaultThumbnial?"".concat(this.defaultThumbnial,"/240"):this.defaultThumbnial},dialogId:function(){return this.group.uuid}},mounted:function(){},methods:{enterGroup:function(){this.$store.commit("changeMemberGroup",this.group),this.$router.push("/manager/membergroup-maker")},removeGroup:function(){this.openRemoveModal()},openRemoveModal:function(){var e=this;this.$modal.show("dialog",{title:"確定刪除嗎?",text:"這個群組刪掉就不會再回來了",buttons:[{title:"取消",handler:function(){e.$modal.hide("dialog")}},{title:"確定",handler:function(){e.$modal.hide("dialog"),e.$emit("removeMe")}}]})}}}),p=s,m=(r("d178"),r("2877")),f=Object(m["a"])(p,o,i,!1,null,"08bd571b",null),l=f.exports,d=r("edc9"),b=r("021b"),h=c["default"].extend({components:{memberGroupCard:l},data:function(){return{}},computed:{currentWorkspace:function(){return this.$store.state.currentWorkspace},memberGroups:function(){return this.$store.state.theMemberGroups}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].getManagerEntryInfo().then((function(t){e.$store.commit("updateWorkspaceList",t.workspaceList),e.$store.commit("changeWorkspace",t.workspaceList[0]),e.$store.commit("setUsername",t.username)}));case 2:return t.next=4,b["a"].getMemberGroups(e.currentWorkspace.uuid).then((function(t){e.$store.commit("getMemberGroups",t)}));case 4:case"end":return t.stop()}}),t)})))()},methods:{deleteGroupCard:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.memberGroups){r.next=5;break}if(!(e>=0&&e<t.memberGroups.length)){r.next=5;break}return r.next=4,b["a"].deleteMemberGroup(t.currentWorkspace.uuid,t.memberGroups[e].uuid);case 4:t.memberGroups.splice(e,1);case 5:case"end":return r.stop()}}),r)})))()}}}),g=h,v=(r("e603"),r("f911"),Object(m["a"])(g,n,a,!1,null,"647aeff5",null));t["default"]=v.exports},a394:function(e,t,r){},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("23cb"),u=r("a691"),c=r("50c4"),o=r("7b0b"),i=r("65f0"),s=r("8418"),p=r("1dde"),m=r("ae40"),f=p("splice"),l=m("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,b=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!l},{splice:function(e,t){var r,n,p,m,f,l,v=o(this),w=c(v.length),k=a(e,w),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=w-k):(r=x-2,n=b(d(u(t),0),w-k)),w+r-n>h)throw TypeError(g);for(p=i(v,n),m=0;m<n;m++)f=k+m,f in v&&s(p,m,v[f]);if(p.length=n,r<n){for(m=k;m<w-n;m++)f=m+n,l=m+r,f in v?v[l]=v[f]:delete v[l];for(m=w;m>w-n+r;m--)delete v[m-1]}else if(r>n)for(m=w-n;m>k;m--)f=m+n-1,l=m+r-1,f in v?v[l]=v[f]:delete v[l];for(m=0;m<r;m++)v[m+k]=arguments[m+2];return v.length=w-n+r,p}})},d178:function(e,t,r){"use strict";var n=r("0039"),a=r.n(n);a.a},e603:function(e,t,r){"use strict";var n=r("059a"),a=r.n(n);a.a},edc9:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("96cf");var n=r("1da1"),a=r("d4ec"),u=r("bee2"),c=r("6ad1"),o=function(){function e(){Object(a["a"])(this,e)}return Object(u["a"])(e,null,[{key:"getManagerEntryInfo",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].get("account/manager/entry");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}()},f52b:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return c}));r("b0c0");var n=r("d4ec"),a=function e(t,r,a,u){Object(n["a"])(this,e),this.openEdit=!1,this.uuid=t,this.name=r,this.phone=a,this.confirmed=u},u=function e(t){Object(n["a"])(this,e),this.confirmed=t},c=function e(t){Object(n["a"])(this,e),this.name=t}},f911:function(e,t,r){"use strict";var n=r("a394"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-6f201e02.8b6312a3.js.map