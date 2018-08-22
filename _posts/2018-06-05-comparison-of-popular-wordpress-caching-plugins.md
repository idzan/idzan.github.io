---
layout: post
title: "Comparison of popular WordPress Caching Plugins"
date: 2018-06-05
categories: blog
---
Just to note at first - I'm going to compare 4 used Caching Plugins based of only one web site - <a href="https://idzan.eu/portfolio/graphics-design,web-administration,web-design/website-and-webshop-of-maskice-hr-zagreb/">maskice.hr's Web Shop</a>. I'm only going to compare Plugins so be aware of that. Keeping that out of the line and in mind here we go.

Just for a note right at begging - VPS used for testing is provided by <a href="https://idzan.eu/go/digitalocean/" target="_blank" rel="noopener">DigitalOcean</a> and it have (actually had until late last week*, we had to upgrade it to better system because of testings) 2 vCore of CPU, 2GB of RAM (upgraded to 4GB later in line, and it still wasn't enough) and 40GB of SSD Storage (also later upgraded to 80GB). OS and Control Panel used is CentOS 7 x86_64 with <a href="https://idzan.eu/go/buycpanel-com/" target="_blank" rel="noopener">cPanel/WHM</a> and installed Google Page Speed Insights module to Apache 2.4. PHP used is 7.1** with gzip and deflate modules enabled.

Let's begin with basic rolling out Plugins which I used and which tools that I used to test them.
<p style="text-align: left;">Plugins are:<strong><a href="https://idzan.eu/go/swift-performance/" target="_blank" rel="noopener">Swift Performance</a>, WP Rocket, <a href="https://hr.wordpress.org/plugins/wp-super-cache/" target="_blank" rel="noopener">WP Super Cache </a></strong>and <strong><a href="https://wordpress.org/plugins/w3-total-cache/">W3 Total Cache</a>.</strong></p>
Let's Begin with <a href="https://wordpress.org/plugins/w3-total-cache/"><strong>W3 Total Cache</strong></a>.

For configuration and usage, even I as type of System Administrator can say that is a bit difficult. Not super difficult, but without serious looking into documentation I couldn't configure it for a good performance vs caching ratio. If I setup for example Merging of JS files, it actually BROKE design of web site. Seriously, I went OK, this would work to - <a href="https://www.youtube.com/watch?v=umDr0mPuyQc" target="_blank" rel="noopener">Oh no, no, noooo</a> in just a few seconds. Otherwise, plugin is fine I guess. And just to note, this was my personal experience with this plugin while website mentioned above was still on Shared Host powered by <a href="https://idzan.eu/go/studio4web/" target="_blank" rel="noopener">Studio4Web</a> so maybe that was issue, who knows.

Next on the list is <strong><a href="https://hr.wordpress.org/plugins/wp-super-cache/" target="_blank" rel="noopener">WP Super Cache</a></strong>.

With this plugin I personally can say that it is good for some medium sized web site and web shop. For something heavier that we actually had it is not super effective. For instance, in this time we tried to configure VPS from the time to communicate with Amazon CloudFront and S3 to make backup and CDN for our service. It was a bit disaster with configuration from Admin panel and from direct file editing, but still it was worth it shot. As for caching vs speed ratio I would provide it as mediocre to bit better ratio trough performance, while caching wasn't super crazy but yeah, it worked good for some time in last year.

While WP Super Cache isn't super "Super", the <strong>WP Rocket</strong> worked way better.

Not just that WP Rocket has easier to configure CDN options, but it also have connection with CloudFlare which make purging cache from CloudFlare a breeze. Serioulsy, just one click and Cloudflare Cache is purged. Now to configuration - it os pretty much straight forward. Not so much complications, and also something that is good are warnings about options like for Merging JavaScript Files which say that if you enable that option and see some weird artefacts on web site you should disable that option. Nice one for WP Rocket. Also just to note here is that we used WP Rocket in version 2.x days for a while, I would say that improvement with Administration in Version 3 is good. I would never say excelent because there is always ways to improve on ease of use and administration. I want to mention that in version 2.x days we used "GPL Compliant" version of plugin from for me reputable line of testing premium plugins for a while web site. In version 3 and with last week we upgraded to real version with activation code (paid for plugin for a year of support and even more on that note). Perfomance to Cache ratio is great. For a website that weighs in about 5.5MB to 6.3MB depending on images that we use. Most of time ratio goes to Cache and bit of performance.

Just for a small hey this is real note - WP Rocket just got updated from version 3.0.4 to version 3.0.5 on testing web site just in time writing of this post. I mean seriously, this below is screen capture of my TeamViewer session from my work computer where I do most of Administration work for website that is used for this testings.

<a href="https://idzan.eu/wp-content/uploads/2018/06/2018-06-05-20_19_23-MARKO-HP-15-AY0-TeamViewer-Free-license-non-commercial-use-only.png"><img class="aligncenter size-large wp-image-865" src="https://idzan.eu/wp-content/uploads/2018/06/2018-06-05-20_19_23-MARKO-HP-15-AY0-TeamViewer-Free-license-non-commercial-use-only-1024x337.png" alt="" width="1020" height="336" /></a>

And finally, there is one "new" kid in block - <strong><a href="https://idzan.eu/go/swift-performance/" target="_blank" rel="noopener">Swift Performance</a></strong>. Man this new kid is a good one, but not perfect.

As of last 2 plugins, it have easy and straight forward configuration. Even for first time after installing and activating plugin it have wizard. Wizard is mostly just clicking Next, but still it have some caveats. For a instance, in Wizard it doesn't have some better explanations for Modes that use for Caching. For me it is not a big deal, but for newcomers it might be harder then expected. One plus side is that plugin have <a href="https://wordpress.org/plugins/swift-performance-lite/" target="_blank" rel="noopener">Lite version</a> which can be downloaded from <a href="https://wordpress.org/plugins/swift-performance-lite/" target="_blank" rel="noopener">WordPress.org Repository</a>. My personal experience with this plugin wasn't super great even trough we used it for almost 3 months. In that 3 months we had some issues where after clearing cache Products which were Out of Stock, went again to be In Stock. It also had issue with Cache Reloading which used most of our PHP-FPM process time and CPU. For that we (or to be clear I had to) had to implement Cron Job in WHM just to restart PHP-FPM Regularly to make CPU usage lower.

Another bonus of this plugin is avid Community in <a href="https://www.facebook.com/groups/SwiftPerformanceUsers/" target="_blank" rel="noopener">Swift Performance Facebook Group</a>. They helped me sort out some of problems, especially one of developers which is active in group with helping out.

For Cache vs Performance I would say - Performance first, Caching second.

&nbsp;

Overall here are my results for which plugin would recommend and which one wouldn't.

So it is obvious which one wouldn'r recomend - W3 Total Cache. It says a lost about plugin and devs which bloats them.

In order of bussines here are best ones:
<ol>
 	<li>WP Rocket - man I love it, Caching is great, don't break site in Visual and Back End side and also pretty much affordable if you find right Coupon Code.</li>
 	<li>Swift Performance - Good Community, Lite version for users which might don't need Premium</li>
 	<li>WP Super Cache - Mostly ease of use and Caching to Performance Ratio.</li>
</ol>

<hr />

* Latest upgrade was with 2 more vCore up to 4 vCore based CPU, 8GB of RAM and 160GB SSD based Storage.

** Update #2 was update or to be clear upgrade from PHP 7.1 to 7.2 with PHP-FPM enabled by default

*** As of 05. June 2018. it doesn't have provided Referral or Affiliate Link to this product. It would get soon online.

Notice: All links provided to services in meanings of DigitalOcean, Swift Performance, WP Rocket***, cPanel (BuycPanel.com) and Studio4Web are my referral links. You can use them to get services cheaper and to help supporting this web site.