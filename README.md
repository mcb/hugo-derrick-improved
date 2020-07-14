# Derrick — Minimal Theme for Hugo.

Derrick is a clean minimal and fast theme for a personal blog based on the Derrick-Jekyll theme.

* * *

Table of Contents
-----------------
*   [Features](#features)
*   [Changes](#changes)
*   [Demo](#demo)
*   [Deployment](#deployment)
*   [Posts](#posts)
*   [Disqus Comments](#DisqusComments)
*   [Google Analytics](#GoogleAnalytics)
*   [Update favicon](#UpdateFavicon)
*   [Support](#Support)

* * *

### Features

* 100% responsive and clean theme

* Optimized for mobile devices

* Minimal design

* Valid HTML5 code

* Post sharing

* Supports Disqus Comments

* Supports Google Analytics

* Google Fonts


* * *

### Changes

List of changes to the original ([hugo-ported](https://github.com/mcb/hugo-derrick)) theme:

* Removed jQuery as it was only used for the simplest of tasks and had some JS errors as well as an outdated library
* Fixed issue with lists that were displayed in smaller font due to selector issue
* Changed background-image to `contain` as this would require to always have a matching size
* Cleanup of old references to unused elements
* Added Opengraph and Twitter Cards


* * *

### Demo

Check the theme in action [Demo](https://derrick-jekyll.netlify.com)

![Main page preview](https://github.com/mcb/hugo-derrick/blob/master/exampleSite/static/img/derrick-preview.jpg?raw=true)

* * *

### Deployment

Inside the folder of your Hugo site run

```
cd themes
git clone https://github.com/mcb/hugo-derrick.git
```

I would recommend checking the [Deployment Methods](https://gohugo.io/hosting-and-deployment/hugo-deploy/) page on Hugo website.

* * *

### Posts

To create a new post, you can create a new markdown file inside the posts directory with 'hugo new posts/welcome-to-hugo.md`.

      ---
      layout: post
      title: "Welcome to Hugo!"
      date: 2018-05-29 18:05:55 +0300
      image: '/img/03.jpg'
      tags: [Life]
      ---


You can set the tags and the post image.

Add post images to **/static/img/** directory.

* * *

### Disqus Comments

Derrick Theme comes with Disqus comments enabled.

Open `config.toml` file, and add your [Disqus account shortname](https://help.disqus.com/customer/portal/articles/466208).

      Comment Section (Disqus)
      disqus-identifier: # Add your shortname for Disqus Comment. For example mr-brown


That’s all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide).

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

* * *

### Google Analytics

To integrate Google Analytics, open `config.toml`, and add your Google Analytics identifier.

    # Google Analytics
    google-analytics: # Add your identifier. For example UA-99631805-1


* * *

### Update favicon

You can find the current favicon (favicon.ico) inside the theme root directory, just replace it with your new favicon.

* * *
### License

Mit License

* * *

### Support

<p>Credit for this theme goes to the original author Artem Sheludko. If you’d like to support him so he can continue to provide free content and themes you can become his sponsor on <a href="https://www.patreon.com/artemsheludko" target="_blank">Patreon</a>. <b>Thank you for your support ❤️</b><p>