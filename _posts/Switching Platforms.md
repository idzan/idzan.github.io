---
layout: post
title: "Switching Platforms"
date: 2018-01-13
categories: blog
---
Say what, how can you migrate from this awesome blogging platform named WordPress to something else? What is wrong with you man.

OK, I already saw that this is coming, but here is my personal experience with migrating from one platform to another. Here is my opinion about migrating E-Mail platforms from Zoho Mail service which is my company using for e-mail last almost 2 years to G Suite.

You might be thinking, yeez G Suite (old name Google Suite for Work) is way better, why did't started using it earlier. And reason is - money. Yup, money was issue. Then we used Shared Hosting with cPanel mail solutions for a while, and after getting info that Zoho Mail is free we switched to that platform.

In last 2 years it served us well, it had some weird spam issues and some minor outages but nothing special. But, after last months problems with slow sending e-mails to customers which are waiting Invoice we said, it is enough. We wanted to switch for almost 6 months, but now we made it.

Setup wasn't painful if you have access to DNS Register where you enter some MX and TXT records for verification and e-mail processing. Simple as 1-2-3. And no, I'm not joking at all. It was just something like follow Guide and you are on the way. Even if you use Cloudflare as DNS Register then it is simple and super easy.

Now, when I started migration I had to tweak some settings in our test environment like Security and Name which some people can make go crazy. So, most of "standard" users use default Security settings, but for me, well if it doesn't run with MFA and login confirmations from all logins then it isn't OK. And yes, name. Oh boy, the Name was problematic. Well, you need to see this - our brand is actually our e-mail From Name. Yup, single word with dot in it. Most of people would go with OK part before dot as Name and part after dot as Surname, but I found one trick which works. Trick is entering brand name as Name and for Surname - well just enter a dot like ..

After some cumbersome Data Migration problems with Zoho Mail IMAP Service which made me go crazy searching in Settings because UI and UX is not so good and crazy separate mail backup (yup, in backup every mail is their separate .eml file with attachments) at first, it go easily migrated using G Suite's integrated Data Migration Tool.

Simple and easy, except with Data Migration.

After 2+ years of usage of Zoho Mail service we had to say good bye, welcome to G Suite adventures!