---
layout: project
title: WA-LLE
description: Walking Aid - Limitless Living for the Elderly
img: /assets/img/projects/walking-aid/20191118_185511.jpg
importance: 5
category: Previous
---

During the final year of my degree, I was part of a team of students working on a robotic walking aid to improve mobility and activity levels among the elderly and disabled. This consisted of a number of 'passive' features to make moving around without a wheelchair easier. Unfortunately, course constraints prevented us from undertaking any extended user studies with our system, but the project was still a fun and interesting effort to produce a robot for a demographic that can sometimes have a fraught relationship with technology.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
         {% include video.liquid path="https://www.youtube.com/embed/URILrxyDdXs?si=Xrj1zF88HTeOOou4" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/walking-aid/walle.jpg" title="The WA-LLE" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Research Aims

- To improve activity levels among elderly and disabled people.
- To investigate technological approaches to early diagnosis of lower-limb affecting skeletal and neurological disorders.

## Obstacle Avoidance and Differential Braking

One of the key aims of the project was to improve activity among elderly people through the use of technology. One factor we identified as an inhibitor to activity is lack of confidence in being able to navigate what can be quite busy, constrained indoor environments. The smart walking aid attempts to combat this with an array of distance sensors to detect static obstacles and steer the user away from them. For safety reasons, and so as not to remove the user's sense of autonomy, we decided not to outfit the walking aid with a powered propulsion system, so I devised a system of differential braking that would steer the user away from objects in their path without actually powering the walking aid's wheels.

## Fall Detection

An important aspect of activity and wellbeing for elderly and disabled people is independence. We therefore wanted to develop systems that would make it easier for users to walk in the walking aid without needing carers to escort them. A solution to one part of this problem was the development of a fall detection system that would register if the user had fallen over and alert emergency services and/or relatives to the user's situation and location. This was done using a combination of an IMU fitted to the user's belt and a body tracking camera.

## Gait analysis

As an extension of the initial project, aimed at mobile healthcare technologies, we were challenged to develop a system that could use machine learning to warn of possible abnormalities in the user's gait that might indicate a sleletal or neurological disorder. A more advanced visual lower limb tracking system was developed for this, as well as grip force sensors in the walking aid's handles. This was used to record medical students mimicing several recognised abnormal gaits, with machine learning software then matching the symmetry and step periodicity against the user's gait. Recordings of abnormal gaits are then saved on a smartphone app for review by medical professinals, who can make a proper assessment and give an offical diagnosis if they deem it necessary.


## Project Supervision

- Professor Yiannis Demiris, Imperial College London