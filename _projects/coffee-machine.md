---
layout: project
title: CASE
description: AI Coffee Machine
img: assets/img/projects/coffee-machine/CASE-1.jpeg
importance: 4
category: Previous
collaborators: ["Jon McNamara, IBM", "Dr Christos Papavassiliou, Imperial College LOndon"]
funding: ["Imperial College London", "IBM"]
---

One interesting HMI project I was able to take part in during my undergraduate degree was the creation of an internet connected, mechatronic exoskeleton for an office coffee machine. The project was set and sponsored by IBM, who at the time were interested in ways of retrofitting smart functionality to traditional household applicances.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
         {% include video.liquid path="https://www.youtube.com/embed/Es8ziBAFwhE?si=GYUoYAe5slsTWmmy" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/coffee-machine/CASE-2.jpg" title="The BlueROV2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Project Aims

- To better understand the visual impact of two strong visual perspective cues: magnification and environmental artefacs.

- To investigate (in a specific and limited way) the hypothesis that humans have an evolutionary preference for 3D environments.

- To investigate the possibility of a previously unidentified visual cue, rotation, via the Deep-Flat optical illusion.


## Non-Invasive Modification

The obvious approach to adding smart functionality to 'dumb' appliances is to add a small microcontroller to simulate the inputs from the various manually operated switches and knobs. One of the aims of this project, however, was to create a system that could be fitted by an end user, meaning that it became necessary to develop mechanical solutions to the problems of how to press a button or how to turn a dial. Reading status outputs externally was also a challenge, as bi-colour and flashing LEDs all report vital information which needed to be transmitted to the smart system. The resulting product was therefore effectively an exoskeleton around the machine, which used voice commands, a GUI and web interface for user input.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/coffee-machine/CASE-4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/coffee-machine/CASE-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/coffee-machine/CASE-GUI.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>