!function(){var s=document.createElement('style');s.textContent=''
  /* Hover effects — desktop only */
  +'@media(min-width:992px){'
  +'.home_events-list_item-content:hover .home_events-list_title{transform:translateX(0)!important}'
  +'.home_events-list_item-content:hover .flower-microanimation{opacity:1!important}'
  +'}'
  /* Reset title transform on all non-desktop breakpoints */
  +'@media(max-width:991px){'
  +'.home_events-list_title{transform:translateX(0)!important}'
  +'}'
  /* Filter button layout fixes */
  +'.events-filter-month.w-dropdown-toggle>*:first-child,.events-filter-genre.w-dropdown-toggle>*:first-child{flex-grow:0!important;flex-shrink:0!important;flex-basis:auto!important;position:static!important;transform:none!important;}'
  +'.events-filter-month.w-dropdown-toggle,.events-filter-genre.w-dropdown-toggle,.events-filter-clear{min-height:2.25rem;box-sizing:border-box;}'
  +'.home_filters .events-filter-clear.filter-is-active{background:#fff!important;color:#000!important;border-color:#fff!important;opacity:1!important;pointer-events:auto!important;}'
  /* Mobile filters — wrap so nothing gets cut off */
  +'@media(max-width:991px){'
  +'.home_filters{flex-wrap:wrap;width:100%;box-sizing:border-box;}'
  +'.home_filters .w-dropdown{flex:1 1 auto;min-width:0;}'
  +'}'
  /* Stagger animation */
  +'@keyframes dromIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}'
  +'.home_events-list_item.drom-in{animation:dromIn .35s ease forwards}'
  /* Dropdown positioning */
  +'.events-filter-dropdown .w-dropdown-list{left:0!important;top:100%!important;transform:none!important;}';
document.body.appendChild(s);
document.addEventListener('DOMContentLoaded',function(){setTimeout(function(){
  /* Remove past events */
  document.querySelectorAll('[data-end]').forEach(function(i){if(new Date(i.dataset.end)<new Date())i.remove();});
  /* Change "Clear filters" label to "Clear" */
  var cl=document.querySelector('.events-filter-clear');
  if(cl)cl.textContent='Clear';
  /* Dropdown label sync */
  var mL=document.querySelector('.events-filter-list--month'),gL=document.querySelector('.events-filter-list--genre'),mT=document.querySelector('.events-filter-month div:not(.w-icon-dropdown-toggle)'),gT=document.querySelector('.events-filter-genre div:not(.w-icon-dropdown-toggle)');
  if(mT&&gT){var mo=mT.textContent.trim(),go=gT.textContent.trim();function u(){var m=typeof DE!='undefined'&&DE.aM,g=typeof DE!='undefined'&&DE.aG;mT.textContent=m||mo;gT.textContent=g||go;}new MutationObserver(u).observe(document.querySelector('.home_filters'),{attributes:true,subtree:true,attributeFilter:['class']});u();}
  /* Prevent re-selecting active filter */
  [mL,gL].forEach(function(l){if(!l)return;l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(e){if(a.classList.contains('filter-is-active')&&a!==l.querySelector('a')){e.preventDefault();e.stopImmediatePropagation();l.querySelector('a').click();}},true);});});
  /* Stagger animation on new items */
  var seen=new Set();function st(){var v=[],d=0;document.querySelectorAll('.home_events-list_item').forEach(function(i){if(i.style.display!=='none'){if(!seen.has(i)){v.push(i);seen.add(i);}}else{seen.delete(i);}});v.forEach(function(i){var x=d;setTimeout(function(){i.classList.add('drom-in');},x);d+=30;});}
  if(typeof DE!='undefined'&&DE.av){var ov=DE.av;DE.av=function(){ov();st();};}st();
},150);});}();
