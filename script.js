// ===== Icons =====
const ICON_DATA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`;
const ICON_CALL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"/></svg>`;
const ICON_SMS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`;

// ===== Plan data =====
const plans = [
  // Data + Voice + SMS
  {id:'mc-start', category:'voice', name:'Mobile Connect Start', negotiated:false, gb:0, feeNote:'Monthly fee: €5.00 + usage costs',
    attrs:[
      {icon:ICON_DATA, value:'€0.70/MB', label:'Data'},
      {icon:ICON_CALL, value:'€0.15/min', label:'Calls to mobile', extra:{value:'Unlimited', label:'Calls to fixed lines and colleagues'}},
      {icon:ICON_SMS, value:'€0.15/SMS', label:'Messages to mobile', extra:{value:'Unlimited', label:'Messages to colleagues'}}
    ], price:'€5.00'},
  {id:'mc-essential', category:'voice', name:'Mobile Connect Essential', negotiated:false, gb:4,
    attrs:[
      {icon:ICON_DATA, value:'4 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'100 min', label:'Calls to mobile', dark:true, extra:{value:'Unlimited', label:'Calls to fixed lines and colleagues'}},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'}
    ], price:'€10.00'},
  {id:'mc-plus', category:'voice', name:'Mobile Connect Plus', negotiated:true, gb:13,
    attrs:[
      {icon:ICON_DATA, value:'13 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'200 min', label:'Calls to mobile', dark:true, extra:{value:'Unlimited', label:'Calls to fixed lines and colleagues'}},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'}
    ], price:'€12.98'},
  {id:'mc-smart', category:'voice', name:'Mobile Connect Smart', negotiated:false, gb:50,
    attrs:[
      {icon:ICON_DATA, value:'50 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'Unlimited', label:'Calls to mobile, fixed lines and colleagues'},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'}
    ], price:'€20.99'},
  {id:'mc-comfort', category:'voice', name:'Mobile Connect Comfort', negotiated:false, gb:125,
    attrs:[
      {icon:ICON_DATA, value:'125 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'Unlimited', label:'Calls to mobile, fixed lines and colleagues'},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'}
    ], price:'€30.55'},
  {id:'mc-maxplus', category:'voice', name:'Mobile Connect Max+', negotiated:false, gb:200,
    attrs:[
      {icon:ICON_DATA, value:'200 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'Unlimited', label:'Calls to mobile, fixed lines and colleagues'},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'}
    ], price:'€39.56'},
  {id:'mc-intl', category:'voice', name:'Mobile Connect International', negotiated:false, gb:350, note:true,
    attrs:[
      {icon:ICON_DATA, value:'350 GB', label:'Data', dark:true},
      {icon:ICON_CALL, value:'Unlimited', label:'Calls to mobile, fixed lines and colleagues'},
      {icon:ICON_SMS, value:'Unlimited', label:'Messages to mobile and colleagues'},
      {icon:ICON_CALL, value:'1000 min', label:'Calls', dark:true},
      {icon:ICON_SMS, value:'1000 SMS', label:'Messages', dark:true}
    ], price:'€50.56'},
  // Only data
  {id:'dc-start', category:'data', name:'Data Connect Start', negotiated:false, gb:1,
    attrs:[{icon:ICON_DATA, value:'1 GB', label:'Data', dark:true}], price:'€5.00'},
  {id:'dc-plus', category:'data', name:'Data Connect Plus', negotiated:false, gb:13,
    attrs:[{icon:ICON_DATA, value:'13 GB', label:'Data', dark:true}], price:'€13.00'},
  {id:'dc-pro', category:'data', name:'Data Connect Pro', negotiated:false, gb:40,
    attrs:[{icon:ICON_DATA, value:'40 GB', label:'Data', dark:true}], price:'€20.36'},
  {id:'dc-smart', category:'data', name:'Data Connect Smart', negotiated:false, gb:70,
    attrs:[{icon:ICON_DATA, value:'70 GB', label:'Data', dark:true}], price:'€24.44'},
  {id:'dc-max', category:'data', name:'Data Connect Max', negotiated:true, gb:100,
    attrs:[{icon:ICON_DATA, value:'100 GB', label:'Data', dark:true}], price:'€20.36'},
  {id:'dc-maxplus', category:'data', name:'Data Connect Max+', negotiated:false, gb:200,
    attrs:[{icon:ICON_DATA, value:'200 GB', label:'Data', dark:true}], price:'€34.44'},
  {id:'dc-ultra', category:'data', name:'Data Connect Ultra', negotiated:false, gb:350,
    attrs:[{icon:ICON_DATA, value:'350 GB', label:'Data', dark:true}], price:'€41.00'},
];

const CATEGORY_LABELS = {voice:'Data + Voice + SMS', data:'Only data'};

const filterDefs = [
  {id:'negotiated', label:'Negotiated', test:p=>p.negotiated},
  {id:'voice', label:'Data + Voice + SMS', test:p=>p.category==='voice'},
  {id:'data', label:'Only Data', test:p=>p.category==='data'},
  {id:'100gb', label:'100GB or more', test:p=>p.gb>=100},
];

let activeFilters = new Set();
let selectedPlan = null;

function toggleFilter(id){
  if(activeFilters.has(id)) activeFilters.delete(id);
  else activeFilters.add(id);
  render();
}

function selectPlan(id){
  selectedPlan = id;
  render();
}

function formatAttrValue(value){
  if(value.startsWith('€')){
    const m = value.match(/^€(\d+)\.(\d+)\/(.+)$/);
    if(m){
      return `<span class="price"><span class="euro">€</span><span class="integer">${m[1]}</span><span class="fraction">.${m[2]}</span></span><span class="unit">/${m[3]}</span>`;
    }
    return `<span class="plain">${value}</span>`;
  }
  if(value === 'Unlimited'){
    return `<span class="unlimited">Unlimited</span>`;
  }
  return `<span class="plain">${value}</span>`;
}

function footerPriceHtml(price, negotiated){
  const [intPart, decPart] = price.replace('€','').split('.');
  return `
  <div class="plan-footer-price${negotiated?' negotiated':''}">
    <span class="price-euro">€</span><span class="price-int">${intPart}</span><span class="price-dec">.${decPart}</span>
  </div>
  <div class="price-per">/month</div>`;
}

function attrHtml(a){
  const extra = a.extra ? `<div class="plan-attr-extra"><div class="attr-line">${formatAttrValue(a.extra.value)}</div><div class="plan-attr-label">${a.extra.label}</div></div>` : '';
  return `<div class="plan-attr">
    <div class="plan-attr-icon">${a.icon}</div>
    <div class="plan-attr-body">
      <div class="attr-line">${formatAttrValue(a.value)}</div>
      <div class="plan-attr-label">${a.label}</div>
      ${extra}
    </div>
  </div>`;
}

function planRowHtml(p){
  const isSel = selectedPlan===p.id;
  return `
  <div class="plan-row${isSel?' selected':''}" onclick="selectPlan('${p.id}')">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-radio${isSel?' selected':''}"><div class="dot"></div></div>
        <div class="plan-text">
          <div class="plan-name">${p.name}</div>
          ${p.negotiated?'<div class="plan-negotiated">Negotiated</div>':''}
          ${p.feeNote?`<div class="plan-fee-note">${p.feeNote}</div>`:''}
        </div>
      </div>
      <div class="plan-attrs-row">${p.attrs.map(attrHtml).join('')}</div>
    </div>
    <div class="plan-footer">${footerPriceHtml(p.price, p.negotiated)}</div>
  </div>`;
}

function render(){
  // chips
  document.getElementById('chips').innerHTML = filterDefs.map(f=>
    `<div class="chip${activeFilters.has(f.id)?' active':''}" onclick="toggleFilter('${f.id}')">${f.label}</div>`
  ).join('');

  // filtered plans
  const active = [...activeFilters];
  const filtered = plans.filter(p => active.every(fid => filterDefs.find(f=>f.id===fid).test(p)));

  const cats = ['voice','data'];
  let html = '';
  let any = false;
  cats.forEach(cat=>{
    const catPlans = filtered.filter(p=>p.category===cat);
    if(catPlans.length===0) return;
    any = true;
    html += `<div class="category-block">
      <h3>${CATEGORY_LABELS[cat]}</h3>
      ${cat==='voice'?'<p class="category-note">The below displayed amounts are only applicable in Belgium and EU.</p>':''}
      ${catPlans.map(planRowHtml).join('')}
      <p class="vat-note">Prices are displayed VAT excluded.</p>
    </div>`;
  });

  document.getElementById('results').innerHTML = any ? html : `<div class="no-results">No subscriptions match the selected filters. Try removing one.</div>`;
}

render();
