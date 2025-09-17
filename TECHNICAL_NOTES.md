# AFCON Morocco Landing Page - Technical Implementation Notes

## UTM Parameter Capture
- Add hidden form fields to capture: `utm_source`, `utm_medium`, `utm_campaign`
- Auto-populate these fields from URL parameters
- Store in lead record for tracking conversion sources

## Analytics & Tracking Integration

### Meta Pixel & TikTok Pixel
Add to header section:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>

<!-- TikTok Pixel Code -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  ttq.load('YOUR_PIXEL_ID');
  ttq.page();
}(window, document, 'ttq');
</script>
```

### Event Tracking
- **Lead Event**: Fire on form submission
- **Purchase Event**: Fire server-side via webhook on payment completion

## Form Integration

### Zapier Webhook Setup
1. Create Zap: "New Row in Google Sheets"
2. Add webhook trigger
3. Connect to Google Sheets
4. Add WhatsApp auto-reply action
5. Connect to Mailchimp for lead nurturing
6. Add sales team notification

### Form Data Structure
```json
{
  "lead_id": "AFCON_timestamp_random",
  "full_name": "string",
  "email": "string", 
  "whatsapp": "string",
  "country": "string",
  "package": "bronze|silver|gold",
  "match_dates": "string",
  "group_size": "string",
  "source": "string",
  "utm_source": "string",
  "utm_medium": "string", 
  "utm_campaign": "string",
  "timestamp": "ISO_string",
  "landing_page": "afcon-morocco-2025"
}
```

## Payment Integration

### Stripe Checkout
- Create checkout session with lead_id in metadata
- Pass package selection and deposit amount
- Redirect to success page with conversion tracking

### Payment Metadata
```json
{
  "lead_id": "AFCON_123456789_abc123def",
  "package_type": "silver",
  "deposit_percentage": "25",
  "customer_name": "John Doe",
  "customer_email": "john@example.com"
}
```

## WhatsApp Integration

### Click-to-Chat URLs
```
Base: https://wa.me/233123456789
With message: https://wa.me/233123456789?text=I%20want%20to%20book%20AFCON%20package%20Ref:%20{{lead_id}}
```

### Auto-Reply Template
```
Hi {{first_name}} 👋 — thanks for your interest in Dunia Safari's AFCON Morocco packages (Ref: {{lead_id}}). 

We'll contact you on WhatsApp within 24 hours with package options and deposit link. 

Questions? Reply here.
```

## Email Templates

### Booking Confirmation
**Subject:** Dunia Safari — Booking Confirmed (Ref: {{lead_id}})

**Body:**
```
Thanks {{first_name}}, 

Your deposit of {{amount}} {{currency}} is received. 

Your AFCON package ({{package_name}}) is now reserved. 

We'll send your itinerary & WhatsApp group invite shortly.

Best regards,
Dunia Safari Team
```

## A/B Testing Setup

### Variant A (Control)
CTA: "Reserve My Spot — 25% Deposit"

### Variant B (Test)  
CTA: "Secure My AFCON Seat — Pay 25%"

## Technical Requirements

1. **Lead ID Generation**: Use timestamp + random string format
2. **Form Validation**: Client-side and server-side validation
3. **Error Handling**: Graceful fallbacks for payment/form failures
4. **Mobile Optimization**: Ensure forms work on all devices
5. **Performance**: Optimize images, lazy loading
6. **Security**: Sanitize all form inputs, HTTPS only

## Conversion Optimization Notes

- Test CTA button colors (Morocco Red vs Desert Sand)
- A/B test hero copy variations
- Monitor form abandonment points
- Test package order presentation
- Optimize for mobile conversion rates

## Launch Checklist

- [ ] UTM tracking implemented
- [ ] Facebook/TikTok pixels installed
- [ ] Zapier webhook tested
- [ ] Payment flow tested
- [ ] WhatsApp auto-reply working
- [ ] Email templates configured
- [ ] Mobile responsiveness verified
- [ ] Form validation working
- [ ] Analytics events firing
- [ ] SSL certificate active