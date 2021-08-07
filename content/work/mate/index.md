---
title: "Tobias Pörtner - mate"
date: 2020-12-31
draft: false
author: "Tobias Pörtner"
description: 
keywords:
type: "case-study"
project_name: "mate"
readable_date: "December 2020"
content_summary: "In my final year in university two friends and I created a cross-platform App, which helps students manage their education. The app was developed using Flutter and hooked into a SaaS backend with Firebase Firestore and Google Cloud functions."
---

<img src="images/mate-first.svg" class="case-study__img--hero" alt="hero image">

- Flutter
- Firebase
- Python
- Node.js

# mate

<p class="case-study__summary">In my final year in university two friends and I created a cross-platform App, which helps students manage their education. The app was developed using Flutter and hooked into a SaaS backend with Firebase Firestore and Google Cloud functions.</p>

Mate was a project two friends (Mathis Fandré & Ramin Nobakht) and I created as part of classes in university as well as in our spare time. I was responsible for the development, though some tasks were executed by whoever had the knowledge and time. The goal of mate was to combine several services for all of which students have to visit separate badly optimized websites in a well designed and user-friendly mobile app for iOS and Android.
An early prototype for illustration was built with Vue, but we soon switched to Flutter, a cross-platform framework made by Google on top of Dart, which is compiled into native code. I created the architecture and functionality within the app like handling data and user input, wrote tests and implemented backend services like scrapers, authentication and endpoints.

<img src="images/mate-second.png" class="case-study__img--padding" alt="banner image">

## Challenges

There are a lot of challenges when developing oneselves first „real“ mobile app. One of the big ones for us was to understand that programming mobile applications is different from programming traditional websites. While most traditional websites work in a response-request manner, state management is way more important for mobile applications. Since Flutter was relatively new, especially when we started in late 2019, tutorials and the overall community around it were not that big compared to native development or popular web technologies. Another huge challenge was to retain the information. Since our university had no public or private API‘s we were allowed to access, we had to rely on web scraping using Node.js inside Firebase Functions most of the time, which comes with a lot of overhead and isn’t as stable as RESTful API‘s are. For more complex scraping like getting content secured behind logins we used a Python script hosted inside a Google Cloud instance. To reduce our load we checked every few minutes for university news and on request for grades. We saved all the publicly available data inside a nonSQL Firebase Firestore database, any personal data was saved directly on the device.

## Review

For distribution and release we went so far as to release several versions with Apple TestFlight as well as Firebase Distribution, but ultimately decided against founding a company and releasing the final version, because we identified scraping as to inefficient and unstable of a data source. The lack of help from the university drove us to consider this project as completed with only the frontend being completely finished. Despite all these struggles this was a really fun project for all three of us. We learned about a lot of different aspects of mobile development, UI/UX-design, deployment and legal considerations around founding a company as well as privacy concerns when working with personal data.