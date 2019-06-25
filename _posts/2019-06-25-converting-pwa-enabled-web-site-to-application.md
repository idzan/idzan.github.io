---
title: Converting any PWA enabled web site into Android Application
layout: post
author: Marko
---
So, you have decided that your web site can be used as PWA (Progressive Web Application), and now want it to be published on Google Play Store&trade; as real Android application.

You want it to be as simple as entering few informations about site, changing icon, colors of site to display in application and maybe even splash screen for loading web site?

Now you can do it, with magic of TWA - Trusted Web Application. It is Google way to simply and easily convert your PWA with all of it PWA features which you have in web site/progressive application to Android apk which can be published on Play Store&trade; .

How to do it, you might ask. Well it is simple as searching *How to integrate PWA in (insert your CMS like **WordPress, Joomla, Drupal etc.** or your platform in which you develop like **React, Angular, Vue, php, ASP.NET etc.**) website* for a first thing.  
After that look out for implementing all features that you want like caching, browser notifications, offline page and way more features which PWA and your application use.

For this part there a lot of tutorials and even well made plugins like *Workbox* which can be integrated in lot of platforms.

Next part is converting PWA into TWA and Native. For this I highly reccomend this [tutorial from Fireship.io](https://fireship.io/lessons/pwa-to-play-store/){:target="_blank" rel="noopener"} which have already made TWA code, but also you can [check out my TWA code and use it from GitHub](https://github.com/idzan/idzan-twa){:target="_blank" rel="noopener"} . For this part you would need Android Studio installed and steady access to your web host because of neeing to import in *.well-known* folder you *Digital Asset Link* file named *assetlinks.json*.

And now to fun part - creating Google Play Developer Account. For this you would need to shell out $25 to enter this club for developers which would like to share application on Play Store&trade;. After registering and entering all important inforamtions which are needed for registration, follow tutorial from Fireship.io where they say to publish yor application. It is simple, trust me.

For graphics creating tools, I highly reccomend [Canva](https://canva.com){:target="_blank" rel="noopener"}, and [Figma](https://figma.com){:target="_blank" rel="noopener"} as free tools to create all needed images except screenshots which you can make on smartphone and if wanted implement it into mockup like design using [AppLaunchpad](https://applaunchpad.com){:target="_blank" rel="noopener"} or just look for PSD mockup of your phone or simmilar device on Google/Bing/DuckDuckGo etc. and put yout screenshots into mockup. For editing PSD files you can use Photoshop if you have it, or if don't then use GIMP or Paint.Net (with PSD plugin) which are free and open-source applications.

After finishing of rollout process you would need to wait like few hours up to a few days depending when you decide to publish your application until app is rolled out into Play Store&trade;.  
Now you can *#brag* about your *native* Android Application like a boss 😎👌.

P.S.: if somebody wants to check out my *native* web application you can check it out on [Google Play Store&trade;](#){:target="_blank" rel="noopener"}