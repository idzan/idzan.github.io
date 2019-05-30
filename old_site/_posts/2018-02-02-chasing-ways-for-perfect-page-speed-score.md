---
layout: post
title: "Chasing Ways for Perfect Page Speed Score"
date: 2018-02-02
categories: blog
---
OK, just to you all know here are my experience with speeding up and optimization of couple of web sites just to have good score like A or just B score on <a href="https://gtmetrix.com/" target="_blank" rel="noopener">GTMetrix </a>website. I also test sited on <a href="https://tools.pingdom.com/" target="_blank" rel="noopener">Pingdom Tools</a>, but that is just for OnLoad Time. For full page speed always run page speed tests on GTMetrix. They are more reliable for me in my experiences.

So, how you can get to perfect score. Well, it depends. Really, it depends on type of site that you are running and what kind of content is on page.

For instance, one of projects - <a href="https://idzan.eu/portfolio/graphics-design,web-administration,web-design/website-and-webshop-of-maskice-hr-zagreb/" target="_blank" rel="noopener">maskice.hr Web Shop</a> - have got a bunch of small tweaks, almost perfect image compression and even perfect caching plugin named <a href="https://swteplugins.com/product/swift-performance/" target="_blank" rel="noopener">Swift Performance</a>. And even using <a href="https://www.cloudflare.com/" target="_blank" rel="noopener">Cloudflare</a> as CDN with <a href="https://aws.amazon.com/ses/" target="_blank" rel="noopener">Amazon SES</a> + <a href="https://gsuite.google.com/" target="_blank" rel="noopener">G Suite</a> for e-mail servicing it almost always lately have B grade on <span class="removed_link" title="https://gtmetrix.com/reports/maskice.hr/QZquKrGE">GTMetrix</span> with Load Times between 4.8 seconds up to 8 seconds. Yup, we tried couple of Caching plugins, from free like W3 Total Cache, WP Super Cache and Autoptimize and some got problems with current theme and others had problems with crazy long TTFB (Time To First Byte) which may get you problems with latest Google Algorithms for Page Rankings. After some deep testings using <a href="https://m.do.co/c/59c8b7e27db3" target="_blank" rel="noopener">DigitalOcean</a> VPS with latest <a href="https://billing.buycpanel.com/bill1/aff.php?aff=1663" target="_blank" rel="noopener">cPanel</a> on it with Googles own <a href="https://developers.google.com/speed/pagespeed/module/" target="_blank" rel="noopener">PageSpeed Insights Module</a> Installed so it can run server cache and JPG to WEBP conversion we saw that it works the best with <a href="https://wp-rocket.me/" target="_blank" rel="noopener">WP Rocket</a> and after few demo tries on Carbon Copies of web on secondary domain even better with current Caching and Minifying solution <a href="https://swteplugins.com/product/swift-performance/">Swift Performance</a> (as Ivica Delic say in <a href="https://www.facebook.com/groups/wordpressspeedup/?ref=group_browse_new" target="_blank" rel="noopener">Wordpress Speed Up Gorup</a> it is Swiss Army Knife like W3 Total Cache but in premium version).

Proof of latest Speed test as of writing this post:

<a href="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000036.jpg"><img class="aligncenter wp-image-743 size-large" src="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000036-1024x426.jpg" alt="" width="1020" height="424" /></a>

What do you all think when see this image? You would go to images, but you would be all be wrong. Major problem with web shops in general is their complexity and connections to dozen of Analytics sites and as is always recommenced - Live Chat system. For instance, here are scripts that unfortunately can't deffer or set up Leverage browser cache on it.

<a href="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000037.jpg"><img class="aligncenter size-full wp-image-744" src="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000037.jpg" alt="" width="997" height="593" /></a>

Here you might say that is bunch of Google Analytics and you would be correct. This site use Analytics for getting better experience with customers and provide customers with related content so here we go. It is getting better soon with better Analytics code. Also, yup Facebook with their inside code for helping us with Facebook Adverts.

As for another example here it is this web site. That's right this web site. It is running currently on Shared Host which is provided by Studio4Web (not sponsored by this companies for now) and it loads in about 2 seconds total using <span class="removed_link" title="https://gtmetrix.com/reports/idzan.eu/857IHYGW">GTMetrix</span> tests. This seems crazy enough, but when you see that this site is actually one pager for most of content it is just fine. Site runs free version of WPMU Dev's Hummingbird Caching and Optimization plugin and it optimize everything. Even with Optimus Image Compression and Optimization. I mean, that is small amount of tweaks with premium theme so it can be fast no matter what.

<a href="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000038.jpg"><img class="aligncenter size-large wp-image-745" src="https://idzan.eu/wp-content/uploads/2018/02/Screenshot000038-1024x466.jpg" alt="" width="1020" height="464" /></a>

And now short conclusion which would most of people say:
<ul>
 	<li>Use CDN (Cloudflare, MaxCDN, KeyCDN)</li>
 	<li>Have a good Server like VPS with good configuration (examples: DigitalOcean with latest stable cPanel)</li>
 	<li>Optimize images</li>
 	<li>Use some kind of caching plugin (From premium section would recommend W3 Rocket and Swift Performance, and from Free section WP Super Cache and Autoptimize)</li>
 	<li>Compress and minify CSS &amp; JavaScript, HTML is optional</li>
 	<li>Have less amount of images and content on site if it is possible</li>
 	<li>Use small amount of external Javascripts and CSS files, try to host them locally and defer parsing it</li>
 	<li>And finally - always check site for problems and speed, because of latest Google Algorithm changes</li>
</ul>
Important note: DigitalOcean, cPanel (BuycPanel.com) and Studio4Web are Referral/Affiliate Links. With signup's and purchasing from those sources you help me get better discounts on products on next purchase(s).

Update: as of 11. March 2018. I found broken links to speed tests so links are updated. Needs quick Follow-Up Post Soon with new discoveries.

Update #2: As of 27. May 2018. all links to GTMetrix tests are removed.