// ===== Icons =====
const ICON_DATA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`;
const ICON_CALL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"/></svg>`;
const ICON_SMS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>`;
const ICON_CHEVRON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>`;
const ICON_EDIT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`;
const ICON_MINUS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14"/></svg>`;
const ICON_PLUS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>`;
const ICON_X = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>`;

// Every underlined destination/zone link in Step 2 points here, landing (best-effort) on the
// "Good to know" section of the public roaming page.
const ROAMING_INFO_URL = 'https://www.proximus.be/en/id_cl_roaming/companies-and-public-sector/telephony-for-large-companies/mobile/roaming-rates-for-medium-and-large-companies.html#zones';

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
let subscriptionConfirmed = false;

function toggleFilter(id){
  if(activeFilters.has(id)) activeFilters.delete(id);
  else activeFilters.add(id);
  renderStep1Picker();
}

function selectPlan(id){
  selectedPlan = id;
  renderStep1Picker();
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

function footerPriceHtml(price, negotiated, unit){
  unit = unit || 'month';
  const [intPart, decPart] = price.replace('€','').split('.');
  return `
  <div class="plan-footer-price${negotiated?' negotiated':''}">
    <span class="price-euro">€</span><span class="price-int">${intPart}</span><span class="price-dec">.${decPart}</span>
  </div>
  <div class="price-per">/${unit}</div>`;
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

function planRowHtml(p, opts){
  opts = opts || {};
  const isSel = opts.readonly ? true : selectedPlan===p.id;
  const clickAttr = opts.readonly ? '' : ` onclick="selectPlan('${p.id}')"`;
  return `
  <div class="plan-row${isSel?' selected':''}${opts.readonly?' readonly':''}"${clickAttr}>
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

function plansResultsHtml(){
  const active = [...activeFilters];
  const filtered = plans.filter(p => active.every(fid => filterDefs.find(f=>f.id===fid).test(p)));

  const cats = ['voice','data'];
  let html = '';
  let any = false;
  cats.forEach(cat=>{
    const catPlans = filtered.filter(p=>p.category===cat);
    if(catPlans.length===0) return;
    any = true;
    const rows = catPlans.map(planRowHtml).join('');
    html += `<div class="category-block">
      <h3>${CATEGORY_LABELS[cat]}</h3>
      ${cat==='voice'?'<p class="category-note">The below displayed amounts are only applicable in Belgium and EU.</p>':''}
      ${cat==='data' ? `<div class="plan-grid-2col">${rows}</div>` : rows}
      <p class="vat-note">Prices are displayed VAT excluded.</p>
    </div>`;
  });

  return any ? html : `<div class="no-results">No subscriptions match the selected filters. Try removing one.</div>`;
}

function renderStep1Picker(){
  const chipsHtml = filterDefs.map(f=>
    `<div class="chip${activeFilters.has(f.id)?' active':''}" onclick="toggleFilter('${f.id}')">${f.label}</div>`
  ).join('');

  document.getElementById('step1-panel').innerHTML = `
    <h2>Step 1: Select subscription</h2>
    <div class="chips">${chipsHtml}</div>
    <div>${plansResultsHtml()}</div>
    <div class="step1-error" id="step1-error" style="display:none;">Please select a subscription plan to continue.</div>
    <button class="btn btn-primary" style="margin-top:8px;" onclick="confirmSubscription()">Confirm subscription</button>
  `;
}

function renderStep1Summary(){
  const plan = plans.find(p=>p.id===selectedPlan);
  document.getElementById('step1-panel').innerHTML = `
    <div class="step1-summary-header">
      <div class="step-label">Step 1: Subscription</div>
      <span class="modify-link" onclick="modifySubscription()">Modify ${ICON_EDIT}</span>
    </div>
    ${plan ? planRowHtml(plan, {readonly:true}) : ''}
  `;
}

function renderStepper(){
  const container = document.getElementById('stepper-container');
  if(!container) return;
  // Step 1 = Subscription, Step 2 = Options, Step 3 not built yet in this prototype.
  const step1Class = subscriptionConfirmed ? 'completed' : 'current';
  const step1Content = subscriptionConfirmed ? ICON_CHECK : '1';
  const step2Class = subscriptionConfirmed ? 'current' : 'future';
  container.innerHTML = `
    <div class="stepper">
      <div class="step-circle ${step1Class}">${step1Content}</div>
      <div class="step-line${subscriptionConfirmed?' done':''}"></div>
      <div class="step-circle ${step2Class}">2</div>
      <div class="step-line"></div>
      <div class="step-circle future">3</div>
    </div>
  `;
}

function renderStep1(){
  renderStepper();
  if(subscriptionConfirmed) renderStep1Summary();
  else renderStep1Picker();
}

function confirmSubscription(){
  if(!selectedPlan){
    const err = document.getElementById('step1-error');
    if(err) err.style.display = 'block';
    return;
  }
  subscriptionConfirmed = true;
  renderStep1();
  renderStep2();
}

function modifySubscription(){
  subscriptionConfirmed = false;
  renderStep1();
  renderStep2();
}

// =====================================================================
// STEP 2: Options (optional) — built from the "to-be" reference screenshots
// =====================================================================

// ----- Recurring roaming: Data + Voice + SMS (checkbox, quantity 1-20) -----
const roamingComboPlans = [
  {id:'tp-top',  name:'Travel Passport Top',  zones:['top'],
    attrs:[{icon:ICON_DATA,value:'400 MB',label:'Data'},{icon:ICON_CALL,value:'400 min',label:'Calls'},{icon:ICON_SMS,value:'400 sms',label:'Messages'}],
    price:10.00},
  {id:'tp-world', name:'Travel Passport World', zones:['row'],
    attrs:[{icon:ICON_DATA,value:'400 MB',label:'Data'},{icon:ICON_CALL,value:'400 min',label:'Calls'},{icon:ICON_SMS,value:'400 sms',label:'Messages'}],
    price:75.00},
  {id:'tp-top-intense', name:'Travel Passport Top Intense', zones:['top','row'], negotiated:true,
    attrs:[{icon:ICON_DATA,value:'10 GB',label:'Data'},{icon:ICON_CALL,value:'1000 min',label:'Calls'},{icon:ICON_SMS,value:'1000 sms',label:'Messages'}],
    price:150.00},
];

// ----- Recurring roaming: Only data (checkbox, quantity 1-20, 2-column grid) -----
const roamingDataPlans = [
  {id:'ts-top',           name:'Travel Surf Top',           zones:['top'],
    attrs:[{icon:ICON_DATA,value:'1 GB',label:'Data'}], price:20.00},
  {id:'ts-top-intense',   name:'Travel Surf Top Intense',   zones:['top'],
    attrs:[{icon:ICON_DATA,value:'5 GB',label:'Data'}], price:73.00},
  {id:'ts-world',         name:'Travel Surf World',         zones:['top','row'],
    attrs:[{icon:ICON_DATA,value:'1 GB',label:'Data'}], price:20.00},
  {id:'ts-world-intense', name:'Travel Surf World Intense', zones:['top','row'],
    attrs:[{icon:ICON_DATA,value:'5 GB',label:'Data'}], price:295.00},
];

const roamingFilterDefs = [
  {id:'negotiated',  label:'Negotiated',         test:p=>!!p.negotiated},
  {id:'belgium-eu',  label:'Belgium & EU',       test:p=>p.zones.includes('eu')},
  {id:'top',         label:'Top destinations',   test:p=>p.zones.includes('top')},
  {id:'row',         label:'Rest of the world',  test:p=>p.zones.includes('row')},
];

let roamingActiveFilters = new Set();
let roamingSelections = {}; // id -> quantity (1-20). Absent/0 = unchecked.

// ----- Daily roaming (radio, single-select, mutually exclusive with recurring roaming) -----
const dailyRoamingOptions = [
  {id:'daily-passport', name:'Daily Travel Passport', zones:['top'],
    attrs:[{icon:ICON_DATA,value:'160 MB',label:'Data'},{icon:ICON_CALL,value:'40 min',label:'Calls'},{icon:ICON_SMS,value:'40 sms',label:'Messages'}],
    price:4.13},
  {id:'daily-surf-comfort', name:'Daily Travel Surf Comfort', zones:['top'],
    attrs:[{icon:ICON_DATA,value:'160 MB',label:'Data'},{icon:ICON_CALL,value:'40 min',label:'Calls'},{icon:ICON_SMS,value:'40 sms',label:'Messages'}],
    price:4.13},
  {id:'daily-surf', name:'Daily Travel Surf', zones:['top'],
    attrs:[{icon:ICON_DATA,value:'160 MB',label:'Data'},{icon:ICON_CALL,value:'40 min',label:'for each outgoing and incoming calls'},{icon:ICON_SMS,value:'40 sms',label:'Messages'}],
    price:4.13},
];
let dailyRoamingSelected = null;

// ----- Recurring international (radio, single-select, 2-column grid) -----
const intlOptions = [
  {id:'voice-boost-60', name:'Voice Boost International 60 min to EU', zones:['eu'],
    attrs:[{icon:ICON_CALL,value:'60 min',label:'International calls to EU only eligible with Mobile Connect Max and Max+'}],
    price:2.00},
  {id:'intl-calls-sms', name:'International Calls & SMS to EU', zones:['eu'],
    attrs:[{icon:ICON_CALL,value:'500 min',label:'International Calls to EU'},{icon:ICON_SMS,value:'500 sms',label:'International SMS to EU'}],
    price:5.00},
];
let intlSelected = null;

// ----- Accordions -----
const optionAccordions = [
  {id:'data-eu',       title:'Data options in Belgium and EU',                  builtOut:false},
  {id:'roaming',       title:'International and roaming (outside EU) options',  builtOut:true},
  {id:'barrings',      title:'Barrings',                                        builtOut:false},
  {id:'national-surf', title:'National surf limit',                             builtOut:false},
  {id:'roaming-surf',  title:'Roaming surf limit',                              builtOut:false},
  {id:'security',      title:'Mobile Security Options',                         builtOut:false},
  {id:'other',         title:'Other options',                                   builtOut:false},
];
let openAccordions = new Set(['roaming']);

function toggleAccordion(id){
  if(openAccordions.has(id)) openAccordions.delete(id);
  else openAccordions.add(id);
  renderStep2();
}

function toggleRoamingFilter(id){
  if(roamingActiveFilters.has(id)) roamingActiveFilters.delete(id);
  else roamingActiveFilters.add(id);
  renderStep2();
}

function toggleRoamingPlan(id){
  if(roamingSelections[id]){
    delete roamingSelections[id];
  } else {
    roamingSelections[id] = 1;
    // Recurring roaming and Daily roaming are mutually exclusive in the real product:
    // activating a daily option deactivates all other roaming options, and vice versa.
    dailyRoamingSelected = null;
  }
  renderStep2();
}

function changeQty(id, delta){
  const current = roamingSelections[id] || 1;
  const next = Math.min(20, Math.max(1, current + delta));
  roamingSelections[id] = next;
  renderStep2();
}

function selectDaily(id){
  dailyRoamingSelected = id;
  roamingSelections = {};
  renderStep2();
}

function deselectDaily(){
  dailyRoamingSelected = null;
  renderStep2();
}

function selectIntl(id){
  intlSelected = id;
  renderStep2();
}

function deselectIntl(){
  intlSelected = null;
  renderStep2();
}

function roamingLink(label){
  return `<a href="${ROAMING_INFO_URL}" target="_blank" rel="noopener">${label}</a>`;
}

function zoneLabelFor(zones){
  const has = z => zones.includes(z);
  if(has('eu')) return 'Belgium & EU';
  if(has('top') && has('row')) return 'Top destinations & Rest of the World';
  if(has('top')) return 'Top destinations';
  if(has('row')) return 'Rest of the World';
  return '';
}

function passesRoamingFilters(item){
  const active = [...roamingActiveFilters];
  return active.every(fid => roamingFilterDefs.find(f=>f.id===fid).test(item));
}

// ----- Card renderers -----
function roamingComboCardHtml(p){
  const checked = !!roamingSelections[p.id];
  const qty = roamingSelections[p.id] || 1;
  const total = (p.price * qty).toFixed(2);
  const qtyHtml = checked ? `
    <div class="qty-stepper" onclick="event.stopPropagation();">
      <span class="qty-label">Quantity</span>
      <button class="qty-btn${qty>1?' enabled':''}" ${qty<=1?'disabled':''} onclick="changeQty('${p.id}',-1)">${ICON_MINUS}</button>
      <div class="qty-value">${qty}</div>
      <button class="qty-btn enabled" ${qty>=20?'disabled':''} onclick="changeQty('${p.id}',1)">${ICON_PLUS}</button>
    </div>` : '';

  return `
  <div class="plan-row roam-row${checked?' selected':''}">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-checkbox${checked?' selected':''}" onclick="toggleRoamingPlan('${p.id}')">${ICON_CHECK}</div>
        <div class="plan-text">
          <div class="plan-name">${p.name}${p.negotiated?'<span class="plan-negotiated inline">Negotiated</span>':''}</div>
          <div class="plan-available">Available for: ${roamingLink(zoneLabelFor(p.zones))}</div>
        </div>
      </div>
      <div class="plan-attrs-row">${p.attrs.map(attrHtml).join('')}</div>
      ${qtyHtml}
    </div>
    <div class="plan-footer">${footerPriceHtml('€'+total, p.negotiated)}</div>
  </div>`;
}

function dailyRoamingCardHtml(o){
  const isSel = dailyRoamingSelected === o.id;
  return `
  <div class="plan-row${isSel?' selected':''}" onclick="selectDaily('${o.id}')">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-radio${isSel?' selected':''}"><div class="dot"></div></div>
        <div class="plan-text">
          <div class="plan-name">${o.name}</div>
          <div class="plan-available">Available for: ${roamingLink(zoneLabelFor(o.zones))}</div>
        </div>
      </div>
      <div class="plan-attrs-row">${o.attrs.map(attrHtml).join('')}</div>
    </div>
    <div class="plan-footer">${footerPriceHtml('€'+o.price.toFixed(2), false, 'day')}</div>
  </div>`;
}

function intlCardHtml(o){
  const isSel = intlSelected === o.id;
  return `
  <div class="plan-row" onclick="selectIntl('${o.id}')">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-radio${isSel?' selected':''}"><div class="dot"></div></div>
        <div class="plan-text">
          <div class="plan-name">${o.name}</div>
          <div class="plan-available">Available for: ${roamingLink(zoneLabelFor(o.zones))}</div>
        </div>
      </div>
      <div class="plan-attrs-row">${o.attrs.map(attrHtml).join('')}</div>
    </div>
    <div class="plan-footer">${footerPriceHtml('€'+o.price.toFixed(2), false)}</div>
  </div>`;
}

function zonesInfoCardHtml(){
  return `
  <div class="zones-info-card">
    <div class="zones-info-header">
      <span class="zones-info-title">Different zones</span>
      ${roamingLink('View all countries in detail for each zone ↗')}
    </div>
    <div class="zones-info-grid">
      <div class="zones-info-col">
        <div class="zone-block"><strong>EU Zone</strong><p>Call, text and surf at the same rate as in Belgium.</p></div>
        <div class="zone-block"><strong>Top destinations</strong><p>Travel to popular destinations outside the EU Zone.</p></div>
      </div>
      <div class="zones-info-col">
        <div class="zone-block"><strong>Rest of the world</strong><p>Travel outside the EU Zone to countries that are not part of top destinations.</p></div>
      </div>
    </div>
  </div>`;
}

function roamingAccordionContentHtml(){
  const chipsHtml = roamingFilterDefs.map(f=>
    `<div class="chip${roamingActiveFilters.has(f.id)?' active':''}" onclick="toggleRoamingFilter('${f.id}')">${f.label}</div>`
  ).join('');

  const filteredCombo = roamingComboPlans.filter(passesRoamingFilters);
  const filteredData = roamingDataPlans.filter(passesRoamingFilters);
  const filteredDaily = dailyRoamingOptions.filter(passesRoamingFilters);
  const filteredIntl = intlOptions.filter(passesRoamingFilters);

  const comboHtml = filteredCombo.length
    ? filteredCombo.map(roamingComboCardHtml).join('')
    : `<div class="no-results">No options match the selected filters. Try removing one.</div>`;

  const dataHtml = filteredData.length
    ? `<div class="plan-grid-2col">${filteredData.map(roamingComboCardHtml).join('')}</div>`
    : `<div class="no-results">No options match the selected filters. Try removing one.</div>`;

  const dailyHtml = filteredDaily.length
    ? filteredDaily.map(dailyRoamingCardHtml).join('')
    : `<div class="no-results">No options match the selected filters. Try removing one.</div>`;

  const intlHtml = filteredIntl.length
    ? `<div class="plan-grid-2col">${filteredIntl.map(intlCardHtml).join('')}</div>`
    : `<div class="no-results">No options match the selected filters. Try removing one.</div>`;

  const dailyDisabled = !dailyRoamingSelected;

  return `
    ${zonesInfoCardHtml()}
    <div class="chips">${chipsHtml}</div>

    <div class="section-heading">Roaming</div>
    <p class="section-sub">Roaming means using your mobile services while you're abroad.</p>

    <div class="section-heading">Recurring (monthly) roaming - Data + Voice + SMS</div>
    ${comboHtml}

    <div class="section-heading">Recurring (monthly) roaming - Only data</div>
    ${dataHtml}

    <div class="section-heading">Daily roaming</div>
    <span class="deselect-link${dailyDisabled?'':' enabled'}" ${dailyDisabled?'':'onclick="deselectDaily()"'}>Deselect options ${ICON_X}</span>
    <div style="margin-top:16px;">${dailyHtml}</div>

    <div class="section-heading">Recurring (monthly) international</div>
    <p class="section-sub">International usage lets you contact another country while you're in Belgium.</p>
    <span class="deselect-link${intlSelected?' enabled':''}" ${intlSelected?'onclick="deselectIntl()"':''}>Deselect options ${ICON_X}</span>
    <div style="margin-top:16px;">${intlHtml}</div>

    <p class="roaming-note">Prices are displayed VAT excluded. Activating a daily roaming option automatically deactivates any recurring roaming options, and vice versa.</p>
  `;
}

function accordionContentHtml(acc){
  if(acc.builtOut) return roamingAccordionContentHtml();
  return `<div class="accordion-placeholder-note">This section isn't built out in this prototype yet — it's here as a placeholder so the overall Step 2 structure can be tested.</div>`;
}

function renderStep2(){
  const panel = document.getElementById('step2-panel');
  if(!subscriptionConfirmed){
    panel.className = 'panel disabled';
    panel.innerHTML = `
      <h2>Step 2: Options (optional)</h2>
      <p class="step2-locked-note">Select and confirm a subscription above to unlock extra options.</p>
    `;
    return;
  }

  panel.className = 'panel';
  const accordionsHtml = optionAccordions.map(acc=>{
    const isOpen = openAccordions.has(acc.id);
    return `
    <div class="accordion${isOpen?' open':''}">
      <div class="accordion-header" onclick="toggleAccordion('${acc.id}')">
        <span class="acc-title">${acc.title}</span>
        ${isOpen ? `<span class="accordion-help" title="Roaming lets you use your mobile plan while travelling abroad.">?</span>` : ''}
        <span class="accordion-chevron">${ICON_CHEVRON}</span>
      </div>
      ${isOpen ? `<div class="accordion-content">${accordionContentHtml(acc)}</div>` : ''}
    </div>`;
  }).join('');

  panel.innerHTML = `
    <h2>Step 2: Options (optional)</h2>
    <div class="accordion-list">${accordionsHtml}</div>
  `;
}

// ===== Initial render =====
renderStep1();
renderStep2();
