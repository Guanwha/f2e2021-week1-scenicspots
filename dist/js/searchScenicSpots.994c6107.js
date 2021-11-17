(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["searchScenicSpots"],{"1ed3":function(t,e,i){t.exports=i.p+"img/spot16.532bb2e4.svg"},4531:function(t,e,i){"use strict";i("a7f8")},6953:function(t,e,i){"use strict";i("d0e7")},8381:function(t,e,i){t.exports=i.p+"img/icon-no-image.ecf71d49.svg"},"99c1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto flex-ctl px-2 md:px-0"},[n("div",{staticClass:"mt-16"},[t._v("首頁 / 搜尋景點")]),n("div",{staticClass:"mt-10 px-2 w-full grid grid-cols-4 gap-2"},[n("Dropdown",{staticClass:"col-span-4 md:col-span-1",attrs:{classPadding:"px-4 py-2 md:py-4",classBorder:t.classDDBorder,classBgTextColor:t.classDDBgTextColor,types:t.counties},model:{value:t.selectedCountyID,callback:function(e){t.selectedCountyID=t._n(e)},expression:"selectedCountyID"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"col-span-4 md:col-span-2 px-4 py-2 md:py-4 border-main rounded focus:outline-none focus:border-main-500",attrs:{type:"text",placeholder:"您想去哪裡？請輸入關鍵字"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{staticClass:"col-span-4 md:col-span-1 py-2 md:py-4 border-main rounded btn btn-main focus:outline-none focus:border-main-500 flex-rcc",attrs:{type:"button"},on:{click:t.refreshScenicSpotList}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFF"}},[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})]),n("span",{staticClass:"ml-2",staticStyle:{"letter-spacing":"1rem"}},[t._v("搜尋")])])],1),n("div",{staticClass:"mt-16"},[n("div",{staticClass:"text-2xl md:text-4xl text-gray-500"},[t._v("搜尋結果"),n("span",{staticClass:"ml-2 text-base text-gray-400"},[t._v("共有 "+t._s(t.nData)+" 筆")])])]),0==t.nData?[t._m(0)]:[n("div",{staticClass:"mt-2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"},t._l(t.scenicSpotList,(function(e){return n("div",{key:e.ID,staticClass:"col-span-1 rounded-b hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out cursor-pointer",on:{click:function(i){return t.gotoScenicSpotDetail(e.ID)}}},[e.Picture?n("div",{staticClass:"w-full h-48"},[n("div",{staticClass:"w-full h-full rounded bg-cover bg-center",style:"background-image: url("+e.Picture.PictureUrl1+");",attrs:{alt:"scenicSpot.Picture.PictureDescription1"}})]):n("div",{staticClass:"w-full h-48 rounded bg-main-500 bg-opacity-20 flex-ccc"},[n("img",{attrs:{src:i("8381"),alt:"沒有圖片"}})]),n("div",{staticClass:"mt-1 px-1 text-left text-xl font-bold"},[t._v(t._s(e.Name))]),n("div",{staticClass:"flex-rlc p-1 pt-0"},[n("img",{attrs:{src:i("1ed3"),alt:"景點城市"}}),n("div",[t._v(t._s(e.City))])])])})),0),n("Pagination",{staticClass:"w-full mt-12 invisible",attrs:{currentPage:t.scenicSpotListCurrentPage,totalPage:t.scenicSpotListTotalPage,hasPrevPage:t.scenicSpotListHasPrevPage,hasNextPage:t.scenicSpotListHasNextPage},on:{clickPrev:t.clickPrev,clickNext:t.clickNext,clickPage:t.clickPage}})]],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-20 flex-ccc"},[n("img",{attrs:{src:i("d351"),alt:"查無資料"}}),n("div",{staticClass:"font-bold text-xl text-main-500 leading-normal mt-2"},[t._v("目前查無資料")]),n("div",{staticClass:"font-bold text-xl text-main-500 leading-normal"},[t._v("請重新搜尋")])])}],s=i("5530"),o=(i("b64b"),i("ac1f"),i("841c"),i("2f62")),r=i("711b"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-ccc"},[t._m(0),i("div",{staticClass:"w-full hidden sm:inline-flex"},[i("nav",{staticClass:"w-full flex-rcc"},[i("button",{staticClass:"px-2 py-2 btn-pagi btn-pagi-bg btn-pagi-text",attrs:{"aria-label":"Previous",disabled:!t.hasPrevPage},on:{click:function(e){return e.preventDefault(),t.clickPrev.apply(null,arguments)}}},[i("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),t._l(t.pageNumbers,(function(e){return i("button",{key:e,staticClass:"px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text",class:{active:t.currentPage===e},attrs:{type:"button"},on:{click:function(i){return i.preventDefault(),t.clickPage(e)}}},[t._v(" "+t._s(e)+" ")])})),i("button",{staticClass:"-ml-px px-2 py-2 btn-pagi btn-pagi-bg btn-pagi-text",attrs:{"aria-label":"Next",disabled:!t.hasNextPage},on:{click:function(e){return e.preventDefault(),t.clickNext.apply(null,arguments)}}},[i("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])],2)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-full md:hidden"},[i("div",{staticClass:"flex-rsbc"},[i("a",{staticClass:"px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text",attrs:{href:"#"}},[t._v(" 前一頁 ")]),i("a",{staticClass:"ml-3 px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text",attrs:{href:"#"}},[t._v(" 下一頁 ")])])])}],u=(i("a9e3"),{name:"Pagination",props:{currentPage:Number,totalPage:Number,hasPrevPage:Boolean,hasNextPage:Boolean},methods:{clickPrev:function(){this.$emit("clickPrev")},clickNext:function(){this.$emit("clickNext")},clickPage:function(t){this.$emit("clickPage",t)}},computed:{pageNumbers:function(){var t=[],e=1,i=1;this.totalPage<=5?(e=1,i=this.totalPage):(e=this.currentPage-2<1?1:this.currentPage-2>this.totalPage-4?this.totalPage-4:this.currentPage-2,i=e+4>this.totalPage?this.totalPage:e+4);for(var n=0,a=e;a<=i;n+=1,a+=1)t[n]=a;return t}}}),p=u,d=(i("4531"),i("2877")),h=Object(d["a"])(p,c,l,!1,null,"0db68f78",null),f=h.exports,m=i("b00c"),v=i("3fa5"),b={name:"SearchScenicSpots",components:{Dropdown:r["a"],Pagination:f},data:function(){return{counties:m["a"],selectedCountyID:Object.keys(m["a"])[0],search:"",perPage:20}},methods:Object(s["a"])({gotoScenicSpotDetail:function(t){this.setCurrentScenicSpot(t),this.$router.push({name:"scenicSpot",params:{id:t}})},clickPrev:function(){this._getScenicSpotList(this.scenicSpotListCurrentPage-1)},clickNext:function(){this._getScenicSpotList(this.scenicSpotListCurrentPage+1)},clickPage:function(t){this._getScenicSpotList(t)},refreshScenicSpotList:function(){this._getScenicSpotList(this.scenicSpotListCurrentPage)},_getScenicSpotList:function(t){this.getScenicSpotList({county:this.selectedCountyID,search:this.search,page:t,perPage:this.perPage}).then((function(){})).catch((function(t){Object(v["a"])(t,!0,!1,!1,!0)}))}},Object(o["b"])("scenicspot",["getScenicSpotList","setCurrentScenicSpot"])),computed:Object(s["a"])({classDDBorder:function(){return"border border-gray-100"},classDDBgTextColor:function(){return"bg-white text-main-500 hover:bg-main-500 focus:bg-main-500"},nData:function(){return this.scenicSpotList?this.scenicSpotList.length:0}},Object(o["c"])("scenicspot",["scenicSpotList","scenicSpotListCurrentPage","scenicSpotListTotalPage","scenicSpotListHasPrevPage","scenicSpotListHasNextPage"]))},y=b,g=Object(d["a"])(y,n,a,!1,null,null,null);e["default"]=g.exports},a7f8:function(t,e,i){},d0e7:function(t,e,i){},d351:function(t,e,i){t.exports=i.p+"img/nofound80.382b4ebf.svg"},dcdd:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto flex-ctl px-2 md:px-0"},[n("div",{staticClass:"mt-16"},[t._v(t._s(t.displayBreadcrumbs))]),t.curScenicSpot.Picture&&t.curScenicSpot.Picture.PictureUrl1?n("div",{staticClass:"mt-8 w-full h-96"},[n("div",{staticClass:"w-full h-full rounded bg-cover bg-center",style:"background-image: url("+t.curScenicSpot.Picture.PictureUrl1+");",attrs:{alt:"scenicSpot.Picture.PictureDescription1"}})]):n("div",{staticClass:"mt-8 w-full h-96 rounded bg-main-500 bg-opacity-20 flex-ccc"},[n("img",{attrs:{src:i("8381"),alt:"沒有圖片"}})]),t.curScenicSpot.Name?n("div",{staticClass:"mt-8 text-4xl"},[t._v(t._s(t.curScenicSpot.Name))]):t._e(),n("div",{staticClass:"flex-rlc"},t._l(t.scenicSpotClasses,(function(e,i){return n("div",{key:i,staticClass:"mr-2 rounded-full border border-tag-500 text-tag-500 leading-tight px-4 py-1 select-none"},[t._v(" # "+t._s(e)+" ")])})),0),t.curScenicSpot.DescriptionDetail?n("div",{staticClass:"mt-8 text-left"},[n("div",{staticClass:"font-bold"},[t._v("景點介紹：")]),n("div",{staticClass:"mt-2"},[t._v(t._s(t.curScenicSpot.DescriptionDetail))])]):t._e(),n("div",{staticClass:"mt-8 w-full grid grid-cols-2 gap-4"},[n("div",{staticClass:"col-span-2 md:col-span-1 rounded-lg border-main-500 bg-main-500 bg-opacity-10 flex-csbc px-4 py-4 md:py-8"},[n("ul",{staticClass:"w-full grid grid-cols-4 gap-2"},[n("li",{staticClass:"detail-label"},[t._v("開放時間：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayOpenTime))]),n("li",{staticClass:"detail-label"},[t._v("服務電話：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayPhone))]),n("li",{staticClass:"detail-label"},[t._v("景點地址：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayAddress))]),n("li",{staticClass:"detail-label"},[t._v("官方網站：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayWebsiteUrl))]),n("li",{staticClass:"detail-label"},[t._v("票價資訊：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayTicketInfo))]),n("li",{staticClass:"detail-label"},[t._v("注意事項：")]),n("li",{staticClass:"detail-content"},[t._v(t._s(t.displayRemarks))])])]),t.hasLatLong?[n("div",{staticClass:"col-span-2 md:col-span-1 flex-ctc"},[n("MapLeaflet",{staticClass:"rounded-lg",attrs:{lat:t.curScenicSpot.Position.PositionLat,long:t.curScenicSpot.Position.PositionLon}}),n("div",{staticClass:"mt-4 w-full text-left font-bold"},[t._v("周邊資訊：")]),n("div",{staticClass:"mt-4 w-full grid grid-cols-3 gap-4"},[n("button",{staticClass:"btn-info md:flex-ccc",attrs:{type:"button"},on:{click:function(e){return t.comingsoong()}}},[n("div",{staticClass:"icon scene"}),n("div",{staticClass:"text"},[t._v("附近景點")])]),n("button",{staticClass:"btn-info md:flex-ccc",attrs:{type:"button"},on:{click:function(e){return t.comingsoong()}}},[n("div",{staticClass:"icon event"}),n("div",{staticClass:"text"},[t._v("附近活動")])]),n("button",{staticClass:"btn-info md:flex-ccc",attrs:{type:"button"},on:{click:function(e){return t.comingsoong()}}},[n("div",{staticClass:"icon food"}),n("div",{staticClass:"text"},[t._v("附近美食")])])])],1)]:[n("div",{staticClass:"col-span-2 md:col-span-1 h-40 md:h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-10 flex-ccc"},[t._v("Coming Soon...")])]],2)])},a=[],s=i("5530"),o=i("2f62"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("l-map",{staticStyle:{height:"300px"},attrs:{zoom:t.zoom,center:t.center}},[i("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),i("l-marker",{attrs:{"lat-lng":t.markerLatLng}})],1)},c=[],l=(i("a9e3"),i("e11e")),u=function(t,e){var i,n=function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];var s=this;i&&clearTimeout(i),i=setTimeout((function(){t.apply(s,n),i=null}),e)};return n.cancel=function(){i&&clearTimeout(i)},n},p=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},d=function(t,e,i,n){var a=function(n){var a="set"+p(n),s=i[n].type===Object||i[n].type===Array||Array.isArray(i[n].type);i[n].custom&&t[a]?t.$watch(n,(function(e,i){t[a](e,i)}),{deep:s}):"setOptions"===a?t.$watch(n,(function(t,i){Object(l["setOptions"])(e,t)}),{deep:s}):e[a]&&t.$watch(n,(function(t,i){e[a](t)}),{deep:s})};for(var s in i)a(s)},h=function(t){var e={};for(var i in t){var n=t[i];null!==n&&void 0!==n&&(e[i]=n)}return e},f=function(t,e){var i=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=h(i);t=h(t);var a=e.$options.props;for(var s in t){var o=a[s]?a[s].default&&"function"===typeof a[s].default?a[s].default.call():a[s].default:Symbol("unique"),r=!1;r=Array.isArray(o)?JSON.stringify(o)===JSON.stringify(t[s]):o===t[s],n[s]&&!r?(console.warn(s+" props is overriding the value passed in the options props"),n[s]=t[s]):n[s]||(n[s]=t[s])}return n},m={props:{options:{type:Object,default:function(){return{}}}}},v={name:"LMap",mixins:[m],props:{center:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},bounds:{type:[Array,Object],custom:!0,default:null},maxBounds:{type:[Array,Object],default:null},zoom:{type:Number,custom:!0,default:0},minZoom:{type:Number,default:null},maxZoom:{type:Number,default:null},paddingBottomRight:{type:Array,custom:!0,default:null},paddingTopLeft:{type:Array,custom:!0,default:null},padding:{type:Array,custom:!0,default:null},worldCopyJump:{type:Boolean,default:!1},crs:{type:Object,custom:!0,default:function(){return l["CRS"].EPSG3857}},maxBoundsViscosity:{type:Number,default:null},inertia:{type:Boolean,default:null},inertiaDeceleration:{type:Number,default:null},inertiaMaxSpeed:{type:Number,default:null},easeLinearity:{type:Number,default:null},zoomAnimation:{type:Boolean,default:null},zoomAnimationThreshold:{type:Number,default:null},fadeAnimation:{type:Boolean,default:null},markerZoomAnimation:{type:Boolean,default:null},noBlockingAnimations:{type:Boolean,default:!1}},data:function(){return{ready:!1,lastSetCenter:this.center?Object(l["latLng"])(this.center):null,lastSetBounds:this.bounds?Object(l["latLngBounds"])(this.bounds):null,layerControl:void 0,layersToAdd:[],layersInControl:[]}},computed:{fitBoundsOptions:function(){var t={animate:!this.noBlockingAnimations&&null};return this.padding?t.padding=this.padding:(this.paddingBottomRight&&(t.paddingBottomRight=this.paddingBottomRight),this.paddingTopLeft&&(t.paddingTopLeft=this.paddingTopLeft)),t}},beforeDestroy:function(){this.debouncedMoveEndHandler&&this.debouncedMoveEndHandler.cancel(),this.mapObject&&this.mapObject.remove()},mounted:function(){var t=this,e=f({minZoom:this.minZoom,maxZoom:this.maxZoom,maxBounds:this.maxBounds,maxBoundsViscosity:this.maxBoundsViscosity,worldCopyJump:this.worldCopyJump,crs:this.crs,center:this.center,zoom:this.zoom,inertia:this.inertia,inertiaDeceleration:this.inertiaDeceleration,inertiaMaxSpeed:this.inertiaMaxSpeed,easeLinearity:this.easeLinearity,zoomAnimation:this.zoomAnimation,zoomAnimationThreshold:this.zoomAnimationThreshold,fadeAnimation:this.fadeAnimation,markerZoomAnimation:this.markerZoomAnimation},this);this.mapObject=Object(l["map"])(this.$el,e),this.bounds&&this.fitBounds(this.bounds),this.debouncedMoveEndHandler=u(this.moveEndHandler,100),this.mapObject.on("moveend",this.debouncedMoveEndHandler),this.mapObject.on("overlayadd",this.overlayAddHandler),this.mapObject.on("overlayremove",this.overlayRemoveHandler),l["DomEvent"].on(this.mapObject,this.$listeners),d(this,this.mapObject,this.$options.props),this.ready=!0,this.$emit("leaflet:load"),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{registerLayerControl:function(t){var e=this;this.layerControl=t,this.mapObject.addControl(t.mapObject),this.layersToAdd.forEach((function(t){e.layerControl.addLayer(t)})),this.layersToAdd=[]},addLayer:function(t,e){if(void 0!==t.layerType)if(void 0===this.layerControl)this.layersToAdd.push(t);else{var i=this.layersInControl.find((function(e){return e.mapObject._leaflet_id===t.mapObject._leaflet_id}));i||(this.layerControl.addLayer(t),this.layersInControl.push(t))}e||!1===t.visible||this.mapObject.addLayer(t.mapObject)},hideLayer:function(t){this.mapObject.removeLayer(t.mapObject)},removeLayer:function(t,e){void 0!==t.layerType&&(void 0===this.layerControl?this.layersToAdd=this.layersToAdd.filter((function(e){return e.name!==t.name})):(this.layerControl.removeLayer(t),this.layersInControl=this.layersInControl.filter((function(e){return e.mapObject._leaflet_id!==t.mapObject._leaflet_id})))),e||this.mapObject.removeLayer(t.mapObject)},setZoom:function(t,e){void 0!==t&&null!==t&&(this.mapObject.setZoom(t,{animate:!this.noBlockingAnimations&&null}),this.cacheMapView())},setCenter:function(t,e){if(null!=t){var i=Object(l["latLng"])(t),n=this.lastSetCenter||this.mapObject.getCenter();n.lat===i.lat&&n.lng===i.lng||(this.lastSetCenter=i,this.mapObject.panTo(i,{animate:!this.noBlockingAnimations&&null}),this.cacheMapView(void 0,i))}},setBounds:function(t,e){if(t){var i=Object(l["latLngBounds"])(t);if(i.isValid()){var n=this.lastSetBounds||this.mapObject.getBounds(),a=!n.equals(i,0);a&&(this.fitBounds(i),this.cacheMapView(i))}}},setPaddingBottomRight:function(t,e){this.paddingBottomRight=t},setPaddingTopLeft:function(t,e){this.paddingTopLeft=t},setPadding:function(t,e){this.padding=t},setCrs:function(t,e){var i=this.mapObject,n=i.getBounds();i.options.crs=t,this.fitBounds(n,{animate:!1})},fitBounds:function(t,e){this.mapObject.fitBounds(t,Object.assign({},this.fitBoundsOptions,e))},moveEndHandler:function(){this.$emit("update:zoom",this.mapObject.getZoom());var t=this.mapObject.getCenter();this.$emit("update:center",t);var e=this.mapObject.getBounds();this.$emit("update:bounds",e)},overlayAddHandler:function(t){var e=this.layersInControl.find((function(e){return e.name===t.name}));e&&e.updateVisibleProp(!0)},overlayRemoveHandler:function(t){var e=this.layersInControl.find((function(e){return e.name===t.name}));e&&e.updateVisibleProp(!1)},cacheMapView:function(t,e){this.lastSetBounds=t||this.mapObject.getBounds(),this.lastSetCenter=e||this.lastSetBounds.getCenter()}}};function b(t,e,i,n,a,s,o,r,c,l){"boolean"!==typeof o&&(c=r,r=o,o=!1);var u,p="function"===typeof i?i.options:i;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,a&&(p.functional=!0)),n&&(p._scopeId=n),s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=u):e&&(u=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),u)if(p.functional){var d=p.render;p.render=function(t,e){return u.call(e),d(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,u):[u]}return i}var y,g="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function S(t){return function(t,e){return O(t,e)}}var C={};function O(t,e){var i=g?e.media||"default":t,n=C[i]||(C[i]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",e.media&&n.element.setAttribute("media",e.media),void 0===y&&(y=document.head||document.getElementsByTagName("head")[0]),y.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(a),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var s=n.ids.size-1,o=document.createTextNode(a),r=n.element.childNodes;r[s]&&n.element.removeChild(r[s]),r.length?n.element.insertBefore(o,r[s]):n.element.appendChild(o)}}}var _=v,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue2leaflet-map"},[t.ready?t._t("default"):t._e()],2)},L=[],j=function(t){t&&t("data-v-09f270aa_0",{source:".vue2leaflet-map{height:100%;width:100%}",map:void 0,media:void 0})},P=void 0,$=void 0,T=!1,w=b({render:x,staticRenderFns:L},j,_,P,T,$,!1,S,void 0,void 0),A=w,B=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},k=function(t,e,i,n){var a=function(n){var a="set"+B(n),s=i[n].type===Object||i[n].type===Array||Array.isArray(i[n].type);i[n].custom&&t[a]?t.$watch(n,(function(e,i){t[a](e,i)}),{deep:s}):"setOptions"===a?t.$watch(n,(function(t,i){Object(l["setOptions"])(e,t)}),{deep:s}):e[a]&&t.$watch(n,(function(t,i){e[a](t)}),{deep:s})};for(var s in i)a(s)},N=function(t){var e={};for(var i in t){var n=t[i];null!==n&&void 0!==n&&(e[i]=n)}return e},D=function(t,e){var i=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=N(i);t=N(t);var a=e.$options.props;for(var s in t){var o=a[s]?a[s].default&&"function"===typeof a[s].default?a[s].default.call():a[s].default:Symbol("unique"),r=!1;r=Array.isArray(o)?JSON.stringify(o)===JSON.stringify(t[s]):o===t[s],n[s]&&!r?(console.warn(s+" props is overriding the value passed in the options props"),n[s]=t[s]):n[s]||(n[s]=t[s])}return n},R=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},E={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var i=this.$parent.mapObject.attributionControl;i.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},I={mixins:[E],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},z={mixins:[I],props:{tms:{type:Boolean,default:!1},subdomains:{type:[String,Array],default:"abc",validator:function(t){return"string"===typeof t||!!Array.isArray(t)&&t.every((function(t){return"string"===typeof t}))}},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}},M={props:{options:{type:Object,default:function(){return{}}}}},V={name:"LTileLayer",mixins:[z,M],props:{url:{type:String,default:null},tileLayerClass:{type:Function,default:l["tileLayer"]}},mounted:function(){var t=this,e=D(this.tileLayerOptions,this);this.mapObject=this.tileLayerClass(this.url,e),l["DomEvent"].on(this.mapObject,this.$listeners),k(this,this.mapObject,this.$options.props),this.parentContainer=R(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}};function U(t,e,i,n,a,s,o,r,c,l){"boolean"!==typeof o&&(c=r,r=o,o=!1);var u,p="function"===typeof i?i.options:i;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,a&&(p.functional=!0)),n&&(p._scopeId=n),s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=u):e&&(u=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),u)if(p.functional){var d=p.render;p.render=function(t,e){return u.call(e),d(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,u):[u]}return i}var H=V,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},J=[],Z=void 0,W=void 0,X=void 0,q=!1,G=U({render:F,staticRenderFns:J},Z,H,W,q,X,!1,void 0,void 0,void 0),K=G,Q=function(t,e){var i,n=function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];var s=this;i&&clearTimeout(i),i=setTimeout((function(){t.apply(s,n),i=null}),e)};return n.cancel=function(){i&&clearTimeout(i)},n},Y=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},tt=function(t,e,i,n){var a=function(n){var a="set"+Y(n),s=i[n].type===Object||i[n].type===Array||Array.isArray(i[n].type);i[n].custom&&t[a]?t.$watch(n,(function(e,i){t[a](e,i)}),{deep:s}):"setOptions"===a?t.$watch(n,(function(t,i){Object(l["setOptions"])(e,t)}),{deep:s}):e[a]&&t.$watch(n,(function(t,i){e[a](t)}),{deep:s})};for(var s in i)a(s)},et=function(t){var e={};for(var i in t){var n=t[i];null!==n&&void 0!==n&&(e[i]=n)}return e},it=function(t,e){var i=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=et(i);t=et(t);var a=e.$options.props;for(var s in t){var o=a[s]?a[s].default&&"function"===typeof a[s].default?a[s].default.call():a[s].default:Symbol("unique"),r=!1;r=Array.isArray(o)?JSON.stringify(o)===JSON.stringify(t[s]):o===t[s],n[s]&&!r?(console.warn(s+" props is overriding the value passed in the options props"),n[s]=t[s]):n[s]||(n[s]=t[s])}return n},nt=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},at={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var i=this.$parent.mapObject.attributionControl;i.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},st={props:{options:{type:Object,default:function(){return{}}}}},ot={name:"LMarker",mixins:[at,st],props:{pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],custom:!1,default:function(){return new l["Icon"].Default}},opacity:{type:Number,custom:!1,default:1},zIndexOffset:{type:Number,custom:!1,default:null}},data:function(){return{ready:!1}},beforeDestroy:function(){this.debouncedLatLngSync&&this.debouncedLatLngSync.cancel()},mounted:function(){var t=this,e=it(Object.assign({},this.layerOptions,{icon:this.icon,zIndexOffset:this.zIndexOffset,draggable:this.draggable,opacity:this.opacity}),this);this.mapObject=Object(l["marker"])(this.latLng,e),l["DomEvent"].on(this.mapObject,this.$listeners),this.debouncedLatLngSync=Q(this.latLngSync,100),this.mapObject.on("move",this.debouncedLatLngSync),tt(this,this.mapObject,this.$options.props),this.parentContainer=nt(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.ready=!0,this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{setDraggable:function(t,e){this.mapObject.dragging&&(t?this.mapObject.dragging.enable():this.mapObject.dragging.disable())},setLatLng:function(t){if(null!=t&&this.mapObject){var e=this.mapObject.getLatLng(),i=Object(l["latLng"])(t);i.lat===e.lat&&i.lng===e.lng||this.mapObject.setLatLng(i)}},latLngSync:function(t){this.$emit("update:latLng",t.latlng),this.$emit("update:lat-lng",t.latlng)}},render:function(t){return this.ready&&this.$slots.default?t("div",{style:{display:"none"}},this.$slots.default):null}};function rt(t,e,i,n,a,s,o,r,c,l){"boolean"!==typeof o&&(c=r,r=o,o=!1);var u,p="function"===typeof i?i.options:i;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,a&&(p.functional=!0)),n&&(p._scopeId=n),s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=u):e&&(u=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),u)if(p.functional){var d=p.render;p.render=function(t,e){return u.call(e),d(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,u):[u]}return i}var ct=ot,lt=void 0,ut=void 0,pt=void 0,dt=void 0,ht=rt({},lt,ct,ut,dt,pt,!1,void 0,void 0,void 0),ft=ht,mt={components:{LMap:A,LTileLayer:K,LMarker:ft},props:{lat:{type:Number,default:25.0413064},long:{typs:Number,default:121.5143706}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:15,center:[this.lat,this.long],markerLatLng:[this.lat,this.long]}}},vt=mt,bt=i("2877"),yt=Object(bt["a"])(vt,r,c,!1,null,null,null),gt=yt.exports,St=i("3fa5"),Ct={name:"ScenicSpot",components:{MapLeaflet:gt},data:function(){return{curScenicSpotID:0}},created:function(){this.curScenicSpotID=this.$route.params.id,this.curScenicSpot||(this.curScenicSpotID?(this.setCurrentScenicSpot(this.curScenicSpotID),this.curScenicSpot||this.$router.push({name:"searchScenicSpots"})):this.$router.push({name:"searchScenicSpots"}))},methods:Object(s["a"])({comingsoong:function(){Object(St["a"])("敬請期待...",!1,!1,!0)}},Object(o["b"])("scenicspot",["setCurrentScenicSpot"])),computed:Object(s["a"])({displayBreadcrumbs:function(){var t="首頁 / 搜尋景點";return this.curScenicSpot&&(this.curScenicSpot.City&&(t+=" / ".concat(this.curScenicSpot.City)),this.curScenicSpot.Name&&(t+=" / ".concat(this.curScenicSpot.Name))),t},displayOpenTime:function(){return this.curScenicSpot&&this.curScenicSpot.OpenTime?this.curScenicSpot.OpenTime:"未提供"},displayPhone:function(){return this.curScenicSpot&&this.curScenicSpot.Phone?this.curScenicSpot.Phone:"未提供"},displayAddress:function(){return this.curScenicSpot&&this.curScenicSpot.Address?this.curScenicSpot.Address:"未提供"},displayWebsiteUrl:function(){return this.curScenicSpot&&this.curScenicSpot.WebsiteUrl?this.curScenicSpot.WebsiteUrl:"未提供"},displayTicketInfo:function(){return this.curScenicSpot&&this.curScenicSpot.TicketInfo?this.curScenicSpot.TicketInfo:"未提供"},displayRemarks:function(){return this.curScenicSpot&&this.curScenicSpot.Remarks?this.curScenicSpot.Remarks:"未提供"},hasLatLong:function(){return this.curScenicSpot&&this.curScenicSpot.Position&&this.curScenicSpot.Position.PositionLat&&this.curScenicSpot.Position.PositionLon},scenicSpotClasses:function(){var t=[];return this.curScenicSpot&&(this.curScenicSpot.Class1&&t.push(this.curScenicSpot.Class1),this.curScenicSpot.Class2&&t.push(this.curScenicSpot.Class2),this.curScenicSpot.Class3&&t.push(this.curScenicSpot.Class3)),t}},Object(o["c"])("scenicspot",["curScenicSpot"]))},Ot=Ct,_t=(i("6953"),Object(bt["a"])(Ot,n,a,!1,null,"2c66a7d5",null));e["default"]=_t.exports}}]);
//# sourceMappingURL=searchScenicSpots.994c6107.js.map