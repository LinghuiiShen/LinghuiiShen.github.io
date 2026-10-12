// Set this to the site code from your own GoatCounter account.
// Leave blank until the account is ready; no visits are recorded while blank.
const goatCounterSiteCode = 'linghuishen';

// Ignore local previews. Only load the invisible analytics script on the live site.
if (goatCounterSiteCode && location.hostname === 'linghuiishen.github.io') {
  const analyticsScript = document.createElement('script');
  analyticsScript.dataset.goatcounter = `https://${goatCounterSiteCode}.goatcounter.com/count`;
  analyticsScript.async = true;
  analyticsScript.src = 'https://gc.zgo.at/count.js';
  document.body.appendChild(analyticsScript);
}
