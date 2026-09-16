// ===== Icons =====
const ICON_DATA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`;
const ICON_CALL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"/></svg>`;
const ICON_SMS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>`;
const ICON_CHEVRON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>`;
const ICON_EDIT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`;
const ICON_MINUS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14"/></svg>`;
const ICON_PLUS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>`;

// Every underlined destination/zone link in Step 2 points here, landing (best-effort) on the
// "Good to know" section of the public roaming page.
const ROAMING_INFO_URL = 'https://www.proximus.be/en/id_cl_roaming/companies-and-public-sector/telephony-for-large-companies/mobile/roaming-rates-for-medium-and-large-companies.html#goodtoknow';

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
    <div class="step1-summary">
      <div>
        <div class="step-label">Step 1: Subscription</div>
        <div class="step-plan-name">${plan ? plan.name : ''}</div>
      </div>
      <span class="modify-link" onclick="modifySubscription()">${ICON_EDIT} Modify</span>
    </div>
  `;
}

function renderStep1(){
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
// STEP 2: Options (optional)
// =====================================================================

// ----- Recurring roaming (checkbox, quantity 1-20, price scales per unit) -----
const roamingRecurringPlans = [
  {id:'tp-top',          name:'Travel Passport Top',          zones:['top'],       price:10.00},
  {id:'tp-top-intense',  name:'Travel Passport Top Intense',  zones:['top'],       price:150.00},
  {id:'tp-world',        name:'Travel Passport World',        zones:['top','row'], price:75.00},
  {id:'ts-top',          name:'Travel Surf Top',              zones:['top'],       price:20.00},
  {id:'ts-top-intense',  name:'Travel Surf Top Intense',      zones:['top'],       price:75.00},
  {id:'ts-world',        name:'Travel Surf World',            zones:['top','row'], price:95.00},
  {id:'ts-world-intense',name:'Travel Surf World Intense',    zones:['top','row'], price:295.00},
];

const roamingFilterDefs = [
  {id:'negotiated',  label:'Negotiated',         test:p=>!!p.negotiated},
  {id:'belgium-eu',  label:'Belgium & EU',       test:p=>p.zones.includes('eu')},
  {id:'top',         label:'Top destinations',   test:p=>p.zones.includes('top')},
  {id:'row',         label:'Rest of the world',  test:p=>p.zones.includes('row')},
];

let roamingActiveFilters = new Set();
let roamingSelections = {};     // id -> quantity (1-20). Absent/0 = unchecked.
let roamingStepperOpenId = null; // which card currently shows the +/- stepper

// ----- Daily roaming (radio, single-select, mutually exclusive with recurring roaming) -----
const dailyRoamingOptions = [
  {id:'daily-passport', name:'Daily Travel Passport'},
  {id:'daily-surf-comfort', name:'Daily Travel Surf Comfort'},
  {id:'daily-surf', name:'Daily Travel Surf'},
];
let dailyRoamingSelected = null;

// ----- Recurring international (radio, single-select) -----
const intlOptions = [
  {id:'voice-boost-60', name:'Voice Boost International 60 min to EU', price:2.00,
    desc:'60 min International calls to EU only eligible with Mobile Connect Max and Max+'},
  {id:'intl-calls-sms', name:'International Calls & SMS to EU', price:5.00,
    desc:'International Calls & SMS to EU'},
];
let intlSelected = null;

// ----- Accordions -----
const optionAccordions = [
  {id:'data-eu',      title:'Data options in Belgium and EU',           builtOut:false},
  {id:'roaming',      title:'International and roaming (outside EU) options', builtOut:true},
  {id:'barrings',     title:'Barrings',                                 builtOut:false},
  {id:'national-surf',title:'National surf limit',                      builtOut:false},
  {id:'roaming-surf', title:'Roaming surf limit',                       builtOut:false},
  {id:'other',        title:'Other services',                           builtOut:false},
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
    if(roamingStepperOpenId===id) roamingStepperOpenId=null;
  } else {
    roamingSelections[id] = 1;
    // Recurring roaming and Daily roaming are mutually exclusive in the real product:
    // activating a daily option deactivates all other roaming options, and vice versa.
    dailyRoamingSelected = null;
  }
  renderStep2();
}

function openStepper(id){
  roamingStepperOpenId = (roamingStepperOpenId===id) ? null : id;
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
  roamingStepperOpenId = null;
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

function roamingRecurringCardHtml(p){
  const checked = !!roamingSelections[p.id];
  const qty = roamingSelections[p.id] || 1;
  const total = (p.price * qty).toFixed(2);
  const stepperOpen = roamingStepperOpenId === p.id;

  let belowTitle = '';
  if(checked){
    if(stepperOpen){
      belowTitle = `
        <div class="qty-stepper" onclick="event.stopPropagation();">
          <button class="qty-btn${qty>1?' enabled':''}" ${qty<=1?'disabled':''} onclick="changeQty('${p.id}',-1)">${ICON_MINUS}</button>
          <div class="qty-value">${qty}</div>
          <button class="qty-btn enabled" ${qty>=20?'disabled':''} onclick="changeQty('${p.id}',1)">${ICON_PLUS}</button>
          <span class="qty-done" onclick="openStepper('${p.id}')">Done</span>
        </div>`;
    } else {
      belowTitle = `<div class="plan-qty-row">Quantity= ${qty}
        <a onclick="event.stopPropagation(); openStepper('${p.id}')">Order more</a></div>`;
    }
  }

  return `
  <div class="plan-row roam-row${checked?' selected':''}">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-checkbox${checked?' selected':''}" onclick="toggleRoamingPlan('${p.id}')">${ICON_CHECK}</div>
        <div class="plan-text">
          <div class="plan-name">${p.name}</div>
        </div>
      </div>
      ${belowTitle}
    </div>
    <div class="plan-footer">${footerPriceHtml('€'+total, false)}</div>
  </div>`;
}

function dailyRoamingCardHtml(o){
  const isSel = dailyRoamingSelected === o.id;
  return `
  <div class="plan-row${isSel?' selected':''}" onclick="selectDaily('${o.id}')">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-radio${isSel?' selected':''}"><div class="dot"></div></div>
        <div class="plan-text"><div class="plan-name">${o.name}</div></div>
      </div>
    </div>
  </div>`;
}

function intlCardHtml(o){
  const isSel = intlSelected === o.id;
  return `
  <div class="plan-row" onclick="selectIntl('${o.id}')">
    <div class="plan-info">
      <div class="plan-header">
        <div class="plan-radio${isSel?' selected':''}"><div class="dot"></div></div>
        <div class="plan-text"><div class="plan-name">${o.name}</div></div>
      </div>
      <div class="plan-desc">${o.desc}</div>
    </div>
    <div class="plan-footer">${footerPriceHtml('€'+o.price.toFixed(2), false)}</div>
  </div>`;
}

function roamingAccordionContentHtml(){
  const chipsHtml = roamingFilterDefs.map(f=>
    `<div class="chip${roamingActiveFilters.has(f.id)?' active':''}" onclick="toggleRoamingFilter('${f.id}')">${f.label}</div>`
  ).join('');

  const activeF = [...roamingActiveFilters];
  const filteredRecurring = roamingRecurringPlans.filter(p => activeF.every(fid => roamingFilterDefs.find(f=>f.id===fid).test(p)));

  const recurringHtml = filteredRecurring.length
    ? `<div class="plan-grid-2col">${filteredRecurring.map(roamingRecurringCardHtml).join('')}</div>`
    : `<div class="no-results">No options match the selected filters. Try removing one.</div>`;

  const dailyDisabled = !dailyRoamingSelected;

  return `
    <p class="section-sub">International options and options for usage outside the EU.</p>
    <p class="roaming-links">${roamingLink('View all countries in detail for each zone')}</p>

    <div class="section-heading">Recurring roaming</div>
    <div class="chips">${chipsHtml}</div>
    ${recurringHtml}

    <div class="section-heading">Daily roaming</div>
    <span class="deselect-link${dailyDisabled?'':' enabled'}" ${dailyDisabled?'':'onclick="deselectDaily()"'}>Deselect options ${ICON_CHEVRON}</span>
    <div class="plan-grid-2col" style="margin-top:16px;">
      ${dailyRoamingOptions.map(dailyRoamingCardHtml).join('')}
    </div>

    <div class="section-heading">Recurring international</div>
    <span class="deselect-link${intlSelected?' enabled':''}" ${intlSelected?'onclick="deselectIntl()"':''}>Deselect options ${ICON_CHEVRON}</span>
    <div style="margin-top:16px;">
      ${intlOptions.map(intlCardHtml).join('')}
    </div>

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
        <span class="accordion-chevron">${ICON_CHEVRON}</span>
      </div>
      ${isOpen ? `<div class="accordion-content">${accordionContentHtml(acc)}</div>` : ''}
    </div>`;
  }).join('');

  panel.innerHTML = `
    <h2>Step 2: Options (optional)</h2>
    <p class="step2-subtitle">In this step you can choose extra options, mobile data roaming options, barrings and set surf limits.</p>
    <div class="accordion-list">${accordionsHtml}</div>
  `;
}

// ===== Initial render =====
renderStep1();
renderStep2();
